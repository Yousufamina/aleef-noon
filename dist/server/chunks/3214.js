"use strict";
exports.id = 3214;
exports.ids = [3214];
exports.modules = {

/***/ 26064:
/***/ ((module, exports, __webpack_require__) => {


  Object.defineProperty(exports, "__esModule", ({
    value: true
  }));
  exports["default"] = void 0;
  
  var _CheckOutlined = _interopRequireDefault(__webpack_require__(13705));
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
  
  var _default = _CheckOutlined;
  exports["default"] = _default;
  module.exports = _default;

/***/ }),

/***/ 74762:
/***/ ((module, exports, __webpack_require__) => {


  Object.defineProperty(exports, "__esModule", ({
    value: true
  }));
  exports["default"] = void 0;
  
  var _CloseCircleFilled = _interopRequireDefault(__webpack_require__(21152));
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
  
  var _default = _CloseCircleFilled;
  exports["default"] = _default;
  module.exports = _default;

/***/ }),

/***/ 42773:
/***/ ((module, exports, __webpack_require__) => {


  Object.defineProperty(exports, "__esModule", ({
    value: true
  }));
  exports["default"] = void 0;
  
  var _CloseOutlined = _interopRequireDefault(__webpack_require__(75737));
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
  
  var _default = _CloseOutlined;
  exports["default"] = _default;
  module.exports = _default;

/***/ }),

/***/ 16815:
/***/ ((module, exports, __webpack_require__) => {


  Object.defineProperty(exports, "__esModule", ({
    value: true
  }));
  exports["default"] = void 0;
  
  var _DownOutlined = _interopRequireDefault(__webpack_require__(93880));
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
  
  var _default = _DownOutlined;
  exports["default"] = _default;
  module.exports = _default;

/***/ }),

/***/ 6376:
/***/ ((module, exports, __webpack_require__) => {


  Object.defineProperty(exports, "__esModule", ({
    value: true
  }));
  exports["default"] = void 0;
  
  var _SearchOutlined = _interopRequireDefault(__webpack_require__(62588));
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
  
  var _default = _SearchOutlined;
  exports["default"] = _default;
  module.exports = _default;

/***/ }),

/***/ 99838:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var _interopRequireWildcard = (__webpack_require__(35876)["default"]);
var _interopRequireDefault = (__webpack_require__(92439)["default"]);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = genPurePanel;
var _useMergedState = _interopRequireDefault(__webpack_require__(56146));
var React = _interopRequireWildcard(__webpack_require__(18038));
var _configProvider = _interopRequireWildcard(__webpack_require__(34791));
/* istanbul ignore next */
function genPurePanel(Component, defaultPrefixCls, getDropdownCls, postProps) {
  return function PurePanel(props) {
    const {
      prefixCls: customizePrefixCls,
      style
    } = props;
    const holderRef = React.useRef(null);
    const [popupHeight, setPopupHeight] = React.useState(0);
    const [popupWidth, setPopupWidth] = React.useState(0);
    const [open, setOpen] = (0, _useMergedState.default)(false, {
      value: props.open
    });
    const {
      getPrefixCls
    } = React.useContext(_configProvider.ConfigContext);
    const prefixCls = getPrefixCls(defaultPrefixCls || 'select', customizePrefixCls);
    React.useEffect(() => {
      // We do not care about ssr
      setOpen(true);
      if (typeof ResizeObserver !== 'undefined') {
        const resizeObserver = new ResizeObserver(entries => {
          const element = entries[0].target;
          setPopupHeight(element.offsetHeight + 8);
          setPopupWidth(element.offsetWidth);
        });
        const interval = setInterval(() => {
          var _a;
          const dropdownCls = getDropdownCls ? `.${getDropdownCls(prefixCls)}` : `.${prefixCls}-dropdown`;
          const popup = (_a = holderRef.current) === null || _a === void 0 ? void 0 : _a.querySelector(dropdownCls);
          if (popup) {
            clearInterval(interval);
            resizeObserver.observe(popup);
          }
        }, 10);
        return () => {
          clearInterval(interval);
          resizeObserver.disconnect();
        };
      }
    }, []);
    let mergedProps = Object.assign(Object.assign({}, props), {
      style: Object.assign(Object.assign({}, style), {
        margin: 0
      }),
      open,
      visible: open,
      getPopupContainer: () => holderRef.current
    });
    if (postProps) {
      mergedProps = postProps(mergedProps);
    }
    return /*#__PURE__*/React.createElement(_configProvider.default, {
      theme: {
        token: {
          motion: false
        }
      }
    }, /*#__PURE__*/React.createElement("div", {
      ref: holderRef,
      style: {
        paddingBottom: popupHeight,
        position: 'relative',
        minWidth: popupWidth
      }
    }, /*#__PURE__*/React.createElement(Component, Object.assign({}, mergedProps))));
  };
}

/***/ }),

/***/ 95201:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var _interopRequireDefault = (__webpack_require__(92439)["default"]);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.getMergedStatus = void 0;
exports.getStatusClassNames = getStatusClassNames;
var _classnames = _interopRequireDefault(__webpack_require__(89367));
const InputStatuses = (/* unused pure expression or super */ null && (['warning', 'error', '']));
function getStatusClassNames(prefixCls, status, hasFeedback) {
  return (0, _classnames.default)({
    [`${prefixCls}-status-success`]: status === 'success',
    [`${prefixCls}-status-warning`]: status === 'warning',
    [`${prefixCls}-status-error`]: status === 'error',
    [`${prefixCls}-status-validating`]: status === 'validating',
    [`${prefixCls}-has-feedback`]: hasFeedback
  });
}
const getMergedStatus = (contextStatus, customStatus) => customStatus || contextStatus;
exports.getMergedStatus = getMergedStatus;

/***/ }),

/***/ 55445:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var _interopRequireDefault = (__webpack_require__(92439)["default"]);
var _interopRequireWildcard = (__webpack_require__(35876)["default"]);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _react = _interopRequireWildcard(__webpack_require__(18038));
var _ = __webpack_require__(34791);
var _empty = _interopRequireDefault(__webpack_require__(53590));
const DefaultRenderEmpty = props => {
  const {
    componentName
  } = props;
  const {
    getPrefixCls
  } = (0, _react.useContext)(_.ConfigContext);
  const prefix = getPrefixCls('empty');
  switch (componentName) {
    case 'Table':
    case 'List':
      return /*#__PURE__*/_react.default.createElement(_empty.default, {
        image: _empty.default.PRESENTED_IMAGE_SIMPLE
      });
    case 'Select':
    case 'TreeSelect':
    case 'Cascader':
    case 'Transfer':
    case 'Mentions':
      return /*#__PURE__*/_react.default.createElement(_empty.default, {
        image: _empty.default.PRESENTED_IMAGE_SIMPLE,
        className: `${prefix}-small`
      });
    /* istanbul ignore next */
    default:
      // Should never hit if we take all the component into consider.
      return /*#__PURE__*/_react.default.createElement(_empty.default, null);
  }
};
var _default = DefaultRenderEmpty;
exports["default"] = _default;

/***/ }),

/***/ 58829:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var _interopRequireWildcard = (__webpack_require__(35876)["default"]);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _tinycolor = __webpack_require__(79226);
var React = _interopRequireWildcard(__webpack_require__(18038));
var _internal = __webpack_require__(37952);
const Empty = () => {
  const [, token] = (0, _internal.useToken)();
  const bgColor = new _tinycolor.TinyColor(token.colorBgBase);
  // Dark Theme need more dark of this
  const themeStyle = bgColor.toHsl().l < 0.5 ? {
    opacity: 0.65
  } : {};
  return /*#__PURE__*/React.createElement("svg", {
    style: themeStyle,
    width: "184",
    height: "152",
    viewBox: "0 0 184 152",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React.createElement("g", {
    fill: "none",
    fillRule: "evenodd"
  }, /*#__PURE__*/React.createElement("g", {
    transform: "translate(24 31.67)"
  }, /*#__PURE__*/React.createElement("ellipse", {
    fillOpacity: ".8",
    fill: "#F5F5F7",
    cx: "67.797",
    cy: "106.89",
    rx: "67.797",
    ry: "12.668"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M122.034 69.674L98.109 40.229c-1.148-1.386-2.826-2.225-4.593-2.225h-51.44c-1.766 0-3.444.839-4.592 2.225L13.56 69.674v15.383h108.475V69.674z",
    fill: "#AEB8C2"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M101.537 86.214L80.63 61.102c-1.001-1.207-2.507-1.867-4.048-1.867H31.724c-1.54 0-3.047.66-4.048 1.867L6.769 86.214v13.792h94.768V86.214z",
    fill: "url(#linearGradient-1)",
    transform: "translate(13.56)"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M33.83 0h67.933a4 4 0 0 1 4 4v93.344a4 4 0 0 1-4 4H33.83a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4z",
    fill: "#F5F5F7"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M42.678 9.953h50.237a2 2 0 0 1 2 2V36.91a2 2 0 0 1-2 2H42.678a2 2 0 0 1-2-2V11.953a2 2 0 0 1 2-2zM42.94 49.767h49.713a2.262 2.262 0 1 1 0 4.524H42.94a2.262 2.262 0 0 1 0-4.524zM42.94 61.53h49.713a2.262 2.262 0 1 1 0 4.525H42.94a2.262 2.262 0 0 1 0-4.525zM121.813 105.032c-.775 3.071-3.497 5.36-6.735 5.36H20.515c-3.238 0-5.96-2.29-6.734-5.36a7.309 7.309 0 0 1-.222-1.79V69.675h26.318c2.907 0 5.25 2.448 5.25 5.42v.04c0 2.971 2.37 5.37 5.277 5.37h34.785c2.907 0 5.277-2.421 5.277-5.393V75.1c0-2.972 2.343-5.426 5.25-5.426h26.318v33.569c0 .617-.077 1.216-.221 1.789z",
    fill: "#DCE0E6"
  })), /*#__PURE__*/React.createElement("path", {
    d: "M149.121 33.292l-6.83 2.65a1 1 0 0 1-1.317-1.23l1.937-6.207c-2.589-2.944-4.109-6.534-4.109-10.408C138.802 8.102 148.92 0 161.402 0 173.881 0 184 8.102 184 18.097c0 9.995-10.118 18.097-22.599 18.097-4.528 0-8.744-1.066-12.28-2.902z",
    fill: "#DCE0E6"
  }), /*#__PURE__*/React.createElement("g", {
    transform: "translate(149.65 15.383)",
    fill: "#FFF"
  }, /*#__PURE__*/React.createElement("ellipse", {
    cx: "20.654",
    cy: "3.167",
    rx: "2.849",
    ry: "2.815"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M5.698 5.63H0L2.898.704zM9.259.704h4.985V5.63H9.259z"
  }))));
};
if (false) {}
var _default = Empty;
exports["default"] = _default;

/***/ }),

/***/ 53590:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


'use client';

var _interopRequireWildcard = (__webpack_require__(35876)["default"]);
var _interopRequireDefault = (__webpack_require__(92439)["default"]);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _classnames = _interopRequireDefault(__webpack_require__(89367));
var React = _interopRequireWildcard(__webpack_require__(18038));
var _configProvider = __webpack_require__(34791);
var _locale = __webpack_require__(38654);
var _empty = _interopRequireDefault(__webpack_require__(58829));
var _simple = _interopRequireDefault(__webpack_require__(93293));
var _style = _interopRequireDefault(__webpack_require__(93822));
var __rest = void 0 && (void 0).__rest || function (s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};
const defaultEmptyImg = /*#__PURE__*/React.createElement(_empty.default, null);
const simpleEmptyImg = /*#__PURE__*/React.createElement(_simple.default, null);
const Empty = _a => {
  var {
      className,
      rootClassName,
      prefixCls: customizePrefixCls,
      image = defaultEmptyImg,
      description,
      children,
      imageStyle,
      style
    } = _a,
    restProps = __rest(_a, ["className", "rootClassName", "prefixCls", "image", "description", "children", "imageStyle", "style"]);
  const {
    getPrefixCls,
    direction,
    empty
  } = React.useContext(_configProvider.ConfigContext);
  const prefixCls = getPrefixCls('empty', customizePrefixCls);
  const [wrapSSR, hashId] = (0, _style.default)(prefixCls);
  const [locale] = (0, _locale.useLocale)('Empty');
  const des = typeof description !== 'undefined' ? description : locale === null || locale === void 0 ? void 0 : locale.description;
  const alt = typeof des === 'string' ? des : 'empty';
  let imageNode = null;
  if (typeof image === 'string') {
    imageNode = /*#__PURE__*/React.createElement("img", {
      alt: alt,
      src: image
    });
  } else {
    imageNode = image;
  }
  return wrapSSR( /*#__PURE__*/React.createElement("div", Object.assign({
    className: (0, _classnames.default)(hashId, prefixCls, empty === null || empty === void 0 ? void 0 : empty.className, {
      [`${prefixCls}-normal`]: image === simpleEmptyImg,
      [`${prefixCls}-rtl`]: direction === 'rtl'
    }, className, rootClassName),
    style: Object.assign(Object.assign({}, empty === null || empty === void 0 ? void 0 : empty.style), style)
  }, restProps), /*#__PURE__*/React.createElement("div", {
    className: `${prefixCls}-image`,
    style: imageStyle
  }, imageNode), des && /*#__PURE__*/React.createElement("div", {
    className: `${prefixCls}-description`
  }, des), children && /*#__PURE__*/React.createElement("div", {
    className: `${prefixCls}-footer`
  }, children)));
};
Empty.PRESENTED_IMAGE_DEFAULT = defaultEmptyImg;
Empty.PRESENTED_IMAGE_SIMPLE = simpleEmptyImg;
if (false) {}
var _default = Empty;
exports["default"] = _default;

/***/ }),

/***/ 93293:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var _interopRequireWildcard = (__webpack_require__(35876)["default"]);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _tinycolor = __webpack_require__(79226);
var React = _interopRequireWildcard(__webpack_require__(18038));
var _internal = __webpack_require__(37952);
const Simple = () => {
  const [, token] = (0, _internal.useToken)();
  const {
    colorFill,
    colorFillTertiary,
    colorFillQuaternary,
    colorBgContainer
  } = token;
  const {
    borderColor,
    shadowColor,
    contentColor
  } = (0, React.useMemo)(() => ({
    borderColor: new _tinycolor.TinyColor(colorFill).onBackground(colorBgContainer).toHexShortString(),
    shadowColor: new _tinycolor.TinyColor(colorFillTertiary).onBackground(colorBgContainer).toHexShortString(),
    contentColor: new _tinycolor.TinyColor(colorFillQuaternary).onBackground(colorBgContainer).toHexShortString()
  }), [colorFill, colorFillTertiary, colorFillQuaternary, colorBgContainer]);
  return /*#__PURE__*/React.createElement("svg", {
    width: "64",
    height: "41",
    viewBox: "0 0 64 41",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React.createElement("g", {
    transform: "translate(0 1)",
    fill: "none",
    fillRule: "evenodd"
  }, /*#__PURE__*/React.createElement("ellipse", {
    fill: shadowColor,
    cx: "32",
    cy: "33",
    rx: "32",
    ry: "7"
  }), /*#__PURE__*/React.createElement("g", {
    fillRule: "nonzero",
    stroke: borderColor
  }, /*#__PURE__*/React.createElement("path", {
    d: "M55 12.76L44.854 1.258C44.367.474 43.656 0 42.907 0H21.093c-.749 0-1.46.474-1.947 1.257L9 12.761V22h46v-9.24z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M41.613 15.931c0-1.605.994-2.93 2.227-2.931H55v18.137C55 33.26 53.68 35 52.05 35h-40.1C10.32 35 9 33.259 9 31.137V13h11.16c1.233 0 2.227 1.323 2.227 2.928v.022c0 1.605 1.005 2.901 2.237 2.901h14.752c1.232 0 2.237-1.308 2.237-2.913v-.007z",
    fill: contentColor
  }))));
};
if (false) {}
var _default = Simple;
exports["default"] = _default;

/***/ }),

/***/ 93822:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _internal = __webpack_require__(37952);
// ============================== Shared ==============================
const genSharedEmptyStyle = token => {
  const {
    componentCls,
    margin,
    marginXS,
    marginXL,
    fontSize,
    lineHeight
  } = token;
  return {
    [componentCls]: {
      marginInline: marginXS,
      fontSize,
      lineHeight,
      textAlign: 'center',
      // 原来 &-image 没有父子结构，现在为了外层承担我们的hashId，改成父子结果
      [`${componentCls}-image`]: {
        height: token.emptyImgHeight,
        marginBottom: marginXS,
        opacity: token.opacityImage,
        img: {
          height: '100%'
        },
        svg: {
          maxWidth: '100%',
          height: '100%',
          margin: 'auto'
        }
      },
      [`${componentCls}-description`]: {
        color: token.colorText
      },
      // 原来 &-footer 没有父子结构，现在为了外层承担我们的hashId，改成父子结果
      [`${componentCls}-footer`]: {
        marginTop: margin
      },
      '&-normal': {
        marginBlock: marginXL,
        color: token.colorTextDisabled,
        [`${componentCls}-description`]: {
          color: token.colorTextDisabled
        },
        [`${componentCls}-image`]: {
          height: token.emptyImgHeightMD
        }
      },
      '&-small': {
        marginBlock: marginXS,
        color: token.colorTextDisabled,
        [`${componentCls}-image`]: {
          height: token.emptyImgHeightSM
        }
      }
    }
  };
};
// ============================== Export ==============================
var _default = (0, _internal.genComponentStyleHook)('Empty', token => {
  const {
    componentCls,
    controlHeightLG
  } = token;
  const emptyToken = (0, _internal.mergeToken)(token, {
    emptyImgCls: `${componentCls}-img`,
    emptyImgHeight: controlHeightLG * 2.5,
    emptyImgHeightMD: controlHeightLG,
    emptyImgHeightSM: controlHeightLG * 0.875
  });
  return [genSharedEmptyStyle(emptyToken)];
});
exports["default"] = _default;

/***/ }),

/***/ 13214:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


'use client';

var _interopRequireWildcard = (__webpack_require__(35876)["default"]);
var _interopRequireDefault = (__webpack_require__(92439)["default"]);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _classnames = _interopRequireDefault(__webpack_require__(89367));
var _rcSelect = _interopRequireWildcard(__webpack_require__(43851));
var _omit = _interopRequireDefault(__webpack_require__(63007));
var React = _interopRequireWildcard(__webpack_require__(18038));
var _PurePanel = _interopRequireDefault(__webpack_require__(99838));
var _motion = __webpack_require__(58845);
var _statusUtils = __webpack_require__(95201);
var _warning = _interopRequireDefault(__webpack_require__(4474));
var _configProvider = __webpack_require__(34791);
var _DisabledContext = _interopRequireDefault(__webpack_require__(42076));
var _defaultRenderEmpty = _interopRequireDefault(__webpack_require__(55445));
var _useSize = _interopRequireDefault(__webpack_require__(97662));
var _context = __webpack_require__(37710);
var _Compact = __webpack_require__(39599);
var _style = _interopRequireDefault(__webpack_require__(76068));
var _useBuiltinPlacements = _interopRequireDefault(__webpack_require__(16539));
var _useShowArrow = _interopRequireDefault(__webpack_require__(53135));
var _iconUtil = _interopRequireDefault(__webpack_require__(46467));
var __rest = void 0 && (void 0).__rest || function (s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};
// TODO: 4.0 - codemod should help to change `filterOption` to support node props.

const SECRET_COMBOBOX_MODE_DO_NOT_USE = 'SECRET_COMBOBOX_MODE_DO_NOT_USE';
const InternalSelect = (_a, ref) => {
  var _b;
  var {
      prefixCls: customizePrefixCls,
      bordered = true,
      className,
      rootClassName,
      getPopupContainer,
      popupClassName,
      dropdownClassName,
      listHeight = 256,
      placement,
      listItemHeight = 24,
      size: customizeSize,
      disabled: customDisabled,
      notFoundContent,
      status: customStatus,
      showArrow,
      builtinPlacements,
      dropdownMatchSelectWidth,
      popupMatchSelectWidth,
      direction: propDirection,
      style
    } = _a,
    props = __rest(_a, ["prefixCls", "bordered", "className", "rootClassName", "getPopupContainer", "popupClassName", "dropdownClassName", "listHeight", "placement", "listItemHeight", "size", "disabled", "notFoundContent", "status", "showArrow", "builtinPlacements", "dropdownMatchSelectWidth", "popupMatchSelectWidth", "direction", "style"]);
  const {
    getPopupContainer: getContextPopupContainer,
    getPrefixCls,
    renderEmpty,
    direction: contextDirection,
    virtual,
    popupMatchSelectWidth: contextPopupMatchSelectWidth,
    popupOverflow,
    select
  } = React.useContext(_configProvider.ConfigContext);
  const prefixCls = getPrefixCls('select', customizePrefixCls);
  const rootPrefixCls = getPrefixCls();
  const direction = propDirection !== null && propDirection !== void 0 ? propDirection : contextDirection;
  const {
    compactSize,
    compactItemClassnames
  } = (0, _Compact.useCompactItemContext)(prefixCls, direction);
  const [wrapSSR, hashId] = (0, _style.default)(prefixCls);
  const mode = React.useMemo(() => {
    const {
      mode: m
    } = props;
    if (m === 'combobox') {
      return undefined;
    }
    if (m === SECRET_COMBOBOX_MODE_DO_NOT_USE) {
      return 'combobox';
    }
    return m;
  }, [props.mode]);
  const isMultiple = mode === 'multiple' || mode === 'tags';
  const mergedShowArrow = (0, _useShowArrow.default)(showArrow);
  const mergedPopupMatchSelectWidth = (_b = popupMatchSelectWidth !== null && popupMatchSelectWidth !== void 0 ? popupMatchSelectWidth : dropdownMatchSelectWidth) !== null && _b !== void 0 ? _b : contextPopupMatchSelectWidth;
  // ===================== Form Status =====================
  const {
    status: contextStatus,
    hasFeedback,
    isFormItemInput,
    feedbackIcon
  } = React.useContext(_context.FormItemInputContext);
  const mergedStatus = (0, _statusUtils.getMergedStatus)(contextStatus, customStatus);
  // ===================== Empty =====================
  let mergedNotFound;
  if (notFoundContent !== undefined) {
    mergedNotFound = notFoundContent;
  } else if (mode === 'combobox') {
    mergedNotFound = null;
  } else {
    mergedNotFound = (renderEmpty === null || renderEmpty === void 0 ? void 0 : renderEmpty('Select')) || /*#__PURE__*/React.createElement(_defaultRenderEmpty.default, {
      componentName: "Select"
    });
  }
  // ===================== Icons =====================
  const {
    suffixIcon,
    itemIcon,
    removeIcon,
    clearIcon
  } = (0, _iconUtil.default)(Object.assign(Object.assign({}, props), {
    multiple: isMultiple,
    hasFeedback,
    feedbackIcon,
    showArrow: mergedShowArrow,
    prefixCls
  }));
  const selectProps = (0, _omit.default)(props, ['suffixIcon', 'itemIcon']);
  const rcSelectRtlDropdownClassName = (0, _classnames.default)(popupClassName || dropdownClassName, {
    [`${prefixCls}-dropdown-${direction}`]: direction === 'rtl'
  }, rootClassName, hashId);
  const mergedSize = (0, _useSize.default)(ctx => {
    var _a;
    return (_a = customizeSize !== null && customizeSize !== void 0 ? customizeSize : compactSize) !== null && _a !== void 0 ? _a : ctx;
  });
  // ===================== Disabled =====================
  const disabled = React.useContext(_DisabledContext.default);
  const mergedDisabled = customDisabled !== null && customDisabled !== void 0 ? customDisabled : disabled;
  const mergedClassName = (0, _classnames.default)({
    [`${prefixCls}-lg`]: mergedSize === 'large',
    [`${prefixCls}-sm`]: mergedSize === 'small',
    [`${prefixCls}-rtl`]: direction === 'rtl',
    [`${prefixCls}-borderless`]: !bordered,
    [`${prefixCls}-in-form-item`]: isFormItemInput
  }, (0, _statusUtils.getStatusClassNames)(prefixCls, mergedStatus, hasFeedback), compactItemClassnames, select === null || select === void 0 ? void 0 : select.className, className, rootClassName, hashId);
  // ===================== Placement =====================
  const memoPlacement = React.useMemo(() => {
    if (placement !== undefined) {
      return placement;
    }
    return direction === 'rtl' ? 'bottomRight' : 'bottomLeft';
  }, [placement, direction]);
  const mergedBuiltinPlacements = (0, _useBuiltinPlacements.default)(builtinPlacements, popupOverflow);
  // ====================== Warning ======================
  if (false) {}
  // ====================== Render =======================
  return wrapSSR( /*#__PURE__*/React.createElement(_rcSelect.default, Object.assign({
    ref: ref,
    virtual: virtual,
    showSearch: select === null || select === void 0 ? void 0 : select.showSearch
  }, selectProps, {
    style: Object.assign(Object.assign({}, select === null || select === void 0 ? void 0 : select.style), style),
    dropdownMatchSelectWidth: mergedPopupMatchSelectWidth,
    builtinPlacements: mergedBuiltinPlacements,
    transitionName: (0, _motion.getTransitionName)(rootPrefixCls, (0, _motion.getTransitionDirection)(placement), props.transitionName),
    listHeight: listHeight,
    listItemHeight: listItemHeight,
    mode: mode,
    prefixCls: prefixCls,
    placement: memoPlacement,
    direction: direction,
    inputIcon: suffixIcon,
    menuItemSelectedIcon: itemIcon,
    removeIcon: removeIcon,
    clearIcon: clearIcon,
    notFoundContent: mergedNotFound,
    className: mergedClassName,
    getPopupContainer: getPopupContainer || getContextPopupContainer,
    dropdownClassName: rcSelectRtlDropdownClassName,
    showArrow: hasFeedback || mergedShowArrow,
    disabled: mergedDisabled
  })));
};
if (false) {}
const Select = /*#__PURE__*/React.forwardRef(InternalSelect);
// We don't care debug panel
/* istanbul ignore next */
const PurePanel = (0, _PurePanel.default)(Select);
Select.SECRET_COMBOBOX_MODE_DO_NOT_USE = SECRET_COMBOBOX_MODE_DO_NOT_USE;
Select.Option = _rcSelect.Option;
Select.OptGroup = _rcSelect.OptGroup;
Select._InternalPanelDoNotUseOrYouWillBeFired = PurePanel;
if (false) {}
var _default = Select;
exports["default"] = _default;

/***/ }),

