"use strict";
exports.id = 3875;
exports.ids = [3875];
exports.modules = {

/***/ 71413:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(18038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(11440);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* __next_internal_client_entry_do_not_use__ default auto */ 


function ScrollTopButton() {
    const [isVisible, setIsVisible] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const handleScroll = ()=>{
            if (window.scrollY > 300) {
                setIsVisible(false);
            } else {
                setIsVisible(true);
            }
        };
        window.addEventListener("scroll", handleScroll);
        return ()=>{
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);
    const scrollToTop = ()=>{
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                className: "whatsIconSticky",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                    href: "https://wa.me/+923040602781",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                        className: "h-[50px] w-[50px]",
                        src: "/whiteWhatsapp.svg",
                        alt: "image"
                    })
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: `ScrollTopButtonMain  ${isVisible ? "hidden" : "visible"}`,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                    onClick: scrollToTop,
                    className: "ScrollTopButton",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                        className: "ArrowIcon",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                style: {
                                    top: "10px",
                                    left: "12px"
                                },
                                className: "opacity-1 absolute w-[35px] h-[40px]",
                                src: "/ScrollLogo.png",
                                alt: "none"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                className: "opacity-0 justify-center",
                                children: "↑"
                            })
                        ]
                    })
                })
            })
        ]
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ScrollTopButton);


/***/ }),

/***/ 57302:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Index)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(56786);
// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(18038);
// EXTERNAL MODULE: ./node_modules/antd/lib/layout/index.js
var layout = __webpack_require__(7501);
// EXTERNAL MODULE: ./node_modules/antd/lib/menu/index.js
var menu = __webpack_require__(31065);
// EXTERNAL MODULE: ./node_modules/antd/lib/theme/index.js
var theme = __webpack_require__(70512);
// EXTERNAL MODULE: ./node_modules/antd/lib/button/index.js
var lib_button = __webpack_require__(79636);
var button_default = /*#__PURE__*/__webpack_require__.n(lib_button);
// EXTERNAL MODULE: ./node_modules/antd/lib/drawer/index.js
var drawer = __webpack_require__(81216);
// EXTERNAL MODULE: ./node_modules/antd/lib/space/index.js
var space = __webpack_require__(72442);
;// CONCATENATED MODULE: ./components/header/menuItemEnums.js
const MenuItemKeys = Object.freeze({
    BUY: 1,
    RENT: 2,
    SELL: 3,
    OFF_PLAN: 4,
    axBlog: 5,
    news: 6,
    podcasts: 7,
    CATALOGS: 8,
    AGENTS: 9,
    WHO_WE_ARE: 10
});
const menuItems = [
    {
        label: "Buy",
        key: MenuItemKeys.BUY,
        href: "/products/buy"
    },
    {
        label: "Rent",
        key: MenuItemKeys.RENT,
        href: "/Rent"
    },
    {
        label: "Sell",
        key: MenuItemKeys.SELL,
        href: "/Sell"
    },
    {
        label: "Off-Plan",
        key: MenuItemKeys.OFF_PLAN,
        href: "/off-plan"
    },
    {
        label: "Blogs",
        key: MenuItemKeys.axBlog,
        href: "/Blog"
    },
    {
        label: "Catalogs",
        key: MenuItemKeys.CATALOGS,
        href: "/Catalog"
    },
    {
        label: "Officials",
        key: MenuItemKeys.AGENTS,
        href: "/OFFICIALS"
    },
    {
        label: "Company Profile",
        key: MenuItemKeys.WHO_WE_ARE,
        href: "/Company-profile"
    }
];

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(11440);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./node_modules/next/navigation.js
var navigation = __webpack_require__(57114);
;// CONCATENATED MODULE: ./components/header/NavBar.js
/* __next_internal_client_entry_do_not_use__ default auto */ 











const { Header, Content, Footer } = layout["default"];

