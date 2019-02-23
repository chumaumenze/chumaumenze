<template lang="pug">
  #site-header(:class="{'open': menuOpen}")
    // Header
    header
      site-logo(:logo="logo", @click.native="toggleMenu($event, false)" isText)

      .nav-icon(@click="toggleMenu")
        span(v-for="k in 3" :key="k")

    // Nav Menu
    .full-menu
      .full-inner.row
        nav.col-md-8
          ul
            li(v-for="(page, key) in sitePages", :key="key")
              router-link(:to='page.url' @click.native="toggleMenu" v-text="page.title")

        .col-md-4.full-contact
          ul
            li.title Get in Touch
            li {{ email }}
            li
              .social
                a(v-for="(social, key) in socialLinks" :key="key" :href="social.url", :aria-label="social.name")
                  i.fa(:class="social.iconName", aria-hidden="true")

</template>

<script lang="ts">
  import { Component, Vue, Prop } from "vue-property-decorator";
  import SiteLogo from "@/components/SiteLogo.vue";

  import { MenuPageOptions, SocialLinkOptions } from "@/interfaces";

  @Component({
    components: {
      SiteLogo
    }
  })
  export default class SiteHeader extends Vue {
    private menuOpen: boolean = false;
    @Prop({type: String, required: true}) private logo?: string[];
    @Prop({type: String, required: true}) private email?: string;
    @Prop({type: Array, required: true}) private sitePages?: MenuPageOptions[];
    @Prop({type: Array, required: true}) private socialLinks?: SocialLinkOptions[];

    private toggleMenu(this: any, event: any, status: boolean) {
      status !== undefined ? this.menuOpen = status : this.menuOpen = !this.menuOpen;
    }
  }
</script>

<style lang="scss" scoped>
  $shadow: #1f1f1f;
  $white: #ffffff;
  $lava: #989898;
  $black: #000000;
  $red: #ea0026;

  #site-header {
    /* Menu Bar Style*/
    header{
      padding: 30px;
      width: 100%;
      position: absolute;
      z-index: 5;

      .nav-icon {
        float: right;
        width: 30px;
        height: 18px;
        position: relative;
        transform: rotate(0deg);
        transition: .5s ease-in-out;
        cursor: pointer;
        top: 10px;

        span {
          display: block;
          position: absolute;
          height: 4px;
          width: 100%;
          background: $white;
          opacity: 1;
          transform: rotate(0deg);
          transition: .25s ease-in-out;
          &:nth-child(1) {
            top: 0;
            transform-origin: left center;
          }
          &:nth-child(2) {
            top: 7px;
            transform-origin: left center;
          }
          &:nth-child(3) {
            top: 14px;
            transform-origin: left center;
            width: 60%;
            right: 0 !important;
          }
        }
        &:hover {
          span {
            background: $white;
          }
        }
      }
    }

    /* Menu Nav Style */
    .full-menu {
      width: 100%;
      height: 100%;
      position: fixed;
      z-index: 4;
      transform: translateX(100%);
      transition: all ease 0.4s 0.6s;
      background: $shadow;
      .full-inner {
        height: 100%;
        nav {
          text-align: left;
          padding-left: 5%;
          display: table;
          height: 100%;
          ul {
            display: table-cell;
            vertical-align: middle;
            li {
              list-style: none;
              overflow: hidden;
              a {
                font-size: 40px;
                font-weight: 900;
                text-decoration: none;
                transform: translateY(47px);
                display: block;
                color: $white;
                transition: all ease 0.4s 0.0s;

                &:hover {
                  color: $lava;
                }
              }

              &:hover {
                font-size: 42px;
                margin: 10px auto;
                transition: 0.5s;
              }
              &:not(:hover) {
                transition: 0.9s;
              }
            }
          }
        }
        .full-contact {
          background: $black;
          display: table;
          height: 100%;

          ul {
            display: table-cell;
            vertical-align: middle;
            li {
              list-style: none;
              transform: translateY(25px);
              opacity: 0;
              transition: all ease 0.4s 0.3s;
              font-size: 20px;
              font-weight: 600;
              color: $white;
              .social {
                margin-top: 10px;
                a {
                  font-size: 15px;
                  text-decoration: none;
                  margin-right: 10px;
                  color: $lava;
                  i {
                    color: $white;
                    transition: 0.8s;

                    &:hover {
                      font-size: 20px;
                      transition: 0.8s;
                      // color: $red;
                    }
                  }
                }
              }
            }
            li.title {
              font-size: 30px;
              font-weight: 900;
              color: $red;
            }
          }
        }
      }
    }

    /* On-Menu Open Style*/
    &.open {
      /* Menu Bar Open Animation */
      header {
        position: fixed;

        .nav-icon {
          span {
            width: 85%;
            &:nth-child(1) {
              transform: rotate(45deg);
              top: -3px;
              left: 8px;
            }
            &:nth-child(2) {
              width: 0;
              opacity: 0;
            }
            &:nth-child(3) {
              transform: rotate(-45deg);
              top: 16px;
              left: 8px;
            }
          }
          &:hover {
            span {
              // background: $red;
            }
          }
        }
      }

      /* Menu Nav Open Animation */
      .full-menu {
        transform: translateX(0);
        transition-delay: 0s;
        .full-inner {
          nav {
            ul {
              li {
                a {
                  text-decoration: none;
                  transform: translateY(0);
                  transition: transform ease 0.7s 0.5s;
                  &:hover {
                    transition: all ease 0.3s;
                  }
                }
              }
            }
          }
          .full-contact {
            ul {
              li {
                &:nth-child(1) {
                  transform: translateY(0);
                  opacity: 1;
                  transition: all ease 0.7s 1.0s;
                }
                &:nth-child(2) {
                  transform: translateY(0);
                  opacity: 1;
                  transition: all ease 0.7s 1.2s;
                }
                &:nth-child(3) {
                  transform: translateY(0);
                  opacity: 1;
                  transition: all ease 0.7s 1.4s;
                }
              }
            }
          }
        }
      }
    }
  }

</style>
