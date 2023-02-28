<template>
    <div class="flex flex-row items-start">
        <div class=" mr-3 mt-1.5">
            <!-- <div
                :class="colour === 'green' ? 'bg-primary-500' : colour === 'pink' ? 'bg-pink-500' : colour === 'yellow' ? 'bg-yellow-500' : 'bg-blue-600 dark:bg-gray-400'"
                class="h-14 w-14 text-white  dark:text-gray-900 flex items-center justify-center rounded-xl"
            >
                <div class="material-symbols-outlined">{{ icon }}</div>
            </div> -->
            <div class="material-symbols-outlined text-primary-500">{{ icon }}</div>
        </div>
        <div>
            <div class="text-2xl font-title">
                <h2>{{ title }}</h2>
            </div>
            <div
                class="prose prose-md dark:prose-light sm:leading-relaxed opacity-80 underline-links"
                v-html="excerpt"
            />
            <!-- <div
                                class="hidden text-md mt-1.5 md:block flex-none text-white/60 font-semibold">
                                Read more <span class="group-hover:pl-2  transition-all">&rarr;</span></div> -->
        </div>
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
    excerpt: {
        type: String,
        required: true
    }
})
</script>