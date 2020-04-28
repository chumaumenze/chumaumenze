<template lang="pug">
  blog-layout(stickyNavbar)
    div#blog-tags.page-mt
      p Work in progress...
</template>

<script>
  import PostCard from '~/components/PostCard.vue'
  
  export default {
    name: "Archive",
    components: {
      PostCard
    },
  }
</script>

<style scoped>

</style>
