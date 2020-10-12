<script>
  // Extensions
  import View from '@/views/View'

  // Mixins
  import LoadSections from '@/mixins/load-sections'

  export default {
    name: 'Services',

    metaInfo: { title: 'Services' },

    extends: View,

    mixins: [
      LoadSections([
        'hero-alt',
        'about-our-services',
        'features-2',
        'theme-features',
        'affiliates',
        'newsletter',
        'info',
      ]),
    ],

    props: {
      id: {
        type: String,
        default: 'services',
      },
    },
  }
</script>
