<template>
  <base-section
    id="portfolio"
  >
    <vue-easy-lightbox
      scroll-disabled
      :visible="visible"
      :imgs="imgs"
      :index="index"
      @hide="handleHide"
    />
    <v-container>
      <vue-masonry-wall
        :items="items"
        :options="options"
      >
        <template v-slot:default="{item}">
          <div
            class="Item"
            :style="{background: $vuetify.theme.themes[theme].alternateBackground}"
          >
            <img
              :src="require('@/assets/visualportfolio/' + item.image + '')"
              @click="showMultiples(item.link)"
            >
            <div class="Content">
              <h5 class="text-ellipsis-1l">
                {{ item.title }}
              </h5>
              <!--              <p class="text-ellipsis-2l">-->
              <!--                {{ item.content }}-->
              <!--              </p>-->
            </div>
          </div>
        </template>
      </vue-masonry-wall>
    </v-container>
  </base-section>
</template>

<script>
  import VueMasonryWall from 'vue-masonry-wall'
  import VueEasyLightbox from 'vue-easy-lightbox'
  export default {
    name: 'VisualPortfolio',
    components: { VueMasonryWall, VueEasyLightbox },
    data () {
      return {
        options: {
          width: 400,
          padding: {
            2: 8,
            default: 6,
          },
        },
        myStyle: {
          backgroundColor: '#111111',
        },
        imgs: '', // Img Url , string or Array of string
        visible: false,
        index: 0, // default: 0
        // https://radikovconsulting.imgur.com/all online pictures are here
        items: [
          {
            title: 'Abstract motorcycle - oil on canvas',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec id mollis erat. Aliquam erat volutpat. Nunc erat lacus, rhoncus nec.',
            image: 'motorcycle.jpg',
            link: 'https://i.imgur.com/dht8KGY.jpg',
            hasMultiple: false,
          },
          {
            title: 'Abstract Mona Lisa - oil on canvas',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas non sagittis leo. Vestibulum sit amet metus nec neque dignissim dapibus.',
            image: 'monalisa.jpg',
            link: 'https://i.imgur.com/cS8SRGM.jpg',
          },
          {
            title: 'Abstract Guitar - oil on canvas',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec id mollis erat. Aliquam erat volutpat. Nunc erat lacus, rhoncus nec.',
            image: 'blueguitar.jpg',
            link: 'https://i.imgur.com/6xexz1C.jpg',
          },
          {
            title: 'Cow Skull - pastel on paper',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec id mollis erat. Aliquam erat volutpat. Nunc erat lacus, rhoncus nec.',
            image: 'skull.jpg',
            link: 'https://i.imgur.com/wKItwOg.jpg',
          },
          {
            title: 'Abstract Guitar - painted wood sculpture (multiple images)',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ac diam ac ex efficitur posuere. Pellentesque cursus pellentesque risus, non.',
            image: 'woodguitar1.jpg',
            link: ['https://i.imgur.com/PXQ5V57.jpg', 'https://i.imgur.com/psaT5rN.jpg', 'https://i.imgur.com/TDhKReW.jpg'],
          },
          {
            title: 'Pastel Study - pastel on canvas',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec id mollis erat. Aliquam erat volutpat. Nunc erat lacus, rhoncus nec.',
            image: 'monet.jpg',
            link: 'https://i.imgur.com/mK6RsdY.jpg',
          },
          {
            title: 'Shape of a Guitar - photograph',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas non sagittis leo. Vestibulum sit amet metus nec neque dignissim dapibus.',
            image: 'womanguitar.jpg',
            link: 'https://i.imgur.com/2Ya7Ebm.jpg',
          },
          {
            title: 'Twisted Tower - cardboard (multiple images)',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec id mollis erat. Aliquam erat volutpat. Nunc erat lacus, rhoncus nec.',
            image: 'eiffel.jpg',
            link: ['https://i.imgur.com/F8azTHh.jpg', 'https://i.imgur.com/u03vkMp.jpg'],
          },
          {
            title: 'Modern Eiffel - wood sculpture',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec id mollis erat. Aliquam erat volutpat. Nunc erat lacus, rhoncus nec.',
            image: 'eiffelwood2.jpg',
            link: ['https://i.imgur.com/PaAS9T2.jpg', 'https://i.imgur.com/4Lsmbej.jpg'],
          },
          {
            title: 'Lighting Study - chalk/pencil on paper',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi malesuada varius nibh, a malesuada nisi feugiat eget. Aenean convallis semper.',
            image: 'chairs.jpg',
            link: 'https://i.imgur.com/OpKDYjT.jpg',
          },
          {
            title: 'Clarity - acrylic on canvas',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec id mollis erat. Aliquam erat volutpat. Nunc erat lacus, rhoncus nec.',
            image: 'clarity.jpg',
            link: 'https://i.imgur.com/AGVGAHV.jpg',
          },
          {
            title: 'Burning Forest - acrylic on canvas',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ac diam ac ex efficitur posuere. Pellentesque cursus pellentesque risus, non.',
            image: 'forest.jpg',
            link: 'https://i.imgur.com/6oT08k7.jpg',
          },
          {
            title: 'Clean Water - logo design',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ac diam ac ex efficitur posuere. Pellentesque cursus pellentesque risus, non.',
            image: 'bottles.jpg',
            link: 'https://i.imgur.com/9oL0KP4.jpg',
          },
        ],
      }
    },
    computed: {
      theme () {
        return (this.$vuetify.theme.dark) ? 'dark' : 'light'
      },
    },
    methods: {
      showSingle () {
        this.imgs = 'http://via.placeholder.com/350x150'
        // or
        this.imgs = { title: 'this is a placeholder', src: 'http://via.placeholder.com/350x150' }
        this.show()
      },
      showMultiple () {
        this.imgs = ['http://via.placeholder.com/350x150', 'http://via.placeholder.com/350x150']
        // or
        this.imgs = [
          { title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec id mollis erat. Aliquam erat volutpat. Nunc erat lacus, rhoncus nec.', src: 'https://i.imgur.com/dht8KGY.jpg' },
          'https://images.unsplash.com/photo-1598209279122-8541213a0387?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1031&q=80',
        ]

        this.index = 0 // index of imgList
        this.show()
      },
      showMultiples (linkObject) {
        this.imgs = linkObject

        this.index = 0 // index of imgList
        this.show()
      },
      show () {
        this.visible = true
      },
      handleHide () {
        this.visible = false
      },
    },
  }
</script>

<style scoped>
.Item {
  overflow: hidden;
  border-radius: 4px;
  width: 100%;
  box-shadow: 0 6px 6px rgba(0,0,0,0.2);
}
.Content {
  padding: 20px;
}
img {
  object-fit: cover;
  width: 100%;
  height: 100%;
  line-height: 0;
  display: block;
  cursor: pointer;
}
</style>
