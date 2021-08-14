import Vue from "vue";
import Vuex from "vuex";
import app from "./modules/app";
import items from "./modules/items";
import categories from "./modules/categories";
import createPersistedState from "vuex-persistedstate";
Vue.use(Vuex);

export default window.store = new Vuex.Store({
  modules: {
    app,
    items,
    categories,
  },
  plugins: [
    createPersistedState(),
    // store => {
    //   store.subscribe(() => {
    //     store.commit('updateLocalStorageSize');
    //   });
    // }
  ],
});
