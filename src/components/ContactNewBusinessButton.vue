<template>
    <div  class="">
        <a  id="schedule-call-button"
            @click="startNewBusinessIntercomConversation"
            :class="`bg-primary-100 text-primary hover:bg-primary-500/20 border-primary hover:shadow-primary-500/30`"
            class="cursor-pointer whitespace-nowrap inline-block transition ease-in-out duration-300 rounded-sm px-5 py-2 text-md border text-lg font-normal  uppercase font-mono    hover:shadow-lg"
        >{{ props.text }}</a>
    </div>
</template>

<script setup lang="ts">
import {useRoute} from "vue-router"
const route = useRoute()
const props = defineProps({
    text: {
        type: String,
        default: "Contact New Business &rarr;"
    },
    color: {
        type: String,
        default: "primary"
    }
})

const startNewBusinessIntercomConversation = () => {
    console.log("Contact New Business button pressed 🎉")
}
</script>