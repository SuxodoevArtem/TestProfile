import Vue from 'vue'
import Vuex from 'vuex'
import auth from "../store/auth.js"
import profile from '../store/profile'
import finance from '../store/finance'
import tarif from '../store/tarif'


Vue.use(Vuex);

export default new Vuex.Store({
   modules: {
       auth,
       profile,
       finance,
       tarif
   }
})