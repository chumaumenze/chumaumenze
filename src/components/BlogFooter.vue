<template lang="pug">
  div#footer
    // Footer
    footer
        span.copyright(v-html="`&#169; ${currentYear} Zuko`")
        span.right Powered by 
          a(href="//gridsome.org") Gridsome
</template>

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

<style lang="scss" scoped>
div#footer {
  margin: 2em auto;
}
span.right {
  float: right;
}
</style>
