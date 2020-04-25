<template lang="pug">
  div#nav
    div.sticky(v-if="stickyNavbar")
      div
        ul
          li
            g-link(to="/") {{$static.metadata.siteName}}
          li
            g-link(to="/") ~/ 
            //| &middot; 
          li
            g-link(to="/about") ~/about 
            //| &middot; 
          li
            g-link(to="/contact") ~/contact
    template(v-else)
      header
        h1 {{$static.metadata.siteName}}
        p.subtitle {{$static.metadata.siteDescription}}
        span.nav-links
          g-link(to="/") home 
          | &middot; 
          g-link(to="/about") about 
          | &middot; 
          g-link(to="/contact") contact
      hr
      
</template>

<style lang="scss" scoped>
#nav {
  & div.sticky {
    margin-bottom: 5em;
    
    & div {
      position: fixed;
      margin: 0 -10%;
      top: 0;
      width: 100%;
      background-color: #636363;
      z-index: 999;
  
      /*& * {*/
      /*  background-color: #636363;*/
      /*  color: #fffff8;*/
      /*}*/
  
      ul {
        list-style-type: none;
        margin: 0;
        padding: 0;
        overflow: hidden;
  
        li {
          float: right;
          /*position: center;*/
  
          & a {
            background: unset;
            display: block;
            color: white;
            text-align: center;
            padding: 14px 16px;
            text-decoration: none;
  
            &:before:first-child {
              content: "/";
            }
  
            /* Change the link color to #111 (black) on hover */
            &:hover {
              background-color: #494949;
            }
          }
        }
      }
    }
  }
}

@media (max-width: 1024px) {
  #nav div.sticky div {
    margin: 0 -5%;
  }
}
</style>

<static-query>
query {
  metadata {
    siteName,
    siteDescription
  }
}
</static-query>

<script>
  export default {
    name: 'Author',
    props: {
      "stickyNavbar": {
        type: Boolean,
        default: false
      }
    }
  }

</script>
