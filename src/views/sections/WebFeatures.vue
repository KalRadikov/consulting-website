<template>
  <base-section id="web-features">
    <base-section-heading title="Web Development Features">
      Close to 50% of online viewers see a website’s design as the number one criterion with respect to a company's credibility. If your website looks staled and outdated, or simply non-professional, you could be losing customers.
    </base-section-heading>

    <v-container>
      <v-row>
        <v-col
          v-for="(feature, i) in features"
          :key="i"
          cols="12"
          md="6"
        >
          <base-avatar-card
            v-bind="feature"
            align="left"
            horizontal
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis illum veniam cum dolores ratione commodi
            beatae quas maxime, laboriosam excepturi solut!
          </base-avatar-card>
        </v-col>
      </v-row>
    </v-container>
  </base-section>
</template>

<script>
  export default {
    name: 'SectionThemeFeatures',

    data: () => ({
      features: [
        {
          title: 'Pixel Perfect Design',
          icon: 'mdi-fountain-pen-tip',
          text: 'No matter the resolution of the screen you are using. Your solution will look flawless and professional. No blurry logos, no offset items.',
        },
        {
          title: 'Desktop and Mobile ready',
          icon: 'mdi-cellphone',
          text: 'Whether your customers are viewing it at home or on the go, it’ll look amazing. See how this website looks on different devices!',
        },
        {
          color: 'primary',
          dark: true,
          title: 'Easily Customizable',
          text: 'Check out the gear icon on the right to see how easy it is to customize and make your solution stand out.',
          icon: 'mdi-pencil-box-outline',
        },
        {
          title: 'Aesthetics',
          icon: 'mdi-image-size-select-actual',
          text: 'Be it implementing image parallax or flashy transitions, we make sure your solution looks the best it can.',
        },
        {
          title: 'Search Engine Optimized',
          icon: 'mdi-ice-pop',
          text: 'Optimizing your site and content with SEO in mind can help your pages rank higher in the search results.',
        },
        {
          title: 'Domain name and hosting',
          icon: 'mdi-database',
          text: 'An essential part of any website. Going with the right webhost or domain registrar can be day/night to your website’s performance.',
        },
      ],
    }),
  }
</script>
