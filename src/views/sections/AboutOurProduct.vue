<template>
  <base-section id="about-our-product">
    <base-section-heading
      color="grey lighten-2"
      icon="mdi-book-open-blank-variant"
      title="Our Story"
    >
      Radikov Consulting was started because we were tired of the inaccesibility of
      professional work to small businesses when they are trying to get their footing.
      We have one mission: to break down the barrier to entry into most things technical
      and provide a solution that is maintainable by the very people running their business.
      We are a grassroots solution for grassroots businesses.
    </base-section-heading>

    <v-container>
      <v-row>
        <v-col
          v-for="card in cards"
          :key="card.title"
          cols="12"
          md=6
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
