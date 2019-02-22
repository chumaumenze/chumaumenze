<template lang="pug">
  #app
    preloader
    site-header(:email="email", :sitePages="menuPages", :socialLinks="links")
    router-view
</template>

<script lang="ts">
  import { Component, Vue } from "vue-property-decorator";
  import Preloader from "@/components/Preloader.vue";
  import SiteHeader from "@/components/SiteHeader.vue";

  @Component({
    components: {
      Preloader,
      SiteHeader
    },
  })
  export default class Home extends Vue {
    private email: string = "hello@chumaumenze.com";
    private menuPages: object[] = [
      {title: "About", url: "/about"},
      {title: "Works", url: "/#"},
      {title: "Writings", url: "/#"},
      {title: "Interests", url: "/#"},
    ];
    private links: object[] = [
      {name: "Linkedin", url: "https://linkedin.com/in/chumaumenze", iconName: "fa-linkedin"},
      {name: "Twitter", url: "https://twitter.com/chumaumenze", iconName: "fa-twitter"},
      {name: "Github", url: "https://github.com/chumaumenze", iconName: "fa-github"},
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
