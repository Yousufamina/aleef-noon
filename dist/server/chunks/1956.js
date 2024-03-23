"use strict";
exports.id = 1956;
exports.ids = [1956];
exports.modules = {

/***/ 80144:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var _interopRequireDefault = (__webpack_require__(92439)["default"]);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _extends2 = _interopRequireDefault(__webpack_require__(43259));
var _defineProperty2 = _interopRequireDefault(__webpack_require__(513));
var _slicedToArray2 = _interopRequireDefault(__webpack_require__(16522));
var _objectWithoutProperties2 = _interopRequireDefault(__webpack_require__(14498));
var _trigger = _interopRequireDefault(__webpack_require__(71042));
var _classnames = _interopRequireDefault(__webpack_require__(89367));
var _ref = __webpack_require__(310);
var _react = _interopRequireDefault(__webpack_require__(18038));
var _useAccessibility = _interopRequireDefault(__webpack_require__(49800));
var _Overlay = _interopRequireDefault(__webpack_require__(73907));
var _placements = _interopRequireDefault(__webpack_require__(14967));
var _excluded = ["arrow", "prefixCls", "transitionName", "animation", "align", "placement", "placements", "getPopupContainer", "showAction", "hideAction", "overlayClassName", "overlayStyle", "visible", "trigger", "autoFocus", "overlay", "children", "onVisibleChange"];
function Dropdown(props, ref) {
  var _children$props;
  var _props$arrow = props.arrow,
    arrow = _props$arrow === void 0 ? false : _props$arrow,
    _props$prefixCls = props.prefixCls,
    prefixCls = _props$prefixCls === void 0 ? 'rc-dropdown' : _props$prefixCls,
    transitionName = props.transitionName,
    animation = props.animation,
    align = props.align,
    _props$placement = props.placement,
    placement = _props$placement === void 0 ? 'bottomLeft' : _props$placement,
    _props$placements = props.placements,
    placements = _props$placements === void 0 ? _placements.default : _props$placements,
    getPopupContainer = props.getPopupContainer,
    showAction = props.showAction,
    hideAction = props.hideAction,
    overlayClassName = props.overlayClassName,
    overlayStyle = props.overlayStyle,
    visible = props.visible,
    _props$trigger = props.trigger,
    trigger = _props$trigger === void 0 ? ['hover'] : _props$trigger,
    autoFocus = props.autoFocus,
    overlay = props.overlay,
    children = props.children,
    onVisibleChange = props.onVisibleChange,
    otherProps = (0, _objectWithoutProperties2.default)(props, _excluded);
  var _React$useState = _react.default.useState(),
    _React$useState2 = (0, _slicedToArray2.default)(_React$useState, 2),
    triggerVisible = _React$useState2[0],
    setTriggerVisible = _React$useState2[1];
  var mergedVisible = 'visible' in props ? visible : triggerVisible;
  var triggerRef = _react.default.useRef(null);
  var overlayRef = _react.default.useRef(null);
  var childRef = _react.default.useRef(null);
  _react.default.useImperativeHandle(ref, function () {
    return triggerRef.current;
  });
  var handleVisibleChange = function handleVisibleChange(newVisible) {
    setTriggerVisible(newVisible);
    onVisibleChange === null || onVisibleChange === void 0 ? void 0 : onVisibleChange(newVisible);
  };
  (0, _useAccessibility.default)({
    visible: mergedVisible,
    triggerRef: childRef,
    onVisibleChange: handleVisibleChange,
    autoFocus: autoFocus,
    overlayRef: overlayRef
  });
  var onClick = function onClick(e) {
    var onOverlayClick = props.onOverlayClick;
    setTriggerVisible(false);
    if (onOverlayClick) {
      onOverlayClick(e);
    }
  };
  var getMenuElement = function getMenuElement() {
    return /*#__PURE__*/_react.default.createElement(_Overlay.default, {
      ref: overlayRef,
      overlay: overlay,
      prefixCls: prefixCls,
      arrow: arrow
    });
  };
  var getMenuElementOrLambda = function getMenuElementOrLambda() {
    if (typeof overlay === 'function') {
      return getMenuElement;
    }
    return getMenuElement();
  };
  var getMinOverlayWidthMatchTrigger = function getMinOverlayWidthMatchTrigger() {
    var minOverlayWidthMatchTrigger = props.minOverlayWidthMatchTrigger,
      alignPoint = props.alignPoint;
    if ('minOverlayWidthMatchTrigger' in props) {
      return minOverlayWidthMatchTrigger;
    }
    return !alignPoint;
  };
  var getOpenClassName = function getOpenClassName() {
    var openClassName = props.openClassName;
    if (openClassName !== undefined) {
      return openClassName;
    }
    return "".concat(prefixCls, "-open");
  };
  var childrenNode = /*#__PURE__*/_react.default.cloneElement(children, {
    className: (0, _classnames.default)((_children$props = children.props) === null || _children$props === void 0 ? void 0 : _children$props.className, mergedVisible && getOpenClassName()),
    ref: (0, _ref.supportRef)(children) ? (0, _ref.composeRef)(childRef, children.ref) : undefined
  });
  var triggerHideAction = hideAction;
  if (!triggerHideAction && trigger.indexOf('contextMenu') !== -1) {
    triggerHideAction = ['click'];
  }
  return /*#__PURE__*/_react.default.createElement(_trigger.default, (0, _extends2.default)({
    builtinPlacements: placements
  }, otherProps, {
    prefixCls: prefixCls,
    ref: triggerRef,
    popupClassName: (0, _classnames.default)(overlayClassName, (0, _defineProperty2.default)({}, "".concat(prefixCls, "-show-arrow"), arrow)),
    popupStyle: overlayStyle,
    action: trigger,
    showAction: showAction,
    hideAction: triggerHideAction,
    popupPlacement: placement,
    popupAlign: align,
    popupTransitionName: transitionName,
    popupAnimation: animation,
    popupVisible: mergedVisible,
    stretch: getMinOverlayWidthMatchTrigger() ? 'minWidth' : '',
    popup: getMenuElementOrLambda(),
    onPopupVisibleChange: handleVisibleChange,
    onPopupClick: onClick,
    getPopupContainer: getPopupContainer
  }), childrenNode);
}
var _default = /*#__PURE__*/_react.default.forwardRef(Dropdown);
exports["default"] = _default;

/***/ }),

