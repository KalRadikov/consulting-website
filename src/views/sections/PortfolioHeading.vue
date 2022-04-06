<template>
  <base-section
    id="portfolio-heading"
    :style="{background: $vuetify.theme.themes[theme].alternateBackground}"
  >
    <!--    <div class="py-12" />-->

    <base-section-heading title="Visual Portfolio Showcase">
      Click to expand images
    </base-section-heading>
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