/***/ 54440:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _style = __webpack_require__(82760);
var _motion = __webpack_require__(12175);
const genItemStyle = token => {
  const {
    controlPaddingHorizontal
  } = token;
  return {
    position: 'relative',
    display: 'block',
    minHeight: token.controlHeight,
    padding: `${(token.controlHeight - token.fontSize * token.lineHeight) / 2}px ${controlPaddingHorizontal}px`,
    color: token.colorText,
    fontWeight: 'normal',
    fontSize: token.fontSize,
    lineHeight: token.lineHeight,
    boxSizing: 'border-box'
  };
};
const genSingleStyle = token => {
  const {
    antCls,
    componentCls
  } = token;
  const selectItemCls = `${componentCls}-item`;
  return [{
    [`${componentCls}-dropdown`]: Object.assign(Object.assign({}, (0, _style.resetComponent)(token)), {
      position: 'absolute',
      top: -9999,
      zIndex: token.zIndexPopup,
      boxSizing: 'border-box',
      padding: token.paddingXXS,
      overflow: 'hidden',
      fontSize: token.fontSize,
      // Fix select render lag of long text in chrome
      // https://github.com/ant-design/ant-design/issues/11456
      // https://github.com/ant-design/ant-design/issues/11843
      fontVariant: 'initial',
      backgroundColor: token.colorBgElevated,
      borderRadius: token.borderRadiusLG,
      outline: 'none',
      boxShadow: token.boxShadowSecondary,
      [`
            &${antCls}-slide-up-enter${antCls}-slide-up-enter-active${componentCls}-dropdown-placement-bottomLeft,
            &${antCls}-slide-up-appear${antCls}-slide-up-appear-active${componentCls}-dropdown-placement-bottomLeft
          `]: {
        animationName: _motion.slideUpIn
      },
      [`
            &${antCls}-slide-up-enter${antCls}-slide-up-enter-active${componentCls}-dropdown-placement-topLeft,
            &${antCls}-slide-up-appear${antCls}-slide-up-appear-active${componentCls}-dropdown-placement-topLeft
          `]: {
        animationName: _motion.slideDownIn
      },
      [`&${antCls}-slide-up-leave${antCls}-slide-up-leave-active${componentCls}-dropdown-placement-bottomLeft`]: {
        animationName: _motion.slideUpOut
      },
      [`&${antCls}-slide-up-leave${antCls}-slide-up-leave-active${componentCls}-dropdown-placement-topLeft`]: {
        animationName: _motion.slideDownOut
      },
      '&-hidden': {
        display: 'none'
      },
      [`${selectItemCls}`]: Object.assign(Object.assign({}, genItemStyle(token)), {
        cursor: 'pointer',
        transition: `background ${token.motionDurationSlow} ease`,
        borderRadius: token.borderRadiusSM,
        // =========== Group ============
        '&-group': {
          color: token.colorTextDescription,
          fontSize: token.fontSizeSM,
          cursor: 'default'
        },
        // =========== Option ===========
        '&-option': {
          display: 'flex',
          '&-content': Object.assign({
            flex: 'auto'
          }, _style.textEllipsis),
          '&-state': {
            flex: 'none',
            display: 'flex',
            alignItems: 'center'
          },
          [`&-active:not(${selectItemCls}-option-disabled)`]: {
            backgroundColor: token.controlItemBgHover
          },
          [`&-selected:not(${selectItemCls}-option-disabled)`]: {
            color: token.colorText,
            fontWeight: token.fontWeightStrong,
            backgroundColor: token.controlItemBgActive,
            [`${selectItemCls}-option-state`]: {
              color: token.colorPrimary
            }
          },
          '&-disabled': {
            [`&${selectItemCls}-option-selected`]: {
              backgroundColor: token.colorBgContainerDisabled
            },
            color: token.colorTextDisabled,
            cursor: 'not-allowed'
          },
          '&-grouped': {
            paddingInlineStart: token.controlPaddingHorizontal * 2
          }
        }
      }),
      // =========================== RTL ===========================
      '&-rtl': {
        direction: 'rtl'
      }
    })
  },
  // Follow code may reuse in other components
  (0, _motion.initSlideMotion)(token, 'slide-up'), (0, _motion.initSlideMotion)(token, 'slide-down'), (0, _motion.initMoveMotion)(token, 'move-up'), (0, _motion.initMoveMotion)(token, 'move-down')];
};
var _default = genSingleStyle;
exports["default"] = _default;

/***/ }),

/***/ 76068:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var _interopRequireDefault = (__webpack_require__(92439)["default"]);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _style = __webpack_require__(82760);
var _compactItem = __webpack_require__(17952);
var _internal = __webpack_require__(37952);
var _dropdown = _interopRequireDefault(__webpack_require__(54440));
var _multiple = _interopRequireDefault(__webpack_require__(90284));
var _single = _interopRequireDefault(__webpack_require__(78931));
// ============================= Selector =============================
const genSelectorStyle = token => {
  const {
    componentCls
  } = token;
  return {
    position: 'relative',
    backgroundColor: token.colorBgContainer,
    border: `${token.lineWidth}px ${token.lineType} ${token.colorBorder}`,
    transition: `all ${token.motionDurationMid} ${token.motionEaseInOut}`,
    input: {
      cursor: 'pointer'
    },
    [`${componentCls}-show-search&`]: {
      cursor: 'text',
      input: {
        cursor: 'auto',
        color: 'inherit'
      }
    },
    [`${componentCls}-disabled&`]: {
      color: token.colorTextDisabled,
      background: token.colorBgContainerDisabled,
      cursor: 'not-allowed',
      [`${componentCls}-multiple&`]: {
        background: token.colorBgContainerDisabled
      },
      input: {
        cursor: 'not-allowed'
      }
    }
  };
};
// ============================== Status ==============================
const genStatusStyle = function (rootSelectCls, token) {
  let overwriteDefaultBorder = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  const {
    componentCls,
    borderHoverColor,
    outlineColor,
    antCls
  } = token;
  const overwriteStyle = overwriteDefaultBorder ? {
    [`${componentCls}-selector`]: {
      borderColor: borderHoverColor
    }
  } : {};
  return {
    [rootSelectCls]: {
      [`&:not(${componentCls}-disabled):not(${componentCls}-customize-input):not(${antCls}-pagination-size-changer)`]: Object.assign(Object.assign({}, overwriteStyle), {
        [`${componentCls}-focused& ${componentCls}-selector`]: {
          borderColor: borderHoverColor,
          boxShadow: `0 0 0 ${token.controlOutlineWidth}px ${outlineColor}`,
          outline: 0
        },
        [`&:hover ${componentCls}-selector`]: {
          borderColor: borderHoverColor
        }
      })
    }
  };
};
// ============================== Styles ==============================
// /* Reset search input style */
const getSearchInputWithoutBorderStyle = token => {
  const {
    componentCls
  } = token;
  return {
    [`${componentCls}-selection-search-input`]: {
      margin: 0,
      padding: 0,
      background: 'transparent',
      border: 'none',
      outline: 'none',
      appearance: 'none',
      '&::-webkit-search-cancel-button': {
        display: 'none',
        '-webkit-appearance': 'none'
      }
    }
  };
};
// =============================== Base ===============================
const genBaseStyle = token => {
  const {
    componentCls,
    inputPaddingHorizontalBase,
    iconCls
  } = token;
  return {
    [componentCls]: Object.assign(Object.assign({}, (0, _style.resetComponent)(token)), {
      position: 'relative',
      display: 'inline-block',
      cursor: 'pointer',
      [`&:not(${componentCls}-customize-input) ${componentCls}-selector`]: Object.assign(Object.assign({}, genSelectorStyle(token)), getSearchInputWithoutBorderStyle(token)),
      // [`&:not(&-disabled):hover ${selectCls}-selector`]: {
      //   ...genHoverStyle(token),
      // },
      // ======================== Selection ========================
      [`${componentCls}-selection-item`]: Object.assign({
        flex: 1,
        fontWeight: 'normal'
      }, _style.textEllipsis),
      // ======================= Placeholder =======================
      [`${componentCls}-selection-placeholder`]: Object.assign(Object.assign({}, _style.textEllipsis), {
        flex: 1,
        color: token.colorTextPlaceholder,
        pointerEvents: 'none'
      }),
      // ========================== Arrow ==========================
      [`${componentCls}-arrow`]: Object.assign(Object.assign({}, (0, _style.resetIcon)()), {
        position: 'absolute',
        top: '50%',
        insetInlineStart: 'auto',
        insetInlineEnd: inputPaddingHorizontalBase,
        height: token.fontSizeIcon,
        marginTop: -token.fontSizeIcon / 2,
        color: token.colorTextQuaternary,
        fontSize: token.fontSizeIcon,
        lineHeight: 1,
        textAlign: 'center',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        [iconCls]: {
          verticalAlign: 'top',
          transition: `transform ${token.motionDurationSlow}`,
          '> svg': {
            verticalAlign: 'top'
          },
          [`&:not(${componentCls}-suffix)`]: {
            pointerEvents: 'auto'
          }
        },
        [`${componentCls}-disabled &`]: {
          cursor: 'not-allowed'
        },
        '> *:not(:last-child)': {
          marginInlineEnd: 8 // FIXME: magic
        }
      }),

      // ========================== Clear ==========================
      [`${componentCls}-clear`]: {
        position: 'absolute',
        top: '50%',
        insetInlineStart: 'auto',
        insetInlineEnd: inputPaddingHorizontalBase,
        zIndex: 1,
        display: 'inline-block',
        width: token.fontSizeIcon,
        height: token.fontSizeIcon,
        marginTop: -token.fontSizeIcon / 2,
        color: token.colorTextQuaternary,
        fontSize: token.fontSizeIcon,
        fontStyle: 'normal',
        lineHeight: 1,
        textAlign: 'center',
        textTransform: 'none',
        background: token.colorBgContainer,
        cursor: 'pointer',
        opacity: 0,
        transition: `color ${token.motionDurationMid} ease, opacity ${token.motionDurationSlow} ease`,
        textRendering: 'auto',
        '&:before': {
          display: 'block'
        },
        '&:hover': {
          color: token.colorTextTertiary
        }
      },
      '&:hover': {
        [`${componentCls}-clear`]: {
          opacity: 1
        }
      }
    }),
    // ========================= Feedback ==========================
    [`${componentCls}-has-feedback`]: {
      [`${componentCls}-clear`]: {
        insetInlineEnd: inputPaddingHorizontalBase + token.fontSize + token.paddingXS
      }
    }
  };
};
// ============================== Styles ==============================
const genSelectStyle = token => {
  const {
    componentCls
  } = token;
  return [{
    [componentCls]: {
      // ==================== BorderLess ====================
      [`&-borderless ${componentCls}-selector`]: {
        backgroundColor: `transparent !important`,
        borderColor: `transparent !important`,
        boxShadow: `none !important`
      },
      // ==================== In Form ====================
      [`&${componentCls}-in-form-item`]: {
        width: '100%'
      }
    }
  },
  // =====================================================
  // ==                       LTR                       ==
  // =====================================================
  // Base
  genBaseStyle(token),
  // Single
  (0, _single.default)(token),
  // Multiple
  (0, _multiple.default)(token),
  // Dropdown
  (0, _dropdown.default)(token),
  // =====================================================
  // ==                       RTL                       ==
  // =====================================================
  {
    [`${componentCls}-rtl`]: {
      direction: 'rtl'
    }
  },
  // =====================================================
  // ==                     Status                      ==
  // =====================================================
  genStatusStyle(componentCls, (0, _internal.mergeToken)(token, {
    borderHoverColor: token.colorPrimaryHover,
    outlineColor: token.controlOutline
  })), genStatusStyle(`${componentCls}-status-error`, (0, _internal.mergeToken)(token, {
    borderHoverColor: token.colorErrorHover,
    outlineColor: token.colorErrorOutline
  }), true), genStatusStyle(`${componentCls}-status-warning`, (0, _internal.mergeToken)(token, {
    borderHoverColor: token.colorWarningHover,
    outlineColor: token.colorWarningOutline
  }), true),
  // =====================================================
  // ==             Space Compact                       ==
  // =====================================================
  (0, _compactItem.genCompactItemStyle)(token, {
    borderElCls: `${componentCls}-selector`,
    focusElCls: `${componentCls}-focused`
  })];
};
// ============================== Export ==============================
var _default = (0, _internal.genComponentStyleHook)('Select', (token, _ref) => {
  let {
    rootPrefixCls
  } = _ref;
  const selectToken = (0, _internal.mergeToken)(token, {
    rootPrefixCls,
    inputPaddingHorizontalBase: token.paddingSM - 1
  });
  return [genSelectStyle(selectToken)];
}, token => ({
  zIndexPopup: token.zIndexPopupBase + 50
}));
exports["default"] = _default;

/***/ }),

/***/ 90284:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _style = __webpack_require__(82760);
var _internal = __webpack_require__(37952);
const FIXED_ITEM_MARGIN = 2;
const getSelectItemStyle = _ref => {
  let {
    controlHeightSM,
    controlHeight,
    lineWidth: borderWidth
  } = _ref;
  const selectItemDist = (controlHeight - controlHeightSM) / 2 - borderWidth;
  const selectItemMargin = Math.ceil(selectItemDist / 2);
  return [selectItemDist, selectItemMargin];
};
function genSizeStyle(token, suffix) {
  const {
    componentCls,
    iconCls
  } = token;
  const selectOverflowPrefixCls = `${componentCls}-selection-overflow`;
  const selectItemHeight = token.controlHeightSM;
  const [selectItemDist] = getSelectItemStyle(token);
  const suffixCls = suffix ? `${componentCls}-${suffix}` : '';
  return {
    [`${componentCls}-multiple${suffixCls}`]: {
      fontSize: token.fontSize,
      /**
       * Do not merge `height` & `line-height` under style with `selection` & `search`, since chrome
       * may update to redesign with its align logic.
       */
      // =========================== Overflow ===========================
      [selectOverflowPrefixCls]: {
        position: 'relative',
        display: 'flex',
        flex: 'auto',
        flexWrap: 'wrap',
        maxWidth: '100%',
        '&-item': {
          flex: 'none',
          alignSelf: 'center',
          maxWidth: '100%',
          display: 'inline-flex'
        }
      },
      // ========================= Selector =========================
      [`${componentCls}-selector`]: {
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        // Multiple is little different that horizontal is follow the vertical
        padding: `${selectItemDist - FIXED_ITEM_MARGIN}px ${FIXED_ITEM_MARGIN * 2}px`,
        borderRadius: token.borderRadius,
        [`${componentCls}-show-search&`]: {
          cursor: 'text'
        },
        [`${componentCls}-disabled&`]: {
          background: token.colorBgContainerDisabled,
          cursor: 'not-allowed'
        },
        '&:after': {
          display: 'inline-block',
          width: 0,
          margin: `${FIXED_ITEM_MARGIN}px 0`,
          lineHeight: `${selectItemHeight}px`,
          visibility: 'hidden',
          content: '"\\a0"'
        }
      },
      [`
        &${componentCls}-show-arrow ${componentCls}-selector,
        &${componentCls}-allow-clear ${componentCls}-selector
      `]: {
        paddingInlineEnd: token.fontSizeIcon + token.controlPaddingHorizontal
      },
      // ======================== Selections ========================
      [`${componentCls}-selection-item`]: {
        position: 'relative',
        display: 'flex',
        flex: 'none',
        boxSizing: 'border-box',
        maxWidth: '100%',
        height: selectItemHeight,
        marginTop: FIXED_ITEM_MARGIN,
        marginBottom: FIXED_ITEM_MARGIN,
        lineHeight: `${selectItemHeight - token.lineWidth * 2}px`,
        background: token.colorFillSecondary,
        borderRadius: token.borderRadiusSM,
        cursor: 'default',
        transition: `font-size ${token.motionDurationSlow}, line-height ${token.motionDurationSlow}, height ${token.motionDurationSlow}`,
        userSelect: 'none',
        marginInlineEnd: FIXED_ITEM_MARGIN * 2,
        paddingInlineStart: token.paddingXS,
        paddingInlineEnd: token.paddingXS / 2,
        [`${componentCls}-disabled&`]: {
          color: token.colorTextDisabled,
          cursor: 'not-allowed'
        },
        // It's ok not to do this, but 24px makes bottom narrow in view should adjust
        '&-content': {
          display: 'inline-block',
          marginInlineEnd: token.paddingXS / 2,
          overflow: 'hidden',
          whiteSpace: 'pre',
          textOverflow: 'ellipsis'
        },
        '&-remove': Object.assign(Object.assign({}, (0, _style.resetIcon)()), {
          display: 'inline-flex',
          alignItems: 'center',
          color: token.colorIcon,
          fontWeight: 'bold',
          fontSize: 10,
          lineHeight: 'inherit',
          cursor: 'pointer',
          [`> ${iconCls}`]: {
            verticalAlign: '-0.2em'
          },
          '&:hover': {
            color: token.colorIconHover
          }
        })
      },
      // ========================== Input ==========================
      [`${selectOverflowPrefixCls}-item + ${selectOverflowPrefixCls}-item`]: {
        [`${componentCls}-selection-search`]: {
          marginInlineStart: 0
        }
      },
      [`${componentCls}-selection-search`]: {
        display: 'inline-flex',
        position: 'relative',
        maxWidth: '100%',
        marginInlineStart: token.inputPaddingHorizontalBase - selectItemDist,
        [`
          &-input,
          &-mirror
        `]: {
          height: selectItemHeight,
          fontFamily: token.fontFamily,
          lineHeight: `${selectItemHeight}px`,
          transition: `all ${token.motionDurationSlow}`
        },
        '&-input': {
          width: '100%',
          minWidth: 4.1 // fix search cursor missing
        },

        '&-mirror': {
          position: 'absolute',
          top: 0,
          insetInlineStart: 0,
          insetInlineEnd: 'auto',
          zIndex: 999,
          whiteSpace: 'pre',
          visibility: 'hidden'
        }
      },
      // ======================= Placeholder =======================
      [`${componentCls}-selection-placeholder `]: {
        position: 'absolute',
        top: '50%',
        insetInlineStart: token.inputPaddingHorizontalBase,
        insetInlineEnd: token.inputPaddingHorizontalBase,
        transform: 'translateY(-50%)',
        transition: `all ${token.motionDurationSlow}`
      }
    }
  };
}
const genMultipleStyle = token => {
  const {
    componentCls
  } = token;
  const smallToken = (0, _internal.mergeToken)(token, {
    controlHeight: token.controlHeightSM,
    controlHeightSM: token.controlHeightXS,
    borderRadius: token.borderRadiusSM,
    borderRadiusSM: token.borderRadiusXS
  });
  const largeToken = (0, _internal.mergeToken)(token, {
    fontSize: token.fontSizeLG,
    controlHeight: token.controlHeightLG,
    controlHeightSM: token.controlHeight,
    borderRadius: token.borderRadiusLG,
    borderRadiusSM: token.borderRadius
  });
  const [, smSelectItemMargin] = getSelectItemStyle(token);
  return [genSizeStyle(token),
  // ======================== Small ========================
  genSizeStyle(smallToken, 'sm'),
  // Padding
  {
    [`${componentCls}-multiple${componentCls}-sm`]: {
      [`${componentCls}-selection-placeholder`]: {
        insetInline: token.controlPaddingHorizontalSM - token.lineWidth
      },
      // https://github.com/ant-design/ant-design/issues/29559
      [`${componentCls}-selection-search`]: {
        marginInlineStart: smSelectItemMargin
      }
    }
  },
  // ======================== Large ========================
  genSizeStyle(largeToken, 'lg')];
};
var _default = genMultipleStyle;
exports["default"] = _default;

/***/ }),

/***/ 78931:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = genSingleStyle;
var _style = __webpack_require__(82760);
var _internal = __webpack_require__(37952);
function genSizeStyle(token, suffix) {
  const {
    componentCls,
    inputPaddingHorizontalBase,
    borderRadius
  } = token;
  const selectHeightWithoutBorder = token.controlHeight - token.lineWidth * 2;
  const selectionItemPadding = Math.ceil(token.fontSize * 1.25);
  const suffixCls = suffix ? `${componentCls}-${suffix}` : '';
  return {
    [`${componentCls}-single${suffixCls}`]: {
      fontSize: token.fontSize,
      // ========================= Selector =========================
      [`${componentCls}-selector`]: Object.assign(Object.assign({}, (0, _style.resetComponent)(token)), {
        display: 'flex',
        borderRadius,
        [`${componentCls}-selection-search`]: {
          position: 'absolute',
          top: 0,
          insetInlineStart: inputPaddingHorizontalBase,
          insetInlineEnd: inputPaddingHorizontalBase,
          bottom: 0,
          '&-input': {
            width: '100%'
          }
        },
        [`
          ${componentCls}-selection-item,
          ${componentCls}-selection-placeholder
        `]: {
          padding: 0,
          lineHeight: `${selectHeightWithoutBorder}px`,
          transition: `all ${token.motionDurationSlow}, visibility 0s`,
          // Firefox inline-block position calculation is not same as Chrome & Safari. Patch this:
          '@supports (-moz-appearance: meterbar)': {
            lineHeight: `${selectHeightWithoutBorder}px`
          }
        },
        [`${componentCls}-selection-item`]: {
          position: 'relative',
          userSelect: 'none'
        },
        [`${componentCls}-selection-placeholder`]: {
          transition: 'none',
          pointerEvents: 'none'
        },
        // For common baseline align
        [['&:after', /* For '' value baseline align */
        `${componentCls}-selection-item:after`, /* For undefined value baseline align */
        `${componentCls}-selection-placeholder:after`].join(',')]: {
          display: 'inline-block',
          width: 0,
          visibility: 'hidden',
          content: '"\\a0"'
        }
      }),
      [`
        &${componentCls}-show-arrow ${componentCls}-selection-item,
        &${componentCls}-show-arrow ${componentCls}-selection-placeholder
      `]: {
        paddingInlineEnd: selectionItemPadding
      },
      // Opacity selection if open
      [`&${componentCls}-open ${componentCls}-selection-item`]: {
        color: token.colorTextPlaceholder
      },
      // ========================== Input ==========================
      // We only change the style of non-customize input which is only support by `combobox` mode.
      // Not customize
      [`&:not(${componentCls}-customize-input)`]: {
        [`${componentCls}-selector`]: {
          width: '100%',
          height: token.controlHeight,
          padding: `0 ${inputPaddingHorizontalBase}px`,
          [`${componentCls}-selection-search-input`]: {
            height: selectHeightWithoutBorder
          },
          '&:after': {
            lineHeight: `${selectHeightWithoutBorder}px`
          }
        }
      },
      [`&${componentCls}-customize-input`]: {
        [`${componentCls}-selector`]: {
          '&:after': {
            display: 'none'
          },
          [`${componentCls}-selection-search`]: {
            position: 'static',
            width: '100%'
          },
          [`${componentCls}-selection-placeholder`]: {
            position: 'absolute',
            insetInlineStart: 0,
            insetInlineEnd: 0,
            padding: `0 ${inputPaddingHorizontalBase}px`,
            '&:after': {
              display: 'none'
            }
          }
        }
      }
    }
  };
}
function genSingleStyle(token) {
  const {
    componentCls
  } = token;
  const inputPaddingHorizontalSM = token.controlPaddingHorizontalSM - token.lineWidth;
  return [genSizeStyle(token),
  // ======================== Small ========================
  // Shared
  genSizeStyle((0, _internal.mergeToken)(token, {
    controlHeight: token.controlHeightSM,
    borderRadius: token.borderRadiusSM
  }), 'sm'),
  // padding
  {
    [`${componentCls}-single${componentCls}-sm`]: {
      [`&:not(${componentCls}-customize-input)`]: {
        [`${componentCls}-selection-search`]: {
          insetInlineStart: inputPaddingHorizontalSM,
          insetInlineEnd: inputPaddingHorizontalSM
        },
        [`${componentCls}-selector`]: {
          padding: `0 ${inputPaddingHorizontalSM}px`
        },
        // With arrow should provides `padding-right` to show the arrow
        [`&${componentCls}-show-arrow ${componentCls}-selection-search`]: {
          insetInlineEnd: inputPaddingHorizontalSM + token.fontSize * 1.5
        },
        [`
            &${componentCls}-show-arrow ${componentCls}-selection-item,
            &${componentCls}-show-arrow ${componentCls}-selection-placeholder
          `]: {
          paddingInlineEnd: token.fontSize * 1.5
        }
      }
    }
  },
  // ======================== Large ========================
  // Shared
  genSizeStyle((0, _internal.mergeToken)(token, {
    controlHeight: token.controlHeightLG,
    fontSize: token.fontSizeLG,
    borderRadius: token.borderRadiusLG
  }), 'lg')];
}

/***/ }),

/***/ 16539:
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = useBuiltinPlacements;
const getBuiltInPlacements = popupOverflow => {
  const htmlRegion = popupOverflow === 'scroll' ? 'scroll' : 'visible';
  const sharedConfig = {
    overflow: {
      adjustX: true,
      adjustY: true,
      shiftY: true
    },
    htmlRegion,
    _experimental: {
      dynamicInset: true
    }
  };
  return {
    bottomLeft: Object.assign(Object.assign({}, sharedConfig), {
      points: ['tl', 'bl'],
      offset: [0, 4]
    }),
    bottomRight: Object.assign(Object.assign({}, sharedConfig), {
      points: ['tr', 'br'],
      offset: [0, 4]
    }),
    topLeft: Object.assign(Object.assign({}, sharedConfig), {
      points: ['bl', 'tl'],
      offset: [0, -4]
    }),
    topRight: Object.assign(Object.assign({}, sharedConfig), {
      points: ['br', 'tr'],
      offset: [0, -4]
    })
  };
};
function useBuiltinPlacements(buildInPlacements, popupOverflow) {
  return buildInPlacements || getBuiltInPlacements(popupOverflow);
}

/***/ }),

/***/ 53135:
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = useShowArrow;
/**
 * Since Select, TreeSelect, Cascader is same Select like component.
 * We just use same hook to handle this logic.
 *
 * If `showArrow` not configured, always show it.
 */
function useShowArrow(showArrow) {
  return showArrow !== null && showArrow !== void 0 ? showArrow : true;
}

/***/ }),

