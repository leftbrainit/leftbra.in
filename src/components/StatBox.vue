<template>
    <Wrapper class=" grid grid-flow-col justify-evenly border-dashed border-2 rounded">
        <div class=" mt-6 mb-8 text-center" v-for="statOption in statOptions">
            <div class="w-3/5 py-2" id="stat">
                <div class="font-bold font-serif text-6xl italic">
                    <h1>{{statOption.stat}}</h1>
                </div>
            </div>
            <div class=" py-2" id="tag">
                <div class="opacity-40">
                    <h4>{{statOption.tag}}</h4>
                </div>
            </div>
        </div> 
    </Wrapper>
</template>


<script lang="ts" setup>
import {computed} from 'vue'

const props = defineProps({
    statOptions: {
        type: Array,
        required: true,
        cmsConfig: {
            field: {
                label: "Stat Options",
                name: 'statOptions',
                widget: "list",
                fields: [
                    {
                        label: "Stat",
                        name: 'stat',
                        widget: "string",
                        hint: 'Enter the statistic you want to display'
                    },
                    {
                        label: "Tag",
                        name: 'tag',
                        widget: "string",
                        hint: 'give your stat a loud and proud label'
                    }
                ]
            }
        }
    }
    
})

</script>