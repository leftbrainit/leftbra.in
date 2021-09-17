<template>
    <div :class="dark ? `dark` : ``">
        <div
            :class="` bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-100 min-h-screen flex flex-col antialiased`"
        >
            <Navigation class="flex-none" />
            <main v-if="!wrap" class="flex-grow">
                <slot />
            </main>
            <main v-else class="flex-grow py-16 md:py-36">
                <div style="background: #FFF;"></div>
                <Wrapper class="prose prose-xl dark:prose-light dark:prose-xl">
                    <slot />
                </Wrapper>
            </main>
            <Footer class="flex-none" />
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";
import { useHead } from '@vueuse/head'

export default defineComponent({
    props: {
        frontmatter: {
            type: Object,
            required: true
        },
    },
    setup({ frontmatter }) {
        const colour = frontmatter.colour ?? 'green'
        const dark = frontmatter.dark ?? false
        const wrap = frontmatter.wrap ?? false
        useHead({
            title: `${frontmatter.name} - LeftBrain`,
            meta: [
                {
                    name: `description`,
                    content: frontmatter.description,
                },
            ],
        })
        return {
            frontmatter,
            colour,
            dark,
            wrap
        };
    }
});
</script>