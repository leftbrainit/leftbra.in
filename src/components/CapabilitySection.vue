<template>
    <div 
    >   <div v-if="capability.id" :id="capability.id"></div>
        <Wrapper>
            <div class="relative flex flex-col py-12 md:py-24 lg:py-32 noborder-b border-gray-500/50">
                <div class="flex flex-col justify-center">
                    <SectionHeading colour="green" :title="capability.title" />
                    <div class="max-w-3xl text-5xl mb-3 font-medium leading-tight font-title">
                        <h4 v-html="props.slogan" />
                    </div>
                    <Prose class="max-w-prose">
                        <slot />
                    </Prose>
                </div>
                <div class="grid">
                    <div class="grid grid-flow-row grid-cols-1 md:grid-cols-3 gap-8 mt-4">
                        <SubFeature
                            v-for="service in services"
                            v-bind="service"
                            colour="green"
                        />
                    </div>
                </div>
            </div>
        </Wrapper>
    </div>
</template>

<script setup lang="ts">
import { inject } from "vue";
import { CapabilitiesKey } from "../symbols"
import { useRoute, useRouter } from "vue-router"

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
})

const {capabilities} = inject(CapabilitiesKey)

const capability = capabilities.find(i => i.id === props.capability)

if (!capabilities) {
throw new Error(`Could not resolve capabilities data`);
}

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