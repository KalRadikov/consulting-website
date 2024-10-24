<template>
  <v-theme-provider :dark="dark">
    <v-container class="pa-0">
      <v-row
        :justify="justify"
        no-gutters
      >
        <v-col
          v-if="icon"
          :class="`text-${align}`"
          cols="12"
          class="mb-4"
        >
          <base-icon :color="color">
            {{ icon }}
          </base-icon>
        </v-col>

        <v-col
          v-if="title || subtitle"
          :cols="callout ? 9 : 12"
        >
          <base-subtitle
            v-if="subtitle"
            :title="subtitle"
            space="1"
          />

          <base-title
            :title="title"
            class="text-uppercase"
            space="1"
          />

          <base-divider :color="color" />

          <base-body
            v-if="text || $slots.default"
            :text="text"
            space="6"
          >
            <slot />
          </base-body>
        </v-col>

        <v-col
          v-if="callout"
          cols="2"
        >
          <div
            :class="calloutClasses"
            v-text="callout"
          />
        </v-col>
      </v-row>
    </v-container>
  </v-theme-provider>
</template>

<script>
// Mixins
import Heading from '@/mixins/heading'
import BaseDivider from "@/components/base/Divider.vue";
import BaseBody from "@/components/base/Body.vue";
import BaseTitle from "@/components/base/Title.vue";
import BaseSubtitle from "@/components/base/Subtitle.vue";
import BaseIcon from "@/components/base/Icon.vue";

export default {
  name: 'BaseInfoCard',
  components: {BaseIcon, BaseSubtitle, BaseTitle, BaseBody, BaseDivider},

  mixins: [Heading],

  props: {
    dark: Boolean,
    callout: String,
    color: {
      type: String,
      default: 'primary',
    },
    icon: String,
    subtitle: String,
    text: String,
    title: String,
  },

  computed: {
    calloutClasses() {
      return {
        'text-h2': true,
        'font-weight-bold': true,
        'pr-8': true,
        'grey--text text--lighten-4': !this.dark,
        'grey--text text--darken-4': this.dark,
      };
    },
  },
}
</script>

<style scoped>
/* Optional: Add styles for dark mode if needed */
</style>
