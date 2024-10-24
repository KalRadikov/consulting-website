<template>
  <base-section
    id="our-story"
    :style="{background: $vuetify.theme.themes[theme].alternateBackground}"
  >
    <base-section-heading
      icon="mdi-book-open-blank-variant"
      title="What we do"
    />
    <v-container class="text-center">
      <v-responsive
        class="mx-auto text-h6 font-weight-light mb-8"
        max-width="720"
      >
        <p>We partner with large enterprises to tackle complex search and data science challenges.</p>

        <p>You’ve got vast amounts of data and a sense that it holds untapped potential—but where do you begin?</p>

        <br>
        <p><strong>{{ companyName }}</strong></p>
        <br>

        <p>
          For our clients, we’ve driven revenue growth, improved search algorithms, optimized dynamic pricing, reduced operational costs, minimized
          outages, squashed technical debt, and much more.
        </p>

        <p>No data? No problem. We can help you establish a process for collecting and processing the data you need.</p>
        <p>We’ll guide you in transforming that data into innovative, breakthrough technologies.</p>
      </v-responsive>
      <v-row>
        <v-col
          v-for="({ icon, title, text }, i) in features"
          :key="i"
          cols="12"
          md="4"
        >
          <v-card
            class="py-12 px-4"
            color="card"
            flat
          >
            <v-theme-provider dark>
              <div>
                <v-avatar
                  color="primary"
                  size="88"
                >
                  <v-icon
                    large
                    v-text="icon"
                  />
                </v-avatar>
              </div>
            </v-theme-provider>

            <v-card-title
              class="justify-center font-weight-black text-uppercase"
              v-text="title"
            />

            <v-card-text
              class="text-subtitle-1"
              v-text="text"
            />
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </base-section>
</template>

<script>
import BaseSectionHeading from '../../components/base/SectionHeading'

export default {
  name: 'SectionOurStory',
  components: {BaseSectionHeading},
  data: () => ({
    features: [
      {
        title: 'New and upcoming',
        text: '',
        icon: 'mdi-memory',
      },
      {
        title: 'Here for the community',
        text: '',
        icon: 'mdi-account-group',
      },
      {
        title: 'Affordable Prices',
        text: '',
        icon: 'mdi-cash-check',
      },
    ],
  }),
  computed: {
    theme() {
      return (this.$vuetify.theme.dark) ? 'dark' : 'light'
    },
    companyName() {
      return this.$companyName;
    }
  },
}
</script>
