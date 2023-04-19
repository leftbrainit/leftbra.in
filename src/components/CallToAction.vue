<template>
    <Wrapper>
        <div class="relative flex flex-col py-12 md:py-24">
            <div class="flex flex-col justify-center">
                
                <SectionHeading colour="green" :title="title" />

                <div class="max-w-3xl text-5xl mb-3 font-medium leading-tight">
                    <h4 v-html="slogan" />
                </div>
                <Prose class="max-w-prose">
                    <slot />
                </Prose>
            </div>
            <ContactNewBusinessButton :text="'Schedule A Call &rarr;'"/>
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