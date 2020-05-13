<template lang="pug">
  blog-layout(stickyNavbar)
    div#blog-404.page-mt
      h1 404 - not found
      p We couldn't find the lost page. Try 
        g-link(to="/") this 
        | or would you like 
        a(@click.active="randomPost()") something cooler
        | ?
</template>

<script>
  import GraphMeta from "~/mixins/GraphMeta.vue";

  
  export default {
    name: "NotFound",
    mixins: [GraphMeta],
    data() {
      return {
        graphMeta: {
          title: '404 - not found',
          description: "We couldn't find the lost page"
        }
      }
    },
    methods: {
      async randomPost() {
        let posts = await this.$fetch('/blog');
        posts = posts.data.posts.edges
        let randPost = posts && posts[Math.floor(Math.random() * posts.length)]
        return window.location = randPost.node.path || '/'
      }
    }
  }
</script>

<style lang="scss" scoped>
  #blog-404 {
    padding: 20%;
  }
</style>
