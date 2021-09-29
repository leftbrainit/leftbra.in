<template>
    <div class="mt-8">
        <a
            :href="href"
            class="bg-blue-600 rounded-md px-5 py-4 text-lg font-semibold text-white shadow-md hover:shadow-xl hover:bg-blue-500"
        >{{ text }}</a>
    </div>
</template>

<script setup lang="ts">
const props = defineProps({
    href: {
        type: String,
        required: true
    },
    text: {
        type: String,
        required: true
    }
})
console.log(props)
</script>