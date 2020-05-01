<template lang="pug">
  blog-layout(stickyNavbar)
    div#blog-tags.page-mt
      h1 # {{ $page.tag.title }}
      hr
      div
        post-card(v-for="post in tagPosts" :key="post.node.id" :post="post.node")
        blog-infinite-loader(:current-page="$page.tag.belongsTo.pageInfo.currentPage"
          :total-pages="$page.tag.belongsTo.pageInfo.totalPages"
          @infinite-loaded="loadData")
</template>

<page-query>
query ($id: ID!, $page: Int = 1) {
  tag(id: $id) {
    title
    belongsTo(perPage: 5, page: $page) @paginate {
      # totalCount
      pageInfo {
        totalPages
        currentPage
      }
      edges {
        node {
          ... on Post {
            id
            title
            path
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
  }
}
</page-query>

<script>
import PostCard from '~/components/PostCard.vue'
import BlogInfiniteLoader from "../components/BlogInfiniteLoader";

export default {
  name: 'Tag',
  components: {
    BlogInfiniteLoader,
    PostCard
  },
  metaInfo() {
    return {
      title: `#${this.$page.tag.title}`,
      meta: [
        {
          key: "og:title",
          property: "og:title",
          content: `#${this.$page.tag.title} | ${this.$parent.$static.metadata.siteName}`
        },
        {
          key: 'description',
          name: 'description',
          content: `Articles about #${this.$page.tag.title} published by ${this.$config.name}`
        },
        {
          key: 'og:description',
          name: 'og:description',
          content: `Articles about #${this.$page.tag.title} published by ${this.$config.name}`
        },
      ]
    }
  },
  data() {
    return {
      tagPosts: []
    }
  },
  methods: {
    loadData(newPosts) {
      this.tagPosts.push(...newPosts.tag.belongsTo.edges)
    }
  },
  watch: {
    $route() {
      this.tagPosts = this.$page.tag.belongsTo.edges
    }
  },
  created() {
    this.tagPosts.push(...this.$page.tag.belongsTo.edges)
  }
}
</script>

<style lang="scss">

</style>

