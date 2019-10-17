import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

export const resources = {
  en: {
    name: "English",
    translationFileLoader: () => require('./en.json'),
  },
  vi: {
    name: "Japanese",
    translationFileLoader: () => require('./ja.json'),
  }
}

const i18nLoaderModule = {
  type: 'backend', // backend plugin are used to load data for i18n
  init: () => {},
  read: (language, namespace, callback) => {
    let resource = null;
    let error = null;
    try {
      resource = resources[language].translationFileLoader()[namespace];
    } catch (_error) { error = _error; }
    callback(error, resource);
  }
}

const i18nextOptions = {
  lng: 'en',
  fallbackLng: 'en',
  ns: ['common'],
  defaultNS: 'common',
  interpolation: {
    escapeValue: false,
  },
  react: {
    wait: true,
  },
}

i18n
  .use(initReactI18next)
  .use(i18nLoaderModule)
  .init(i18nextOptions)

export default i18n
