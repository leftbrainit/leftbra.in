<template>
    <!-- <div class="bg-cover nobg-center" :style="`background-image: url(/assxxxets/80.png);background-size: auto 100%; background-position: right; background-repeat: no-repeat;`"> -->
        <!-- <div class="bg-center bg-cover" :style="`background-image: url(/assets/gradient-5.svg);background-attachment: fixed;`">
    <div class="bg-repeat" :style="`background-image: url(/assets/noise-1.svg);background-attachment: fixed;`"> -->
    <div class=" smy-20  my-12 md:my-24 overflow-hidden bg-coverss" :style="`background-image: url(/assets/globe-2.png);background-size: auto 100%; background-position: right; background-repeat: no-repeat;`">
        <Wrapper class=" ">
            <div class="w-full border-t border-white/10"></div>
            <div
                class="prose prose-xl max-w-4xl text-xl md:text-2xl text-white/90 pt-16 pb-12 highlight-links-lg md:leading-relaxed font-normal font-sans">
                <slot />
            </div>
            <div class="grid grid-cols-3 gap-8 content-start">
                <div class="col-span-2 grid grid-cols-2 gap-8 content-start">
                    <div  class="col-span-2">
                        <Testamonial v-if="featuredTestamonial" v-bind="featuredTestamonial" />
                    </div>
                    <div class="content-start grid gap-8">
                        <div v-for="testamonial in testamonials.filter(a => a.position === 'column1')" >
                            <Testamonial v-bind="testamonial" />
                        </div>
                    </div>
                    <div class="content-start grid gap-8">
                        <div v-for="testamonial in testamonials.filter(a => a.position === 'column2')" >
                            <Testamonial v-bind="testamonial" />
                        </div>
                    </div>
    
                </div>
                <div class="content-start grid gap-8">
                    <div v-for="testamonial in testamonials.filter(a => a.position === 'column3')" >
                            <Testamonial v-bind="testamonial" />
                        </div>
                </div>
            </div>
        </Wrapper>
    <!-- </div>
    </div>-->
    </div> 
</template>

<script setup lang="ts">
import SectionHeading from './SectionHeading.vue';
import {computed} from "vue"

const testamonials = [
    {
        authorName: "Ayala Levine",
        authorAvatarUrl: "/assets/zendesk-testamonial-author.png",
        authorJobTitle: "Director, Global IT Operations",
        companyName: "Zendesk, Inc.",
        companyLogoUrl: "/assets/zendesk.svg",
        body: "Hiring LeftBrain has been one of the best decisions I’ve made at Zendesk. They’re incredibly clever and technically knowledgable yet completely personable and embody our culture in every way. Thank you guys for helping my team shine!",
        position: "featured"
    },
    {
        authorName: "Celine Smith",
        authorAvatarUrl: "/assets/1516555986739.jpg",
        authorJobTitle: "Managing Director",
        companyName: "BrandMe",
        companyLogoUrl: "/assets/zendesk.svg",
        body: "We love LeftBrain! Our IT has never run better since they took over. They have the answer for every IT and techie question we ever have. Their response time is super fast and to top it all, they are all really lovely people.",
        position: "column1"
    },
    {
        authorName: "Celine Smith",
        authorAvatarUrl: "/assets/1516555986739.jpg",
        authorJobTitle: "Managing Director",
        companyName: "BrandMe",
        companyLogoUrl: "/assets/zendesk.svg",
        body: "They have the answer for every IT and techie question we ever have. Their response time is super fast and to top it all, they are all really lovely people.",
        position: "column2"
    },
    {
        authorName: "Celine Smith",
        authorAvatarUrl: "/assets/1516555986739.jpg",
        authorJobTitle: "Managing Director",
        companyName: "BrandMe",
        companyLogoUrl: "/assets/zendesk.svg",
        body: "We love LeftBrain! Our IT has never run better since they took over. They have the answer for every IT and techie question we ever have. Their response time is super fast and to top it all, they are all really lovely people.",
        position: "column3"
    },
    {
        authorName: "Celine Smith",
        authorAvatarUrl: "/assets/1516555986739.jpg",
        authorJobTitle: "Managing Director",
        companyName: "BrandMe",
        companyLogoUrl: "/assets/zendesk.svg",
        body: "We love LeftBrain! Our IT has never run better since they took over. They have the answer for every IT and techie question we ever have. Their response time is super fast and to top it all, they are all really lovely people.",
        position: "column3"
    }

]

const featuredTestamonial = computed(() => testamonials.find(a => a.position === "featured"))
</script>