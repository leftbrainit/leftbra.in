import { CMS } from "./types"
import { fetchVueComponentData, buildEditorComponent } from "./utils"

declare global {
    interface Window {
        CMS: CMS;
    }
}

async function init() {
    const vueComponents = await fetchVueComponentData()
    window.CMS.init();
    vueComponents.map(vueComponent => {
        const editorComponent = buildEditorComponent(vueComponent)
        window.CMS.registerEditorComponent(editorComponent);
    })
}

init()