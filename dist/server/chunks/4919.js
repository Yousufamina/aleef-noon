"use strict";
exports.id = 4919;
exports.ids = [4919];
exports.modules = {

/***/ 2615:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   C: () => (/* binding */ dbConnect)
/* harmony export */ });
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(11185);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);

global.mongoose = {
    conn: null,
    promise: null
};
async function dbConnect() {
    if (global.mongoose && global.mongoose.conn) {
        console.log("Connected from previous");
        return global.mongoose.conn;
    } else {
        // const conString=process.env.MONGO_URL;
        const conString = "mongodb+srv://alifnoon:b4X5mKL8aHCSPamT@aleef-noon-db.tuk3t0l.mongodb.net/";
        const promise = mongoose__WEBPACK_IMPORTED_MODULE_0___default().connect(conString, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            autoIndex: true
        });
        global.mongoose = {
            conn: await promise,
            promise
        };
        console.log("New connection successfull");
        return await promise;
    }
}


/***/ }),

/***/ 25993:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// mongodb.js

const mongoose = __webpack_require__(11185);
// Define your schema
// const propertyListSchema = new mongoose.Schema({
//     "type": "object",
//     "properties": {
//       "name": {
//         "type": "string"
//       },
//       "propertyType": {
//         "type": "array",
//         "items": {
//           "type": "string"
//         }
//       },
//       "category": {
//         "type": "string"
//       },
//       "bedrooms": {
//         "type": "string"
//       },
//       "feature&Aminities": {
//         "type": "array",
//         "items": {
//           "type": "string"
//         }
//       },
//       "cities": {
//         "type": "string"
//       },
//       "location": {
//         "type": "string"
//       },
//       "fileUpload": {
//         "type": "string"
//       },
//     },
//   }
//   );
const propertyListSchema = new mongoose.Schema({
    name: String,
    propertyType: [
        String
    ],
    category: String,
    bedrooms: String,
    "feature&Aminities": [
        String
    ],
    cities: String,
    location: String,
    price: String,
    fileUpload: [
        {
            name: String,
            preview: String,
            thumbUrl: String
        }
    ]
});
// Create a model based on the schema
const FormDataModel = mongoose.models.propertyList ? mongoose.models.propertyList : mongoose.model("propertyList", propertyListSchema);
// Export the model
module.exports = FormDataModel;


/***/ })

};
;