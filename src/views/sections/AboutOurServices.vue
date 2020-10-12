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
// todo: convince why business needs these
  export default {
    name: 'SectionAboutOurProduct',
    data: () => ({
      cards: [
        {
          title: 'Software Engineering',
          subtitle: 'Code',
          text: 'Our team of software engineers coordinate the creation, maintenance and growth of a business’ computer systems. Our team is proficient in the worlds most popular technologies and languages such as Python, Java, .NET, AWS, and Vue to name a few.',
          callout: '01',
        },
        {
          title: 'Infrastructure',
          subtitle: 'Back end',
          text: 'We collaborate with business stakeholders to understand their particular needs, then translate those into technical requirements and come up with the most effective and efficient solution for designing the technology.',
          callout: '02',
        },
        {
          title: 'UI/UX Work',
          subtitle: 'Front end',
          text: 'We accurately identify specific issues in user experience and provide recommendations and codified solutions to influence the design. Making a website visually attractive and easy to use, from development to delivery.',
          callout: '03',
        },
        {
          title: 'Continuous Delivery',
          subtitle: 'Development Flow',
          text: 'To be successful at continuous integration and continuous delivery, it is critical to do integration and testing well. With a solid foundation, we excel on all three fronts: quality, frequency, and predictability.',
          callout: '04',
        },
        {
          title: 'Testing',
          subtitle: 'Correctness',
          text: 'As your business grows, to ensure the foundation A good testing suite should try to break the app and help understand its limit. We have experience with: Automated testing, Unit tests, Integration tests, Functional tests, End-to-end tests, Acceptance testing, Performance testing.',
          callout: '05',
        },
        {
          title: 'Best Practices',
          subtitle: 'Industry',
          text: 'Readable yet efficient code, we highly value the S.O.L.I.D principles and other guiding best practices of modern software design.',
          callout: '06',
        },
      ],
    }),
  }
</script>
