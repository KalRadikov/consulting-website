<template>
  <base-section id="about-our-services">
    <base-section-heading
      color="grey lighten-2"
      icon="mdi-vuetify"
      title="About our Services"
    />

    <v-container>
      <v-row>
        <v-col
          v-for="card in cards"
          :key="card.title"
          cols="12"
          md="4"
        >
          <base-info-card v-bind="card" />
        </v-col>
      </v-row>
    </v-container>
  </base-section>
</template>

<script>
  export default {
    name: 'SectionAboutOurProduct',
    // todo: write paragraphs here
    data: () => ({
      cards: [
        {
          title: 'Software Engineering',
          subtitle: 'Code',
          text: '',
          callout: '01',
        },
        {
          title: 'Infrastructure',
          subtitle: 'Backend',
          text: '',
          callout: '02',
        },
        {
          title: 'UI/UX Work',
          subtitle: 'Front end',
          text: '',
          callout: '03',
        },
        {
          title: 'CI/CD',
          subtitle: 'Development Flow',
          text: '',
          callout: '04',
        },
        {
          title: 'Testing',
          subtitle: 'Correctness',
          text: '',
          callout: '05',
        },
        {
          title: 'Best Practices',
          subtitle: 'Industry',
          text: '',
          callout: '06',
        },
      ],
    }),
  }
</script>
