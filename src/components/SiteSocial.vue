<template lang="pug">
  #site-social
    .social
      a.text get connected
      .line
      a(v-for="(social, key) in socialLinks", :key="key", :href="social.url", :aria-label="social.name")
        i.fa(:class="social.iconName", aria-hidden="true")
</template>

<script lang="ts">
  import { Prop, Component, Vue } from "vue-property-decorator";
  import { SocialLinkOptions } from "@/interfaces";

  @Component
  export default class SiteSocial extends Vue {
    @Prop({type: Array, required: true}) private socialLinks?: SocialLinkOptions[];
  }
</script>

<style lang="scss" scoped>
  $color_1: rgb(33, 37, 41);

  #site-social {
    .social {
      right: 0;
      position: absolute;
      top: 45%;
      // transform: translateY(-60%);
      transform: rotate(90deg);
      margin-right: -155px;
      z-index: 6;

      a {
        display: block;
        font-size: 18px;
        margin-top: 10px;
        float: left;
        margin-right: 15px;
        -webkit-transition: all ease 0.3s;
        transition: all ease 0.3s;
        font-weight: 600;
        color: #fff;

        &.text {
          margin-right: 0;
        }

        i {
          transition-duration: 0.95s;

          &:hover {
            transform: rotate(-90deg);
            transition-duration: 0.5s;
          }
        }
      }

      > .line {
        float: left;
        width: 72px;
        background: #bfbfbf;
        height: 1px;
        margin: 20px 17px;
      }
    }
  }

</style>
