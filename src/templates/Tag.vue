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
            date: published_time(format: "MMMM DD, YYYY")
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
import GraphMeta from "~/mixins/GraphMeta.vue";

export default {
  name: 'Tag',
  mixins: [GraphMeta],
  components: {
    BlogInfiniteLoader,
    PostCard
  },
  data() {
    return {
      tagPosts: [],
      graphMeta: {
        title: `#${this.$parent.$page.tag.title}`,
        description: `Articles about #${this.$parent.$page.tag.title} published by ${this.$config.author.name}`
      }
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

