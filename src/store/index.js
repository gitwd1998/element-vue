import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token: localStorage.getItem("token"),
    lang: localStorage.getItem("lang") || 'zh',
    username: '',
    phonenumber: '',
    avatar: ''
  },
  getters: {
    getUserName(state) {
      return state.username
    },
    getPhoneNumber(state) {
      return state.phonenumber
    },
    getToken(state) {
      return state.token
    },
    getLang(state) {
      return state.lang
    },
    getAvatar(state) {
      return state.avatar
    }
  },
  mutations: {
    setUserName(state, username) {
      state.username = username
    },
    setPhoneNumber(state, phonenumber) {
      state.phonenumber = phonenumber
    },
    setToken(state, token) {
      state.token = token
    },
    setLang(state, lang) {
      state.timestamp = lang
    },
    setAvatar(state, avatar) {
      state.avatar = avatar
    },
    logout(state) {
      state.token = ""
      state.username = ""
      state.phonenumber = ""
      state.avatar = ""
    }
  },
  actions: {
  },
  modules: {
  }
})
