<template>
    <div class="rounded bg-primary-500/90 text-primary-50 py-0.5 px-2 text-sm font-medium font-mono uppercase">
        {{props.tag}}
    </div>
</template>

<script setup lang="ts">
const props = defineProps({
    tag: {
        type: String
    },
})

</script>