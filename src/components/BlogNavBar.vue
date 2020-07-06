<template lang="pug">
  header#blog-nav(v-bind:class ="{'has-docked-nav':isSticky}")
    slot(v-if="!isSticky")
      h1 
        g-link(to="/") {{$static.metadata.siteName}}

    nav.navbar
      .container
        ul.navbar-list
          li.navbar-item(v-if="isSticky")
            g-link.navbar-link(to="/" exact) {{$static.metadata.siteName.split(' ')[0]}}
          //li.navbar-item
            g-link.navbar-link(to="/about") About
          //li.navbar-item
            g-link.navbar-link(to="/blog") Blog
          li.navbar-item
            g-link.navbar-link(to="/connect") Connect
          //li.navbar-item
            a.navbar-link(href='#', data-popover='#blog-nav-more') More
            #blog-nav-more.popover
              ul.popover-list
                li.popover-item
                  a.popover-link(href='https://lens.chumaumenze.com') Photos
                li.popover-item
                  g-link.popover-link(to='/archive') Archive
                li.popover-item
                  g-link.popover-link(to='/tags') Tags
                li.popover-item
                  g-link.popover-link(to='/ideas') Ideas

</template>

<style lang="scss">
  @import "~/assets/style/variables";

  /* Navbar */
  .navbar {
    background-color: $light-mode__bg;
    display: block;
    margin-bottom: 3.5rem;
  }

  .navbar,
  .navbar-spacer {
    display: block;
    width: 100%;
    height: 6.5rem;
    z-index: 99;
    border-top: 1px solid $light-mode__navbar-border-top;
    border-bottom: 1px solid $light-mode__navbar-border-bottom;
  }

  .navbar-spacer {
    display: none;
  }

  .navbar > .container {
    width: 100%;
  }

  .navbar-list {
    list-style: none;
    margin-bottom: 0;
  }

  .navbar-item {
    position: relative;
    float: left;
    margin-bottom: 0;
  }

  .navbar-link {
    text-transform: uppercase;
    font-size: 9px;
    font-weight: 600;
    letter-spacing: .2rem;
    margin-right: 15px;
    text-decoration: none;
    line-height: 6.5rem;
    color: $light-mode__nav-link;
  }

  .navbar-link:hover {
    color: $light-mode__nav-link-hover;
  }

  .navbar-link.active {
    text-decoration: underline;
  }

  .has-docked-nav .navbar {
    position: fixed;
    top: 0;
    left: 0;
  }

  .has-docked-nav .navbar-spacer {
    display: block;
  }

  /* Re-overiding the width 100% declaration to match size of % based container */
  .has-docked-nav .navbar > .container {
    width: 80%;
  }

  /* Popover */
  .popover.open {
    display: block;
  }

  .popover {
    display: none;
    position: absolute;
    background: $light-mode__popover-bg;
    border: 1px solid $light-mode__popover-border;
    border-radius: 4px;
    top: 80%;
    left: -63%;
    filter: drop-shadow(0 0 6px rgba(0, 0, 0, .1));
  }

  .popover-item:first-child .popover-link:after,
  .popover-item:first-child .popover-link:before {
    bottom: 100%;
    left: 50%;
    border: solid transparent;
    content: " ";
    height: 0;
    width: 0;
    position: absolute;
    pointer-events: none;
  }

  .popover-item:first-child .popover-link:after {
    border-color: rgba(255, 255, 255, 0);
    border-bottom-color: #fff;
    border-width: 10px;
    margin-left: -10px;
  }

  .popover-item:first-child .popover-link:before {
    border-color: rgba(238, 238, 238, 0);
    border-bottom-color: #eee;
    border-width: 11px;
    margin-left: -11px;
  }

  .popover-list {
    padding: 0;
    margin: 0;
    list-style: none;
  }

  .popover-item {
    padding: 0;
    margin: 0;
  }

  .popover-link {
    position: relative;
    color: $light-mode__popover-link;
    display: block;
    padding: 8px 20px;
    border-bottom: 1px solid $light-mode__popover-border;
    text-decoration: none;
    text-transform: uppercase;
    font-size: 9px;
    font-weight: 600;
    text-align: center;
    letter-spacing: .1rem;
  }

  .popover-item:first-child .popover-link {
    border-radius: 4px 4px 0 0;
  }

  .popover-item:last-child .popover-link {
    border-radius: 0 0 4px 4px;
    border-bottom-width: 0;
  }

  .popover-link:hover {
    color: $light-mode__popover-link-hover;
    background: $light-mode__popover-link-bg-hover;
  }

  .popover-link:hover,
  .popover-item:first-child .popover-link:hover:after {
    border-bottom-color: $light-mode__popover-link-bg-hover;
  }

