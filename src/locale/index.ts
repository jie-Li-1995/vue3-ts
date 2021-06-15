import { createI18n } from 'vue-i18n'

import en from './en'
import cn from './cn'

const i18n = createI18n({
  locale: 'cn',
  fallbackLocale: 'cn',
  messages: {
    en,
    cn
  }
})

export default i18n
