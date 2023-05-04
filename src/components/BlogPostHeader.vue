<template>
    <div class="">
        <div
        class="text-3xl sm:text-6xl md:text-7xl font-medium sm:leading-none font-title"
        v-html="frontmatter.title"
        />
        
        <div class="flex flex-col md:flex-row md:gap-4 mt-3 mb-4 ">
            <Tags :tags="frontmatter.tags" />
            <!-- <Avatar v-if="frontmatter.authorName" :name="frontmatter.authorName" /> -->
            <!-- <div v-if="frontmatter.publishDate" class="flex flex-row items-center justify-start">
                <span class="material-symbols-outlined mr-1 opacity-60">event</span>
                <span class="opacity-90 font-medium">{{ frontmatter.publishDate }}</span>
            </div> -->
        </div>
        <div class="mt-6 w-full rounded-2xl h-64 md:h-[600px] bg-cover bg-center" :style="`background-image: url(${frontmatter.coverImage});`" v-if="frontmatter.coverImage">
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