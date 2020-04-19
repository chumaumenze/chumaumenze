<template lang="pug">
  div#blog-layout.container
    blog-nav-bar(v-bind:stickyNavbar="stickyNavbar")
    slot
    blog-footer

</template>

<style lang="scss">
  #blog-layout {
    padding: 2rem 0;
    
    a {
      text-decoration: none;
    }
  }

  @media (max-width: 750px) {
    #blog-layout {
      padding: 2rem 2rem;
    }
  }
  @media (min-width: 550px) {}
  
  @media (min-width: 400px) {}

  @media (prefers-color-scheme: dark) {
    $dark-mode__bg: rgba(17, 18, 22, 1);
    $dark-mode__white: #e2e8f0;
    $dark-mode__white: #c2c2c2;
    $dark-mode__black: #222222;

    body {
      background-color: $dark-mode__bg;
      color: #93a0c5;
      
      a {
        color: #636363;
        
        &.active {
          color: #c2c2c2;
        }
        
        &:hover {
          color: #787878;
        }
      }
      h1, h2, h3, h4, h5, h6 {
        color: $dark-mode__white;
        
        a {
          color: $dark-mode__white;
          
          &:hover {
            color: #a8a8a8;
          }
        }
      }
      
      /*.post-card {*/
      /*}*/
      .post-meta {
        color: #4d5c86;
      }
    }
  }
</style>
  
  
<script>
  import "~/assets/style/index.scss"
  
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
