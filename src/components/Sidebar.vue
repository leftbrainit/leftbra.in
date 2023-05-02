<template>
    <div class="md:pl-8 w-full">
        <div class="not-prose sticky top-8 bg-black/10 border border-white/10 rounded-xl divide-y divide-white/10 w-full mt-10">
            <div v-if="frontmatter.companyLogoUrl" class="items-center justify-center p-12 ">
                <img class="min-h-12 max-h-12  block w-full"  :src="frontmatter.companyLogoUrl" alt="" />
            </div>
            <!-- <div v-if="frontmatter.authorName" class="items-center justify-center p-4">
                <avatar :name="frontmatter.authorName"/>
            </div> -->
            <div v-if="frontmatter.publishDate" class="flex flex-row items-center justify-start  p-4">
                <span class="material-symbols-outlined mr-1 opacity-60">event</span>
                <span class="not-prose leading-tight text-[1rem] font-medium text-white/70">{{ frontmatter.publishDate }}</span>
            </div>
            <div class="p-4"  v-if="capability">
                <router-link :to="{ name: 'services', hash: '#' + capability.id }">
                        <div class="flex w-full items-center group">
                            <div class="material-symbols-outlined text-white/40 group-hover:text-white/60 pr-2">{{capability.icon}}</div>
                            <div class="flex-grow">
                                <div class="not-prose text-[1rem] leading-tight font-semibold text-white/70 group-hover:text-white/90">{{capability.title}}</div>
                            </div>
                        </div>    
                        </router-link>
            </div>
            <div class="p-4" v-if="services && services.length">
                <div class="not-prose text-[1rem] font-semibold text-white/50 mb-2">Services</div>
                <ul>
                    <li v-for="service in services" class=" w-full flex flex-col items-start pb-2 noborder border-white/20  rounded-xl ">
                        <ServiceListItem v-bind="service"/>
                    </li>
                </ul>
            </div>
            <div class="p-4" v-if="relatedServices && relatedServices.length">
                <div class="not-prose text-[1rem] font-semibold text-white/50 mb-2 ">Related Services</div>
                <ul>
                    <li v-for="service in relatedServices" class=" w-full flex flex-col items-start pb-2 noborder border-white/20  rounded-xl ">
                        <ServiceListItem v-bind="service"/>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">

import { inject } from "vue";
import { CapabilitiesKey } from "../symbols"
import { useRoute, useRouter } from "vue-router"
import {getPagesByRoute} from "../utilities"
import Avatar from "./Avatar.vue";

const route = useRoute()


const props = defineProps({
    frontmatter: {
        type: Object,
        required: true
    },
})

const allServices = getPagesByRoute("/services/")
const services = props.frontmatter?.services?.map(slug => allServices.find(service => service.path.includes(slug))).filter(service => service && service.routeName)


const {capabilities} = inject(CapabilitiesKey)

const capability = capabilities.find(a => a.id === props.frontmatter?.capability)
const relatedServices = allServices.filter(service => service.capability === props.frontmatter?.capability && service.routeName !== route.name)

</script>