<template>
    <div class="not-prose mt-12 text-xl leading-8 sborder bg-primary-100 border-white/10 rounded-xl bg-center bg-cover overflow-hidden" >
        <div class="flex w-full">
            <div class=" py-8 px-8 bg-cover bg-center" :style="`background-image: url(${cta.backgroundImageUrl}); box-shadow: inset 0 0 300px 120px rgba(25,25,15,0.9)`">
                <h2 class="text-5xl font-title font-medium mb-4 mt-2 text-white/90">{{ cta.title }}</h2>
                <slot>
                    <div  class="text-white/90">
                        <slot>
                            <p></p>
                        </slot>

                    </div>
                </slot>
                <a  id="schedule-call-button">
                <div class="flex gap-1 mt-4 group cursor-pointer ">
                    <img class=" w-20 h-20  rounded-full scale-100 group-hover:scale-125 transition-all"  :src="teamMember?.image" alt="" />
                    <div class=" flex flex-col items-left justify-center pl-0 group-hover:pl-2 transition-all">
                        <div class="text-primary-500/80 group-hover:text-primary-500 font-semibold">Schedule a call with {{teamMember?.name.split(" ")[0]}} &rarr;</div>
                        <div class="text-sm text-white/90">{{ teamMember?.name }}, {{ teamMember?.position }}</div>
                    </div>
                </div>
            </a>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { inject } from "vue";
import { TeamKey } from "../symbols"

const team = inject(TeamKey)

const cta = defineProps({
    title: {
        type: String,
        default: "Next steps"
    },
    teamMemberName: {
        type: String,
        default: "Dustin Rhodes"
    },
    backgroundImageUrl: {
        type: String,
        default: "/assets/219A4875.jpg"
    }
})
const teamMember = team?.members.find(i => i.name === cta.teamMemberName)
</script>