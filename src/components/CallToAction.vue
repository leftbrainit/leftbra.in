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
            <div class="mt-8">
                <a
                    href="mailto:hi@leftbra.in"
                    class="bg-blue-600 rounded-md px-5 py-4 text-lg font-semibold text-white shadow-md hover:shadow-xl hover:bg-blue-500"
                >Contact New Business &rarr;</a>
            </div>
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