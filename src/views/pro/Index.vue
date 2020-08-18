<script>
  // Extensions
  import View from '@/views/View'

  // Mixins
  import LoadSections from '@/mixins/load-sections'

  export default {
    name: 'Pro',

    metaInfo: { title: 'Pro Test' },

    extends: View,

    mixins: [
      LoadSections([
        'pro-features',
      ]),
    ],

    props: {
      id: {
        type: String,
        default: 'pro',
      },
    },
  }
</script>
