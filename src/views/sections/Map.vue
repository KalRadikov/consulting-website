<template>
  <base-section
    id="map"
    space="0"
  >
    <iframe
      allowfullscreen
      aria-hidden="false"
      frameborder="0"
      height="500"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d20068.31241335536!2d-114.12389996847317!3d51.043133691923465!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x53716fd05f95f4cb%3A0xa7d3cc5971f00a8a!2sSunalta%2C%20Calgary%2C%20AB!5e0!3m2!1sen!2sca!4v1602437269063!5m2!1sen!2sca"
      style="border:0; display: block;"
      tabindex="0"
      width="100%"
    />
  </base-section>
</template>

<script>
  export default {
    name: 'SectionMap',

    provide: {
      heading: { align: 'center' },
    },
  }
</script>
