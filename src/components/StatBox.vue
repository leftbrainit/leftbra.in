<template>
    <Wrapper class="grid grid-flow-col justify-evenly border-dashed border-2 rounded">
        <Stat v-for="statOption in statOptions" v-bind="statOption" />
    </Wrapper>
</template>


<script lang="ts" setup>
import { computed } from 'vue'

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