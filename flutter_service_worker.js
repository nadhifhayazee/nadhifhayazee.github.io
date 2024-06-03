'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "cf9e8257169a581a5702b24a74f4bc08",
".git/config": "cd095370190a100d59f9067728d1b87a",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "3d371669f5d72204ec8ca1162c5de65b",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "edecbee573957fcf1b423100eb26da4e",
".git/logs/refs/heads/main": "5f2c6a390f6ca42bdd8578ec1204ff30",
".git/logs/refs/remotes/origin/main": "0bcfc85dd996617e64553ade167772af",
".git/objects/01/121ace2d9978befab7f69ff0234241d6b74112": "26f7bc3b70273c58b14bc28745a98722",
".git/objects/04/fe3e00c6c4395ec7a06da05229ce0215691f81": "a1f4d29df8d866d3cbd7d79b97fe3b09",
".git/objects/05/8f86bc3774aa4d2f93c8d813468d40543fcc35": "313d8268f52543d2cafe8235f25a397b",
".git/objects/07/74c17c0fa7a7e87e24a6935830998d92b52c75": "cd62ee54b7ceea7b2a7804e69b1d9134",
".git/objects/08/477ef80001407a3e0a25f859d5a48a9e418d8d": "41d98d520da144299a9f9b05dad2fc8c",
".git/objects/08/df9405ce54e92c569b3339a87ee5643f5205f3": "f25933d5c3e63b72c10adbb3ca88e561",
".git/objects/0a/64390dbca3fe9ccc541b2ffdec2bce3541bc00": "b22dd5b1d1ac371e014dbb19036feb60",
".git/objects/0b/1b6cde501d8c57616bc68d407b773b377380ee": "fca3b050e27516d6d8edec7f18827a25",
".git/objects/0e/79c1e13541f8b5b391ae468ac2967f66c94c7d": "661091b18793abecbd1dbdae3c19cf89",
".git/objects/12/fbda4c36642ca997c5aeff52aa82471ceb5b3d": "c48cdd89c2c21e5c94f192b660a611c9",
".git/objects/13/1f3acaa252a863c3b694d0f522ea750aebd81c": "eed35917566bae72d1c532b2464680d3",
".git/objects/15/aac1114c73dadcdd134b3c3f4e3f2bf5cc5e85": "ffed293d0c37a0b4406448bb28cc1114",
".git/objects/16/55863862f0447337c70b8104839b814e5ca7f0": "401b1a086c23a3a0eaa9a6aa8f4bead4",
".git/objects/16/5ce0ddf03a820a38f48cba9aa0c9df9b6e6b79": "71df17c95c3124eada62b59e7dabda78",
".git/objects/1e/1cd604c5aaa057f51445476e6a8840118e9f66": "f3e9e66aac443026740b1bbfc312ef8d",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/20/e1b9e6d87f31d7718981f55d6edfcf54015f20": "c17658d71acd1752712df58264be00ee",
".git/objects/22/00f73285b47a2dd8e237f2c1d8ea59480707cf": "c8efe2bb99316855b404c688980ffc9a",
".git/objects/23/637bc3573701e2ad80a6f8be31b82926b4715f": "5f84f5c437bb2791fdc8411523eae8ff",
".git/objects/29/6a57074392d31cd6c6cc219fc1215c4e624f39": "aa086f3759a0bb592e62cde4e226b54e",
".git/objects/2a/cbfb09430275985449296aec5b2e08dc06958c": "f79019e0a0a8c4004e7351679f8b5433",
".git/objects/2e/65e25a0a6ad77b5a1a1f6bd8d329afc2a876c1": "0d7a1fd5fcd0c26c686a86f76219c6bd",
".git/objects/31/aa8bb960c52d35bb52fe3dc3ae05039dcf1c06": "744cddf4418349ebec426a6f5186fcba",
".git/objects/40/16ce9825ba3a7f4fdc6e6f69e9de1b292557b0": "4df0a4552752ffc292985f38fbabec9b",
".git/objects/48/77c679bed56ff4a603814c906e25ff8add6fe5": "108d79c44eb1a7763bce6ceaacfdf819",
".git/objects/4a/39079e580dc9be820cba2fae41238c49eaa798": "ada1a19fea32fbb6719120809b9eae60",
".git/objects/50/8eb524e527982657a6b68dac5e05b1e6605013": "beccec8fd1ad577e15308d4aa4a18fd2",
".git/objects/53/6b2280237adc0170b81705b03b28422b40167f": "e71f821b81c27c51ec38abdeba8877bb",
".git/objects/53/7807567919e88db2866b7825339c57e94c24d8": "970aec5149a3dbe9370a9dc982cdd022",
".git/objects/58/bcb63e456fede572a0ece0056003b6af13f949": "42302129e36499bf866f27611ed5ba87",
".git/objects/58/c3696652714f272f2824384685d7efb9530550": "59be8de604e5b21347ea7511c39ad7ae",
".git/objects/5a/7b05e1be311772247124911182fda78fde2cec": "d38bfbb93663df272dc4920186bd1040",
".git/objects/60/3908cbc61fdbecc38e38b35c19a67feac92589": "0f0e97bfb04e7c48d96de4a7721432cc",
".git/objects/60/4e1c00fc6d6d9c3636374e9c4c124eebffcc66": "e50b494f023569a36fa648b810fa1150",
".git/objects/61/e033dbb293427799a221dc91014d89066d5ebb": "30dc46b8ad31d0da27842ac625091d35",
".git/objects/68/eda2e3c3b5b5bb4bfc9d4daa835f319a026499": "09df6333d0426b20dfc19abbd7bbd7c9",
".git/objects/69/5f9df5432e7b019662993602d7de4bc4bd1638": "531d1f949839a505bcfc16cb565dc133",
".git/objects/6d/75775df83d9fc49cfc90cdfb147f7f4d79edda": "50079f5ea3fcdde5c0692e8271d05c39",
".git/objects/6f/2d5219a62c44619c0c1904a995123beeabe47b": "2a033094cd5d1e1520729b5ce3361322",
".git/objects/6f/9cad4c116bc8d72e2497226abb5c05ee64982c": "0d104480d68c1652a53721377a02a882",
".git/objects/70/4dc8a31673621fc93941059b3874e23c99f081": "cf7cf3d52c3fe0935d49dd0b5ec5324e",
".git/objects/71/7117947090611c3967f8681ab1ac0f79bca7fc": "ad4e74c0da46020e04043b5cf7f91098",
".git/objects/71/7809363ed19bdd7e1d78f6e421e40a96bc29e3": "9414a3044cb191cc3f57340f57c3dc93",
".git/objects/73/e08214dbb3bf05a6755115f93c5cc58388b52c": "04ba2421b91e9651797df1fb88196515",
".git/objects/74/1566524f9b23a1a89d407a80d656709baa4f6c": "7abd60de9551f4e9dd8221b1bb080189",
".git/objects/7a/64bd3ebd05c65b4674f487bc6eb1d5c551eecc": "58e5ff8c0a62ae48f7f1d945123a5be8",
".git/objects/7c/09d499f23e8c9cfadbd067e09e62b423cd8b4a": "4f5d6ea007527788d254cd3ceeb9b8a8",
".git/objects/81/ee126c90c9788782b4e4a36833ce20d98ebf85": "84830bd7e0c50aa9e5fdd87ae9b25b68",
".git/objects/85/64f82f0594b1a25dc4e1cbca8d6f7d4801143a": "2c14cede03d5446f42e4dabe7a585edc",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8a/d1988b5e5a8877e53d3ef03110a7071f8aea4d": "ccc205b33cbd5a8643523adc7a98d18a",
".git/objects/8d/1d257a3d13eadbcd04a473021b45f083bc70f8": "aae3548fa0ca44d9543ac94277c876e4",
".git/objects/8d/2cd7c7baf68aafb7648b63677ac5321ff4e1e6": "1d65193448eabee8297c6149a318ec8f",
".git/objects/8d/60c35f7bf872f1432e2d377b1a3a26c8ca3ba0": "b2067425afebd2c28f413338050cb77b",
".git/objects/90/68d3a61c75e1bfe8230ebdde5e588cd6fc7dbe": "7d0fd2a48572a4ffbf9da66561685238",
".git/objects/91/84631acfb85064706f3a63b25ceab3abc963a1": "00e6e868878458e2292d96e4543bc916",
".git/objects/94/bfb1463ad8331bfd687bc751b8920b133da744": "fd2d8c0d844b234856b36b93f652048f",
".git/objects/95/f91cfaa659ec706cd47f33170c1deef86a78e2": "bb0d11d08d7acf20a5655065dc4ee7b4",
".git/objects/9a/71cbe6e46f25e1ade3c658e381c9e034cfe9ca": "94d61740f35161d4c52563ff07c17ab9",
".git/objects/9f/9583732531c5885b7b2c142f8f81423572be6a": "a0481be257cdd2ec1a4d7d4cd595a3dc",
".git/objects/a0/943ea402f88bc032a2ebb6e3bf993ac7fa1dc2": "f2f262f26913fc74985d5e998a07c067",
".git/objects/a2/baec4af9bb202dda63ed0695ceaf2f2dcb3dcc": "8c4803bc5702bfa0d070edaf92c95f76",
".git/objects/a7/a0e92e8a1bce907d6460ae7450df9a6ddaa791": "6df88290cc0cf8b0a8bc553de498dd2c",
".git/objects/ac/ae6da43b6deed02e4766714682781c4a6b501c": "adc100c835afa7031f1b859ce8eadde1",
".git/objects/af/742adee0a85dd21ea96cbd84182e30e085d6cf": "aa25b932ec40efacb1efe27e7cf25d82",
".git/objects/b2/35bda1df1e1a4614cd4f15a2023dd29431eadf": "57671543d5b7d429eb01a61f2840f1df",
".git/objects/b2/d81d03f7bc82449701f3683f4bb62935014a30": "95ac402adc1ef31789b947232d7dd842",
".git/objects/b5/0254288cc6319d153c4af1d64870d95ee2436f": "468a6506934a07c970a4739eae75eedd",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/e3277e7f4311acadc9173c8c72c8004a9074bd": "2f5d7b8dcd8b621801e887338125d0bd",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/5ecfa49cd0ddffed8dd99c70d1f780a554de2b": "551a4bd8a3c6abd89df7e67b7e6b38b9",
".git/objects/bf/8f55b49dcec19cd040bcaad9274de123e5b16c": "4d4f4ad81870c2a23d04370a621a6eff",
".git/objects/c0/15d1b39a3263d8102766a9e5efe9c51a1a5a14": "cf57e8ef32d7da909a795cb6b3843984",
".git/objects/c4/30e3efcd19eaa8c55dcae53a6294ff9eed6a5f": "f4d8275cd295c0bd846a89995d72376c",
".git/objects/c4/8326800ce5b7b82f3c6a0713865b035f5b3f33": "e99d6e5430f625f3da6aaea648ae1e26",
".git/objects/c5/f4bc2a4da91586f3005813077f0d0aa9040f82": "3191028b787554cee4652f5050144bff",
".git/objects/c7/7d77ff105e9801553e71cf55fabe4c559d3153": "7ff600fab769f40d5576cd07e98515b0",
".git/objects/c7/a3db0620ceaa22008f5596d11c18f102f4875e": "e123097ba553957b35cbe68e88063359",
".git/objects/c8/d5c3dcebd7ba88bee1bdfd0fcb75a1a3f642b9": "f304885b401981a6ef89cc53266e8ccd",
".git/objects/ca/8482c88c44dcfdf9ead9d3726df9574ac9775c": "81cbf504c8b90bc81a07b514349a4ac5",
".git/objects/ca/a2bd07ea59db25e501ade6822d79224c68b245": "c23c1b439c756f15e157da56e2445d93",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d6/7904bd5a1312e1764fdc43917d270258ce38f5": "f7900757d80aa27b187bfa98b0d08a75",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/2c11112c7cb4e2ce754bc41470f9b829a2d00a": "d7280a766a5d6033f187d874a92b5ad6",
".git/objects/d7/9e31291053f7d8f6c293be336d6bd21d41b895": "14569e2d75113cb1950321d9974dbac4",
".git/objects/da/04c0327eafae8d8d9457983253b943e46bc707": "e46ceb32852a3b0de46637dae923d0ae",
".git/objects/da/aa9afae34839c0c8f3aa50947a0f533d667f38": "660bca6ae21b92cbd6f59d5f065732a1",
".git/objects/dd/710b462f731d3fa4c5aa1e06e61f9492accd36": "da549cebcf5539af65225e5a5f1f1e39",
".git/objects/e6/b745f90f2a4d1ee873fc396496c110db8ff0f3": "2933b2b2ca80c66b96cf80cd73d4cd16",
".git/objects/e8/2c5850db3a3482d0c954a4dc122c02de555ce7": "d357cd906b3805bf81477f5527cca086",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f4/a266dd37d5066da46c9a6b8898073ae2930a64": "90c22367f91de9fd622ad04f0a5fd7c8",
".git/objects/fb/c88b2845c908cbe8a892f8db5e9acdbfe770ac": "093fc284c298e7b017990a5c2003452c",
".git/objects/fd/d50cea905c3116f12c5be177dceb8a8412648e": "3bc68bd7e97d523e4f25b595fe4c5ed8",
".git/objects/ff/f5a3cd338d1907f3d33d73a60d81cee7966d68": "cfc0de34e72c6213eb22a963e9e4659b",
".git/refs/heads/main": "f58079afe1790b104e213eb1140132fb",
".git/refs/remotes/origin/main": "f58079afe1790b104e213eb1140132fb",
"assets/AssetManifest.bin": "5dbe2100f9e8703bde6f293279c2641d",
"assets/AssetManifest.bin.json": "ea509fab276f117155d93a922c2473c8",
"assets/AssetManifest.json": "f5dcfd5c51375ac6f654fbc5747ad01b",
"assets/FontManifest.json": "da7e19d82f41be76ee5110f4a8f875eb",
"assets/fonts/MaterialIcons-Regular.otf": "0db35ae7a415370b89e807027510caf0",
"assets/fonts/Montserrat-Regular.ttf": "5e077c15f6e1d334dd4e9be62b28ac75",
"assets/images/app_logo.png": "20dde5fbca92a201d3e1af712a976bec",
"assets/images/google_play_badge.png": "1e91d02cf5a902f38f2923c006d79281",
"assets/NOTICES": "2dacdd5c87dad649e65bca15b8b25a33",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "b397154b238f9fbff7f9b55410399f4f",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "e8364ba8fb630d4e29175d9a8ba9f9b8",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "2fef2ee56470be8be4798f62f2df5b99",
"assets/secretenv": "24dbba83d5e91b4f4d4a943a5c08ebe2",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "c86fbd9e7b17accae76e5ad116583dc4",
"canvaskit/canvaskit.js.symbols": "38cba9233b92472a36ff011dc21c2c9f",
"canvaskit/canvaskit.wasm": "3d2a2d663e8c5111ac61a46367f751ac",
"canvaskit/chromium/canvaskit.js": "43787ac5098c648979c27c13c6f804c3",
"canvaskit/chromium/canvaskit.js.symbols": "4525682ef039faeb11f24f37436dca06",
"canvaskit/chromium/canvaskit.wasm": "f5934e694f12929ed56a671617acd254",
"canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"canvaskit/skwasm.js.symbols": "741d50ffba71f89345996b0aa8426af8",
"canvaskit/skwasm.wasm": "e42815763c5d05bba43f9d0337fa7d84",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "93de8eeda04b7d4181edb0694952454a",
"/": "93de8eeda04b7d4181edb0694952454a",
"main.dart.js": "e963de685879346ad8b314b74063db08",
"manifest.json": "ab5e37b317b6e4b582798ed93f4d9421",
"version.json": "a3322b2f035e5345663b567001345585"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
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
