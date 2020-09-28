workbox.core.skipWaiting();

workbox.core.clientsClaim();

workbox.precaching.precacheAndRoute([
  {url: '/index.html', revision: null },
  {url: '/shell/shell.css', revision: null },
  {url: '/shell/shell.js', revision: null }
]);