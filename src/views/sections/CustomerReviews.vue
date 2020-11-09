<template>
  <base-section
    id="customer-reviews"
  >
    <base-section-heading
      title="Customer Reviews"
      icon="mdi-chat-processing"
    />
    <v-theme-provider>
      <v-carousel
        v-if="theme == 'light'"
        hide-delimiter-background
        light
      >
        <v-carousel-item
          v-for="({ headshot, name, title, text, }, i) in reviews"
          :key="i"
        >
          <base-customer-review
            :picture="headshot"
            :client-name="name"
            :job-title="title"
            :review="text"
          />
        </v-carousel-item>
      </v-carousel>
      <v-carousel
        v-if="theme == 'dark'"
        hide-delimiter-background
        dark
      >
        <v-carousel-item
          v-for="({ headshot, name, title, text, }, i) in reviews"
          :key="i"
        >
          <base-customer-review
            :picture="headshot"
            :client-name="name"
            :job-title="title"
            :review="text"
          />
        </v-carousel-item>
      </v-carousel>
    </v-theme-provider>
  </base-section>
</template>

<script>
  export default {
    name: 'CustomerReviews',
    data: () => ({
      reviews: [
        {
          headshot: 'pujara-logo.png',
          name: 'Rajesh Pujara',
          title: 'DIRECTOR OF PUJARA GAMES',
          text: '"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam aspernatur, sint recusandae cum temporibus quos saepe repellendus consectetur et reprehenderit. Ratione ipsam consequuntur quo eligendi mollitia veniam facere possimus inventore."',
        },
        {
          headshot: 'user-1.jpg',
          name: 'Lynda Read',
          title: 'DIRECTOR OF Company A',
          text: '"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam aspernatur, sint recusandae cum temporibus quos saepe repellendus consectetur et reprehenderit. Ratione ipsam consequuntur quo eligendi mollitia veniam facere possimus inventore."',
        },
        {
          headshot: 'user-2.jpg',
          name: 'Bernard Roche',
          title: 'DIRECTOR OF COMPANY B',
          text: '"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam aspernatur, sint recusandae cum temporibus quos saepe repellendus consectetur et reprehenderit. Ratione ipsam consequuntur quo eligendi mollitia veniam facere possimus inventore."',
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

<style scoped>

</style>
