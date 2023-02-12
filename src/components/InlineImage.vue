<template>
    <div class="grid md:grid-cols-2 gap-12">
        <div class="grid -mt-1" :class="props.align === 'right' ? 'md:order-last' : ''">
        <img class="rounded-lg " :src="props.image" alt="">
        <span v-if="props.caption" class="-mt-8 text-sm opacity-40">{{props.caption}}</span>
        </div>
        <slot />
    </div>
</template>

<script setup lang="ts">
const props = defineProps({
    align: {
        type: String,
        default: 'left',
        cmsConfig: {
            field: {
                label: "Align Image",
                name: "align",
                widget: "select",
                default: 'left',
                options: ["left", "right"]
            }
        }
    },
    caption: {
        type: String,
        required: false,
        cmsConfig: {
            field: {
                label: "Align Image",
                name: "align",
                widget: "string",
                required: false
            }
        }
    },
    image: {
        type: String,
        required: true,
        cmsConfig: {
            field: {
                label: "Image",
                name: "image",
                widget: "string",
                required: true
            }
        }
    }
})
</script>