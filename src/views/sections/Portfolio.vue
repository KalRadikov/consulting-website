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
                On this section we have some recent examples of clients we’ve helped out. Click the arrows to see end result and project notes. Mouse over the screenshots to see the website scroll vertically.
              </base-section-heading>
            </v-responsive>
          </v-theme-provider>
        </v-container>
      </v-col>
      <v-col
        cols="12"
        md="8"
      >
        <v-carousel>
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
          website: 'sink.jpg',
          name: 'Pujara Games',
          desc: 'Portfolio work coming soon...',
          logo: 'logo.svg',
          link: 'https://7ports.ca/',
        },
        {
          website: 'article.jpg',
          name: 'Company Name',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
          logo: 'user-1.jpg',
          link: 'https://7ports.ca/',
        },
        {
          website: 'desk.jpg',
          name: 'Company Name',
          desc: 'Portfolio work coming soon...',
          logo: 'user-2.jpg',
          link: 'https://7ports.ca/',
        },
      ],
    }),
  }
</script>

<style>

</style>
