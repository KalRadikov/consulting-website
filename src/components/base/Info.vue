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
        title="REALIZE YOUR ONLINE POTENTIAL"
        weight="regular"
      />

      <base-body>
        We want your website to look great, work better, and get found online. With a focus on quality design and helpful customer service, we also offer flexible payment plans and financing. Contact us today, or get a free quote and consultation on your dream website project. Affordable web design in Calgary.
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
          text: '8553 N. Beach St. Ste. 227<br>Fort Worth, Texas 76137',
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
