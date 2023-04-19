<template>
    <div class="flex flex-row items-center justify-start">
        <span v-if="teamMember?.image" class="h-10 w-10 rounded-full" :class="`bg-[url('${teamMember?.image}')]`">
        <img class="c"  :src="teamMember?.image" alt="">
        </span>
        <span v-else class="material-symbols-outlined mr-1 opacity-60">person</span>
        <span class="not-prose leading-tight text-[1rem] font-medium text-white/70">{{ props.name }}</span>
    </div>
</template>

<script setup lang="ts">
import { inject } from "vue";
import { TeamKey } from "../symbols"

const team = inject(TeamKey)

const props = defineProps({
    name: {
        type: String
    },
})

const teamMember = team?.members.find(i => i.name === props.name)

</script>