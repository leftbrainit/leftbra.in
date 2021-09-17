<template>
    <Wrapper>
        <div class="relative flex flex-col py-12 md:py-24">
            <div class="flex flex-col justify-center">
                <SectionHeading :colour="colour" :title="title" />
                <div class="max-w-3xl text-5xl mb-3 font-medium leading-tight">
                    <h4 v-html="slogan" />
                </div>
                <Prose class="max-w-prose">
                    <slot />
                </Prose>
            </div>
            <div class="grid">
                <div class="grid grid-flow-col grid-rows-3 md:grid-rows-1 gap-8 mt-4">
                    <SubFeature
                        v-for="subFeature in subFeatures"
                        v-bind="subFeature"
                        :colour="colour"
                    />
                </div>
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
    },
    colour: {
        type: String,
        default: 'blue',
        cmsConfig: {
            field: {
                label: "Colour",
                name: "colour",
                widget: "select",
                options: ["green", "pink", "yellow"]
            }
        }
    },
    subFeatures: {
        type: Array,
        required: false,
        cmsConfig: {
            field: {
                label: "SubFeatures",
                name: "subFeatures",
                widget: "list",
                fields: [
                    {
                        label: "Title",
                        name: 'title',
                        widget: "string"
                    },
                    {
                        label: "Material Icon Name",
                        name: 'icon',
                        widget: "string",
                        hint: 'Choose from https://fonts.google.com/icons?icon.query=question'
                    },
                    {
                        label: "Body",
                        name: 'body',
                        widget: "markdown"
                    }
                ]
            }
        }
    }
})
</script>