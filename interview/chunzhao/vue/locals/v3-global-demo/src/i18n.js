import { createI18n } from 'vue-i18n'
// 语言包
// 确定 ok  配置好的
import en from './locals/en'
import zh from './locals/zh'
import ja from './locals/ja'

const i18n = createI18n({
  legacy: false,
  locale: localStorage.getItem('lang')??'zh',
  messages: {
    en,
    zh,
    ja
  }
})
export default i18n;