/***/ 73907:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var _interopRequireWildcard = (__webpack_require__(35876)["default"]);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _react = _interopRequireWildcard(__webpack_require__(18038));
var _ref = __webpack_require__(310);
var Overlay = /*#__PURE__*/(0, _react.forwardRef)(function (props, ref) {
  var overlay = props.overlay,
    arrow = props.arrow,
    prefixCls = props.prefixCls;
  var overlayNode = (0, _react.useMemo)(function () {
    var overlayElement;
    if (typeof overlay === 'function') {
      overlayElement = overlay();
    } else {
      overlayElement = overlay;
    }
    return overlayElement;
  }, [overlay]);
  var composedRef = (0, _ref.composeRef)(ref, overlayNode === null || overlayNode === void 0 ? void 0 : overlayNode.ref);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, arrow && /*#__PURE__*/_react.default.createElement("div", {
    className: "".concat(prefixCls, "-arrow")
  }), /*#__PURE__*/_react.default.cloneElement(overlayNode, {
    ref: (0, _ref.supportRef)(overlayNode) ? composedRef : undefined
  }));
});
var _default = Overlay;
exports["default"] = _default;

/***/ }),

/***/ 49800:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var _interopRequireWildcard = (__webpack_require__(35876)["default"]);
var _interopRequireDefault = (__webpack_require__(92439)["default"]);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = useAccessibility;
var _KeyCode = _interopRequireDefault(__webpack_require__(81390));
var _raf = _interopRequireDefault(__webpack_require__(83884));
var React = _interopRequireWildcard(__webpack_require__(18038));
var ESC = _KeyCode.default.ESC,
  TAB = _KeyCode.default.TAB;
