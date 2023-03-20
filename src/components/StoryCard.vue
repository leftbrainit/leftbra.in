<template>
    <Card v-bind="story" :subtitle="story.customerName"/>
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
    tags: {
        type: Array<string>,
        required: false
    }
    
})
</script>