<template lang="pug">
  blog-layout(v-bind:stickyNavbar="stickyNavbar")
    p You are home!
    hr
</template>

<style scoped>

</style>

<script>
export default {
  name: 'Home',
  data() {
    return {
      stickyNavbar: false
    }
  }
}
</script>
