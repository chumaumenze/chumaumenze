<template lang="pug">
  section.post-card
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
  components: {PostMeta}
}
</script>

<style lang="scss">

</style>
