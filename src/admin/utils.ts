import { EditorComponentOptions, VueComponentData } from "./types"
import yaml from 'js-yaml'

export async function fetchVueComponentData(): Promise<VueComponentData[]> {
    const componentsImport = import.meta.glob('../components/*.vue')
    const components = await Promise.all(Object.keys(componentsImport).map(async path => {
        const module = await componentsImport[path]()
        const component = module['default']
        const parts = path.split("/")
        const filename = parts[parts.length - 1]
        const componentName = filename.split('.')[0]
        const props: VueComponentData["props"] = component.props ? Object.keys(component.props).filter(propName => propName !== 'frontmatter').map(propName => {
            const typeOutput = component.props[propName].type()
            let type: string = typeof typeOutput
            if (type === 'object' && Array.isArray(typeOutput)) type = 'array'
            const prop = { ...component.props[propName], name: propName, type }
            return prop
        }) : []
        return {
            name: componentName,
            props
        }
    }))
    return components
}

export function buildEditorComponent(vueComponentData: VueComponentData) {
    const fields: any[] = [
        { name: 'body', label: 'Body', widget: 'markdown', minimal: true, modes: ["rich_text"] }
    ]
    vueComponentData.props.map(prop => {
        const defaultField = {
            name: prop.name, label: prop.name, widget: 'string'
        }
        if (prop.cmsConfig && !prop.cmsConfig.hide) {
            if (prop.cmsConfig.field) {
                fields.push({ ...defaultField, ...prop.cmsConfig.field, name: prop.name })
            } else {
                fields.push(defaultField)
            }
        } else {
            fields.push(defaultField)
        }
    })
    const component: EditorComponentOptions = {
        id: vueComponentData.name.toLowerCase(),
        label: vueComponentData.name,
        fields,
        pattern: new RegExp(`^::: component ${vueComponentData.name}$\\s*?~~~\n(.*?)~~~\n(.*?):::$`, 'ms'),
        fromBlock: function (match: any) {
            const body = match[2]
            const rawProps: string = match[1]
            const rawData: any = yaml.load(rawProps)
            const data: any = {}
            vueComponentData.props.map(prop => {
                const value = rawData[prop.name] ?? ""
                data[prop.name] = value
            })
            return {
                ...data,
                body
            };
        },
        toPreview: function (data: string) {
            return `<pre><code>${data}</code></pre>`
        },
        toBlock: function (obj: any) {
            const data: any = {}
            vueComponentData.props.map(prop => {
                data[prop.name] = obj[prop.name]
            })
            const propsYAML = yaml.dump(data, { forceQuotes: true, quotingType: '"' })
            return `::: component ${vueComponentData.name}
~~~
${propsYAML.trim()}
~~~
${obj.body}
:::`;
        },
    }
    return component
}