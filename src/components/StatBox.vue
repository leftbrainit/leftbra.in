<template>
    <Wrapper class="bg-yellow-500">
        <div class="relative flex flex-col my-6 text-center" v-for="statOption in statOptions" v-bind="statOption">
            <div class="w-3/5 py-2 grid grid-flow-col" id="stat">
                <div class="font-bold font-serif text-7xl italic">
                    <h1>{{stat}}</h1>
                </div>
            </div>
            <div class="w-3/5 py-2" id="tag">
                <div class="opacity-45">
                    <h4>{{tag}}</h4>
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