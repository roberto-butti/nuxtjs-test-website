const {
    join
} = require('path')

module.exports = {
  head: {
    titleTemplate: '%s - Nuxt.js',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Meta description' }
    ],
    link: [
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto' }
    ]
  },
   css: [
    	{ src: '~assets/css/main.css', lang: 'css' }
    	/* join(__dirname, 'css/main.css') */
    
    ]
}

