<template>
    <Wrapper class=" py-12 md:py-24">
        <div
            class="prose prose-xl max-w-4xl text-white/80 text-xl md:text-2xl pt-24 pb-12 opacity-90 highlight-links-lg md:leading-relaxed font-normal font-sans">
            <slot />
        </div>
        <div class="grid grid-cols-2 gap-14">
            <CapabilityCard v-for="capability in capabilities" v-bind="capability" />
        </div>
    </Wrapper>
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