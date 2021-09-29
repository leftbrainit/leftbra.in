import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite'
import Pages from "vite-plugin-pages";
import Markdown from 'vite-plugin-md'
import MarkdownItContainer from 'markdown-it-container'
import matter from 'gray-matter'
import fs from 'fs-extra'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [Vue({
    include: [/\.vue$/, /\.md$/], // <--
  }), Markdown({
    wrapperComponent: 'PageLayout',
    customSfcBlocks: [],
    headEnabled: true,
    markdownItOptions: {
      typographer: true
    },
    markdownItSetup(md) {
      md.renderer.rules.fence = function (tokens, idx, options, env, self) {
        const token = tokens[idx];
        if (token.markup.includes('~')) {
          return ''
        } else {
          return '<pre><code>'
            + md.utils.escapeHtml("\n" + token.content + "\n")
            + '</code></pre>\n';
        }
      };
      md.use(require('markdown-it-bracketed-spans'))
      md.use(require('markdown-it-attrs'))
      md.use(MarkdownItContainer, 'component', {
        validate: function (params) {
          return params.trim().match(/^component\s+(.*)$/);
        },
        render: function (tokens, index) {
          var m = tokens[index].info.trim().match(/^component\s+(.*)$/);
          let propsString = ""
          if (m) {
            const nextToken = tokens[index + 1]
            const content = `---\n${nextToken.content}---\n`
            const { data } = matter(content)
            function parseStrings(data: any) {
              if (typeof data === 'string') {
                return md.renderInline(data)
              } else if (typeof data === 'object') {
                if (Array.isArray(data)) {
                  return data.map(parseStrings)
                } else {
                  let obj: any = {}
                  Object.keys(data).map(key => {
                    obj[key] = parseStrings(data[key])
                  })
                  return obj
                }
              } else {
                return data
              }
            }
            propsString = Object.keys(data).map(key => {
              const value = data[key]
              if (typeof value === 'boolean') {
                return `:${md.utils.escapeHtml(key)}="${value}"`
              } else if (typeof value === 'object' && Array.isArray(value)) {
                const parsed = parseStrings(value)
                return `:${md.utils.escapeHtml(key)}="${JSON.stringify(parsed).replace(/"/g, "'")}"`
              } else if (typeof value === 'object') {
                return `:${md.utils.escapeHtml(key)}="${JSON.stringify(value).replace(/"/g, "'")}"`
              } else if (typeof value === 'string') {
                const parsed = md.renderInline(value)
                return `${md.utils.escapeHtml(key)}="${md.utils.escapeHtml(parsed)}"`
              } else {
                return `${md.utils.escapeHtml(key)}="${md.utils.escapeHtml(value)}"`
              }
            }).join(" ")
          }
          const level = tokens[index].level
          const elementStoreName = `elementName${level}`
          if (tokens[index].nesting === 1) {
            let tagName = md.utils.escapeHtml(m[1])
            if (tagName) this[elementStoreName] = tagName
            return `<${this[elementStoreName]}${propsString ? ' ' + propsString : ''} :frontmatter="frontmatter ? frontmatter : {}">\n`;
          } else {
            return `</${this[elementStoreName]}>\n`;
          }
        }
      });
    },
  }), Pages({
    pagesDir: "src/pages",
    extensions: ['vue', 'md'],
    importMode: "sync",
    nuxtStyle: true,
    extendRoute(route) {
      const path = route.component.slice(1)
      const md = fs.readFileSync(path, 'utf-8')
      const { data } = matter(md)
      route.meta = Object.assign(route.meta || {}, { frontmatter: data })
      return route
    }
  }),
  Components({
    extensions: ['vue', 'md'],
    // dirs: ['./src/components/global'],
    dts: true,
    include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
  })],
  build: {
    rollupOptions: {
      input: {
        main: 'index.html',
        admin: 'admin/index.html'
      }
    }
  }
})