/***/ 46467:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var _interopRequireWildcard = (__webpack_require__(35876)["default"]);
var _interopRequireDefault = (__webpack_require__(92439)["default"]);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = getIcons;
var _CheckOutlined = _interopRequireDefault(__webpack_require__(26064));
var _CloseCircleFilled = _interopRequireDefault(__webpack_require__(74762));
var _CloseOutlined = _interopRequireDefault(__webpack_require__(42773));
var _DownOutlined = _interopRequireDefault(__webpack_require__(16815));
var _LoadingOutlined = _interopRequireDefault(__webpack_require__(79859));
var _SearchOutlined = _interopRequireDefault(__webpack_require__(6376));
var React = _interopRequireWildcard(__webpack_require__(18038));
function getIcons(_ref) {
  let {
    suffixIcon,
    clearIcon,
    menuItemSelectedIcon,
    removeIcon,
    loading,
    multiple,
    hasFeedback,
    prefixCls,
    showArrow,
    feedbackIcon
  } = _ref;
  // Clear Icon
  const mergedClearIcon = clearIcon !== null && clearIcon !== void 0 ? clearIcon : /*#__PURE__*/React.createElement(_CloseCircleFilled.default, null);
  // Validation Feedback Icon
  const getSuffixIconNode = arrowIcon => /*#__PURE__*/React.createElement(React.Fragment, null, showArrow !== false && arrowIcon, hasFeedback && feedbackIcon);
  // Arrow item icon
  let mergedSuffixIcon = null;
  if (suffixIcon !== undefined) {
    mergedSuffixIcon = getSuffixIconNode(suffixIcon);
  } else if (loading) {
    mergedSuffixIcon = getSuffixIconNode( /*#__PURE__*/React.createElement(_LoadingOutlined.default, {
      spin: true
    }));
  } else {
    const iconCls = `${prefixCls}-suffix`;
    mergedSuffixIcon = _ref2 => {
      let {
        open,
        showSearch
      } = _ref2;
      if (open && showSearch) {
        return getSuffixIconNode( /*#__PURE__*/React.createElement(_SearchOutlined.default, {
          className: iconCls
        }));
      }
      return getSuffixIconNode( /*#__PURE__*/React.createElement(_DownOutlined.default, {
        className: iconCls
      }));
    };
  }
  // Checked item icon
  let mergedItemIcon = null;
  if (menuItemSelectedIcon !== undefined) {
    mergedItemIcon = menuItemSelectedIcon;
  } else if (multiple) {
    mergedItemIcon = /*#__PURE__*/React.createElement(_CheckOutlined.default, null);
  } else {
    mergedItemIcon = null;
  }
  let mergedRemoveIcon = null;
  if (removeIcon !== undefined) {
    mergedRemoveIcon = removeIcon;
  } else {
    mergedRemoveIcon = /*#__PURE__*/React.createElement(_CloseOutlined.default, null);
  }
  return {
    clearIcon: mergedClearIcon,
    suffixIcon: mergedSuffixIcon,
    itemIcon: mergedItemIcon,
    removeIcon: mergedRemoveIcon
  };
}

/***/ }),

/***/ 24061:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var _interopRequireDefault = __webpack_require__(92439);
var _typeof3 = __webpack_require__(67236);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
exports.isMultiple = isMultiple;
var _typeof2 = _interopRequireDefault(__webpack_require__(67236));
var _extends2 = _interopRequireDefault(__webpack_require__(43259));
var _defineProperty2 = _interopRequireDefault(__webpack_require__(513));
var _toConsumableArray2 = _interopRequireDefault(__webpack_require__(42798));
var _slicedToArray2 = _interopRequireDefault(__webpack_require__(16522));
var _objectSpread2 = _interopRequireDefault(__webpack_require__(89687));
var _objectWithoutProperties2 = _interopRequireDefault(__webpack_require__(14498));
var _classnames = _interopRequireDefault(__webpack_require__(89367));
var _useLayoutEffect = _interopRequireDefault(__webpack_require__(50368));
var _useMergedState3 = _interopRequireDefault(__webpack_require__(56146));
var _isMobile = _interopRequireDefault(__webpack_require__(57213));
var _KeyCode = _interopRequireDefault(__webpack_require__(81390));
var _ref2 = __webpack_require__(310);
var React = _interopRequireWildcard(__webpack_require__(18038));
var _useBaseProps = __webpack_require__(68084);
var _useDelayReset3 = _interopRequireDefault(__webpack_require__(35494));
var _useLock3 = _interopRequireDefault(__webpack_require__(2446));
var _useSelectTriggerControl = _interopRequireDefault(__webpack_require__(95658));
var _Selector = _interopRequireDefault(__webpack_require__(26321));
var _SelectTrigger = _interopRequireDefault(__webpack_require__(2653));
var _TransBtn = _interopRequireDefault(__webpack_require__(57438));
var _valueUtil = __webpack_require__(20724);
var _excluded = ["id", "prefixCls", "className", "showSearch", "tagRender", "direction", "omitDomProps", "displayValues", "onDisplayValuesChange", "emptyOptions", "notFoundContent", "onClear", "mode", "disabled", "loading", "getInputElement", "getRawInputElement", "open", "defaultOpen", "onDropdownVisibleChange", "activeValue", "onActiveValueChange", "activeDescendantId", "searchValue", "autoClearSearchValue", "onSearch", "onSearchSplit", "tokenSeparators", "allowClear", "showArrow", "inputIcon", "clearIcon", "OptionList", "animation", "transitionName", "dropdownStyle", "dropdownClassName", "dropdownMatchSelectWidth", "dropdownRender", "dropdownAlign", "placement", "builtinPlacements", "getPopupContainer", "showAction", "onFocus", "onBlur", "onKeyUp", "onKeyDown", "onMouseDown"];
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof3(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var DEFAULT_OMIT_PROPS = ['value', 'onChange', 'removeIcon', 'placeholder', 'autoFocus', 'maxTagCount', 'maxTagTextLength', 'maxTagPlaceholder', 'choiceTransitionName', 'onInputKeyDown', 'onPopupScroll', 'tabIndex'];
function isMultiple(mode) {
  return mode === 'tags' || mode === 'multiple';
}
var BaseSelect = /*#__PURE__*/React.forwardRef(function (props, ref) {
  var _customizeRawInputEle, _classNames2;
  var id = props.id,
    prefixCls = props.prefixCls,
    className = props.className,
    showSearch = props.showSearch,
    tagRender = props.tagRender,
    direction = props.direction,
    omitDomProps = props.omitDomProps,
    displayValues = props.displayValues,
    onDisplayValuesChange = props.onDisplayValuesChange,
    emptyOptions = props.emptyOptions,
    _props$notFoundConten = props.notFoundContent,
    notFoundContent = _props$notFoundConten === void 0 ? 'Not Found' : _props$notFoundConten,
    onClear = props.onClear,
    mode = props.mode,
    disabled = props.disabled,
    loading = props.loading,
    getInputElement = props.getInputElement,
    getRawInputElement = props.getRawInputElement,
    open = props.open,
    defaultOpen = props.defaultOpen,
    onDropdownVisibleChange = props.onDropdownVisibleChange,
    activeValue = props.activeValue,
    onActiveValueChange = props.onActiveValueChange,
    activeDescendantId = props.activeDescendantId,
    searchValue = props.searchValue,
    autoClearSearchValue = props.autoClearSearchValue,
    onSearch = props.onSearch,
    onSearchSplit = props.onSearchSplit,
    tokenSeparators = props.tokenSeparators,
    allowClear = props.allowClear,
    showArrow = props.showArrow,
    inputIcon = props.inputIcon,
    clearIcon = props.clearIcon,
    OptionList = props.OptionList,
    animation = props.animation,
    transitionName = props.transitionName,
    dropdownStyle = props.dropdownStyle,
    dropdownClassName = props.dropdownClassName,
    dropdownMatchSelectWidth = props.dropdownMatchSelectWidth,
    dropdownRender = props.dropdownRender,
    dropdownAlign = props.dropdownAlign,
    placement = props.placement,
    builtinPlacements = props.builtinPlacements,
    getPopupContainer = props.getPopupContainer,
    _props$showAction = props.showAction,
    showAction = _props$showAction === void 0 ? [] : _props$showAction,
    onFocus = props.onFocus,
    onBlur = props.onBlur,
    onKeyUp = props.onKeyUp,
    onKeyDown = props.onKeyDown,
    onMouseDown = props.onMouseDown,
    restProps = (0, _objectWithoutProperties2.default)(props, _excluded);

  // ============================== MISC ==============================
  var multiple = isMultiple(mode);
  var mergedShowSearch = (showSearch !== undefined ? showSearch : multiple) || mode === 'combobox';
  var domProps = (0, _objectSpread2.default)({}, restProps);
  DEFAULT_OMIT_PROPS.forEach(function (propName) {
    delete domProps[propName];
  });
  omitDomProps === null || omitDomProps === void 0 ? void 0 : omitDomProps.forEach(function (propName) {
    delete domProps[propName];
  });

  // ============================= Mobile =============================
  var _React$useState = React.useState(false),
    _React$useState2 = (0, _slicedToArray2.default)(_React$useState, 2),
    mobile = _React$useState2[0],
    setMobile = _React$useState2[1];
  React.useEffect(function () {
    // Only update on the client side
    setMobile((0, _isMobile.default)());
  }, []);

  // ============================== Refs ==============================
  var containerRef = React.useRef(null);
  var selectorDomRef = React.useRef(null);
  var triggerRef = React.useRef(null);
  var selectorRef = React.useRef(null);
  var listRef = React.useRef(null);

  /** Used for component focused management */
  var _useDelayReset = (0, _useDelayReset3.default)(),
    _useDelayReset2 = (0, _slicedToArray2.default)(_useDelayReset, 3),
    mockFocused = _useDelayReset2[0],
    setMockFocused = _useDelayReset2[1],
    cancelSetMockFocused = _useDelayReset2[2];

  // =========================== Imperative ===========================
  React.useImperativeHandle(ref, function () {
    var _selectorRef$current, _selectorRef$current2;
    return {
      focus: (_selectorRef$current = selectorRef.current) === null || _selectorRef$current === void 0 ? void 0 : _selectorRef$current.focus,
      blur: (_selectorRef$current2 = selectorRef.current) === null || _selectorRef$current2 === void 0 ? void 0 : _selectorRef$current2.blur,
      scrollTo: function scrollTo(arg) {
        var _listRef$current;
        return (_listRef$current = listRef.current) === null || _listRef$current === void 0 ? void 0 : _listRef$current.scrollTo(arg);
      }
    };
  });

  // ========================== Search Value ==========================
  var mergedSearchValue = React.useMemo(function () {
    var _displayValues$;
    if (mode !== 'combobox') {
      return searchValue;
    }
    var val = (_displayValues$ = displayValues[0]) === null || _displayValues$ === void 0 ? void 0 : _displayValues$.value;
    return typeof val === 'string' || typeof val === 'number' ? String(val) : '';
  }, [searchValue, mode, displayValues]);

  // ========================== Custom Input ==========================
  // Only works in `combobox`
  var customizeInputElement = mode === 'combobox' && typeof getInputElement === 'function' && getInputElement() || null;

  // Used for customize replacement for `rc-cascader`
  var customizeRawInputElement = typeof getRawInputElement === 'function' && getRawInputElement();
  var customizeRawInputRef = (0, _ref2.useComposeRef)(selectorDomRef, customizeRawInputElement === null || customizeRawInputElement === void 0 ? void 0 : (_customizeRawInputEle = customizeRawInputElement.props) === null || _customizeRawInputEle === void 0 ? void 0 : _customizeRawInputEle.ref);

  // ============================== Open ==============================
  // SSR not support Portal which means we need delay `open` for the first time render
  var _React$useState3 = React.useState(false),
    _React$useState4 = (0, _slicedToArray2.default)(_React$useState3, 2),
    rendered = _React$useState4[0],
    setRendered = _React$useState4[1];
  (0, _useLayoutEffect.default)(function () {
    setRendered(true);
  }, []);
  var _useMergedState = (0, _useMergedState3.default)(false, {
      defaultValue: defaultOpen,
      value: open
    }),
    _useMergedState2 = (0, _slicedToArray2.default)(_useMergedState, 2),
    innerOpen = _useMergedState2[0],
    setInnerOpen = _useMergedState2[1];
  var mergedOpen = rendered ? innerOpen : false;

  // Not trigger `open` in `combobox` when `notFoundContent` is empty
  var emptyListContent = !notFoundContent && emptyOptions;
  if (disabled || emptyListContent && mergedOpen && mode === 'combobox') {
    mergedOpen = false;
  }
  var triggerOpen = emptyListContent ? false : mergedOpen;
  var onToggleOpen = React.useCallback(function (newOpen) {
    var nextOpen = newOpen !== undefined ? newOpen : !mergedOpen;
    if (!disabled) {
      setInnerOpen(nextOpen);
      if (mergedOpen !== nextOpen) {
        onDropdownVisibleChange === null || onDropdownVisibleChange === void 0 ? void 0 : onDropdownVisibleChange(nextOpen);
      }
    }
  }, [disabled, mergedOpen, setInnerOpen, onDropdownVisibleChange]);

  // ============================= Search =============================
  var tokenWithEnter = React.useMemo(function () {
    return (tokenSeparators || []).some(function (tokenSeparator) {
      return ['\n', '\r\n'].includes(tokenSeparator);
    });
  }, [tokenSeparators]);
  var onInternalSearch = function onInternalSearch(searchText, fromTyping, isCompositing) {
    var ret = true;
    var newSearchText = searchText;
    onActiveValueChange === null || onActiveValueChange === void 0 ? void 0 : onActiveValueChange(null);

    // Check if match the `tokenSeparators`
    var patchLabels = isCompositing ? null : (0, _valueUtil.getSeparatedContent)(searchText, tokenSeparators);

    // Ignore combobox since it's not split-able
    if (mode !== 'combobox' && patchLabels) {
      newSearchText = '';
      onSearchSplit === null || onSearchSplit === void 0 ? void 0 : onSearchSplit(patchLabels);

      // Should close when paste finish
      onToggleOpen(false);

      // Tell Selector that break next actions
      ret = false;
    }
    if (onSearch && mergedSearchValue !== newSearchText) {
      onSearch(newSearchText, {
        source: fromTyping ? 'typing' : 'effect'
      });
    }
    return ret;
  };

  // Only triggered when menu is closed & mode is tags
  // If menu is open, OptionList will take charge
  // If mode isn't tags, press enter is not meaningful when you can't see any option
  var onInternalSearchSubmit = function onInternalSearchSubmit(searchText) {
    // prevent empty tags from appearing when you click the Enter button
    if (!searchText || !searchText.trim()) {
      return;
    }
    onSearch(searchText, {
      source: 'submit'
    });
  };

  // Close will clean up single mode search text
  React.useEffect(function () {
    if (!mergedOpen && !multiple && mode !== 'combobox') {
      onInternalSearch('', false, false);
    }
  }, [mergedOpen]);

  // ============================ Disabled ============================
  // Close dropdown & remove focus state when disabled change
  React.useEffect(function () {
    if (innerOpen && disabled) {
      setInnerOpen(false);
    }
    if (disabled) {
      setMockFocused(false);
    }
  }, [disabled]);

  // ============================ Keyboard ============================
  /**
   * We record input value here to check if can press to clean up by backspace
   * - null: Key is not down, this is reset by key up
   * - true: Search text is empty when first time backspace down
   * - false: Search text is not empty when first time backspace down
   */
  var _useLock = (0, _useLock3.default)(),
    _useLock2 = (0, _slicedToArray2.default)(_useLock, 2),
    getClearLock = _useLock2[0],
    setClearLock = _useLock2[1];

  // KeyDown
  var onInternalKeyDown = function onInternalKeyDown(event) {
    var clearLock = getClearLock();
    var which = event.which;
    if (which === _KeyCode.default.ENTER) {
      // Do not submit form when type in the input
      if (mode !== 'combobox') {
        event.preventDefault();
      }

      // We only manage open state here, close logic should handle by list component
      if (!mergedOpen) {
        onToggleOpen(true);
      }
    }
    setClearLock(!!mergedSearchValue);

    // Remove value by `backspace`
    if (which === _KeyCode.default.BACKSPACE && !clearLock && multiple && !mergedSearchValue && displayValues.length) {
      var cloneDisplayValues = (0, _toConsumableArray2.default)(displayValues);
      var removedDisplayValue = null;
      for (var i = cloneDisplayValues.length - 1; i >= 0; i -= 1) {
        var current = cloneDisplayValues[i];
        if (!current.disabled) {
          cloneDisplayValues.splice(i, 1);
          removedDisplayValue = current;
          break;
        }
      }
      if (removedDisplayValue) {
        onDisplayValuesChange(cloneDisplayValues, {
          type: 'remove',
          values: [removedDisplayValue]
        });
      }
    }
    for (var _len = arguments.length, rest = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      rest[_key - 1] = arguments[_key];
    }
    if (mergedOpen && listRef.current) {
      var _listRef$current2;
      (_listRef$current2 = listRef.current).onKeyDown.apply(_listRef$current2, [event].concat(rest));
    }
    onKeyDown === null || onKeyDown === void 0 ? void 0 : onKeyDown.apply(void 0, [event].concat(rest));
  };

  // KeyUp
  var onInternalKeyUp = function onInternalKeyUp(event) {
    for (var _len2 = arguments.length, rest = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
      rest[_key2 - 1] = arguments[_key2];
    }
    if (mergedOpen && listRef.current) {
      var _listRef$current3;
      (_listRef$current3 = listRef.current).onKeyUp.apply(_listRef$current3, [event].concat(rest));
    }
    onKeyUp === null || onKeyUp === void 0 ? void 0 : onKeyUp.apply(void 0, [event].concat(rest));
  };

  // ============================ Selector ============================
  var onSelectorRemove = function onSelectorRemove(val) {
    var newValues = displayValues.filter(function (i) {
      return i !== val;
    });
    onDisplayValuesChange(newValues, {
      type: 'remove',
      values: [val]
    });
  };

  // ========================== Focus / Blur ==========================
  /** Record real focus status */
  var focusRef = React.useRef(false);
  var onContainerFocus = function onContainerFocus() {
    setMockFocused(true);
    if (!disabled) {
      if (onFocus && !focusRef.current) {
        onFocus.apply(void 0, arguments);
      }

      // `showAction` should handle `focus` if set
      if (showAction.includes('focus')) {
        onToggleOpen(true);
      }
    }
    focusRef.current = true;
  };
  var onContainerBlur = function onContainerBlur() {
    setMockFocused(false, function () {
      focusRef.current = false;
      onToggleOpen(false);
    });
    if (disabled) {
      return;
    }
    if (mergedSearchValue) {
      // `tags` mode should move `searchValue` into values
      if (mode === 'tags') {
        onSearch(mergedSearchValue, {
          source: 'submit'
        });
      } else if (mode === 'multiple') {
        // `multiple` mode only clean the search value but not trigger event
        onSearch('', {
          source: 'blur'
        });
      }
    }
    if (onBlur) {
      onBlur.apply(void 0, arguments);
    }
  };

  // Give focus back of Select
  var activeTimeoutIds = [];
  React.useEffect(function () {
    return function () {
      activeTimeoutIds.forEach(function (timeoutId) {
        return clearTimeout(timeoutId);
      });
      activeTimeoutIds.splice(0, activeTimeoutIds.length);
    };
  }, []);
  var onInternalMouseDown = function onInternalMouseDown(event) {
    var _triggerRef$current;
    var target = event.target;
    var popupElement = (_triggerRef$current = triggerRef.current) === null || _triggerRef$current === void 0 ? void 0 : _triggerRef$current.getPopupElement();

    // We should give focus back to selector if clicked item is not focusable
    if (popupElement && popupElement.contains(target)) {
      var timeoutId = setTimeout(function () {
        var index = activeTimeoutIds.indexOf(timeoutId);
        if (index !== -1) {
          activeTimeoutIds.splice(index, 1);
        }
        cancelSetMockFocused();
        if (!mobile && !popupElement.contains(document.activeElement)) {
          var _selectorRef$current3;
          (_selectorRef$current3 = selectorRef.current) === null || _selectorRef$current3 === void 0 ? void 0 : _selectorRef$current3.focus();
        }
      });
      activeTimeoutIds.push(timeoutId);
    }
    for (var _len3 = arguments.length, restArgs = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
      restArgs[_key3 - 1] = arguments[_key3];
    }
    onMouseDown === null || onMouseDown === void 0 ? void 0 : onMouseDown.apply(void 0, [event].concat(restArgs));
  };

  // ============================ Dropdown ============================
  var _React$useState5 = React.useState(null),
    _React$useState6 = (0, _slicedToArray2.default)(_React$useState5, 2),
    containerWidth = _React$useState6[0],
    setContainerWidth = _React$useState6[1];
  var _React$useState7 = React.useState({}),
    _React$useState8 = (0, _slicedToArray2.default)(_React$useState7, 2),
    forceUpdate = _React$useState8[1];
  // We need force update here since popup dom is render async
  function onPopupMouseEnter() {
    forceUpdate({});
  }
  (0, _useLayoutEffect.default)(function () {
    if (triggerOpen) {
      var _containerRef$current;
      var newWidth = Math.ceil((_containerRef$current = containerRef.current) === null || _containerRef$current === void 0 ? void 0 : _containerRef$current.offsetWidth);
      if (containerWidth !== newWidth && !Number.isNaN(newWidth)) {
        setContainerWidth(newWidth);
      }
    }
  }, [triggerOpen]);

  // Used for raw custom input trigger
  var onTriggerVisibleChange;
  if (customizeRawInputElement) {
    onTriggerVisibleChange = function onTriggerVisibleChange(newOpen) {
      onToggleOpen(newOpen);
    };
  }

  // Close when click on non-select element
  (0, _useSelectTriggerControl.default)(function () {
    var _triggerRef$current2;
    return [containerRef.current, (_triggerRef$current2 = triggerRef.current) === null || _triggerRef$current2 === void 0 ? void 0 : _triggerRef$current2.getPopupElement()];
  }, triggerOpen, onToggleOpen, !!customizeRawInputElement);

  // ============================ Context =============================
  var baseSelectContext = React.useMemo(function () {
    return (0, _objectSpread2.default)((0, _objectSpread2.default)({}, props), {}, {
      notFoundContent: notFoundContent,
      open: mergedOpen,
      triggerOpen: triggerOpen,
      id: id,
      showSearch: mergedShowSearch,
      multiple: multiple,
      toggleOpen: onToggleOpen
    });
  }, [props, notFoundContent, triggerOpen, mergedOpen, id, mergedShowSearch, multiple, onToggleOpen]);

  // ==================================================================
  // ==                            Render                            ==
  // ==================================================================

  // ============================= Arrow ==============================
  var mergedShowArrow = showArrow !== undefined ? showArrow : loading || !multiple && mode !== 'combobox';
  var arrowNode;
  if (mergedShowArrow) {
    arrowNode = /*#__PURE__*/React.createElement(_TransBtn.default, {
      className: (0, _classnames.default)("".concat(prefixCls, "-arrow"), (0, _defineProperty2.default)({}, "".concat(prefixCls, "-arrow-loading"), loading)),
      customizeIcon: inputIcon,
      customizeIconProps: {
        loading: loading,
        searchValue: mergedSearchValue,
        open: mergedOpen,
        focused: mockFocused,
        showSearch: mergedShowSearch
      }
    });
  }

  // ============================= Clear ==============================
  var clearNode;
  var onClearMouseDown = function onClearMouseDown() {
    var _selectorRef$current4;
    onClear === null || onClear === void 0 ? void 0 : onClear();
    (_selectorRef$current4 = selectorRef.current) === null || _selectorRef$current4 === void 0 ? void 0 : _selectorRef$current4.focus();
    onDisplayValuesChange([], {
      type: 'clear',
      values: displayValues
    });
    onInternalSearch('', false, false);
  };
  if (!disabled && allowClear && (displayValues.length || mergedSearchValue) && !(mode === 'combobox' && mergedSearchValue === '')) {
    clearNode = /*#__PURE__*/React.createElement(_TransBtn.default, {
      className: "".concat(prefixCls, "-clear"),
      onMouseDown: onClearMouseDown,
      customizeIcon: clearIcon
    }, "\xD7");
  }

  // =========================== OptionList ===========================
  var optionList = /*#__PURE__*/React.createElement(OptionList, {
    ref: listRef
  });

  // ============================= Select =============================
  var mergedClassName = (0, _classnames.default)(prefixCls, className, (_classNames2 = {}, (0, _defineProperty2.default)(_classNames2, "".concat(prefixCls, "-focused"), mockFocused), (0, _defineProperty2.default)(_classNames2, "".concat(prefixCls, "-multiple"), multiple), (0, _defineProperty2.default)(_classNames2, "".concat(prefixCls, "-single"), !multiple), (0, _defineProperty2.default)(_classNames2, "".concat(prefixCls, "-allow-clear"), allowClear), (0, _defineProperty2.default)(_classNames2, "".concat(prefixCls, "-show-arrow"), mergedShowArrow), (0, _defineProperty2.default)(_classNames2, "".concat(prefixCls, "-disabled"), disabled), (0, _defineProperty2.default)(_classNames2, "".concat(prefixCls, "-loading"), loading), (0, _defineProperty2.default)(_classNames2, "".concat(prefixCls, "-open"), mergedOpen), (0, _defineProperty2.default)(_classNames2, "".concat(prefixCls, "-customize-input"), customizeInputElement), (0, _defineProperty2.default)(_classNames2, "".concat(prefixCls, "-show-search"), mergedShowSearch), _classNames2));

  // >>> Selector
  var selectorNode = /*#__PURE__*/React.createElement(_SelectTrigger.default, {
    ref: triggerRef,
    disabled: disabled,
    prefixCls: prefixCls,
    visible: triggerOpen,
    popupElement: optionList,
    containerWidth: containerWidth,
    animation: animation,
    transitionName: transitionName,
    dropdownStyle: dropdownStyle,
    dropdownClassName: dropdownClassName,
    direction: direction,
    dropdownMatchSelectWidth: dropdownMatchSelectWidth,
    dropdownRender: dropdownRender,
    dropdownAlign: dropdownAlign,
    placement: placement,
    builtinPlacements: builtinPlacements,
    getPopupContainer: getPopupContainer,
    empty: emptyOptions,
    getTriggerDOMNode: function getTriggerDOMNode() {
      return selectorDomRef.current;
    },
    onPopupVisibleChange: onTriggerVisibleChange,
    onPopupMouseEnter: onPopupMouseEnter
  }, customizeRawInputElement ? /*#__PURE__*/React.cloneElement(customizeRawInputElement, {
    ref: customizeRawInputRef
  }) : /*#__PURE__*/React.createElement(_Selector.default, (0, _extends2.default)({}, props, {
    domRef: selectorDomRef,
    prefixCls: prefixCls,
    inputElement: customizeInputElement,
    ref: selectorRef,
    id: id,
    showSearch: mergedShowSearch,
    autoClearSearchValue: autoClearSearchValue,
    mode: mode,
    activeDescendantId: activeDescendantId,
    tagRender: tagRender,
    values: displayValues,
    open: mergedOpen,
    onToggleOpen: onToggleOpen,
    activeValue: activeValue,
    searchValue: mergedSearchValue,
    onSearch: onInternalSearch,
    onSearchSubmit: onInternalSearchSubmit,
    onRemove: onSelectorRemove,
    tokenWithEnter: tokenWithEnter
  })));

  // >>> Render
  var renderNode;

  // Render raw
  if (customizeRawInputElement) {
    renderNode = selectorNode;
  } else {
    renderNode = /*#__PURE__*/React.createElement("div", (0, _extends2.default)({
      className: mergedClassName
    }, domProps, {
      ref: containerRef,
      onMouseDown: onInternalMouseDown,
      onKeyDown: onInternalKeyDown,
      onKeyUp: onInternalKeyUp,
      onFocus: onContainerFocus,
      onBlur: onContainerBlur
    }), mockFocused && !mergedOpen && /*#__PURE__*/React.createElement("span", {
      style: {
        width: 0,
        height: 0,
        position: 'absolute',
        overflow: 'hidden',
        opacity: 0
      },
      "aria-live": "polite"
    }, "".concat(displayValues.map(function (_ref) {
      var label = _ref.label,
        value = _ref.value;
      return ['number', 'string'].includes((0, _typeof2.default)(label)) ? label : value;
    }).join(', '))), selectorNode, arrowNode, clearNode);
  }
  return /*#__PURE__*/React.createElement(_useBaseProps.BaseSelectContext.Provider, {
    value: baseSelectContext
  }, renderNode);
});

// Set display name for dev
if (false) {}
var _default = BaseSelect;
exports["default"] = _default;

/***/ }),

