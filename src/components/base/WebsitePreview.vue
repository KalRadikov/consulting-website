<template>
  <div>
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

    <div class="img-hover-zoom">
      <a
        :href="link"
        target="_blank"
      >
        <v-img
          :src="require('@/assets/' + image + '')"
          class="hover-zoom"
        >
        </v-img>
      </a>
    </div>
  </div>
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
</style>
