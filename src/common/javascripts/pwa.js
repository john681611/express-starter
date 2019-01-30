// #1

// if ('serviceWorker' in navigator) {
//     navigator.serviceWorker
//         .register('../service-worker.js')
//         .then(function() { console.log('Service Worker Registered'); });
//   }

// #7

// if ('PushManager' in window) {
//     Notification.requestPermission(function (permission) {
//         if (permission === "granted") {
//         var notification = new Notification("Hi there!");
//         }
//     })
// };