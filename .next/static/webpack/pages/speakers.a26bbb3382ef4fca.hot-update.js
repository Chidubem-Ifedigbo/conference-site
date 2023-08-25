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

/***/ "./src/Speakers.js":
/*!*************************!*\
  !*** ./src/Speakers.js ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @swc/helpers/src/_object_spread.mjs */ \"./node_modules/@swc/helpers/src/_object_spread.mjs\");\n/* harmony import */ var _swc_helpers_src_object_spread_props_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @swc/helpers/src/_object_spread_props.mjs */ \"./node_modules/@swc/helpers/src/_object_spread_props.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _src_Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../src/Header */ \"./src/Header.js\");\n/* harmony import */ var _src_Menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../src/Menu */ \"./src/Menu.js\");\n/* harmony import */ var _SpeakerDetail__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./SpeakerDetail */ \"./src/SpeakerDetail.js\");\n/* harmony import */ var _SpeakerData__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./SpeakerData */ \"./src/SpeakerData.js\");\n/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./App */ \"./src/App.js\");\n\n\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nvar Speakers = function() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true), speakingSunday = ref[0], setSpeakingSunday = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true), speakingSaturday = ref1[0], setSpeakingSaturday = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), speakerList = ref2[0], setSpeakerList = ref2[1];\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true), isLoading = ref3[0], setIsloading = ref3[1];\n    var context = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_App__WEBPACK_IMPORTED_MODULE_6__.ConfigContext);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        setIsloading(true);\n        new Promise(function(resolve) {\n            setTimeout(function() {\n                return resolve();\n            }, 1000);\n        }).then(function() {\n            setIsloading(false);\n            var speakerListServierFilter = _SpeakerData__WEBPACK_IMPORTED_MODULE_5__[\"default\"].filter(function(param) {\n                var sat = param.sat, sun = param.sun;\n                return speakingSaturday && sat || speakingSunday && sun;\n            });\n            setSpeakerList(speakerListServerFilter);\n        });\n        return function() {\n            console.log(\"cleanup\");\n        };\n    }, []);\n    var handleChangeSaturday = function() {\n        setSpeakingSaturday(!speakingSaturday);\n    };\n    var speakerListFiltered = isLoading ? [] : speakerList.filter(function(param) {\n        var sat = param.sat, sun = param.sun;\n        return speakingSaturday && sat || speakingSunday && sun;\n    }).sort(function(a, b) {\n        if (a.firstName < b.firstName) {\n            return -1;\n        }\n        if (a.firstName > b.firstName) {\n            return 1;\n        }\n        return 0;\n    });\n    var handleChangeSunday = function() {\n        setSpeakingSunday(!speakingSunday);\n    };\n    var heartFavoriteHandler = function(e, favoriteValue) {\n        e.preventDefault();\n        var sessionId = parseInt(e.target.attributes[\"data-sessionid\"].value);\n        setSpeakerList(speakerList.map(function(item) {\n            if (item.id === sessionId) {\n                return (0,_swc_helpers_src_object_spread_props_mjs__WEBPACK_IMPORTED_MODULE_7__[\"default\"])((0,_swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_8__[\"default\"])({}, item), {\n                    favorite: favoriteValue\n                });\n            }\n            return item;\n        }));\n    //console.log(\"changing session favorte to \" + favoriteValue);\n    };\n    if (isLoading) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: \"Loading...\"\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Dubem\\\\Desktop\\\\React-Hooks-eslint-and-Usage\\\\src\\\\Speakers.js\",\n        lineNumber: 73,\n        columnNumber: 29\n    }, _this);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_Header__WEBPACK_IMPORTED_MODULE_2__.Header, {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Dubem\\\\Desktop\\\\React-Hooks-eslint-and-Usage\\\\src\\\\Speakers.js\",\n                lineNumber: 77,\n                columnNumber: 11\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_Menu__WEBPACK_IMPORTED_MODULE_3__.Menu, {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Dubem\\\\Desktop\\\\React-Hooks-eslint-and-Usage\\\\src\\\\Speakers.js\",\n                lineNumber: 78,\n                columnNumber: 11\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"container\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"btn-toolbar margintopbottom5 checkbox-bigger\",\n                        children: context.showSpeakerSpeakingDays === false ? null : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"hide\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"form-check-inline\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                        className: \"form-check-label\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                                type: \"checkbox\",\n                                                className: \"form-check-input\",\n                                                onChange: handleChangeSaturday,\n                                                checked: speakingSaturday\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\Dubem\\\\Desktop\\\\React-Hooks-eslint-and-Usage\\\\src\\\\Speakers.js\",\n                                                lineNumber: 85,\n                                                columnNumber: 23\n                                            }, _this),\n                                            \"Saturday Speakers\"\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Users\\\\Dubem\\\\Desktop\\\\React-Hooks-eslint-and-Usage\\\\src\\\\Speakers.js\",\n                                        lineNumber: 84,\n                                        columnNumber: 21\n                                    }, _this)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Dubem\\\\Desktop\\\\React-Hooks-eslint-and-Usage\\\\src\\\\Speakers.js\",\n                                    lineNumber: 83,\n                                    columnNumber: 19\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"form-check-inline\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                        className: \"form-check-label\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                                type: \"checkbox\",\n                                                className: \"form-check-input\",\n                                                onChange: handleChangeSunday,\n                                                checked: speakingSunday\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\Dubem\\\\Desktop\\\\React-Hooks-eslint-and-Usage\\\\src\\\\Speakers.js\",\n                                                lineNumber: 96,\n                                                columnNumber: 23\n                                            }, _this),\n                                            \"Sunday Speakers\"\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Users\\\\Dubem\\\\Desktop\\\\React-Hooks-eslint-and-Usage\\\\src\\\\Speakers.js\",\n                                        lineNumber: 95,\n                                        columnNumber: 21\n                                    }, _this)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Dubem\\\\Desktop\\\\React-Hooks-eslint-and-Usage\\\\src\\\\Speakers.js\",\n                                    lineNumber: 94,\n                                    columnNumber: 19\n                                }, _this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\Dubem\\\\Desktop\\\\React-Hooks-eslint-and-Usage\\\\src\\\\Speakers.js\",\n                            lineNumber: 82,\n                            columnNumber: 17\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Dubem\\\\Desktop\\\\React-Hooks-eslint-and-Usage\\\\src\\\\Speakers.js\",\n                        lineNumber: 80,\n                        columnNumber: 13\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"row\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"card-deck\",\n                            children: speakerListFiltered.map(function(param) {\n                                var id = param.id, firstName = param.firstName, lastName = param.lastName, bio = param.bio, favorite = param.favorite;\n                                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_SpeakerDetail__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                    id: id,\n                                    favorite: favorite,\n                                    onHeartFavoriteHandler: heartFavoriteHandler,\n                                    firstName: firstName,\n                                    lastName: lastName,\n                                    bio: bio\n                                }, id, false, {\n                                    fileName: \"C:\\\\Users\\\\Dubem\\\\Desktop\\\\React-Hooks-eslint-and-Usage\\\\src\\\\Speakers.js\",\n                                    lineNumber: 113,\n                                    columnNumber: 23\n                                }, _this);\n                            })\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Dubem\\\\Desktop\\\\React-Hooks-eslint-and-Usage\\\\src\\\\Speakers.js\",\n                            lineNumber: 109,\n                            columnNumber: 15\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Dubem\\\\Desktop\\\\React-Hooks-eslint-and-Usage\\\\src\\\\Speakers.js\",\n                        lineNumber: 108,\n                        columnNumber: 13\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Dubem\\\\Desktop\\\\React-Hooks-eslint-and-Usage\\\\src\\\\Speakers.js\",\n                lineNumber: 79,\n                columnNumber: 11\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Dubem\\\\Desktop\\\\React-Hooks-eslint-and-Usage\\\\src\\\\Speakers.js\",\n        lineNumber: 76,\n        columnNumber: 9\n    }, _this);\n};\n_s(Speakers, \"xTLbl1XpyNnQ5BCwj0lfHVZl7Z0=\");\n_c = Speakers;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Speakers);\nvar _c;\n$RefreshReg$(_c, \"Speakers\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Y2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHt1c2VTdGF0ZSx1c2VFZmZlY3QsIHVzZUNvbnRleHR9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBIZWFkZXIgfSBmcm9tIFwiLi4vc3JjL0hlYWRlclwiO1xyXG5pbXBvcnQgeyBNZW51IH0gZnJvbSBcIi4uL3NyYy9NZW51XCI7XHJcbmltcG9ydCBTcGVha2VyRGV0YWlsIGZyb20gJy4vU3BlYWtlckRldGFpbCdcclxuaW1wb3J0IHNwZWFrZXJEYXRhIGZyb20gXCIuL1NwZWFrZXJEYXRhXCI7XHJcbmltcG9ydCB7IENvbmZpZ0NvbnRleHQgfSBmcm9tIFwiLi9BcHBcIjtcclxuXHJcblxyXG5jb25zdCBTcGVha2VycyA9ICgpID0+IHtcclxuICAgIGNvbnN0IFtzcGVha2luZ1N1bmRheSwgc2V0U3BlYWtpbmdTdW5kYXldID0gdXNlU3RhdGUodHJ1ZSk7XHJcbiAgICBjb25zdCBbc3BlYWtpbmdTYXR1cmRheSwgc2V0U3BlYWtpbmdTYXR1cmRheV0gPSB1c2VTdGF0ZSh0cnVlKTtcclxuXHJcbiAgICBjb25zdCBbc3BlYWtlckxpc3QsIHNldFNwZWFrZXJMaXN0XSA9IHVzZVN0YXRlKFtdKTtcclxuICAgIGNvbnN0IFtpc0xvYWRpbmcsIHNldElzbG9hZGluZ10gPSB1c2VTdGF0ZSh0cnVlKTtcclxuICAgIGNvbnN0IGNvbnRleHQgPSB1c2VDb250ZXh0KENvbmZpZ0NvbnRleHQpXHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBzZXRJc2xvYWRpbmcodHJ1ZSk7XHJcbiAgICAgICAgbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcclxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiByZXNvbHZlKCksMTAwMClcclxuICAgICAgICB9KS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgc2V0SXNsb2FkaW5nKGZhbHNlKVxyXG4gICAgICAgICAgICBjb25zdCBzcGVha2VyTGlzdFNlcnZpZXJGaWx0ZXIgPSBzcGVha2VyRGF0YS5maWx0ZXIoKHtzYXQsc3VufSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIChzcGVha2luZ1NhdHVyZGF5ICYmIHNhdCkgfHwgKHNwZWFraW5nU3VuZGF5ICYmIHN1bik7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICBcclxuICAgICAgICAgICAgc2V0U3BlYWtlckxpc3Qoc3BlYWtlckxpc3RTZXJ2ZXJGaWx0ZXIpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdjbGVhbnVwJyk7XHJcbiAgICAgICAgICB9O1xyXG4gICAgfSxbXSk7XHJcblxyXG4gICAgY29uc3QgaGFuZGxlQ2hhbmdlU2F0dXJkYXkgPSAoKSA9PiB7XHJcbiAgICAgICAgc2V0U3BlYWtpbmdTYXR1cmRheSghc3BlYWtpbmdTYXR1cmRheSk7XHJcbiAgICAgIH07XHJcbiAgICBcclxuICAgICAgY29uc3Qgc3BlYWtlckxpc3RGaWx0ZXJlZCA9IGlzTG9hZGluZ1xyXG4gICAgICAgID8gW11cclxuICAgICAgICA6IHNwZWFrZXJMaXN0XHJcbiAgICAgICAgICAgIC5maWx0ZXIoXHJcbiAgICAgICAgICAgICAgKHsgc2F0LCBzdW4gfSkgPT5cclxuICAgICAgICAgICAgICAgIChzcGVha2luZ1NhdHVyZGF5ICYmIHNhdCkgfHwgKHNwZWFraW5nU3VuZGF5ICYmIHN1biksXHJcbiAgICAgICAgICAgIClcclxuICAgICAgICAgICAgLnNvcnQoZnVuY3Rpb24gKGEsIGIpIHtcclxuICAgICAgICAgICAgICBpZiAoYS5maXJzdE5hbWUgPCBiLmZpcnN0TmFtZSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIC0xO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICBpZiAoYS5maXJzdE5hbWUgPiBiLmZpcnN0TmFtZSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIDE7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIHJldHVybiAwO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgIFxyXG4gICAgICBjb25zdCBoYW5kbGVDaGFuZ2VTdW5kYXkgPSAoKSA9PiB7XHJcbiAgICAgICAgc2V0U3BlYWtpbmdTdW5kYXkoIXNwZWFraW5nU3VuZGF5KTtcclxuICAgICAgfTtcclxuICAgIFxyXG4gICAgICBjb25zdCBoZWFydEZhdm9yaXRlSGFuZGxlciA9IChlLCBmYXZvcml0ZVZhbHVlKSA9PiB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGNvbnN0IHNlc3Npb25JZCA9IHBhcnNlSW50KGUudGFyZ2V0LmF0dHJpYnV0ZXNbJ2RhdGEtc2Vzc2lvbmlkJ10udmFsdWUpO1xyXG4gICAgICAgIHNldFNwZWFrZXJMaXN0KFxyXG4gICAgICAgICAgc3BlYWtlckxpc3QubWFwKChpdGVtKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChpdGVtLmlkID09PSBzZXNzaW9uSWQpIHtcclxuICAgICAgICAgICAgICByZXR1cm4geyAuLi5pdGVtLCBmYXZvcml0ZTogZmF2b3JpdGVWYWx1ZSB9O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBpdGVtO1xyXG4gICAgICAgICAgfSksXHJcbiAgICAgICAgKTtcclxuICAgICAgICAvL2NvbnNvbGUubG9nKFwiY2hhbmdpbmcgc2Vzc2lvbiBmYXZvcnRlIHRvIFwiICsgZmF2b3JpdGVWYWx1ZSk7XHJcbiAgICAgIH07XHJcbiAgICBcclxuICAgICAgaWYgKGlzTG9hZGluZykgcmV0dXJuIDxkaXY+TG9hZGluZy4uLjwvZGl2PjtcclxuICAgIFxyXG4gICAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICA8SGVhZGVyIC8+XHJcbiAgICAgICAgICA8TWVudSAvPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJidG4tdG9vbGJhciAgbWFyZ2ludG9wYm90dG9tNSBjaGVja2JveC1iaWdnZXJcIj5cclxuICAgICAgICAgICAgICB7Y29udGV4dC5zaG93U3BlYWtlclNwZWFraW5nRGF5cyA9PT0gZmFsc2UgPyBudWxsIDogKFxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoaWRlXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1jaGVjay1pbmxpbmVcIj5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiZm9ybS1jaGVjay1sYWJlbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJjaGVja2JveFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY2hlY2staW5wdXRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlU2F0dXJkYXl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNoZWNrZWQ9e3NwZWFraW5nU2F0dXJkYXl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgU2F0dXJkYXkgU3BlYWtlcnNcclxuICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWNoZWNrLWlubGluZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJmb3JtLWNoZWNrLWxhYmVsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImNoZWNrYm94XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jaGVjay1pbnB1dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2VTdW5kYXl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNoZWNrZWQ9e3NwZWFraW5nU3VuZGF5fVxyXG4gICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgIFN1bmRheSBTcGVha2Vyc1xyXG4gICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWRlY2tcIj5cclxuICAgICAgICAgICAgICAgIHtzcGVha2VyTGlzdEZpbHRlcmVkLm1hcChcclxuICAgICAgICAgICAgICAgICAgKHsgaWQsIGZpcnN0TmFtZSwgbGFzdE5hbWUsIGJpbywgZmF2b3JpdGUgfSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICA8U3BlYWtlckRldGFpbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2lkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZD17aWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZhdm9yaXRlPXtmYXZvcml0ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25IZWFydEZhdm9yaXRlSGFuZGxlcj17aGVhcnRGYXZvcml0ZUhhbmRsZXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpcnN0TmFtZT17Zmlyc3ROYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsYXN0TmFtZT17bGFzdE5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJpbz17YmlvfVxyXG4gICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKTtcclxufTtcclxuICAgIFxyXG5leHBvcnQgZGVmYXVsdCBTcGVha2VyczsiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInVzZUNvbnRleHQiLCJIZWFkZXIiLCJNZW51IiwiU3BlYWtlckRldGFpbCIsInNwZWFrZXJEYXRhIiwiQ29uZmlnQ29udGV4dCIsIlNwZWFrZXJzIiwic3BlYWtpbmdTdW5kYXkiLCJzZXRTcGVha2luZ1N1bmRheSIsInNwZWFraW5nU2F0dXJkYXkiLCJzZXRTcGVha2luZ1NhdHVyZGF5Iiwic3BlYWtlckxpc3QiLCJzZXRTcGVha2VyTGlzdCIsImlzTG9hZGluZyIsInNldElzbG9hZGluZyIsImNvbnRleHQiLCJQcm9taXNlIiwicmVzb2x2ZSIsInNldFRpbWVvdXQiLCJ0aGVuIiwic3BlYWtlckxpc3RTZXJ2aWVyRmlsdGVyIiwiZmlsdGVyIiwic2F0Iiwic3VuIiwic3BlYWtlckxpc3RTZXJ2ZXJGaWx0ZXIiLCJjb25zb2xlIiwibG9nIiwiaGFuZGxlQ2hhbmdlU2F0dXJkYXkiLCJzcGVha2VyTGlzdEZpbHRlcmVkIiwic29ydCIsImEiLCJiIiwiZmlyc3ROYW1lIiwiaGFuZGxlQ2hhbmdlU3VuZGF5IiwiaGVhcnRGYXZvcml0ZUhhbmRsZXIiLCJlIiwiZmF2b3JpdGVWYWx1ZSIsInByZXZlbnREZWZhdWx0Iiwic2Vzc2lvbklkIiwicGFyc2VJbnQiLCJ0YXJnZXQiLCJhdHRyaWJ1dGVzIiwidmFsdWUiLCJtYXAiLCJpdGVtIiwiaWQiLCJmYXZvcml0ZSIsImRpdiIsImNsYXNzTmFtZSIsInNob3dTcGVha2VyU3BlYWtpbmdEYXlzIiwibGFiZWwiLCJpbnB1dCIsInR5cGUiLCJvbkNoYW5nZSIsImNoZWNrZWQiLCJsYXN0TmFtZSIsImJpbyIsIm9uSGVhcnRGYXZvcml0ZUhhbmRsZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/Speakers.js\n"));

/***/ })

});