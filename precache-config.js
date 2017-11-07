module.exports = {
    staticFileGlobs: [
        'index.html',
        'manifest.json',
        'icons/favicon-32x32.png',
        'icons/apple-icon.png',
        'icons/android-icon-192x192.png',
        'icons/favicon-16x16.png',
        'icons/safari-pinned-tab.svg',
        'icons/ms-icon-144x144.png',
        'bower_components/webcomponentsjs/webcomponents-loader.js',
        'browserconfig.xml',
        'icons/android-icon-36x36.png',
        'icons/android-icon-48x48.png',
        'icons/android-icon-72x72.png',
        'icons/android-icon-96x96.png',
        'icons/android-icon-144x144.png',
        'icons/android-icon-192x192.png',
        'icons/android-icon-256x256.png',
        'icons/android-icon-384x384.png',
        'icons/android-icon-512x512.png',
        'icons/apple-icon-57x57.png',
        'icons/apple-icon-60x60.png',
        'icons/apple-icon-72x72.png',
        'icons/apple-icon-76x76.png,',
        'icons/apple-icon-114x114.png',
        'icons/apple-icon-120x120.png',
        'icons/apple-icon-144x144.png',
        'icons/apple-icon-152x152.png',
        'icons/apple-icon-180x180.png'
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
        },
        {
            urlPattern: /^https:\/\/i\.imgur\.com\/.+/,
            handler: 'cacheFirst',
            options: {
                cache: {
                    name: 'image'
                }
            }
        }
    ]
};