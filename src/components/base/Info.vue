<template>
  <v-theme-provider :dark="dark">
    <div>
      <base-img
        :src="require('@/assets/radikov-consulting-light.svg')"
        contain
        max-width="168"
        min-height="78"
        width="100%"
      />

      <base-title
        size="body-1"
        space="4"
        title="SMART SEARCH, SMARTER AI."
        weight="regular"
      />

      <base-body>
        Revolutionize data discovery and analysis through innovative search engineering and advanced machine learning algorithms. We leverage generative AI to transform how organizations navigate, interpret, and utilize data, so they can unlock valuable insights and make informed decisions in an increasingly complex digital landscape.
      </base-body>

      <base-btn
        class="mb-12"
        color="white"
        outlined
      >
        More Info
      </base-btn>
    </div>
  </v-theme-provider>
</template>

<script>
  export default {
    name: 'BaseInfo',

    props: {
      title: String,
      dark: Boolean,
    },

    data: () => ({
      business: [
        {
          icon: 'mdi-map-marker-outline',
          title: 'Address',
          text: '8553 N. Beach St. Ste. 227<br>Fort Worth, Texas 7613',
        },
        {
          icon: 'mdi-cellphone',
          title: 'Phone',
          text: '01 (800) 433 744<br>01 (800) 433 633',
        },
        {
          icon: 'mdi-email',
          title: 'Email',
          text: 'john@vuetifyjs.com<br>heather@vuetifyjs.com',
        },
      ],
    }),
  }
</script>
