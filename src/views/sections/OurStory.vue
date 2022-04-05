<template>
  <base-section
    id="our-story"
    :style="{background: $vuetify.theme.themes[theme].alternateBackground}"
  >
    <base-section-heading
      icon="mdi-book-open-blank-variant"
      title="Our Story"
    />
    <v-container class="text-center">
      <v-responsive
        class="mx-auto text-h6 font-weight-light mb-8"
        max-width="720"
      >
        Radikov Consulting was started in 2020 to better connect with our community to provide an understandable
        and affordable solution. After many years experience in professional software development, founder and CEO,
        Kaloyan Radikov wanted to follow his passsion and branch out of slow moving enterprise practice and focus on exceptional
        aesthetic, responsive speed, easy scalability, and much needed flexibility of a modern technical service.
        We are a grassroots solution for grassroots businesses.
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
    components: { BaseSectionHeading },
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
      theme () {
        return (this.$vuetify.theme.dark) ? 'dark' : 'light'
      },
    },
  }
</script>
