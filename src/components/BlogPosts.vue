<template>
    <Wrapper>
        <div class="mt-12 pb-16">
            <div class="text-lg font-semibold w-full opacity-70 rounded-xl py-4 px-8 border-2 border-dotted border-opacity-10"
                v-if="!posts.length">No posts. Check back soon!</div>
            <ul v-else class="grid md:grid-cols-2 gap-8 place-items-stretch">
                <BlogPostCard v-for="post in posts" v-bind="post" />
            </ul>
        </div>
        <!-- <div class="pb-16" v-for="post in posts">

            <div
                class="opacity-90 text-3xl font-title sm:text-5xl md:text-5xl sm:leading-none"
            >
                <router-link
                    class="whitespace-normal"
                    :to="{ name: post.routeName }"
                >{{ post.title }}</router-link>
            </div>
            <div class="flex flex-col md:flex-row md:gap-4 mt-4 mb-4">
                <Tags :tags="post.tags" />
                <Avatar :name="post.authorName" />
                <div class="flex flex-row items-center justify-start">
                    <span class="material-symbols-outlined mr-1 opacity-60">event</span>
                    <span class="opacity-90 font-medium">{{ post.publishDate }}</span>
                </div>
            </div>
            <div class="opacity-80 prose prose-xl dark:prose-light dark:prose-xl">
                <p>{{ post.excerpt }}</p>
            </div>

            <div class="mt-2 text-lg opacity-60 font-semibold">
                <router-link :to="{ name: post.routeName }">Read more &rarr;</router-link>
            </div>
        </div> -->
    </Wrapper>
</template>

<script setup lang="ts">
import { inject } from "vue";
import { useRoute, useRouter } from "vue-router"
import {getPagesByRoute} from "../utilities"

const route = useRoute()
const router = useRouter()

const posts = getPagesByRoute("/blog/", {sort: "desc"})
const postsaa = router.getRoutes().filter(route => route.path.startsWith("/blog/")).map(route => {
    const frontmatter: any = route.meta.frontmatter ?? {}
    frontmatter.routeName = route.name ?? ""
    const title = frontmatter.title ?? ""
    const authorName = frontmatter.authorName ?? ""
    const publishDate = frontmatter.publishDate ?? ""
    const excerpt = frontmatter.excerpt ?? ""
    const tags = frontmatter.tags ?? []
    return {
        ...frontmatter,
        authorName,
        publishDate
    }
})


</script>