const { useToken } = theme["default"];
const NavBar = ()=>{
    //  const [headerWhite, setHeaderWhite] = useState(false);
    const { token } = useToken();
    const [isVisible, setIsVisible] = (0,react_.useState)(true);
    const [open, setOpen] = (0,react_.useState)(false);
    const [size, setSize] = (0,react_.useState)();
    const showDefaultDrawer = ()=>{
        setSize("small");
        setOpen(true);
    };
    const onClose = ()=>{
        setOpen(false);
    };
    (0,react_.useEffect)(()=>{
        const handleScroll = ()=>{
            if (window.scrollY > 90) {
                setIsVisible(false);
            } else {
                setIsVisible(true);
            }
        };
        window.addEventListener("scroll", handleScroll);
        return ()=>{
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);
    const router = (0,navigation.useRouter)();
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ jsx_runtime_.jsx("header", {
            className: `w-full z-[999]  ${isVisible ? "headerGray" : "headerBlack"}`,
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("nav", {
                className: "mx-auto flex-wrap flex items-center justify-between px-8",
                "aria-label": "Global",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "mr-10 HeaderlogoDiv",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                            href: "/",
                            className: "flex-col",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                className: "h-[90px] headerImg w-[157px] mr-[20px] z-[-1]",
                                src: "/Alif Noon Logo Header Logo.gif",
                                alt: "none"
                            })
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "menu-responsive font-gilda-display flex gap-x-8 items-center",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                type: "button",
                                className: " flex",
                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                    href: "/products/buy",
                                    className: "Buy-header raleway font-semibold text-[14px] leading-[16.44px] text-white  focus:text-[#ECA33A] hover:text-[#ECA33A]",
                                    children: "BUY"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                href: "/Rent",
                                className: "Rent-header raleway font-semibold text-[14px] leading-[16.44px] text-white  focus:text-[#ECA33A] hover:text-[#ECA33A]",
                                children: "RENT"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                href: "/Sell",
                                className: "Sell-header raleway text-[14px] font-semibold leading-[16.44px] text-white  focus:text-[#ECA33A] hover:text-[#ECA33A]",
                                children: "SELL"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                href: "/off-plan",
                                className: "off-planHeader raleway text-[14px] font-semibold leading-[16.44px] text-white  focus:text-[#ECA33A] hover:text-[#ECA33A]",
                                children: "OFF-PLAN"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "blog-header relative text-center mainMenu",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "flex",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                        href: "/Blog",
                                        className: "mt-[1px] blog-header raleway text-[14px] font-semibold leading-[16.44px] text-white  focus:text-[#ECA33A] hover:text-[#ECA33A]",
                                        children: "BLOGS"
                                    })
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                href: "/Catalog",
                                className: "Catalog-header raleway text-[14px] font-semibold leading-[16.44px] text-white  focus:text-[#ECA33A] hover:text-[#ECA33A]",
                                children: "CATALOGS"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                href: "/OFFICIALS",
                                className: "OFFICIALS-header raleway text-[14px] font-semibold leading-[16.44px] text-white  focus:text-[#ECA33A] hover:text-[#ECA33A]",
                                children: "OFFICIALS"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                href: "/Company-profile",
                                className: "CompanyProfileHeader raleway text-[14px] font-semibold leading-[16.44px] text-white  focus:text-[#ECA33A] hover:text-[#ECA33A]",
                                children: "COMPANY PROFILE"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "drawer flex flex-1 justify-end items-center",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("button", {
                                className: "searchheader relative",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        children: " SEARCH "
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                        className: "absolute",
                                        type: "text",
                                        placeholder: "Search....."
                                    })
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(space["default"], {
                                children: /*#__PURE__*/ jsx_runtime_.jsx((button_default()), {
                                    style: {
                                        backgroundColor: "transparent",
                                        border: "none"
                                    },
                                    onClick: showDefaultDrawer,
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
                                        width: "30",
                                        height: "18",
                                        viewBox: "0 0 30 18",
                                        fill: "#ECA33A",
                                        xmlns: "http://www.w3.org/2000/svg",
                                        s: true,
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                d: "M29 1H1",
                                                stroke: "#ECA33A",
                                                "stroke-width": "2",
                                                "stroke-linecap": "round"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                d: "M29 9L6 9",
                                                stroke: "#ECA33A",
                                                "stroke-width": "2",
                                                "stroke-linecap": "round"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                d: "M29 17L2 17",
                                                stroke: "#ECA33A",
                                                "stroke-width": "2",
                                                "stroke-linecap": "round"
                                            })
                                        ]
                                    })
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(drawer/* default */.Z, {
                                title: "Details",
                                placement: "right",
                                size: size,
                                onClose: onClose,
                                open: open,
                                width: 500,
                                children: /*#__PURE__*/ jsx_runtime_.jsx(menu["default"], {
                                    // theme="dark"
                                    className: "mr-2",
                                    mode: "vertical",
                                    defaultSelectedKeys: [
                                        "2"
                                    ],
                                    children: menuItems.map((item)=>{
                                        if (item.subItems) {
                                            // If there are subItems, construct a submenu with nested items
                                            return /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                href: item.href,
                                                children: /*#__PURE__*/ jsx_runtime_.jsx(menu["default"].SubMenu, {
                                                    Link: item.href,
                                                    onClick: ()=>router.push(item.href),
                                                    title: item.label,
                                                    children: item.subItems.map((subItem)=>/*#__PURE__*/ jsx_runtime_.jsx(menu["default"].Item, {
                                                            children: subItem.label
                                                        }, subItem.key))
                                                }, item.key)
                                            });
                                        } else {
                                            // If no subItems, just return the item
                                            return /*#__PURE__*/ jsx_runtime_.jsx(menu["default"].Item, {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                    href: item.href,
                                                    children: item.label
                                                })
                                            }, item.key);
                                        }
                                    })
                                })
                            })
                        ]
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const header_NavBar = (NavBar);

