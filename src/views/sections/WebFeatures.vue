<template>
  <base-section id="web-features">
    <base-section-heading title="Search Engineering Expertise">
      In today's data-driven world, effective search functionality is crucial for enhancing user experience and driving engagement. Our expertise in search technologies ensures that your applications deliver fast, relevant, and scalable results.
    </base-section-heading>

    <v-container>
      <v-row>
        <v-col
          v-for="(feature, i) in features"
          :key="i"
          cols="12"
          md="6"
        >
          <base-avatar-card
            v-bind="feature"
            align="left"
            horizontal
            :weird-fix="true"
          >
            {{ feature.description }}
          </base-avatar-card>
        </v-col>
      </v-row>
    </v-container>
  </base-section>
</template>

<script>
export default {
  name: 'SectionThemeFeatures',
  data: () => ({
    features: [
      {
        color: 'primary',
        dark: true,
        title: 'Entity Recognition',
        icon: 'mdi-magnify',
        description: 'Utilizing advanced machine learning techniques to accurately identify and resolve entities, improving search relevancy by over 90%.',
      },
      {
        color: 'primary',
        dark: true,
        title: 'Scalability Solutions',
        icon: 'mdi-server',
        description: 'Implementing optimization techniques in search databases to ensure seamless scaling, reducing indexing times significantly.',
      },
      {
        color: 'primary',
        dark: true,
        title: 'Vector Search Implementation',
        icon: 'mdi-vector-square',
        description: 'Integrating vector databases to enhance search capabilities and deliver contextually relevant results through similarity search.',
      },
      {
        color: 'primary',
        dark: true,
        title: 'NLP Integration',
        icon: 'mdi-language-python',
        description: 'Leveraging natural language processing to improve query understanding and enhance user interactions with search functionalities.',
      },
      {
        color: 'primary',
        dark: true,
        title: 'Entity Co-linking and Resolution',
        icon: 'mdi-link',
        description: 'Implementing techniques for merging data, entity co-linking, and resolution to ensure accurate representation from context.',
      },
      {
        color: 'primary',
        dark: true,
        title: 'Data Quality Improvement',
        icon: 'mdi-database-check',
        description: 'Enhancing data quality in search documents through thorough validation and transformation processes to ensure accurate results.',
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
