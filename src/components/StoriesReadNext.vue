<template>
    <div class="not-prose">
        <h2 class="text-4xl font-semibold text-white/95 mt-12">Read Next</h2>
        <div class="mt-12">
            <div class="text-lg font-semibold w-full opacity-70 rounded-xl py-4 px-8 border-2 border-dotted border-opacity-10"
                v-if="!stories.length">No customer stories. Check back soon!</div>
            <ul v-else class="grid md:grid-cols-2 gap-8 place-items-stretch">
                <StoryCard v-for="story in stories" v-bind="story" />
            </ul>
        </div>
    </div>
</template>

<script setup lang="ts">
import {getPagesByRoute} from "../utilities"

const props = defineProps({
    relatedStories: {
        type: Array<string>,
        required: true
    }
})

const stories = props.relatedStories?.map(slug => getPagesByRoute("/customers/").find(story => story.path.includes(slug))).filter(story => story && story.routeName)

</script>