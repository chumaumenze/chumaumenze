<template lang="pug">
  blog-layout(stickyNavbar)
    div#blog-ideas.page-mt
      p Work in progress...
</template>

<script>
  import GraphMeta from "~/mixins/GraphMeta.vue";

  export default {
    name: "Ideas",
    mixins: [GraphMeta],
    components: {},
    data() {
      return {
        graphMeta: {
          title: 'Ideas',
          description: `Ideas`
        }
      }
    },
  }
</script>

<style scoped>

</style>
