<template>
    <Wrapper>
        <div class="relative flex flex-col py-12 md:py-24">
            <div class="flex flex-col justify-center">
                <div
                    :id="id"
                    class="text-xl uppercase mb-1 font-extrabold text-blue-600 dark:text-gray-50"
                >
                    <h3 v-html="title" />
                </div>
                <div class="max-w-3xl text-5xl mb-3 font-medium leading-tight">
                    <h4 v-html="slogan" />
                </div>
                <Prose class="max-w-prose">
                    <slot />
                </Prose>
            </div>
            <ContactNewBusinessButton :text="'Contact New Business &rarr;'"/>
        </div>
    </Wrapper>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps({
    title: {
        type: String,
        required: true
    },
    slogan: {
        type: String,
        required: true
    }
})
const id = computed(() => props.title.toLowerCase().replace(" ", "-"))
</script>