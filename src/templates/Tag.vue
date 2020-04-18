<template lang="pug">
  blog-layout(stickyNavbar)
    div#blog-tags
      h1 # {{ $page.tag.title }}
      hr
      post-card(v-for='edge in $page.tag.belongsTo.edges', :key='edge.node.id', :post='edge.node')

</template>

<page-query>
query Tag ($id: ID!) {
  tag (id: $id) {
    title
    belongsTo {
      edges {
        node {
          ...on Post {
            title
            path
            date (format: "D. MMMM YYYY")
            timeToRead
            description
            content
          }
        }
      }
    }
  }
}
</page-query>

<script>
import PostCard from '~/components/PostCard.vue'

export default {
  name: 'Tag',
  components: {
    PostCard
  },
  metaInfo: {
    title: 'Hello, world!'
  }
}
</script>

<style lang="scss">

</style>

