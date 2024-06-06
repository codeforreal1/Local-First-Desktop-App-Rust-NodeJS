"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/(root)/page",{

/***/ "(app-pages-browser)/./src/app/(root)/page.tsx":
/*!*********************************!*\
  !*** ./src/app/(root)/page.tsx ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/.pnpm/next@14.0.2_@babel+core@7.23.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/.pnpm/next@14.0.2_@babel+core@7.23.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/Button */ \"(app-pages-browser)/./src/components/Button/index.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nconst API_URI = \"http://localhost:6969\";\nfunction Root() {\n    _s();\n    const [users, setUsers] = react__WEBPACK_IMPORTED_MODULE_1___default().useState([]);\n    const handleSubmit = async (evt)=>{\n        evt.preventDefault();\n        const form = evt.currentTarget;\n        const formData = new FormData(evt.currentTarget);\n        const name = formData.get(\"name\");\n        if ((name === null || name === void 0 ? void 0 : name.length) > 0) {\n            form.reset();\n            await window.fetch(\"\".concat(API_URI, \"/users\"), {\n                method: \"POST\",\n                body: JSON.stringify({\n                    name,\n                    email: \"\".concat(name, \"@gmail.com\")\n                })\n            });\n            await syncUsers();\n        }\n    };\n    const syncUsers = async ()=>{\n        const _users = await window.fetch(\"\".concat(API_URI, \"/users\"), {\n            method: \"GET\"\n        });\n        setUsers(_users !== null && _users !== void 0 ? _users : []);\n    };\n    react__WEBPACK_IMPORTED_MODULE_1___default().useEffect(()=>{\n        syncUsers();\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                onSubmit: handleSubmit,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"px-4 py-2\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                            className: \"block\",\n                            htmlFor: \"name\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    children: \"Name:\"\n                                }, void 0, false, {\n                                    fileName: \"/home/niraj/Documents/rust/tauri/local-first-tauri-nodejs/src/app/(root)/page.tsx\",\n                                    lineNumber: 48,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    type: \"text\",\n                                    id: \"name\",\n                                    name: \"name\",\n                                    className: \"px-2 py-1\",\n                                    required: true\n                                }, void 0, false, {\n                                    fileName: \"/home/niraj/Documents/rust/tauri/local-first-tauri-nodejs/src/app/(root)/page.tsx\",\n                                    lineNumber: 49,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/niraj/Documents/rust/tauri/local-first-tauri-nodejs/src/app/(root)/page.tsx\",\n                            lineNumber: 47,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Button__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                            type: \"submit\",\n                            className: \"my-2\",\n                            children: \"+ Add\"\n                        }, void 0, false, {\n                            fileName: \"/home/niraj/Documents/rust/tauri/local-first-tauri-nodejs/src/app/(root)/page.tsx\",\n                            lineNumber: 57,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/niraj/Documents/rust/tauri/local-first-tauri-nodejs/src/app/(root)/page.tsx\",\n                    lineNumber: 46,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/home/niraj/Documents/rust/tauri/local-first-tauri-nodejs/src/app/(root)/page.tsx\",\n                lineNumber: 45,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"pre\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"code\", {\n                    children: JSON.stringify(users !== null && users !== void 0 ? users : [], null, 2)\n                }, void 0, false, {\n                    fileName: \"/home/niraj/Documents/rust/tauri/local-first-tauri-nodejs/src/app/(root)/page.tsx\",\n                    lineNumber: 63,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/home/niraj/Documents/rust/tauri/local-first-tauri-nodejs/src/app/(root)/page.tsx\",\n                lineNumber: 62,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/niraj/Documents/rust/tauri/local-first-tauri-nodejs/src/app/(root)/page.tsx\",\n        lineNumber: 44,\n        columnNumber: 5\n    }, this);\n}\n_s(Root, \"JadZszbqna06PpJs9hMo7Hl/LOY=\");\n_c = Root;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Root);\nvar _c;\n$RefreshReg$(_c, \"Root\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvKHJvb3QpL3BhZ2UudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFFeUI7QUFFZTtBQU94QyxNQUFNRSxVQUFVO0FBRWhCLFNBQVNDOztJQUNQLE1BQU0sQ0FBQ0MsT0FBT0MsU0FBUyxHQUFHTCxxREFBYyxDQUFTLEVBQUU7SUFFbkQsTUFBTU8sZUFBZSxPQUFPQztRQUMxQkEsSUFBSUMsY0FBYztRQUNsQixNQUFNQyxPQUFPRixJQUFJRyxhQUFhO1FBQzlCLE1BQU1DLFdBQVcsSUFBSUMsU0FBU0wsSUFBSUcsYUFBYTtRQUMvQyxNQUFNRyxPQUFPRixTQUFTRyxHQUFHLENBQUM7UUFDMUIsSUFBSUQsQ0FBQUEsaUJBQUFBLDJCQUFBQSxLQUFNRSxNQUFNLElBQUcsR0FBRztZQUNwQk4sS0FBS08sS0FBSztZQUNWLE1BQU1DLE9BQU9DLEtBQUssQ0FBQyxHQUFXLE9BQVJqQixTQUFRLFdBQVM7Z0JBQ3JDa0IsUUFBUTtnQkFDUkMsTUFBTUMsS0FBS0MsU0FBUyxDQUFDO29CQUFFVDtvQkFBTVUsT0FBTyxHQUFRLE9BQUxWLE1BQUs7Z0JBQVk7WUFDMUQ7WUFDQSxNQUFNVztRQUNSO0lBQ0Y7SUFFQSxNQUFNQSxZQUFZO1FBQ2hCLE1BQU1DLFNBQWlCLE1BQU1SLE9BQU9DLEtBQUssQ0FBUyxHQUFXLE9BQVJqQixTQUFRLFdBQVM7WUFDcEVrQixRQUFRO1FBQ1Y7UUFDQWYsU0FBU3FCLG1CQUFBQSxvQkFBQUEsU0FBVSxFQUFFO0lBQ3ZCO0lBRUExQixzREFBZSxDQUFDO1FBQ2R5QjtJQUNGO0lBRUEscUJBQ0UsOERBQUNHOzswQkFDQyw4REFBQ2xCO2dCQUFLbUIsVUFBVXRCOzBCQUNkLDRFQUFDcUI7b0JBQUlFLFdBQVU7O3NDQUNiLDhEQUFDQzs0QkFBTUQsV0FBVTs0QkFBUUUsU0FBUTs7OENBQy9CLDhEQUFDQzs4Q0FBRTs7Ozs7OzhDQUNILDhEQUFDQztvQ0FDQ0MsTUFBSztvQ0FDTEMsSUFBRztvQ0FDSHRCLE1BQUs7b0NBQ0xnQixXQUFVO29DQUNWTyxRQUFROzs7Ozs7Ozs7Ozs7c0NBR1osOERBQUNwQywwREFBTUE7NEJBQUNrQyxNQUFLOzRCQUFTTCxXQUFVO3NDQUFPOzs7Ozs7Ozs7Ozs7Ozs7OzswQkFLM0MsOERBQUNROzBCQUNDLDRFQUFDQzs4QkFBTWpCLEtBQUtDLFNBQVMsQ0FBQ25CLGtCQUFBQSxtQkFBQUEsUUFBUyxFQUFFLEVBQUUsTUFBTTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJakQ7R0FyRFNEO0tBQUFBO0FBdURULCtEQUFlQSxJQUFJQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvKHJvb3QpL3BhZ2UudHN4P2Y3NmMiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnXG5cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcblxuaW1wb3J0IEJ1dHRvbiBmcm9tICdAL2NvbXBvbmVudHMvQnV0dG9uJ1xuXG50eXBlIFVzZXIgPSB7XG4gIGlkOiBudW1iZXJcbiAgbmFtZTogc3RyaW5nXG59XG5cbmNvbnN0IEFQSV9VUkkgPSAnaHR0cDovL2xvY2FsaG9zdDo2OTY5J1xuXG5mdW5jdGlvbiBSb290KCkge1xuICBjb25zdCBbdXNlcnMsIHNldFVzZXJzXSA9IFJlYWN0LnVzZVN0YXRlPFVzZXJbXT4oW10pXG5cbiAgY29uc3QgaGFuZGxlU3VibWl0ID0gYXN5bmMgKGV2dDogUmVhY3QuRm9ybUV2ZW50PEhUTUxGb3JtRWxlbWVudD4pID0+IHtcbiAgICBldnQucHJldmVudERlZmF1bHQoKVxuICAgIGNvbnN0IGZvcm0gPSBldnQuY3VycmVudFRhcmdldFxuICAgIGNvbnN0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKGV2dC5jdXJyZW50VGFyZ2V0KVxuICAgIGNvbnN0IG5hbWUgPSBmb3JtRGF0YS5nZXQoJ25hbWUnKSBhcyBzdHJpbmdcbiAgICBpZiAobmFtZT8ubGVuZ3RoID4gMCkge1xuICAgICAgZm9ybS5yZXNldCgpXG4gICAgICBhd2FpdCB3aW5kb3cuZmV0Y2goYCR7QVBJX1VSSX0vdXNlcnNgLCB7XG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7IG5hbWUsIGVtYWlsOiBgJHtuYW1lfUBnbWFpbC5jb21gIH0pLFxuICAgICAgfSlcbiAgICAgIGF3YWl0IHN5bmNVc2VycygpXG4gICAgfVxuICB9XG5cbiAgY29uc3Qgc3luY1VzZXJzID0gYXN5bmMgKCkgPT4ge1xuICAgIGNvbnN0IF91c2VyczogVXNlcltdID0gYXdhaXQgd2luZG93LmZldGNoPFVzZXJbXT4oYCR7QVBJX1VSSX0vdXNlcnNgLCB7XG4gICAgICBtZXRob2Q6ICdHRVQnLFxuICAgIH0pXG4gICAgc2V0VXNlcnMoX3VzZXJzID8/IFtdKVxuICB9XG5cbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICBzeW5jVXNlcnMoKVxuICB9KVxuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB4LTQgcHktMlwiPlxuICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJibG9ja1wiIGh0bWxGb3I9XCJuYW1lXCI+XG4gICAgICAgICAgICA8cD5OYW1lOjwvcD5cbiAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgIGlkPVwibmFtZVwiXG4gICAgICAgICAgICAgIG5hbWU9XCJuYW1lXCJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicHgtMiBweS0xXCJcbiAgICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICA8QnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBjbGFzc05hbWU9XCJteS0yXCI+XG4gICAgICAgICAgICArIEFkZFxuICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZm9ybT5cbiAgICAgIDxwcmU+XG4gICAgICAgIDxjb2RlPntKU09OLnN0cmluZ2lmeSh1c2VycyA/PyBbXSwgbnVsbCwgMil9PC9jb2RlPlxuICAgICAgPC9wcmU+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgUm9vdFxuIl0sIm5hbWVzIjpbIlJlYWN0IiwiQnV0dG9uIiwiQVBJX1VSSSIsIlJvb3QiLCJ1c2VycyIsInNldFVzZXJzIiwidXNlU3RhdGUiLCJoYW5kbGVTdWJtaXQiLCJldnQiLCJwcmV2ZW50RGVmYXVsdCIsImZvcm0iLCJjdXJyZW50VGFyZ2V0IiwiZm9ybURhdGEiLCJGb3JtRGF0YSIsIm5hbWUiLCJnZXQiLCJsZW5ndGgiLCJyZXNldCIsIndpbmRvdyIsImZldGNoIiwibWV0aG9kIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJlbWFpbCIsInN5bmNVc2VycyIsIl91c2VycyIsInVzZUVmZmVjdCIsImRpdiIsIm9uU3VibWl0IiwiY2xhc3NOYW1lIiwibGFiZWwiLCJodG1sRm9yIiwicCIsImlucHV0IiwidHlwZSIsImlkIiwicmVxdWlyZWQiLCJwcmUiLCJjb2RlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/(root)/page.tsx\n"));

/***/ })

});