/* Media Queries
–––––––––––––––––––––––––––––––––––––––––––––––––– */

  /* Larger than mobile */
  @media (min-width: 400px) {}
  @media (min-width: 550px) {
    .popover {
      left: -33%;
    }
    .popover-link {
      font-size: 1rem;
    }
  }

  @media (min-width: 550px) and (max-width: 750px) {
    .navbar-link {
      font-size: 9px;
      margin-right: 20px;
    }
  }

  /* Larger than tablet */
  @media (min-width: 750px) {
    .navbar-link {
      text-transform: uppercase;
      font-size: 11px;
      font-weight: 600;
      letter-spacing: .2rem;
      margin-right: 35px;
      text-decoration: none;
      line-height: 6.5rem;
      color: #222;
    }
  }
  @media (prefers-color-scheme: dark) {
    .navbar {
      background-color: $dark-mode__bg;
      .navbar-link {
        color: #636363;

        &.active {
          color: #c2c2c2;
        }

        &:hover {
          color: #787878;
        }
      }
    }
    .popover {
      background: $dark-mode__popover-bg;
    }
    .popover-link{
      color: $dark-mode__popover-link;
      &:hover {
        color: $dark-mode__popover-link-hover
      }
    }
    .popover-link:hover {
      color: $dark-mode__popover-link-hover;
      background: $dark-mode__popover-link-bg-hover;
    }

    .popover-link:hover,
    .popover-item:first-child .popover-link:hover:after {
      border-bottom-color: $dark-mode__popover-link-bg-hover;
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
    name: 'BlogNavBar',
    props: {
      "stickyNavbar": {
        type: Boolean,
        default: undefined
      }
    },
    data() {
      return {
        isSticky: this.stickyNavbar
      }
    },
    methods: {
      openPopover(e) {
        e.preventDefault()
        this.closePopover();
        let $popover = this.$el.querySelector(e.target.dataset.popover);
        $popover.classList.toggle('open')
        $popover.onmouseleave = this.closePopover
        e.stopImmediatePropagation();
      },
      closePopover(e) {
        let openPopovers = this.$el.querySelectorAll('.popover.open')
        openPopovers.forEach(elm => {
          elm.classList.remove('open')
        })
      },
      resize() {
        let $nav = this.$el.querySelector('.navbar')
        let navOffsetTop = $nav.offsetTop
        this.isSticky = this.stickyNavbar
        navOffsetTop = $nav.offsetTop
        this.onScroll()
      },
      onScroll() {
        if (!this.stickyNavbar) {
          let $nav = this.$el.querySelector('.navbar')
          if($nav.offsetTop <= window.scrollY && !this.stickyNavbar) {
            this.isSticky = true
          }
          if($nav.offsetTop >= window.scrollY && !this.stickyNavbar) {
            this.isSticky = false
          }
        }
      }
    },
    mounted() {
      this.$el.querySelectorAll('[data-popover]').forEach(elm => {
        elm.onclick = this.openPopover;
        elm.onmouseover = this.openPopover;
      })
      window.onscroll = this.onScroll
      window.onresize = this.resize
      document.onclick = this.closePopover
    }
  }

</script>