/***/ 91416:
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
/* istanbul ignore file */

/** This is a placeholder, not real render in dom */
var OptGroup = function OptGroup() {
  return null;
};
OptGroup.isSelectOptGroup = true;
var _default = OptGroup;
exports["default"] = _default;

/***/ }),

/***/ 4974:
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
/* istanbul ignore file */

/** This is a placeholder, not real render in dom */
var Option = function Option() {
  return null;
};
Option.isSelectOption = true;
var _default = Option;
exports["default"] = _default;

/***/ }),

/***/ 63385:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var _interopRequireDefault = __webpack_require__(92439);
var _typeof = __webpack_require__(67236);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _defineProperty2 = _interopRequireDefault(__webpack_require__(513));
var _objectWithoutProperties2 = _interopRequireDefault(__webpack_require__(14498));
var _extends2 = _interopRequireDefault(__webpack_require__(43259));
var _toConsumableArray2 = _interopRequireDefault(__webpack_require__(42798));
var _slicedToArray2 = _interopRequireDefault(__webpack_require__(16522));
var _classnames = _interopRequireDefault(__webpack_require__(89367));
var _useMemo = _interopRequireDefault(__webpack_require__(33580));
var _KeyCode = _interopRequireDefault(__webpack_require__(81390));
var _omit = _interopRequireDefault(__webpack_require__(63007));
var _pickAttrs = _interopRequireDefault(__webpack_require__(69392));
var _rcVirtualList = _interopRequireDefault(__webpack_require__(56927));
var React = _interopRequireWildcard(__webpack_require__(18038));
var _useBaseProps2 = _interopRequireDefault(__webpack_require__(68084));
var _SelectContext = _interopRequireDefault(__webpack_require__(98740));
var _TransBtn = _interopRequireDefault(__webpack_require__(57438));
var _platformUtil = __webpack_require__(49750);
var _excluded = ["disabled", "title", "children", "style", "className"];
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function isTitleType(content) {
  return typeof content === 'string' || typeof content === 'number';
}

/**
 * Using virtual list of option display.
 * Will fallback to dom if use customize render.
 */
var OptionList = function OptionList(_, ref) {
  var _useBaseProps = (0, _useBaseProps2.default)(),
    prefixCls = _useBaseProps.prefixCls,
    id = _useBaseProps.id,
    open = _useBaseProps.open,
    multiple = _useBaseProps.multiple,
    mode = _useBaseProps.mode,
    searchValue = _useBaseProps.searchValue,
    toggleOpen = _useBaseProps.toggleOpen,
    notFoundContent = _useBaseProps.notFoundContent,
    onPopupScroll = _useBaseProps.onPopupScroll;
  var _React$useContext = React.useContext(_SelectContext.default),
    flattenOptions = _React$useContext.flattenOptions,
    onActiveValue = _React$useContext.onActiveValue,
    defaultActiveFirstOption = _React$useContext.defaultActiveFirstOption,
    onSelect = _React$useContext.onSelect,
    menuItemSelectedIcon = _React$useContext.menuItemSelectedIcon,
    rawValues = _React$useContext.rawValues,
    fieldNames = _React$useContext.fieldNames,
    virtual = _React$useContext.virtual,
    direction = _React$useContext.direction,
    listHeight = _React$useContext.listHeight,
    listItemHeight = _React$useContext.listItemHeight;
  var itemPrefixCls = "".concat(prefixCls, "-item");
  var memoFlattenOptions = (0, _useMemo.default)(function () {
    return flattenOptions;
  }, [open, flattenOptions], function (prev, next) {
    return next[0] && prev[1] !== next[1];
  });

  // =========================== List ===========================
  var listRef = React.useRef(null);
  var onListMouseDown = function onListMouseDown(event) {
    event.preventDefault();
  };
  var scrollIntoView = function scrollIntoView(args) {
    if (listRef.current) {
      listRef.current.scrollTo(typeof args === 'number' ? {
        index: args
      } : args);
    }
  };

  // ========================== Active ==========================
  var getEnabledActiveIndex = function getEnabledActiveIndex(index) {
    var offset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
    var len = memoFlattenOptions.length;
    for (var i = 0; i < len; i += 1) {
      var current = (index + i * offset + len) % len;
      var _memoFlattenOptions$c = memoFlattenOptions[current],
        group = _memoFlattenOptions$c.group,
        data = _memoFlattenOptions$c.data;
      if (!group && !data.disabled) {
        return current;
      }
    }
    return -1;
  };
  var _React$useState = React.useState(function () {
      return getEnabledActiveIndex(0);
    }),
    _React$useState2 = (0, _slicedToArray2.default)(_React$useState, 2),
    activeIndex = _React$useState2[0],
    setActiveIndex = _React$useState2[1];
  var setActive = function setActive(index) {
    var fromKeyboard = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    setActiveIndex(index);
    var info = {
      source: fromKeyboard ? 'keyboard' : 'mouse'
    };

    // Trigger active event
    var flattenItem = memoFlattenOptions[index];
    if (!flattenItem) {
      onActiveValue(null, -1, info);
      return;
    }
    onActiveValue(flattenItem.value, index, info);
  };

  // Auto active first item when list length or searchValue changed
  (0, React.useEffect)(function () {
    setActive(defaultActiveFirstOption !== false ? getEnabledActiveIndex(0) : -1);
  }, [memoFlattenOptions.length, searchValue]);

  // https://github.com/ant-design/ant-design/issues/34975
  var isSelected = React.useCallback(function (value) {
    return rawValues.has(value) && mode !== 'combobox';
  }, [mode, (0, _toConsumableArray2.default)(rawValues).toString(), rawValues.size]);

  // Auto scroll to item position in single mode
  (0, React.useEffect)(function () {
    /**
     * React will skip `onChange` when component update.
     * `setActive` function will call root accessibility state update which makes re-render.
     * So we need to delay to let Input component trigger onChange first.
     */
    var timeoutId = setTimeout(function () {
      if (!multiple && open && rawValues.size === 1) {
        var value = Array.from(rawValues)[0];
        var index = memoFlattenOptions.findIndex(function (_ref) {
          var data = _ref.data;
          return data.value === value;
        });
        if (index !== -1) {
          setActive(index);
          scrollIntoView(index);
        }
      }
    });

    // Force trigger scrollbar visible when open
    if (open) {
      var _listRef$current;
      (_listRef$current = listRef.current) === null || _listRef$current === void 0 ? void 0 : _listRef$current.scrollTo(undefined);
    }
    return function () {
      return clearTimeout(timeoutId);
    };
  }, [open, searchValue, flattenOptions.length]);

  // ========================== Values ==========================
  var onSelectValue = function onSelectValue(value) {
    if (value !== undefined) {
      onSelect(value, {
        selected: !rawValues.has(value)
      });
    }

    // Single mode should always close by select
    if (!multiple) {
      toggleOpen(false);
    }
  };

  // ========================= Keyboard =========================
  React.useImperativeHandle(ref, function () {
    return {
      onKeyDown: function onKeyDown(event) {
        var which = event.which,
          ctrlKey = event.ctrlKey;
        switch (which) {
          // >>> Arrow keys & ctrl + n/p on Mac
          case _KeyCode.default.N:
          case _KeyCode.default.P:
          case _KeyCode.default.UP:
          case _KeyCode.default.DOWN:
            {
              var offset = 0;
              if (which === _KeyCode.default.UP) {
                offset = -1;
              } else if (which === _KeyCode.default.DOWN) {
                offset = 1;
              } else if ((0, _platformUtil.isPlatformMac)() && ctrlKey) {
                if (which === _KeyCode.default.N) {
                  offset = 1;
                } else if (which === _KeyCode.default.P) {
                  offset = -1;
                }
              }
              if (offset !== 0) {
                var nextActiveIndex = getEnabledActiveIndex(activeIndex + offset, offset);
                scrollIntoView(nextActiveIndex);
                setActive(nextActiveIndex, true);
              }
              break;
            }

          // >>> Select
          case _KeyCode.default.ENTER:
            {
              // value
              var item = memoFlattenOptions[activeIndex];
              if (item && !item.data.disabled) {
                onSelectValue(item.value);
              } else {
                onSelectValue(undefined);
              }
              if (open) {
                event.preventDefault();
              }
              break;
            }

          // >>> Close
          case _KeyCode.default.ESC:
            {
              toggleOpen(false);
              if (open) {
                event.stopPropagation();
              }
            }
        }
      },
      onKeyUp: function onKeyUp() {},
      scrollTo: function scrollTo(index) {
        scrollIntoView(index);
      }
    };
  });

  // ========================== Render ==========================
  if (memoFlattenOptions.length === 0) {
    return /*#__PURE__*/React.createElement("div", {
      role: "listbox",
      id: "".concat(id, "_list"),
      className: "".concat(itemPrefixCls, "-empty"),
      onMouseDown: onListMouseDown
    }, notFoundContent);
  }
  var omitFieldNameList = Object.keys(fieldNames).map(function (key) {
    return fieldNames[key];
  });
  var getLabel = function getLabel(item) {
    return item.label;
  };
  function getItemAriaProps(item, index) {
    var group = item.group;
    return {
      role: group ? 'presentation' : 'option',
      id: "".concat(id, "_list_").concat(index)
    };
  }
  var renderItem = function renderItem(index) {
    var item = memoFlattenOptions[index];
    if (!item) return null;
    var itemData = item.data || {};
    var value = itemData.value;
    var group = item.group;
    var attrs = (0, _pickAttrs.default)(itemData, true);
    var mergedLabel = getLabel(item);
    return item ? /*#__PURE__*/React.createElement("div", (0, _extends2.default)({
      "aria-label": typeof mergedLabel === 'string' && !group ? mergedLabel : null
    }, attrs, {
      key: index
    }, getItemAriaProps(item, index), {
      "aria-selected": isSelected(value)
    }), value) : null;
  };
  var a11yProps = {
    role: 'listbox',
    id: "".concat(id, "_list")
  };
  return /*#__PURE__*/React.createElement(React.Fragment, null, virtual && /*#__PURE__*/React.createElement("div", (0, _extends2.default)({}, a11yProps, {
    style: {
      height: 0,
      width: 0,
      overflow: 'hidden'
    }
  }), renderItem(activeIndex - 1), renderItem(activeIndex), renderItem(activeIndex + 1)), /*#__PURE__*/React.createElement(_rcVirtualList.default, {
    itemKey: "key",
    ref: listRef,
    data: memoFlattenOptions,
    height: listHeight,
    itemHeight: listItemHeight,
    fullHeight: false,
    onMouseDown: onListMouseDown,
    onScroll: onPopupScroll,
    virtual: virtual,
    direction: direction,
    innerProps: virtual ? null : a11yProps
  }, function (item, itemIndex) {
    var _classNames;
    var group = item.group,
      groupOption = item.groupOption,
      data = item.data,
      label = item.label,
      value = item.value;
    var key = data.key;

    // Group
    if (group) {
      var _data$title;
      var groupTitle = (_data$title = data.title) !== null && _data$title !== void 0 ? _data$title : isTitleType(label) ? label.toString() : undefined;
      return /*#__PURE__*/React.createElement("div", {
        className: (0, _classnames.default)(itemPrefixCls, "".concat(itemPrefixCls, "-group")),
        title: groupTitle
      }, label !== undefined ? label : key);
    }
    var disabled = data.disabled,
      title = data.title,
      children = data.children,
      style = data.style,
      className = data.className,
      otherProps = (0, _objectWithoutProperties2.default)(data, _excluded);
    var passedProps = (0, _omit.default)(otherProps, omitFieldNameList);

    // Option
    var selected = isSelected(value);
    var optionPrefixCls = "".concat(itemPrefixCls, "-option");
    var optionClassName = (0, _classnames.default)(itemPrefixCls, optionPrefixCls, className, (_classNames = {}, (0, _defineProperty2.default)(_classNames, "".concat(optionPrefixCls, "-grouped"), groupOption), (0, _defineProperty2.default)(_classNames, "".concat(optionPrefixCls, "-active"), activeIndex === itemIndex && !disabled), (0, _defineProperty2.default)(_classNames, "".concat(optionPrefixCls, "-disabled"), disabled), (0, _defineProperty2.default)(_classNames, "".concat(optionPrefixCls, "-selected"), selected), _classNames));
    var mergedLabel = getLabel(item);
    var iconVisible = !menuItemSelectedIcon || typeof menuItemSelectedIcon === 'function' || selected;

    // https://github.com/ant-design/ant-design/issues/34145
    var content = typeof mergedLabel === 'number' ? mergedLabel : mergedLabel || value;
    // https://github.com/ant-design/ant-design/issues/26717
    var optionTitle = isTitleType(content) ? content.toString() : undefined;
    if (title !== undefined) {
      optionTitle = title;
    }
    return /*#__PURE__*/React.createElement("div", (0, _extends2.default)({}, (0, _pickAttrs.default)(passedProps), !virtual ? getItemAriaProps(item, itemIndex) : {}, {
      "aria-selected": selected,
      className: optionClassName,
      title: optionTitle,
      onMouseMove: function onMouseMove() {
        if (activeIndex === itemIndex || disabled) {
          return;
        }
        setActive(itemIndex);
      },
      onClick: function onClick() {
        if (!disabled) {
          onSelectValue(value);
        }
      },
      style: style
    }), /*#__PURE__*/React.createElement("div", {
      className: "".concat(optionPrefixCls, "-content")
    }, content), /*#__PURE__*/React.isValidElement(menuItemSelectedIcon) || selected, iconVisible && /*#__PURE__*/React.createElement(_TransBtn.default, {
      className: "".concat(itemPrefixCls, "-option-state"),
      customizeIcon: menuItemSelectedIcon,
      customizeIconProps: {
        isSelected: selected
      }
    }, selected ? '✓' : null));
  }));
};
var RefOptionList = /*#__PURE__*/React.forwardRef(OptionList);
RefOptionList.displayName = 'OptionList';
var _default = RefOptionList;
exports["default"] = _default;

/***/ }),

/***/ 2312:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var _interopRequireDefault = __webpack_require__(92439);
var _typeof3 = __webpack_require__(67236);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _extends2 = _interopRequireDefault(__webpack_require__(43259));
var _toConsumableArray2 = _interopRequireDefault(__webpack_require__(42798));
var _defineProperty2 = _interopRequireDefault(__webpack_require__(513));
var _objectSpread2 = _interopRequireDefault(__webpack_require__(89687));
var _slicedToArray2 = _interopRequireDefault(__webpack_require__(16522));
var _objectWithoutProperties2 = _interopRequireDefault(__webpack_require__(14498));
var _typeof2 = _interopRequireDefault(__webpack_require__(67236));
var _useMergedState5 = _interopRequireDefault(__webpack_require__(56146));
var _warning = _interopRequireDefault(__webpack_require__(32038));
var React = _interopRequireWildcard(__webpack_require__(18038));
var _BaseSelect = _interopRequireWildcard(__webpack_require__(24061));
var _useCache3 = _interopRequireDefault(__webpack_require__(15386));
var _useFilterOptions = _interopRequireDefault(__webpack_require__(25893));
var _useId = _interopRequireDefault(__webpack_require__(86101));
var _useOptions = _interopRequireDefault(__webpack_require__(87997));
var _useRefFunc = _interopRequireDefault(__webpack_require__(43374));
var _OptGroup = _interopRequireDefault(__webpack_require__(91416));
var _Option = _interopRequireDefault(__webpack_require__(4974));
var _OptionList = _interopRequireDefault(__webpack_require__(63385));
var _SelectContext = _interopRequireDefault(__webpack_require__(98740));
var _commonUtil = __webpack_require__(15438);
var _valueUtil = __webpack_require__(20724);
var _warningPropsUtil = _interopRequireWildcard(__webpack_require__(93601));
var _excluded = ["id", "mode", "prefixCls", "backfill", "fieldNames", "inputValue", "searchValue", "onSearch", "autoClearSearchValue", "onSelect", "onDeselect", "dropdownMatchSelectWidth", "filterOption", "filterSort", "optionFilterProp", "optionLabelProp", "options", "children", "defaultActiveFirstOption", "menuItemSelectedIcon", "virtual", "direction", "listHeight", "listItemHeight", "value", "defaultValue", "labelInValue", "onChange"];
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof3(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var OMIT_DOM_PROPS = ['inputValue'];
function isRawValue(value) {
  return !value || (0, _typeof2.default)(value) !== 'object';
}
var Select = /*#__PURE__*/React.forwardRef(function (props, ref) {
  var id = props.id,
    mode = props.mode,
    _props$prefixCls = props.prefixCls,
    prefixCls = _props$prefixCls === void 0 ? 'rc-select' : _props$prefixCls,
    backfill = props.backfill,
    fieldNames = props.fieldNames,
    inputValue = props.inputValue,
    searchValue = props.searchValue,
    onSearch = props.onSearch,
    _props$autoClearSearc = props.autoClearSearchValue,
    autoClearSearchValue = _props$autoClearSearc === void 0 ? true : _props$autoClearSearc,
    onSelect = props.onSelect,
    onDeselect = props.onDeselect,
    _props$dropdownMatchS = props.dropdownMatchSelectWidth,
    dropdownMatchSelectWidth = _props$dropdownMatchS === void 0 ? true : _props$dropdownMatchS,
    filterOption = props.filterOption,
    filterSort = props.filterSort,
    optionFilterProp = props.optionFilterProp,
    optionLabelProp = props.optionLabelProp,
    options = props.options,
    children = props.children,
    defaultActiveFirstOption = props.defaultActiveFirstOption,
    menuItemSelectedIcon = props.menuItemSelectedIcon,
    virtual = props.virtual,
    direction = props.direction,
    _props$listHeight = props.listHeight,
    listHeight = _props$listHeight === void 0 ? 200 : _props$listHeight,
    _props$listItemHeight = props.listItemHeight,
    listItemHeight = _props$listItemHeight === void 0 ? 20 : _props$listItemHeight,
    value = props.value,
    defaultValue = props.defaultValue,
    labelInValue = props.labelInValue,
    onChange = props.onChange,
    restProps = (0, _objectWithoutProperties2.default)(props, _excluded);
  var mergedId = (0, _useId.default)(id);
  var multiple = (0, _BaseSelect.isMultiple)(mode);
  var childrenAsData = !!(!options && children);
  var mergedFilterOption = React.useMemo(function () {
    if (filterOption === undefined && mode === 'combobox') {
      return false;
    }
    return filterOption;
  }, [filterOption, mode]);

  // ========================= FieldNames =========================
  var mergedFieldNames = React.useMemo(function () {
    return (0, _valueUtil.fillFieldNames)(fieldNames, childrenAsData);
  }, /* eslint-disable react-hooks/exhaustive-deps */
  [
  // We stringify fieldNames to avoid unnecessary re-renders.
  JSON.stringify(fieldNames), childrenAsData]
  /* eslint-enable react-hooks/exhaustive-deps */);

  // =========================== Search ===========================
  var _useMergedState = (0, _useMergedState5.default)('', {
      value: searchValue !== undefined ? searchValue : inputValue,
      postState: function postState(search) {
        return search || '';
      }
    }),
    _useMergedState2 = (0, _slicedToArray2.default)(_useMergedState, 2),
    mergedSearchValue = _useMergedState2[0],
    setSearchValue = _useMergedState2[1];

  // =========================== Option ===========================
  var parsedOptions = (0, _useOptions.default)(options, children, mergedFieldNames, optionFilterProp, optionLabelProp);
  var valueOptions = parsedOptions.valueOptions,
    labelOptions = parsedOptions.labelOptions,
    mergedOptions = parsedOptions.options;

  // ========================= Wrap Value =========================
  var convert2LabelValues = React.useCallback(function (draftValues) {
    // Convert to array
    var valueList = (0, _commonUtil.toArray)(draftValues);

    // Convert to labelInValue type
    return valueList.map(function (val) {
      var rawValue;
      var rawLabel;
      var rawKey;
      var rawDisabled;
      var rawTitle;

      // Fill label & value
      if (isRawValue(val)) {
        rawValue = val;
      } else {
        var _val$value;
        rawKey = val.key;
        rawLabel = val.label;
        rawValue = (_val$value = val.value) !== null && _val$value !== void 0 ? _val$value : rawKey;
      }
      var option = valueOptions.get(rawValue);
      if (option) {
        var _option$key;
        // Fill missing props
        if (rawLabel === undefined) rawLabel = option === null || option === void 0 ? void 0 : option[optionLabelProp || mergedFieldNames.label];
        if (rawKey === undefined) rawKey = (_option$key = option === null || option === void 0 ? void 0 : option.key) !== null && _option$key !== void 0 ? _option$key : rawValue;
        rawDisabled = option === null || option === void 0 ? void 0 : option.disabled;
        rawTitle = option === null || option === void 0 ? void 0 : option.title;

        // Warning if label not same as provided
        if (false) { var optionLabel; }
      }
      return {
        label: rawLabel,
        value: rawValue,
        key: rawKey,
        disabled: rawDisabled,
        title: rawTitle
      };
    });
  }, [mergedFieldNames, optionLabelProp, valueOptions]);

  // =========================== Values ===========================
  var _useMergedState3 = (0, _useMergedState5.default)(defaultValue, {
      value: value
    }),
    _useMergedState4 = (0, _slicedToArray2.default)(_useMergedState3, 2),
    internalValue = _useMergedState4[0],
    setInternalValue = _useMergedState4[1];

  // Merged value with LabelValueType
  var rawLabeledValues = React.useMemo(function () {
    var _values$;
    var values = convert2LabelValues(internalValue);

    // combobox no need save value when it's no value
    if (mode === 'combobox' && !((_values$ = values[0]) !== null && _values$ !== void 0 && _values$.value)) {
      return [];
    }
    return values;
  }, [internalValue, convert2LabelValues, mode]);

  // Fill label with cache to avoid option remove
  var _useCache = (0, _useCache3.default)(rawLabeledValues, valueOptions),
    _useCache2 = (0, _slicedToArray2.default)(_useCache, 2),
    mergedValues = _useCache2[0],
    getMixedOption = _useCache2[1];
  var displayValues = React.useMemo(function () {
    // `null` need show as placeholder instead
    // https://github.com/ant-design/ant-design/issues/25057
    if (!mode && mergedValues.length === 1) {
      var firstValue = mergedValues[0];
      if (firstValue.value === null && (firstValue.label === null || firstValue.label === undefined)) {
        return [];
      }
    }
    return mergedValues.map(function (item) {
      var _item$label;
      return (0, _objectSpread2.default)((0, _objectSpread2.default)({}, item), {}, {
        label: (_item$label = item.label) !== null && _item$label !== void 0 ? _item$label : item.value
      });
    });
  }, [mode, mergedValues]);

  /** Convert `displayValues` to raw value type set */
  var rawValues = React.useMemo(function () {
    return new Set(mergedValues.map(function (val) {
      return val.value;
    }));
  }, [mergedValues]);
  React.useEffect(function () {
    if (mode === 'combobox') {
      var _mergedValues$;
      var strValue = (_mergedValues$ = mergedValues[0]) === null || _mergedValues$ === void 0 ? void 0 : _mergedValues$.value;
      setSearchValue((0, _commonUtil.hasValue)(strValue) ? String(strValue) : '');
    }
  }, [mergedValues]);

  // ======================= Display Option =======================
  // Create a placeholder item if not exist in `options`
  var createTagOption = (0, _useRefFunc.default)(function (val, label) {
    var _ref;
    var mergedLabel = label !== null && label !== void 0 ? label : val;
    return _ref = {}, (0, _defineProperty2.default)(_ref, mergedFieldNames.value, val), (0, _defineProperty2.default)(_ref, mergedFieldNames.label, mergedLabel), _ref;
  });

  // Fill tag as option if mode is `tags`
  var filledTagOptions = React.useMemo(function () {
    if (mode !== 'tags') {
      return mergedOptions;
    }

    // >>> Tag mode
    var cloneOptions = (0, _toConsumableArray2.default)(mergedOptions);

    // Check if value exist in options (include new patch item)
    var existOptions = function existOptions(val) {
      return valueOptions.has(val);
    };

    // Fill current value as option
    (0, _toConsumableArray2.default)(mergedValues).sort(function (a, b) {
      return a.value < b.value ? -1 : 1;
    }).forEach(function (item) {
      var val = item.value;
      if (!existOptions(val)) {
        cloneOptions.push(createTagOption(val, item.label));
      }
    });
    return cloneOptions;
  }, [createTagOption, mergedOptions, valueOptions, mergedValues, mode]);
  var filteredOptions = (0, _useFilterOptions.default)(filledTagOptions, mergedFieldNames, mergedSearchValue, mergedFilterOption, optionFilterProp);

  // Fill options with search value if needed
  var filledSearchOptions = React.useMemo(function () {
    if (mode !== 'tags' || !mergedSearchValue || filteredOptions.some(function (item) {
      return item[optionFilterProp || 'value'] === mergedSearchValue;
    })) {
      return filteredOptions;
    }

    // Fill search value as option
    return [createTagOption(mergedSearchValue)].concat((0, _toConsumableArray2.default)(filteredOptions));
  }, [createTagOption, optionFilterProp, mode, filteredOptions, mergedSearchValue]);
  var orderedFilteredOptions = React.useMemo(function () {
    if (!filterSort) {
      return filledSearchOptions;
    }
    return (0, _toConsumableArray2.default)(filledSearchOptions).sort(function (a, b) {
      return filterSort(a, b);
    });
  }, [filledSearchOptions, filterSort]);
  var displayOptions = React.useMemo(function () {
    return (0, _valueUtil.flattenOptions)(orderedFilteredOptions, {
      fieldNames: mergedFieldNames,
      childrenAsData: childrenAsData
    });
  }, [orderedFilteredOptions, mergedFieldNames, childrenAsData]);

  // =========================== Change ===========================
  var triggerChange = function triggerChange(values) {
    var labeledValues = convert2LabelValues(values);
    setInternalValue(labeledValues);
    if (onChange && (
    // Trigger event only when value changed
    labeledValues.length !== mergedValues.length || labeledValues.some(function (newVal, index) {
      var _mergedValues$index;
      return ((_mergedValues$index = mergedValues[index]) === null || _mergedValues$index === void 0 ? void 0 : _mergedValues$index.value) !== (newVal === null || newVal === void 0 ? void 0 : newVal.value);
    }))) {
      var returnValues = labelInValue ? labeledValues : labeledValues.map(function (v) {
        return v.value;
      });
      var returnOptions = labeledValues.map(function (v) {
        return (0, _valueUtil.injectPropsWithOption)(getMixedOption(v.value));
      });
      onChange(
      // Value
      multiple ? returnValues : returnValues[0],
      // Option
      multiple ? returnOptions : returnOptions[0]);
    }
  };

  // ======================= Accessibility ========================
  var _React$useState = React.useState(null),
    _React$useState2 = (0, _slicedToArray2.default)(_React$useState, 2),
    activeValue = _React$useState2[0],
    setActiveValue = _React$useState2[1];
  var _React$useState3 = React.useState(0),
    _React$useState4 = (0, _slicedToArray2.default)(_React$useState3, 2),
    accessibilityIndex = _React$useState4[0],
    setAccessibilityIndex = _React$useState4[1];
  var mergedDefaultActiveFirstOption = defaultActiveFirstOption !== undefined ? defaultActiveFirstOption : mode !== 'combobox';
  var onActiveValue = React.useCallback(function (active, index) {
    var _ref2 = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
      _ref2$source = _ref2.source,
      source = _ref2$source === void 0 ? 'keyboard' : _ref2$source;
    setAccessibilityIndex(index);
    if (backfill && mode === 'combobox' && active !== null && source === 'keyboard') {
      setActiveValue(String(active));
    }
  }, [backfill, mode]);

  // ========================= OptionList =========================
  var triggerSelect = function triggerSelect(val, selected, type) {
    var getSelectEnt = function getSelectEnt() {
      var _option$key2;
      var option = getMixedOption(val);
      return [labelInValue ? {
        label: option === null || option === void 0 ? void 0 : option[mergedFieldNames.label],
        value: val,
        key: (_option$key2 = option === null || option === void 0 ? void 0 : option.key) !== null && _option$key2 !== void 0 ? _option$key2 : val
      } : val, (0, _valueUtil.injectPropsWithOption)(option)];
    };
    if (selected && onSelect) {
      var _getSelectEnt = getSelectEnt(),
        _getSelectEnt2 = (0, _slicedToArray2.default)(_getSelectEnt, 2),
        wrappedValue = _getSelectEnt2[0],
        _option = _getSelectEnt2[1];
      onSelect(wrappedValue, _option);
    } else if (!selected && onDeselect && type !== 'clear') {
      var _getSelectEnt3 = getSelectEnt(),
        _getSelectEnt4 = (0, _slicedToArray2.default)(_getSelectEnt3, 2),
        _wrappedValue = _getSelectEnt4[0],
        _option2 = _getSelectEnt4[1];
      onDeselect(_wrappedValue, _option2);
    }
  };

  // Used for OptionList selection
  var onInternalSelect = (0, _useRefFunc.default)(function (val, info) {
    var cloneValues;

    // Single mode always trigger select only with option list
    var mergedSelect = multiple ? info.selected : true;
    if (mergedSelect) {
      cloneValues = multiple ? [].concat((0, _toConsumableArray2.default)(mergedValues), [val]) : [val];
    } else {
      cloneValues = mergedValues.filter(function (v) {
        return v.value !== val;
      });
    }
    triggerChange(cloneValues);
    triggerSelect(val, mergedSelect);

    // Clean search value if single or configured
    if (mode === 'combobox') {
      // setSearchValue(String(val));
      setActiveValue('');
    } else if (!_BaseSelect.isMultiple || autoClearSearchValue) {
      setSearchValue('');
      setActiveValue('');
    }
  });

  // ======================= Display Change =======================
  // BaseSelect display values change
  var onDisplayValuesChange = function onDisplayValuesChange(nextValues, info) {
    triggerChange(nextValues);
    var type = info.type,
      values = info.values;
    if (type === 'remove' || type === 'clear') {
      values.forEach(function (item) {
        triggerSelect(item.value, false, type);
      });
    }
  };

  // =========================== Search ===========================
  var onInternalSearch = function onInternalSearch(searchText, info) {
    setSearchValue(searchText);
    setActiveValue(null);

    // [Submit] Tag mode should flush input
    if (info.source === 'submit') {
      var formatted = (searchText || '').trim();
      // prevent empty tags from appearing when you click the Enter button
      if (formatted) {
        var newRawValues = Array.from(new Set([].concat((0, _toConsumableArray2.default)(rawValues), [formatted])));
        triggerChange(newRawValues);
        triggerSelect(formatted, true);
        setSearchValue('');
      }
      return;
    }
    if (info.source !== 'blur') {
      if (mode === 'combobox') {
        triggerChange(searchText);
      }
      onSearch === null || onSearch === void 0 ? void 0 : onSearch(searchText);
    }
  };
  var onInternalSearchSplit = function onInternalSearchSplit(words) {
    var patchValues = words;
    if (mode !== 'tags') {
      patchValues = words.map(function (word) {
        var opt = labelOptions.get(word);
        return opt === null || opt === void 0 ? void 0 : opt.value;
      }).filter(function (val) {
        return val !== undefined;
      });
    }
    var newRawValues = Array.from(new Set([].concat((0, _toConsumableArray2.default)(rawValues), (0, _toConsumableArray2.default)(patchValues))));
    triggerChange(newRawValues);
    newRawValues.forEach(function (newRawValue) {
      triggerSelect(newRawValue, true);
    });
  };

  // ========================== Context ===========================
  var selectContext = React.useMemo(function () {
    var realVirtual = virtual !== false && dropdownMatchSelectWidth !== false;
    return (0, _objectSpread2.default)((0, _objectSpread2.default)({}, parsedOptions), {}, {
      flattenOptions: displayOptions,
      onActiveValue: onActiveValue,
      defaultActiveFirstOption: mergedDefaultActiveFirstOption,
      onSelect: onInternalSelect,
      menuItemSelectedIcon: menuItemSelectedIcon,
      rawValues: rawValues,
      fieldNames: mergedFieldNames,
      virtual: realVirtual,
      direction: direction,
      listHeight: listHeight,
      listItemHeight: listItemHeight,
      childrenAsData: childrenAsData
    });
  }, [parsedOptions, displayOptions, onActiveValue, mergedDefaultActiveFirstOption, onInternalSelect, menuItemSelectedIcon, rawValues, mergedFieldNames, virtual, dropdownMatchSelectWidth, listHeight, listItemHeight, childrenAsData]);

  // ========================== Warning ===========================
  if (false) {}

  // ==============================================================
  // ==                          Render                          ==
  // ==============================================================
  return /*#__PURE__*/React.createElement(_SelectContext.default.Provider, {
    value: selectContext
  }, /*#__PURE__*/React.createElement(_BaseSelect.default, (0, _extends2.default)({}, restProps, {
    // >>> MISC
    id: mergedId,
    prefixCls: prefixCls,
    ref: ref,
    omitDomProps: OMIT_DOM_PROPS,
    mode: mode
    // >>> Values
    ,
    displayValues: displayValues,
    onDisplayValuesChange: onDisplayValuesChange
    // >>> Trigger
    ,
    direction: direction
    // >>> Search
    ,
    searchValue: mergedSearchValue,
    onSearch: onInternalSearch,
    autoClearSearchValue: autoClearSearchValue,
    onSearchSplit: onInternalSearchSplit,
    dropdownMatchSelectWidth: dropdownMatchSelectWidth
    // >>> OptionList
    ,
    OptionList: _OptionList.default,
    emptyOptions: !displayOptions.length
    // >>> Accessibility
    ,
    activeValue: activeValue,
    activeDescendantId: "".concat(mergedId, "_list_").concat(accessibilityIndex)
  })));
});
if (false) {}
var TypedSelect = Select;
TypedSelect.Option = _Option.default;
TypedSelect.OptGroup = _OptGroup.default;
var _default = TypedSelect;
exports["default"] = _default;

/***/ }),

