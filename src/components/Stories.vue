<template>
    <Wrapper>
        <Prose class="max-w-prose">
            <slot />
        </Prose>
        <div class="mt-12">
            <div class="text-lg font-semibold w-full opacity-70 rounded-xl py-4 px-8 border-2 border-dotted border-opacity-10"
                v-if="!stories.length">No customer stories. Check back soon!</div>
            <ul v-else class="grid md:grid-cols-2 gap-8 place-items-stretch">
                <router-link v-for="story in stories" class="text-md font-semibold" :to="{ name: story.routeName }">
                    <li
                        class="group border border-white/10 hover:bg-black/20 hover:shadow-2xl hover:shadow-black/50 transition-all hover:scale-105 mincursor-pointer flex-wrap hover:shadow-2xl flex flex-col md:flex-col items-start md:items-start mb-5 w-full bg-black/10 rounded-xl overflow-x-hidden">
                        <div class=" w-full aspect-[5/3] bg-cover bg-center"
                            :style="`background-image: url('${story.coverImage}')`"></div>
                        <div class="flex-shrink whitespace-normal min-h-80 p-6 divide-y divide-primary-500/10">
                            <div>
                                <div class="text-md opacity-70 mb-2 md:mt-0 font-mono uppercase">{{ story.customerName }}
                                </div>
                                <div class="text-3xl pb-4 font-title w-full">{{ story.title }}</div>

                            </div>
                            <!-- <div class="pt-4 text-lg font-medium text-white/70">
                                {{ story.excerpt }}
                            </div> -->
                        </div>
                        <div class="flex-grow"></div>
                        <div
                            class="hidden text-lg md:block flex-none text-primary-500  font-mono uppercase  p-6">
                            Read more <span class="group-hover:pl-2  transition-all">&rarr;</span></div>
                    </li>
                </router-link>
            </ul>
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
        default: "Vacancies"
    }
})

const stories = router.getRoutes().filter(route => route.path.startsWith("/customers/")).map(route => {
    const frontmatter: any = route.meta.frontmatter ?? {}
    const title = frontmatter.title ?? ""
    const customerName = frontmatter.customerName ?? ""
    const excerpt = frontmatter.excerpt ?? ""
    const coverImage = frontmatter.coverImage ?? ""
    return {
        routeName: route.name,
        title,
        customerName,
        excerpt,
        coverImage
    }
})

</script>