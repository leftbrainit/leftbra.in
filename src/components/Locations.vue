<template>
    <Wrapper>
        <SectionHeading title="Our Locations" />

        <ul class="space-y-12 py-8 sm:grid sm:grid-cols-2 sm:gap-12 sm:space-y-0 lg:gap-x-8">
            <li
                v-for="(location, index) in locations.locations"
                :key="JSON.stringify(location) + index"
            >
                <div class="flex items-center space-x-4 lg:space-x-6">
                    <div class="font-medium text-lg leading-6 space-y-1 w-full">
                        <iframe
                            width="100%"
                            height="250"
                            style="border:0"
                            loading="lazy"
                            allowfullscreen
                            :src="`https://www.google.com/maps/embed/v1/place?key=${googleMapsAPIKey}
                            &q=${location.address}`"
                        ></iframe>
                        <div>
                            <div class="text-2xl font-bold mb-2 mt-3">
                                <h2>{{ location.city }}, {{ location.country }}</h2>
                            </div>
                            <div
                                class="prose prose-md dark:prose-light text-md sm:leading-relaxed opacity-80 underline-links"
                                v-html="location.address"
                            />
                        </div>
                    </div>
                </div>
            </li>
        </ul>
    </Wrapper>
</template>

<script setup lang="ts">
import { inject } from "vue";
import { LocationsKey, SiteConfigKey } from "../symbols"

const locations = inject(LocationsKey)
const siteConfig = inject(SiteConfigKey)
if (!locations) {
    throw new Error(`Could not resolve locations data`);
}

if (!siteConfig) {
    throw new Error(`Could not resolve siteConfig data`);
}

const googleMapsAPIKey = siteConfig.googleMapsAPIKey
</script>