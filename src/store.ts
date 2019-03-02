import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    logo: "CHUMAUMENZE 🇳🇬",
    owner: {
      email: "hello@chumaumenze.com",
      fullName: "Chuma Umenze",
      username: "chumaumenze"
    },
    menuPages: [
      {title: "About", url: "/about"},
      {title: "Works", url: "/#"},
      {title: "Writings", url: "/#"},
      {title: "Interests", url: "/#"},
    ],
    links: [
      {name: "Github", url: "https://github.com/chumaumenze", iconName: "fa-github"},
      {name: "Gitlab", url: "https://gitlab.com/chumaumenze", iconName: "fa-gitlab"},
      {name: "Linkedin", url: "https://linkedin.com/in/chumaumenze", iconName: "fa-linkedin"},
      {name: "Twitter", url: "https://twitter.com/chumaumenze", iconName: "fa-twitter"},
      {name: "Medium", url: "https://medium.com/@chumaumenze", iconName: "fa-medium"},
    ],
  },
  mutations: {

  },
  actions: {

  },
});
