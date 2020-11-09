<template>
  <section
    id="portfolio"
  >
    <v-row no-gutters>
      <v-col
        cols="12"
        md="4"
        class="secondary"
      >
        <v-container class="extra-padding">
          <v-theme-provider dark>
            <v-responsive
              max-width="450"
              class="mx-auto"
            >
              <base-section-heading
                align="left"
                color="grey lighten-2"
                subtitle="Portfolio Showcase"
                title="RECENT WORKS"
              >
                On this section we have some recent examples of clients we’ve helped out. Check out the project notes and click the image to see the live website. Mouse over the screenshots to see the website scroll vertically.
              </base-section-heading>
            </v-responsive>
          </v-theme-provider>
        </v-container>
      </v-col>
      <v-col
        cols="12"
        md="8"
      >
        <v-carousel
          cycle
          hide-delimiter-background
        >
          <v-carousel-item
            v-for="({ website, desc, link, logo, name }, i) in portfolio"
            :key="i"
          >
            <base-website-preview
              :image="website"
              :caption="desc"
              :link="link"
              :logo="logo"
              :company-name="name"
            />
          </v-carousel-item>
        </v-carousel>
      </v-col>
    </v-row>
  </section>
</template>

<script>
  export default {
    name: 'Portfolio',
    data: () => ({
      portfolio: [
        {
          // image sizes are 1280 x 1280 made with https://www.photojoiner.net/
          website: 'pujara-scrollable.jpg',
          name: 'Pujara Games',
          desc: 'More portfolio work coming soon...',
          logo: 'pujara-logo.png',
          link: 'https://7ports.ca/',
        },
        {
          website: 'example-site.png',
          name: 'Company Name',
          desc: 'More portfolio work coming soon...',
          logo: 'user-1.jpg',
          link: 'https://7ports.ca/',
        },
        {
          website: 'example-site.png',
          name: 'Company Name',
          desc: 'More portfolio work coming soon...',
          logo: 'user-2.jpg',
          link: 'https://7ports.ca/',
        },
      ],
    }),
  }
</script>

<style>

</style>
