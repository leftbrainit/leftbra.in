<template>
    <div class="mt-8">
        <a
            :href="props.href"
            class="transition ease-in-out duration-500 bg-primary-100 rounded-sm px-5 py-3 text-md border text-lg font-normal text-primary uppercase font-mono border-primary hover:bg-primary-500/20 hover:shadow-primary-500/30 hover:shadow-lg"
        >{{ props.text }}</a>
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
</script>