<template>
    <div  class="py-10 px-12 my-16 rounded-2xl bg-black/20 w-fit mx-auto ">
        <Wrapper>
            <SectionHeading colour="green" title="Trusted By" />
            <div class=" grid grid-cols-5 gap-12 pt-2 items-center justify-items-center">
                <img v-for="logoUrl in logoUrls" class="w-full opacity-80 h-16" :src="logoUrl" />
            </div>
        </Wrapper>
    </div>
</template>

<script setup lang="ts">
const props = defineProps({
    logoUrls: {
        type: Array<string>,
        default: [
            "/assets/logoipsum-286.svg",
            "/assets/logoipsum-242.svg",
            "/assets/logoipsum-286.svg",
            "/assets/logoipsum-242.svg",
            "/assets/logoipsum-286.svg",
        ]
    }
})
</script>