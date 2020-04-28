<template lang="pug">
  blog-layout(v-bind:stickyNavbar="stickyNavbar")
    #blog-connect(v-bind:class="{'page-mt':stickyNavbar}")
      h1 Drop a line...
      p.subtitle Write me a message or connect with me on the social platforms.
      .row
        .eight.columns
          div
            form(name="Connect" data-netlify="true" method="POST" 
              netlify-honeypot="honeypot")
              .row
                .six.columns
                  label(for='blog-connect-form-name') Name
                  input#blog-connect-form-name.u-full-width(type='text', 
                    placeholder='Enter your name' name="Name")
                .six.columns
                  label(for='blog-connect-form-email') Email
                  input#blog-connect-form-email.u-full-width(type='email', 
                    placeholder='myusername@email.com' name="Email")
              input#blog-connect-form-honeypot(name="honeypot" type="text")
              label(for='blog-connect-form-message') Message
              textarea#blog-connect-form-message.u-full-width(
                placeholder='Hi Zuko …' name="Message")
              //div.h-captcha(:data-sitekey="$config.webTags.hCaptcha.siteKey" 
              //  :data-callback="$config.webTags.hCaptcha.callbackName")
              input.button(type='submit', value='Send')

        .four.columns
          a(:href="`mailto:${this.$config.email}`") {{this.$config.email}}
          social-link
    hr

</template>

<style scoped>
  #blog-connect-form-honeypot {
    display: none;
  }

</style>

<script>
  import SocialLink from "../components/SocialLink";
  export default {
    name: 'Contact',
    components: {SocialLink},
    data() {
      return {
        stickyNavbar: true
      }
    }
  }
</script>