/***/ 98740:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var _typeof = __webpack_require__(67236);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var React = _interopRequireWildcard(__webpack_require__(18038));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var SelectContext = /*#__PURE__*/React.createContext(null);
var _default = SelectContext;
exports["default"] = _default;

/***/ }),

/***/ 2653:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var _interopRequireDefault = __webpack_require__(92439);
var _typeof = __webpack_require__(67236);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _extends2 = _interopRequireDefault(__webpack_require__(43259));
var _defineProperty2 = _interopRequireDefault(__webpack_require__(513));
var _objectSpread2 = _interopRequireDefault(__webpack_require__(89687));
var _objectWithoutProperties2 = _interopRequireDefault(__webpack_require__(14498));
var _trigger = _interopRequireDefault(__webpack_require__(71042));
var _classnames = _interopRequireDefault(__webpack_require__(89367));
var React = _interopRequireWildcard(__webpack_require__(18038));
var _excluded = ["prefixCls", "disabled", "visible", "children", "popupElement", "containerWidth", "animation", "transitionName", "dropdownStyle", "dropdownClassName", "direction", "placement", "builtinPlacements", "dropdownMatchSelectWidth", "dropdownRender", "dropdownAlign", "getPopupContainer", "empty", "getTriggerDOMNode", "onPopupVisibleChange", "onPopupMouseEnter"];
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var getBuiltInPlacements = function getBuiltInPlacements(dropdownMatchSelectWidth) {
  // Enable horizontal overflow auto-adjustment when a custom dropdown width is provided
  var adjustX = dropdownMatchSelectWidth === true ? 0 : 1;
  return {
    bottomLeft: {
      points: ['tl', 'bl'],
      offset: [0, 4],
      overflow: {
        adjustX: adjustX,
        adjustY: 1
      },
      htmlRegion: 'scroll'
    },
    bottomRight: {
      points: ['tr', 'br'],
      offset: [0, 4],
      overflow: {
        adjustX: adjustX,
        adjustY: 1
      },
      htmlRegion: 'scroll'
    },
    topLeft: {
      points: ['bl', 'tl'],
      offset: [0, -4],
      overflow: {
        adjustX: adjustX,
        adjustY: 1
      },
      htmlRegion: 'scroll'
    },
    topRight: {
      points: ['br', 'tr'],
      offset: [0, -4],
      overflow: {
        adjustX: adjustX,
        adjustY: 1
      },
      htmlRegion: 'scroll'
    }
  };
};
var SelectTrigger = function SelectTrigger(props, ref) {
  var prefixCls = props.prefixCls,
    disabled = props.disabled,
    visible = props.visible,
    children = props.children,
    popupElement = props.popupElement,
    containerWidth = props.containerWidth,
    animation = props.animation,
    transitionName = props.transitionName,
    dropdownStyle = props.dropdownStyle,
    dropdownClassName = props.dropdownClassName,
    _props$direction = props.direction,
    direction = _props$direction === void 0 ? 'ltr' : _props$direction,
    placement = props.placement,
    builtinPlacements = props.builtinPlacements,
    dropdownMatchSelectWidth = props.dropdownMatchSelectWidth,
    dropdownRender = props.dropdownRender,
    dropdownAlign = props.dropdownAlign,
    getPopupContainer = props.getPopupContainer,
    empty = props.empty,
    getTriggerDOMNode = props.getTriggerDOMNode,
    onPopupVisibleChange = props.onPopupVisibleChange,
    onPopupMouseEnter = props.onPopupMouseEnter,
    restProps = (0, _objectWithoutProperties2.default)(props, _excluded);
  var dropdownPrefixCls = "".concat(prefixCls, "-dropdown");
  var popupNode = popupElement;
  if (dropdownRender) {
    popupNode = dropdownRender(popupElement);
  }
  var mergedBuiltinPlacements = React.useMemo(function () {
    return builtinPlacements || getBuiltInPlacements(dropdownMatchSelectWidth);
  }, [builtinPlacements, dropdownMatchSelectWidth]);

  // ===================== Motion ======================
  var mergedTransitionName = animation ? "".concat(dropdownPrefixCls, "-").concat(animation) : transitionName;

  // ======================= Ref =======================
  var popupRef = React.useRef(null);
  React.useImperativeHandle(ref, function () {
    return {
      getPopupElement: function getPopupElement() {
        return popupRef.current;
      }
    };
  });
  var popupStyle = (0, _objectSpread2.default)({
    minWidth: containerWidth
  }, dropdownStyle);
  if (typeof dropdownMatchSelectWidth === 'number') {
    popupStyle.width = dropdownMatchSelectWidth;
  } else if (dropdownMatchSelectWidth) {
    popupStyle.width = containerWidth;
  }
  return /*#__PURE__*/React.createElement(_trigger.default, (0, _extends2.default)({}, restProps, {
    showAction: onPopupVisibleChange ? ['click'] : [],
    hideAction: onPopupVisibleChange ? ['click'] : [],
    popupPlacement: placement || (direction === 'rtl' ? 'bottomRight' : 'bottomLeft'),
    builtinPlacements: mergedBuiltinPlacements,
    prefixCls: dropdownPrefixCls,
    popupTransitionName: mergedTransitionName,
    popup: /*#__PURE__*/React.createElement("div", {
      ref: popupRef,
      onMouseEnter: onPopupMouseEnter
    }, popupNode),
    popupAlign: dropdownAlign,
    popupVisible: visible,
    getPopupContainer: getPopupContainer,
    popupClassName: (0, _classnames.default)(dropdownClassName, (0, _defineProperty2.default)({}, "".concat(dropdownPrefixCls, "-empty"), empty)),
    popupStyle: popupStyle,
    getTriggerDOMNode: getTriggerDOMNode,
    onPopupVisibleChange: onPopupVisibleChange
  }), children);
};
var RefSelectTrigger = /*#__PURE__*/React.forwardRef(SelectTrigger);
RefSelectTrigger.displayName = 'SelectTrigger';
var _default = RefSelectTrigger;
exports["default"] = _default;

/***/ }),

/***/ 39085:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var _interopRequireDefault = __webpack_require__(92439);
var _typeof = __webpack_require__(67236);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _objectSpread2 = _interopRequireDefault(__webpack_require__(89687));
var React = _interopRequireWildcard(__webpack_require__(18038));
var _classnames = _interopRequireDefault(__webpack_require__(89367));
var _ref2 = __webpack_require__(310);
var _warning = __webpack_require__(32038);
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var Input = function Input(_ref, ref) {
  var _inputNode2, _inputNode2$props;
  var prefixCls = _ref.prefixCls,
    id = _ref.id,
    inputElement = _ref.inputElement,
    disabled = _ref.disabled,
    tabIndex = _ref.tabIndex,
    autoFocus = _ref.autoFocus,
    autoComplete = _ref.autoComplete,
    editable = _ref.editable,
    activeDescendantId = _ref.activeDescendantId,
    value = _ref.value,
    maxLength = _ref.maxLength,
    _onKeyDown = _ref.onKeyDown,
    _onMouseDown = _ref.onMouseDown,
    _onChange = _ref.onChange,
    onPaste = _ref.onPaste,
    _onCompositionStart = _ref.onCompositionStart,
    _onCompositionEnd = _ref.onCompositionEnd,
    open = _ref.open,
    attrs = _ref.attrs;
  var inputNode = inputElement || /*#__PURE__*/React.createElement("input", null);
  var _inputNode = inputNode,
    originRef = _inputNode.ref,
    originProps = _inputNode.props;
  var onOriginKeyDown = originProps.onKeyDown,
    onOriginChange = originProps.onChange,
    onOriginMouseDown = originProps.onMouseDown,
    onOriginCompositionStart = originProps.onCompositionStart,
    onOriginCompositionEnd = originProps.onCompositionEnd,
    style = originProps.style;
  (0, _warning.warning)(!('maxLength' in inputNode.props), "Passing 'maxLength' to input element directly may not work because input in BaseSelect is controlled.");
  inputNode = /*#__PURE__*/React.cloneElement(inputNode, (0, _objectSpread2.default)((0, _objectSpread2.default)((0, _objectSpread2.default)({
    type: 'search'
  }, originProps), {}, {
    // Override over origin props
    id: id,
    ref: (0, _ref2.composeRef)(ref, originRef),
    disabled: disabled,
    tabIndex: tabIndex,
    autoComplete: autoComplete || 'off',
    autoFocus: autoFocus,
    className: (0, _classnames.default)("".concat(prefixCls, "-selection-search-input"), (_inputNode2 = inputNode) === null || _inputNode2 === void 0 ? void 0 : (_inputNode2$props = _inputNode2.props) === null || _inputNode2$props === void 0 ? void 0 : _inputNode2$props.className),
    role: 'combobox',
    'aria-expanded': open,
    'aria-haspopup': 'listbox',
    'aria-owns': "".concat(id, "_list"),
    'aria-autocomplete': 'list',
    'aria-controls': "".concat(id, "_list"),
    'aria-activedescendant': activeDescendantId
  }, attrs), {}, {
    value: editable ? value : '',
    maxLength: maxLength,
    readOnly: !editable,
    unselectable: !editable ? 'on' : null,
    style: (0, _objectSpread2.default)((0, _objectSpread2.default)({}, style), {}, {
      opacity: editable ? null : 0
    }),
    onKeyDown: function onKeyDown(event) {
      _onKeyDown(event);
      if (onOriginKeyDown) {
        onOriginKeyDown(event);
      }
    },
    onMouseDown: function onMouseDown(event) {
      _onMouseDown(event);
      if (onOriginMouseDown) {
        onOriginMouseDown(event);
      }
    },
    onChange: function onChange(event) {
      _onChange(event);
      if (onOriginChange) {
        onOriginChange(event);
      }
    },
    onCompositionStart: function onCompositionStart(event) {
      _onCompositionStart(event);
      if (onOriginCompositionStart) {
        onOriginCompositionStart(event);
      }
    },
    onCompositionEnd: function onCompositionEnd(event) {
      _onCompositionEnd(event);
      if (onOriginCompositionEnd) {
        onOriginCompositionEnd(event);
      }
    },
    onPaste: onPaste
  }));
  return inputNode;
};
var RefInput = /*#__PURE__*/React.forwardRef(Input);
RefInput.displayName = 'Input';
var _default = RefInput;
exports["default"] = _default;

/***/ }),

/***/ 24274:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var _interopRequireDefault = __webpack_require__(92439);
var _typeof = __webpack_require__(67236);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _defineProperty2 = _interopRequireDefault(__webpack_require__(513));
var _slicedToArray2 = _interopRequireDefault(__webpack_require__(16522));
var React = _interopRequireWildcard(__webpack_require__(18038));
var _classnames = _interopRequireDefault(__webpack_require__(89367));
var _pickAttrs = _interopRequireDefault(__webpack_require__(69392));
var _rcOverflow = _interopRequireDefault(__webpack_require__(13667));
var _TransBtn = _interopRequireDefault(__webpack_require__(57438));
var _Input = _interopRequireDefault(__webpack_require__(39085));
var _useLayoutEffect = _interopRequireDefault(__webpack_require__(971));
var _commonUtil = __webpack_require__(15438);
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function itemKey(value) {
  var _value$key;
  return (_value$key = value.key) !== null && _value$key !== void 0 ? _value$key : value.value;
}
var onPreventMouseDown = function onPreventMouseDown(event) {
  event.preventDefault();
  event.stopPropagation();
};
var SelectSelector = function SelectSelector(props) {
  var id = props.id,
    prefixCls = props.prefixCls,
    values = props.values,
    open = props.open,
    searchValue = props.searchValue,
    autoClearSearchValue = props.autoClearSearchValue,
    inputRef = props.inputRef,
    placeholder = props.placeholder,
    disabled = props.disabled,
    mode = props.mode,
    showSearch = props.showSearch,
    autoFocus = props.autoFocus,
    autoComplete = props.autoComplete,
    activeDescendantId = props.activeDescendantId,
    tabIndex = props.tabIndex,
    removeIcon = props.removeIcon,
    maxTagCount = props.maxTagCount,
    maxTagTextLength = props.maxTagTextLength,
    _props$maxTagPlacehol = props.maxTagPlaceholder,
    maxTagPlaceholder = _props$maxTagPlacehol === void 0 ? function (omittedValues) {
      return "+ ".concat(omittedValues.length, " ...");
    } : _props$maxTagPlacehol,
    tagRender = props.tagRender,
    onToggleOpen = props.onToggleOpen,
    onRemove = props.onRemove,
    onInputChange = props.onInputChange,
    onInputPaste = props.onInputPaste,
    onInputKeyDown = props.onInputKeyDown,
    onInputMouseDown = props.onInputMouseDown,
    onInputCompositionStart = props.onInputCompositionStart,
    onInputCompositionEnd = props.onInputCompositionEnd;
  var measureRef = React.useRef(null);
  var _useState = (0, React.useState)(0),
    _useState2 = (0, _slicedToArray2.default)(_useState, 2),
    inputWidth = _useState2[0],
    setInputWidth = _useState2[1];
  var _useState3 = (0, React.useState)(false),
    _useState4 = (0, _slicedToArray2.default)(_useState3, 2),
    focused = _useState4[0],
    setFocused = _useState4[1];
  var selectionPrefixCls = "".concat(prefixCls, "-selection");

  // ===================== Search ======================
  var inputValue = open || mode === "multiple" && autoClearSearchValue === false || mode === 'tags' ? searchValue : '';
  var inputEditable = mode === 'tags' || mode === "multiple" && autoClearSearchValue === false || showSearch && (open || focused);

  // We measure width and set to the input immediately
  (0, _useLayoutEffect.default)(function () {
    setInputWidth(measureRef.current.scrollWidth);
  }, [inputValue]);

  // ===================== Render ======================
  // >>> Render Selector Node. Includes Item & Rest
  function defaultRenderSelector(item, content, itemDisabled, closable, onClose) {
    return /*#__PURE__*/React.createElement("span", {
      className: (0, _classnames.default)("".concat(selectionPrefixCls, "-item"), (0, _defineProperty2.default)({}, "".concat(selectionPrefixCls, "-item-disabled"), itemDisabled)),
      title: (0, _commonUtil.getTitle)(item)
    }, /*#__PURE__*/React.createElement("span", {
      className: "".concat(selectionPrefixCls, "-item-content")
    }, content), closable && /*#__PURE__*/React.createElement(_TransBtn.default, {
      className: "".concat(selectionPrefixCls, "-item-remove"),
      onMouseDown: onPreventMouseDown,
      onClick: onClose,
      customizeIcon: removeIcon
    }, "\xD7"));
  }
  function customizeRenderSelector(value, content, itemDisabled, closable, onClose) {
    var onMouseDown = function onMouseDown(e) {
      onPreventMouseDown(e);
      onToggleOpen(!open);
    };
    return /*#__PURE__*/React.createElement("span", {
      onMouseDown: onMouseDown
    }, tagRender({
      label: content,
      value: value,
      disabled: itemDisabled,
      closable: closable,
      onClose: onClose
    }));
  }
  function renderItem(valueItem) {
    var itemDisabled = valueItem.disabled,
      label = valueItem.label,
      value = valueItem.value;
    var closable = !disabled && !itemDisabled;
    var displayLabel = label;
    if (typeof maxTagTextLength === 'number') {
      if (typeof label === 'string' || typeof label === 'number') {
        var strLabel = String(displayLabel);
        if (strLabel.length > maxTagTextLength) {
          displayLabel = "".concat(strLabel.slice(0, maxTagTextLength), "...");
        }
      }
    }
    var onClose = function onClose(event) {
      if (event) event.stopPropagation();
      onRemove(valueItem);
    };
    return typeof tagRender === 'function' ? customizeRenderSelector(value, displayLabel, itemDisabled, closable, onClose) : defaultRenderSelector(valueItem, displayLabel, itemDisabled, closable, onClose);
  }
  function renderRest(omittedValues) {
    var content = typeof maxTagPlaceholder === 'function' ? maxTagPlaceholder(omittedValues) : maxTagPlaceholder;
    return defaultRenderSelector({
      title: content
    }, content, false);
  }

  // >>> Input Node
  var inputNode = /*#__PURE__*/React.createElement("div", {
    className: "".concat(selectionPrefixCls, "-search"),
    style: {
      width: inputWidth
    },
    onFocus: function onFocus() {
      setFocused(true);
    },
    onBlur: function onBlur() {
      setFocused(false);
    }
  }, /*#__PURE__*/React.createElement(_Input.default, {
    ref: inputRef,
    open: open,
    prefixCls: prefixCls,
    id: id,
    inputElement: null,
    disabled: disabled,
    autoFocus: autoFocus,
    autoComplete: autoComplete,
    editable: inputEditable,
    activeDescendantId: activeDescendantId,
    value: inputValue,
    onKeyDown: onInputKeyDown,
    onMouseDown: onInputMouseDown,
    onChange: onInputChange,
    onPaste: onInputPaste,
    onCompositionStart: onInputCompositionStart,
    onCompositionEnd: onInputCompositionEnd,
    tabIndex: tabIndex,
    attrs: (0, _pickAttrs.default)(props, true)
  }), /*#__PURE__*/React.createElement("span", {
    ref: measureRef,
    className: "".concat(selectionPrefixCls, "-search-mirror"),
    "aria-hidden": true
  }, inputValue, "\xA0"));

  // >>> Selections
  var selectionNode = /*#__PURE__*/React.createElement(_rcOverflow.default, {
    prefixCls: "".concat(selectionPrefixCls, "-overflow"),
    data: values,
    renderItem: renderItem,
    renderRest: renderRest,
    suffix: inputNode,
    itemKey: itemKey,
    maxCount: maxTagCount
  });
  return /*#__PURE__*/React.createElement(React.Fragment, null, selectionNode, !values.length && !inputValue && /*#__PURE__*/React.createElement("span", {
    className: "".concat(selectionPrefixCls, "-placeholder")
  }, placeholder));
};
var _default = SelectSelector;
exports["default"] = _default;

