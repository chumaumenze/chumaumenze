<template lang="pug">
  blog-layout(v-bind:stickyNavbar="stickyNavbar")
    #blog-home(v-bind:class="{'page-mt':stickyNavbar}")
      section
        .row
          .ten.columns
            h2 
              | Hi, I'm Chuma. I'm a terminal-friendly, frontend-type 
              | backend programmer based in Lagos.
            p Previously working as a Software Engineer at 
              a(href="https://www.britecore.com") BriteCore
            
            p
              span.note Currently open to job opportunities.
        hr
        section
          h4 Featured Projects
          div.featured-projects
            .row
              .six.columns.project
                .row
                  .three.columns.image
                    a(href="#")
                      img.svg-bg.u-max-full-width(src="../assets/images/validator.svg"
                        alt="An approval seal used as Flask validator logo")
                  .nine.columns.description
                    h5
                      a(href="#") Flask Validator
                    p An open-source request validation library for Flask micro-framework.
              .six.columns.project
                .row
                  .three.columns.image
                    a(href="#")
                      img.svg-bg.u-max-full-width(src="../assets/images/qr_code.svg" 
                        alt="QR code used as Simone logo")
                  .nine.columns.description
                    h5
                      a(href="#") Simone
                    p Test your USSD application locally from your smart device.
              //.six.columns.project
                .row
                  .three.columns.image
                    a(href="#")
                      img.svg-bg.u-max-full-width(src="../assets/images/telegraph.svg" 
                        alt="Telegraph used as Morscribe logo")
                  .nine.columns.description
                    h5
                      a(href="#") Morscribe
                    p Modern telegraph for transcribing spoken words and 
                      | text to morse, vice-versa.
          .row
            h6  >> 
              g-link(to="/projects") See projects.
</template>

<style lang="scss" scoped>
  @import "~/assets/style/variables";
  
  .svg-bg {
    background-color: lightgrey;
    border-radius: 20%;
  }

  @media (min-width: 400px) and (max-width: 550px){
    .featured-projects {
      & .project {
        width: 100%;
        margin-left: 0;
      }
      & .image {
        max-width: 20%;
        margin-right: 1em;
      }
      & .description {
        max-width: 60%;
        
        h5 {
          font-size: 2rem;
          margin-bottom: 0.5em;
        }
        
        p {
          
        }
      }
    }
  }
  @media (min-width: 750px) {
    .featured-projects {
      & .description {
        h5 {
          font-size: 2rem;
          margin-bottom: 0.5em;
        }

        p {

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