function useAccessibility(_ref) {
  var visible = _ref.visible,
    triggerRef = _ref.triggerRef,
    onVisibleChange = _ref.onVisibleChange,
    autoFocus = _ref.autoFocus,
    overlayRef = _ref.overlayRef;
  var focusMenuRef = React.useRef(false);
  var handleCloseMenuAndReturnFocus = function handleCloseMenuAndReturnFocus() {
    if (visible) {
      var _triggerRef$current, _triggerRef$current$f;
      (_triggerRef$current = triggerRef.current) === null || _triggerRef$current === void 0 ? void 0 : (_triggerRef$current$f = _triggerRef$current.focus) === null || _triggerRef$current$f === void 0 ? void 0 : _triggerRef$current$f.call(_triggerRef$current);
      onVisibleChange === null || onVisibleChange === void 0 ? void 0 : onVisibleChange(false);
    }
  };
  var focusMenu = function focusMenu() {
    var _overlayRef$current;
    if ((_overlayRef$current = overlayRef.current) !== null && _overlayRef$current !== void 0 && _overlayRef$current.focus) {
      overlayRef.current.focus();
      focusMenuRef.current = true;
      return true;
    }
    return false;
  };
  var handleKeyDown = function handleKeyDown(event) {
    switch (event.keyCode) {
      case ESC:
        handleCloseMenuAndReturnFocus();
        break;
      case TAB:
        {
          var focusResult = false;
          if (!focusMenuRef.current) {
            focusResult = focusMenu();
          }
          if (focusResult) {
            event.preventDefault();
          } else {
            handleCloseMenuAndReturnFocus();
          }
          break;
        }
    }
  };
  React.useEffect(function () {
    if (visible) {
      window.addEventListener("keydown", handleKeyDown);
      if (autoFocus) {
        // FIXME: hack with raf
        (0, _raf.default)(focusMenu, 3);
      }
      return function () {
        window.removeEventListener("keydown", handleKeyDown);
        focusMenuRef.current = false;
      };
    }
    return function () {
      focusMenuRef.current = false;
    };
  }, [visible]); // eslint-disable-line react-hooks/exhaustive-deps
}

/***/ }),

/***/ 31956:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var _interopRequireDefault = (__webpack_require__(92439)["default"]);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _Dropdown = _interopRequireDefault(__webpack_require__(80144));
var _default = _Dropdown.default;
exports["default"] = _default;

/***/ }),

/***/ 14967:
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var autoAdjustOverflow = {
  adjustX: 1,
  adjustY: 1
};
var targetOffset = [0, 0];
var placements = {
  topLeft: {
    points: ['bl', 'tl'],
    overflow: autoAdjustOverflow,
    offset: [0, -4],
    targetOffset: targetOffset
  },
  top: {
    points: ['bc', 'tc'],
    overflow: autoAdjustOverflow,
    offset: [0, -4],
    targetOffset: targetOffset
  },
  topRight: {
    points: ['br', 'tr'],
    overflow: autoAdjustOverflow,
    offset: [0, -4],
    targetOffset: targetOffset
  },
  bottomLeft: {
    points: ['tl', 'bl'],
    overflow: autoAdjustOverflow,
    offset: [0, 4],
    targetOffset: targetOffset
  },
  bottom: {
    points: ['tc', 'bc'],
    overflow: autoAdjustOverflow,
    offset: [0, 4],
    targetOffset: targetOffset
  },
  bottomRight: {
    points: ['tr', 'br'],
    overflow: autoAdjustOverflow,
    offset: [0, 4],
    targetOffset: targetOffset
  }
};
var _default = placements;
exports["default"] = _default;

/***/ })

};
;