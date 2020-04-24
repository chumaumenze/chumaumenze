<template lang="pug">
  footer#blog-footer
    // Footer
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
    data() {
      return {
        currentYear: new Date().getFullYear()
      }
    }
  }
</script>
