<template>
    <Wrapper>
        <div class="relative flex flex-col pb-12 md:pb-24">
            <div class="grid">
                <div class="grid grid-flow-col grid-rows-3 md:grid-rows-1 gap-8 mt-4">
                    <SubFeature v-for="contactOption in contactOptions" v-bind="contactOption" colour="green" />
                </div>
            </div>
        </div>
    </Wrapper>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps({
    contactOptions: {
        type: Array,
        required: true,
        cmsConfig: {
            field: {
                label: "Contact Options",
                name: "contactOptions",
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