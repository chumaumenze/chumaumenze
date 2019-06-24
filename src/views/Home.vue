<template lang="pug">
  .is-preload
    #wrapper
      #bg
      #overlay
      #main
        // Header
        header#header
          h1 Chuma Umenze
          p Software Engineer  •  Photographer  •  Iridescent
          nav
            ul
              li
                a.icon.brands.fa-twitter(href='https://twitter.com/chumaumenze')
                  span.label Twitter
              li
                a.icon.brands.fa-linkedin-in(href='https://linkedin.com/in/chumaumenze')
                  span.label LinkedIn
              // li
                a.icon.brands.fa-facebook-f(href='#')
                  span.label Facebook
              // li
                a.icon.brands.fa-dribbble(href='#')
                  span.label Dribbble
              li
                a.icon.brands.fa-github(href='https://github.com/chumaumenze')
                  span.label Github
              li
                a.icon.solid.fa-envelope(href='mailto:hello@chumaumenze.com')
                  span.label Email
        // Footer
        footer#footer
          span.copyright
            | © {{ year }} Chuma Umenze
            a.attribute(href='http://html5up.net' target="blank" ref="no-opener") HTML5 UP
</template>

<script lang="ts">
    import {Vue, Component} from 'vue-property-decorator';

    @Component
    export default class Aerial extends Vue {
        private year: number = 2019;
        private mounted() {
            window.onload = () => document.body.classList.remove('is-preload');
            window.ontouchmove = () => false;
            window.onorientationchange = () => document.body.scrollTop = 0;
        }
    }
</script>

<style src="@/assets/css/main.css"></style>
