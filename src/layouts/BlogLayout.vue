<template lang="pug">
  div#blog-layout.center
    blog-nav-bar(v-bind:stickyNavbar="stickyNavbar")
    slot
    blog-footer

</template>

<style lang="scss">
  /* Import main css */
  /*@import "../assets/style/reset.css";*/
  /*@import "../assets/style";*/
  @import "../assets/style/operator-mono";
  @import "../assets/style/et-book";
  @import "../assets/style/gridsome-prismjs.css";

  body {
    margin: 0;
    font-family: et-book, Palatino, "Palatino Linotype", "Palatino LT STD", "Book Antiqua", Georgia, serif;
    background-color: #fafafa; //#fffff8;
  }

  /*h1 {*/
  /*  font-weight: 400;*/
  /*  margin-top: 4rem;*/
  /*  margin-bottom: 1.5rem;*/
  /*  font-size: 3.2rem;*/
  /*  line-height: 1;*/
  /*}*/
  
  /*h2 {*/
  /*  font-style: italic;*/
  /*  font-weight: 400;*/
  /*  margin-top: 2.1rem;*/
  /*  margin-bottom: 1.4rem;*/
  /*  font-size: 2.2rem;*/
  /*  line-height: 1;*/
  /*}*/
  
  /*h3 {*/
  /*  font-style: italic;*/
  /*  font-weight: 400;*/
  /*  font-size: 1.7rem;*/
  /*  margin-top: 2rem;*/
  /*  margin-bottom: 1.4rem;*/
  /*  line-height: 1;*/
  /*}*/
  
  /*hr {*/
  /*  display: block;*/
  /*  height: 1px;*/
  /*  !*width: 55%;*!*/
  /*  border: 0;*/
  /*  border-top: 1px solid #ccc;*/
  /*  margin: 1em 0;*/
  /*  padding: 0;*/
  /*}*/
  
  /*p.subtitle {*/
  /*  font-style: italic;*/
  /*  margin-top: 1rem;*/
  /*  margin-bottom: 1rem;*/
  /*  font-size: 1.8rem;*/
  /*  display: block;*/
  /*  line-height: 1;*/
  /*}*/
  
  img {
    width: 100%;
    height: auto;
  }
  
  .center {
    width: 80%;
    margin: 0 auto;
  }
  
  .subtitle {
    font-family: et-book-roman-old-style, Palatino, "Palatino Linotype", "Palatino LT STD", "Book Antiqua", Georgia, serif;
    font-style: italic;
  }

  @media (max-width: 1024px) {
    .center {
      width: 90%;
    }
  }
  
  code, pre > code {
    font-family: "Operator Mono Light", Consolas, "Liberation Mono", Menlo, Courier, monospace;
    font-size: 1.0rem;
    line-height: 1.42;
    font-style: italic;
  }

  /* Links: replicate underline that clears descenders */
  a:link,
  a:visited {
    color: inherit;
  }

  a:link {
    text-decoration: none;
    background: linear-gradient(#fffff8, #fffff8), linear-gradient(#fffff8, #fffff8), linear-gradient(currentColor, currentColor);
    background-size: 0.05em 1px, 0.05em 1px, 1px 1px;
    background-repeat: no-repeat, no-repeat, repeat-x;
    background-position: 0 93%, 100% 93%, 0 93%;
  }

  @media screen and (-webkit-min-device-pixel-ratio: 0) {
    a:link {
      background-position-y: 87%  /* , 87%, 87%; */
    }
  }

  a:link::selection,
  a:link::-moz-selection {
    text-shadow: 0.03em 0 #b4d5fe, -0.03em 0 #b4d5fe, 0 0.03em #b4d5fe, 0 -0.03em #b4d5fe, 0.06em 0 #b4d5fe, -0.06em 0 #b4d5fe, 0.09em 0 #b4d5fe, -0.09em 0 #b4d5fe, 0.12em 0 #b4d5fe, -0.12em 0 #b4d5fe, 0.15em 0 #b4d5fe, -0.15em 0 #b4d5fe;
    background: #b4d5fe;
  }

</style>

<script>
  import BlogNavBar from "../components/BlogNavBar.vue";
  import BlogFooter from "../components/BlogFooter.vue";
  
  export default {
    name: "BlogLayout",
    props: {
      "stickyNavbar": {
        type: Boolean,
        default: false
      }
    },
    components: {BlogFooter, BlogNavBar}
  }
</script>
