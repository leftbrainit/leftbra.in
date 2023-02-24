<template>
    <Wrapper tight>
        <div v-motion-fade class="grid content-end h-1/2 mb-20 py-10 md:py-24 lg:pt-64 lg:pb-2">
            <div class="">
<!-- <div class="pt-10 pb-24 md:pt-28 md:pb-40 lg:pt-36 lg:pb-"> -->
            <h6 v-if="subtitle" v-html="subtitle" class="text-lg text-primary-500 uppercase font-mono font-medium pb-3"/>
            <h1
                class="text-5xl sm:text-6xl md:text-7xl nomax-w-3xl font-medium sm:leading-none font-title"
                v-html="title"
            />
            <div

                class="prose prose-xl dark:prose-light nomax-w-3xl text-xl md:text-2xl mt-5 opacity-90 underline-links-lg md:leading-relaxed font-normal font-sans"
            >
                <slot />
            </div>
            <div class="mt-16" v-if="props.callToActionText && props.callToActionUrl">
                <ButtonLink :text="props.callToActionText" :href="props.callToActionUrl" />
            </div>
            <div class="mt-16" v-else-if="props.callToActionText">
                <ContactNewBusinessButton :text="props.callToActionText" />
            </div>
            </div>
            
        </div>
    </Wrapper>
</template>

<script setup lang="ts">

const props = defineProps({
    title: {
        type: String,
        required: true
    },
    subtitle: {
        type: String,
        required: false
    },
    callToActionText: {
        type: String,
        required: false
    },
    callToActionUrl: {
        type: String,
        required: false
    }
})

</script>