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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @swc/helpers/src/_object_spread.mjs */ \"./node_modules/@swc/helpers/src/_object_spread.mjs\");\n/* harmony import */ var _swc_helpers_src_object_spread_props_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @swc/helpers/src/_object_spread_props.mjs */ \"./node_modules/@swc/helpers/src/_object_spread_props.mjs\");\n\n\nvar speakersReducer = function(state, action) {\n    var updateFavorite = function(favoriteValue) {\n        return state.map(function(item, index) {\n            if (item.id === action.sessionId) {\n                return (0,_swc_helpers_src_object_spread_props_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])((0,_swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({}, item), {\n                    favorite: favoriteValue\n                });\n            }\n            return item;\n        });\n    };\n    switch(action.type){\n        case \"setSpeakerList\":\n            {\n                return action.data;\n            }\n        case \"favorite\":\n            {\n                return updateFavorite(true);\n            }\n            ;\n        case \"unfavorite\":\n            {\n                return updateFavorite(false);\n            }\n            ;\n        default:\n            return state;\n    }\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (speakersReducer);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc3BlYWtlcnNSZWR1Y2VyLmpzLmpzIiwibWFwcGluZ3MiOiI7OztBQUFBOztBQUFBLElBQU1BLGVBQWUsR0FBRyxTQUFDQyxLQUFLLEVBQUNDLE1BQU0sRUFBSTtJQUNyQyxJQUFNQyxjQUFjLEdBQUcsU0FBQ0MsYUFBYSxFQUFLO1FBQ3hDLE9BQU9ILEtBQUssQ0FBQ0ksR0FBRyxDQUFDLFNBQUNDLElBQUksRUFBQ0MsS0FBSyxFQUFLO1lBQy9CLElBQUdELElBQUksQ0FBQ0UsRUFBRSxLQUFLTixNQUFNLENBQUNPLFNBQVMsRUFBQztnQkFDOUIsT0FBTyx3S0FBSUgsSUFBSTtvQkFBQ0ksUUFBUSxFQUFFTixhQUFhO2tCQUFDO1lBQzVDLENBQUM7WUFDRCxPQUFPRSxJQUFJLENBQUM7UUFDZCxDQUFDLENBQUM7SUFDRixDQUFDO0lBQ0QsT0FBUUosTUFBTSxDQUFDUyxJQUFJO1FBQ2pCLEtBQUssZ0JBQWdCO1lBQUc7Z0JBQ3RCLE9BQU9ULE1BQU0sQ0FBQ1UsSUFBSSxDQUFDO1lBQ3JCLENBQUM7UUFDRCxLQUFLLFVBQVU7WUFBRTtnQkFDZixPQUFPVCxjQUFjLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDOUI7O1FBQ0EsS0FBSyxZQUFZO1lBQUU7Z0JBQ2pCLE9BQU9BLGNBQWMsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUMvQjs7UUFDQTtZQUNFLE9BQU9GLEtBQUssQ0FBQztLQUNoQjtBQUNILENBQUM7QUFFRCwrREFBZUQsZUFBZSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9zcGVha2Vyc1JlZHVjZXIuanM/NjQ2ZiJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBzcGVha2Vyc1JlZHVjZXIgPSAoc3RhdGUsYWN0aW9uKSA9PntcclxuICAgIGNvbnN0IHVwZGF0ZUZhdm9yaXRlID0gKGZhdm9yaXRlVmFsdWUpID0+IHtcclxuICAgICAgcmV0dXJuIHN0YXRlLm1hcCgoaXRlbSxpbmRleCkgPT4ge1xyXG4gICAgICAgIGlmKGl0ZW0uaWQgPT09IGFjdGlvbi5zZXNzaW9uSWQpe1xyXG4gICAgICAgICAgcmV0dXJuIHsuLi5pdGVtLGZhdm9yaXRlOiBmYXZvcml0ZVZhbHVlfVxyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiBpdGVtO1xyXG4gICAgfSlcclxuICAgIH1cclxuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgICAgY2FzZSBcInNldFNwZWFrZXJMaXN0XCIgOiB7XHJcbiAgICAgICAgcmV0dXJuIGFjdGlvbi5kYXRhO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgXCJmYXZvcml0ZVwiOiB7XHJcbiAgICAgICAgcmV0dXJuIHVwZGF0ZUZhdm9yaXRlKHRydWUpO1xyXG4gICAgICB9O1xyXG4gICAgICBjYXNlIFwidW5mYXZvcml0ZVwiOiB7XHJcbiAgICAgICAgcmV0dXJuIHVwZGF0ZUZhdm9yaXRlKGZhbHNlKTtcclxuICAgICAgfTtcclxuICAgICAgZGVmYXVsdDogXHJcbiAgICAgICAgcmV0dXJuIHN0YXRlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZXhwb3J0IGRlZmF1bHQgc3BlYWtlcnNSZWR1Y2VyOyJdLCJuYW1lcyI6WyJzcGVha2Vyc1JlZHVjZXIiLCJzdGF0ZSIsImFjdGlvbiIsInVwZGF0ZUZhdm9yaXRlIiwiZmF2b3JpdGVWYWx1ZSIsIm1hcCIsIml0ZW0iLCJpbmRleCIsImlkIiwic2Vzc2lvbklkIiwiZmF2b3JpdGUiLCJ0eXBlIiwiZGF0YSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/speakersReducer.js\n"));

/***/ })

});