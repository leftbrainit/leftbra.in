<template>
    <Wrapper>
        <SectionHeading :title="title" />
        <Prose class="max-w-prose">
            <slot />
        </Prose>
        <div class="mt-12">
            <div v-if="!vacancies.length">No current vacancies</div>
            <ul v-else>
                <router-link
                    v-for="vacancy in vacancies"
                    class="text-md font-semibold"
                    :to="{ name: vacancy.routeName }"
                >
                    <li
                        class="group hover:bg-gray-600 cursor-pointer hover:shadow-2xl flex flex-row items-center mb-5 w-full bg-gray-700 rounded-xl py-4 px-8"
                    >
                        <div class="flex-none">
                            <div class="text-lg font-semibold">{{ vacancy.position }}</div>
                            <div
                                class="text-md font-medium opacity-80"
                            >{{ vacancy.city ? vacancy.city : "Remote" }}</div>
                        </div>
                        <div class="flex-grow"></div>
                        <div class="flex-none text-gray-500 group-hover:text-white">Read more &rarr;</div>
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

const vacancies = router.getRoutes().filter(route => route.path.startsWith("/careers/")).map(route => {
    const frontmatter: any = route.meta.frontmatter ?? {}
    const position = frontmatter.position ?? ""
    const city = frontmatter.location ?? ""
    return {
        routeName: route.name,
        position,
        city,

    }
})


</script>