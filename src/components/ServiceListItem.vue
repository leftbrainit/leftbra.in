<template>
    <li
        class=" w-full flex flex-col items-start pb-2 noborder border-white/20  rounded-xl ">
        <router-link :to="{ name: service.routeName }">
            <div class="flex w-full items-center group">
                <div class="material-symbols-outlined text-white/40 group-hover:text-white/60 pr-2">{{ service.icon }}</div>
                <div class="flex-grow">
                    <div class="not-prose leading-tight text-[1rem] font-medium text-white/70 group-hover:text-white/90">
                        {{ service.title }}</div>
                </div>
            </div>
        </router-link>
    </li>
</template>

<script setup lang="ts">
const service = defineProps({
    routeName: {
        type: String,
        required: true
    },
    icon: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    }
})
</script>