/***/ }),

/***/ 14135:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var _interopRequireDefault = __webpack_require__(92439);
var _typeof = __webpack_require__(67236);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _slicedToArray2 = _interopRequireDefault(__webpack_require__(16522));
var React = _interopRequireWildcard(__webpack_require__(18038));
var _pickAttrs = _interopRequireDefault(__webpack_require__(69392));
var _Input = _interopRequireDefault(__webpack_require__(39085));
var _commonUtil = __webpack_require__(15438);
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var SingleSelector = function SingleSelector(props) {
  var inputElement = props.inputElement,
    prefixCls = props.prefixCls,
    id = props.id,
    inputRef = props.inputRef,
    disabled = props.disabled,
    autoFocus = props.autoFocus,
    autoComplete = props.autoComplete,
    activeDescendantId = props.activeDescendantId,
    mode = props.mode,
    open = props.open,
    values = props.values,
    placeholder = props.placeholder,
    tabIndex = props.tabIndex,
    showSearch = props.showSearch,
    searchValue = props.searchValue,
    activeValue = props.activeValue,
    maxLength = props.maxLength,
    onInputKeyDown = props.onInputKeyDown,
    onInputMouseDown = props.onInputMouseDown,
    onInputChange = props.onInputChange,
    onInputPaste = props.onInputPaste,
    onInputCompositionStart = props.onInputCompositionStart,
    onInputCompositionEnd = props.onInputCompositionEnd,
    title = props.title;
  var _React$useState = React.useState(false),
    _React$useState2 = (0, _slicedToArray2.default)(_React$useState, 2),
    inputChanged = _React$useState2[0],
    setInputChanged = _React$useState2[1];
  var combobox = mode === 'combobox';
  var inputEditable = combobox || showSearch;
  var item = values[0];
  var inputValue = searchValue || '';
  if (combobox && activeValue && !inputChanged) {
    inputValue = activeValue;
  }
  React.useEffect(function () {
    if (combobox) {
      setInputChanged(false);
    }
  }, [combobox, activeValue]);

  // Not show text when closed expect combobox mode
  var hasTextInput = mode !== 'combobox' && !open && !showSearch ? false : !!inputValue;

  // Get title of selection item
  var selectionTitle = title === undefined ? (0, _commonUtil.getTitle)(item) : title;
  var renderPlaceholder = function renderPlaceholder() {
    if (item) {
      return null;
    }
    var hiddenStyle = hasTextInput ? {
      visibility: 'hidden'
    } : undefined;
    return /*#__PURE__*/React.createElement("span", {
      className: "".concat(prefixCls, "-selection-placeholder"),
      style: hiddenStyle
    }, placeholder);
  };
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("span", {
    className: "".concat(prefixCls, "-selection-search")
  }, /*#__PURE__*/React.createElement(_Input.default, {
    ref: inputRef,
    prefixCls: prefixCls,
    id: id,
    open: open,
    inputElement: inputElement,
    disabled: disabled,
    autoFocus: autoFocus,
    autoComplete: autoComplete,
    editable: inputEditable,
    activeDescendantId: activeDescendantId,
    value: inputValue,
    onKeyDown: onInputKeyDown,
    onMouseDown: onInputMouseDown,
    onChange: function onChange(e) {
      setInputChanged(true);
      onInputChange(e);
    },
    onPaste: onInputPaste,
    onCompositionStart: onInputCompositionStart,
    onCompositionEnd: onInputCompositionEnd,
    tabIndex: tabIndex,
    attrs: (0, _pickAttrs.default)(props, true),
    maxLength: combobox ? maxLength : undefined
  })), !combobox && item ? /*#__PURE__*/React.createElement("span", {
    className: "".concat(prefixCls, "-selection-item"),
    title: selectionTitle
    // 当 Select 已经选中选项时，还需 selection 隐藏但留在原地占位
    // https://github.com/ant-design/ant-design/issues/27688
    // https://github.com/ant-design/ant-design/issues/41530
    ,
    style: hasTextInput ? {
      visibility: 'hidden'
    } : undefined
  }, item.label) : null, renderPlaceholder());
};
var _default = SingleSelector;
exports["default"] = _default;

/***/ }),

/***/ 26321:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var _interopRequireDefault = __webpack_require__(92439);
var _typeof = __webpack_require__(67236);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _extends2 = _interopRequireDefault(__webpack_require__(43259));
var _slicedToArray2 = _interopRequireDefault(__webpack_require__(16522));
var React = _interopRequireWildcard(__webpack_require__(18038));
var _KeyCode = _interopRequireDefault(__webpack_require__(81390));
var _MultipleSelector = _interopRequireDefault(__webpack_require__(24274));
var _SingleSelector = _interopRequireDefault(__webpack_require__(14135));
var _useLock3 = _interopRequireDefault(__webpack_require__(2446));
var _keyUtil = __webpack_require__(2212);
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
/**
 * Cursor rule:
 * 1. Only `showSearch` enabled
 * 2. Only `open` is `true`
 * 3. When typing, set `open` to `true` which hit rule of 2
 *
 * Accessibility:
 * - https://www.w3.org/TR/wai-aria-practices/examples/combobox/aria1.1pattern/listbox-combo.html
 */

var Selector = function Selector(props, ref) {
  var inputRef = (0, React.useRef)(null);
  var compositionStatusRef = (0, React.useRef)(false);
  var prefixCls = props.prefixCls,
    open = props.open,
    mode = props.mode,
    showSearch = props.showSearch,
    tokenWithEnter = props.tokenWithEnter,
    autoClearSearchValue = props.autoClearSearchValue,
    onSearch = props.onSearch,
    onSearchSubmit = props.onSearchSubmit,
    onToggleOpen = props.onToggleOpen,
    onInputKeyDown = props.onInputKeyDown,
    domRef = props.domRef;

  // ======================= Ref =======================
  React.useImperativeHandle(ref, function () {
    return {
      focus: function focus() {
        inputRef.current.focus();
      },
      blur: function blur() {
        inputRef.current.blur();
      }
    };
  });

  // ====================== Input ======================
  var _useLock = (0, _useLock3.default)(0),
    _useLock2 = (0, _slicedToArray2.default)(_useLock, 2),
    getInputMouseDown = _useLock2[0],
    setInputMouseDown = _useLock2[1];
  var onInternalInputKeyDown = function onInternalInputKeyDown(event) {
    var which = event.which;
    if (which === _KeyCode.default.UP || which === _KeyCode.default.DOWN) {
      event.preventDefault();
    }
    if (onInputKeyDown) {
      onInputKeyDown(event);
    }
    if (which === _KeyCode.default.ENTER && mode === 'tags' && !compositionStatusRef.current && !open) {
      // When menu isn't open, OptionList won't trigger a value change
      // So when enter is pressed, the tag's input value should be emitted here to let selector know
      onSearchSubmit === null || onSearchSubmit === void 0 ? void 0 : onSearchSubmit(event.target.value);
    }
    if ((0, _keyUtil.isValidateOpenKey)(which)) {
      onToggleOpen(true);
    }
  };

  /**
   * We can not use `findDOMNode` sine it will get warning,
   * have to use timer to check if is input element.
   */
  var onInternalInputMouseDown = function onInternalInputMouseDown() {
    setInputMouseDown(true);
  };

  // When paste come, ignore next onChange
  var pastedTextRef = (0, React.useRef)(null);
  var triggerOnSearch = function triggerOnSearch(value) {
    if (onSearch(value, true, compositionStatusRef.current) !== false) {
      onToggleOpen(true);
    }
  };
  var onInputCompositionStart = function onInputCompositionStart() {
    compositionStatusRef.current = true;
  };
  var onInputCompositionEnd = function onInputCompositionEnd(e) {
    compositionStatusRef.current = false;

    // Trigger search again to support `tokenSeparators` with typewriting
    if (mode !== 'combobox') {
      triggerOnSearch(e.target.value);
    }
  };
  var onInputChange = function onInputChange(event) {
    var value = event.target.value;

    // Pasted text should replace back to origin content
    if (tokenWithEnter && pastedTextRef.current && /[\r\n]/.test(pastedTextRef.current)) {
      // CRLF will be treated as a single space for input element
      var replacedText = pastedTextRef.current.replace(/[\r\n]+$/, '').replace(/\r\n/g, ' ').replace(/[\r\n]/g, ' ');
      value = value.replace(replacedText, pastedTextRef.current);
    }
    pastedTextRef.current = null;
    triggerOnSearch(value);
  };
  var onInputPaste = function onInputPaste(e) {
    var clipboardData = e.clipboardData;
    var value = clipboardData.getData('text');
    pastedTextRef.current = value;
  };
  var onClick = function onClick(_ref) {
    var target = _ref.target;
    if (target !== inputRef.current) {
      // Should focus input if click the selector
      var isIE = document.body.style.msTouchAction !== undefined;
      if (isIE) {
        setTimeout(function () {
          inputRef.current.focus();
        });
      } else {
        inputRef.current.focus();
      }
    }
  };
  var onMouseDown = function onMouseDown(event) {
    var inputMouseDown = getInputMouseDown();

    // when mode is combobox, don't prevent default behavior
    // https://github.com/ant-design/ant-design/issues/37320
    if (event.target !== inputRef.current && !inputMouseDown && mode !== 'combobox') {
      event.preventDefault();
    }
    if (mode !== 'combobox' && (!showSearch || !inputMouseDown) || !open) {
      if (open && autoClearSearchValue !== false) {
        onSearch('', true, false);
      }
      onToggleOpen();
    }
  };

  // ================= Inner Selector ==================
  var sharedProps = {
    inputRef: inputRef,
    onInputKeyDown: onInternalInputKeyDown,
    onInputMouseDown: onInternalInputMouseDown,
    onInputChange: onInputChange,
    onInputPaste: onInputPaste,
    onInputCompositionStart: onInputCompositionStart,
    onInputCompositionEnd: onInputCompositionEnd
  };
  var selectNode = mode === 'multiple' || mode === 'tags' ? /*#__PURE__*/React.createElement(_MultipleSelector.default, (0, _extends2.default)({}, props, sharedProps)) : /*#__PURE__*/React.createElement(_SingleSelector.default, (0, _extends2.default)({}, props, sharedProps));
  return /*#__PURE__*/React.createElement("div", {
    ref: domRef,
    className: "".concat(prefixCls, "-selector"),
    onClick: onClick,
    onMouseDown: onMouseDown
  }, selectNode);
};
var ForwardSelector = /*#__PURE__*/React.forwardRef(Selector);
ForwardSelector.displayName = 'Selector';
var _default = ForwardSelector;
exports["default"] = _default;

/***/ }),

/***/ 57438:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var _interopRequireDefault = __webpack_require__(92439);
var _typeof = __webpack_require__(67236);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var React = _interopRequireWildcard(__webpack_require__(18038));
var _classnames = _interopRequireDefault(__webpack_require__(89367));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var TransBtn = function TransBtn(_ref) {
  var className = _ref.className,
    customizeIcon = _ref.customizeIcon,
    customizeIconProps = _ref.customizeIconProps,
    _onMouseDown = _ref.onMouseDown,
    onClick = _ref.onClick,
    children = _ref.children;
  var icon;
  if (typeof customizeIcon === 'function') {
    icon = customizeIcon(customizeIconProps);
  } else {
    icon = customizeIcon;
  }
  return /*#__PURE__*/React.createElement("span", {
    className: className,
    onMouseDown: function onMouseDown(event) {
      event.preventDefault();
      if (_onMouseDown) {
        _onMouseDown(event);
      }
    },
    style: {
      userSelect: 'none',
      WebkitUserSelect: 'none'
    },
    unselectable: "on",
    onClick: onClick,
    "aria-hidden": true
  }, icon !== undefined ? icon : /*#__PURE__*/React.createElement("span", {
    className: (0, _classnames.default)(className.split(/\s+/).map(function (cls) {
      return "".concat(cls, "-icon");
    }))
  }, children));
};
var _default = TransBtn;
exports["default"] = _default;

/***/ }),

/***/ 68084:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var _typeof = __webpack_require__(67236);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.BaseSelectContext = void 0;
exports["default"] = useBaseProps;
var React = _interopRequireWildcard(__webpack_require__(18038));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
/**
 * BaseSelect provide some parsed data into context.
 * You can use this hooks to get them.
 */

var BaseSelectContext = /*#__PURE__*/React.createContext(null);
exports.BaseSelectContext = BaseSelectContext;
function useBaseProps() {
  return React.useContext(BaseSelectContext);
}

/***/ }),

/***/ 15386:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var _interopRequireDefault = __webpack_require__(92439);
var _typeof = __webpack_require__(67236);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _objectSpread2 = _interopRequireDefault(__webpack_require__(89687));
var React = _interopRequireWildcard(__webpack_require__(18038));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
/**
 * Cache `value` related LabeledValue & options.
 */
var _default = function _default(labeledValues, valueOptions) {
  var cacheRef = React.useRef({
    values: new Map(),
    options: new Map()
  });
  var filledLabeledValues = React.useMemo(function () {
    var _cacheRef$current = cacheRef.current,
      prevValueCache = _cacheRef$current.values,
      prevOptionCache = _cacheRef$current.options;

    // Fill label by cache
    var patchedValues = labeledValues.map(function (item) {
      if (item.label === undefined) {
        var _prevValueCache$get;
        return (0, _objectSpread2.default)((0, _objectSpread2.default)({}, item), {}, {
          label: (_prevValueCache$get = prevValueCache.get(item.value)) === null || _prevValueCache$get === void 0 ? void 0 : _prevValueCache$get.label
        });
      }
      return item;
    });

    // Refresh cache
    var valueCache = new Map();
    var optionCache = new Map();
    patchedValues.forEach(function (item) {
      valueCache.set(item.value, item);
      optionCache.set(item.value, valueOptions.get(item.value) || prevOptionCache.get(item.value));
    });
    cacheRef.current.values = valueCache;
    cacheRef.current.options = optionCache;
    return patchedValues;
  }, [labeledValues, valueOptions]);
  var getOption = React.useCallback(function (val) {
    return valueOptions.get(val) || cacheRef.current.options.get(val);
  }, [valueOptions]);
  return [filledLabeledValues, getOption];
};
exports["default"] = _default;

/***/ }),

/***/ 35494:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var _interopRequireDefault = __webpack_require__(92439);
var _typeof = __webpack_require__(67236);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = useDelayReset;
var _slicedToArray2 = _interopRequireDefault(__webpack_require__(16522));
var React = _interopRequireWildcard(__webpack_require__(18038));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
/**
 * Similar with `useLock`, but this hook will always execute last value.
 * When set to `true`, it will keep `true` for a short time even if `false` is set.
 */
function useDelayReset() {
  var timeout = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 10;
  var _React$useState = React.useState(false),
    _React$useState2 = (0, _slicedToArray2.default)(_React$useState, 2),
    bool = _React$useState2[0],
    setBool = _React$useState2[1];
  var delayRef = React.useRef(null);
  var cancelLatest = function cancelLatest() {
    window.clearTimeout(delayRef.current);
  };
  React.useEffect(function () {
    return cancelLatest;
  }, []);
  var delaySetBool = function delaySetBool(value, callback) {
    cancelLatest();
    delayRef.current = window.setTimeout(function () {
      setBool(value);
      if (callback) {
        callback();
      }
    }, timeout);
  };
  return [bool, delaySetBool, cancelLatest];
}

/***/ }),

/***/ 25893:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var _interopRequireDefault = __webpack_require__(92439);
var _typeof = __webpack_require__(67236);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _defineProperty2 = _interopRequireDefault(__webpack_require__(513));
var _objectSpread3 = _interopRequireDefault(__webpack_require__(89687));
var React = _interopRequireWildcard(__webpack_require__(18038));
var _commonUtil = __webpack_require__(15438);
var _valueUtil = __webpack_require__(20724);
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function includes(test, search) {
  return (0, _commonUtil.toArray)(test).join('').toUpperCase().includes(search);
}
var _default = function _default(options, fieldNames, searchValue, filterOption, optionFilterProp) {
  return React.useMemo(function () {
    if (!searchValue || filterOption === false) {
      return options;
    }
    var fieldOptions = fieldNames.options,
      fieldLabel = fieldNames.label,
      fieldValue = fieldNames.value;
    var filteredOptions = [];
    var customizeFilter = typeof filterOption === 'function';
    var upperSearch = searchValue.toUpperCase();
    var filterFunc = customizeFilter ? filterOption : function (_, option) {
      // Use provided `optionFilterProp`
      if (optionFilterProp) {
        return includes(option[optionFilterProp], upperSearch);
      }

      // Auto select `label` or `value` by option type
      if (option[fieldOptions]) {
        // hack `fieldLabel` since `OptionGroup` children is not `label`
        return includes(option[fieldLabel !== 'children' ? fieldLabel : 'label'], upperSearch);
      }
      return includes(option[fieldValue], upperSearch);
    };
    var wrapOption = customizeFilter ? function (opt) {
      return (0, _valueUtil.injectPropsWithOption)(opt);
    } : function (opt) {
      return opt;
    };
    options.forEach(function (item) {
      // Group should check child options
      if (item[fieldOptions]) {
        // Check group first
        var matchGroup = filterFunc(searchValue, wrapOption(item));
        if (matchGroup) {
          filteredOptions.push(item);
        } else {
          // Check option
          var subOptions = item[fieldOptions].filter(function (subItem) {
            return filterFunc(searchValue, wrapOption(subItem));
          });
          if (subOptions.length) {
            filteredOptions.push((0, _objectSpread3.default)((0, _objectSpread3.default)({}, item), {}, (0, _defineProperty2.default)({}, fieldOptions, subOptions)));
          }
        }
        return;
      }
      if (filterFunc(searchValue, wrapOption(item))) {
        filteredOptions.push(item);
      }
    });
    return filteredOptions;
  }, [options, filterOption, optionFilterProp, searchValue, fieldNames]);
};
exports["default"] = _default;

/***/ }),

/***/ 86101:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var _interopRequireDefault = __webpack_require__(92439);
var _typeof = __webpack_require__(67236);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = useId;
exports.getUUID = getUUID;
exports.isBrowserClient = void 0;
var _slicedToArray2 = _interopRequireDefault(__webpack_require__(16522));
var React = _interopRequireWildcard(__webpack_require__(18038));
var _canUseDom = _interopRequireDefault(__webpack_require__(6995));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var uuid = 0;

/** Is client side and not jsdom */
var isBrowserClient =  true && (0, _canUseDom.default)();

/** Get unique id for accessibility usage */
exports.isBrowserClient = isBrowserClient;
function getUUID() {
  var retId;

  // Test never reach
  /* istanbul ignore if */
  if (isBrowserClient) {
    retId = uuid;
    uuid += 1;
  } else {
    retId = 'TEST_OR_SSR';
  }
  return retId;
}
function useId(id) {
  // Inner id for accessibility usage. Only work in client side
  var _React$useState = React.useState(),
    _React$useState2 = (0, _slicedToArray2.default)(_React$useState, 2),
    innerId = _React$useState2[0],
    setInnerId = _React$useState2[1];
  React.useEffect(function () {
    setInnerId("rc_select_".concat(getUUID()));
  }, []);
  return id || innerId;
}

/***/ }),

/***/ 971:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var _typeof = __webpack_require__(67236);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = useLayoutEffect;
var React = _interopRequireWildcard(__webpack_require__(18038));
var _commonUtil = __webpack_require__(15438);
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
/* eslint-disable react-hooks/rules-of-hooks */

/**
 * Wrap `React.useLayoutEffect` which will not throw warning message in test env
 */
function useLayoutEffect(effect, deps) {
  // Never happen in test env
  if (_commonUtil.isBrowserClient) {
    /* istanbul ignore next */
    React.useLayoutEffect(effect, deps);
  } else {
    React.useEffect(effect, deps);
  }
}
/* eslint-enable */

/***/ }),

/***/ 2446:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var _typeof = __webpack_require__(67236);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = useLock;
var React = _interopRequireWildcard(__webpack_require__(18038));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
/**
 * Locker return cached mark.
 * If set to `true`, will return `true` in a short time even if set `false`.
 * If set to `false` and then set to `true`, will change to `true`.
 * And after time duration, it will back to `null` automatically.
 */
function useLock() {
  var duration = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 250;
  var lockRef = React.useRef(null);
  var timeoutRef = React.useRef(null);

  // Clean up
  React.useEffect(function () {
    return function () {
      window.clearTimeout(timeoutRef.current);
    };
  }, []);
  function doLock(locked) {
    if (locked || lockRef.current === null) {
      lockRef.current = locked;
    }
    window.clearTimeout(timeoutRef.current);
    timeoutRef.current = window.setTimeout(function () {
      lockRef.current = null;
    }, duration);
  }
  return [function () {
    return lockRef.current;
  }, doLock];
}

/***/ }),

/***/ 87997:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var _typeof = __webpack_require__(67236);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = useOptions;
var React = _interopRequireWildcard(__webpack_require__(18038));
var _legacyUtil = __webpack_require__(5337);
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
/**
 * Parse `children` to `options` if `options` is not provided.
 * Then flatten the `options`.
 */
function useOptions(options, children, fieldNames, optionFilterProp, optionLabelProp) {
  return React.useMemo(function () {
    var mergedOptions = options;
    var childrenAsData = !options;
    if (childrenAsData) {
      mergedOptions = (0, _legacyUtil.convertChildrenToData)(children);
    }
    var valueOptions = new Map();
    var labelOptions = new Map();
    var setLabelOptions = function setLabelOptions(labelOptionsMap, option, key) {
      if (key && typeof key === 'string') {
        labelOptionsMap.set(option[key], option);
      }
    };
    function dig(optionList) {
      var isChildren = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      // for loop to speed up collection speed
      for (var i = 0; i < optionList.length; i += 1) {
        var option = optionList[i];
        if (!option[fieldNames.options] || isChildren) {
          valueOptions.set(option[fieldNames.value], option);
          setLabelOptions(labelOptions, option, fieldNames.label);
          // https://github.com/ant-design/ant-design/issues/35304
          setLabelOptions(labelOptions, option, optionFilterProp);
          setLabelOptions(labelOptions, option, optionLabelProp);
        } else {
          dig(option[fieldNames.options], true);
        }
      }
    }
    dig(mergedOptions);
    return {
      options: mergedOptions,
      valueOptions: valueOptions,
      labelOptions: labelOptions
    };
  }, [options, children, fieldNames, optionFilterProp, optionLabelProp]);
}

/***/ }),

/***/ 43374:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var _typeof = __webpack_require__(67236);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = useRefFunc;
var React = _interopRequireWildcard(__webpack_require__(18038));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
/**
 * Same as `React.useCallback` but always return a memoized function
 * but redirect to real function.
 */
function useRefFunc(callback) {
  var funcRef = React.useRef();
  funcRef.current = callback;
  var cacheFn = React.useCallback(function () {
    return funcRef.current.apply(funcRef, arguments);
  }, []);
  return cacheFn;
}

/***/ }),

/***/ 95658:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var _typeof = __webpack_require__(67236);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = useSelectTriggerControl;
var React = _interopRequireWildcard(__webpack_require__(18038));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function useSelectTriggerControl(elements, open, triggerOpen, customizedTrigger) {
  var propsRef = React.useRef(null);
  propsRef.current = {
    open: open,
    triggerOpen: triggerOpen,
    customizedTrigger: customizedTrigger
  };
  React.useEffect(function () {
    function onGlobalMouseDown(event) {
      var _propsRef$current;
      // If trigger is customized, Trigger will take control of popupVisible
      if ((_propsRef$current = propsRef.current) !== null && _propsRef$current !== void 0 && _propsRef$current.customizedTrigger) {
        return;
      }
      var target = event.target;
      if (target.shadowRoot && event.composed) {
        target = event.composedPath()[0] || target;
      }
      if (propsRef.current.open && elements().filter(function (element) {
        return element;
      }).every(function (element) {
        return !element.contains(target) && element !== target;
      })) {
        // Should trigger close
        propsRef.current.triggerOpen(false);
      }
    }
    window.addEventListener('mousedown', onGlobalMouseDown);
    return function () {
      return window.removeEventListener('mousedown', onGlobalMouseDown);
    };
  }, []);
}

/***/ }),

/***/ 43851:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var _interopRequireDefault = __webpack_require__(92439);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
Object.defineProperty(exports, "BaseSelect", ({
  enumerable: true,
  get: function get() {
    return _BaseSelect.default;
  }
}));
Object.defineProperty(exports, "OptGroup", ({
  enumerable: true,
  get: function get() {
    return _OptGroup.default;
  }
}));
Object.defineProperty(exports, "Option", ({
  enumerable: true,
  get: function get() {
    return _Option.default;
  }
}));
exports["default"] = void 0;
Object.defineProperty(exports, "useBaseProps", ({
  enumerable: true,
  get: function get() {
    return _useBaseProps.default;
  }
}));
var _Select = _interopRequireDefault(__webpack_require__(2312));
var _Option = _interopRequireDefault(__webpack_require__(4974));
var _OptGroup = _interopRequireDefault(__webpack_require__(91416));
var _BaseSelect = _interopRequireDefault(__webpack_require__(24061));
var _useBaseProps = _interopRequireDefault(__webpack_require__(68084));
var _default = _Select.default;
exports["default"] = _default;

/***/ }),

/***/ 15438:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var _interopRequireDefault = __webpack_require__(92439);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.getTitle = getTitle;
exports.hasValue = hasValue;
exports.isClient = exports.isBrowserClient = void 0;
exports.toArray = toArray;
var _typeof2 = _interopRequireDefault(__webpack_require__(67236));
function toArray(value) {
  if (Array.isArray(value)) {
    return value;
  }
  return value !== undefined ? [value] : [];
}
var isClient = typeof window !== 'undefined' && window.document && window.document.documentElement;

/** Is client side and not jsdom */
exports.isClient = isClient;
var isBrowserClient =  true && isClient;
exports.isBrowserClient = isBrowserClient;
function hasValue(value) {
  return value !== undefined && value !== null;
}
function isTitleType(title) {
  return ['string', 'number'].includes((0, _typeof2.default)(title));
}
function getTitle(item) {
  var title = undefined;
  if (item) {
    if (isTitleType(item.title)) {
      title = item.title.toString();
    } else if (isTitleType(item.label)) {
      title = item.label.toString();
    }
  }
  return title;
}

/***/ }),

