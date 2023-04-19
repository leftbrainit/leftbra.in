<template>
    <div class="flex flex-col">
        <div class="w-3/5 py-3">
            <div
                :class="colour === 'green' ? 'bg-primary-500' : colour === 'pink' ? 'bg-pink-500' : colour === 'yellow' ? 'bg-yellow-500' : 'bg-blue-600 dark:bg-gray-400'"
                class="h-14 w-14 text-white  dark:text-gray-900 flex items-center justify-center rounded-xl"
            >
                <div class="material-symbols-outlined">{{ icon }}</div>
            </div>
        </div>
        <div class="text-2xl font-bold mb-2">
            <h2>{{ title }}</h2>
        </div>
        <div
            class="prose prose-md dark:prose-light sm:leading-relaxed opacity-80 underline-links"
            v-html="body ? body: excerpt"
        />
    </div>
</template>

<script setup lang="ts">
const props = defineProps({
    title: {
        type: String,
        required: true
    },
    icon: {
        type: String,
        default: 'emoji_emotions'
    },
    colour: {
        type: String
    },
    body: {
        type: String,
        required: false
    },
    excerpt: {
        type: String,
        required: false
    }
})
</script>