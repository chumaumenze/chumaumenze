<template lang="pug">
  blog-layout(stickyNavbar)
    #blog-about.page-mt
      .row
        div
          h2 About this site
          p This website is inspired by my passion for technology. 
            | It is a home for my opinions, thoughts, rants and experiences. 
            | The aim of this site is to gather and share useful information, 
            | tutorials, resources, tips, guidelines amongst other topics. 
            | I anticipate anyone exploring will find useful and interesting content here.
      .row.profile
        h2 About me
        .row
          .four.columns
            div
              //img.image(src="../assets/images/profile.png")
              g-image.image(src="../assets/images/goofy.jpeg")
              h5 Chuma Umenze
              a(:href="`mailto:${this.$config.author.email}`") {{this.$config.author.email}}
              social-link 
          .eight.columns
            p Chuma Umenze is a multidisciplinary developer based in Lagos, Nigeria. I 
              | currently work remotely as a software engineer with the amazing and
              | talented people at 
              a(href="https://www.britecore.com") Britecore
              | , revolutionizing the insurance industry.
            p I am self-taught. I became very passionate about computers and software 
              | in my sophomore year and was interested in learning how it worked. 
              | So, I shifted my focus from my current major (political science) to 
              | explore this new passion. The decision was not difficult but 
              | critical. On finishing a computer networking course (CCNA), I curated
              | a list of online courses to teach myself computer science and 
              | programming.
            p My career in the industry kicked off in 2015. With the knowledge I had 
              | acquired, I began developing web apps and software for businesses and
              | organizations in my locale. With assistance from friends, I founded 
              | CodeBloks to help startup founders and businesses achieve their 
              | software development goals. Other experiences in the industry cut 
              | across working with small to large companies on a full-time/contract 
              | basis. I have worked with TechAdvance and her subsidiary – GPay, and 
              | currently in a contract with BriteCore.
            p Outside professional engagements, I am a member of Python Software 
              | Foundation & Python Nigeria. I volunteer for the Nigerian Red Cross 
              | and Be My Eyes.
            p In my spare time, I love to play tennis, video games and shoot some 
              | photos. I also enjoy reading and movies – history/non-fiction are my 
              | favourites.
            p Want to know more about me? Let's 
              g-link(to="/connect") chat.
            p.sign Zuko

</template>

<style lang="scss" scoped>
  @import "~/assets/style/variables";

  .profile {
    h5 {
      margin-top: 2rem;
      margin-bottom: 0;
    }
  }
  .sign {
    font-size: 2em;
    font-family: 'La Belle Aurore', cursive;
  }
  .image {
    width: 35%;
    margin: 0;
    transition: ease all .3s;
    opacity: 1;
    border-radius: 0.5em;
    box-shadow: 8px 8px #dce6ea, 0 4px 8px rgba(17,35,56,.04), 0 0 8px rgba(17,35,56,.04), 0 18px 27px rgba(17,35,56,.11);
  }
  @media (min-width: 550px) {
    .image {
      width: 85%;
    }
  }
</style>

<script>
  import SocialLink from "../components/SocialLink";
  import GraphMeta from "~/mixins/GraphMeta.vue";
  
  export default {
    name: 'About',
    mixins: [GraphMeta],
    components: {SocialLink},
    data() {
      return {
        stickyNavbar: true,
        graphMeta: {
          type: 'profile',
          title: `About ${this.$parent.$static.metadata.siteName}`,
          image: [
            {
              url: this.$parent.$static.metadata.siteUrl
                + `${require("~/assets/images/goofy.png")}`,
              alt: `A picture of ${this.$config.author.name}`
            },
            {
              url: this.$parent.$static.metadata.siteUrl
                + `${require("~/assets/images/goofy.jpeg")}`,
              alt: `A picture of ${this.$config.author.name}`
            }
          ]
        }
      }
    },
  }
</script>
