<script>
  // Extensions
  import View from '@/views/View'

  // Mixins
  import LoadSections from '@/mixins/load-sections'

  export default {
    name: 'TestPage',

    metaInfo: { title: 'Test Page' },

    extends: View,

    mixins: [
      LoadSections([
        'hero-alt',
        'keep-in-touch',
        'map',
        'newsletter',
        'pro-features',
        'pro-features2',
      ]),
    ],

    props: {
      id: {
        type: String,
        default: 'test-page',
      },
    },
  }
</script>
