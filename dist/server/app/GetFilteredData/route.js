"use strict";
(() => {
var exports = {};
exports.id = 3273;
exports.ids = [3273];
exports.modules = {

/***/ 11185:
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ 43160:
/***/ ((module) => {

module.exports = require("next/dist/lib/import-next-warning");

/***/ }),

/***/ 22037:
/***/ ((module) => {

module.exports = require("os");

/***/ }),

/***/ 6610:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  headerHooks: () => (/* binding */ headerHooks),
  originalPathname: () => (/* binding */ originalPathname),
  requestAsyncStorage: () => (/* binding */ requestAsyncStorage),
  routeModule: () => (/* binding */ routeModule),
  serverHooks: () => (/* binding */ serverHooks),
  staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage),
  staticGenerationBailout: () => (/* binding */ staticGenerationBailout)
});

// NAMESPACE OBJECT: ./app/GetFilteredData/route.js
var route_namespaceObject = {};
__webpack_require__.r(route_namespaceObject);
__webpack_require__.d(route_namespaceObject, {
  POST: () => (POST)
});

// EXTERNAL MODULE: ./node_modules/next/dist/server/node-polyfill-headers.js
var node_polyfill_headers = __webpack_require__(42394);
// EXTERNAL MODULE: ./node_modules/next/dist/server/future/route-modules/app-route/module.js
var app_route_module = __webpack_require__(69692);
var module_default = /*#__PURE__*/__webpack_require__.n(app_route_module);
// EXTERNAL MODULE: external "next/dist/lib/import-next-warning"
var import_next_warning_ = __webpack_require__(43160);
// EXTERNAL MODULE: ./src/propertySchema.js
var propertySchema = __webpack_require__(25993);
var propertySchema_default = /*#__PURE__*/__webpack_require__.n(propertySchema);
// EXTERNAL MODULE: ./src/dbConnect.js
var dbConnect = __webpack_require__(2615);
;// CONCATENATED MODULE: ./app/GetFilteredData/route.js



async function POST(request) {
    const formData = await request.json();
    const filter = {
        category: formData.propType,
        cities: formData.community,
        propertyType: formData.categories,
        bedrooms: formData.bedrooms
    };
    try {
        await (0,dbConnect/* dbConnect */.C)(); // Connect to the database
        const data = await propertySchema_default().find({
            "name": "Duplex Heaven"
        });
        console.log(data);
        return "null";
    } catch (error) {
        return "null";
    }
}

;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?page=%2FGetFilteredData%2Froute&name=app%2FGetFilteredData%2Froute&pagePath=private-next-app-dir%2FGetFilteredData%2Froute.js&appDir=D%3A%5CalifNoon%5CaleefNoonUpdated%5Caleef-noon%5Capp&appPaths=%2FGetFilteredData%2Froute&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!

    

    

    

    const options = {"definition":{"kind":"APP_ROUTE","page":"/GetFilteredData/route","pathname":"/GetFilteredData","filename":"route","bundlePath":"app/GetFilteredData/route"},"resolvedPagePath":"D:\\alifNoon\\aleefNoonUpdated\\aleef-noon\\app\\GetFilteredData\\route.js","nextConfigOutput":""}
    const routeModule = new (module_default())({
      ...options,
      userland: route_namespaceObject,
    })

    // Pull out the exports that we need to expose from the module. This should
    // be eliminated when we've moved the other routes to the new format. These
    // are used to hook into the route.
    const {
      requestAsyncStorage,
      staticGenerationAsyncStorage,
      serverHooks,
      headerHooks,
      staticGenerationBailout
    } = routeModule

    const originalPathname = "/GetFilteredData/route"

    

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [2697,5501,4919], () => (__webpack_exec__(6610)));
module.exports = __webpack_exports__;

})();