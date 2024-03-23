exports.id = 3044;
exports.ids = [3044];
exports.modules = {

/***/ 31279:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 50954, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 99451))

/***/ }),

/***/ 99451:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(18038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _adminComponents_dashboard_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(51802);
/* harmony import */ var _adminComponents_dashboard_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_adminComponents_dashboard_module_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(11440);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(57114);
/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(52196);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(42050);
/* __next_internal_client_entry_do_not_use__ default auto */ 






// import { useRouter } from "next/router";
const menuItems = [
    {
        title: "Pages",
        list: [
            {
                title: "Dashboard",
                path: "/dashboard"
            },
            {
                title: "Properties",
                path: "/properties"
            },
            {
                title: "Blogs",
                path: "/blogs"
            }
        ]
    },
    {
        title: "Analytics",
        list: [
            {
                title: "Dashboard",
                path: "/dashboard"
            },
            {
                title: "Properties",
                path: "/properties"
            },
            {
                title: "Blogs",
                path: "/blogs"
            }
        ]
    },
    {
        title: "Blogs",
        list: [
            {
                title: "Dashboard",
                path: "/dashboard"
            },
            {
                title: "Properties",
                path: "/properties"
            },
            {
                title: "Blogs",
                path: "/blogs"
            }
        ]
    }
];
function Sidebar() {
    const pathname = (0,next_navigation__WEBPACK_IMPORTED_MODULE_3__.usePathname)();
    // const router = useRouter()
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "SideBarMain",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: (_adminComponents_dashboard_module_css__WEBPACK_IMPORTED_MODULE_5___default().container),
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "sidebarHeader",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                        href: "/",
                        className: "flex-col",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                            className: "h-[90px] headerImg w-[157px] mr-[20px] z-[-1] margin-auto",
                            src: "/Alif Noon Logo Header Logo.gif",
                            alt: "none"
                        })
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "sidebarItems",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                    href: "/Dashboard/properties",
                                    className: pathname === "/Dashboard/properties" ? "active items-center raleway font-bold" : "raleway font-bold items-center",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__.FontAwesomeIcon, {
                                            icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__/* .faHouse */ .wp6,
                                            style: {
                                                color: "white",
                                                marginRight: "8px",
                                                width: "14px"
                                            }
                                        }),
                                        "Properties"
                                    ]
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                    href: "/Dashboard/AddProperty",
                                    className: pathname === "/Dashboard/AddProperty" ? "items-center active raleway font-bold" : "raleway font-bold items-center",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__.FontAwesomeIcon, {
                                            icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__/* .faHouse */ .wp6,
                                            style: {
                                                color: "white",
                                                marginRight: "8px",
                                                width: "14px"
                                            }
                                        }),
                                        "Add Property"
                                    ]
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                    href: "/Dashboard/Agents",
                                    className: pathname === "/Dashboard/Agents" ? "items-center active raleway font-bold" : " items-center raleway font-bold",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__.FontAwesomeIcon, {
                                            icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__/* .faHouse */ .wp6,
                                            style: {
                                                color: "white",
                                                marginRight: "8px",
                                                width: "14px"
                                            }
                                        }),
                                        "Agents"
                                    ]
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                    href: "/Dashboard/AddAgents",
                                    className: pathname === "/Dashboard/AddAgents" ? "items-center active raleway font-bold" : "items-center raleway font-bold",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__.FontAwesomeIcon, {
                                            icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__/* .faHouse */ .wp6,
                                            style: {
                                                color: "white",
                                                marginRight: "8px",
                                                width: "14px"
                                            }
                                        }),
                                        "Add Agents"
                                    ]
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                    className: "items-center raleway font-bold",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__.FontAwesomeIcon, {
                                            icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__/* .faHouse */ .wp6,
                                            style: {
                                                color: "white",
                                                marginRight: "8px",
                                                width: "14px"
                                            }
                                        }),
                                        "Test"
                                    ]
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                    className: "raleway font-bold items-center",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__.FontAwesomeIcon, {
                                            icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__/* .faHouse */ .wp6,
                                            style: {
                                                color: "white",
                                                marginRight: "8px",
                                                width: "14px"
                                            }
                                        }),
                                        "Test"
                                    ]
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                    className: "raleway font-bold items-center",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__.FontAwesomeIcon, {
                                            icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__/* .faHouse */ .wp6,
                                            style: {
                                                color: "white",
                                                marginRight: "8px",
                                                width: "14px"
                                            }
                                        }),
                                        "Test"
                                    ]
                                })
                            })
                        ]
                    })
                })
            ]
        })
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Sidebar);


