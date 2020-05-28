// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here requires a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Chuma Umenze',
  siteDescription: 'Chuma Umenze is a software engineer, writer, photographer' +
    ' and iridescent persona. Proudly made in Nigeria.',
  siteUrl: 'https://chumaumenze.com',
  titleTemplate: `%s | Chuma Umenze`,
  permalinks:{
    trailingSlash: false
  },
  icon: './src/assets/images/favicon.png',
  templates: {
    Post: '/blog/:title',
    Tag: '/tags/:id'
  },

  plugins: [
    {
      // Create posts from markdown files
      use: '@gridsome/source-filesystem',
      options: {
        typeName: 'Post',
        path: 'content/posts/**/*.md',
        refs: {
          // Creates a GraphQL collection from 'tags' in front-matter and adds a reference.
          tags: {
            typeName: 'Tag',
            create: true
          }
        }
      }
    },
    {
      use: 'gridsome-plugin-pug',
      options: {
        pug: { /* Options for `pug-plain-loader` */ },
        pugLoader: { /* Options for `pug-loader` */ }
      }
    },
    {
      use: `gridsome-plugin-netlify-cms`,
      options: {
        publicPath: `/admin`
      }
    },
    {
      use: '@gridsome/plugin-sitemap',
      options: {
        config: {
          '/blog/*': {
            changefreq: 'weekly',
            priority: 1.0
          },
          '/tags/*': {
            changefreq: 'weekly',
            priority: 0.9
          },
          '/archive': {
            changefreq: 'weekly',
            priority: 0.7
          },
          '/blog': {
            changefreq: 'weekly',
            priority: 0.9
          },
          '/tags': {
            changefreq: 'weekly',
            priority: 0.7
          },
          '/about': {
            changefreq: 'monthly',
            priority: 0.7
          },
          '/code': {
            changefreq: 'monthly',
            priority: 0.7
          },
          '/connect': {
            changefreq: 'monthly',
            priority: 0.7
          },
          '/projects': {
            changefreq: 'monthly',
            priority: 0.7
          },
          '/*': {
            changefreq: 'monthly',
            priority: 0.7
          }
        }
      }
    },
    {
      use: 'gridsome-plugin-feed',
      options: {
        // Required: array of `GraphQL` type names you wish to include
        contentTypes: ['Post', 'Tag'],
        // Optional: any properties you wish to set for `Feed()` constructor
        // See https://www.npmjs.com/package/feed#example for available properties
        feedOptions: {
          title: 'Chuma Umenze',
          description: 'Chuma Umenze is a software engineer, writer, photographer' +
            ' and iridescent persona. Proudly made in Nigeria.'
        },
        // === All options after this point show their default values ===
        // Optional; opt into which feeds you wish to generate, and set their output path
        rss: {
          enabled: true,
          output: '/feed.xml'
        },
        atom: {
          enabled: true,
          output: '/feed.atom'
        },
        json: {
          enabled: true,
          output: '/feed.json'
        },
        // Optional: the maximum number of items to include in your feed
        // maxItems: 25,

        // Optional: an array of properties passed to `Feed.addItem()` that will be parsed for
        // URLs in HTML (ensures that URLs are full `http` URLs rather than site-relative).
        // To disable this functionality, set to `null`.
        // htmlFields: ['description', 'content'],

        // Optional: if you wish to enforce trailing slashes for site URLs
        enforceTrailingSlashes: false,

        // Optional: a method that accepts a node and returns true (include) or false (exclude)
        // Example: only past-dated nodes: `filterNodes: (node) => node.date <= new Date()`
        // filterNodes: (node) => true,

        // Optional: a method that accepts a node and returns an object for `Feed.addItem()`
        // See https://www.npmjs.com/package/feed#example for available properties
        // NOTE: `date` field MUST be a Javascript `Date` object
        nodeToFeedItem: (node) => ({
          title: node.title,
          date: node.date || new Date(),
          content: node.content
        })
      }
    },
    {
      use: 'gridsome-plugin-pwa',
      options: {
        title: 'Chuma Umenze',
        startUrl: '/',
        display: 'standalone',
        statusBarStyle: 'default',
        manifestPath: 'manifest.json',
        disableServiceWorker: process.env.NODE_ENV !== 'production',
        serviceWorkerPath: 'service-worker.js',
        cachedFileTypes: 'js,json,css,html,png,jpg,jpeg,svg',
        shortName: 'Chuma',
        themeColor: '#636363',
        backgroundColor: '#fafafa',
        icon: './src/assets/images/favicon.png',
        msTileImage: './src/assets/images/favicon.png',
        msTileColor: '#636363'
      }
    }
  ],

  transformers: {
    //Add markdown support to all file-system sources
    remark: {
      externalLinksTarget: '_blank',
      externalLinksRel: ['nofollow', 'noopener', 'noreferrer'],
      anchorClassName: 'icon icon-link',
      plugins: [
        ['gridsome-plugin-remark-prismjs-all', {
          noInlineHighlight: false,
          prompt: {
            user: `user`,
            host: `localhost`,
            global: false,
          }
        }]
      ]
    }
  }
}
