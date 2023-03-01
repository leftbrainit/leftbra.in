<template>
    <div>
        <Wrapper>
            <div class="transition relative flex flex-col py-12 md:py-24 lg:py-32 noborder-b border-gray-500/50">
                <div class="flex flex-row justify-center" :class="align === 'left' ? '': 'flex-row-reverse'">
                    <div>
                        <SectionHeading :colour="colour" :title="title" />
                        <div class="max-w-3xl text-5xl mb-3 font-medium leading-tight font-title">
                            <h4 v-html="slogan" />
                        </div>
                        <Prose class="max-w-prose">
                            <slot />
                        </Prose>
                        <div class="flex flex-row justify-start">
                            <div class="grid w-full">
                                <div class="transition grid items-start content-start gap-4 mt-4">
                                    <Service v-for="(service, index) in services" v-bind="service" :selected="selectedService === index" @click="selectedService = index" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div
                        class="mt-2 not-prose pb-2 md:w-4/5 flex flex-col items-start justify-start  -mt-12"
                        :class="align === 'left' ? 'md:-mr-18 md:pl-12': 'md:-ml-18 md:pr-12'">
                        <img class="rounded-lg " :src="image" alt="" />
                    </div>
                    <!-- <div
                        class=" mt-2 not-prose pb-2 md:w-1/2 flex flex-col items-start justify-start 'md:float-right md:pl-5 ">
                        <img class="rounded-lg " :src="image" alt="" />
                    </div> -->
                </div>
                
            </div>
        </Wrapper>
    </div>
</template>

<script setup lang="ts">
import { useRoute, useRouter } from "vue-router"
import {ref} from "vue"
const route = useRoute()
const router = useRouter()

const selectedService = ref(0)

const props = defineProps({
    title: {
        type: String,
        required: true
    },
    slogan: {
        type: String,
        required: true
    },
    colour: {
        type: String,
        default: 'blue',
        cmsConfig: {
            field: {
                label: "Colour",
                name: "colour",
                widget: "select",
                required: false,
                options: ["green", "pink", "yellow"]
            }
        }
    },
    image: {
        type: String,
        required: true,
        cmsConfig: {
            field: {
                label: "Image",
                name: "image",
                widget: "string",
                required: true
            }
        }
    },
    services: {
        type: Array,
        required: false,
        cmsConfig: {
            field: {
                label: "Services",
                name: "services",
                widget: "relation",
                collection: "services",
                search_fields: ["services.*.title"],
                display_fields: ["services.*.title"],
                value_field: "services.*.slug"
            }
        }
    },
    subFeatures: {
        type: Array,
        required: false,
        cmsConfig: {
            field: {
                label: "SubFeatures",
                name: "subFeatures",
                widget: "list",
                fields: [
                    {
                        label: "Title",
                        name: 'title',
                        widget: "string"
                    },
                    {
                        label: "Material Icon Name",
                        name: 'icon',
                        widget: "string",
                        hint: 'Choose from https://fonts.google.com/icons?icon.query=question'
                    },
                    {
                        label: "Body",
                        name: 'body',
                        widget: "markdown"
                    }
                ]
            }
        }
    },
    align: {
        type: String,
        default: 'left'
    }
})

const services = router.getRoutes().filter(route => (route.name as string).includes("services-")).filter(route => props.services.includes((route.name as string).split("services-")[1])).map(route => {
    console.log(props.services, route)
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