/***/ 2212:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var _interopRequireDefault = __webpack_require__(92439);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.isValidateOpenKey = isValidateOpenKey;
var _KeyCode = _interopRequireDefault(__webpack_require__(81390));
/** keyCode Judgment function */
function isValidateOpenKey(currentKeyCode) {
  return ![
  // System function button
  _KeyCode.default.ESC, _KeyCode.default.SHIFT, _KeyCode.default.BACKSPACE, _KeyCode.default.TAB, _KeyCode.default.WIN_KEY, _KeyCode.default.ALT, _KeyCode.default.META, _KeyCode.default.WIN_KEY_RIGHT, _KeyCode.default.CTRL, _KeyCode.default.SEMICOLON, _KeyCode.default.EQUALS, _KeyCode.default.CAPS_LOCK, _KeyCode.default.CONTEXT_MENU,
  // F1-F12
  _KeyCode.default.F1, _KeyCode.default.F2, _KeyCode.default.F3, _KeyCode.default.F4, _KeyCode.default.F5, _KeyCode.default.F6, _KeyCode.default.F7, _KeyCode.default.F8, _KeyCode.default.F9, _KeyCode.default.F10, _KeyCode.default.F11, _KeyCode.default.F12].includes(currentKeyCode);
}

/***/ }),

/***/ 5337:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var _interopRequireDefault = __webpack_require__(92439);
var _typeof = __webpack_require__(67236);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.convertChildrenToData = convertChildrenToData;
var _objectSpread2 = _interopRequireDefault(__webpack_require__(89687));
var _objectWithoutProperties2 = _interopRequireDefault(__webpack_require__(14498));
var React = _interopRequireWildcard(__webpack_require__(18038));
var _toArray = _interopRequireDefault(__webpack_require__(87424));
var _excluded = ["children", "value"],
  _excluded2 = ["children"];
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function convertNodeToOption(node) {
  var _ref = node,
    key = _ref.key,
    _ref$props = _ref.props,
    children = _ref$props.children,
    value = _ref$props.value,
    restProps = (0, _objectWithoutProperties2.default)(_ref$props, _excluded);
  return (0, _objectSpread2.default)({
    key: key,
    value: value !== undefined ? value : key,
    children: children
  }, restProps);
}
function convertChildrenToData(nodes) {
  var optionOnly = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  return (0, _toArray.default)(nodes).map(function (node, index) {
    if (! /*#__PURE__*/React.isValidElement(node) || !node.type) {
      return null;
    }
    var _ref2 = node,
      isSelectOptGroup = _ref2.type.isSelectOptGroup,
      key = _ref2.key,
      _ref2$props = _ref2.props,
      children = _ref2$props.children,
      restProps = (0, _objectWithoutProperties2.default)(_ref2$props, _excluded2);
    if (optionOnly || !isSelectOptGroup) {
      return convertNodeToOption(node);
    }
    return (0, _objectSpread2.default)((0, _objectSpread2.default)({
      key: "__RC_SELECT_GRP__".concat(key === null ? index : key, "__"),
      label: key
    }, restProps), {}, {
      options: convertChildrenToData(children)
    });
  }).filter(function (data) {
    return data;
  });
}

/***/ }),

/***/ 49750:
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.isPlatformMac = isPlatformMac;
/* istanbul ignore file */
function isPlatformMac() {
  return /(mac\sos|macintosh)/i.test(navigator.appVersion);
}

/***/ }),

/***/ 20724:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var _interopRequireDefault = __webpack_require__(92439);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.fillFieldNames = fillFieldNames;
exports.flattenOptions = flattenOptions;
exports.getSeparatedContent = getSeparatedContent;
exports.injectPropsWithOption = injectPropsWithOption;
var _toConsumableArray2 = _interopRequireDefault(__webpack_require__(42798));
var _toArray2 = _interopRequireDefault(__webpack_require__(90641));
var _objectSpread2 = _interopRequireDefault(__webpack_require__(89687));
var _warning = _interopRequireDefault(__webpack_require__(32038));
function getKey(data, index) {
  var key = data.key;
  var value;
  if ('value' in data) {
    value = data.value;
  }
  if (key !== null && key !== undefined) {
    return key;
  }
  if (value !== undefined) {
    return value;
  }
  return "rc-index-key-".concat(index);
}
function fillFieldNames(fieldNames, childrenAsData) {
  var _ref = fieldNames || {},
    label = _ref.label,
    value = _ref.value,
    options = _ref.options,
    groupLabel = _ref.groupLabel;
  var mergedLabel = label || (childrenAsData ? 'children' : 'label');
  return {
    label: mergedLabel,
    value: value || 'value',
    options: options || 'options',
    groupLabel: groupLabel || mergedLabel
  };
}

/**
 * Flat options into flatten list.
 * We use `optionOnly` here is aim to avoid user use nested option group.
 * Here is simply set `key` to the index if not provided.
 */
function flattenOptions(options) {
  var _ref2 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
    fieldNames = _ref2.fieldNames,
    childrenAsData = _ref2.childrenAsData;
  var flattenList = [];
  var _fillFieldNames = fillFieldNames(fieldNames, false),
    fieldLabel = _fillFieldNames.label,
    fieldValue = _fillFieldNames.value,
    fieldOptions = _fillFieldNames.options,
    groupLabel = _fillFieldNames.groupLabel;
  function dig(list, isGroupOption) {
    list.forEach(function (data) {
      if (isGroupOption || !(fieldOptions in data)) {
        var value = data[fieldValue];

        // Option
        flattenList.push({
          key: getKey(data, flattenList.length),
          groupOption: isGroupOption,
          data: data,
          label: data[fieldLabel],
          value: value
        });
      } else {
        var grpLabel = data[groupLabel];
        if (grpLabel === undefined && childrenAsData) {
          grpLabel = data.label;
        }

        // Option Group
        flattenList.push({
          key: getKey(data, flattenList.length),
          group: true,
          data: data,
          label: grpLabel
        });
        dig(data[fieldOptions], true);
      }
    });
  }
  dig(options, false);
  return flattenList;
}

/**
 * Inject `props` into `option` for legacy usage
 */
function injectPropsWithOption(option) {
  var newOption = (0, _objectSpread2.default)({}, option);
  if (!('props' in newOption)) {
    Object.defineProperty(newOption, 'props', {
      get: function get() {
        (0, _warning.default)(false, 'Return type is option instead of Option instance. Please read value directly instead of reading from `props`.');
        return newOption;
      }
    });
  }
  return newOption;
}
function getSeparatedContent(text, tokens) {
  if (!tokens || !tokens.length) {
    return null;
  }
  var match = false;
  function separate(str, _ref3) {
    var _ref4 = (0, _toArray2.default)(_ref3),
      token = _ref4[0],
      restTokens = _ref4.slice(1);
    if (!token) {
      return [str];
    }
    var list = str.split(token);
    match = match || list.length > 1;
    return list.reduce(function (prevList, unitStr) {
      return [].concat((0, _toConsumableArray2.default)(prevList), (0, _toConsumableArray2.default)(separate(unitStr, restTokens)));
    }, []).filter(function (unit) {
      return unit;
    });
  }
  var list = separate(text, tokens);
  return match ? list : null;
}

/***/ }),

/***/ 93601:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var _interopRequireDefault = __webpack_require__(92439);
var _typeof3 = __webpack_require__(67236);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
exports.warningNullOptions = warningNullOptions;
var _typeof2 = _interopRequireDefault(__webpack_require__(67236));
var _toArray = _interopRequireDefault(__webpack_require__(87424));
var _warning = _interopRequireWildcard(__webpack_require__(32038));
var React = _interopRequireWildcard(__webpack_require__(18038));
var _BaseSelect = __webpack_require__(24061);
var _commonUtil = __webpack_require__(15438);
var _legacyUtil = __webpack_require__(5337);
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof3(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function warningProps(props) {
  var mode = props.mode,
    options = props.options,
    children = props.children,
    backfill = props.backfill,
    allowClear = props.allowClear,
    placeholder = props.placeholder,
    getInputElement = props.getInputElement,
    showSearch = props.showSearch,
    onSearch = props.onSearch,
    defaultOpen = props.defaultOpen,
    autoFocus = props.autoFocus,
    labelInValue = props.labelInValue,
    value = props.value,
    inputValue = props.inputValue,
    optionLabelProp = props.optionLabelProp;
  var multiple = (0, _BaseSelect.isMultiple)(mode);
  var mergedShowSearch = showSearch !== undefined ? showSearch : multiple || mode === 'combobox';
  var mergedOptions = options || (0, _legacyUtil.convertChildrenToData)(children);

  // `tags` should not set option as disabled
  (0, _warning.default)(mode !== 'tags' || mergedOptions.every(function (opt) {
    return !opt.disabled;
  }), 'Please avoid setting option to disabled in tags mode since user can always type text as tag.');

  // `combobox` & `tags` should option be `string` type
  if (mode === 'tags' || mode === 'combobox') {
    var hasNumberValue = mergedOptions.some(function (item) {
      if (item.options) {
        return item.options.some(function (opt) {
          return typeof ('value' in opt ? opt.value : opt.key) === 'number';
        });
      }
      return typeof ('value' in item ? item.value : item.key) === 'number';
    });
    (0, _warning.default)(!hasNumberValue, '`value` of Option should not use number type when `mode` is `tags` or `combobox`.');
  }

  // `combobox` should not use `optionLabelProp`
  (0, _warning.default)(mode !== 'combobox' || !optionLabelProp, '`combobox` mode not support `optionLabelProp`. Please set `value` on Option directly.');

  // Only `combobox` support `backfill`
  (0, _warning.default)(mode === 'combobox' || !backfill, '`backfill` only works with `combobox` mode.');

  // Only `combobox` support `getInputElement`
  (0, _warning.default)(mode === 'combobox' || !getInputElement, '`getInputElement` only work with `combobox` mode.');

  // Customize `getInputElement` should not use `allowClear` & `placeholder`
  (0, _warning.noteOnce)(mode !== 'combobox' || !getInputElement || !allowClear || !placeholder, 'Customize `getInputElement` should customize clear and placeholder logic instead of configuring `allowClear` and `placeholder`.');

  // `onSearch` should use in `combobox` or `showSearch`
  if (onSearch && !mergedShowSearch && mode !== 'combobox' && mode !== 'tags') {
    (0, _warning.default)(false, '`onSearch` should work with `showSearch` instead of use alone.');
  }
  (0, _warning.noteOnce)(!defaultOpen || autoFocus, '`defaultOpen` makes Select open without focus which means it will not close by click outside. You can set `autoFocus` if needed.');
  if (value !== undefined && value !== null) {
    var values = (0, _commonUtil.toArray)(value);
    (0, _warning.default)(!labelInValue || values.every(function (val) {
      return (0, _typeof2.default)(val) === 'object' && ('key' in val || 'value' in val);
    }), '`value` should in shape of `{ value: string | number, label?: ReactNode }` when you set `labelInValue` to `true`');
    (0, _warning.default)(!multiple || Array.isArray(value), '`value` should be array when `mode` is `multiple` or `tags`');
  }

  // Syntactic sugar should use correct children type
  if (children) {
    var invalidateChildType = null;
    (0, _toArray.default)(children).some(function (node) {
      if (! /*#__PURE__*/React.isValidElement(node) || !node.type) {
        return false;
      }
      var _ref = node,
        type = _ref.type;
      if (type.isSelectOption) {
        return false;
      }
      if (type.isSelectOptGroup) {
        var allChildrenValid = (0, _toArray.default)(node.props.children).every(function (subNode) {
          if (! /*#__PURE__*/React.isValidElement(subNode) || !node.type || subNode.type.isSelectOption) {
            return true;
          }
          invalidateChildType = subNode.type;
          return false;
        });
        if (allChildrenValid) {
          return false;
        }
        return true;
      }
      invalidateChildType = type;
      return true;
    });
    if (invalidateChildType) {
      (0, _warning.default)(false, "`children` should be `Select.Option` or `Select.OptGroup` instead of `".concat(invalidateChildType.displayName || invalidateChildType.name || invalidateChildType, "`."));
    }
    (0, _warning.default)(inputValue === undefined, '`inputValue` is deprecated, please use `searchValue` instead.');
  }
}

// value in Select option should not be null
// note: OptGroup has options too
function warningNullOptions(options, fieldNames) {
  if (options) {
    var recursiveOptions = function recursiveOptions(optionsList) {
      var inGroup = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      for (var i = 0; i < optionsList.length; i++) {
        var option = optionsList[i];
        if (option[fieldNames === null || fieldNames === void 0 ? void 0 : fieldNames.value] === null) {
          (0, _warning.default)(false, '`value` in Select options should not be `null`.');
          return true;
        }
        if (!inGroup && Array.isArray(option[fieldNames === null || fieldNames === void 0 ? void 0 : fieldNames.options]) && recursiveOptions(option[fieldNames === null || fieldNames === void 0 ? void 0 : fieldNames.options], true)) {
          break;
        }
      }
    };
    recursiveOptions(options);
  }
}
var _default = warningProps;
exports["default"] = _default;

/***/ }),

/***/ 37034:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var _interopRequireWildcard = (__webpack_require__(35876)["default"]);
var _interopRequireDefault = (__webpack_require__(92439)["default"]);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _extends2 = _interopRequireDefault(__webpack_require__(43259));
var _defineProperty2 = _interopRequireDefault(__webpack_require__(513));
var _objectSpread2 = _interopRequireDefault(__webpack_require__(89687));
var React = _interopRequireWildcard(__webpack_require__(18038));
var _rcResizeObserver = _interopRequireDefault(__webpack_require__(78922));
var _classnames = _interopRequireDefault(__webpack_require__(89367));
/**
 * Fill component to provided the scroll content real height.
 */
var Filler = /*#__PURE__*/React.forwardRef(function (_ref, ref) {
  var height = _ref.height,
    offset = _ref.offset,
    children = _ref.children,
    prefixCls = _ref.prefixCls,
    onInnerResize = _ref.onInnerResize,
    innerProps = _ref.innerProps;
  var outerStyle = {};
  var innerStyle = {
    display: 'flex',
    flexDirection: 'column'
  };
  if (offset !== undefined) {
    outerStyle = {
      height: height,
      position: 'relative',
      overflow: 'hidden'
    };
    innerStyle = (0, _objectSpread2.default)((0, _objectSpread2.default)({}, innerStyle), {}, {
      transform: "translateY(".concat(offset, "px)"),
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0
    });
  }
  return /*#__PURE__*/React.createElement("div", {
    style: outerStyle
  }, /*#__PURE__*/React.createElement(_rcResizeObserver.default, {
    onResize: function onResize(_ref2) {
      var offsetHeight = _ref2.offsetHeight;
      if (offsetHeight && onInnerResize) {
        onInnerResize();
      }
    }
  }, /*#__PURE__*/React.createElement("div", (0, _extends2.default)({
    style: innerStyle,
    className: (0, _classnames.default)((0, _defineProperty2.default)({}, "".concat(prefixCls, "-holder-inner"), prefixCls)),
    ref: ref
  }, innerProps), children)));
});
Filler.displayName = 'Filler';
var _default = Filler;
exports["default"] = _default;

/***/ }),

/***/ 5547:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var _interopRequireWildcard = (__webpack_require__(35876)["default"]);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.Item = Item;
var React = _interopRequireWildcard(__webpack_require__(18038));
function Item(_ref) {
  var children = _ref.children,
    setRef = _ref.setRef;
  var refFunc = React.useCallback(function (node) {
    setRef(node);
  }, []);
  return /*#__PURE__*/React.cloneElement(children, {
    ref: refFunc
  });
}

/***/ }),

/***/ 8717:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var _interopRequireDefault = (__webpack_require__(92439)["default"]);
var _interopRequireWildcard = (__webpack_require__(35876)["default"]);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.RawList = RawList;
exports["default"] = void 0;
var _extends2 = _interopRequireDefault(__webpack_require__(43259));
var _objectSpread3 = _interopRequireDefault(__webpack_require__(89687));
var _defineProperty2 = _interopRequireDefault(__webpack_require__(513));
var _slicedToArray2 = _interopRequireDefault(__webpack_require__(16522));
var _objectWithoutProperties2 = _interopRequireDefault(__webpack_require__(14498));
var React = _interopRequireWildcard(__webpack_require__(18038));
var _classnames = _interopRequireDefault(__webpack_require__(89367));
var _Filler = _interopRequireDefault(__webpack_require__(37034));
var _ScrollBar = _interopRequireDefault(__webpack_require__(52347));
var _useChildren = _interopRequireDefault(__webpack_require__(76373));
var _useHeights3 = _interopRequireDefault(__webpack_require__(50958));
var _useScrollTo = _interopRequireDefault(__webpack_require__(94179));
var _useDiffItem3 = _interopRequireDefault(__webpack_require__(70007));
var _useFrameWheel3 = _interopRequireDefault(__webpack_require__(20743));
var _useMobileTouchMove = _interopRequireDefault(__webpack_require__(62540));
var _useOriginScroll = _interopRequireDefault(__webpack_require__(36387));
var _useLayoutEffect = _interopRequireDefault(__webpack_require__(50368));
var _excluded = ["prefixCls", "className", "height", "itemHeight", "fullHeight", "style", "data", "children", "itemKey", "virtual", "direction", "component", "onScroll", "onVisibleChange", "innerProps"];
var EMPTY_DATA = [];
var ScrollStyle = {
  overflowY: 'auto',
  overflowAnchor: 'none'
};
function RawList(props, ref) {
  var _props$prefixCls = props.prefixCls,
    prefixCls = _props$prefixCls === void 0 ? 'rc-virtual-list' : _props$prefixCls,
    className = props.className,
    height = props.height,
    itemHeight = props.itemHeight,
    _props$fullHeight = props.fullHeight,
    fullHeight = _props$fullHeight === void 0 ? true : _props$fullHeight,
    style = props.style,
    data = props.data,
    children = props.children,
    itemKey = props.itemKey,
    virtual = props.virtual,
    direction = props.direction,
    _props$component = props.component,
    Component = _props$component === void 0 ? 'div' : _props$component,
    onScroll = props.onScroll,
    onVisibleChange = props.onVisibleChange,
    innerProps = props.innerProps,
    restProps = (0, _objectWithoutProperties2.default)(props, _excluded);
  // ================================= MISC =================================
  var useVirtual = !!(virtual !== false && height && itemHeight);
  var inVirtual = useVirtual && data && itemHeight * data.length > height;
  var _useState = (0, React.useState)(0),
    _useState2 = (0, _slicedToArray2.default)(_useState, 2),
    scrollTop = _useState2[0],
    setScrollTop = _useState2[1];
  var _useState3 = (0, React.useState)(false),
    _useState4 = (0, _slicedToArray2.default)(_useState3, 2),
    scrollMoving = _useState4[0],
    setScrollMoving = _useState4[1];
  var mergedClassName = (0, _classnames.default)(prefixCls, (0, _defineProperty2.default)({}, "".concat(prefixCls, "-rtl"), direction === 'rtl'), className);
  var mergedData = data || EMPTY_DATA;
  var componentRef = (0, React.useRef)();
  var fillerInnerRef = (0, React.useRef)();
  var scrollBarRef = (0, React.useRef)(); // Hack on scrollbar to enable flash call
  // =============================== Item Key ===============================
  var getKey = React.useCallback(function (item) {
    if (typeof itemKey === 'function') {
      return itemKey(item);
    }
    return item === null || item === void 0 ? void 0 : item[itemKey];
  }, [itemKey]);
  var sharedConfig = {
    getKey: getKey
  };
  // ================================ Scroll ================================
  function syncScrollTop(newTop) {
    setScrollTop(function (origin) {
      var value;
      if (typeof newTop === 'function') {
        value = newTop(origin);
      } else {
        value = newTop;
      }
      var alignedTop = keepInRange(value);
      componentRef.current.scrollTop = alignedTop;
      return alignedTop;
    });
  }
  // ================================ Legacy ================================
  // Put ref here since the range is generate by follow
  var rangeRef = (0, React.useRef)({
    start: 0,
    end: mergedData.length
  });
  var diffItemRef = (0, React.useRef)();
  var _useDiffItem = (0, _useDiffItem3.default)(mergedData, getKey),
    _useDiffItem2 = (0, _slicedToArray2.default)(_useDiffItem, 1),
    diffItem = _useDiffItem2[0];
  diffItemRef.current = diffItem;
  // ================================ Height ================================
  var _useHeights = (0, _useHeights3.default)(getKey, null, null),
    _useHeights2 = (0, _slicedToArray2.default)(_useHeights, 4),
    setInstanceRef = _useHeights2[0],
    collectHeight = _useHeights2[1],
    heights = _useHeights2[2],
    heightUpdatedMark = _useHeights2[3];
  // ========================== Visible Calculation =========================
  var _React$useMemo = React.useMemo(function () {
      if (!useVirtual) {
        return {
          scrollHeight: undefined,
          start: 0,
          end: mergedData.length - 1,
          offset: undefined
        };
      }
      // Always use virtual scroll bar in avoid shaking
      if (!inVirtual) {
        var _fillerInnerRef$curre;
        return {
          scrollHeight: ((_fillerInnerRef$curre = fillerInnerRef.current) === null || _fillerInnerRef$curre === void 0 ? void 0 : _fillerInnerRef$curre.offsetHeight) || 0,
          start: 0,
          end: mergedData.length - 1,
          offset: undefined
        };
      }
      var itemTop = 0;
      var startIndex;
      var startOffset;
      var endIndex;
      var dataLen = mergedData.length;
      for (var i = 0; i < dataLen; i += 1) {
        var item = mergedData[i];
        var key = getKey(item);
        var cacheHeight = heights.get(key);
        var currentItemBottom = itemTop + (cacheHeight === undefined ? itemHeight : cacheHeight);
        // Check item top in the range
        if (currentItemBottom >= scrollTop && startIndex === undefined) {
          startIndex = i;
          startOffset = itemTop;
        }
        // Check item bottom in the range. We will render additional one item for motion usage
        if (currentItemBottom > scrollTop + height && endIndex === undefined) {
          endIndex = i;
        }
        itemTop = currentItemBottom;
      }
      // When scrollTop at the end but data cut to small count will reach this
      if (startIndex === undefined) {
        startIndex = 0;
        startOffset = 0;
        endIndex = Math.ceil(height / itemHeight);
      }
      if (endIndex === undefined) {
        endIndex = mergedData.length - 1;
      }
      // Give cache to improve scroll experience
      endIndex = Math.min(endIndex + 1, mergedData.length);
      return {
        scrollHeight: itemTop,
        start: startIndex,
        end: endIndex,
        offset: startOffset
      };
    }, [inVirtual, useVirtual, scrollTop, mergedData, heightUpdatedMark, height]),
    scrollHeight = _React$useMemo.scrollHeight,
    start = _React$useMemo.start,
    end = _React$useMemo.end,
    offset = _React$useMemo.offset;
  rangeRef.current.start = start;
  rangeRef.current.end = end;
  // =============================== In Range ===============================
  var maxScrollHeight = scrollHeight - height;
  var maxScrollHeightRef = (0, React.useRef)(maxScrollHeight);
  maxScrollHeightRef.current = maxScrollHeight;
  function keepInRange(newScrollTop) {
    var newTop = newScrollTop;
    if (!Number.isNaN(maxScrollHeightRef.current)) {
      newTop = Math.min(newTop, maxScrollHeightRef.current);
    }
    newTop = Math.max(newTop, 0);
    return newTop;
  }
  var isScrollAtTop = scrollTop <= 0;
  var isScrollAtBottom = scrollTop >= maxScrollHeight;
  var originScroll = (0, _useOriginScroll.default)(isScrollAtTop, isScrollAtBottom);
  // ================================ Scroll ================================
  function onScrollBar(newScrollTop) {
    var newTop = newScrollTop;
    syncScrollTop(newTop);
  }
  // When data size reduce. It may trigger native scroll event back to fit scroll position
  function onFallbackScroll(e) {
    var newScrollTop = e.currentTarget.scrollTop;
    if (newScrollTop !== scrollTop) {
      syncScrollTop(newScrollTop);
    }
    // Trigger origin onScroll
    onScroll === null || onScroll === void 0 ? void 0 : onScroll(e);
  }
  // Since this added in global,should use ref to keep update
  var _useFrameWheel = (0, _useFrameWheel3.default)(useVirtual, isScrollAtTop, isScrollAtBottom, function (offsetY) {
      syncScrollTop(function (top) {
        var newTop = top + offsetY;
        return newTop;
      });
    }),
    _useFrameWheel2 = (0, _slicedToArray2.default)(_useFrameWheel, 2),
    onRawWheel = _useFrameWheel2[0],
    onFireFoxScroll = _useFrameWheel2[1];
  // Mobile touch move
  (0, _useMobileTouchMove.default)(useVirtual, componentRef, function (deltaY, smoothOffset) {
    if (originScroll(deltaY, smoothOffset)) {
      return false;
    }
    onRawWheel({
      preventDefault: function preventDefault() {},
      deltaY: deltaY
    });
    return true;
  });
  (0, _useLayoutEffect.default)(function () {
    // Firefox only
    function onMozMousePixelScroll(e) {
      if (useVirtual) {
        e.preventDefault();
      }
    }
    componentRef.current.addEventListener('wheel', onRawWheel);
    componentRef.current.addEventListener('DOMMouseScroll', onFireFoxScroll);
    componentRef.current.addEventListener('MozMousePixelScroll', onMozMousePixelScroll);
    return function () {
      if (componentRef.current) {
        componentRef.current.removeEventListener('wheel', onRawWheel);
        componentRef.current.removeEventListener('DOMMouseScroll', onFireFoxScroll);
        componentRef.current.removeEventListener('MozMousePixelScroll', onMozMousePixelScroll);
      }
    };
  }, [useVirtual]);
  // ================================= Ref ==================================
  var scrollTo = (0, _useScrollTo.default)(componentRef, mergedData, heights, itemHeight, getKey, collectHeight, syncScrollTop, function () {
    var _scrollBarRef$current;
    (_scrollBarRef$current = scrollBarRef.current) === null || _scrollBarRef$current === void 0 ? void 0 : _scrollBarRef$current.delayHidden();
  });
  React.useImperativeHandle(ref, function () {
    return {
      scrollTo: scrollTo
    };
  });
  // ================================ Effect ================================
  /** We need told outside that some list not rendered */
  (0, _useLayoutEffect.default)(function () {
    if (onVisibleChange) {
      var renderList = mergedData.slice(start, end + 1);
      onVisibleChange(renderList, mergedData);
    }
  }, [start, end, mergedData]);
  // ================================ Render ================================
  var listChildren = (0, _useChildren.default)(mergedData, start, end, setInstanceRef, children, sharedConfig);
  var componentStyle = null;
  if (height) {
    componentStyle = (0, _objectSpread3.default)((0, _defineProperty2.default)({}, fullHeight ? 'height' : 'maxHeight', height), ScrollStyle);
    if (useVirtual) {
      componentStyle.overflowY = 'hidden';
      if (scrollMoving) {
        componentStyle.pointerEvents = 'none';
      }
    }
  }
  return /*#__PURE__*/React.createElement("div", (0, _extends2.default)({
    style: (0, _objectSpread3.default)((0, _objectSpread3.default)({}, style), {}, {
      position: 'relative'
    }),
    className: mergedClassName
  }, restProps), /*#__PURE__*/React.createElement(Component, {
    className: "".concat(prefixCls, "-holder"),
    style: componentStyle,
    ref: componentRef,
    onScroll: onFallbackScroll
  }, /*#__PURE__*/React.createElement(_Filler.default, {
    prefixCls: prefixCls,
    height: scrollHeight,
    offset: offset,
    onInnerResize: collectHeight,
    ref: fillerInnerRef,
    innerProps: innerProps
  }, listChildren)), useVirtual && /*#__PURE__*/React.createElement(_ScrollBar.default, {
    ref: scrollBarRef,
    prefixCls: prefixCls,
    scrollTop: scrollTop,
    height: height,
    scrollHeight: scrollHeight,
    count: mergedData.length,
    direction: direction,
    onScroll: onScrollBar,
    onStartMove: function onStartMove() {
      setScrollMoving(true);
    },
    onStopMove: function onStopMove() {
      setScrollMoving(false);
    }
  }));
}
var List = /*#__PURE__*/React.forwardRef(RawList);
List.displayName = 'List';
var _default = List;
exports["default"] = _default;

