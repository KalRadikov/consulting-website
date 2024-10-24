<template>
  <base-section
    id="online-services"
    class="secondary"
  >
    <v-responsive
      class="mx-auto"
      max-width="1350"
    >
      <v-container fluid>
        <v-row>
          <v-col
            v-for="card in cards"
            :key="card.title"
            cols="12"
            sm="4"
            md="3"
          >
            <base-info-card
              align="center"
              dark
              v-bind="card"
            />
          </v-col>
        </v-row>
      </v-container>
    </v-responsive>
  </base-section>
</template>

<script>
  export default {
    name: 'SectionFeatures',

    data: () => ({
      cards: [
        {
          icon: 'mdi-cloud-outline',
          title: 'The Cloud',
          text: 'Efficiently build your company’s ML infrastructure with our cloud expertise and forget downtime, servers, and scale concerns. Allow yourself to focus on your business more.',
        },
        {
          icon: 'mdi-keyboard-outline',
          title: 'Trendy Design',
          text: 'Custom designed, mobile-responsive, professionally-built front end, complete with training and the ability to manage all your content.',
        },
        {
          icon: 'mdi-graph-outline',
          title: 'Data Science',
          text: 'Offload the mundane tasks, make your processes faster, and have the data backed results to make decisions. Equip your business with ML, NLP, AI, and Computer Vision to get ahead.',
        },
        {
          icon: 'mdi-cart-outline',
          title: 'Ecommerce',
          text: 'An online store can be a fantastic tool. It allows a business to make money 24 hours a day from buyers anywhere, with unlimited shelf space.',
        },
      ],
    }),
  }
</script>
