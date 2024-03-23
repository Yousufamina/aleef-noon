"use strict";
exports.id = 745;
exports.ids = [745];
exports.modules = {

/***/ 80745:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(18038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_select__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(13214);
// import React from 'react';
// import { Select } from 'antd';
// const { Option } = Select;
// const handleChange = (value) => {
//   console.log(`selected ${value}`);
// };
// const SelectInput = ({placeholder, options}) => (
//   <Select
//     mode="tags"
//     style={{
//       width: '100%',
//       borderRadius: 0,
//       height: '44px',
//     }}
//     className='selectInput'
//     onChange={handleChange}
//     tokenSeparators={[',']}
//     placeholder={placeholder}
//   >
//     {options.map((option) => (
//       <Option key={option.value} value={option.value}>
//         {option.label}
//       </Option>
//     ))}
//   </Select>
// );
// export default SelectInput;



const { Option } = antd_lib_select__WEBPACK_IMPORTED_MODULE_2__["default"];
const SelectInput = ({ placeholder, options, onChange })=>{
    const handleChange = (value)=>{
        if (onChange) {
            onChange(value); // Call the onChange callback with the selected value(s)
        }
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd_lib_select__WEBPACK_IMPORTED_MODULE_2__["default"], {
        mode: "tags",
        style: {
            width: "100%",
            borderRadius: 0,
            height: "44px"
        },
        className: "selectInput",
        onChange: handleChange,
        tokenSeparators: [
            ","
        ],
        placeholder: placeholder,
        children: options.map((option)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Option, {
                value: option.value,
                children: option.label
            }, option.value))
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SelectInput);


/***/ })

};
;