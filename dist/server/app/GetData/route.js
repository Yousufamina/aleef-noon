"use strict";
(() => {
var exports = {};
exports.id = 4806;
exports.ids = [4806];
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

/***/ 87751:
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

// NAMESPACE OBJECT: ./app/GetData/route.js
var route_namespaceObject = {};
__webpack_require__.r(route_namespaceObject);
__webpack_require__.d(route_namespaceObject, {
  GET: () => (GET)
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
;// CONCATENATED MODULE: ./app/GetData/route.js



async function GET() {
    await (0,dbConnect/* dbConnect */.C)(); // Connect to the database
    const data = await propertySchema_default().find();
    return Response.json({
        data
    });
}

;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?page=%2FGetData%2Froute&name=app%2FGetData%2Froute&pagePath=private-next-app-dir%2FGetData%2Froute.js&appDir=D%3A%5CalifNoon%5CaleefNoonUpdated%5Caleef-noon%5Capp&appPaths=%2FGetData%2Froute&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!

    

    

    

    const options = {"definition":{"kind":"APP_ROUTE","page":"/GetData/route","pathname":"/GetData","filename":"route","bundlePath":"app/GetData/route"},"resolvedPagePath":"D:\\alifNoon\\aleefNoonUpdated\\aleef-noon\\app\\GetData\\route.js","nextConfigOutput":""}
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

    const originalPathname = "/GetData/route"

    

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [2697,5501,4919], () => (__webpack_exec__(87751)));
module.exports = __webpack_exports__;

})();