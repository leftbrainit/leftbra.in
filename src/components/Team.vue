<template>
    <Wrapper>
        <SectionHeading title="Our Team" />

        <ul class="space-y-12 py-8 mb-16 sm:grid sm:grid-cols-3 sm:gap-12 sm:space-y-0 lg:gap-x-8">
            <li v-for="(member, index) in team.members" :key="JSON.stringify(member) + index">
                <div class="flex items-center space-x-4 lg:space-x-6">
                    <img class="w-16 h-16 rounded-full lg:w-20 lg:h-20 bg-gray-700" :src="member.image" :alt="member.name" />
                    <div class="font-bold text-lg leading-6 space-y-1">
                        <h3>{{ member.name }}</h3>
                        <p class="text-md text-gray-300">{{ member.position }}</p>
                    </div>
                </div>
            </li>
        </ul>
    </Wrapper>
</template>

<script setup lang="ts">
import { inject } from "vue";
import { TeamKey } from "../symbols"

const team = inject(TeamKey)
if (!team) {
    throw new Error(`Could not resolve team data`);
}

</script>