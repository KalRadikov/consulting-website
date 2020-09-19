<template>
  <base-section
    id="features"
    class="grey lighten-3"
  >
    <!--    <div class="py-12" />-->

    <v-container class="text-center">
      <h2 class="display-2 font-weight-bold mb-3">
        WHAT WE FOCUS ON
      </h2>

      <v-responsive
        class="mx-auto mb-12"
        width="56"
      >
        <v-divider class="mb-1" />

        <v-divider />
      </v-responsive>

      <v-row>
        <v-col
          v-for="({ icon, title, text }, i) in features"
          :key="i"
          cols="12"
          md="4"
        >
          <v-card
            class="py-12 px-4"
            color="grey lighten-5"
            flat
          >
            <v-theme-provider dark>
              <div>
                <v-avatar
                  color="primary"
                  size="88"
                >
                  <v-icon
                    large
                    v-text="icon"
                  />
                </v-avatar>
              </div>
            </v-theme-provider>

            <v-card-title
              class="justify-center font-weight-black text-uppercase"
              v-text="title"
            />

            <v-card-text
              class="subtitle-1"
              v-text="text"
            />
          </v-card>
        </v-col>
      </v-row>
    </v-container>

    <!--    <div class="py-12" />-->
  </base-section>
</template>

<script>
  export default {
    name: 'SectionFeatures',

    data: () => ({
      features: [
        {
          icon: 'mdi-account-group-outline',
          title: 'Small Business',
          text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto cupiditate sint possimus quidem atque harum excepturi nemo velit tempora! Enim inventore fuga, qui ipsum eveniet facilis obcaecati corrupti asperiores nam',
        },
        {
          icon: 'mdi-chart-areaspline',
          title: 'Scalable',
          text: 'Sed ut elementum justo. Suspendisse non justo enim. Vest d ut elementum justo. Suspendisse non justo enim. Vestibuluibulum cursus mauris dui, a luctus ex blandit. Lorem ipsum dolor sit amet consectetur adipisicing elit. qui ipsum eveniet facilis obcaecati corrupti consectetur adipisicing elit.',
        },
        {
          icon: 'mdi-shield-outline',
          title: 'Maintainable',
          text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto cupiditate sint possimus quidem atque harum excepturi nemo velit tempora! Enim inventore fuga, qui ipsum eveniet facilis obcaecati corrupti asperiores nam',
        },
      ],
    }),
  }
</script>
