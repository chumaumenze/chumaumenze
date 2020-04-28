<template lang="pug">
  div#blog-layout.container
    blog-nav-bar(v-bind:stickyNavbar="stickyNavbar")
    slot
    blog-footer(v-bind:stickyFooter="stickyNavbar")

</template>

<style lang="scss">
  @import "~/assets/style";
  #blog-layout {
    padding: 2rem 0;
  }
</style>
  
  
<script>
  import "~/assets/style/deps.scss"
  
  import BlogNavBar from "../components/BlogNavBar.vue";
  import BlogFooter from "../components/BlogFooter.vue";
  
  export default {
    name: "BlogLayout",
    props: {
      "stickyNavbar": {
        type: Boolean,
        default: false
      }
    },
    components: {BlogFooter, BlogNavBar}
  }
</script>
