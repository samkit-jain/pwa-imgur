module.exports = {
    staticFileGlobs: [
        'index.html',
        'manifest.json',
        'bower_components/webcomponentsjs/webcomponents-loader.js'
    ],
    navigateFallback: '/index.html',
    navigateFallbackWhitelist: [],
    skipWaiting: true,
    runtimeCaching: [
        {
            urlPattern: '/',
            handler: 'networkFirst',
            options: {
                cache: {
                    name: 'src'
                }
            }
        },
        {
            urlPattern: /src/,
            handler: 'networkFirst',
            options: {
                cache: {
                    name: 'src'
                }
            }
        },
        {
            urlPattern: /bower_components/,
            handler: 'networkFirst',
            options: {
                cache: {
                    name: 'bower'
                }
            }
        },
        {
            urlPattern: /^https:\/\/api\.imgur\.com\/3\/gallery\/r\/.*\/top\/day\/?/,
            handler: 'networkFirst',
            options: {
                cache: {
                    name: 'images'
                }
            }
        }
    ]
};