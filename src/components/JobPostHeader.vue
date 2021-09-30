<template>
    <div>
        <div
            class="text-5xl sm:text-6xl md:text-7xl font-bold sm:leading-none"
            v-html="frontmatter.position"
        />
        <div class="flex flex-col md:flex-row md:gap-4 mt-4">
            <div class="flex flex-row items-center justify-start">
                <span class="material-icons mr-1 opacity-60">event</span>
                <span
                    class="opacity-90 font-medium"
                >{{ frontmatter.startDate ? frontmatter.startDate : "Flexible" }}</span>
            </div>
            <div class="flex flex-row items-center justify-start">
                <span class="material-icons mr-1 opacity-60">money</span>
                <span
                    class="opacity-90 font-medium"
                >{{ frontmatter.salaryRange ? frontmatter.salaryRange : "Flexible" }}</span>
            </div>
            <div class="flex flex-row items-center justify-start">
                <span class="material-icons mr-1 opacity-60">place</span>
                <span
                    class="opacity-90 font-medium"
                >{{ frontmatter.location ? frontmatter.location : "Remote" }}</span>
            </div>
        </div>
        <!-- {{ frontmatter }} -->
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
    }
})
</script>