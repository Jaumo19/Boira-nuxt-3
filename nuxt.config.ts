// https://v3.nuxtjs.org/api/configuration/nuxt.config

import { defineNuxtConfig } from 'nuxt'

export default defineNuxtConfig({
    modules: ['@nuxtjs/prismic'],
    prismic: { endpoint: 'https://boirastudiowebsite.prismic.io/api/v2' },
    vite: {
        optimizeDeps: {
          exclude: ["clipboard", "vue-clipboard3"],
        },
    }
})
