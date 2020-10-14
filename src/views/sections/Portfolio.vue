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
            <v-responsive max-width="460px">
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
            v-for="({ website, desc, link }, i) in portfolio"
            :key="i"
          >
            <base-website-preview
              :image="website"
              :caption="desc"
              :link="link"
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
          website: 'desk.jpg',
          desc: 'This is slide 1',
          link: 'https://7ports.ca/',
        },
        {
          website: 'article.jpg',
          desc: 'This is slide 2',
          link: 'https://7ports.ca/',
        },
        {
          website: 'sink.jpg',
          desc: 'This is slide 3',
          link: 'https://7ports.ca/',
        },
      ],
    }),
  }
</script>

<style>

</style>
