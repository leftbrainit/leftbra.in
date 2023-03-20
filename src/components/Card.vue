<template>
    <router-link class="text-md font-semibold" :to="{ name: card.routeName }">
        <li
            class="group border border-white/10 hover:bg-black/20 hover:shadow-2xl hover:shadow-black/50 transition-all hover:scale-105 mincursor-pointer flex-wrap hover:shadow-2xl flex flex-col md:flex-col items-start md:items-start mb-5 w-full bg-black/10 rounded-xl overflow-x-hidden">
            <div class=" w-full aspect-[5/3] bg-cover bg-center"
                :style="`background-image: url('${card.coverImage}')`"></div>
            <div class="flex-shrink whitespace-normal min-h-80 p-6 divide-y divide-primary-500/10">
                <div>
                    <div class="text-md opacity-70 mb-2 md:mt-0 font-mono uppercase">{{ card.subtitle }}
                    </div>
                    <div class="text-3xl pb-4 font-title w-full">{{ card.title }}</div>
                    <div>
                        <Tags :tags="card.tags" />
                    </div>

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
</template>

<script setup lang="ts">
const card = defineProps({
    routeName: {
        type: String,
        required: true
    },
    coverImage: {
        type: String,
        required: true
    },
    subtitle: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    tags: {
        type: Array<string>,
        required: false
    }
    
})
</script>