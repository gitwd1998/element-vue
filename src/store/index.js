import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: localStorage.getItem("user"),
    pass: localStorage.getItem("pass"),
    phone: localStorage.getItem("phone"),
    token: localStorage.getItem("token"),
    timestamp: localStorage.getItem("timestamp"),
    lang: localStorage.getItem("lang") || 'zh',
  },
  getters: {
    getUser(state) {
      return state.user
    },
    getPass(state) {
      return state.pass
    },
    getPhone(state) {
      return state.phone
    },
    getToken(state) {
      return state.token
    },
    getTimestamp(state) {
      return state.timestamp
    },
    getLang(state) {
      return state.lang
    },
  },
  mutations: {
    setUser(state, user) {
      state.user = user
    },
    setPass(state, pass) {
      state.pass = pass
    },
    setPhone(state, phone) {
      state.phone = phone
    },
    setToken(state, token) {
      state.token = token
    },
    setTimestamp(state, timestamp) {
      state.timestamp = timestamp
    },
    setLang(state, lang) {
      state.timestamp = lang
    },
  },
  actions: {
  },
  modules: {
  }
})
