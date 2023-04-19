<template>
    <Card v-bind="post">
        <div class="flex flex-col md:flex-row md:gap-4">
            <Tags :tags="tags" />
            <Avatar class="" v-if="authorName" :name="authorName" />
            <!-- <div v-if="frontmatter.publishDate" class="flex flex-row items-center justify-start">
                <span class="material-symbols-outlined mr-1 opacity-60">event</span>
                <span class="opacity-90 font-medium">{{ frontmatter.publishDate }}</span>
            </div> -->
        </div>
    </Card>
</template>

<script setup lang="ts">
const post = defineProps({
    routeName: {
        type: String,
        required: true
    },
    coverImage: {
        type: String,
        required: true
    },
    authorName: {
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