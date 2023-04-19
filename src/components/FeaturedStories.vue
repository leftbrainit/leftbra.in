<template>
    <Wrapper>
        <SectionHeading class="mt-8" :title="title"/>
        <div class="max-w-4xl text-3xl mb-3 font-medium leading-tight opacity-80 pb-8">
                    <h4 >Testhig sndfkjsdnf skdfjnsdf skdjfns fksjdnfsdfj kj Thhe adnskj askjdnas dkjnajsd kajnsdjna asjdnk</h4>

                </div>
        <ul class="grid md:grid-cols-3 gap-8 place-items-stretch">
            <StoryCard v-for="story in stories" v-bind="story" :tags="[]" />
        </ul>
    </Wrapper>
</template>

<script setup lang="ts">
import { inject } from "vue";
import { useRoute, useRouter } from "vue-router"

const route = useRoute()
const router = useRouter()

const props = defineProps({
    title: {
        type: String,
        default: "Customer Stories"
    }
})

const stories = router.getRoutes().filter(route => route.path.startsWith("/customers/")).map(route => {
    const frontmatter: any = route.meta.frontmatter ?? {}
    const title = frontmatter.title ?? ""
    const customerName = frontmatter.customerName ?? ""
    const excerpt = frontmatter.excerpt ?? ""
    const coverImage = frontmatter.coverImage ?? ""
    const tags = frontmatter.tags ?? []
    return {
        routeName: route.name,
        title,
        customerName,
        excerpt,
        coverImage,
        tags
    }
})

</script>