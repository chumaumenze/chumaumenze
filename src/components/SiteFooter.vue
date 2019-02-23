<template lang="pug">
  footer#site-footer
    .cont
      .row
        .col-md-4.col-sm-6.col-xs-12.copyright
          site-logo(:logo="logo", isText)
          p © {{ currentYear }} {{ siteOwner}}
        //.col-md-4.d-sm-none.d-md-block

        .col-md-4.offset-4.col-sm-6.col-xs-12.d-none.d-sm-block.connect
          a(:href="`mailto:${email}`")
            strong Get In Touch
            br
            p {{ email }}
          .social
            a(v-for="(social, key) in socialLinks", :key="key", :href="social.url",
              :aria-label="social.name")
              // i.fa(:class="social.iconName", aria-hidden="true")
              span.fa-stack
                i.fa.fa-square-o.fa-stack-2x
                i.fa.fa-stack-1x(:class="social.iconName", aria-hidden="true")

</template>

<script lang="ts">
  import { Prop, Component, Vue } from "vue-property-decorator";
  import SiteLogo from "@/components/SiteLogo.vue";

  import { SocialLinkOptions } from "@/interfaces";

  @Component({
    components: {
      SiteLogo
    }
  })
  export default class SiteFooter extends Vue {
    @Prop({type: Array, required: true}) private socialLinks?: SocialLinkOptions[];
    @Prop({type: String, required: true}) private siteOwner?: string[];
    @Prop({type: String, required: true}) private email?: string[];
    @Prop({type: String, required: true}) private logo?: string[];

    private get currentYear() {
      return new Date().getFullYear();
    }
  }
</script>

<style lang="scss" scoped>
  $color_1: rgb(33, 37, 41);
  $font_family_1: Montserrat, sans-serif;
  $white: rgb(255, 255, 255);
  $black: rgb(0, 0, 0);
  $red: rgb(234, 0, 38);

  #site-footer {
    width: 100%;
    padding: 60px 0 41px;
    position: fixed;
    z-index: 0;
    bottom: 0;
    background: $black;
    border-bottom: solid 6px $red;
    /*font-family: $font_family_1;*/

    .cont {
      width: 90%;
      margin-left: 5%;

      .copyright {
        font-size: 14px;
        /*margin-top: 8px;*/
        font-weight: 400;
        color: #979797;
        font-family: Raleway, Montserrat, sans-serif;

        @media (max-width: 480px) {
          text-align: center;
        }
      }


      .connect {
        text-align: right;

        a {
          font-size: 18px;
          text-decoration: none;
          color: $white;

          p {
            color: #979797;
            font-family: Raleway, Montserrat, sans-serif;
          }
        }

        .social {
          margin: 0 auto;

          a {
            color: $white;
            font-size: 18px;
            display: inline-block;
            cursor: pointer;

            &:first-child {
              transform-origin: top center;
              animation: swingleft 1.2s cubic-bezier(0, 0.15, 0.58, 1.11) infinite;
            }

            &:last-child {
              transform-origin: top center;
              animation: swingright 1.2s cubic-bezier(0, 0.15, 0.58, 1.11) 0.6s infinite;
            }

            &:hover {
              transform-origin: unset;
              animation: unset;
            }
          }
        }
      }
    }
  }
  @keyframes swingleft {
    0% { transform: rotate(0deg); }
    25% { transform: rotate(30deg); }
    50% { transform: rotate(0deg); }
    100% { transform: rotate(0deg); }
  }

  @keyframes swingright {
    0% { transform: rotate(0deg); }
    25% { transform: rotate(-30deg); }
    50% { transform: rotate(0deg); }
    100% { transform: rotate(0deg); }
  }
</style>
