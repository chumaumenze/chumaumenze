<template lang="pug">
  blog-layout(v-bind:stickyNavbar="stickyNavbar")
</template>

<style scoped>

</style>

<script>
  import GraphMeta from "~/mixins/GraphMeta.vue";
  
  export default {
    name: 'Code',
    mixins: [GraphMeta],
    data() {
      return {
        stickyNavbar: false,
        graphMeta: {
          title: 'Code',
          description: `Code`
        }
      }
    }
  }
</script>
