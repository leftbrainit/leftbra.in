<template>
    <div class="bg-purple-800 smy-20  py-12 md:py-24 overflow-hidden" :style="`background-image: url(/assets/wave-1.png);background-size: 100%; background-position: top; background-repeat: no-repeat;`">

        <Wrapper>
            <div
                class="prose prose-xl max-w-4xl text-xl md:text-2xl opacity-100 pb-8 text-white highlight-links-lg md:leading-relaxed font-normal font-sans">
                <slot />
            </div>
        </Wrapper>
        <Wrapper>
            <div class="noborder-2 border-green-500 pb-16 ">
                <div class="noborder border-green-500 nooverflow-hidden min-h-[45em] flex items-center">
                    <div v-for="(feature, index) in features" :class="index === selected ? 'opacity-100' : ''" class="transition-all opacity-0 z-20 noshadow-2xl noshadow-black rounded-tl-xl rounded-bl-2xl absolute right-0 ml-96 overflow-hidden w-[65%] h-[45em]" :style="`background-image: url(${feature.imageUrl}); background-size: auto 100%; background-position: left; background-repeat: no-repeat;`">
                        <!-- <img class="nw-[80em] h-fit rounded-xl ml-8" :src="features[selected].imageUrl" alt=""> -->
                    </div>
                    <div class="noborder border-red-500">
                        <div v-for="(feature, index) in features"
                            class=" cursor-pointer transition-all z-10 rounded-lg border border-white/0 -ml-8 px-8 scale-100 py-5 my-3 pr-96 hover:border hover:scale-105 hover:border-white/20 hover:bg-white/10"
                            :class="index === selected ? ' border-white/20 bg-white/10' : 'bg-white/0'"
                            >
                            
                            <div @click="selected = index" class="cursor-pointer">
                                <div class="flex items-center content-center gap-4">
                                    <h2 class=" uppercase  text-white font-mono font-semibold text-lg">{{ feature.title }}</h2><div v-if="feature.new" class=" py-0.5 px-1 text-xs  font-bold bg-yellow-500 text-purple-800 rounded-sm">NEW</div>

                                </div>
                                <p class="max-w-sm text-md font-medium opacity-90 ">{{ feature.description }}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Wrapper>
    </div>
</template>

<script setup lang="ts">
import {ref} from "vue"
const selected = ref(0)
const features = [
    {
        title: "Track Yo Shit",
        description: "Our strategy team make all the things that are strategic easy to understand fun and funky and stupid. You’re stupid.",
        imageUrl: "/assets/dashboard-1.png"
    },
    {
        title: "Check Yo Bizniss",
        description: "Our strategy team make all the things that are strategic easy to understand fun and funky and stupid. You’re stupid.",
        imageUrl: "/assets/dashboard-2.png",
        new: true
    },
    {
        title: "Monitor Yo Tings",
        description: "Our strategy team make all the things that are strategic easy to understand fun and funky and stupid. You’re stupid.",
        imageUrl: "/assets/dashboard-3.png"
    },
    {
        title: "Check Yo Bizniss",
        description: "Our strategy team make all the things that are strategic easy to understand fun and funky and stupid. You’re stupid.",
        imageUrl: "/assets/dashboard-3.png"
    }
]
</script>