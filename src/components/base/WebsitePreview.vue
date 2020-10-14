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
      companyName: String,
      caption: String,
      link: String,
      logo: String,
    },
  }
</script>

<style>
.img-hover-zoom {
  width:100%;
  height:auto;
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
