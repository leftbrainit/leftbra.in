<template>
    <figure v-motion v-motion-slide-visible-once-bottom class="rounded-xl bg-primary-100/50 border border-white/10 backdrop-blur-sm p-8">
        <img class="w-18 self-start pb-6" v-if="testamonial.position === 'featured'" :src="testamonial.companyLogoUrl" alt="" />
        <blockquote class="text-lg leading-8 text-white/80">
            <p class="">“{{ testamonial.body }}”</p>
            <div>

            </div>
        </blockquote>
        <figcaption class="mt-10 flex items-center gap-x-3">
            <img class="h-12 border border-black/70  w-12 rounded-full bg-gray-800" :src="testamonial.authorAvatarUrl"
                alt="" />
            <div class="text-base">
                <div class="font-semibold text-lg text-white">{{ testamonial.authorName }}</div>
                <div class=" text-gray-400">{{ testamonial.authorJobTitle }}, {{ testamonial.companyName }}
                </div>
            </div>
        </figcaption>
    </figure>
</template>

<script setup lang="ts">
const testamonial = defineProps({
    position: {
        type: String
    },
    companyLogoUrl: {
        type: String,
        required: false
    },
    body: {
        type: String,
        required: true
    },
    authorAvatarUrl: {
        type: String,
        required: true
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
    }
})
</script>