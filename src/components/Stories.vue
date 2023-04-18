<template>
    <Wrapper>
        <Prose class="max-w-prose">
            <slot />
        </Prose>
        <div class="mt-12">
            <div class="text-lg font-semibold w-full opacity-70 rounded-xl py-4 px-8 border-2 border-dotted border-opacity-10"
                v-if="!stories.length">No customer stories. Check back soon!</div>
            <ul v-else class="grid md:grid-cols-2 gap-8 place-items-stretch">
                <StoryCard v-for="story in stories" v-bind="story" />
            </ul>
        </div>
    </Wrapper>
</template>

<script setup lang="ts">
import { inject } from "vue";
import { useRoute, useRouter } from "vue-router"
import {getPagesByRoute} from "../utilities"
const route = useRoute()
const router = useRouter()

const props = defineProps({
    title: {
        type: String,
        default: "Vacancies"
    }
})
const stories = getPagesByRoute("/customers/")
// const stories = router.getRoutes().filter(route => route.path.startsWith("/customers/")).map(route => {
//     const frontmatter: any = route.meta.frontmatter ?? {}
//     const title = frontmatter.title ?? ""
//     const customerName = frontmatter.customerName ?? ""
//     const excerpt = frontmatter.excerpt ?? ""
//     const coverImage = frontmatter.coverImage ?? ""
//     const tags = frontmatter.tags ?? []
//     return {
//         routeName: route.name,
//         title,
//         customerName,
//         excerpt,
//         coverImage,
//         tags
//     }
// })

</script>