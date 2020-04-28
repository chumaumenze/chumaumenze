<template lang="pug">
  div#blog-pager
    client-only
      infinite-loading(@infinite='infiniteHandler', spinner='waveDots')
        div(slot='no-more')
          | You've scrolled through all the posts ;)
        div(slot='no-results')
          | Sorry, no posts yet :(
</template>

<script>
  import { ClientOnly } from "gridsome";

  export default {
  name: "BlogInfiniteLoader",
  components: {
    ClientOnly
  },
  props: {
    "currentPage": {
      type: Number | String,
      default: 0
    },
    "totalPages": {
      type: Number | String,
      required: true
    },
  },
  data() {
    return {
      currentPath: this.$route.path,
      page: this.currentPage
    }
  },
  methods: {
    async infiniteHandler($state) {
      let currentPath = this.currentPath;
      let nextPage = this.page + 1;
      if (nextPage > this.totalPages) {
        $state.complete()
      } else {
        const { data } = await this.$fetch(
          `${currentPath}/${nextPage}`
        )
        if (data.posts.edges.length) {
          this.page = data.posts.pageInfo.currentPage
          this.$emit("infinite-loaded", data.posts.edges)
          $state.loaded()
        } else {
          $state.complete()
        }
      }
    }
  }
}
</script>
