// Import default layout so we don't need to import it to every page
import Blog from "~/pages/Blog.vue";
import BlogLayout from "~/layouts/BlogLayout.vue";

// The Client API can be used here. Learn more: gridsome.org/docs/client-api
export default function (Vue, { router, head, isClient }) {
  Vue.component('BlogLayout', BlogLayout)
  router.addRoutes([
    // {path: '/', component: Blog},
    {path: '/', redirect: '/blog'}
  ])
}
