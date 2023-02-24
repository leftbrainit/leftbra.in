<template>
    <Wrapper>
        <Prose class="max-w-prose">
            <slot />
        </Prose>
        <div class="mt-12">
            <div class="text-lg font-semibold w-full opacity-70 rounded-xl py-4 px-8 border-2 border-dotted border-opacity-10"
                v-if="!services.length">No services. Check back soon!</div>
                <div v-else>
                    <!-- <div class="py-8">
                        <div class="font-mono uppercase py-2">Filter By</div>
                        <Tags :tags="['ongoing', 'project']" selectable :default="['ongoing']" />
                    </div> -->
                <ul class="grid md:grid-cols-3 gap-8 place-items-stretch">
                    
                    <router-link v-for="service in services" class="text-md font-semibold" :to="{ name: service.routeName }">
                        <li
                            class="group border border-white/10 hover:bg-black/20 hover:shadow-2xl hover:shadow-black/50 transition-all hover:scale-105 mincursor-pointer flex-wrap hover:shadow-2xl flex flex-col md:flex-col items-start md:items-start mb-5 w-full bg-black/10 rounded-xl overflow-x-hidden">
                            <!-- <div class=" w-full aspect-[5/3] bg-cover bg-center"
                                :style="`background-image: url('${service.coverImage}')`"></div> -->
                        
                            <div class="flex-shrink whitespace-normal min-h-80 p-6 divide-y divide-primary-500/10 w-full">
                                <div>
                                    <div class="flex items-center gap-3 w-full justify-center pb-3">
                                        <div class="text-2xl font-title flex-grow">{{ service.title }}</div>
                                        <div v-if="service.icon" class="material-icons">{{ service.icon }}</div>
                                    </div>
                                    <div>
                                        <Tags :tags="service.tags" />
                                    </div>
                                    <div class="text-md opacity-70 mb-2 mt-4 text-lg">{{ service.excerpt }}
                                    </div>
    
                                </div>
                                <!-- <div class="pt-4 text-lg font-medium text-white/70">
                                    {{ service.excerpt }}
                                </div> -->
                            </div>
                            <div class="flex-grow"></div>
                            <!-- <div
                                class="hidden text-lg md:block flex-none text-white/60 font-semibold p-6">
                                Read more <span class="group-hover:pl-2  transition-all">&rarr;</span></div> -->
                        </li>
                    </router-link>
                </ul>
                </div>
        </div>
    </Wrapper>
</template>

<script setup lang="ts">
import { inject } from "vue";
import { useRoute, useRouter } from "vue-router"

const route = useRoute()
const router = useRouter()

const props = defineProps({
    title: {
        type: String,
        default: "Services"
    }
})

const services = router.getRoutes().filter(route => route.path.startsWith("/services/")).map(route => {
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

</script>