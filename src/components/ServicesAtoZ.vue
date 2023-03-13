<template>
    <div class="bg-white/5 py-16">
        <Wrapper>
            <Prose class="max-w-prose">
                <slot />
            </Prose>
            <div class="">
                <div class="text-lg font-semibold w-full opacity-70 rounded-xl py-4 px-8 border-2 border-dotted border-opacity-10"
                    v-if="!services.length">No services. Check back soon!</div>
                <div v-else>
                    <h2 class="text-4xl font-title">A – Z of Services</h2>
                </div>
            </div>
            <div class="grid gap-16 md:grid-cols-3 py-12">
                <ol v-for="serviceGroup in serviceGroups">
                    <h3 class="font-mono font-semibold text-xl text-primary-500 pb-3">{{ serviceGroup.title }}</h3>
                    <div class="divide-white/10 divide-y">
                        
                        <div v-for="service in serviceGroup.services">
                        <!-- <router-link v-for="service in serviceGroup.services" :to="{ name: service.routeName }"> -->
                        <li v-motion-pop-visible class="py-3 w-full flex" >
                            <div class="flex-grow">
                                {{ service.title }}
                            </div>
                            <div v-if="service.icon" class=" material-symbols-outlined text-white/40">{{ service.icon }}</div>
                        </li>
                        <!-- </router-link> -->
                        </div>
                    </div>
                </ol>
            </div>
        </Wrapper>

    </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useRoute, useRouter } from "vue-router"

const route = useRoute()
const router = useRouter()

const props = defineProps({
    title: {
        type: String,
        default: "Services"
    }
})

const services = router.getRoutes().filter(route => route.path.startsWith("/services/")).sort((a, b) => (a.path > b.path) ? 1 : -1).map(route => {
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
        icon
    }
})

const serviceGroups = computed(() => {
    const groups = [
        {
            title: "A – I",
            letters: ["a", "b", "c", "d", "e", "f", "g", "h", "i"]
        },
        {
            title: "J – R",
            letters: ["j", "k", "l", "m", "n", "o", "p", "q", "r"]
        },
        {
            title: "S – Z",
            letters: ["s", "t", "u", "v", "w", "x", "y", "z"]
        }
    ]
    return groups.map(group => {
        return {
            title: group.title,
            services: services.filter(service => group.letters.includes(service.title.charAt(0).toLowerCase()))
        }
    })
})

</script>