;// CONCATENATED MODULE: ./components/header/Index.js
/* __next_internal_client_entry_do_not_use__ default auto */ 


const App = ()=>{
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ jsx_runtime_.jsx(header_NavBar, {})
    });
};
/* harmony default export */ const Index = (App);


/***/ }),

/***/ 2596:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(18038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_row__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(12618);
/* harmony import */ var antd_lib_col__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(24034);
/* __next_internal_client_entry_do_not_use__ default auto */ 



// import Image from 'next/image'
function Footer() {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("main", {
            className: "relative w-full align-center justify-center bg-[#101010] footerMain",
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "footerInnerDiv bg-[#231F20] mb-[15px] p pt-[75px]",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(antd_lib_row__WEBPACK_IMPORTED_MODULE_2__["default"], {
                            className: "mb-[20px] footerRow",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd_lib_col__WEBPACK_IMPORTED_MODULE_3__["default"], {
                                    className: "LogoInFooter raleway-light pr-[60px] pt-[12px]",
                                    xl: 7,
                                    lg: 24,
                                    md: 24,
                                    xs: 24,
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                className: "w-[190px] h-[200px] m-auto",
                                                alt: "Image",
                                                src: "/Logo.png"
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                                className: "mt-[10px] leading-[15px] raleway-light font-normal text-white text-center text-[11px]",
                                                children: [
                                                    " ",
                                                    "WHERE YOU FIND PEACE, YES HOME",
                                                    " "
                                                ]
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd_lib_col__WEBPACK_IMPORTED_MODULE_3__["default"], {
                                    xl: 7,
                                    lg: 24,
                                    md: 24,
                                    xs: 24,
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "flex max-[1024px]:text-center ServicesList justify-center",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "rightcolumn max-[1024px]:text-center",
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h1", {
                                                        style: {
                                                            whiteSpace: "nowrap"
                                                        },
                                                        className: "text-[20px] leading-[30px] raleway-light font-normal mb-[12px] text-[#ECA33A]",
                                                        children: [
                                                            " ",
                                                            "USEFULL LINKS",
                                                            " "
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                        className: "text-left max-[1024px]:text-center text-white",
                                                        children: "Apartments"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                        className: "text-left max-[1024px]:text-center text-white",
                                                        children: " Penthouse "
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                        className: "text-left max-[1024px]:text-center text-white",
                                                        children: " Villas "
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                        className: "text-left max-[1024px]:text-center text-white",
                                                        children: " Townhouse "
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                        className: "text-left max-[1024px]:text-center text-white",
                                                        children: " Off-Plan "
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                        className: "text-left max-[1024px]:text-center text-white",
                                                        children: " Catalogs "
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                        className: "text-left max-[1024px]:text-center text-white",
                                                        children: " Area Guide "
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                        className: "text-left max-[1024px]:text-center text-white",
                                                        children: " Alif noon design "
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "rightcolumn max-[1024px]:text-center",
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h1", {
                                                        style: {
                                                            whiteSpace: "nowrap"
                                                        },
                                                        className: "text-[20px] leading-[30px] raleway-light font-normal mb-[12px] text-[#ECA33A]",
                                                        children: [
                                                            " ",
                                                            "OUR SERVICES",
                                                            " "
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                        className: "text-white",
                                                        children: "Sell"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                        className: "max-[1024px]:text-center text-left text-white",
                                                        children: " Rent "
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                        className: "max-[1024px]:text-center text-left text-white",
                                                        children: " Buy "
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                        className: "max-[1024px]:text-center text-left text-white",
                                                        children: " Developers"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                        className: "max-[1024px]:text-center text-left text-white",
                                                        children: " Corporate "
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                        className: "max-[1024px]:text-center text-left text-white",
                                                        children: " Holidays "
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "rightcolumn max-[1024px]:text-center",
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h1", {
                                                        style: {
                                                            whiteSpace: "nowrap"
                                                        },
                                                        className: "text-[20px] leading-[30px] raleway-light font-normal mb-[12px] text-[#ECA33A]",
                                                        children: [
                                                            " ",
                                                            "CONTACTS",
                                                            " "
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                        className: "max-[1024px]:text-center text-left text-white",
                                                        children: " Contact us"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                        className: "max-[1024px]:text-center text-left text-white",
                                                        children: " Careers "
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                        className: "max-[1024px]:text-center text-left text-white",
                                                        children: " Reviews "
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                        className: "max-[1024px]:text-center text-left text-white",
                                                        children: " Privacy Policy "
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                        className: "max-[1024px]:text-center text-left text-white",
                                                        children: " Sitemap "
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd_lib_col__WEBPACK_IMPORTED_MODULE_3__["default"], {
                                    xl: 7,
                                    lg: 24,
                                    md: 24,
                                    xs: 24,
                                    className: "text-right ",
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        style: {
                                            paddingLeft: "10%",
                                            paddingRight: "40px"
                                        },
                                        className: "rightcolumn",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "flex max justify-end",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                        className: "text-[white] h-[15px] mt-[4px] w-[12px] mx-2",
                                                        src: "/pinVector.png",
                                                        alt: "image"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                                        className: "raleway-light text-[18px] font-[300] text-[#ECA33A]",
                                                        children: " DUBAI, UAE "
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                                className: "text-[#cecece] raleway-light text-[18px] font-[300]",
                                                children: " YOU OFFICE LOCATION..UAE "
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "pl-[20px] pt-[12px] pb-[12px] flex justify-end",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                        className: "text-[white] h-[20px] w-[20px] mx-2",
                                                        src: "/whiteMessage.svg",
                                                        alt: "image"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                        className: "text-[white] h-[20px] w-[20px] mx-2",
                                                        src: "/whiteFacebook.svg",
                                                        alt: "image"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                        className: "text-[white] h-[20px] w-[20px] mx-2",
                                                        src: "/whiteTwiter.svg",
                                                        alt: "image"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                        className: "text-[white] h-[20px] w-[20px] mx-2",
                                                        src: "/whiteWhatsapp.svg",
                                                        alt: "image"
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                type: "button",
                                                className: "buttonColor text-white raleway-light font-light bg-[#231F20] text-[13px] px-[50px] py-[10px]",
                                                children: "CALL NOW"
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "emailButton justify-around flex text-wrap text-white raleway-light bg-[#231F20] pl-[10px] pr-[10px] py-[10px]",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                        type: "button",
                                                        className: "mr-[60px]",
                                                        children: "YOUR EMAIL"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "bg-[#ECA33A] w-[2px] h-[20px]"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                        style: {
                                                            whiteSpace: "nowrap"
                                                        },
                                                        type: "button",
                                                        className: "mr-[20px] ml-[30px]",
                                                        children: "SUBSCRIBE NOW"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                        className: "subscribeBtn",
                                                        alt: "none",
                                                        src: "/subscribeBtn.svg"
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {})
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd_lib_row__WEBPACK_IMPORTED_MODULE_2__["default"], {
                    className: "justify-center",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "flex",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "max-[1024px]:text-[9px] hover:text-[#ECA33A] px-[20px] text-[#cecece] raleway font-normal font-[16px] leading-[30.08px]",
                                children: [
                                    " ",
                                    "Alif noon \xa92023 All Rights Reserved",
                                    " "
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "max-[1024px]:text-[9px] px-[20px] hover:text-[#ECA33A] text-[#cecece] raleway font-normal font-[16px] leading-[30.08px]",
                                children: [
                                    " ",
                                    "Design & Develop by Rendrx.com",
                                    " "
                                ]
                            })
                        ]
                    })
                })
            ]
        })
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Footer);


/***/ })

};
;