<template lang="pug">
  .is-preload
    #wrapper
      #bg
      #overlay
      #main
        // Header
        header#header
          h1(title="© 2019 Chima Umenzeakor") Chuma Umenze
          p Software Engineer  •  Photographer  •  
            a(href='https://bit.ly/iridescentpeople' target="blank" ref="no-opener") Iridescent
          nav
            ul
              li
                a.icon.brands.fa-twitter(href='https://twitter.com/chumaumenze' target="blank" ref="no-opener")
                  span.label Twitter
              li
                a.icon.brands.fa-linkedin-in(href='https://linkedin.com/in/chumaumenze' target="blank" ref="no-opener")
                  span.label LinkedIn
              li
                a.icon.brands.fa-github(href='https://github.com/chumaumenze' target="blank" ref="no-opener")
                  span.label Github
              li
                a.icon.solid.fa-photo-video(href='https://lens.chumaumenze.com' target="blank" ref="no-opener")
                  span.label Photos
              li
                a.icon.solid.fa-blog(href='https://blog.chumaumaumenze.com' target="blank" ref="no-opener")
                  span.label Blog
              li
                a.icon.solid.fa-envelope(href='mailto:hello@chumaumenze.com')
                  span.label Email
        // Footer
        footer#footer
          span.copyright
            | © {{ year }} Chuma Umenze  •  
            a(href='http://html5up.net' target="blank" ref="no-opener") HTML5 UP
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
