<template lang="pug">
  #site-home
    section.main(style='height: 796px; transform: scale(1); opacity: 1;')
      site-social(:socialLinks="links")
      .main-content
        .col-md-6.col-xs-12
          span.hello Hi!
          h1.main-title
            | I'm Chuma, a self-taught Software Developer based in Lagos, Nigeria.
      a.down-arrow
        .down-inner
          img(src='img/icons/down-arrow.svg', alt='')
          .line
      .language
        a.active(href='#') En.
        a(href='#') Fr.
      #particles-js
        canvas.particles-js-canvas-el(width='1049', height='796', style='width: 100%; height: 100%;')

</template>

<script lang="ts">
  import { Component, Vue } from "vue-property-decorator";
  import SiteSocial from "@/components/SiteSocial.vue";
  import { SocialLinkOptions } from "@/interfaces";

  @Component({
    components: {
      SiteSocial
    },
  })
  export default class Home extends Vue {
    private links: SocialLinkOptions[] = this.$store.state.links;
  }
</script>

<style lang="scss" scoped>
  #site-home {
    .main {
      background: url(../../assets/images/person-bg.jpg) no-repeat;
      background-size: cover;
      display: table;
      width: 100%;
      // position: fixed;

      .main-content {
        padding: 0 60px;
        vertical-align: middle;
        display: table-cell;
        height: 100%;
        width: 100%;

        .hello {
          color: #0161ee;
          line-height: 51px;
        }

        .main-title {
          font-size: 24px;
          line-height: 38px;
          color: #fff;
          font-weight: 400;
        }
        .social {
          margin-top: 30px;
          z-index: 1;
          position: relative;
        }
        .down-arrow {
          position: absolute;
          bottom: 0;
          left: 0;
          padding: 50px;
          cursor: pointer;
          z-index: 1;
        }
        .language {
          position: absolute;
          right: 0;
          bottom: 0;
          padding: 39px;
          z-index: 1;
        }
      }
    }
  }
</style>
