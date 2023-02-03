<template>
    <Wrapper>
        <div class="mb-20 py-10 md:py-24 lg:py-32">
            <!-- <div class="pt-10 pb-24 md:pt-28 md:pb-40 lg:pt-36 lg:pb-"> -->
            <h1
                class="text-5xl sm:text-6xl md:text-7xl max-w-3xl font-medium sm:leading-none font-title"
                v-html="title"
            />
            <div
                class="prose prose-xl dark:prose-light max-w-3xl text-xl md:text-2xl mt-5 opacity-90 underline-links-lg md:leading-relaxed font-normal font-sans"
            >
                <slot />
            </div>
        </div>
    </Wrapper>
</template>

<script setup lang="ts">

const props = defineProps({
    title: {
        type: String,
        required: true
    }
})

</script>