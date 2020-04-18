<template lang="pug">
  blog-layout(stickyNavbar)
    div#blog-post
      .post-title-box(:id="`post-${$page.post.id}`")
        h1.post-title-text
          | {{ $page.post.title }}
        p.subtitle {{ $page.post.description }}
        post-meta(:post="this.$page.post")
      hr
      .post-content-box.center
        g-image(alt='Cover image', v-if='$page.post.cover_image', :src='$page.post.cover_image')
        .post-content(v-html='$page.post.content')
    
      // Add comment widgets here
    hr

</template>

<style lang="css" scoped>
#blog-post {
  /*margin-top: 6em;*/
}
.post-content-box {
  margin-top: 3em;
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
