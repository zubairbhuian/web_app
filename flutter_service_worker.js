'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "ec8762339331ec2468afd076a2a410b2",
"assets/AssetManifest.bin.json": "ee32d08e2ddd26709c9895ddf2d8c816",
"assets/AssetManifest.json": "c3dbd0a3b5246372e62531b23fb6666f",
"assets/assets/animations/apiError.json": "81ecaa6825182be8e02c888738a0e41e",
"assets/assets/animations/error.json": "639759d7c45373ca0c3c28c614fa9eb0",
"assets/assets/animations/image_loader.json": "a2f19c2ab97253fc43c85a3254f26f31",
"assets/assets/animations/loader.json": "0c2b668aa479882eadf547fcab69c818",
"assets/assets/animations/login.json": "a7e7ec8e7f34829062fbf8aa3db34372",
"assets/assets/animations/map.json": "062adb68cad60893efe93dc281564f94",
"assets/assets/animations/success.json": "1f0d15e6fd9e07ca09fb051d22c6ae8d",
"assets/assets/audio/tap_sound.wav": "668417c5a28e5762ab07c7941960c5c9",
"assets/assets/audio/tap_sound_1.mp3": "298655278a5d001f5464c855370975eb",
"assets/assets/audio/tap_sound_2.mp3": "fb68ca8725b41ef68d23735aaa54f0c2",
"assets/assets/fonts/RobotoMono-Bold.ttf": "90190d91283189e340b2a44fe560f2cd",
"assets/assets/fonts/RobotoMono-BoldItalic.ttf": "ff657358db1650242d3896f4e6a17cb1",
"assets/assets/fonts/RobotoMono-ExtraLight.ttf": "642c61c3093f360ebfe8c96dce691e21",
"assets/assets/fonts/RobotoMono-ExtraLightItalic.ttf": "6fe6edf7704d61127966047e0ee05e7e",
"assets/assets/fonts/RobotoMono-Italic.ttf": "0c4f4d670401518c500b1132d217fcab",
"assets/assets/fonts/RobotoMono-Light.ttf": "c9166464b1db95fc3cdf9b50fc7f98e2",
"assets/assets/fonts/RobotoMono-LightItalic.ttf": "029bc3c3cc4278d2e0830f4240c9903d",
"assets/assets/fonts/RobotoMono-Medium.ttf": "0eaa3f458fb2611ca44b021db3db09a8",
"assets/assets/fonts/RobotoMono-MediumItalic.ttf": "6bea71cb28b47720d7d1298dc6e30842",
"assets/assets/fonts/RobotoMono-Regular.ttf": "5b04fdfec4c8c36e8ca574e40b7148bb",
"assets/assets/fonts/RobotoMono-SemiBold.ttf": "eabbacb68fea19c24a80eaed6715ca4a",
"assets/assets/fonts/RobotoMono-SemiBoldItalic.ttf": "d6cd56b24c1859f3e01ec50684338882",
"assets/assets/fonts/RobotoMono-Thin.ttf": "564755b4222c6321216f1e764c9204f9",
"assets/assets/fonts/RobotoMono-ThinItalic.ttf": "a114a11bf7df312c7c0ca28a8ed848a6",
"assets/assets/icons/auth/apple.svg": "4d819a524792da28b5d5239008b17578",
"assets/assets/icons/auth/google.svg": "6ce39634c9c756b4a3770de8491e6cec",
"assets/assets/icons/auth/Hide.svg": "31229ac5b5b0e88f4e3e17852ed805ea",
"assets/assets/icons/auth/key.svg": "2ae752743aa1d6c39a2e7c63856880f3",
"assets/assets/icons/auth/Lock.svg": "8df3cd4ab784fbd14559974ae8f11a85",
"assets/assets/icons/auth/Message.svg": "552261741bfa06083c37dbebadc7a97a",
"assets/assets/icons/auth/person.svg": "d33a778439db1ed4d345f9527b4b110d",
"assets/assets/icons/auth/Show.svg": "5cb07fb506c55b1472186cc5db0c9733",
"assets/assets/icons/theme.svg": "26ab1a2818734b89afe657acf60911fc",
"assets/assets/icons/yogo.svg": "906238d5a4b59f8a9cc22edd2396206b",
"assets/assets/icons/yogo_pos.jpg": "527480dc1059454b0a7b31e66becda07",
"assets/assets/images/splash/app_icon.png": "e1c951263f1c0af1106e257e6e864418",
"assets/assets/images/splash/yogo_logo.svg": "a8e007ed2815db740668858f44882ad8",
"assets/assets/sfpro/SFPRODISPLAYBOLD.OTF": "644563f48ab5fe8e9082b64b2729b068",
"assets/assets/sfpro/SFPRODISPLAYMEDIUM.OTF": "51fd7406327f2b1dbc8e708e6a9da9a5",
"assets/assets/sfpro/SFPRODISPLAYREGULAR.OTF": "aaeac71d99a345145a126a8c9dd2615f",
"assets/FontManifest.json": "80a42b69af9f03ff71c69c4716778ac9",
"assets/fonts/MaterialIcons-Regular.otf": "bb1f801b1e29aec0c141cac0eb7e9ee8",
"assets/NOTICES": "28fcce9ae1908d647cb265b6f6fac8ce",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/esc_pos_utils_plus/resources/capabilities.json": "cfcc98d389d1ee4358f773efe8a9cdac",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "17ee8e30dde24e349e70ffcdc0073fb0",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "eac24cca6a1c67b84fb26b9950b99bdd",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "1eaa69b2adceac50ac15579d0800ea34",
"assets/packages/iconly/fonts/IconlyBold.ttf": "128714c5bf5b14842f735ecf709ca0d1",
"assets/packages/iconly/fonts/IconlyBroken.ttf": "6fbd555150d4f77e91c345e125c4ecb6",
"assets/packages/iconly/fonts/IconlyLight.ttf": "5f376412227e6f8450fe79aec1c2a800",
"assets/packages/syncfusion_flutter_pdfviewer/assets/fonts/RobotoMono-Regular.ttf": "5b04fdfec4c8c36e8ca574e40b7148bb",
"assets/packages/syncfusion_flutter_pdfviewer/assets/highlight.png": "7384946432b51b56b0990dca1a735169",
"assets/packages/syncfusion_flutter_pdfviewer/assets/squiggly.png": "c9602bfd4aa99590ca66ce212099885f",
"assets/packages/syncfusion_flutter_pdfviewer/assets/strikethrough.png": "cb39da11cd936bd01d1c5a911e429799",
"assets/packages/syncfusion_flutter_pdfviewer/assets/underline.png": "c94a4441e753e4744e2857f0c4359bf0",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "26eef3024dbc64886b7f48e1b6fb05cf",
"canvaskit/canvaskit.js.symbols": "efc2cd87d1ff6c586b7d4c7083063a40",
"canvaskit/canvaskit.wasm": "e7602c687313cfac5f495c5eac2fb324",
"canvaskit/chromium/canvaskit.js": "b7ba6d908089f706772b2007c37e6da4",
"canvaskit/chromium/canvaskit.js.symbols": "e115ddcfad5f5b98a90e389433606502",
"canvaskit/chromium/canvaskit.wasm": "ea5ab288728f7200f398f60089048b48",
"canvaskit/skwasm.js": "ac0f73826b925320a1e9b0d3fd7da61c",
"canvaskit/skwasm.js.symbols": "96263e00e3c9bd9cd878ead867c04f3c",
"canvaskit/skwasm.wasm": "828c26a0b1cc8eb1adacbdd0c5e8bcfa",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "4b2350e14c6650ba82871f60906437ea",
"flutter_bootstrap.js": "e07e72028778e3da745733a4de5435bb",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "91bc54d85998529da4993242552886c4",
"/": "91bc54d85998529da4993242552886c4",
"main.dart.js": "0bdcb9f2bba918267288210845c44d91",
"manifest.json": "dc0fb5f71f76d4cc2be92adbdb8c15c7",
"version.json": "0c888783def902667cae90eae9e7eea6"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
