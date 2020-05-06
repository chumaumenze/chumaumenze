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
