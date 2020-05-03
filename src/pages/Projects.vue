<template lang="pug">
  blog-layout(stickyNavbar)
    div#blog-projects.page-mt
      p Work in progress...
</template>

<style scoped>

</style>

<script>
  import GraphMeta from "~/mixins/GraphMeta.vue";
  
  export default {
    name: 'Projects',
    mixins: [GraphMeta],
    data() {
      return {
        graphMeta: {
          title: 'Projects',
          description: 'Software, photography and other open-source projects.'
        }
      }
    }
  }
</script>
