import { createI18n } from 'vue-i18n'
import zh from './lang/zh'
import zhTw from './lang/zh-tw'
import en from './lang/en'
import ja from './lang/ja'
import ko from './lang/ko'
import vi from './lang/vi'

const messages = {
  zh,
  'zh-tw': zhTw,
  en,
  ja,
  ko,
  vi
}

const i18n = createI18n({
  legacy: false,
  locale: 'zh',
  fallbackLocale: 'zh',
  messages
})

export default i18n
