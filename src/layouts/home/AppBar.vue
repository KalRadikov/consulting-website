<template>
  <div>
    <v-app-bar
      id="home-app-bar"
      app
      color="topBar"
      elevation="1"
      height="80"
    >
      <!--      <base-img-->
      <!--        :src="require('@/assets/logo.svg')"-->
      <!--        class="mr-3 hidden-xs-only"-->
      <!--        contain-->
      <!--        max-width="52"-->
      <!--        width="100%"-->
      <!--      />-->

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
      <v-spacer />
      <div>
        <v-tabs
          class="hidden-sm-and-down"
          optional
        >
          <v-tab
            v-for="(name, i) in items"
            :key="i"
            :to="{ name }"
            :exact="name === 'Home'"
            :ripple="false"
            active-class="text--primary"
            class="font-weight-bold"
            min-width="96"
            text
          >
            {{ name }}
          </v-tab>
          <!--          <v-container class="d-flex align-center justify-center">-->
          <!--            <v-tooltip-->
          <!--              v-if="!$vuetify.theme.dark"-->
          <!--              bottom-->
          <!--            >-->
          <!--              <template v-slot:activator="{ on }">-->
          <!--                <v-btn-->
          <!--                  color="info"-->
          <!--                  x-small-->
          <!--                  fab-->
          <!--                  v-on="on"-->
          <!--                  @click="darkMode"-->
          <!--                >-->
          <!--                  <v-icon class="mr-1">-->
          <!--                    mdi-moon-waxing-crescent-->
          <!--                  </v-icon>-->
          <!--                </v-btn>-->
          <!--              </template>-->
          <!--              <span>Dark Mode On</span>-->
          <!--            </v-tooltip>-->

          <!--            <v-tooltip-->
          <!--              v-else-->
          <!--              bottom-->
          <!--            >-->
          <!--              <template v-slot:activator="{ on }">-->
          <!--                <v-btn-->
          <!--                  color="info"-->
          <!--                  x-small-->
          <!--                  fab-->
          <!--                  v-on="on"-->
          <!--                  @click="darkMode"-->
          <!--                >-->
          <!--                  <v-icon color="yellow">-->
          <!--                    mdi-white-balance-sunny-->
          <!--                  </v-icon>-->
          <!--                </v-btn>-->
          <!--              </template>-->
          <!--              <span>Dark Mode Off</span>-->
          <!--            </v-tooltip>-->
          <!--          </v-container>-->
        </v-tabs>
      </div>

      <v-app-bar-nav-icon
        class="hidden-md-and-up"
        @click="drawer = !drawer"
      />
    </v-app-bar>

    <home-drawer
      v-model="drawer"
      :items="items"
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
      items: [
        'Home',
        'Services',
        'Gallery',
        'About',
        'Contact',
        // 'Test Page',
      ],
    }),
    mounted () {
      const time = new Date(new Date().toLocaleString()).getHours()
      this.$vuetify.theme.dark = time > 18 || time < 6
    },
    methods: {
      darkMode () {
        this.$vuetify.theme.dark = !this.$vuetify.theme.dark
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
</style>
