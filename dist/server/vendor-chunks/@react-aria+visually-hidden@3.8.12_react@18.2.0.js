"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/@react-aria+visually-hidden@3.8.12_react@18.2.0";
exports.ids = ["vendor-chunks/@react-aria+visually-hidden@3.8.12_react@18.2.0"];
exports.modules = {

/***/ "(ssr)/./node_modules/.pnpm/@react-aria+visually-hidden@3.8.12_react@18.2.0/node_modules/@react-aria/visually-hidden/dist/VisuallyHidden.mjs":
/*!*********************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/@react-aria+visually-hidden@3.8.12_react@18.2.0/node_modules/@react-aria/visually-hidden/dist/VisuallyHidden.mjs ***!
  \*********************************************************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   VisuallyHidden: () => (/* binding */ $5c3e21d68f1c4674$export$439d29a4e110a164),\n/* harmony export */   useVisuallyHidden: () => (/* binding */ $5c3e21d68f1c4674$export$a966af930f325cab)\n/* harmony export */ });\n/* harmony import */ var _react_aria_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @react-aria/utils */ \"(ssr)/./node_modules/.pnpm/@react-aria+utils@3.24.1_react@18.2.0/node_modules/@react-aria/utils/dist/mergeProps.mjs\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"(ssr)/./node_modules/.pnpm/next@14.0.2_@babel+core@7.23.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js\");\n/* harmony import */ var _react_aria_interactions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @react-aria/interactions */ \"(ssr)/./node_modules/.pnpm/@react-aria+interactions@3.21.3_react@18.2.0/node_modules/@react-aria/interactions/dist/useFocusWithin.mjs\");\n\n\n\n/*\n * Copyright 2020 Adobe. All rights reserved.\n * This file is licensed to you under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License. You may obtain a copy\n * of the License at http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software distributed under\n * the License is distributed on an \"AS IS\" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS\n * OF ANY KIND, either express or implied. See the License for the specific language\n * governing permissions and limitations under the License.\n */ const $5c3e21d68f1c4674$var$styles = {\n    border: 0,\n    clip: \"rect(0 0 0 0)\",\n    clipPath: \"inset(50%)\",\n    height: \"1px\",\n    margin: \"-1px\",\n    overflow: \"hidden\",\n    padding: 0,\n    position: \"absolute\",\n    width: \"1px\",\n    whiteSpace: \"nowrap\"\n};\nfunction $5c3e21d68f1c4674$export$a966af930f325cab(props = {}) {\n    let { style: style, isFocusable: isFocusable } = props;\n    let [isFocused, setFocused] = (0, react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);\n    let { focusWithinProps: focusWithinProps } = (0, _react_aria_interactions__WEBPACK_IMPORTED_MODULE_1__.useFocusWithin)({\n        isDisabled: !isFocusable,\n        onFocusWithinChange: (val)=>setFocused(val)\n    });\n    // If focused, don't hide the element.\n    let combinedStyles = (0, react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>{\n        if (isFocused) return style;\n        else if (style) return {\n            ...$5c3e21d68f1c4674$var$styles,\n            ...style\n        };\n        else return $5c3e21d68f1c4674$var$styles;\n    // eslint-disable-next-line react-hooks/exhaustive-deps\n    }, [\n        isFocused\n    ]);\n    return {\n        visuallyHiddenProps: {\n            ...focusWithinProps,\n            style: combinedStyles\n        }\n    };\n}\nfunction $5c3e21d68f1c4674$export$439d29a4e110a164(props) {\n    // eslint-disable-next-line @typescript-eslint/no-unused-vars\n    let { children: children, elementType: Element = \"div\", isFocusable: isFocusable, style: style, ...otherProps } = props;\n    let { visuallyHiddenProps: visuallyHiddenProps } = $5c3e21d68f1c4674$export$a966af930f325cab(props);\n    return /*#__PURE__*/ (0, react__WEBPACK_IMPORTED_MODULE_0__).createElement(Element, (0, _react_aria_utils__WEBPACK_IMPORTED_MODULE_2__.mergeProps)(otherProps, visuallyHiddenProps), children);\n}\n //# sourceMappingURL=VisuallyHidden.module.js.map\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvLnBucG0vQHJlYWN0LWFyaWErdmlzdWFsbHktaGlkZGVuQDMuOC4xMl9yZWFjdEAxOC4yLjAvbm9kZV9tb2R1bGVzL0ByZWFjdC1hcmlhL3Zpc3VhbGx5LWhpZGRlbi9kaXN0L1Zpc3VhbGx5SGlkZGVuLm1qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFrRTtBQUN5QjtBQUNWO0FBRWpGOzs7Ozs7Ozs7O0NBVUMsR0FHRCxNQUFNUywrQkFBK0I7SUFDakNDLFFBQVE7SUFDUkMsTUFBTTtJQUNOQyxVQUFVO0lBQ1ZDLFFBQVE7SUFDUkMsUUFBUTtJQUNSQyxVQUFVO0lBQ1ZDLFNBQVM7SUFDVEMsVUFBVTtJQUNWQyxPQUFPO0lBQ1BDLFlBQVk7QUFDaEI7QUFDQSxTQUFTQywwQ0FBMENDLFFBQVEsQ0FBQyxDQUFDO0lBQ3pELElBQUksRUFBRUMsT0FBT0EsS0FBSyxFQUFFQyxhQUFhQSxXQUFXLEVBQUUsR0FBR0Y7SUFDakQsSUFBSSxDQUFDRyxXQUFXQyxXQUFXLEdBQUcsQ0FBQyxHQUFHckIsMkNBQWMsRUFBRztJQUNuRCxJQUFJLEVBQUVzQixrQkFBa0JBLGdCQUFnQixFQUFFLEdBQUcsQ0FBQyxHQUFHbEIsb0VBQW9CLEVBQUc7UUFDcEVtQixZQUFZLENBQUNKO1FBQ2JLLHFCQUFxQixDQUFDQyxNQUFNSixXQUFXSTtJQUMzQztJQUNBLHNDQUFzQztJQUN0QyxJQUFJQyxpQkFBaUIsQ0FBQyxHQUFHeEIsMENBQWEsRUFBRztRQUNyQyxJQUFJa0IsV0FBVyxPQUFPRjthQUNqQixJQUFJQSxPQUFPLE9BQU87WUFDbkIsR0FBR2IsNEJBQTRCO1lBQy9CLEdBQUdhLEtBQUs7UUFDWjthQUNLLE9BQU9iO0lBQ2hCLHVEQUF1RDtJQUN2RCxHQUFHO1FBQ0NlO0tBQ0g7SUFDRCxPQUFPO1FBQ0hPLHFCQUFxQjtZQUNqQixHQUFHTCxnQkFBZ0I7WUFDbkJKLE9BQU9RO1FBQ1g7SUFDSjtBQUNKO0FBQ0EsU0FBU0UsMENBQTBDWCxLQUFLO0lBQ3BELDZEQUE2RDtJQUM3RCxJQUFJLEVBQUVZLFVBQVVBLFFBQVEsRUFBRUMsYUFBYUMsVUFBVSxLQUFLLEVBQUVaLGFBQWFBLFdBQVcsRUFBRUQsT0FBT0EsS0FBSyxFQUFFLEdBQUdjLFlBQVksR0FBR2Y7SUFDbEgsSUFBSSxFQUFFVSxxQkFBcUJBLG1CQUFtQixFQUFFLEdBQUdYLDBDQUEwQ0M7SUFDN0YsT0FBcUIsV0FBSCxHQUFJLElBQUduQixrQ0FBVyxFQUFHbUMsYUFBYSxDQUFDRixTQUFTLENBQUMsR0FBR2xDLHlEQUFnQixFQUFHbUMsWUFBWUwsc0JBQXNCRTtBQUMzSDtBQUdxSSxDQUNySSxpREFBaUQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9sb2NhbC1maXJzdC10YXVyaS8uL25vZGVfbW9kdWxlcy8ucG5wbS9AcmVhY3QtYXJpYSt2aXN1YWxseS1oaWRkZW5AMy44LjEyX3JlYWN0QDE4LjIuMC9ub2RlX21vZHVsZXMvQHJlYWN0LWFyaWEvdmlzdWFsbHktaGlkZGVuL2Rpc3QvVmlzdWFsbHlIaWRkZW4ubWpzPzVkY2MiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHttZXJnZVByb3BzIGFzICQ3Sll0MiRtZXJnZVByb3BzfSBmcm9tIFwiQHJlYWN0LWFyaWEvdXRpbHNcIjtcbmltcG9ydCAkN0pZdDIkcmVhY3QsIHt1c2VTdGF0ZSBhcyAkN0pZdDIkdXNlU3RhdGUsIHVzZU1lbW8gYXMgJDdKWXQyJHVzZU1lbW99IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHt1c2VGb2N1c1dpdGhpbiBhcyAkN0pZdDIkdXNlRm9jdXNXaXRoaW59IGZyb20gXCJAcmVhY3QtYXJpYS9pbnRlcmFjdGlvbnNcIjtcblxuLypcbiAqIENvcHlyaWdodCAyMDIwIEFkb2JlLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICogVGhpcyBmaWxlIGlzIGxpY2Vuc2VkIHRvIHlvdSB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHlcbiAqIG9mIHRoZSBMaWNlbnNlIGF0IGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmUgZGlzdHJpYnV0ZWQgdW5kZXJcbiAqIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIFJFUFJFU0VOVEFUSU9OU1xuICogT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlXG4gKiBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovIFxuXG5cbmNvbnN0ICQ1YzNlMjFkNjhmMWM0Njc0JHZhciRzdHlsZXMgPSB7XG4gICAgYm9yZGVyOiAwLFxuICAgIGNsaXA6ICdyZWN0KDAgMCAwIDApJyxcbiAgICBjbGlwUGF0aDogJ2luc2V0KDUwJSknLFxuICAgIGhlaWdodDogJzFweCcsXG4gICAgbWFyZ2luOiAnLTFweCcsXG4gICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuICAgIHBhZGRpbmc6IDAsXG4gICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgd2lkdGg6ICcxcHgnLFxuICAgIHdoaXRlU3BhY2U6ICdub3dyYXAnXG59O1xuZnVuY3Rpb24gJDVjM2UyMWQ2OGYxYzQ2NzQkZXhwb3J0JGE5NjZhZjkzMGYzMjVjYWIocHJvcHMgPSB7fSkge1xuICAgIGxldCB7IHN0eWxlOiBzdHlsZSwgaXNGb2N1c2FibGU6IGlzRm9jdXNhYmxlIH0gPSBwcm9wcztcbiAgICBsZXQgW2lzRm9jdXNlZCwgc2V0Rm9jdXNlZF0gPSAoMCwgJDdKWXQyJHVzZVN0YXRlKShmYWxzZSk7XG4gICAgbGV0IHsgZm9jdXNXaXRoaW5Qcm9wczogZm9jdXNXaXRoaW5Qcm9wcyB9ID0gKDAsICQ3Sll0MiR1c2VGb2N1c1dpdGhpbikoe1xuICAgICAgICBpc0Rpc2FibGVkOiAhaXNGb2N1c2FibGUsXG4gICAgICAgIG9uRm9jdXNXaXRoaW5DaGFuZ2U6ICh2YWwpPT5zZXRGb2N1c2VkKHZhbClcbiAgICB9KTtcbiAgICAvLyBJZiBmb2N1c2VkLCBkb24ndCBoaWRlIHRoZSBlbGVtZW50LlxuICAgIGxldCBjb21iaW5lZFN0eWxlcyA9ICgwLCAkN0pZdDIkdXNlTWVtbykoKCk9PntcbiAgICAgICAgaWYgKGlzRm9jdXNlZCkgcmV0dXJuIHN0eWxlO1xuICAgICAgICBlbHNlIGlmIChzdHlsZSkgcmV0dXJuIHtcbiAgICAgICAgICAgIC4uLiQ1YzNlMjFkNjhmMWM0Njc0JHZhciRzdHlsZXMsXG4gICAgICAgICAgICAuLi5zdHlsZVxuICAgICAgICB9O1xuICAgICAgICBlbHNlIHJldHVybiAkNWMzZTIxZDY4ZjFjNDY3NCR2YXIkc3R5bGVzO1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC1ob29rcy9leGhhdXN0aXZlLWRlcHNcbiAgICB9LCBbXG4gICAgICAgIGlzRm9jdXNlZFxuICAgIF0pO1xuICAgIHJldHVybiB7XG4gICAgICAgIHZpc3VhbGx5SGlkZGVuUHJvcHM6IHtcbiAgICAgICAgICAgIC4uLmZvY3VzV2l0aGluUHJvcHMsXG4gICAgICAgICAgICBzdHlsZTogY29tYmluZWRTdHlsZXNcbiAgICAgICAgfVxuICAgIH07XG59XG5mdW5jdGlvbiAkNWMzZTIxZDY4ZjFjNDY3NCRleHBvcnQkNDM5ZDI5YTRlMTEwYTE2NChwcm9wcykge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW51c2VkLXZhcnNcbiAgICBsZXQgeyBjaGlsZHJlbjogY2hpbGRyZW4sIGVsZW1lbnRUeXBlOiBFbGVtZW50ID0gJ2RpdicsIGlzRm9jdXNhYmxlOiBpc0ZvY3VzYWJsZSwgc3R5bGU6IHN0eWxlLCAuLi5vdGhlclByb3BzIH0gPSBwcm9wcztcbiAgICBsZXQgeyB2aXN1YWxseUhpZGRlblByb3BzOiB2aXN1YWxseUhpZGRlblByb3BzIH0gPSAkNWMzZTIxZDY4ZjFjNDY3NCRleHBvcnQkYTk2NmFmOTMwZjMyNWNhYihwcm9wcyk7XG4gICAgcmV0dXJuIC8qI19fUFVSRV9fKi8gKDAsICQ3Sll0MiRyZWFjdCkuY3JlYXRlRWxlbWVudChFbGVtZW50LCAoMCwgJDdKWXQyJG1lcmdlUHJvcHMpKG90aGVyUHJvcHMsIHZpc3VhbGx5SGlkZGVuUHJvcHMpLCBjaGlsZHJlbik7XG59XG5cblxuZXhwb3J0IHskNWMzZTIxZDY4ZjFjNDY3NCRleHBvcnQkYTk2NmFmOTMwZjMyNWNhYiBhcyB1c2VWaXN1YWxseUhpZGRlbiwgJDVjM2UyMWQ2OGYxYzQ2NzQkZXhwb3J0JDQzOWQyOWE0ZTExMGExNjQgYXMgVmlzdWFsbHlIaWRkZW59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9VmlzdWFsbHlIaWRkZW4ubW9kdWxlLmpzLm1hcFxuIl0sIm5hbWVzIjpbIm1lcmdlUHJvcHMiLCIkN0pZdDIkbWVyZ2VQcm9wcyIsIiQ3Sll0MiRyZWFjdCIsInVzZVN0YXRlIiwiJDdKWXQyJHVzZVN0YXRlIiwidXNlTWVtbyIsIiQ3Sll0MiR1c2VNZW1vIiwidXNlRm9jdXNXaXRoaW4iLCIkN0pZdDIkdXNlRm9jdXNXaXRoaW4iLCIkNWMzZTIxZDY4ZjFjNDY3NCR2YXIkc3R5bGVzIiwiYm9yZGVyIiwiY2xpcCIsImNsaXBQYXRoIiwiaGVpZ2h0IiwibWFyZ2luIiwib3ZlcmZsb3ciLCJwYWRkaW5nIiwicG9zaXRpb24iLCJ3aWR0aCIsIndoaXRlU3BhY2UiLCIkNWMzZTIxZDY4ZjFjNDY3NCRleHBvcnQkYTk2NmFmOTMwZjMyNWNhYiIsInByb3BzIiwic3R5bGUiLCJpc0ZvY3VzYWJsZSIsImlzRm9jdXNlZCIsInNldEZvY3VzZWQiLCJmb2N1c1dpdGhpblByb3BzIiwiaXNEaXNhYmxlZCIsIm9uRm9jdXNXaXRoaW5DaGFuZ2UiLCJ2YWwiLCJjb21iaW5lZFN0eWxlcyIsInZpc3VhbGx5SGlkZGVuUHJvcHMiLCIkNWMzZTIxZDY4ZjFjNDY3NCRleHBvcnQkNDM5ZDI5YTRlMTEwYTE2NCIsImNoaWxkcmVuIiwiZWxlbWVudFR5cGUiLCJFbGVtZW50Iiwib3RoZXJQcm9wcyIsImNyZWF0ZUVsZW1lbnQiLCJ1c2VWaXN1YWxseUhpZGRlbiIsIlZpc3VhbGx5SGlkZGVuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/.pnpm/@react-aria+visually-hidden@3.8.12_react@18.2.0/node_modules/@react-aria/visually-hidden/dist/VisuallyHidden.mjs\n");

/***/ })

};
;