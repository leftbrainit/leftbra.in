<template>
    <div v-motion
        :initial="{
          opacity: 0,
          scale:0.8
        }"
        :enter="{
          opacity: 1,
          scale:1
        }" class="bg-center bg-cover" :style="`background-image: url(/assets/gradient-4.svg)`">
    <!-- <div class="bg-repeat" :style="`background-image: url(/assets/noise-1.svg)`"> -->
    <div class=" smy-20  py-12 md:py-24 overflow-hidden bg-cover" :style="`background-image: url(/assets/globe-2.png);background-attachment: fixed;`">
        
        <Wrapper>
            <div
                class="prose prose-xl max-w-4xl text-xl md:text-2xl opacity-100 pb-8 text-white highlight-links-lg md:leading-relaxed font-normal font-sans">
                <slot />
            </div>
        </Wrapper>
        <ul class="flex flex-row lg:hidden overflow-x-auto px-2 gap-1">
                    <li v-for="(feature, index) in features" @click="selected = index" class="whitespace-nowrap   text-white  font-medium text-lg px-3 py-1.5 cursor-pointer hover:bg-white/20 border hover:border-white/20 hover:backdrop-blur-sm rounded-md" :class="index === selected ? 'bg-white/20  border-white/20 backdrop-blur-sm' : 'border-white/0'">
                        {{ feature.title }}
                    </li>
                </ul>
        <Wrapper>
            <div class="flex flex-col lg:hidden">
                
                <div>
                    <div class="text-xl max-w-xl mt-8 mb-6 leading-normal">
                        {{ selectedFeature.description }}
                    </div>
                    <div class="w-[150%]">
                        <img class="w-full rounded-xl" :src="selectedFeature.imageUrl" alt="" />
                    </div>
                    <!-- <div v-for="(feature, index) in features" :class="index === selected ? 'opacity-100' : ''" class="transition-all opacity-0 z-20 noshadow-2xl noshadow-black rounded-tl-xl rounded-bl-2xl absolute right-0 md:ml-96 lg:ml-[10] overflow-hidden md:w-[65%] lg:w-[55%] h-[45em]" :style="`background-image: url(${feature.imageUrl}); background-size: auto 100%; background-position: left; background-repeat: no-repeat;`">
                    </div> -->
                </div>
            </div>
            <div class="hidden lg:flex border-green-500 pb-16 ">
                <div class="noborder border-green-500 nooverflow-hidden min-h-[45em] flex items-center">
                    <div v-for="(feature, index) in features" :class="index === selected ? 'opacity-100' : ''" class="transition-all opacity-0 z-20 noshadow-2xl noshadow-black rounded-tl-xl rounded-bl-2xl absolute right-0 md:ml-96 lg:ml-[10] overflow-hidden md:w-[65%] lg:w-[55%] h-[45em]" :style="`background-image: url(${feature.imageUrl}); background-size: auto 100%; background-position: left; background-repeat: no-repeat;`">
                        <!-- <img class="nw-[80em] h-fit rounded-xl ml-8" :src="features[selected].imageUrl" alt=""> -->
                    </div>
                    <div class="noborder border-red-500 pl-8 2xl:pl-0">
                        <div v-for="(feature, index) in features"
                            class=" cursor-pointer  transition-all z-10 rounded-lg  -ml-8 px-8 scale-100 py-5 my-3 pr-96 hover:backdrop-blur-sm hover:border hover:scale-105 hover:border-white/20 hover:bg-white/10"
                            :class="index === selected ? 'border border-white/20 bg-white/10 backdrop-blur-sm' : 'bg-white/0'"
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
    <!-- </div> -->
    </div>
</template>

<script setup lang="ts">
import {ref, computed} from "vue"
const selected = ref(0)
const selectedFeature = computed(() => features[selected.value])
const features = [
    {
        title: "Everything In One Place",
        description: "View, organise and understand your users, devices, services and infrastructure in our Dashboard.",
        imageUrl: "/assets/dashboard-01.png"
    },
    {
        title: "Get Help Fast",
        description: "Chat live with our team, read help articles and manage your devices and services from the comfort of your desktop.",
        imageUrl: "/assets/dashboard-help-fast.png"
    },
    {
        title: "Share Knowledge",
        description: "Company admins and tech people can collaborate with the LeftBrain team on documentation, and share help articles with their teams.",
        imageUrl: "/assets/dashboard-02.png",
        new: true
    },
    {
        title: "Manage Your Account",
        description: "View and pay your invoices, add or remove services and manage your account, in our billing portal.",
        imageUrl: "/assets/dashboard-billing.png"
    }
]
</script>