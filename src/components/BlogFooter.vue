<template lang="pug">
  footer#blog-footer(v-bind:class ="{'has-docked-footer':stickyFooter}")
    // Footer
    .container
      span.u-pull-left {{`&#169; ${currentYear} `}}
        g-link(to="/") {{$static.metadata.siteName}}
      span.u-pull-right Powered by 
        a(href="//gridsome.org") Gridsome
</template>

<static-query>
  query {
    metadata {
      siteName
    }
  }
</static-query>

<script>
  export default {
    name: "BlogFooter",
    props: {
      "stickyFooter": {
        type: Boolean,
        default: undefined
      }
    },
    data() {
      return {
        currentYear: new Date().getFullYear()
      }
    }
  }
</script>

<style lang="scss" scoped>
@import "~/assets/style/variables";

.has-docked-footer {
  background-color: $light-mode__bg;
  position: fixed;
  bottom: 0;
  left: 0;
  display: block;
  width: 100%;
  /*height: 5rem;*/
  padding: 2rem 0;
  z-index: 99;
  border-top: 1px solid #eee;
  border-bottom: 1px solid #eee;
}


/* Media Queries */
@media (prefers-color-scheme: dark) {
  .has-docked-footer {
    background-color: $dark-mode__bg;
  }
}
</style>
