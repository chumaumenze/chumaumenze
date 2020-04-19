<template lang="pug">
  blog-layout(v-bind:stickyNavbar="stickyNavbar")
    div#blog-post-list
      // List posts
      post-card(v-for="edge in $page.posts.edges" :key="edge.node.id" :post="edge.node")
</template>

<style scoped>

</style>

<page-query>
query {
  posts: allPost(filter: { published: { eq: true }}) {
    edges {
      node {
        id
        title
        date (format: "MMMM DD, YYYY")
        timeToRead
        description
        cover_image (width: 770, height: 380, blur: 10)
        path
        tags {
          id
          title
          path
        }
      }
    }
  }
}
</page-query>

<script>
import PostCard from '~/components/PostCard.vue'

export default {
  name: 'Blog',
  components: {
    PostCard,
  },
  data() {
    return {
      stickyNavbar: false
    }
  }
}
</script>
