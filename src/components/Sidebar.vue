<template>
    <div class="pl-8 w-full">
        <div class="not-prose sticky top-8 bg-primary-100 border border-white/10 rounded-xl divide-y divide-white/10 w-full mt-10">
            <div v-if="frontmatter.companyLogoUrl" class="items-center justify-center p-12">
                <img class="min-h-12 max-h-12"  :src="frontmatter.companyLogoUrl" alt="" />
            </div>
            <div class="p-4" v-if="services && services.length">
                <div class="not-prose text-md font-semibold text-white/50 mb-2 pl-1">Services used</div>
                <ul>
                    
                    <li v-for="service in services" class=" w-full flex flex-col items-start pb-3 noborder border-white/20 bg-primary-100/50 rounded-xl ">
                        <router-link :to="{ name: service.routeName }">
                        <div class="flex w-full items-center">
                            <div class="material-symbols-outlined text-white/40 pr-2">{{service.icon}}</div>
                            <div class="flex-grow">
                                <div class="not-prose leading-tight text-md font-medium text-white/70">{{service.title}}</div>
                            </div>
                        </div>    
                        </router-link>
                    </li>
                   
                </ul>
            </div>
    
        </div>
    </div>
</template>

<script setup lang="ts">
import { useRoute, useRouter } from "vue-router"

const router = useRouter()


const props = defineProps({
    frontmatter: {
        type: Object,
        required: true
    },
})

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
const services = props.frontmatter?.services?.map(slug => allServices.find(service => service.path.includes(slug))).filter(service => service && service.icon)

</script>