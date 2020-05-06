<template lang="pug">
  blog-layout(stickyNavbar)
    div#blog-projects.page-mt
      h4 Work in progress...
      p Check out my 
        a(:href="$config.author.socials.gitlab.url") Gitlab 
        | or 
        a(:href="$config.author.socials.github.url") Github
</template>

<style scoped>

</style>

<script>
  import GraphMeta from "~/mixins/GraphMeta.vue";
  
  export default {
    name: 'Projects',
    mixins: [GraphMeta],
    data() {
      return {
        graphMeta: {
          title: 'Projects',
          description: 'Software, photography and other open-source projects.'
        }
      }
    }
  }
</script>
