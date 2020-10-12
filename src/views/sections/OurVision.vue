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
          class="mx-auto title font-weight-light mb-8"
          max-width="720"
        >
          We are inspired by a passion for technology, design, and helping small and medium sized business achieve success. Radikov Consulting always strives to offer open and honest advice, along with high quality work, very competitive prices, and personal customer service. Our goal is to be a one-stop shop for all of your company’s web, data, and marketing needs. If there’s anything we can’t help with, we will use our extensive network to find someone who can help!
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
