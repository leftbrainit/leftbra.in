<template>
    <div>
        <div
            class="text-5xl sm:text-6xl md:text-7xl font-bold sm:leading-none"
            v-html="frontmatter.title"
        />
        <div class="flex flex-col md:flex-row md:gap-4 mt-4">
            <div class="flex flex-row items-center justify-start">
                <div
                    class="rounded-full bg-green-400 text-gray-50 py-0.5 px-2 text-sm font-semibold uppercase"
                    v-for="(tag, index) in frontmatter.tags"
                    :class="Number(index) > 0 ? 'ml-1.5' : ''"
                >{{ tag }}</div>
            </div>
            <div class="flex flex-row items-center justify-start">
                <span class="material-icons mr-1 opacity-60">person</span>
                <span class="opacity-90 font-medium">{{ frontmatter.authorName }}</span>
            </div>
            <div class="flex flex-row items-center justify-start">
                <span class="material-icons mr-1 opacity-60">event</span>
                <span class="opacity-90 font-medium">{{ frontmatter.publishDate }}</span>
            </div>
        </div>
        <slot />
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