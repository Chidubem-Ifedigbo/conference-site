"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/speakers",{

/***/ "./src/speakersReducer.js":
/*!********************************!*\
  !*** ./src/speakersReducer.js ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @swc/helpers/src/_object_spread.mjs */ \"./node_modules/@swc/helpers/src/_object_spread.mjs\");\n/* harmony import */ var _swc_helpers_src_object_spread_props_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @swc/helpers/src/_object_spread_props.mjs */ \"./node_modules/@swc/helpers/src/_object_spread_props.mjs\");\n\n\nvar speakersReducer = function(state, action) {\n    var updateFavorite = function(favoriteValue) {\n        return state.map(function(item, index) {\n            if (item.id === action.sessionId) {\n                return (0,_swc_helpers_src_object_spread_props_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])((0,_swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({}, item), {\n                    favorite: favoriteValue\n                });\n            }\n            return item;\n        });\n    };\n    switch(action.type){\n        case \"setSpeakerList\":\n            {\n                return action.data;\n            }\n        case \"favorite\":\n            {\n                return updateFavorite(true);\n            }\n            ;\n        case \"unfavorite\":\n            {\n                return updateFavorite(false);\n            }\n            ;\n        default:\n            return state;\n    }\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (speakersReducer);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc3BlYWtlcnNSZWR1Y2VyLmpzLmpzIiwibWFwcGluZ3MiOiI7OztBQUFBOztBQUFBLElBQU1BLGVBQWUsR0FBRyxTQUFDQyxLQUFLLEVBQUNDLE1BQU0sRUFBSTtJQUNyQyxJQUFNQyxjQUFjLEdBQUcsU0FBQ0MsYUFBYSxFQUFLO1FBQ3hDLE9BQU9ILEtBQUssQ0FBQ0ksR0FBRyxDQUFDLFNBQUNDLElBQUksRUFBQ0MsS0FBSyxFQUFLO1lBQy9CLElBQUdELElBQUksQ0FBQ0UsRUFBRSxLQUFLTixNQUFNLENBQUNPLFNBQVMsRUFBQztnQkFDOUIsT0FBTyx3S0FBSUgsSUFBSTtvQkFBQ0ksUUFBUSxFQUFFTixhQUFhO2tCQUFDO1lBQzVDLENBQUM7WUFDRCxPQUFPRSxJQUFJLENBQUM7UUFDZCxDQUFDLENBQUM7SUFDRixDQUFDO0lBQ0QsT0FBUUosTUFBTSxDQUFDUyxJQUFJO1FBQ2pCLEtBQUssZ0JBQWdCO1lBQUc7Z0JBQ3RCLE9BQU9ULE1BQU0sQ0FBQ1UsSUFBSSxDQUFDO1lBQ3JCLENBQUM7UUFDRCxLQUFLLFVBQVU7WUFBRTtnQkFDZixPQUFPVCxjQUFjLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDOUI7O1FBQ0EsS0FBSyxZQUFZO1lBQUU7Z0JBQ2pCLE9BQU9BLGNBQWMsQ0FBQyxLQUFLLENBQUM7WUFDOUI7O1FBQ0E7WUFDRSxPQUFPRixLQUFLO0tBQ2Y7QUFDSCxDQUFDO0FBRUQsK0RBQWVELGVBQWUsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvc3BlYWtlcnNSZWR1Y2VyLmpzPzY0NmYiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3Qgc3BlYWtlcnNSZWR1Y2VyID0gKHN0YXRlLGFjdGlvbikgPT57XHJcbiAgICBjb25zdCB1cGRhdGVGYXZvcml0ZSA9IChmYXZvcml0ZVZhbHVlKSA9PiB7XHJcbiAgICAgIHJldHVybiBzdGF0ZS5tYXAoKGl0ZW0saW5kZXgpID0+IHtcclxuICAgICAgICBpZihpdGVtLmlkID09PSBhY3Rpb24uc2Vzc2lvbklkKXtcclxuICAgICAgICAgIHJldHVybiB7Li4uaXRlbSxmYXZvcml0ZTogZmF2b3JpdGVWYWx1ZX1cclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gaXRlbTtcclxuICAgIH0pXHJcbiAgICB9XHJcbiAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICAgIGNhc2UgXCJzZXRTcGVha2VyTGlzdFwiIDoge1xyXG4gICAgICAgIHJldHVybiBhY3Rpb24uZGF0YTtcclxuICAgICAgfVxyXG4gICAgICBjYXNlIFwiZmF2b3JpdGVcIjoge1xyXG4gICAgICAgIHJldHVybiB1cGRhdGVGYXZvcml0ZSh0cnVlKTtcclxuICAgICAgfTtcclxuICAgICAgY2FzZSBcInVuZmF2b3JpdGVcIjoge1xyXG4gICAgICAgIHJldHVybiB1cGRhdGVGYXZvcml0ZShmYWxzZSlcclxuICAgICAgfTtcclxuICAgICAgZGVmYXVsdDogXHJcbiAgICAgICAgcmV0dXJuIHN0YXRlXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBleHBvcnQgZGVmYXVsdCBzcGVha2Vyc1JlZHVjZXI7Il0sIm5hbWVzIjpbInNwZWFrZXJzUmVkdWNlciIsInN0YXRlIiwiYWN0aW9uIiwidXBkYXRlRmF2b3JpdGUiLCJmYXZvcml0ZVZhbHVlIiwibWFwIiwiaXRlbSIsImluZGV4IiwiaWQiLCJzZXNzaW9uSWQiLCJmYXZvcml0ZSIsInR5cGUiLCJkYXRhIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/speakersReducer.js\n"));

/***/ })

});