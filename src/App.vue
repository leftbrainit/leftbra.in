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
  <router-view />
</template>