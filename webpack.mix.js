let mix = require('laravel-mix')

mix.options({
  processCssUrls: false
})

mix.disableNotifications()
mix.setPublicPath('public/')

mix.js('src/assets/js/app.js', 'public/js')
mix.sass('src/assets/scss/app.scss', 'public/css')

/**
 * If you want use VSCode live server, your proxy must be: 127.0.0.1:<LIVE_SERVER_PORT> (Default: 5500)
 * Requirements: 
 * npm i browser-sync browser-sync-webpack-plugin --save-dev
 */
// mix.browserSync({
//   proxy: 'your_proxy'
// })

/**
 * For VueJS integration
 */
// mix.vue()