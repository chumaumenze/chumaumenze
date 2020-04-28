<template lang="pug">
  blog-layout(v-bind:stickyNavbar="stickyNavbar")
    div#blog-post-list
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
  posts: allPost(filter: { published: { eq: true }} perPage: 5, page: $page) @paginate {
    pageInfo {
      totalPages
      currentPage
    }
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
import BlogInfiniteLoader from "../components/BlogInfiniteLoader";

export default {
  name: 'Blog',
  components: {
    BlogInfiniteLoader,
    PostCard,
  },
  data() {
    return {
      pagePosts: [],
      stickyNavbar: false
    }
  },
  methods: {
    loadData(newPosts) {
      this.pagePosts.push(...newPosts.posts.edges)
    }
  },
  created() {
    this.pagePosts.push(...this.$page.posts.edges)
  }
}
</script>
