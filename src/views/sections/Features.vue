<template>
  <base-section
    id="features"
    :style="{background: $vuetify.theme.themes[theme].alternateBackground}"
  >
    <!--    <div class="py-12" />-->

    <v-container class="text-center">
      <h2 class="text-h3 font-weight-bold mb-3">
        WHAT WE FOCUS ON
      </h2>

      <v-responsive
        class="mx-auto mb-12"
        width="56"
      >
        <v-divider class="mb-1" />

        <v-divider />
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

    <!--    <div class="py-12" />-->
  </base-section>
</template>

<script>
  export default {
    name: 'SectionFeatures',
    data: () => ({
      features: [
        {
          icon: 'mdi-magnify',
          title: 'Search Engineering',
          text: 'With expertise in platforms like OpenSearch, Elasticsearch, and Solr, we improve search relevancy, reduce latency, and improve system efficiency for businesses.',
        },
        {
          icon: 'mdi-chart-areaspline',
          title: 'Scalability',
          text: 'Scale seamlessly while maintaining high performance under heavy workloads through proper search database resourcing and optimization techniques.',
        },
        {
          icon: 'mdi-brain',
          title: 'AI',
          text: 'Leverage machine learning models and vector databases to enhance natural language understanding, semantics, and performance for accurate and context-aware search results.',
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
