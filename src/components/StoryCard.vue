<template>
    <Card v-bind="story" />
</template>

<script setup lang="ts">
const story = defineProps({
    routeName: {
        type: String,
        required: true
    },
    coverImage: {
        type: String,
        required: true
    },
    customerName: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    excerpt: {
        type: String,
        required: false
    },
    tags: {
        type: Array<string>,
        required: false
    },
    orientation: {
        type: String,
        default: "portrait"
    },
    subtitle: {
        type: String,
        required: false
    },
    
})
</script>