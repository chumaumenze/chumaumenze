<template lang="pug">
  section
    h2
      g-link(:to="post.path") {{post.title}}
    post-meta(:post="post")
        
    p(v-html="post.description")
    hr
</template>

<script>
import PostMeta from "~/components/PostMeta.vue";
export default {
  name: "PostCard",
  props: ['post'],
  components: {PostMeta},
  mounted() {
    console.log(this.post)
  }
}
</script>

<style lang="scss">

</style>
