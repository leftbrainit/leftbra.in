<template>
    <div>
        <div
        class="text-5xl sm:text-6xl md:text-7xl font-medium sm:leading-none font-title"
        v-html="frontmatter.title"
        />
        <div class="flex flex-col md:flex-row md:gap-4 mt-3 mb-4">
            <Tags :tags="frontmatter.tags" />
            <!-- <div class="flex flex-row items-center justify-start">
                <Tag v-for="(tag, index) in frontmatter.tags" :tag="tag"/>
                <div
                    class="rounded bg-primary-500/90 text-primary-50 py-0.5 px-2 text-sm font-mono uppercase"
                    v-for="(tag, index) in frontmatter.tags"
                    :class="Number(index) > 0 ? 'ml-1.5' : ''"
                >{{ tag }}</div>
            </div> -->
            <Avatar :name="frontmatter.authorName" />
            <div class="flex flex-row items-center justify-start">
                <span class="material-symbols-outlined mr-1 opacity-60">event</span>
                <span class="opacity-90 font-medium">{{ frontmatter.publishDate }}</span>
            </div>
        </div>
        <div class="flex flex-col md:flex-row md:gap-4 -mb-10 -mt-10" v-if="frontmatter.image">
            <img :src="frontmatter.image" :alt="frontmatter.title">
        </div>
        <slot class="" />
    </div>
</template>

<script setup lang="ts">
const props = defineProps({
    frontmatter: {
        type: Object,
        default: {},
        cmsConfig: {
            hide: true
        }
    },
})
</script>