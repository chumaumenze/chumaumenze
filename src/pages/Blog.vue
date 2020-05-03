<template lang="pug">
  blog-layout(stickyNavbar)
    div#blog-post-list.page-mt
      // List posts
      post-card(v-for="post in pagePosts" :key="post.node.id" :post="post.node")
      blog-infinite-loader(:current-page="$page.posts.pageInfo.currentPage" 
        :total-pages="$page.posts.pageInfo.totalPages" 
        @infinite-loaded="loadData")
    hr
</template>

<style scoped>

</style>

<page-query>
query ($page: Int = 1) {
  posts: allPost(filter: { published: { eq: true }} perPage: 5, page: $page, sort: {by: "published_time"}) @paginate {
    pageInfo {
      totalPages
      currentPage
    }
    edges {
      node {
        id
        title
        date: published_time(format: "MMMM DD, YYYY")
        published_time(format: "YYYY-MM-DD")
        modified_time(format: "YYYY-MM-DD")
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
import BlogInfiniteLoader from "../components/BlogInfiniteLoader";
import GraphMeta from "~/mixins/GraphMeta.vue";

export default {
  name: 'Blog',
  mixins: [GraphMeta],
  components: {
    BlogInfiniteLoader,
    PostCard,
  },
  data() {
    return {
      pagePosts: [],
      graphMeta: {
        title: 'Blog',
        description: `Articles and tutorials published by ${this.$config.author.name}`
      }
    }
  },
  methods: {
    loadData(newPosts) {
      this.pagePosts.push(...newPosts.posts.edges)
    }
  },
  created() {
    this.pagePosts.push(...this.$page.posts.edges)
  },
}
</script>
