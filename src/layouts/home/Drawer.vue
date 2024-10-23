<template>
  <v-theme-provider>
    <v-navigation-drawer
      bottom
      fixed
      height="auto"
      overlay-color="secondary"
      overlay-opacity=".8"
      temporary
      v-bind="$attrs"
      v-on="$listeners"
    >
      <v-list
        shaped
      >
        <v-list-item
          v-for="name in items"
          :key="name"
          :to="{ name }"
          :exact="name === 'Home'"
          color="primary"
        >
          <v-list-item-content>
            <v-list-item-title v-text="name" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </v-theme-provider>
</template>

<script>
  export default {
    name: 'HomeDrawer',

    props: {
      items: {
        type: Array,
        default: () => ([]),
      },
    },
  }
</script>
