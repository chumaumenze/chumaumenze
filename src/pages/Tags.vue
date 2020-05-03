<template lang="pug">
  blog-layout(stickyNavbar)
    div#blog-collections.page-mt
      h1 Tags
      p Work in progress...
</template>

<script>
  import GraphMeta from "~/mixins/GraphMeta.vue";
  export default {
    name: "Tags",
    mixins: [GraphMeta],
    data(){
      return {
        graphMeta: {
          title: 'Tags',
          description: 'Collection of topics on software development, ' 
            + 'photography and other interesting topics.'
        }
      }
    }
  }
</script>

<style scoped>

</style>
