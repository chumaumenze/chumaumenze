<template lang="pug">
  #app
    router-view
</template>

<style lang="scss">
  #_hj_feedback_container {
    display: none;
  }
</style>

<static-query>
query {
  metadata {
    siteName
    siteDescription
    siteUrl
  }
}
</static-query>

<script>
export default {
  metaInfo() {
    return {
      htmlAttrs: {
        prefix: "og: http://ogp.me/ns#",
      },
      meta: [
        {
          key: 'description',
          name: 'description',
          content: this.$static.metadata.siteDescription
        },
        {
          name: 'robots',
          key: 'robots',
          content: 'index, follow'
        },
        {
          key: 'author',
          name: 'author',
          content: this.$config.name
        },
        {
          key: 'twitter:card',
          name: 'twitter:card',
          content: 'summary_large_image'
        },
        {
          key: 'twitter:site',
          name: 'twitter:site',
          content: '@chumaumenze'
        },
        {
          key: 'twitter:creator',
          name: 'twitter:creator',
          content: '@chumaumenze'
        },
        {
          key: "og:title",
          property: "og:title",
          content: this.$static.metadata.siteName
        },
        {
          key: "og:site_name",
          property: "og:site_name",
          content: this.$static.metadata.siteName
        },
        {
          key: "og:description",
          property: "og:description",
          content: this.$static.metadata.siteDescription
        },
        {
          key: "og:url",
          property: "og:url",
          content: this.$static.metadata.siteUrl
        },
        {
          key: "og:image",
          property: "og:image",
          content: this.$static.metadata.siteUrl
            + `${require("~/assets/images/profile.png")}`
        },
      ]
    }
  },
  methods: {
    placeGoogleTagManager() {
      let $head = document.head
      let gtm_script = document.createElement('script')
      gtm_script.innerText = `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${this.$config.webTags.gtm.id}');`
      $head.insertBefore(gtm_script, $head.firstElementChild)

      let $body = document.body
      let gtm_noscript = document.createElement('noscript')
      gtm_noscript.innerHTML = `<iframe src="https://www.googletagmanager.com/ns.html?id=${this.$config.webTags.gtm.id}"
height="0" width="0" style="display:none;visibility:hidden"></iframe>`
      $body.insertBefore(gtm_noscript, $body.firstElementChild)
    }
  },
  mounted() {
    if(this.$config.webTags.gtm.id) this.placeGoogleTagManager()
  }
}
</script>
