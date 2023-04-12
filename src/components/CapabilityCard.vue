<template>
    <router-link class="" :to="`/services#${capability.id}`">
    <div
        class="rounded-xl flex flex-col place-content-between p-8 group noborder h-96 border-white bg-center bg-cover scale-100  hover:shadow-2xl  shadow-primary-500/50 hover:shadow-white/50 transition-all hover:scale-105 cursor-pointer"
        :style="`background-image: url(${capability.backgroundImageUrl}); box-shadow: inset 0 0 300px 120px rgba(25,25,15,0.9)`">
        <div>
            <h2 class="uppercase  text-primary-500 mb-0.5 font-mono font-semibold text-xl">{{ capability.title }}</h2>
            <p class="w-auto max-w-md text-lg font-medium opacity-90">{{ capability.description }}</p>
        </div>
        <div class="flex items-end">
            <div class="flex-grow">
                <!-- <h3 class="uppercase text-primary-500 font-mono font-semibold text-xs mb-1">Services</h3> -->
                <ul>
                    <li class="text-lg font-semibold pt-0.5 opacity-90" v-for="service in services">
                        <span v-if="service && service.title">{{ service.title }}</span>
                        
                    </li>
                </ul>
            </div>
            <div
                class="text-3xl scale-50 group-hover:scale-100 font-semibold opacity-0 group-hover:opacity-100 transition-all text-right">
                &rarr;</div>
        </div>
    </div>
</router-link>
</template>

<script setup lang="ts">
import { useRoute, useRouter } from "vue-router"
const router = useRouter()

const capability = defineProps({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    id: {
        type: String,
        required: true
    },
    backgroundImageUrl: {
        type: String,
        required: true
    },
    services: {
        type: Array<any>
    }
},)

const allServices = router.getRoutes().filter(route => route.path.startsWith("/services/")).sort((a, b) => (a.path > b.path) ? 1 : -1).map(route => {
    const frontmatter: any = route.meta.frontmatter ?? {}
    const title = frontmatter.title ?? ""
    const excerpt = frontmatter.excerpt ?? ""
    const coverImage = frontmatter.coverImage ?? ""
    const icon = frontmatter.icon ?? ""
    const tags = frontmatter.tags ?? []
    return {
        routeName: route.name,
        title,
        excerpt,
        coverImage,
        tags,
        icon,
        path: route.path
    }
})
const services = capability.services.map(slug => allServices.find(service => service.path.includes(slug)))
</script> 