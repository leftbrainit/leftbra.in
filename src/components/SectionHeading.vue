<template>
    <div
        :id="computedId"
        class="text-xl uppercase mb-1 font-bold dark:text-gray-50 font-mono"
        :class="colour === 'green' ? 'text-primary-500 dark:text-primary-500' : colour === 'pink' ? 'text-pink-500 dark:text-pink-500' : colour === 'yellow' ? 'text-yellow-500 dark:text-yellow-500' : ''"
    >
        <h3 v-html="title" />
    </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps({
    title: {
        type: String,
        required: true
    },
    colour: {
        type: String,
        default: 'blue'
    },
    id: {
        type: String,
        required: false
    }
})
const computedId = computed(() => props.title.toLowerCase().replace(" ", "-"))

</script>