<template>
    <div class="mt-6 mb-8 text-center">
        <div class="w-3/5 py-2" id="stat">
            <div class="font-bold font-serif text-6xl italic">
                <h1>{{ stat }}</h1>
            </div>
        </div>
        <div class="py-2" id="tag">
            <div class="opacity-40">
                <h4>{{ tag }}</h4>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">

const props = defineProps({
    stat: {
        type: String,
        required: true
    },
    tag: {
        type: String,
        required: true
    }
})
</script>