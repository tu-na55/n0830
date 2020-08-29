// Service Workerで使用するキャッシュ戦略ってある程度決まってますよね？

// なので、メジャーなパターンをまとめたWorkboxを使用すれば簡単に構築できます。

// 拡張ごとにキャッシュ戦略を決めたり、事前読み込みするファイルなどを設定したりと様々な事ができます。

// // sw.js  サンプルコード
// import {precacheAndRoute} from 'workbox-precaching/precacheAndRoute';
// import {registerRoute} from 'workbox-routing';
// import {NetworkFirst, CacheFirst} from 'workbox-strategies';

// const processedManifest = (self.__WB_MANIFEST || []).filter(entry => {
//     return !entry.url.match(/\.(html|json|txt)(\?.+)?$/);
// });

// precacheAndRoute(processedManifest);

// registerRoute(
//     new RegExp('\\.(html|css|js|json|jpe?g|png|gif|webp|svg)$'),
//     new NetworkFirst()
// );

// registerRoute(
//     new RegExp('\\.(woff|woff2|eot|ttf)$'),
//     new CacheFirst()
// );
