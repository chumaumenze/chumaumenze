<template lang="pug">
  div#blog-pager
    client-only
      infinite-loading(@infinite='infiniteHandler', spinner='waveDots')
        div(slot='no-more')
          | You've scrolled through all the posts.
        div(slot='no-results')
          | Sorry, no posts.
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
      page: this.currentPage
    }
  },
  computed: {
    currentPath() {
      let p = this.$route.path
      return p.endsWith('/') 
        ? p.substring(0, p.length - 1)
        : p
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
        if (data) {
          this.page++
          this.$emit("infinite-loaded", data)
          $state.loaded()
        } else {
          $state.complete()
        }
      }
    }
  }
}
</script>
