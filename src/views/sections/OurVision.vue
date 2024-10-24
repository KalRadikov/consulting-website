<template>
  <section id="our-vision">
    <v-parallax
      :height="$vuetify.breakpoint.smAndDown ? 700 : 500"
      :src="require('@/assets/article-dark.jpg')"
    >
      <v-container class="text-center">
        <base-section-heading
          icon="mdi-eye"
          title="Our Vision"
        />
        <v-responsive
          class="mx-auto text-h6 font-weight-light mb-8"
          max-width="720"
        >
          We envision a future where organizations can easily implement advanced search engineering and intelligent data analysis and drive innovation. We help drive discovery for our clients, leveraging our vast expertise in search and ML to empower them to make impactful decisions that shape a smarter, more connected world.
        </v-responsive>
      </v-container>
    </v-parallax>
  </section>
</template>

<script>
  import BaseSectionHeading from '../../components/base/SectionHeading'
  export default {
    name: 'SectionOurStory',
    components: { BaseSectionHeading },
  }
</script>
