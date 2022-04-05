<template>
  <base-section
    id="portfolio-heading"
    :style="{background: $vuetify.theme.themes[theme].alternateBackground}"
  >
    <!--    <div class="py-12" />-->

    <v-container class="text-center">
      <h2 class="text-h3 font-weight-bold mb-3">
        VISUAL PORTFOLIO SHOWCASE
      </h2>

      <v-responsive
        class="mx-auto mb-12"
        width="56"
      >
        <v-divider class="mb-1" />
        <v-divider />
      </v-responsive>
    </v-container>
  </base-section>
</template>

<script>
  export default {
    name: 'SectionportfolioHeading',
    data: () => ({
      portfolioheading: [
        {
          icon: 'mdi-account-group-outline',
          title: 'Small Business',
          text: 'We’re a 100% remote startup. From one small business to another, we understand the limitations you’re working with. We help set you up with the tools and technologies to keep the business running without more overhead.',
        },
      ],
    }),
    computed: {
      theme () {
        return (this.$vuetify.theme.dark) ? 'dark' : 'light'
      },
    },
  }
</script>
