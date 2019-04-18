
<template lang="pug">
  #site-root
    preloader
    site-header(:email="owner.email", :sitePages="menuPages", :socialLinks="links", :logo="siteTitle")
    router-view
    site-footer(:socialLinks="links", :email="owner.email", :siteOwner="owner.fullName", :logo="siteTitle")
</template>

<script lang="ts">
  import { Component, Vue } from "vue-property-decorator";
  import Preloader from "@/components/Preloader.vue";
  import SiteHeader from "@/components/SiteHeader.vue";
  import SiteSocial from "@/components/SiteSocial.vue";
  import SiteFooter from "@/components/SiteFooter.vue";
  import { MenuPageOptions, SocialLinkOptions, SiteOwnerOptions } from "@/interfaces";

  @Component({
    components: {
      Preloader,
      SiteHeader,
      SiteSocial,
      SiteFooter
    },
  })
  export default class Index extends Vue {
    private siteTitle: string = this.$store.state.logo;
    private owner: SiteOwnerOptions = this.$store.state.owner;
    private menuPages: MenuPageOptions[] = this.$store.state.menuPages;
    private links: SocialLinkOptions[] = this.$store.state.links;
  }
</script>

<style lang="scss">
  body {
    font-family: 'Montserrat', sans-serif;
    padding-bottom: 170px;
    font-weight: 500;
  }
</style>
