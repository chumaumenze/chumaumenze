<template lang="pug">
  blog-layout(stickyNavbar)
    div#blog-404.page-mt
      h1 404 - not found
      p We couldn't find the lost page. Try 
        g-link(to="/") this 
        | or would you like to 
        a(@click.active="randomPost()") something cooler
        | ?
</template>

<script>
  export default {
    name: "NotFound",
    methods: {
      async randomPost() {
        let posts = await this.$fetch('/blog');
        posts = posts.data.posts.edges
        let randPost = posts && posts[Math.floor(Math.random() * posts.length)]
        return window.location = randPost.node.path || '/'
      }
    },
    metaInfo () {
      return {
        title: '404',
        meta: [
          {
            key: 'description',
            name: 'description',
            content: "We couldn't find the lost page"
          },
          {
            key: 'og:description',
            name: 'og:description',
            content: "We couldn't find the lost page"
          },
          {
            key: "og:title",
            property: "og:title",
            content: `404 - not found | ${this.$parent.$static.metadata.siteName}`
          },
        ]
      }
    }
  }
</script>

<style lang="scss" scoped>
  #blog-404 {
    padding: 20%;
  }
</style>
