"use strict";
exports.id = 4888;
exports.ids = [4888];
exports.modules = {

/***/ 91006:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(18038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const CardBottom = ()=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "cardBottom flex justify-center",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "innerDiv",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                    src: "/whatsappIcon.svg"
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "innerDiv",
                style: {
                    borderRight: "1px solid #ECA33A",
                    borderLeft: "1px solid #ECA33A"
                },
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                    src: "/phoneIcon.svg"
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "innerDiv",
                style: {
                    borderRight: "1px solid #ECA33A"
                },
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                    src: "/shareIcon.svg"
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "innerDiv",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                    src: "/emailIcon.svg"
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CardBottom);


/***/ }),

/***/ 54888:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: () => (/* binding */ productCard_ProductCard)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(56786);
// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(18038);
;// CONCATENATED MODULE: ./components/productCard/CardHeader.js


const CardHeader = ({ productTitle, location, propertyType })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "cardHeader",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "w-full",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "AddFavourite flex justify-end",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                            children: " Add to Favourite "
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("img", {
                            className: "w-auto h-[40px] mr-[-12px]",
                            alt: "auto",
                            src: "/heart-icon.svg"
                        })
                    ]
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h2", {
                className: "mt-[-28px] leading-[40px] raleway font-normal text-[36px] text-[#000000] w-[70%]",
                children: [
                    productTitle,
                    " "
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "iconDiv flex mt-2",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("img", {
                        src: "/locationIcon.svg",
                        className: "mr-2"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                        className: "text-[#000000]",
                        children: location
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "iconDiv flex mt-2",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("img", {
                        src: "/houseIcon.svg",
                        className: "mr-2"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                        className: "text-[#000000]",
                        children: propertyType
                    })
                ]
            })
        ]
    });
};

// EXTERNAL MODULE: ./node_modules/swiper/swiper.css
var swiper = __webpack_require__(63754);
// EXTERNAL MODULE: ./node_modules/swiper/modules/navigation.css
var navigation = __webpack_require__(12119);
;// CONCATENATED MODULE: ./components/productCard/CardSlider.js


// Import Swiper React components
// import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles


// import required modules
// import { Navigation } from 'swiper/modules';
function CardSlider() {
    return /*#__PURE__*/ _jsx("div", {
        className: "CardSlider",
        children: /*#__PURE__*/ _jsx("img", {
            src: "/welcome-bg-3.png"
        })
    });
}

;// CONCATENATED MODULE: ./components/productCard/CardDetail.js


const CardDetail = ({ bedrooms, bathrooms, price, img })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "CardSlider",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("img", {
                src: img,
                style: {
                    height: "420px"
                }
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "cardDetail",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "detailHeader",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                children: "A modern property provides a range of amenities ensuring a comfortable living."
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                children: [
                                    "The Penthouse is 5237.72 ft\xb2 or 487 m\xb2, number of bedrooms:",
                                    bedrooms
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "cardDetailInner",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "flex justify-around",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "iconBox",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                style: {
                                                    width: "55px"
                                                },
                                                alt: "none",
                                                src: "/bedroomIcon.svg"
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h1", {
                                                children: [
                                                    "Bedroom ",
                                                    bedrooms
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "iconBox",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                style: {
                                                    width: "55px"
                                                },
                                                alt: "none",
                                                src: "/bathIcon.svg"
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h1", {
                                                children: [
                                                    "Bath ",
                                                    bathrooms
                                                ]
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "flex justify-around",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "iconBox",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                style: {
                                                    width: "55px"
                                                },
                                                alt: "none",
                                                src: "/sqrft3.svg"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                                children: "1143sq.ft"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "iconBox",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                style: {
                                                    width: "55px"
                                                },
                                                alt: "none",
                                                src: "/dollarIcon.svg"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                                children: price
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const productCard_CardDetail = (CardDetail);

// EXTERNAL MODULE: ./components/productCard/CardBottom.js
var CardBottom = __webpack_require__(91006);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(11440);
;// CONCATENATED MODULE: ./components/productCard/ProductCard.js







const ProductCard = ({ data })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "productCard",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(CardHeader, {
                productTitle: data ? data.name : "loading",
                location: data ? data.location : "loading",
                propertyType: data ? data.propertyType[0] : "loading"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(productCard_CardDetail, {
                bedrooms: data ? data.bedrooms : "loading",
                bathrooms: data ? data.bedrooms : "Loading",
                price: data ? data.price : "loading",
                img: data ? data.fileUpload[0].preview : ""
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(CardBottom/* default */.Z, {}),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "linkBox",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                    href: "/product/123",
                    className: "flex mt-[10px] text-[20px] raleway font-bold text-black",
                    children: [
                        "Get Now ",
                        /*#__PURE__*/ jsx_runtime_.jsx("img", {
                            className: "ml-[9px]",
                            alt: "image",
                            src: "/rightArrow.svg"
                        })
                    ]
                })
            })
        ]
    });
};
/* harmony default export */ const productCard_ProductCard = (ProductCard);


/***/ })

};
;