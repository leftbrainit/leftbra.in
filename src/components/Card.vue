<template>
    <router-link :to="{ name: card.routeName }">
        <div :class="card.orientation === 'portrait' ? 'grid-cols-1' : 'grid-cols-5'"
            class="group border  border-white/10 hover:bg-black/20 hover:shadow-2xl hover:shadow-black/50 transition-all hover:scale-105 mincursor-pointer grid rounded-xl overflow-hidden bg-black/10">
            <div  :class="card.orientation === 'portrait' ? 'h-64' : 'col-span-2'" class=" bg-cover bg-center" :style="`background-image: url('${card.coverImage}')`"></div>
            <div class="p-6 col-span-3">
                <div v-if="card.subtitle" class="text-md opacity-70 mb-2 md:mt-0 font-mono uppercase">{{ card.subtitle }}</div>
                <div class="pb-2 text-3xl  font-title text-white/90">{{ card.title }}</div>
                <slot />
                <div v-if="card.excerpt" class="pt-2 text-lg font-medium text-white/70">
                    {{ card.excerpt }}
                </div>
            </div>
        </div>
    </router-link>
    <!-- <router-link class="text-md font-semibold" :to="{ name: card.routeName }">
        
        <li :class="card.orientation === 'portrait' ? 'md:flex-col' : 'flex-row md:flex-row'"
            class="group border border-white/10 hover:bg-black/20 hover:shadow-2xl hover:shadow-black/50 transition-all hover:scale-105 mincursor-pointer flex   items-start md:items-start mb-5 w-full bg-black/10 rounded-xl overflow-x-hidden">
            <div :class="card.orientation === 'portrait' ? 'w-full aspect-[5/3]' : 'w-2/3 aspect-[5/3]'" class="bg-cover bg-center"
                :style="`background-image: url('${card.coverImage}')`"></div>
            <div :class="card.orientation === 'portrait' ? 'w-full aspect-[5/3]' : 'now-2/3'" class="flex-shrink whitespace-normal min-h-80 p-6 nodivide-y divide-primary-500/10">
                <div>
                    <div class="text-md opacity-70 mb-2 md:mt-0 font-mono uppercase">Customer Story
                    </div>
                    <div class="text-3xl pb-4 font-title ">{{ card.title }}</div>
      

                </div>
                <div v-if="card.excerpt" class=" text-lg font-medium text-white/80">
                    {{ card.excerpt }}
                </div>
                <div class="flex-grow"></div>
                <div
                    class="hidden text-lg md:block flex-none text-primary-500  font-mono uppercase  p-6">
                    Read more <span class="group-hover:pl-2  transition-all">&rarr;</span></div>
            </div>
        </li>
    </router-link> -->
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
        required: false
    },
    title: {
        type: String,
        required: true
    },
    excerpt: {
        type: String,
        required: false
    },
    tags: {
        type: Array<string>,
        required: false
    },
    orientation: {
        type: String,
        default: "portrait"
    }
    
})
</script>