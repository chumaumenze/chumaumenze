<static-query>
query {
  metadata {
    siteName
    siteUrl
  }
}
</static-query>

<script>
  export default {
    name: "GraphMeta",
    data() {
      return {
        graphMeta: {
          type: 'website', // article, profile, website
          twitterType: 'summary', // summary, summary_large_image
          twitterID: `@${this.$config.author.socials.twitter.id}`,
          name: this.$parent.$static.metadata.siteName,
          title: this.$parent.$static.metadata.siteName,
          titleTemplate: this.$route.path === '/' ? '%s'
            : `%s | ${this.$parent.$static.metadata.siteName}`,
          url: this.$parent.$static.metadata.siteUrl + this.$route.path,
          description: this.$parent.$static.metadata.siteDescription,
          image: [
            {
              url: this.$parent.$static.metadata.siteUrl
                + `${require("~/assets/images/site-logo.png")}`,
              alt: `${this.$parent.$static.metadata.siteName} Logo`,
            },
            {
              url: this.$parent.$static.metadata.siteUrl
                + `${require("~/assets/images/site-logo-vertical.png")}`,
              alt: `${this.$parent.$static.metadata.siteName} Logo`,
            },
          ],
          article: {
            published_time: undefined,
            modified_time: undefined,
            expiration_time: undefined,
            author: undefined,
            tag: undefined,
          },
          profile: {
            first_name: this.$config.author.name.split(' ')[0],
            last_name: this.$config.author.name.split(' ')[1],
            username: this.$config.author.username,
            gender: this.$config.author.gender,
          },
          locale: {
            name: 'en_NG',
            alternates: ['en_GB', 'en_CA', 'en_US']
          },
          links: [],
        }
      }
    },
    metaInfo() {
      return {
        title: this.graphMeta.title,
        titleTemplate: this.graphMeta.titleTemplate,
        htmlAttrs: {
          prefix: [
            "og: http://ogp.me/ns#",
            "article: http://ogp.me/ns/article#",
            "profile: http://ogp.me/ns/profile#"
          ].join(' '),
        },
        link: [
          {
            rel: "preconnect",
            href: "https://www.googletagmanager.com",
            crossorigin: ""
          },
          {
            rel: "preconnect",
            href: "https://www.google-analytics.com",
            crossorigin: ""
          },
          {
            rel: "preconnect",
            href: "https://fonts.gstatic.com",
            crossorigin: ""
          },
          {
            rel: "dns-prefetch",
            href: "https://www.googletagmanager.com",
            crossorigin: ""
          },
          {
            rel: "dns-prefetch",
            href: "https://www.google-analytics.com",
            crossorigin: ""
          },
          {
            rel: "dns-prefetch",
            href: "https://fonts.gstatic.com",
            crossorigin: ""
          },
          ...this.graphMeta.links
        ],
        meta: [
          // Basic meta
          {
            name: 'robots',
            key: 'robots',
            content: 'index, follow'
          },
          {
            key: 'description',
            name: 'description',
            content: this.graphMeta.description
          },
          
          // Twitter meta
          {
            key: 'twitter:card',
            name: 'twitter:card',
            content: this.graphMeta.twitterType
          },
          {
            key: 'twitter:title',
            name: 'twitter:title',
            content: this.graphMeta.title
          },
          {
            key: 'twitter:site',
            name: 'twitter:site',
            content: this.graphMeta.twitterID
          },
          {
            key: 'twitter:creator',
            name: 'twitter:creator',
            content: this.graphMeta.twitterID
          },
          {
            key: 'twitter:description',
            name: 'twitter:description',
            content: this.graphMeta.description
          },
          // {
          //   key: 'twitter:image',
          //   name: 'twitter:image',
          //   content: this.graphMeta.image.url
          // },
          // {
          //   key: 'twitter:image:alt',
          //   name: 'twitter:image:alt',
          //   content: this.graphMeta.image.alt
          // },
          
          // OGP Basic meta
          {
            key: "og:type",
            property: "og:type",
            content: this.graphMeta.type
          },
          {
            key: "og:site_name",
            property: "og:site_name",
            content: this.graphMeta.name
          },
          {
            key: "og:url",
            property: "og:url",
            content: this.graphMeta.url
          },
          {
            key: "og:title",
            property: "og:title",
            content: this.graphMeta.title
          },
          {
            key: "og:description",
            property: "og:description",
            content: this.graphMeta.description
          },

          // OGP Image meta
          ...Array.from(
            this.graphMeta.image,
            (x, i) => {
              let tags = []
              tags.push({
                key: `og:image:url-${i}`,
                property: 'og:image:url',
                content: x.url
              })
              tags.push({
                key: `og:image:alt-${i}`,
                property: 'og:image:alt',
                content: x.alt || this.graphMeta.title
              })
              if (x.secure_url) tags.push({
                key: `og:image:secure_url-${i}`,
                property: 'og:image:secure_url',
                content: x.secure_url
              })
              if (x.type) tags.push({
                key: `og:image:type-${i}`,
                property: 'og:image:type',
                content: x.type
              })
              if (x.width) tags.push({
                key: `og:image:width-${i}`,
                property: 'og:image:width',
                content: x.width
              })
              if (x.height) tags.push({
                key: `og:image:height-${i}`,
                property: 'og:image:height',
                content: x.height
              })
              return tags
            }
          ).flat(),

          // OGP Locale meta
          {
            key: "og:locale",
            property: "og:locale",
            content: this.graphMeta.locale.name
          },
          ...Array.from(
            this.graphMeta.locale.alternates, 
            (x, i) => ({
              key: `og:locale:alternate-${i}`,
              property: `og:locale:alternate`,
              content: x
            })
          ),

          // OGP Article meta
          ...Array.from(
            ['published_time', 'modified_time', 'expiration_time', 
              'author', 'tag'], 
            (x) => {
              if (this.graphMeta.type === 'article'){
                return {
                  key: `article:${x}`,
                  property: `article:${x}`,
                  content: this.graphMeta.article[x]
                }
              }
            }
          ).filter(o => typeof o === 'object'),

          // OGP Profile meta
          ...Array.from(
            ['first_name', 'last_name', 'username', 'gender'],
            (x) => {
              if (this.graphMeta.type === 'profile'){
                return {
                  key: `profile:${x}`,
                  property: `profile:${x}`,
                  content: this.graphMeta.profile[x]
                }
              }
            }
          ).filter(o => typeof o === 'object'),
        ]
      }
    }
  }
</script>
