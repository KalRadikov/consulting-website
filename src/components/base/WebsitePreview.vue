<template>
  <v-card tile>
    <v-list
      two-line
      class="rounded-0"
    >
      <v-list-item>
        <v-list-item-avatar>
          <v-img :src="require('@/assets/' + logo + '')" />
        </v-list-item-avatar>
        <v-list-item-content>
          <v-list-item-title>{{ companyName }}</v-list-item-title>
          <v-list-item-subtitle class="text-wrap">
            {{ caption }}
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
    </v-list>
    <v-container class="overflow ma-0 pa-0">
      <a
        :href="link"
        target="_blank"
      >
        <v-img
          :src="require('@/assets/' + image + '')"
          class="hover-zoom"
          height="620px"
        />
      </a>
    </v-container>
  </v-card>
</template>

<script>
  export default {
    name: 'BaseWebsitePreview',
    props: {
      image: String,
      companyName: String,
      caption: String,
      link: String,
      logo: String,
    },
  }
</script>

<style>
.hover-zoom:hover {
  transform: scale(1.2);
}
.hover-zoom {
  transition: transform .5s ease;
}
.hover-zoom {
  width:100%;
  height:auto;
  overflow: hidden; /* [1.2] Hide the overflowing of child elements */
}
.overflow {
  overflow: hidden;
}
</style>
