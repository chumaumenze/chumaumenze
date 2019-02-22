<template lang="pug">
  .loader-wrapper
    .loader
</template>

<script lang="ts">
  import { Component, Vue } from "vue-property-decorator";

  @Component
  export default class Preloader extends Vue {
    public mounted(this: any) {
      const $ = this.$;

      const loader = $(this.$el.querySelector(".loader"));
      const windowHeight = $(window).height();
      const windowWidth = $(window).width();
      let o = 0;

      loader.css({
        top: windowHeight / 2 - 2.5,
        left: windowWidth / 2 - 200,
      });

      do {
        loader.animate({width: o}, 10);
        o += 3;
      } while (o <= 400);

      if (o === 402) {
        loader.animate({left: 0, width: "100%"});
        loader.animate({top: "0", height: "100vh"});
      }

      setTimeout(() => {
        $(this.$el).fadeOut("fast");
        (loader).fadeOut("fast");
      }, 3500);
    }

    public beforeDestroy() {
      return;
    }
  }
</script>

<style lang="scss" scoped>
  .loader-wrapper {
    position: fixed;
    width: 100%;
    height: 100%;
    background-color: #000;
    z-index: 9999;

    > .loader {
      height: 1px;
      background-color: #fff;
      position: absolute;
      z-index: 9999;
    }
  }
</style>
