// Import default layout so we don't need to import it to every page
import VueDisqus from "vue-disqus";
import InfiniteLoading from 'vue-infinite-loading'

import Config from "./config";


import Home from "~/pages/Home.vue";
import BlogLayout from "~/layouts/BlogLayout.vue";

// The Client API can be used here. Learn more: gridsome.org/docs/client-api
export default function (Vue, { router, head, isClient }) {
  Vue.config.productionTip = false;
  Vue.component('BlogLayout', BlogLayout)
  Vue.use(VueDisqus)
  Vue.use(InfiniteLoading)
  Vue.prototype.$config = Config
}
