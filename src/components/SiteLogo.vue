<template lang="pug">
  #site-logo
    transition(name="fade-out")
      span(v-if="isText")
        router-link(to="/" class="logo" v-text="logo")
      img(:src="logo", v-else)
</template>

<script lang="ts">
  import { Prop, Component, Vue } from "vue-property-decorator";

  @Component
  export default class SiteLogo extends Vue {
    @Prop({type: String, required: true}) public logo?: string;
    @Prop({type: Boolean, default: false}) public isText?: boolean;
  }
</script>

<style lang="scss" scoped>
  #site-logo {
    display: inline-block;

    span {
      > a {
        text-transform: uppercase;
        text-decoration: none solid rgb(255, 255, 255);
        font-size: 22px;
        font-weight: 800;
        line-height: 38.4px;
        color: rgb(255, 255, 255);
      }
    }
  }

  .fade-out-enter-active, .fade-out-leave-active {
    transition: opacity .9s;
  }
  .fade-out-enter, .fade-out-leave-to {
    opacity: 0;
  }
</style>
