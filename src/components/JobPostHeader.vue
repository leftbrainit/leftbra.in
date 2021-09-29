<template>
    <div>
        <h1>Position: {{ frontmatter.position }}</h1>
        <h4>Start Date: {{ frontmatter.start }}</h4>
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