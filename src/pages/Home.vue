<template lang="pug">
  blog-layout(v-bind:stickyNavbar="stickyNavbar")
    #blog-home(v-bind:class="{'page-mt':stickyNavbar}")
      section
        .row
          .ten.columns
            h2
              | Hi, I'm Chuma, a software engineer, passionate about solving problems.
            p
              span.note This website is currently being designed.
        .row
          .summary
            p I am a terminal-friendly, frontend-type backend programmer based in Lagos. 
              | Basically, I make things that work on computers. I used to work as 
              | software engineer at TechAdvance and do contract 
              | works through CodeBloks. In the past, I have work with companies like GPay,  
              a(href="https://www.britecore.com") BriteCore
              | , and more.
              p I build mostly with Python. It is my favourite and best language. 
                | And I have a working knowledge of C/C++, Javascript and Rust.
                | I develop back-end API with Flask, and use Django for large web apps. 
                | Vue.js is my go-to frontend framework. Lastly, I blog about code and 
                | philosophy, and contribute to open-source and mentorship projects.
        hr
        section.featured
          .row
            .four.columns.featured-projects
              h3 Work & Projects
              p I do a lot of freelancing & contract work with individual clients and companies. 
                | I spend a lot of time working on personal and open-source projects.
              g-link.button(to="/projects") View my works
            .eight.columns.featured-organisations
              .row
                .four.columns.image
                  img.u-max-full-width(src="../assets/images/company-logos/britecore.svg"
                    alt="Britecore company logo")
                .four.columns.image
                  img.u-max-full-width(src="../assets/images/company-logos/gpay.png"
                    alt="GPay company logo")
                .four.columns.image
                  img.u-max-full-width(src="../assets/images/company-logos/techadvance.svg"
                    alt="TechAdvance company logo")

        hr
        section
          .row
            .four.columns
              h3 Get in touch
            .eight.columns.get-in-touch
              .row
                h5 Connect
                div
                  a.button(:href='$config.author.socials.github.url', target='_blank')
                    | Github
                  a.button(:href='$config.author.socials.gitlab.url', target='_blank')
                    | Gitlab
                  a.button(:href='$config.author.socials.spotify.url', target='_blank')
                    | Spotify
                  a.button(:href='$config.author.socials.twitter.url', target='_blank')
                    | Twitter
                  a.button(:href='$config.author.socials.linkedin.url', target='_blank')
                    | Linkedin
              hr
              .row
                g-link.button(to="/connect") Send message
                a.button(:href="`mailto:${$config.author.email}`") Send email


</template>

<style lang="scss" scoped>
  @import "~/assets/style/variables";
  
  .featured {
    & .featured-organisations {
      .image {
        margin-left: 0;
        margin-right: 2%;
      }
    }
  }
  .get-in-touch {
    .button {
      margin-right: 2em;
    }
  }

  @media (min-width: 320px) and (max-width: 550px){
    .featured {
      & .image {
        max-width: 44%;
        margin-right: 1em;
      }
      & .featured-organisations {
        margin-top: 2em;
      }
    }
  }
  @media (min-width: 750px) {
    .featured {
      & .featured-organisations {
        .row:first-child {
          margin: 20% 0;

          & .image:first-child {
            padding: 5% 0;
          }

          & .image:nth-child(3) {
            padding: 7% 0;
          }
        }
      }
    }
  }
</style>

<static-query>
query {
  metadata {
    siteName
    siteDescription
    siteUrl
  }
}
</static-query>

<script>
  import GraphMeta from "~/mixins/GraphMeta.vue";
  export default {
    name: 'BlogHome',
    mixins: [GraphMeta],
    data() {
      return {
        stickyNavbar: true
      }
    }
  }
</script>
