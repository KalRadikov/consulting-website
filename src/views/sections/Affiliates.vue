<template>
  <base-section
    id="affiliates"
    :style="{background: $vuetify.theme.themes[theme].alternateBackground}"
    space="36"
  >
    <v-container>
      <base-section-heading title="we've worked with" />

      <v-slide-group>
        <template v-for="n in 6">
          <v-slide-item
            :key="n"
            class="align-self-center"
          >
            <base-img
              v-if="$vuetify.theme.dark"
              :src="require(`@/assets/logo-${n}.png`)"
              style="filter: invert(100%)"
              color="grey"
              contain
              height="40"
              width="128"
            />
            <base-img
              v-else
              :src="require(`@/assets/logo-${n}.png`)"
              color="grey"
              contain
              height="40"
              width="128"
            />
          </v-slide-item>

          <v-responsive
            v-if="n < 6"
            :key="`divider-${n}`"
            class="text-center"
            height="56"
            width="48"
          >
            <v-divider vertical />
          </v-responsive>
        </template>
      </v-slide-group>
    </v-container>
  </base-section>
</template>

<script>
  export default {
    name: 'SectionAffiliates',
    computed: {
      theme () {
        return (this.$vuetify.theme.dark) ? 'dark' : 'light'
      },
    },
  }
</script>

<style>
.invert { filter: invert(100%); }
</style>
