<template>
    <Wrapper tight class="">
        <div v-motion-slide-top class=" grid content-end  py-20" :class="props.fullHeight ? 'h-[90vh]' : 'h-[40em]'">
            <div class="">
            <h6 v-if="subtitle" v-html="subtitle" class="text-lg text-primary-500 uppercase font-mono font-medium pb-3"/>
            <h1
                class="text-5xl sm:text-6xl md:text-7xl nomax-w-3xl font-medium sm:leading-none font-title"
                v-html="title"
            />
            <div

            class="prose prose-xl max-w-4xl text-xl md:text-2xl opacity-100 pt-4 pb-8 text-white/90 highlight-links-lg md:leading-relaxed font-normal font-sans">
            
                <slot />
            </div>
            <div class="" v-if="props.callToActionText && props.callToActionUrl">
                <ButtonLink :text="props.callToActionText" :href="props.callToActionUrl" />
            </div>
            <div class="" v-else-if="props.callToActionText">
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
    },
    fullHeight: {
        type: Boolean,
        default: false
    }
})

</script>