const { warmStrategyCache } = require('workbox-recipes');
const { CacheFirst, StaleWhileRevalidate } = require('workbox-strategies');
const { registerRoute} = require('workbox-routing');
const { CacheableResponsePlugin } = require('workbox-cacheable-response');  
const { ExpirationPlugin} = require ('workbox-expiration');
const { precacheAndRoute} = require('workbox-precaching/precacheAndRoute');

precacheAndRoute(self._WB_MANIFEST);

// need to do a page cache
const pageCache= new CacheFirst({
  cacheName: 'page-cache',
  plugins:[
    new ExpirationPlugin({
      maxAgeSeconds: 30 * 24 * 60 *60,
    }),
  ],
});