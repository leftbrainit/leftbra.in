<template>
    <div class="flex flex-col md:flex-row-reverse justify-start items-start m-auto px-5 max-w-7xl" >
        <div class="flex-grow w-full md:w-auto md:w-3xl">
                <slot name="sidebar" />
        </div>
        <div class=" " :class="props.tight ? 'max-w-4xl' : 'w-full'">
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