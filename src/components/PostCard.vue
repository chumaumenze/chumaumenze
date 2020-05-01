<template lang="pug">
  section.post-card(itemscope itemtype="http://schema.org/Article")
    h2.post-title-text(itemprop="headline")
      g-link.post-link(:to="post.path") {{post.title}}
    post-meta(:post="post")
        
    p(v-html="post.description" itemprop="description")
    hr
</template>

<script>
import PostMeta from "~/components/PostMeta.vue";
export default {
  name: "BlogPostCard",
  props: ['post'],
  components: {PostMeta}
}
</script>

<style lang="scss">
@import "~/assets/style/variables";

.post-link {
  text-decoration: none;
  color: $light-mode__headings-link;
  
  &:hover {
    color: $light-mode__headings-link-hover;
  }
}

@media (prefers-color-scheme: dark) {
  .post-link {
    color: $dark-mode__headings-link;

    &:hover {
      color: $dark-mode__headings-link-hover;
    }
  }
}
</style>
