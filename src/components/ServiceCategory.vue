<template>
    <div>
        <Wrapper>
            <div class=" relative flex flex-col py-12 md:py-24 lg:py-32 border-b border-gray-500/50">
                <div class="flex flex-row justify-center">
                    <div>
                        <SectionHeading :colour="colour" :title="title" />
                        <div class="max-w-3xl text-5xl mb-3 font-medium leading-tight font-title">
                            <h4 v-html="slogan" />
                        </div>
                        <Prose class="max-w-prose">
                            <slot />
                        </Prose>
                        <div class="flex flex-row justify-start">
                            <div class="grid w-2/5 mt-8">
                                <div class="grid items-start content-start gap-8 mt-4">
                                    <Service v-for="service in services" v-bind="service" />
                                </div>
                            </div>
                            <div
                                class="mt-2 not-prose pb-2 md:w-3/5 flex flex-col items-start justify-start 'md:float-right md:pl-5 ">
                                <img class="rounded-lg " :src="image" alt="" />
                            </div>
                        </div>
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

const route = useRoute()
const router = useRouter()

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