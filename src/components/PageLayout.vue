<template>
    <div :class="dark ? `dark` : ``">
        <div
            :class="` bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-100 min-h-screen flex flex-col antialiased`"
        >
            <Navigation class="flex-none" />
            <main class="flex-grow" :class="wrap ? 'py-12 md:py-32' : ''">
                <div
                    v-if="isSubPage && parentRoute"
                    class="max-w-5xl m-auto px-4 mb-4 text-lg opacity-60 font-semibold"
                >
                    <router-link
                        :to="{ name: parentRoute.name }"
                    >&larr; Back to {{ parentRoute.niceName }}</router-link>
                </div>
                <Wrapper v-if="wrap" class="prose prose-xl dark:prose-light dark:prose-xl">
                    <slot />
                </Wrapper>
                <div v-else>
                    <slot />
                </div>
            </main>
            <Footer class="flex-none" />
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";
import { useHead } from '@vueuse/head'
import { useRoute, useRouter, RouteRecordNormalized } from "vue-router"
import { getNiceRouteNames } from "../utilities"
import { NiceRouteName } from "../types"

export default defineComponent({
    props: {
        frontmatter: {
            type: Object,
            required: true
        },
    },
    setup({ frontmatter }) {
        const route = useRoute()
        const router = useRouter()
        const niceRouteNames = getNiceRouteNames(router.getRoutes())
        let mergedFrontmatter = frontmatter
        const dark = frontmatter.dark ?? false
        const wrap = frontmatter.wrap ?? false
        const colour = frontmatter.colour ?? 'green'
        const isSubPage = frontmatter.isSubPage ?? false
        let parentRoute: NiceRouteName | undefined = undefined
        if (isSubPage) {
            const parentPath = "/" + route.path.split("/").filter(path => path).slice(0, -1).join("/")
            const rawParentRoute = router.getRoutes().find(route => route.path === parentPath)
            const parentFrontmatter: any = rawParentRoute ? rawParentRoute.meta.frontmatter as object : {}
            parentRoute = rawParentRoute ? niceRouteNames.find(route => rawParentRoute.name === route.name) : undefined
            mergedFrontmatter = { ...mergedFrontmatter, ...parentFrontmatter }
        }
        const name = mergedFrontmatter.name ?? mergedFrontmatter.name ?? route.name ?? "Page"
        const description = mergedFrontmatter.description ?? mergedFrontmatter.excerpt
        useHead({
            title: `${name} - LeftBrain`,
            meta: [
                {
                    name: `description`,
                    content: description,
                },
            ],
        })
        return {
            frontmatter: mergedFrontmatter,
            colour,
            dark,
            wrap,
            isSubPage,
            parentRoute
        };
    }
});
</script>