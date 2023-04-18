<template>
    <figure v-motion v-motion-slide-visible-once-bottom class="not-prose clear-both rounded-xl bg-primary-100/50 border border-white/10 backdrop-blur-sm p-8">
        <img class="h-12 self-start pb-6" v-if="testimonial.companyLogoUrl" :src="testimonial.companyLogoUrl" alt="" />
        <blockquote class="q text-white/80" :class="testimonial.size === 'lg' ? 'text-lg leading-8' : 'text-2xl leading-10'">
            <slot class="q"><p v-html="testimonial.body"></p></slot>
            
        </blockquote>
        <figcaption class="mt-6 flex items-center gap-x-3">
            <img class="h-12 border border-black/70  w-12 rounded-full bg-gray-800" :src="testimonial.authorAvatarUrl"
                alt="" />
            <div class="text-base">
                <div class="font-semibold text-lg text-white">{{ testimonial.authorName }}</div>
                <div class=" text-gray-400">{{ testimonial.authorJobTitle }}, {{ testimonial.companyName }}
                </div>
            </div>
        </figcaption>
    </figure>
</template>

<style scoped>
blockquote > p::before {
    content: open-quote;
}
blockquote > p::after {
    content: close-quote;
}
</style>

<script setup lang="ts">
const testimonial = defineProps({
    
    companyLogoUrl: {
        type: String,
        required: false,
        cmsConfig: {
            field: {
                label: "Company Logo",
                name: "companyLogoUrl",
                widget: "image",
                required: false
            }
        }
    },
    body: {
        type: String,
        required: true,
        cmsConfig: {
            field: {
                label: "Body",
                name: "body",
                widget: "hidden"
            }
        }
    },
    authorAvatarUrl: {
        type: String,
        required: true,
        cmsConfig: {
            field: {
                label: "Author Avatar",
                name: "authorAvatarUrl",
                widget: "image",
                required: false
            }
        }
    },
    authorName: {
        type: String,
        required: true
    },
    companyName: {
        type: String,
        required: true
    },
    authorJobTitle: {
        type: String,
        required: true
    },
    position: {
        type: String,
        cmsConfig: {
            field: {
                label: "Position",
                name: "position",
                widget: "hidden",
                required: false,
            }
        }
    },
    size: {
        type: String,
        default: 'lg',
        cmsConfig: {
            field: {
                label: "Size",
                name: "size",
                widget: "select",
                default: "xl",
                options: ["lg", "xl"]
            }
        }
    },
})
</script>