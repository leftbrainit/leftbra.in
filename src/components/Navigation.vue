<template>
    <Popover>
        <div class="h-[10vh]">
            <div class="flex items-center px-5">
                <div class="flex-none">
                    <router-link class="p-4 font-semibold" to="/">
                        <Logo class="text-primary-500 dark:text-gray-100 h-10"  />
                    </router-link>
                </div>
                <div class="flex-grow flex justify-center"></div>
                
                <div
                    class="hidden md:block flex-none divide-x dark:divide-white dark:divide-opacity-20"
                >
                    <span class="pr-2">
                        <!-- <WeAreHiring /> -->
                        <router-link
                            class="p-4 text-lg"
                            v-for="route in navigation"
                            :to="{ name: route.name }"
                        >{{ route.niceName }}</router-link>
                    </span>
                    <a class="p-4 pl-6 text-lg font-medium" :href="dashboardBaseURL">Sign in &rarr;</a>
                </div>
                <div class="block md:hidden">
                    <div class="flex justify-center align-middle">
                        <!-- <WeAreHiring class="mt-2"/> -->
                        <PopoverButton
                            class="rounded-md p-2 inline-flex items-center justify-center text-gray-200 hover:text-gray-300 hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-500"
                        >
                            <span class="sr-only">Open main menu</span>
                            <MenuIcon class="h-8 w-8" aria-hidden="true" />
                        </PopoverButton>
                    </div>
                </div>
            </div>
        </div>
        <transition
            enter-active-class="duration-150 ease-out"
            enter-from-class="opacity-0 scale-95"
            enter-to-class="opacity-100 scale-100"
            leave-active-class="duration-100 ease-in"
            leave-from-class="opacity-100 scale-100"
            leave-to-class="opacity-0 scale-95"
        >
            <PopoverPanel
                focus
                class="absolute z-30 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
            >
                <div
                    class="rounded-lg z-30 shadow-md bg-gray-900 ring-1 ring-black ring-opacity-5 overflow-hidden"
                >
                    <div class="px-5 z-30 pt-4 flex items-center justify-between">
                        <Logo class="text-gray-100 h-8" />
                        <div class="-mr-2">
                            <PopoverButton
                                class="bg-gray-900 rounded-md p-2 inline-flex items-center justify-center text-gray-200 hover:text-gray-300 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-500"
                            >
                                <span class="sr-only">Close menu</span>
                                <XIcon class="h-8 w-8" aria-hidden="true" />
                            </PopoverButton>
                        </div>
                    </div>
                    <div class="px-2 z-30 pt-4 pb-3">
                        <router-link
                            class="block z-30 px-3 py-2 rounded-md text-base font-medium text-gray-200 hover:text-gray-50 hover:bg-gray-800"
                            v-for="route in navigation"
                            :to="{ name: route.name }"
                        >{{ route.niceName }}</router-link>
                    </div>
                    <a
                        :href="dashboardBaseURL"
                        class="block z-30 w-full px-5 py-3 text-center font-medium text-primary-500 bg-gray-950 hover:bg-gray-800"
                    >Sign in &rarr;</a>
                </div>
            </PopoverPanel>
        </transition>
    </Popover>
</template>

<script setup lang="ts">
import { inject } from "vue";
import { SiteConfigKey } from "../symbols"
import { useRouter } from "vue-router"
import { Popover, PopoverButton, PopoverPanel } from '@headlessui/vue'
import { MenuIcon, XIcon } from '@heroicons/vue/outline'
import { getNiceRouteNames } from "../utilities"
import WeAreHiring from "./WeAreHiring.vue";

const router = useRouter()
const routes = router.getRoutes()
const siteConfig = inject(SiteConfigKey)
if (!siteConfig) {
    throw new Error(`Could not resolve siteConfig`);
}

const navigation = getNiceRouteNames(routes, siteConfig.topNavigationItems)

const dashboardBaseURL = siteConfig.dashboardBaseURL

</script>