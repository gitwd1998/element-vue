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
    getUser(status) {
      return status.user
    },
    getPass(status) {
      return status.pass
    },
    getPhone(status) {
      return status.phone
    },
    getToken(status) {
      return status.token
    },
    getTimestamp(status) {
      return status.timestamp
    },
    getLang(status) {
      return status.lang
    },
  },
  mutations: {
    setUser(status, user) {
      status.user = user
    },
    setPass(status, pass) {
      status.pass = pass
    },
    setPhone(status, phone) {
      status.phone = phone
    },
    setToken(status, token) {
      status.token = token
    },
    setTimestamp(status, timestamp) {
      status.timestamp = timestamp
    },
    setLang(status, lang) {
      status.timestamp = lang
    },
  },
  actions: {
  },
  modules: {
  }
})
