<template>
  <v-container
    class="text-center"
  >
    <v-responsive
      class="mx-auto text-subtitle-1 font-weight-light mb-8 grey--text font-italic pa-2"
      max-width="720"
    >
      {{ review }}
    </v-responsive>
    <v-avatar
      class="elevation-12 mb-12"
      size="128"
    >
      <v-img :src="require('@/assets/' + picture + '')" />
    </v-avatar>
    <v-col class="py-0">
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="font-weight-bold title text-uppercase">
            {{ clientName }}
          </v-list-item-title>
          <v-list-item-subtitle class="text-uppercase"> {{ jobTitle }}</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
    </v-col>
  </v-container>
</template>

<script>
  export default {
    name: 'BaseCustomerReview',
    props: {
      picture: String,
      clientName: String,
      jobTitle: String,
      review: String,
    },
  }
</script>

<style scoped>

</style>
