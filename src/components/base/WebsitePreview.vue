<template>
  <div>
    <v-list
      two-line
    >
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
            {{ caption }}
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>

    <div class="img-hover-zoom">
      <a
        :href="link"
        target="_blank"
      >
        <img
          :src="require('@/assets/' + image + '')"
          class="img-hover-zoom"
        >
      </a>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'BaseWebsitePreview',
    props: {
      image: String,
      caption: String,
      link: String,
    },
  }
</script>

<style>
.img-hover-zoom {
  max-width:100%;
  max-height:100%;
  overflow: hidden; /* [1.2] Hide the overflowing of child elements */
}

/* [2] Transition property for smooth transformation of images */
.img-hover-zoom img {
  transition: transform .5s ease;
}

/* [3] Finally, transforming the image when container gets hovered */
.img-hover-zoom:hover img {
  transform: scale(1.3);
}
</style>
