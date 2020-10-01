<template>
  <base-section id="about-our-product">
    <base-section-heading
      color="grey lighten-2"
      icon="mdi-book-open-blank-variant"
      title="Our Story"
    >
      Radikov Consulting was started to better connect with our community to provide an easy to understand
      and affordable technical service. We have one mission: to break down the entry barrier to getting expert
      advice for just about anything tech-related. Our goal is to break down the problem or request into a
      series of requirements and then build upon them to create something you can manage when we are done.
      We are a grassroots solution for grassroots businesses.
    </base-section-heading>

    <v-container>
      <v-row>
        <v-col
          v-for="card in cards"
          :key="card.title"
          cols="12"
          md="6"
        >
          <base-info-card v-bind="card" />
        </v-col>
      </v-row>
    </v-container>
  </base-section>
</template>

<script>
  import BaseSectionHeading from '../../components/base/SectionHeading'
  export default {
    name: 'SectionAboutOurProduct',
    components: { BaseSectionHeading },
    data: () => ({
      cards: [
        {
          title: 'Here for the community',
          text: '',
          icon: 'mdi-account-group',
        },
        {
          title: 'New and upcoming',
          text: '',
          icon: 'mdi-memory',
        },
        {
          title: 'Affordable Prices',
          text: '',
          icon: 'mdi-cash-check',
        },
        {
          title: 'Bright Ideas',
          text: '',
          icon: 'mdi-lightbulb-on',
        },
      ],
    }),
  }
</script>
