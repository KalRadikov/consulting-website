<template>
  <section id="parallax-statistics">
    <v-parallax
      :height="$vuetify.breakpoint.smAndDown ? 700 : 500"
      :src="require('@/assets/programming.jpg')"
    >
      <v-container class="fill-height">
        <!--        <v-container class="text-center">-->
        <!--        <h2 class="display-2 font-weight-bold mb-3">-->
        <!--          REALIZE YOUR ONLINE POTENTIAL-->
        <!--        </h2>-->
        <!--        </v-container>-->
        <v-row class="mx-auto">
          <v-col
            v-for="[value, title] of stats"
            :key="title"
            cols="12"
            md="3"
          >
            <div class="text-center">
              <div
                class="display-3 font-weight-black mb-4"
                v-text="value"
              />

              <div
                class="title font-weight-regular text-uppercase"
                v-text="title"
              />
            </div>
          </v-col>
        </v-row>
      </v-container>
    </v-parallax>
  </section>
</template>

<script>
  export default {
    name: 'SectionParallaxStatistics',

    data: () => ({
      stats: [
        ['2y', 'Web Experience'],
        ['5y', 'Professional experience'],
        ['15', 'Projects completed'],
        ['100%', 'passionate'],
      ],
    }),
  }
</script>
