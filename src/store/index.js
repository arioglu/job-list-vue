import Vue from "vue";
import Vuex from "vuex";
import jobStore from "./jobStore";

Vue.use(Vuex);

const Store = new Vuex.Store({
  modules: {
    jobStore,
  },
});

export default function() {
  return Store;
}
export { Store };
