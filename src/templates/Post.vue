<template lang="pug">
  blog-layout(stickyNavbar)
    #blog-post.page-mt
      div
        // Post title
        .post-title-box(:id="`post-${$page.post.id}`")
          h1.post-title-text
            | {{ $page.post.title }}
          p.subtitle {{ $page.post.description }}
          post-meta(:post="this.$page.post")
        hr
        // Post Content
        .post-content-box
          g-image.u-max-full-width(alt='Cover image', v-if='$page.post.cover_image', :src='$page.post.cover_image')
          .post-content(v-html='$page.post.content')
      hr
      // Comment widgets
      .post-comments
        div#graphcomment(v-if="$config.commentType ==='graphcomment'" data-gc_type="universal")
        vue-disqus(v-else :shortname="$config.webTags.disqus.shortname" 
          :identifier="$page.post.title" :url="$config.webTags.disqus.url")
</template>

<style lang="scss">
  @import "~/assets/style/variables";

  #blog-post {
    
    .post-content {
      img,
      .g-image {
        max-width: 100%;
        box-sizing: border-box;
      }

      h1, h2, h3, h4, h5, h6 {
        margin-top: 1.7em;
      }
    }
  }
</style>

<script>
  import PostMeta from "~/components/PostMeta.vue";
  
  export default {
  components: {PostMeta},
  metaInfo () {
    return {
      title: this.$page.post.title,
      meta: [
        {
          name: 'description',
          content: this.$page.post.description
        }
      ]
    }
  }
}
</script>

<page-query>
query Post ($id: ID!) {
  post: post (id: $id) {
    id
    title
    path
    date (format: "MMMM DD, YYYY")
    timeToRead
    tags {
      id
      title
      path
    }
    description
    content
    cover_image (width: 860, blur: 10)
  }
}
</page-query>
