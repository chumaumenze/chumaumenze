<template lang="pug">
  blog-layout(stickyNavbar)
    #blog-post.page-mt(itemscope itemtype="http://schema.org/Article")
      div
        // Post title
        .post-title-box(:id="`post-${$page.post.id}`")
          h1.post-title-text(itemprop="headline")
            | {{ $page.post.title }}
          p.subtitle(itemprop="description") {{ $page.post.description }}
          post-meta(:post="this.$page.post")
        hr
        // Post Content
        .post-content-box
          div(itemscope itemtype="http://schema.org/ImageObject")
            g-image.u-max-full-width(alt='Cover image', v-if='$page.post.cover_image', 
              :src='$page.post.cover_image' itemprop="image")
          .post-content(v-html='$page.post.content' itemprop="articleBody")
      hr
      // Comment widgets
      .post-comments(itemscope itemtype="http://schema.org/Comment")
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
          key: 'description',
          name: 'description',
          content: this.$page.post.description
        },
        {
          key: 'og:description',
          name: 'og:description',
          content: this.$page.post.description
        },
        {
          key: "og:type",
          property: "og:type",
          content: "article"
        },
        {
          key: "og:title",
          property: "og:title",
          content: `${this.$page.post.title} | ${this.$parent.$static.metadata.siteName}`
        },
        {
          key: "og:url",
          property: "og:url",
          content: this.$parent.$static.metadata.siteUrl + this.$page.post.path
        },
        {
          key: "og:image",
          property: "og:image",
          content: this.$parent.$static.metadata.siteUrl +
            (this.$page.post.cover_image && this.$page.post.cover_image.src) 
            || `${require("~/assets/images/profile.png")}`
        },
        {
          key: "article:published_time",
          property: "article:published_time",
          content: this.$page.post.ogpDate
        },
        {
          key: "article:author",
          property: "article:author",
          content: this.$parent.$static.metadata.siteUrl + '/about'
        },
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
    ogpDate: date(format: "YYYY-MM-DD")
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
