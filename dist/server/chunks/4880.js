"use strict";
exports.id = 4880;
exports.ids = [4880];
exports.modules = {

/***/ 34880:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* unused harmony export dbConnect */
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(70193);
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
        const promise = mongoose.connect(conString, {
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


/***/ })

};
;