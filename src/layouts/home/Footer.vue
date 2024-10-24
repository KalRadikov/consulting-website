<template>
  <v-footer
    id="home-footer"
    color="grey darken-4"
    dark
    min-height="72"
  >
    <v-container>
      <v-row>
        <v-col
          cols="12"
          md="6"
        >
          <div class="d-flex flex-wrap justify-md-start justify-center justify-md-none">
            <template v-for="({name, link}, i) in social">
              <a
                :key="name"
                class="white--text pa-1 pa-md-0"
                :href="link"
                target="_blank"
                v-text="name"
              />

              <v-responsive
                v-if="i < social.length - 1"
                :key="`divider-${name}`"
                class="mx-4 shrink hidden-sm-and-down"
                max-height="24"
              >
                <v-divider vertical />
              </v-responsive>
            </template>
          </div>
        </v-col>

        <v-col
          class="text-center text-md-right"
          cols="12"
          md="6"
        >
          Copyright &copy; 2024 {{ companyName }}
        </v-col>
      </v-row>
    </v-container>
  </v-footer>
</template>

<script>
  export default {
    name: 'HomeFooter',
    computed: {
      companyName() {
        return this.$companyName;
      }
    },
    data: () => ({
      social: [
        { name: 'Git', link: 'https://github.com/KalRadikov' },
        { name: 'Twitter', link: 'https://twitter.com/KRadikov' },
        { name: 'Instagram', link: '#' },
        { name: 'LinkedIn', link: 'https://www.linkedin.com/in/kal-radikov/' },
      ],
    }),
  }
</script>

<style lang="sass">
  #home-footer a
    text-decoration: none
</style>
