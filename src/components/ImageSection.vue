<template>
    <div class="flex flex-row w-full noborder gap-4 p-4" :class="props.portraitFirst ? '' : 'flex-row-reverse'">
        <div class="noborder rounded-lg h-[40rem] w-1/3 bg-cover bg-center" :style="`background-image: url('${props.portraitImage}')`">
        </div>
        <div class="noborder rounded-lg h-[40rem] w-2/3 bg-cover bg-center" :style="`background-image: url('${props.landscapeImage}')`">
        </div>

    </div>
</template>

<script setup lang="ts">
const props = defineProps({
    portraitImage: {
        type: String
    },
    landscapeImage: {
        type: String
    },
    portraitFirst: {
        type: Boolean,
        default: true
    }
})
</script>