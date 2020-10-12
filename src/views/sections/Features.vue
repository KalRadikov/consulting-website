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
          text: 'We’re a 100% remote startup. From one small business to another, we understand the limitations you’re working with. We help set you up with the tools and technologies to keep the business running without more overhead.',
        },
        {
          icon: 'mdi-chart-areaspline',
          title: 'Scalable',
          text: 'When the demand ramps up, we provide the right foundation and best practices for your business to grow and scale out. Starting small is okay, in fact that’s what gives us the flexibility to do it right the first time.',
        },
        {
          icon: 'mdi-shield-outline',
          title: 'Maintainable',
          text: 'We want to make the hand off as easy as possible so that you can maintain your solution without introducing unneeded complexity or technical ability. We build the right solution to compliment the abilities of whoever has to use it after.',
        },
      ],
    }),
  }
</script>
