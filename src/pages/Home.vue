<template lang="pug">
  blog-layout(v-bind:stickyNavbar="stickyNavbar")
    #blog-home(v-bind:class="{'page-mt':stickyNavbar}")
      section
        .row
          .ten.columns
            h2 
              | I'm a terminal friendly, afrontend-type 
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
                      img.svg-bg(src="../assets/images/validator.svg"
                        alt="An approval seal used as Flask validator logo")
                  .nine.columns.description
                    h5
                      a(href="#") Flask Validator
                    p Project Flask Validator. 
                      | Labtuit works with active candidates to help them land their dream job.
              .six.columns.project
                .row
                  .three.columns.image
                    a(href="#")
                      img.svg-bg(src="../assets/images/telegraph.svg" 
                        alt="Telegraph used as Morscribe logo")
                  .nine.columns.description
                    h5
                      a(href="#") Morscribe
                    p Morscribe description. 
                      | Labtuit works with active candidates to help them land their dream job.
</template>

<style lang="scss" scoped>
  @import "~/assets/style/variables";
  
  .note {
    background: #fffaf0;
    border: 1px solid #ed8937;
    color: #ed8937;
    border-radius: 4px;
    padding: 6px 16px;
    margin-top: 8px;
  }
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
  }
}
</static-query>

<script>
export default {
  name: 'BlogHome',
  data() {
    return {
      stickyNavbar: true
    }
  },
  metaInfo() {
    return {
      title: this.$static.metadata.siteName,
      titleTemplate: '%s'
    }
  }
}
</script>
