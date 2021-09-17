/// <reference types="vite-plugin-pages/client" />
declare module '*.md' {
    import { ComponentOptions } from 'vue'
    const Component: ComponentOptions
    export default Component
}