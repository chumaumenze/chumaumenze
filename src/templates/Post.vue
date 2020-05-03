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
  import GraphMeta from "~/mixins/GraphMeta.vue";
  
  export default {
  name: 'BlogPost',
  components: {PostMeta},
  mixins: [GraphMeta],
  data(){
    let graphMeta = {
      type: 'article',
      title: this.$parent.$page.post.title,
      description: this.$parent.$page.post.description,
      article: {
        published_time: this.$parent.$page.post.published_time,
        modified_time: this.$parent.$page.post.modified_time,
        expiration_time: this.$parent.$page.post.expiration_time,
        author: this.$parent.$static.metadata.siteUrl + '/about',
        tag: this.$parent.$page.post.tags
          && this.$parent.$page.post.tags.map(t=>(t.title)).join(' ') || 'journal',
      },
    }
    if(this.$parent.$page.post.cover_image) {
      graphMeta.image = []
      graphMeta.image.push({
        url: this.$parent.$static.metadata.siteUrl + this.$parent.$page.post.cover_image.src,
        width: this.$parent.$page.post.cover_image.size.width,
        height: this.$parent.$page.post.cover_image.size.height,
        alt: this.$parent.$page.post.cover_image_caption,
        type: this.$parent.$page.post.cover_image.mimeType
      })
    }
    return {
      graphMeta: graphMeta,
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
    date: published_time(format: "MMMM DD, YYYY")
    published_time(format: "YYYY-MM-DD")
    modified_time(format: "YYYY-MM-DD")
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
