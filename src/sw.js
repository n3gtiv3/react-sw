importScripts('workbox-sw.prod.v2.1.0.js');
const workboxSW = new WorkboxSW();
workboxSW.precache([]);

var indexHandler = workboxSW.strategies.networkFirst({
  cacheName: 'index-cache',
});

workboxSW.router.registerRoute('/dummy.html', args => {
  return indexHandler.handle(args).then(response => {
    console.log("here!!");
    console.log(response);
      if (!response) {
        return caches.match('offline.html');
      } else if (response.status === 404) {
        return caches.match('404.html');
      }
      return response;
    });
});
