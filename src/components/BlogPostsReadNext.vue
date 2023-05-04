<template>
    <div class="not-prose" >
        <h2 class="text-4xl font-semibold text-white/95 mt-12">Read Next</h2>
        <div class="mt-12">
            <ul class="grid md:grid-cols-2 gap-8 place-items-stretch">
                <BlogPostCard v-for="post in posts" v-bind="post" />
            </ul>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useRoute, useRouter } from "vue-router"
import {getPagesByRoute} from "../utilities"
const route = useRoute()

const posts = getPagesByRoute("/blog/").filter(post => post.routeName !== route.name).slice(0, 2)

</script>