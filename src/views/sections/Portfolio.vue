<template>
  <section id="portfolio">
    <base-section-heading
      color="grey lighten-2"
      icon="mdi-vuetify"
      title="Portfolio Showcase"
    />
    <v-carousel
      v-model="model"
      cycle
    >
      <v-carousel-item>
        <v-img
          :src="require('@/assets/desk.jpg')"
        />
      </v-carousel-item>
      <v-carousel-item>
        <v-img
          :src="require('@/assets/article.jpg')"
        />
      </v-carousel-item>

      <v-carousel-item>
        <v-img
          :src="require('@/assets/sink.jpg')"
        />
      </v-carousel-item>
    </v-carousel>
    <v-list two-line>
      <v-list-item>
        <v-list-item-avatar>
          <v-img src="https://cdn.vuetifyjs.com/images/john.png" />
        </v-list-item-avatar>
        <v-list-item-content>
          <v-list-item-title>John Leider</v-list-item-title>
          <v-list-item-subtitle>Author</v-list-item-subtitle>
        </v-list-item-content>
        <v-list-item-content>
          <v-list-item-title>
            {{ captions[model] }}
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </section>
</template>

<script>
  export default {
    name: 'Portfolio',
    data () {
      return {
        model: 0,
        captions: [
          'This is slide 1',
          'This is the second slide',
          'This is a third and final slide',
        ],
      }
    },
  }
</script>

<style>

</style>
