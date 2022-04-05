<template>
  <base-section
    id="portfolio"
  >
    <v-container>
      <vue-masonry-wall
        :items="items"
        :options="options"
      >
        <template v-slot:default="{item}">
          <div class="Item">
            <img :src="require('@/assets/' + item.image + '')">
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
  function content () {
    const length = Math.random() * 300 + 30
    let result = ''
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    const charactersLength = characters.length
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength))
    }
    return result
  }
  export default {
    name: 'VisualPortfolio',
    components: { VueMasonryWall },
    data () {
      return {
        options: {
          width: 400,
          padding: {
            2: 8,
            default: 6,
          },
        },
        items: [
          {
            title: 'Curabitur sit amet nunc',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec id mollis erat. Aliquam erat volutpat. Nunc erat lacus, rhoncus nec.',
            image: 'portfolio-6.jpg',
          },
          {
            title: 'Sed non ante non cras amet',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas non sagittis leo. Vestibulum sit amet metus nec neque dignissim dapibus.',
            image: 'portfolio-1.jpg',
          },
          {
            title: 'Curabitur sit amet nunc',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec id mollis erat. Aliquam erat volutpat. Nunc erat lacus, rhoncus nec.',
            image: 'portfolio-2.jpg',
          },
          {
            title: 'Proin pharetra, ante metus',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ac diam ac ex efficitur posuere. Pellentesque cursus pellentesque risus, non.',
            image: 'portfolio-3.jpg',
          },
          {
            title: 'Sed non ante non cras amet',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas non sagittis leo. Vestibulum sit amet metus nec neque dignissim dapibus.',
            image: 'portfolio-0.jpg',
          },
          {
            title: 'Cras pharetra non enim a',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi malesuada varius nibh, a malesuada nisi feugiat eget. Aenean convallis semper.',
            image: 'portfolio-4.jpg',
          },
          {
            title: 'Sed non ante non cras amet',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas non sagittis leo. Vestibulum sit amet metus nec neque dignissim dapibus.',
            image: 'portfolio-5.jpg',
          },

          {
            title: 'Proin pharetra, ante metus',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ac diam ac ex efficitur posuere. Pellentesque cursus pellentesque risus, non.',
            image: 'portfolio-7.jpg',
          },
          {
            title: 'Cras pharetra non enim a',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi malesuada varius nibh, a malesuada nisi feugiat eget. Aenean convallis semper.',
            image: 'portfolio-8.jpg',
          },
          {
            title: 'Curabitur sit amet nunc',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec id mollis erat. Aliquam erat volutpat. Nunc erat lacus, rhoncus nec.',
            image: 'portfolio-9.jpg',
          },
          {
            title: 'Proin pharetra, ante metus',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ac diam ac ex efficitur posuere. Pellentesque cursus pellentesque risus, non.',
            image: 'portfolio-10.jpg',
          },
          {
            title: 'Cras pharetra non enim a',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi malesuada varius nibh, a malesuada nisi feugiat eget. Aenean convallis semper.',
            image: 'portfolio-11.jpg',
          },
        ],
      }
    },
  }
</script>

<style scoped>
.Item {
  overflow: hidden;
  border-radius: 4px;
  width: 100%;
  background: #F5F5F5;
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
}
</style>
