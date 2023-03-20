<template>
    <div class="flex justify-start items-start m-auto px-5 max-w-7xl" >
        <div class="" :class="props.tight ? 'max-w-4xl' : 'w-full'">
            <slot  />
        </div>
    </div>
</template>

<script setup lang="ts">
const props = defineProps({
    tight: {
        type: Boolean,
        default: false
    },
})

</script>