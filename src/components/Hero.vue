<template>
    <Wrapper>
        <div class="pt-10 pb-24 md:pt-28 md:pb-40">
            <!-- <div class="py-16 md:py-36"> -->
            <h1
                class="text-5xl sm:text-6xl md:text-7xl max-w-3xl font-bold sm:leading-none"
                v-html="title"
            />
            <div
                class="prose prose-xl dark:prose-light max-w-3xl text-xl md:text-2xl mt-5 opacity-90 underline-links-lg md:leading-relaxed"
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