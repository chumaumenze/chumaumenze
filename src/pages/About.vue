<template lang="pug">
  blog-layout(stickyNavbar)
    #blog-about.page-mt
      h1 Hi, I'm Zuko...
      .row.profile
        .four.columns
          div
            //img.image(src="../assets/images/profile.png")
            img.image(src="../assets/images/goofy.jpeg")
            h5 Chuma Zuko Umenze
            a(:href="`mailto:${this.$config.email}`") {{this.$config.email}}
            social-link 
        .eight.columns
          p I am a multidisciplinary developer based in Lagos, Nigeria. I 
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
</template>

<style lang="scss" scoped>
  @import "~/assets/style/variables";

  .profile {
    h5 {
      margin-top: 2rem;
      margin-bottom: 0;
    }
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

<static-query>
query {
  metadata {
    siteName
    siteUrl
  }
}
</static-query>

<script>
  import SocialLink from "../components/SocialLink";
  export default {
    name: 'About',
    components: {SocialLink},
    data() {
      return {
        stickyNavbar: true
      }
    },
    metaInfo() {
      return {
        title: 'About',
        meta: [
          {
            key: "og:type",
            property: "og:type",
            content: "profile"
          },
          {
            key: 'twitter:card',
            name: 'twitter:card',
            content: 'summary'
          },
          {
            key: "og:title",
            property: "og:title",
            content: `About ${this.$config.name} | ${this.$parent.$static.metadata.siteName}`
          },
          {
            key: "og:url",
            property: "og:url",
            content: this.$static.metadata.siteUrl + this.$route.fullPath
          },
          {
            key: "og:image",
            property: "og:image",
            content: this.$static.metadata.siteUrl
              + `${require("~/assets/images/goofy.jpeg")}`
          },
          {
            key: "profile:first_name",
            property: "profile:first_name",
            content: this.$config.name.split(' ')[0]
          },
          {
            key: "profile:last_name",
            property: "profile:last_name",
            content: this.$config.name.split(' ')[1]
          },
        ]
      }
    }
  }
</script>
