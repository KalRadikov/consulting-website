<template>
  <base-section id="about-me">
    <v-container class="text-center">
      <h2 class="text-h3 font-weight-bold mb-3">
        THE TEAM
      </h2>

      <v-responsive
        class="mx-auto mb-8"
        width="56"
      >
        <v-divider class="mb-1" />

        <v-divider />
      </v-responsive>

      <v-responsive
        class="mx-auto text-h6 font-weight-light mb-8"
        max-width="720"
      >
        Kaloyan (Kal) Radikov is a Calgary based Full-Stack developer with a
        passion for being on the cutting edge of software development.
        Having worked in a wide range of companies from larger monolithic
        enterprise to smaller fast paced microservice organizations, he
        has a broad and in-depth skill set covering technical coding,
        UI Design, testing, CI/CD, and cloud/local infrastructure. He is well
        equipped to be out of his technical comfort zone and deal with high
        stress scenarios. He loves to tinker with computers, lift heavy things,
        go hiking, and paint on the side.
      </v-responsive>

      <v-avatar
        class="elevation-12 mb-12"
        size="128"
      >
        <v-img :src="require('@/assets/kal-headshot-cropped.jpg')" />
      </v-avatar>

      <div />

      <v-btn
        color="grey"
        href="https://www.linkedin.com/in/kal-radikov/"
        outlined
        large
      >
        <span class="grey--text text--darken-1 font-weight-bold">
          More About Kal
        </span>
      </v-btn>
    </v-container>

    <!--    <div class="py-12" />-->
  </base-section>
</template>

<script>
  export default {
    name: 'SectionKeepInTouch',
  }
</script>
