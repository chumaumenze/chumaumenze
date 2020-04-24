// Import default layout so we don't need to import it to every page
import VueDisqus from "vue-disqus";
import Config from "./config";


import Home from "~/pages/Home.vue";
import BlogLayout from "~/layouts/BlogLayout.vue";

// The Client API can be used here. Learn more: gridsome.org/docs/client-api
export default function (Vue, { router, head, isClient }) {
  Vue.component('BlogLayout', BlogLayout)
  Vue.use(VueDisqus)
  Vue.prototype.$config = Config
  
  router.addRoutes([
    {path: '/', component: Home},
    // {path: '/', redirect: '/blog'}
  ])
}
