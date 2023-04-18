<template>
    <div class="pl-8 w-full">
        <div class="not-prose sticky top-8 bg-primary-100 border border-white/10 rounded-xl divide-y divide-white/10 w-full mt-10">
            <div v-if="frontmatter.companyLogoUrl" class="items-center justify-center p-12">
                <img class="min-h-12 max-h-12"  :src="frontmatter.companyLogoUrl" alt="" />
            </div>
            <div class="p-4" v-if="services && services.length">
                <div class="not-prose text-[1rem] font-semibold text-white/50 mb-2 pl-1">Services used</div>
                <ul>
                    
                    <li v-for="service in services" class=" w-full flex flex-col items-start pb-2 noborder border-white/20 bg-primary-100/50 rounded-xl ">
                        <router-link :to="{ name: service.routeName }">
                        <div class="flex w-full items-center group">
                            <div class="material-symbols-outlined text-white/40 group-hover:text-white/60 pr-2">{{service.icon}}</div>
                            <div class="flex-grow">
                                <div class="not-prose leading-tight text-[1rem] font-medium text-white/70 group-hover:text-white/90">{{service.title}}</div>
                            </div>
                        </div>    
                        </router-link>
                    </li>
                    <!-- <li v-for="service in services" class=" w-full flex flex-col items-start pb-3 noborder border-white/20 bg-primary-100/50 rounded-xl ">
                        <router-link :to="{ name: service.routeName }">
                        <div class="flex flex-row w-full items-center">
                            <div class="rounded hover:bg-primary-500 flex items-center flex-row bg-primary-500/90 text-primary-50 py-0.5 px-2 text-sm font-medium font-mono uppercase">
                                <div class="material-symbols-outlined text-black/60 pr-2">{{service.icon}}</div> 
                                <div>{{service.title}}</div>
                            </div>
                        </div>    
                        </router-link>
                    </li>
                    -->
                </ul>
            </div>
    
        </div>
    </div>
</template>

<script setup lang="ts">
import { useRoute, useRouter } from "vue-router"
import {getPagesByRoute} from "../utilities"

const router = useRouter()


const props = defineProps({
    frontmatter: {
        type: Object,
        required: true
    },
})

const allServices = getPagesByRoute("/services/")
const services = props.frontmatter?.services?.map(slug => allServices.find(service => service.path.includes(slug))).filter(service => service && service.routeName)

</script>