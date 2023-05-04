<template>
    <div class="flex flex-row items-center justify-start">
        <span v-if="teamMember?.image" class=" flex justify-center items-center mr-1" :class="`bg-[url('${teamMember?.image}')] ${props.extended ? 'h-16 w-16' : 'h-10 w-10'}`">
        <img class="  rounded-full "  :src="teamMember?.image" alt="">
        </span>
        <span v-else class="material-symbols-outlined mr-1 opacity-60">person</span>
        <div class="flex flex-col">
            <span class="not-prose leading-tight  text-white/90" :class="props.extended ? 'text-[1.2rem]  font-semibold' : 'text-[1rem]  font-medium'">{{ props.name }}</span>
            <span v-if="props.extended" class="not-prose leading-tight text-[1rem] font-medium text-white/70">{{ teamMember.position }}</span>
        </div>
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
    extended: {
        type: Boolean,
        default: false
    }
})

const teamMember = team?.members.find(i => i.name === props.name)

</script>