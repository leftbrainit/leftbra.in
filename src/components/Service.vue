<template>
    <div class="transition p-4 flex flex-row items-start group border border-white/10 hover:bg-black/20 transition-all cursor-pointer flex-wrap hover:shadow-2xl flex flex-col md:flex-col items-start md:items-start w-full bg-black/10 rounded-xl overflow-x-hidden">

        <div class="w-full">
            <div class="flex flex-row w-full">

                <div class="material-symbols-outlined text-primary-500 mr-2 mt-0.5">{{ icon }}</div>
                <div class=" text-xl font-medium flex-grow">
                    <h2>{{ title }}</h2>
                </div>
                <div class="transition material-symbols-outlined text-primary-500 mr-2 mt-0.5" :class="selected ? 'rotate-180' : ''">expand_less</div>
            </div>
            <div
                v-if="selected"
                class="transition prose prose-md dark:prose-light sm:leading-relaxed opacity-80 underline-links"
                
                v-html="excerpt"
            />
            <!-- <div
                                class="hidden text-md mt-1.5 md:block flex-none text-white/60 font-semibold">
                                Read more <span class="group-hover:pl-2  transition-all">&rarr;</span></div> -->
        </div>
    </div>
</template>

<script setup lang="ts">
const props = defineProps({
    title: {
        type: String,
        required: true
    },
    icon: {
        type: String,
        default: 'emoji_emotions'
    },
    excerpt: {
        type: String,
        required: true
    },
    selected: {
        type: Boolean,
        default: false
    }
})
</script>