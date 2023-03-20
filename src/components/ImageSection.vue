<template>
    <div class="flex flex-col md:flex-row w-full noborder gap-8 p-8 overflow-x-hidden overflow-y-visible" :class="props.portraitFirst ? '' : 'md:flex-row-reverse'">
        <div 
            v-motion
            :initial="{
                opacity: 0,
                y: props.portraitFirst ? -20 : 20,
                x: props.portraitFirst ? -100 : 100,
                scale: 0.9
            }"
            :visibleOnce="{
                opacity: 1,
                x: 0,
                y: 0,
                transition: springTransition,
                scale: 1
            }"
            class="noborder rounded-lg h-96 md:h-[35rem] md:w-1/3 bg-cover bg-center" 
            :style="`background-image: url('${props.portraitImage}')`"
            >
        </div>
        <div v-motion
            :initial="{
                opacity: 0,
                y: props.portraitFirst ? 20 : -20,
                x: props.portraitFirst ? 100 : -100,
                scale: 0.9
            }"
            :visibleOnce="{
                opacity: 1,
                x: 0,
                y: 0,
                transition: springTransition,
                scale: 1
            }"
            class="noborder rounded-lg h-96 w-full mt-12 md:h-[35rem] md:w-2/3 bg-cover bg-center" :style="`background-image: url('${props.landscapeImage}')`">
        </div>

    </div>
</template>

<script setup lang="ts">
import { springTransition } from "../utilities"

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