<template>
<div v-if="capability.id" :id="capability.id"></div>
        <Wrapper class="py-12  md:py-24 lg:py-40">
            <div>
            <div class=" relative  flex items-start flex-col md:flex-row  gap-8 noborder-b border-gray-500/50" :class="props.imageAlign === 'left' ? 'md:flex-row-reverse' : ''">
                <div class="flex flex-col md:w-1/2 justify-center">
                    <SectionHeading colour="green" :title="capability.title" />
                    <div class="max-w-3xl text-5xl mb-3 font-medium leading-tight font-title">
                        <h4 v-html="props.slogan" />
                    </div>
                    <Prose class="max-w-prose">
                        <slot />
                    </Prose>
                    <div class=" mt-5">
                        <!-- <div class="not-prose text-lg font-semibold text-white/50  mt-2">Featured Services</div> -->
                        <div v-for="service in services">
                        <router-link :to="{ name: service.routeName }">
                            <li class="my-3 py-1 flex items-center group scale-100 transition-all hover:scale-105 border-l-2 border-primary-500 pl-3" >
                                <div v-if="service.icon" class=" material-symbols-outlined text-white/50 group-hover:text-white/70">{{ service.icon }}</div>
                                <div>
                                
                                <div class="pl-3 text-xl font-semibold text-white/70 group-hover:text-white/90">
                                    {{ service.title }}
                                </div>
                            </div>
                            <div
                                class="text-xl  group-hover:pl-2 scale-50 group-hover:scale-100 font-medium opacity-0 group-hover:opacity-100 transition-all text-right">
                                &rarr;</div>
                        </li>
                        </router-link>
                        </div>
                    </div>
                    <!-- <StoryCard v-bind="allStories[1]" orientation="portrait" subtitle="Customer Story" excerpt=""/> -->
                    <!--<div class="grid max-w-3xl">
                     <div class="grid grid-flow-row grid-cols-1 md:grid-cols-1 gap-4 mt-4">
                        <li v-for="service in services" class=" w-full flex flex-col items-start pb-2  border-white/20 nobg-primary-100/50 rounded-xl ">
                        <router-link class="w-full" :to="{ name: service.routeName }">
                            <div class="flex w-full items-start group border-l border-white/10">
                                <div class="flex-grow pl-5 py-3">
                                    <div class="text-xl font-semibold text-white/80 group-hover:text-white/90">{{service.title}}<div class="material-symbols-outlined mt-2 nobg-white/20 text-white/40 group-hover:text-white/60 pr-2">{{service.icon}}</div></div>
                                    <div class="not-prose leading-normal mt-1 text-lg font-medium text-white/70 max-w-lg group-hover:text-white/90">{{service.excerpt}}</div>
                                </div>
                            </div>    
                        </router-link>
                    </li>
    
                    </div> 
                </div> -->
                </div>
                <div class=" rounded-lg h-96 md:h-[25rem] w-full md:w-1/2 bg-cover bg-center" :style="`background-image: url(${capability.backgroundImageUrl})`"></div>
                
                <!-- <div class="grid">
                    <div class="grid grid-flow-row grid-cols-1 md:grid-cols-3 gap-8 mt-4">
                        <SubFeature
                            v-for="service in services"
                            v-bind="service"
                            colour="green"
                        />
                    </div>
                </div> -->
            </div>
            <!-- <div class="flex flex-row   pt-12 w-full" :class="props.imageAlign === 'left' ? ' justify-end' : 'justify-start'">
                <div class="">
                    <StoryCard v-bind="allStories[1]" orientation="landscape" subtitle="Customer Story" />
                </div>
            </div> -->
        </div>
        </Wrapper>
</template>

<script setup lang="ts">
import { inject } from "vue";
import { CapabilitiesKey } from "../symbols"
import { useRoute, useRouter } from "vue-router"
import {getPagesByRoute} from "../utilities"
import StoriesReadNext from "./StoriesReadNext.vue";

const router = useRouter()

const props = defineProps({
    capability: {
        type: String,
        required: true
    },
    slogan: {
        type: String,
        required: true
    },
    imageAlign: {
        type: String,
        required: true
    },
    backgroundImageUrl: {
        type: String,
        required: false
    }
})

const {capabilities} = inject(CapabilitiesKey)

const capability = capabilities.find(i => i.id === props.capability)

if (!capabilities) {
throw new Error(`Could not resolve capabilities data`);
}

const allServices = getPagesByRoute("/services/")
const allStories = getPagesByRoute("/customers/")

const storyTest = allStories[0]

const services = allServices.filter(service => service.capability === props.capability)
// const services = capability.services.map(slug => allServices.find(service => service.path.includes(slug)))

</script>