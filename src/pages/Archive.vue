<template lang="pug">
  blog-layout(stickyNavbar)
    div#blog-tags.page-mt
      p Work in progress...
</template>

<script>
  import PostCard from '~/components/PostCard.vue'
  import GraphMeta from "~/mixins/GraphMeta.vue";
  
  export default {
    name: "Archive",
    mixins: [GraphMeta],
    components: {
      PostCard
    },
    data() {
      return {
        graphMeta: {
          title: 'Archive',
          description: `Archives`
        }
      }
    },
  }
</script>

<style scoped>

</style>
