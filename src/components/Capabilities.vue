<template>
     <!-- <div class="bg-center bg-cover" :style="`background-image: url(/assets/gradient-5.svg);background-attachment: fixed;`"> -->
    <!-- <div class="bg-repeat" :style="`background-image: url(/assets/noise-1.svg);background-attachment: fixed;`"> -->
        <div class="" :style="`background-image: url(/assets/wave-01.png);background-size: auto 100%; background-position: left; background-repeat: no-repeat;`">

    <Wrapper class=" py-12 md:py-24">
        <div
        class="prose prose-xl max-w-4xl text-xl md:text-2xl text-white/90 pt-16 pb-12 highlight-links-lg md:leading-relaxed font-normal font-sans">
            <slot />
        </div>
        <div class="grid grid-cols-2 gap-14">
            <CapabilityCard v-for="capability in capabilities" v-bind="capability" />
        </div>
    </Wrapper>
    </div>
    <!-- </div> -->
</template>

<script setup lang="ts">
const capabilities = [
    {
        title: "Strategy",
        description: "Our strategy team make all the things that are strategic easy to understand fun and funky and stupid. You’re stupid.",
        backgroundImageUrl: "/assets/219A4970.jpg",
        link: "strategy",
        services: [
            {
                title: "Roadmap Ownership"
            },
            {
                title: "Digital Transformation"
            },
            {
                title: "Cloud/SaaS Deployments"
            }
        ]
    },
    {
        title: "Security",
        description: "Our security team make all the things that are security easy to understand fun and funky and stupid. You’re stupid.",
        backgroundImageUrl: "/assets/219A5485.jpg",
        link: "security",
        services: [
            {
                title: "Roadmap Ownership"
            },
            {
                title: "Digital Transformation"
            },
            {
                title: "Cloud/SaaS Deployments"
            }
        ]
    },
    {
        title: "Support",
        description: "Our support team make all the things that are support easy to understand fun and funky and stupid. You’re stupid.",
        backgroundImageUrl: "/assets/219A4875.jpg",
        link: "support",
        services: [
            {
                title: "Roadmap Ownership"
            },
            {
                title: "Digital Transformation"
            },
            {
                title: "Cloud/SaaS Deployments"
            }
        ]
    },
    {
        title: "Infrastructure & Projects",
        description: "Our infrastructure & projects team make all the things that are infrastructure & projects easy to understand fun and funky and stupid. You’re stupid.",
        backgroundImageUrl: "/assets/219A6049.jpg",
        link: "infrastructure",
        services: [
            {
                title: "Roadmap Ownership"
            },
            {
                title: "Digital Transformation"
            },
            {
                title: "Cloud/SaaS Deployments"
            }
        ]
    }
]
</script>