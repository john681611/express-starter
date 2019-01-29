// #1
// self.addEventListener('install', function(e) {
//     console.log('[ServiceWorker] Installed');
// });

// #2
// importScripts('https://storage.googleapis.com/workbox-cdn/releases/3.6.1/workbox-sw.js');

// if (workbox) {
//   console.log(`Yay! Workbox is loaded 🎉`);
// } else {
//   console.log(`Boo! Workbox didn't load 😬`);
// }

// #3
// workbox.routing.registerRoute(
//     // Cache CSS files
//     /.*\.css/,
//     // Use cache but update in the background ASAP
//     workbox.strategies.staleWhileRevalidate({
//       // Use a custom cache name
//       cacheName: 'css-cache',
//     })
//   );
  
//   workbox.routing.registerRoute(
//     // Cache image files
//     /.*\.(?:png|jpg|jpeg|svg|gif)/,
//     // Use the cache if it's available
//     workbox.strategies.cacheFirst({
//       // Use a custom cache name
//       cacheName: 'image-cache',
//       plugins: [
//         new workbox.expiration.Plugin({
//           // Cache only 20 images
//           maxEntries: 20,
//           // Cache for a maximum of a week
//           maxAgeSeconds: 7 * 24 * 60 * 60,
//         })
//       ],
//     })
//   );

// #4
// workbox.precaching.precacheAndRoute([
//     '/stylesheets/style.css',
//     '/javascripts/pwa.js',
//     { url: '/', revision: '383676' },
// ]);

// #5
// self.addEventListener('push', function(event) {
//     if (event.data) {
//       console.log('This push event has data: ', event.data.text());

        // #6
        // return self.registration.showNotification('LISTEN TO ME', {
        //     body: event.data.text()
        // });
//     } else {
//       console.log('This push event has no data.');
//     }
//   });

// #7
// self.addEventListener('notificationclick', function(event) {
//     if (!event.action) {
//       // Was a normal notification click
//       console.log('Notification Click.');
//       return;
//     }
// });
  