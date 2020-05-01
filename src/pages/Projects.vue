<template lang="pug">
  blog-layout(v-bind:stickyNavbar="stickyNavbar")
</template>

<style scoped>

</style>

<script>
  export default {
    name: 'Projects',
    data() {
      return {
        stickyNavbar: false
      }
    }
  }
</script>
