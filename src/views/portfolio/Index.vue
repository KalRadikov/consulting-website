
<script>
  // Extensions
  import View from '@/views/View'

  // Mixins
  import LoadSections from '@/mixins/load-sections'

  export default {
    name: 'Portfolio',

    metaInfo: { title: 'Portfolio' },

    extends: View,

    mixins: [
      LoadSections([
        'hero-alt',
        'portfolio-heading',
        'visual-portfolio',
        // 'parallax-statistics',
        // 'web-features',
        'portfolio',
        // 'contact-us',
        // 'customer-reviews',
        'affiliates',
        // 'social-media',
        // 'keep-in-touch',
        'newsletter',
        'info',
      ]),
    ],

    props: {
      id: {
        type: String,
        default: 'portfolio',
      },
    },
  }
</script>
