'use strict';
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
  var exports = {};
  exports.id = 'pages/graph';
  exports.ids = ['pages/graph'];
  exports.modules = {
    /***/ './components/Graph/Graph.tsx':
      /*!************************************!*\
  !*** ./components/Graph/Graph.tsx ***!
  \************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__,
      ) => {
        eval(
          "__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"GraphAnalysis\": () => (/* binding */ GraphAnalysis)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var chart_js_auto__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! chart.js/auto */ \"chart.js/auto\");\n/* harmony import */ var chart_js_auto__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(chart_js_auto__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nconst GraphAnalysis = ()=>{\n    const canvasEl = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const colors = {\n        purple: {\n            default: 'rgba(149, 76, 233, 1)',\n            half: 'rgba(149, 76, 233, 0.5)',\n            quarter: 'rgba(149, 76, 233, 0.25)',\n            zero: 'rgba(149, 76, 233, 0)'\n        },\n        indigo: {\n            default: 'rgba(80, 102, 120, 1)',\n            quarter: 'rgba(80, 102, 120, 0.25)'\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const ctx = canvasEl.current.getContext('2d');\n        // const ctx = document.getElementById(\"myChart\");\n        const gradient = ctx.createLinearGradient(0, 16, 0, 600);\n        gradient.addColorStop(0, colors.purple.half);\n        gradient.addColorStop(0.65, colors.purple.quarter);\n        gradient.addColorStop(1, colors.purple.zero);\n        const weight = [\n            60,\n            60.2,\n            59.1,\n            61.4,\n            59.9,\n            60.2,\n            59.8,\n            58.6,\n            59.6,\n            59.2\n        ];\n        const labels = [\n            'Week 1',\n            'Week 2',\n            'Week 3',\n            'Week 4',\n            'Week 5',\n            'Week 6',\n            'Week 7',\n            'Week 8',\n            'Week 9',\n            'Week 10', \n        ];\n        const data = {\n            labels: labels,\n            datasets: [\n                {\n                    backgroundColor: gradient,\n                    label: 'My First Dataset',\n                    data: weight,\n                    fill: true,\n                    borderWidth: 2,\n                    borderColor: colors.purple.default,\n                    lineTension: 0.2,\n                    pointBackgroundColor: colors.purple.default,\n                    pointRadius: 3\n                }, \n            ]\n        };\n        const config = {\n            type: 'line',\n            data: data\n        };\n        const myLineChart = new (chart_js_auto__WEBPACK_IMPORTED_MODULE_2___default())(ctx, {\n            type: 'doughnut',\n            data: data\n        });\n        return function cleanup() {\n            myLineChart.destroy();\n        };\n    });\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"canvas\", {\n            id: \"myChart\",\n            ref: canvasEl,\n            height: \"100\"\n        }, void 0, false, {\n            fileName: \"/Users/rahulyadav/Documents/Projects/packet-analyzer/components/Graph/Graph.tsx\",\n            lineNumber: 75,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/rahulyadav/Documents/Projects/packet-analyzer/components/Graph/Graph.tsx\",\n        lineNumber: 74,\n        columnNumber: 5\n    }, undefined));\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O1lBQUNDLEVBQUUsRUFBQyxDQUFTO1lBQUNDLEdBQUcsRUFBRW5DLFFBQVE7WUFBRW9DLE1BQU0sRUFBQyxDQUFLOzs7Ozs7Ozs7OztBQUd0RCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2Vic2l0ZS8uL2NvbXBvbmVudHMvR3JhcGgvR3JhcGgudHN4PzJmNTYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IENoYXJ0IGZyb20gJ2NoYXJ0LmpzL2F1dG8nO1xuXG5leHBvcnQgY29uc3QgR3JhcGhBbmFseXNpcyA9ICgpID0+IHtcbiAgY29uc3QgY2FudmFzRWwgPSB1c2VSZWYobnVsbCk7XG5cbiAgY29uc3QgY29sb3JzID0ge1xuICAgIHB1cnBsZToge1xuICAgICAgZGVmYXVsdDogJ3JnYmEoMTQ5LCA3NiwgMjMzLCAxKScsXG4gICAgICBoYWxmOiAncmdiYSgxNDksIDc2LCAyMzMsIDAuNSknLFxuICAgICAgcXVhcnRlcjogJ3JnYmEoMTQ5LCA3NiwgMjMzLCAwLjI1KScsXG4gICAgICB6ZXJvOiAncmdiYSgxNDksIDc2LCAyMzMsIDApJyxcbiAgICB9LFxuICAgIGluZGlnbzoge1xuICAgICAgZGVmYXVsdDogJ3JnYmEoODAsIDEwMiwgMTIwLCAxKScsXG4gICAgICBxdWFydGVyOiAncmdiYSg4MCwgMTAyLCAxMjAsIDAuMjUpJyxcbiAgICB9LFxuICB9O1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgY3R4ID0gY2FudmFzRWwuY3VycmVudC5nZXRDb250ZXh0KCcyZCcpO1xuICAgIC8vIGNvbnN0IGN0eCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibXlDaGFydFwiKTtcblxuICAgIGNvbnN0IGdyYWRpZW50ID0gY3R4LmNyZWF0ZUxpbmVhckdyYWRpZW50KDAsIDE2LCAwLCA2MDApO1xuICAgIGdyYWRpZW50LmFkZENvbG9yU3RvcCgwLCBjb2xvcnMucHVycGxlLmhhbGYpO1xuICAgIGdyYWRpZW50LmFkZENvbG9yU3RvcCgwLjY1LCBjb2xvcnMucHVycGxlLnF1YXJ0ZXIpO1xuICAgIGdyYWRpZW50LmFkZENvbG9yU3RvcCgxLCBjb2xvcnMucHVycGxlLnplcm8pO1xuXG4gICAgY29uc3Qgd2VpZ2h0ID0gWzYwLjAsIDYwLjIsIDU5LjEsIDYxLjQsIDU5LjksIDYwLjIsIDU5LjgsIDU4LjYsIDU5LjYsIDU5LjJdO1xuXG4gICAgY29uc3QgbGFiZWxzID0gW1xuICAgICAgJ1dlZWsgMScsXG4gICAgICAnV2VlayAyJyxcbiAgICAgICdXZWVrIDMnLFxuICAgICAgJ1dlZWsgNCcsXG4gICAgICAnV2VlayA1JyxcbiAgICAgICdXZWVrIDYnLFxuICAgICAgJ1dlZWsgNycsXG4gICAgICAnV2VlayA4JyxcbiAgICAgICdXZWVrIDknLFxuICAgICAgJ1dlZWsgMTAnLFxuICAgIF07XG4gICAgY29uc3QgZGF0YSA9IHtcbiAgICAgIGxhYmVsczogbGFiZWxzLFxuICAgICAgZGF0YXNldHM6IFtcbiAgICAgICAge1xuICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogZ3JhZGllbnQsXG4gICAgICAgICAgbGFiZWw6ICdNeSBGaXJzdCBEYXRhc2V0JyxcbiAgICAgICAgICBkYXRhOiB3ZWlnaHQsXG4gICAgICAgICAgZmlsbDogdHJ1ZSxcbiAgICAgICAgICBib3JkZXJXaWR0aDogMixcbiAgICAgICAgICBib3JkZXJDb2xvcjogY29sb3JzLnB1cnBsZS5kZWZhdWx0LFxuICAgICAgICAgIGxpbmVUZW5zaW9uOiAwLjIsXG4gICAgICAgICAgcG9pbnRCYWNrZ3JvdW5kQ29sb3I6IGNvbG9ycy5wdXJwbGUuZGVmYXVsdCxcbiAgICAgICAgICBwb2ludFJhZGl1czogMyxcbiAgICAgICAgfSxcbiAgICAgIF0sXG4gICAgfTtcbiAgICBjb25zdCBjb25maWcgPSB7XG4gICAgICB0eXBlOiAnbGluZScsXG4gICAgICBkYXRhOiBkYXRhLFxuICAgIH07XG4gICAgY29uc3QgbXlMaW5lQ2hhcnQgPSBuZXcgQ2hhcnQoY3R4LCB7XG4gICAgICB0eXBlOiAnZG91Z2hudXQnLFxuICAgICAgZGF0YTogZGF0YSxcbiAgICB9KTtcblxuICAgIHJldHVybiBmdW5jdGlvbiBjbGVhbnVwKCkge1xuICAgICAgbXlMaW5lQ2hhcnQuZGVzdHJveSgpO1xuICAgIH07XG4gIH0pO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJcIj5cbiAgICAgIDxjYW52YXMgaWQ9XCJteUNoYXJ0XCIgcmVmPXtjYW52YXNFbH0gaGVpZ2h0PVwiMTAwXCIgLz5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VSZWYiLCJDaGFydCIsIkdyYXBoQW5hbHlzaXMiLCJjYW52YXNFbCIsImNvbG9ycyIsInB1cnBsZSIsImRlZmF1bHQiLCJoYWxmIiwicXVhcnRlciIsInplcm8iLCJpbmRpZ28iLCJjdHgiLCJjdXJyZW50IiwiZ2V0Q29udGV4dCIsImdyYWRpZW50IiwiY3JlYXRlTGluZWFyR3JhZGllbnQiLCJhZGRDb2xvclN0b3AiLCJ3ZWlnaHQiLCJsYWJlbHMiLCJkYXRhIiwiZGF0YXNldHMiLCJiYWNrZ3JvdW5kQ29sb3IiLCJsYWJlbCIsImZpbGwiLCJib3JkZXJXaWR0aCIsImJvcmRlckNvbG9yIiwibGluZVRlbnNpb24iLCJwb2ludEJhY2tncm91bmRDb2xvciIsInBvaW50UmFkaXVzIiwiY29uZmlnIiwidHlwZSIsIm15TGluZUNoYXJ0IiwiY2xlYW51cCIsImRlc3Ryb3kiLCJkaXYiLCJjbGFzc05hbWUiLCJjYW52YXMiLCJpZCIsInJlZiIsImhlaWdodCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Graph/Graph.tsx\n",
        );

        /***/
      },

    /***/ './pages/graph.tsx':
      /*!*************************!*\
  !*** ./pages/graph.tsx ***!
  \*************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__,
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Graph_Graph__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Graph/Graph */ "./components/Graph/Graph.tsx");\n\n\nconst Graph = ()=>{\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Graph_Graph__WEBPACK_IMPORTED_MODULE_1__.GraphAnalysis, {}, void 0, false, {\n            fileName: "/Users/rahulyadav/Documents/Projects/packet-analyzer/pages/graph.tsx",\n            lineNumber: 5,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false));\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Graph);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9ncmFwaC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBeUQ7QUFDekQsS0FBSyxDQUFDQyxLQUFLLE9BQVMsQ0FBQztJQUNuQixNQUFNOzhGQUVERCxrRUFBYTs7Ozs7O0FBR3BCLENBQUM7QUFFRCxpRUFBZUMsS0FBSyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2Vic2l0ZS8uL3BhZ2VzL2dyYXBoLnRzeD9iYmIwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEdyYXBoQW5hbHlzaXMgfSBmcm9tICcuLi9jb21wb25lbnRzL0dyYXBoL0dyYXBoJztcbmNvbnN0IEdyYXBoID0gKCkgPT4ge1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8R3JhcGhBbmFseXNpcyAvPlxuICAgIDwvPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgR3JhcGg7XG4iXSwibmFtZXMiOlsiR3JhcGhBbmFseXNpcyIsIkdyYXBoIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/graph.tsx\n',
        );

        /***/
      },

    /***/ 'chart.js/auto':
      /*!********************************!*\
  !*** external "chart.js/auto" ***!
  \********************************/
      /***/ module => {
        module.exports = require('chart.js/auto');

        /***/
      },

    /***/ react:
      /*!************************!*\
  !*** external "react" ***!
  \************************/
      /***/ module => {
        module.exports = require('react');

        /***/
      },

    /***/ 'react/jsx-dev-runtime':
      /*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
      /***/ module => {
        module.exports = require('react/jsx-dev-runtime');

        /***/
      },
  };
  // load runtime
  var __webpack_require__ = require('../webpack-runtime.js');
  __webpack_require__.C(exports);
  var __webpack_exec__ = moduleId =>
    __webpack_require__((__webpack_require__.s = moduleId));
  var __webpack_exports__ = __webpack_exec__('./pages/graph.tsx');
  module.exports = __webpack_exports__;
})();
