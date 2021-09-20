<template>
    <div class="bg-gray-800 text-gray-50">
        <Wrapper>
            <footer class="divide-y divide-white divide-opacity-20 mt-2">
                <div class="flex flex-col md:flex-row items-start w-full py-5">
                    <div class="flex-none">
                        <router-link to="/">
                            <Logo class="text-white w-12 mt-2 mb-8 md:mr-24" />
                        </router-link>
                    </div>
                    <div class="flex-grow w-full">
                        <div class="grid grid-flow-col grid-rows-2 md:grid-rows-1 max-w-4xl">
                            <div
                                class="mb-8"
                                v-for="category in footer"
                                :key="`footer-${category.name}`"
                            >
                                <h3
                                    class="uppercase text-sm mb-3 font-bold tracking-wider text-gray-400"
                                >{{ category.name }}</h3>
                                <ul>
                                    <li
                                        v-for="item in category.items"
                                        :key="`footeritem-${JSON.stringify(item)}`"
                                        class="text-gray-300 mb-2 text-md font-medium"
                                    >
                                        <router-link
                                            v-if="item.type === 'page'"
                                            :to="{ name: item.to }"
                                        >{{ item.title }}</router-link>
                                        <a v-else :href="item.to">{{ item.title }}</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="py-5 md:flex md:items-center md:justify-between">
                    <div class="flex space-x-6 md:order-2">
                        <a
                            v-for="socialLink in socialLinks"
                            :key="JSON.stringify(socialLink)"
                            :href="socialLink.url"
                            class="text-gray-400 hover:text-gray-300"
                        >
                            <span class="sr-only">{{ socialLink.title }}</span>
                            <div class="h-6 w-6" v-html="socialLink.image" />
                        </a>
                    </div>
                    <p
                        class="mt-8 text-base text-gray-400 md:mt-0 md:order-1"
                    >&copy; 2021 LeftBrain Ltd. All rights reserved.</p>
                </div>
            </footer>
        </Wrapper>
    </div>
</template>

<script setup lang="ts">
import { inject } from "vue";
import { SiteConfigKey } from "../symbols"
import { useRouter } from "vue-router"

const router = useRouter()
const routes = router.getRoutes()
const siteConfig = inject(SiteConfigKey)
if (!siteConfig) {
    throw new Error(`Could not resolve siteConfig`);
}

const routesWithNiceNames = routes.map(route => {
    const frontmatter: any = route.meta.frontmatter
    return {
        name: route.name as string,
        niceName: frontmatter.name as string
    }
})

const footer = siteConfig.footerCategories.map(category => {
    let items = category.externalUrls.map(externalUrl => {
        return {
            to: externalUrl.url,
            title: externalUrl.title,
            type: 'external'
        }
    })
    const pages = category.pages.map(routeName => {
        const route = routesWithNiceNames.find(route => routeName === route.name)
        items.push({
            to: routeName,
            title: route ? route.niceName : routeName,
            type: 'page'
        })
    })
    return {
        name: category.name,
        items: items.sort((a, b) => {
            if (a.title < b.title)
                return -1;
            if (a.title > b.title)
                return 1;
            return 0;
        })
    }
})

const copyrightNotice = siteConfig.copyrightNotice

const socialLinks = siteConfig.socialLinks

</script>