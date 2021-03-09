import Vue from 'vue'
import VueI18n from 'vue-i18n'
import en from './lang/en'
import zh from './lang/zh'
import locale from 'element-ui/lib/locale'
Vue.use(VueI18n)
const i18n = new VueI18n({
    locale: sessionStorage.getItem("lang") || 'zh',
    messages: { en, zh, }
})
locale.i18n((key, value) => i18n.t(key, value))//为了实现element-ui的多语言切换

export default i18n