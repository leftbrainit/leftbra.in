<template>
    <Wrapper>
        <SectionHeading :title="title" />
        <Prose class="max-w-prose">
            <slot />
        </Prose>
        <div>
            <div v-if="!vacancies.length">No current vacancies</div>
            <ul v-else>
                <li
                    class="flex flex-row items-center mb-5 w-96 bg-gray-700 rounded-xl py-4 px-8"
                    v-for="vacancy in vacancies"
                >
                    <div class="flex-none">
                        <div class="text-lg font-semibold">{{ vacancy.position }}</div>
                        <div class="text-md font-medium opacity-80">{{ vacancy.city }}</div>
                    </div>
                    <div class="flex-grow"></div>
                    <div class="flex-none">
                        <router-link
                            class="text-md font-semibold"
                            :to="{ name: vacancy.routeName }"
                        >Read more &rarr;</router-link>
                    </div>
                </li>
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