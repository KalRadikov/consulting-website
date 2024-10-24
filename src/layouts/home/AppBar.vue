<template>
  <div>
    <v-app-bar
      id="home-app-bar"
      app
      color="topBar"
      elevation="1"
      height="80"
    >
      <router-link to="/">
        <base-img
          v-if="this.$vuetify.theme.dark"
          :src="require('@/assets/radikov-consulting-light.svg')"
          contain
          max-width="260"
          width="100%"
        />
        <base-img
          v-else
          :src="require('@/assets/radikov-consulting-dark.svg')"
          contain
          max-width="260"
          width="100%"
        />
      </router-link>

      <v-spacer/>

      <div>
        <v-tabs
          class="hidden-sm-and-down"
          v-model="activeTab"
          optional
        >
          <v-tab
            v-for="(item, i) in tabs"
            :key="i"
            :to="item.route"
            :ripple="false"
            active-class="text--primary"
            class="font-weight-bold"
            min-width="96"
            text
            exact
          >
            {{ item.label }}
          </v-tab>
        </v-tabs>
      </div>
      <v-container class="d-flex align-center justify-center pa-0" style="width: 90px;">
        <v-tooltip
          v-if="!$vuetify.theme.dark"
          bottom
        >
          <template v-slot:activator="{ on }">
            <v-btn
              color="info"
              x-small
              fab
              v-on="on"
              @click="toggleDarkMode"
            >
              <v-icon class="mr-1">
                mdi-moon-waxing-crescent
              </v-icon>
            </v-btn>
          </template>
          <span>Dark Mode On</span>
        </v-tooltip>
        <v-tooltip
          v-else
          bottom
        >
          <template v-slot:activator="{ on }">
            <v-btn
              color="info"
              x-small
              fab
              v-on="on"
              @click="toggleDarkMode"
            >
              <v-icon color="yellow">
                mdi-white-balance-sunny
              </v-icon>
            </v-btn>
          </template>
          <span>Dark Mode Off</span>
        </v-tooltip>
      </v-container>

      <v-app-bar-nav-icon
        class="hidden-md-and-up"
        @click="drawer = !drawer"
      />
    </v-app-bar>

    <home-drawer
      v-model="drawer"
      :items="tabs.map(tab => tab.label)"
    />
  </div>
</template>

<script>
export default {
  name: 'HomeAppBar',

  components: {
    HomeDrawer: () => import('./Drawer'),
  },
  data: () => ({
    drawer: null,
    activeTab: null,
    tabs: [
      {label: 'Home', route: '/'},
      {label: 'Services', route: '/services'},
      {label: 'Gallery', route: '/gallery'},
      {label: 'About', route: '/about'},
      {label: 'Contact', route: '/contact-us'},
    ],
  }),
  watch: {
    $route(to) {
      this.activeTab = to.path;
    },
  },
  mounted() {
    this.activeTab = this.$route.path;
  },
  methods: {
    toggleDarkMode() {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
    },
  },
}
</script>

<style lang="sass">
#home-app-bar
  .v-tabs-slider
    max-width: 24px
    margin: 0 auto

  .v-tab
    &::before
      display: none

.dark-mode-toggle
  width: 50px
  max-width: 50px
  padding: 0 !important
</style>
