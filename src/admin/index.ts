import { CMS } from "./types"
import { fetchVueComponentData, buildEditorComponent } from "./utils"

declare global {
    interface Window {
        NetlifyCmsApp: CMS;
    }
}

async function init() {
    const vueComponents = await fetchVueComponentData()
    window.NetlifyCmsApp.init();
    vueComponents.map(vueComponent => {
        const editorComponent = buildEditorComponent(vueComponent)
        window.NetlifyCmsApp.registerEditorComponent(editorComponent);
    })
}

init()