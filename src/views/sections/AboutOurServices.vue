<template>
  <base-section id="about-our-services">
    <base-section-heading
      color="grey lighten-2"
      icon="mdi-vuetify"
      title="About our Services"
    />

    <v-container>
      <v-row>
        <v-col
          v-for="card in cards"
          :key="card.title"
          cols="12"
          md="4"
        >
          <base-info-card
            :dark="$vuetify.theme.dark"
            v-bind="card"
          />
        </v-col>
      </v-row>
    </v-container>
  </base-section>
</template>

<script>
import BaseSection from "@/components/base/Section.vue";
import BaseSectionHeading from "@/components/base/SectionHeading.vue";
import BaseInfoCard from "@/components/base/InfoCard.vue";

export default {
  name: 'SectionAboutOurProduct',
  components: {BaseInfoCard, BaseSectionHeading, BaseSection},
  data: () => ({
    cards: [
      {
        title: 'Entity Recognition',
        subtitle: 'Understanding Context',
        text: 'We implement advanced entity recognition techniques to extract, resolve, and categorize key information from unstructured data. This enhances search capabilities by enabling more relevant and context-aware results for user queries.',
        callout: '01',
      },
      {
        title: 'Data Science Expertise',
        subtitle: 'Insights',
        text: 'Leveraging advanced data science techniques, we analyze and interpret complex datasets to derive actionable insights, enhancing search capabilities and user experience through data-driven decision-making.',
        callout: '02',
      },
      {
        title: 'Embedding Techniques',
        subtitle: 'Representation',
        text: 'We specialize in generating embeddings that represent data in lower-dimensional spaces, facilitating effective similarity searches and enabling richer user interactions with your data.',
        callout: '03',
      },
      {
        title: 'Transformers',
        subtitle: 'Natural Language Processing',
        text: 'Our expertise includes the implementation of sentence transformers from Python, allowing us to generate contextualized embeddings for sentences and paragraphs. This improves semantic search capabilities and enhances the relevance of search results.',
        callout: '04',
      },
      {
        title: 'Vector Databases',
        subtitle: 'Storage & Retrieval',
        text: 'Our expertise includes the optimization and management of vector databases, ensuring fast and scalable retrieval of high-dimensional data through techniques such as approximate nearest neighbor (ANN) search.',
        callout: '05',
      },
      {
        title: 'Machine Learning',
        subtitle: 'Intelligence',
        text: 'We implement state-of-the-art ML models like BERT to enhance search functionality through advanced natural language understanding, improving the relevance and context of search results.',
        callout: '06',
      },
      {
        title: 'Optimization  ',
        subtitle: 'Efficiency',
        text: 'We apply cutting-edge optimization techniques to vector databases, including indexing strategies and query optimization, to ensure rapid response times even with large-scale data.',
        callout: '07',
      },
      {
        title: 'Multimodal Embeddings',
        subtitle: 'Integration',
        text: 'We develop multimodal embedding strategies that combine textual, visual, and audio data to create a more holistic understanding of user queries and enhance search results.',
        callout: '08',
      },
      {
        title: 'Custom Search Solutions',
        subtitle: 'Tailored',
        text: 'We create BM25 search solutions that cater to unique business requirements, incorporating advanced filtering, faceted search, and personalized results to improve user engagement and satisfaction.',
        callout: '09',
      },
    ],
  }),
}


</script>
