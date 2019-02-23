<template lang="pug">
  #app
    preloader
    site-header(:email="owner.email", :sitePages="menuPages", :socialLinks="links", :logo="siteTitle")
    site-social(:socialLinks="links")
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
  export default class Home extends Vue {
    private siteTitle: string = "CHUMAUMENZE 🇳🇬";
    private owner: SiteOwnerOptions = {
      email: "hello@chumaumenze.com",
      fullName: "Chuma Umenze",
      username: "chumaumenze"
    };
    private menuPages: MenuPageOptions[] = [
      {title: "About", url: "/about"},
      {title: "Works", url: "/#"},
      {title: "Writings", url: "/#"},
      {title: "Interests", url: "/#"},
    ];
    private links: SocialLinkOptions[] = [
      {name: "Github", url: "https://github.com/chumaumenze", iconName: "fa-github"},
      {name: "Gitlab", url: "https://gitlab.com/chumaumenze", iconName: "fa-gitlab"},
      {name: "Linkedin", url: "https://linkedin.com/in/chumaumenze", iconName: "fa-linkedin"},
      {name: "Twitter", url: "https://twitter.com/chumaumenze", iconName: "fa-twitter"},
      {name: "Medium", url: "https://medium.com/@chumaumenze", iconName: "fa-medium"},
    ];
  }
</script>

<style lang="scss">
  body{
    font-family: 'Montserrat', sans-serif;
    padding-bottom: 170px;
    font-weight: 500;
  }
</style>