/***/ }),

/***/ 52347:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var _interopRequireWildcard = (__webpack_require__(35876)["default"]);
var _interopRequireDefault = (__webpack_require__(92439)["default"]);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _objectSpread2 = _interopRequireDefault(__webpack_require__(89687));
var _defineProperty2 = _interopRequireDefault(__webpack_require__(513));
var _classCallCheck2 = _interopRequireDefault(__webpack_require__(31456));
var _createClass2 = _interopRequireDefault(__webpack_require__(43977));
var _inherits2 = _interopRequireDefault(__webpack_require__(22261));
var _createSuper2 = _interopRequireDefault(__webpack_require__(62996));
var React = _interopRequireWildcard(__webpack_require__(18038));
var _classnames = _interopRequireDefault(__webpack_require__(89367));
var _raf = _interopRequireDefault(__webpack_require__(83884));
var MIN_SIZE = 20;
function getPageY(e) {
  return 'touches' in e ? e.touches[0].pageY : e.pageY;
}
var ScrollBar = /*#__PURE__*/function (_React$Component) {
  (0, _inherits2.default)(ScrollBar, _React$Component);
  var _super = (0, _createSuper2.default)(ScrollBar);
  function ScrollBar() {
    var _this;
    (0, _classCallCheck2.default)(this, ScrollBar);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(args));
    _this.moveRaf = null;
    _this.scrollbarRef = /*#__PURE__*/React.createRef();
    _this.thumbRef = /*#__PURE__*/React.createRef();
    _this.visibleTimeout = null;
    _this.state = {
      dragging: false,
      pageY: null,
      startTop: null,
      visible: false
    };
    _this.delayHidden = function () {
      clearTimeout(_this.visibleTimeout);
      _this.setState({
        visible: true
      });
      _this.visibleTimeout = setTimeout(function () {
        _this.setState({
          visible: false
        });
      }, 2000);
    };
    _this.onScrollbarTouchStart = function (e) {
      e.preventDefault();
    };
    _this.onContainerMouseDown = function (e) {
      e.stopPropagation();
      e.preventDefault();
    };
    // ======================= Clean =======================
    _this.patchEvents = function () {
      window.addEventListener('mousemove', _this.onMouseMove);
      window.addEventListener('mouseup', _this.onMouseUp);
      _this.thumbRef.current.addEventListener('touchmove', _this.onMouseMove);
      _this.thumbRef.current.addEventListener('touchend', _this.onMouseUp);
    };
    _this.removeEvents = function () {
      window.removeEventListener('mousemove', _this.onMouseMove);
      window.removeEventListener('mouseup', _this.onMouseUp);
      if (_this.thumbRef.current) {
        _this.thumbRef.current.removeEventListener('touchmove', _this.onMouseMove);
        _this.thumbRef.current.removeEventListener('touchend', _this.onMouseUp);
      }
      _raf.default.cancel(_this.moveRaf);
    };
    // ======================= Thumb =======================
    _this.onMouseDown = function (e) {
      var onStartMove = _this.props.onStartMove;
      _this.setState({
        dragging: true,
        pageY: getPageY(e),
        startTop: _this.getTop()
      });
      onStartMove();
      _this.patchEvents();
      e.stopPropagation();
      e.preventDefault();
    };
    _this.onMouseMove = function (e) {
      var _this$state = _this.state,
        dragging = _this$state.dragging,
        pageY = _this$state.pageY,
        startTop = _this$state.startTop;
      var onScroll = _this.props.onScroll;
      _raf.default.cancel(_this.moveRaf);
      if (dragging) {
        var offsetY = getPageY(e) - pageY;
        var newTop = startTop + offsetY;
        var enableScrollRange = _this.getEnableScrollRange();
        var enableHeightRange = _this.getEnableHeightRange();
        var ptg = enableHeightRange ? newTop / enableHeightRange : 0;
        var newScrollTop = Math.ceil(ptg * enableScrollRange);
        _this.moveRaf = (0, _raf.default)(function () {
          onScroll(newScrollTop);
        });
      }
    };
    _this.onMouseUp = function () {
      var onStopMove = _this.props.onStopMove;
      _this.setState({
        dragging: false
      });
      onStopMove();
      _this.removeEvents();
    };
    // ===================== Calculate =====================
    _this.getSpinHeight = function () {
      var _this$props = _this.props,
        height = _this$props.height,
        count = _this$props.count;
      var baseHeight = height / count * 10;
      baseHeight = Math.max(baseHeight, MIN_SIZE);
      baseHeight = Math.min(baseHeight, height / 2);
      return Math.floor(baseHeight);
    };
    _this.getEnableScrollRange = function () {
      var _this$props2 = _this.props,
        scrollHeight = _this$props2.scrollHeight,
        height = _this$props2.height;
      return scrollHeight - height || 0;
    };
    _this.getEnableHeightRange = function () {
      var height = _this.props.height;
      var spinHeight = _this.getSpinHeight();
      return height - spinHeight || 0;
    };
    _this.getTop = function () {
      var scrollTop = _this.props.scrollTop;
      var enableScrollRange = _this.getEnableScrollRange();
      var enableHeightRange = _this.getEnableHeightRange();
      if (scrollTop === 0 || enableScrollRange === 0) {
        return 0;
      }
      var ptg = scrollTop / enableScrollRange;
      return ptg * enableHeightRange;
    };
    // Not show scrollbar when height is large than scrollHeight
    _this.showScroll = function () {
      var _this$props3 = _this.props,
        height = _this$props3.height,
        scrollHeight = _this$props3.scrollHeight;
      return scrollHeight > height;
    };
    return _this;
  }
  (0, _createClass2.default)(ScrollBar, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.scrollbarRef.current.addEventListener('touchstart', this.onScrollbarTouchStart);
      this.thumbRef.current.addEventListener('touchstart', this.onMouseDown);
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (prevProps.scrollTop !== this.props.scrollTop) {
        this.delayHidden();
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      var _this$scrollbarRef$cu, _this$thumbRef$curren;
      this.removeEvents();
      (_this$scrollbarRef$cu = this.scrollbarRef.current) === null || _this$scrollbarRef$cu === void 0 ? void 0 : _this$scrollbarRef$cu.removeEventListener('touchstart', this.onScrollbarTouchStart);
      (_this$thumbRef$curren = this.thumbRef.current) === null || _this$thumbRef$curren === void 0 ? void 0 : _this$thumbRef$curren.removeEventListener('touchstart', this.onMouseDown);
      clearTimeout(this.visibleTimeout);
    }
  }, {
    key: "render",
    value:
    // ====================== Render =======================
    function render() {
      var _this$state2 = this.state,
        dragging = _this$state2.dragging,
        visible = _this$state2.visible;
      var _this$props4 = this.props,
        prefixCls = _this$props4.prefixCls,
        direction = _this$props4.direction;
      var spinHeight = this.getSpinHeight();
      var top = this.getTop();
      var canScroll = this.showScroll();
      var mergedVisible = canScroll && visible;
      var scrollBarDirection = direction === 'rtl' ? {
        left: 0
      } : {
        right: 0
      };
      return /*#__PURE__*/React.createElement("div", {
        ref: this.scrollbarRef,
        className: (0, _classnames.default)("".concat(prefixCls, "-scrollbar"), (0, _defineProperty2.default)({}, "".concat(prefixCls, "-scrollbar-show"), canScroll)),
        style: (0, _objectSpread2.default)((0, _objectSpread2.default)({
          width: 8,
          top: 0,
          bottom: 0
        }, scrollBarDirection), {}, {
          position: 'absolute',
          display: mergedVisible ? null : 'none'
        }),
        onMouseDown: this.onContainerMouseDown,
        onMouseMove: this.delayHidden
      }, /*#__PURE__*/React.createElement("div", {
        ref: this.thumbRef,
        className: (0, _classnames.default)("".concat(prefixCls, "-scrollbar-thumb"), (0, _defineProperty2.default)({}, "".concat(prefixCls, "-scrollbar-thumb-moving"), dragging)),
        style: {
          width: '100%',
          height: spinHeight,
          top: top,
          left: 0,
          position: 'absolute',
          background: 'rgba(0, 0, 0, 0.5)',
          borderRadius: 99,
          cursor: 'pointer',
          userSelect: 'none'
        },
        onMouseDown: this.onMouseDown
      }));
    }
  }]);
  return ScrollBar;
}(React.Component);
exports["default"] = ScrollBar;

/***/ }),

/***/ 76373:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var _interopRequireWildcard = (__webpack_require__(35876)["default"]);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = useChildren;
var React = _interopRequireWildcard(__webpack_require__(18038));
var _Item = __webpack_require__(5547);
function useChildren(list, startIndex, endIndex, setNodeRef, renderFunc, _ref) {
  var getKey = _ref.getKey;
  return list.slice(startIndex, endIndex + 1).map(function (item, index) {
    var eleIndex = startIndex + index;
    var node = renderFunc(item, eleIndex, {
      // style: status === 'MEASURE_START' ? { visibility: 'hidden' } : {},
    });
    var key = getKey(item);
    return /*#__PURE__*/React.createElement(_Item.Item, {
      key: key,
      setRef: function setRef(ele) {
        return setNodeRef(item, ele);
      }
    }, node);
  });
}

/***/ }),

/***/ 70007:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var _interopRequireWildcard = (__webpack_require__(35876)["default"]);
var _interopRequireDefault = (__webpack_require__(92439)["default"]);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = useDiffItem;
var _slicedToArray2 = _interopRequireDefault(__webpack_require__(16522));
var React = _interopRequireWildcard(__webpack_require__(18038));
var _algorithmUtil = __webpack_require__(34733);
function useDiffItem(data, getKey, onDiff) {
  var _React$useState = React.useState(data),
    _React$useState2 = (0, _slicedToArray2.default)(_React$useState, 2),
    prevData = _React$useState2[0],
    setPrevData = _React$useState2[1];
  var _React$useState3 = React.useState(null),
    _React$useState4 = (0, _slicedToArray2.default)(_React$useState3, 2),
    diffItem = _React$useState4[0],
    setDiffItem = _React$useState4[1];
  React.useEffect(function () {
    var diff = (0, _algorithmUtil.findListDiffIndex)(prevData || [], data || [], getKey);
    if ((diff === null || diff === void 0 ? void 0 : diff.index) !== undefined) {
      onDiff === null || onDiff === void 0 ? void 0 : onDiff(diff.index);
      setDiffItem(data[diff.index]);
    }
    setPrevData(data);
  }, [data]);
  return [diffItem];
}

/***/ }),

/***/ 20743:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var _interopRequireDefault = (__webpack_require__(92439)["default"]);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = useFrameWheel;
var _react = __webpack_require__(18038);
var _raf = _interopRequireDefault(__webpack_require__(83884));
var _isFirefox = _interopRequireDefault(__webpack_require__(23786));
var _useOriginScroll = _interopRequireDefault(__webpack_require__(36387));
function useFrameWheel(inVirtual, isScrollAtTop, isScrollAtBottom, onWheelDelta) {
  var offsetRef = (0, _react.useRef)(0);
  var nextFrameRef = (0, _react.useRef)(null);
  // Firefox patch
  var wheelValueRef = (0, _react.useRef)(null);
  var isMouseScrollRef = (0, _react.useRef)(false);
  // Scroll status sync
  var originScroll = (0, _useOriginScroll.default)(isScrollAtTop, isScrollAtBottom);
  function onWheel(event) {
    if (!inVirtual) return;
    _raf.default.cancel(nextFrameRef.current);
    var deltaY = event.deltaY;
    offsetRef.current += deltaY;
    wheelValueRef.current = deltaY;
    // Do nothing when scroll at the edge, Skip check when is in scroll
    if (originScroll(deltaY)) return;
    // Proxy of scroll events
    if (!_isFirefox.default) {
      event.preventDefault();
    }
    nextFrameRef.current = (0, _raf.default)(function () {
      // Patch a multiple for Firefox to fix wheel number too small
      // ref: https://github.com/ant-design/ant-design/issues/26372#issuecomment-679460266
      var patchMultiple = isMouseScrollRef.current ? 10 : 1;
      onWheelDelta(offsetRef.current * patchMultiple);
      offsetRef.current = 0;
    });
  }
  // A patch for firefox
  function onFireFoxScroll(event) {
    if (!inVirtual) return;
    isMouseScrollRef.current = event.detail === wheelValueRef.current;
  }
  return [onWheel, onFireFoxScroll];
}

/***/ }),

/***/ 50958:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var _interopRequireWildcard = (__webpack_require__(35876)["default"]);
var _interopRequireDefault = (__webpack_require__(92439)["default"]);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = useHeights;
var _slicedToArray2 = _interopRequireDefault(__webpack_require__(16522));
var React = _interopRequireWildcard(__webpack_require__(18038));
var _findDOMNode = _interopRequireDefault(__webpack_require__(29321));
var _raf = _interopRequireDefault(__webpack_require__(83884));
var _CacheMap = _interopRequireDefault(__webpack_require__(25844));
function useHeights(getKey, onItemAdd, onItemRemove) {
  var _React$useState = React.useState(0),
    _React$useState2 = (0, _slicedToArray2.default)(_React$useState, 2),
    updatedMark = _React$useState2[0],
    setUpdatedMark = _React$useState2[1];
  var instanceRef = (0, React.useRef)(new Map());
  var heightsRef = (0, React.useRef)(new _CacheMap.default());
  var collectRafRef = (0, React.useRef)();
  function cancelRaf() {
    _raf.default.cancel(collectRafRef.current);
  }
  function collectHeight() {
    cancelRaf();
    collectRafRef.current = (0, _raf.default)(function () {
      instanceRef.current.forEach(function (element, key) {
        if (element && element.offsetParent) {
          var htmlElement = (0, _findDOMNode.default)(element);
          var offsetHeight = htmlElement.offsetHeight;
          if (heightsRef.current.get(key) !== offsetHeight) {
            heightsRef.current.set(key, htmlElement.offsetHeight);
          }
        }
      });
      // Always trigger update mark to tell parent that should re-calculate heights when resized
      setUpdatedMark(function (c) {
        return c + 1;
      });
    });
  }
  function setInstanceRef(item, instance) {
    var key = getKey(item);
    var origin = instanceRef.current.get(key);
    if (instance) {
      instanceRef.current.set(key, instance);
      collectHeight();
    } else {
      instanceRef.current.delete(key);
    }
    // Instance changed
    if (!origin !== !instance) {
      if (instance) {
        onItemAdd === null || onItemAdd === void 0 ? void 0 : onItemAdd(item);
      } else {
        onItemRemove === null || onItemRemove === void 0 ? void 0 : onItemRemove(item);
      }
    }
  }
  (0, React.useEffect)(function () {
    return cancelRaf;
  }, []);
  return [setInstanceRef, collectHeight, heightsRef.current, updatedMark];
}

/***/ }),

/***/ 62540:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var _interopRequireDefault = (__webpack_require__(92439)["default"]);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = useMobileTouchMove;
var _react = __webpack_require__(18038);
var _useLayoutEffect = _interopRequireDefault(__webpack_require__(50368));
var SMOOTH_PTG = 14 / 15;
function useMobileTouchMove(inVirtual, listRef, callback) {
  var touchedRef = (0, _react.useRef)(false);
  var touchYRef = (0, _react.useRef)(0);
  var elementRef = (0, _react.useRef)(null);
  // Smooth scroll
  var intervalRef = (0, _react.useRef)(null);
  /* eslint-disable prefer-const */
  var cleanUpEvents;
  var onTouchMove = function onTouchMove(e) {
    if (touchedRef.current) {
      var currentY = Math.ceil(e.touches[0].pageY);
      var offsetY = touchYRef.current - currentY;
      touchYRef.current = currentY;
      if (callback(offsetY)) {
        e.preventDefault();
      }
      // Smooth interval
      clearInterval(intervalRef.current);
      intervalRef.current = setInterval(function () {
        offsetY *= SMOOTH_PTG;
        if (!callback(offsetY, true) || Math.abs(offsetY) <= 0.1) {
          clearInterval(intervalRef.current);
        }
      }, 16);
    }
  };
  var onTouchEnd = function onTouchEnd() {
    touchedRef.current = false;
    cleanUpEvents();
  };
  var onTouchStart = function onTouchStart(e) {
    cleanUpEvents();
    if (e.touches.length === 1 && !touchedRef.current) {
      touchedRef.current = true;
      touchYRef.current = Math.ceil(e.touches[0].pageY);
      elementRef.current = e.target;
      elementRef.current.addEventListener('touchmove', onTouchMove);
      elementRef.current.addEventListener('touchend', onTouchEnd);
    }
  };
  cleanUpEvents = function cleanUpEvents() {
    if (elementRef.current) {
      elementRef.current.removeEventListener('touchmove', onTouchMove);
      elementRef.current.removeEventListener('touchend', onTouchEnd);
    }
  };
  (0, _useLayoutEffect.default)(function () {
    if (inVirtual) {
      listRef.current.addEventListener('touchstart', onTouchStart);
    }
    return function () {
      var _listRef$current;
      (_listRef$current = listRef.current) === null || _listRef$current === void 0 ? void 0 : _listRef$current.removeEventListener('touchstart', onTouchStart);
      cleanUpEvents();
      clearInterval(intervalRef.current);
    };
  }, [inVirtual]);
}

/***/ }),

/***/ 36387:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _react = __webpack_require__(18038);
var _default = function _default(isScrollAtTop, isScrollAtBottom) {
  // Do lock for a wheel when scrolling
  var lockRef = (0, _react.useRef)(false);
  var lockTimeoutRef = (0, _react.useRef)(null);
  function lockScroll() {
    clearTimeout(lockTimeoutRef.current);
    lockRef.current = true;
    lockTimeoutRef.current = setTimeout(function () {
      lockRef.current = false;
    }, 50);
  }
  // Pass to ref since global add is in closure
  var scrollPingRef = (0, _react.useRef)({
    top: isScrollAtTop,
    bottom: isScrollAtBottom
  });
  scrollPingRef.current.top = isScrollAtTop;
  scrollPingRef.current.bottom = isScrollAtBottom;
  return function (deltaY) {
    var smoothOffset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    var originScroll =
    // Pass origin wheel when on the top
    deltaY < 0 && scrollPingRef.current.top ||
    // Pass origin wheel when on the bottom
    deltaY > 0 && scrollPingRef.current.bottom;
    if (smoothOffset && originScroll) {
      // No need lock anymore when it's smooth offset from touchMove interval
      clearTimeout(lockTimeoutRef.current);
      lockRef.current = false;
    } else if (!originScroll || lockRef.current) {
      lockScroll();
    }
    return !lockRef.current && originScroll;
  };
};
exports["default"] = _default;

/***/ }),

/***/ 94179:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var _interopRequireWildcard = (__webpack_require__(35876)["default"]);
var _interopRequireDefault = (__webpack_require__(92439)["default"]);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = useScrollTo;
var _typeof2 = _interopRequireDefault(__webpack_require__(67236));
var React = _interopRequireWildcard(__webpack_require__(18038));
var _raf = _interopRequireDefault(__webpack_require__(83884));
/* eslint-disable no-param-reassign */

function useScrollTo(containerRef, data, heights, itemHeight, getKey, collectHeight, syncScrollTop, triggerFlash) {
  var scrollRef = React.useRef();
  return function (arg) {
    // When not argument provided, we think dev may want to show the scrollbar
    if (arg === null || arg === undefined) {
      triggerFlash();
      return;
    }
    // Normal scroll logic
    _raf.default.cancel(scrollRef.current);
    if (typeof arg === 'number') {
      syncScrollTop(arg);
    } else if (arg && (0, _typeof2.default)(arg) === 'object') {
      var index;
      var align = arg.align;
      if ('index' in arg) {
        index = arg.index;
      } else {
        index = data.findIndex(function (item) {
          return getKey(item) === arg.key;
        });
      }
      var _arg$offset = arg.offset,
        offset = _arg$offset === void 0 ? 0 : _arg$offset;
      // We will retry 3 times in case dynamic height shaking
      var syncScroll = function syncScroll(times, targetAlign) {
        if (times < 0 || !containerRef.current) return;
        var height = containerRef.current.clientHeight;
        var needCollectHeight = false;
        var newTargetAlign = targetAlign;
        // Go to next frame if height not exist
        if (height) {
          var mergedAlign = targetAlign || align;
          // Get top & bottom
          var stackTop = 0;
          var itemTop = 0;
          var itemBottom = 0;
          var maxLen = Math.min(data.length, index);
          for (var i = 0; i <= maxLen; i += 1) {
            var key = getKey(data[i]);
            itemTop = stackTop;
            var cacheHeight = heights.get(key);
            itemBottom = itemTop + (cacheHeight === undefined ? itemHeight : cacheHeight);
            stackTop = itemBottom;
            if (i === index && cacheHeight === undefined) {
              needCollectHeight = true;
            }
          }
          // Scroll to
          var targetTop = null;
          switch (mergedAlign) {
            case 'top':
              targetTop = itemTop - offset;
              break;
            case 'bottom':
              targetTop = itemBottom - height + offset;
              break;
            default:
              {
                var scrollTop = containerRef.current.scrollTop;
                var scrollBottom = scrollTop + height;
                if (itemTop < scrollTop) {
                  newTargetAlign = 'top';
                } else if (itemBottom > scrollBottom) {
                  newTargetAlign = 'bottom';
                }
              }
          }
          if (targetTop !== null && targetTop !== containerRef.current.scrollTop) {
            syncScrollTop(targetTop);
          }
        }
        // We will retry since element may not sync height as it described
        scrollRef.current = (0, _raf.default)(function () {
          if (needCollectHeight) {
            collectHeight();
          }
          syncScroll(times - 1, newTargetAlign);
        }, 2); // Delay 2 to wait for List collect heights
      };

      syncScroll(3);
    }
  };
}

/***/ }),

/***/ 56927:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var _interopRequireDefault = (__webpack_require__(92439)["default"]);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _List = _interopRequireDefault(__webpack_require__(8717));
var _default = _List.default;
exports["default"] = _default;

/***/ }),

/***/ 25844:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var _interopRequireDefault = (__webpack_require__(92439)["default"]);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _classCallCheck2 = _interopRequireDefault(__webpack_require__(31456));
var _createClass2 = _interopRequireDefault(__webpack_require__(43977));
// Firefox has low performance of map.
var CacheMap = /*#__PURE__*/function () {
  function CacheMap() {
    (0, _classCallCheck2.default)(this, CacheMap);
    this.maps = void 0;
    this.maps = Object.create(null);
  }
  (0, _createClass2.default)(CacheMap, [{
    key: "set",
    value: function set(key, value) {
      this.maps[key] = value;
    }
  }, {
    key: "get",
    value: function get(key) {
      return this.maps[key];
    }
  }]);
  return CacheMap;
}();
var _default = CacheMap;
exports["default"] = _default;

/***/ }),

/***/ 34733:
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.findListDiffIndex = findListDiffIndex;
exports.getIndexByStartLoc = getIndexByStartLoc;
/**
 * Get index with specific start index one by one. e.g.
 * min: 3, max: 9, start: 6
 *
 * Return index is:
 * [0]: 6
 * [1]: 7
 * [2]: 5
 * [3]: 8
 * [4]: 4
 * [5]: 9
 * [6]: 3
 */
function getIndexByStartLoc(min, max, start, index) {
  var beforeCount = start - min;
  var afterCount = max - start;
  var balanceCount = Math.min(beforeCount, afterCount) * 2;
  // Balance
  if (index <= balanceCount) {
    var stepIndex = Math.floor(index / 2);
    if (index % 2) {
      return start + stepIndex + 1;
    }
    return start - stepIndex;
  }
  // One is out of range
  if (beforeCount > afterCount) {
    return start - (index - afterCount);
  }
  return start + (index - beforeCount);
}
/**
 * We assume that 2 list has only 1 item diff and others keeping the order.
 * So we can use dichotomy algorithm to find changed one.
 */
function findListDiffIndex(originList, targetList, getKey) {
  var originLen = originList.length;
  var targetLen = targetList.length;
  var shortList;
  var longList;
  if (originLen === 0 && targetLen === 0) {
    return null;
  }
  if (originLen < targetLen) {
    shortList = originList;
    longList = targetList;
  } else {
    shortList = targetList;
    longList = originList;
  }
  var notExistKey = {
    __EMPTY_ITEM__: true
  };
  function getItemKey(item) {
    if (item !== undefined) {
      return getKey(item);
    }
    return notExistKey;
  }
  // Loop to find diff one
  var diffIndex = null;
  var multiple = Math.abs(originLen - targetLen) !== 1;
  for (var i = 0; i < longList.length; i += 1) {
    var shortKey = getItemKey(shortList[i]);
    var longKey = getItemKey(longList[i]);
    if (shortKey !== longKey) {
      diffIndex = i;
      multiple = multiple || shortKey !== getItemKey(longList[i + 1]);
      break;
    }
  }
  return diffIndex === null ? null : {
    index: diffIndex,
    multiple: multiple
  };
}

/***/ }),

/***/ 23786:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var _interopRequireDefault = (__webpack_require__(92439)["default"]);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _typeof2 = _interopRequireDefault(__webpack_require__(67236));
var isFF = (typeof navigator === "undefined" ? "undefined" : (0, _typeof2.default)(navigator)) === 'object' && /Firefox/i.test(navigator.userAgent);
var _default = isFF;
exports["default"] = _default;

/***/ })

};
;