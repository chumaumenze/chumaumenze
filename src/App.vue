<template lang="pug">
  #app
    // preloader
    router-view
</template>

<script lang="ts">
  import { Component, Vue } from "vue-property-decorator";

  @Component
  export default class App extends Vue {}
</script>

<style lang="scss">
  body{
    font-family: 'Montserrat', sans-serif;
    padding-bottom: 170px;
    font-weight: 500;
  }
</style>
