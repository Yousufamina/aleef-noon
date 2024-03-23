"use strict";
(() => {
var exports = {};
exports.id = 4080;
exports.ids = [4080];
exports.modules = {

/***/ 11185:
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ 22037:
/***/ ((module) => {

module.exports = require("os");

/***/ }),

/***/ 66210:
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

// NAMESPACE OBJECT: ./app/Api/route.js
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
// EXTERNAL MODULE: ./node_modules/next/dist/server/web/exports/next-response.js
var next_response = __webpack_require__(89335);
// EXTERNAL MODULE: ./src/propertySchema.js
var propertySchema = __webpack_require__(25993);
var propertySchema_default = /*#__PURE__*/__webpack_require__.n(propertySchema);
// EXTERNAL MODULE: ./src/dbConnect.js
var dbConnect = __webpack_require__(2615);
;// CONCATENATED MODULE: ./app/Api/route.js



// export default async function POST(req,res) {
// const con = await dbConnect().then(async() => {
//     try {
//         const formData= req.body;
//         console.log("Hasantest", req);
//         const newFormData = new FormDataModel(formData);
//         await newFormData.save(); // Wait for data to be saved
//         console.log('Data saved successfully');
//         // Send a response indicating success
//     } catch (error) {
//         // Handle any errors
//         console.error('Error saving data:', error);
//         // Send an error response
//     }
// })
// }
async function POST(request) {
    const formData = await request.json();
    try {
        await (0,dbConnect/* dbConnect */.C)(); // Connect to the database
        const newFormData = new (propertySchema_default())(formData);
        await newFormData.save(); // Wait for data to be saved
        console.log("Data saved successfully");
        return "null";
    } catch (error) {
        console.error("Error saving data:", error);
        return "null";
    }
}

;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?page=%2FApi%2Froute&name=app%2FApi%2Froute&pagePath=private-next-app-dir%2FApi%2Froute.js&appDir=D%3A%5CalifNoon%5CaleefNoonUpdated%5Caleef-noon%5Capp&appPaths=%2FApi%2Froute&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!

    

    

    

    const options = {"definition":{"kind":"APP_ROUTE","page":"/Api/route","pathname":"/Api","filename":"route","bundlePath":"app/Api/route"},"resolvedPagePath":"D:\\alifNoon\\aleefNoonUpdated\\aleef-noon\\app\\Api\\route.js","nextConfigOutput":""}
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

    const originalPathname = "/Api/route"

    

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [2697,5501,9335,4919], () => (__webpack_exec__(66210)));
module.exports = __webpack_exports__;

})();