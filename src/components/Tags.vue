<template>
    <div class="flex flex-row items-center justify-start">
        <Tag 
            v-for="(tag, index) in props.tags" 
            :class="Number(index) > 0 ? 'ml-1.5' : ''"
            :tag="tag" />
    </div>
</template>

<script setup lang="ts">
const props = defineProps({
    tags: {
        type: Array<String>
    },
})

</script>