/***/ }),

/***/ 44454:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "dashboard_container__XAbRN",
	"menu": "dashboard_menu__9xI2w",
	"content": "dashboard_content__XKgdt",
	"dashboard_container__XAbRN": "dashboard_dashboard_container__XAbRN__L5obS",
	"dashboard_content__XKgdt": "dashboard_dashboard_content__XKgdt__I2Rm6"
};


/***/ }),

/***/ 51802:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "dashboard_container__XAbRN",
	"menu": "dashboard_menu__9xI2w",
	"content": "dashboard_content__XKgdt",
	"dashboard_container__XAbRN": "dashboard_dashboard_container__XAbRN__L5obS",
	"dashboard_content__XKgdt": "dashboard_dashboard_content__XKgdt__I2Rm6"
};


/***/ }),

/***/ 26920:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Dashboard_layout)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(56786);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(25124);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./node_modules/next/dist/compiled/react/react.shared-subset.js
var react_shared_subset = __webpack_require__(62947);
// EXTERNAL MODULE: ./node_modules/@fortawesome/react-fontawesome/index.js
var react_fontawesome = __webpack_require__(95927);
// EXTERNAL MODULE: ./node_modules/@fortawesome/free-solid-svg-icons/index.mjs
var free_solid_svg_icons = __webpack_require__(45723);
;// CONCATENATED MODULE: ./components/adminComponents/Navbar/AdminNavbar.js





function AdminNavbar() {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "adminNavbar raleway font-bold flex justify-between",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "leftPanel",
                children: /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                    children: "Admin Navbar"
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "adminLogout rightPanel",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "profileDiv flex justify-between",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "name",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                    className: "font-[13]",
                                    children: "Salman"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                    className: "font-[11]",
                                    children: "Admin"
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "adminlogin",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                    id: "dropdownUserAvatarButton",
                                    // data-dropdown-toggle="dropdownAvatar"
                                    className: "pic",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                        className: "w-[100%] h-[100%] object-cover",
                                        src: "/OurOfficial.png",
                                        alt: "none"
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    style: {
                                        inset: "0px 30px auto auto",
                                        transform: "translate(0px, 76px)"
                                    },
                                    className: "dropdownAvatar absolute z-[999] hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-24 dark:bg-gray-700 dark:divide-gray-600",
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "justify-center flex items-center py-2",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                href: "/login",
                                                className: "z-10 abolute block mr-1 px-1 py-1 text-sm text-[gray] hover:text-[#ECA33A] dark:hover:bg-gray-600 raleway dark:text-gray-200 dark:hover:text-white",
                                                children: "Logout"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx(react_fontawesome.FontAwesomeIcon, {
                                                className: "icon",
                                                style: {
                                                    width: "15px",
                                                    height: "15px",
                                                    color: "gray"
                                                },
                                                icon: free_solid_svg_icons/* faRightFromBracket */.mXR
                                            })
                                        ]
                                    })
                                })
                            ]
                        })
                    ]
                })
            })
        ]
    });
}
/* harmony default export */ const Navbar_AdminNavbar = (AdminNavbar);

// EXTERNAL MODULE: ./node_modules/next/dist/build/webpack/loaders/next-flight-loader/module-proxy.js
var module_proxy = __webpack_require__(61363);
;// CONCATENATED MODULE: ./components/adminComponents/Sidebar/Sidebar.js

const proxy = (0,module_proxy.createProxy)(String.raw`D:\alifNoon\aleefNoonUpdated\aleef-noon\components\adminComponents\Sidebar\Sidebar.js`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;


/* harmony default export */ const Sidebar = (__default__);
// EXTERNAL MODULE: ./components/adminComponents/dashboard.module.css
var dashboard_module = __webpack_require__(44454);
var dashboard_module_default = /*#__PURE__*/__webpack_require__.n(dashboard_module);
;// CONCATENATED MODULE: ./app/Dashboard/layout.js





function layout({ children }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (dashboard_module_default()).container,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (dashboard_module_default()).menu,
                children: /*#__PURE__*/ jsx_runtime_.jsx(Sidebar, {})
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (dashboard_module_default()).content,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(Navbar_AdminNavbar, {}),
                    children
                ]
            })
        ]
    });
}
/* harmony default export */ const Dashboard_layout = (layout);


/***/ })

};
;