// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  app: {
    head: {
      title: 'VoteApp',
      titleTemplate: '%s | VoteApp',
      htmlAttrs: {
        lang: 'ru',
      },
    },
    pageTransition: { name: 'page', mode: 'default' },
  },
  runtimeConfig: {
    token: '',
    public: {
      apiurl: 'http://localhost:8080',
      imageurl: '',
    },
  },
  modules: [
    '@nuxt/eslint',
    '@nuxt/fonts',
    '@nuxt/image',
    '@nuxt/scripts',
    '@pinia/nuxt',
    '@pinia/nuxt',
    'pinia-plugin-persistedstate/nuxt',
  ],
})
