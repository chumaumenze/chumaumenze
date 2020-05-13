<template lang="pug">
  blog-layout(stickyNavbar)
    #blog-connect.page-mt
      h1 Drop a line...
      p.subtitle Write me a message or connect with me on the social platforms.
      .row
        .eight.columns
          div
            form(name="Connect" data-netlify="true" method="POST" 
              netlify-honeypot="honeypot" @submit.prevent="submitForm")
              .row
                .six.columns
                  label(for='blog-connect-form-name') Name
                  input#blog-connect-form-name.u-full-width(type='text', 
                    placeholder='Enter your name' name="name" 
                    v-model="formData.name" required)
                .six.columns
                  label(for='blog-connect-form-email') Email
                  input#blog-connect-form-email.u-full-width(type='email', 
                    placeholder='myusername@email.com' name="email" 
                    v-model="formData.email" required)
              input#blog-connect-form-honeypot(name="honeypot" type="text")
              label(for='blog-connect-form-message') Message
              textarea#blog-connect-form-message.u-full-width(
                placeholder='Hi Zuko …' name="message" v-model="formData.message" required)
              //div.h-captcha(:data-sitekey="$config.webTags.hCaptcha.siteKey" 
              //  :data-callback="$config.webTags.hCaptcha.callbackName")
              .row
                .one-half.column
                  input.button(type='submit', value='send')
                .one-half.column
                  span.u-pull-right.note(v-if="submitNotice.msg" 
                    v-bind:class="{'info': submitNotice.type === 'info'}") {{submitNotice.msg}}

        .four.columns
          a(:href="`mailto:${this.$config.author.email}`") {{this.$config.author.email}}
          social-link
</template>

<style lang="scss" scoped>
  #blog-connect-form-honeypot {
    display: none;
  }
  .note {
    margin: 0;
    background: unset;
    color: unset;
    
    &.info {
      border: 1px solid #37b9ed;
    }
  }

</style>

<script>
  import SocialLink from "../components/SocialLink";
  import GraphMeta from "~/mixins/GraphMeta.vue";
  
  export default {
    name: 'Contact',
    mixins: [GraphMeta],
    components: {SocialLink},
    methods: {
      encode(data) {
        return Object.keys(data)
          .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
          .join('&')
      },
      showMessage(msg, type='info') {
        this.submitNotice.msg = msg
        this.submitNotice.type = type
        setTimeout(()=>{
          this.submitNotice.msg = null
          this.submitNotice.type = null
        }, 5000)
      },
      submitForm(e) {
        fetch('/', {
          method: 'POST',
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
          body: this.encode({
            'form-name': e.target.getAttribute('name'),
            ...this.formData,
          }),
        })
          .then(data => {
            if (data.status === 200) {
              this.showMessage("Message Sent!");
              this.formData = {}
            } else {
              this.showMessage("Failed to send message.", 'err')
              console.info("[INFO]: Failed to send message", data)
            }
          })
          .catch(error => {
            this.showMessage("Failed to send message.", 'err')
            console.error("[ERROR]: Failed to send message", error)
          })
      },
    },
    data(){
      return {
        formData: {},
        submitNotice: {msg: null, type: null},
        graphMeta: {
          title: `Connect with ${this.$config.author.name}`,
          description: 'Write me a message or connect with me on social platforms.'
        }
      }
    }
  }
</script>
