<template>
    <Wrapper>
        <div class="pb-16" v-for="post in posts">
            <div
                class="opacity-90 text-4xl md:max-w-3xl sm:text-5xl md:text-6xl font-bold sm:leading-none"
            >
                <router-link
                    class="whitespace-normal"
                    :to="{ name: post.routeName }"
                >{{ post.title }}</router-link>
            </div>
            <div class="flex flex-col md:flex-row md:gap-4 mt-4 mb-4">
                <div class="flex flex-row items-center justify-start">
                    <div
                        class="rounded-full bg-green-400 text-gray-50 py-0.5 px-2 text-sm font-semibold uppercase"
                        v-for="(tag, index) in post.tags"
                        :class="Number(index) > 0 ? 'ml-1.5' : ''"
                    >{{ tag }}</div>
                </div>
                <div class="flex flex-row items-center justify-start">
                    <span class="material-icons mr-1 opacity-60">person</span>
                    <span class="opacity-90 font-medium">{{ post.authorName }}</span>
                </div>
                <div class="flex flex-row items-center justify-start">
                    <span class="material-icons mr-1 opacity-60">event</span>
                    <span class="opacity-90 font-medium">{{ post.publishDate }}</span>
                </div>
            </div>
            <div class="opacity-80 prose prose-xl dark:prose-light dark:prose-xl">
                <p>{{ post.excerpt }}</p>
            </div>

            <div class="mt-2 text-lg opacity-60 font-semibold">
                <router-link :to="{ name: post.routeName }">Read more &rarr;</router-link>
            </div>
        </div>
    </Wrapper>
</template>

<script setup lang="ts">
import { inject } from "vue";
import { useRoute, useRouter } from "vue-router"

const route = useRoute()
const router = useRouter()

const posts = router.getRoutes().filter(route => route.path.startsWith("/blog/")).map(route => {
    console.log(route)
    const frontmatter: any = route.meta.frontmatter ?? {}
    frontmatter.routeName = route.name ?? ""
    const title = frontmatter.title ?? ""
    const authorName = frontmatter.authorName ?? ""
    const publishDate = frontmatter.publishDate ?? ""
    const excerpt = frontmatter.excerpt ?? ""
    const tags = frontmatter.tags ?? []
    return {
        ...frontmatter
    }
})


</script>