<script lang="ts">
import { provide, defineComponent } from 'vue'
import siteConfig from "./site.config.json"
import team from "./collections/team.json"
import locations from "./collections/locations.json"
import { SiteConfigKey, TeamKey, LocationsKey } from "./symbols"
import { SiteConfig, Team, Locations } from "./types"

export default defineComponent({
  setup() {
    provide(SiteConfigKey, siteConfig as SiteConfig)
    provide(TeamKey, team as Team)
    provide(LocationsKey, locations as Locations)
  }
})
</script>

<template>
  <router-view v-slot="{ Component, route }">
    <div
      class="bg-primary-50"
    >
      <transition
        name="fade"
        enter-active-class="transition  duration-100"
        enter-from-class="transform opacity-0"
        enter-to-class="transform opacity-100 "
        leave-active-class="transition duration-100"
        leave-from-class="transform opacity-100 "
        leave-to-class="transform opacity-0"
        mode="out-in"
      >
        <component :is="Component" />
      </transition>
    </div>
  </router-view>
</template>