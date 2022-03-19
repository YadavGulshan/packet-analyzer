'use strict';
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self['webpackHotUpdate_N_E']('pages/graph', {
  /***/ './components/Graph/Graph.tsx':
    /*!************************************!*\
  !*** ./components/Graph/Graph.tsx ***!
  \************************************/
    /***/ function (module, __webpack_exports__, __webpack_require__) {
      eval(
        "__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"GraphAnalysis\": function() { return /* binding */ GraphAnalysis; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var chart_js_auto__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! chart.js/auto */ \"./node_modules/chart.js/auto/auto.esm.js\");\n\n\n\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar GraphAnalysis = function() {\n    _s();\n    var canvasEl = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    var colors = {\n        purple: {\n            default: 'rgba(149, 76, 233, 1)',\n            half: 'rgba(149, 76, 233, 0.5)',\n            quarter: 'rgba(149, 76, 233, 0.25)',\n            zero: 'rgba(149, 76, 233, 0)'\n        },\n        indigo: {\n            default: 'rgba(80, 102, 120, 1)',\n            quarter: 'rgba(80, 102, 120, 0.25)'\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        var ctx = canvasEl.current.getContext('2d');\n        // const ctx = document.getElementById(\"myChart\");\n        var gradient = ctx.createLinearGradient(0, 16, 0, 600);\n        gradient.addColorStop(0, colors.purple.half);\n        gradient.addColorStop(0.65, colors.purple.quarter);\n        gradient.addColorStop(1, colors.purple.zero);\n        var weight = [\n            60,\n            60.2,\n            59.1,\n            61.4,\n            59.9,\n            60.2,\n            59.8,\n            58.6,\n            59.6,\n            59.2\n        ];\n        var labels = [\n            'Week 1',\n            'Week 2',\n            'Week 3',\n            'Week 4',\n            'Week 5',\n            'Week 6',\n            'Week 7',\n            'Week 8',\n            'Week 9',\n            'Week 10', \n        ];\n        var data = {\n            labels: labels,\n            datasets: [\n                {\n                    backgroundColor: gradient,\n                    label: 'My First Dataset',\n                    data: weight,\n                    fill: true,\n                    borderWidth: 2,\n                    borderColor: colors.purple.default,\n                    lineTension: 0.2,\n                    pointBackgroundColor: colors.purple.default,\n                    pointRadius: 3\n                }, \n            ]\n        };\n        var config = {\n            type: 'line',\n            data: data\n        };\n        var myLineChart = new chart_js_auto__WEBPACK_IMPORTED_MODULE_2__[\"default\"](ctx, {\n            type: 'pie',\n            data: data\n        });\n        return function cleanup() {\n            myLineChart.destroy();\n        };\n    });\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"canvas\", {\n            id: \"myChart\",\n            ref: canvasEl,\n            height: \"100\"\n        }, void 0, false, {\n            fileName: \"/Users/rahulyadav/Documents/Projects/packet-analyzer/components/Graph/Graph.tsx\",\n            lineNumber: 75,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/Users/rahulyadav/Documents/Projects/packet-analyzer/components/Graph/Graph.tsx\",\n        lineNumber: 74,\n        columnNumber: 5\n    }, _this));\n};\n_s(GraphAnalysis, \"funrLERUL9Kg+SY8BrKlYVBCNRk=\");\n_c = GraphAnalysis;\nvar _c;\n$RefreshReg$(_c, \"GraphAnalysis\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QVMsRUFBQyxDQUFFOzhGQUNkQyxDQUFNO1lBQUNDLEVBQUUsRUFBQyxDQUFTO1lBQUNDLEdBQUcsRUFBRW5DLFFBQVE7WUFBRW9DLE1BQU0sRUFBQyxDQUFLOzs7Ozs7Ozs7OztBQUd0RCxDQUFDO0dBMUVZckMsYUFBYTtLQUFiQSxhQUFhIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvR3JhcGgvR3JhcGgudHN4PzJmNTYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IENoYXJ0IGZyb20gJ2NoYXJ0LmpzL2F1dG8nO1xuXG5leHBvcnQgY29uc3QgR3JhcGhBbmFseXNpcyA9ICgpID0+IHtcbiAgY29uc3QgY2FudmFzRWwgPSB1c2VSZWYobnVsbCk7XG5cbiAgY29uc3QgY29sb3JzID0ge1xuICAgIHB1cnBsZToge1xuICAgICAgZGVmYXVsdDogJ3JnYmEoMTQ5LCA3NiwgMjMzLCAxKScsXG4gICAgICBoYWxmOiAncmdiYSgxNDksIDc2LCAyMzMsIDAuNSknLFxuICAgICAgcXVhcnRlcjogJ3JnYmEoMTQ5LCA3NiwgMjMzLCAwLjI1KScsXG4gICAgICB6ZXJvOiAncmdiYSgxNDksIDc2LCAyMzMsIDApJyxcbiAgICB9LFxuICAgIGluZGlnbzoge1xuICAgICAgZGVmYXVsdDogJ3JnYmEoODAsIDEwMiwgMTIwLCAxKScsXG4gICAgICBxdWFydGVyOiAncmdiYSg4MCwgMTAyLCAxMjAsIDAuMjUpJyxcbiAgICB9LFxuICB9O1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgY3R4ID0gY2FudmFzRWwuY3VycmVudC5nZXRDb250ZXh0KCcyZCcpO1xuICAgIC8vIGNvbnN0IGN0eCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibXlDaGFydFwiKTtcblxuICAgIGNvbnN0IGdyYWRpZW50ID0gY3R4LmNyZWF0ZUxpbmVhckdyYWRpZW50KDAsIDE2LCAwLCA2MDApO1xuICAgIGdyYWRpZW50LmFkZENvbG9yU3RvcCgwLCBjb2xvcnMucHVycGxlLmhhbGYpO1xuICAgIGdyYWRpZW50LmFkZENvbG9yU3RvcCgwLjY1LCBjb2xvcnMucHVycGxlLnF1YXJ0ZXIpO1xuICAgIGdyYWRpZW50LmFkZENvbG9yU3RvcCgxLCBjb2xvcnMucHVycGxlLnplcm8pO1xuXG4gICAgY29uc3Qgd2VpZ2h0ID0gWzYwLjAsIDYwLjIsIDU5LjEsIDYxLjQsIDU5LjksIDYwLjIsIDU5LjgsIDU4LjYsIDU5LjYsIDU5LjJdO1xuXG4gICAgY29uc3QgbGFiZWxzID0gW1xuICAgICAgJ1dlZWsgMScsXG4gICAgICAnV2VlayAyJyxcbiAgICAgICdXZWVrIDMnLFxuICAgICAgJ1dlZWsgNCcsXG4gICAgICAnV2VlayA1JyxcbiAgICAgICdXZWVrIDYnLFxuICAgICAgJ1dlZWsgNycsXG4gICAgICAnV2VlayA4JyxcbiAgICAgICdXZWVrIDknLFxuICAgICAgJ1dlZWsgMTAnLFxuICAgIF07XG4gICAgY29uc3QgZGF0YSA9IHtcbiAgICAgIGxhYmVsczogbGFiZWxzLFxuICAgICAgZGF0YXNldHM6IFtcbiAgICAgICAge1xuICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogZ3JhZGllbnQsXG4gICAgICAgICAgbGFiZWw6ICdNeSBGaXJzdCBEYXRhc2V0JyxcbiAgICAgICAgICBkYXRhOiB3ZWlnaHQsXG4gICAgICAgICAgZmlsbDogdHJ1ZSxcbiAgICAgICAgICBib3JkZXJXaWR0aDogMixcbiAgICAgICAgICBib3JkZXJDb2xvcjogY29sb3JzLnB1cnBsZS5kZWZhdWx0LFxuICAgICAgICAgIGxpbmVUZW5zaW9uOiAwLjIsXG4gICAgICAgICAgcG9pbnRCYWNrZ3JvdW5kQ29sb3I6IGNvbG9ycy5wdXJwbGUuZGVmYXVsdCxcbiAgICAgICAgICBwb2ludFJhZGl1czogMyxcbiAgICAgICAgfSxcbiAgICAgIF0sXG4gICAgfTtcbiAgICBjb25zdCBjb25maWcgPSB7XG4gICAgICB0eXBlOiAnbGluZScsXG4gICAgICBkYXRhOiBkYXRhLFxuICAgIH07XG4gICAgY29uc3QgbXlMaW5lQ2hhcnQgPSBuZXcgQ2hhcnQoY3R4LCB7XG4gICAgICB0eXBlOiAncGllJyxcbiAgICAgIGRhdGE6IGRhdGEsXG4gICAgfSk7XG5cbiAgICByZXR1cm4gZnVuY3Rpb24gY2xlYW51cCgpIHtcbiAgICAgIG15TGluZUNoYXJ0LmRlc3Ryb3koKTtcbiAgICB9O1xuICB9KTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiXCI+XG4gICAgICA8Y2FudmFzIGlkPVwibXlDaGFydFwiIHJlZj17Y2FudmFzRWx9IGhlaWdodD1cIjEwMFwiIC8+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlUmVmIiwiQ2hhcnQiLCJHcmFwaEFuYWx5c2lzIiwiY2FudmFzRWwiLCJjb2xvcnMiLCJwdXJwbGUiLCJkZWZhdWx0IiwiaGFsZiIsInF1YXJ0ZXIiLCJ6ZXJvIiwiaW5kaWdvIiwiY3R4IiwiY3VycmVudCIsImdldENvbnRleHQiLCJncmFkaWVudCIsImNyZWF0ZUxpbmVhckdyYWRpZW50IiwiYWRkQ29sb3JTdG9wIiwid2VpZ2h0IiwibGFiZWxzIiwiZGF0YSIsImRhdGFzZXRzIiwiYmFja2dyb3VuZENvbG9yIiwibGFiZWwiLCJmaWxsIiwiYm9yZGVyV2lkdGgiLCJib3JkZXJDb2xvciIsImxpbmVUZW5zaW9uIiwicG9pbnRCYWNrZ3JvdW5kQ29sb3IiLCJwb2ludFJhZGl1cyIsImNvbmZpZyIsInR5cGUiLCJteUxpbmVDaGFydCIsImNsZWFudXAiLCJkZXN0cm95IiwiZGl2IiwiY2xhc3NOYW1lIiwiY2FudmFzIiwiaWQiLCJyZWYiLCJoZWlnaHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Graph/Graph.tsx\n",
      );

      /***/
    },
});
