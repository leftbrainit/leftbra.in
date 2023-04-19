<template>
     <!-- <div class="bg-center bg-cover" :style="`background-image: url(/assets/gradient-5.svg);background-attachment: fixed;`"> -->
    <!-- <div class="bg-repeat" :style="`background-image: url(/assets/noise-1.svg);background-attachment: fixed;`"> -->
        <div class="" :style="`background-image: url(/assets/wave-01.png);background-size: auto 100%; background-position: left; background-repeat: no-repeat;`">

    <Wrapper class=" py-12 md:py-24">
        <div
        class="prose prose-xl max-w-4xl text-xl md:text-2xl text-white/90 pt-16 pb-12 highlight-links-lg md:leading-relaxed font-normal font-sans">
            <slot />
        </div>
        <div class="grid md:grid-cols-2 gap-14">
            <CapabilityCard v-for="capability in capabilities" v-bind="capability" />
        </div>
    </Wrapper>
    </div>
    <!-- </div> -->
</template>

<script setup lang="ts">


import { inject } from "vue";
import { CapabilitiesKey } from "../symbols"


const {capabilities} = inject(CapabilitiesKey)

if (!capabilities) {
throw new Error(`Could not resolve capabilities data`);
}


</script>