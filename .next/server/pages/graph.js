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
          "__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"GraphAnalysis\": () => (/* binding */ GraphAnalysis)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_chartjs_2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-chartjs-2 */ \"react-chartjs-2\");\n/* harmony import */ var react_chartjs_2__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_chartjs_2__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! chart.js */ \"chart.js\");\n/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(chart_js__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\n\nchart_js__WEBPACK_IMPORTED_MODULE_3__.Chart.register(chart_js__WEBPACK_IMPORTED_MODULE_3__.CategoryScale, chart_js__WEBPACK_IMPORTED_MODULE_3__.LinearScale, chart_js__WEBPACK_IMPORTED_MODULE_3__.BarElement, chart_js__WEBPACK_IMPORTED_MODULE_3__.Title, chart_js__WEBPACK_IMPORTED_MODULE_3__.Tooltip, chart_js__WEBPACK_IMPORTED_MODULE_3__.Legend);\nconst labels = [\n    'January',\n    'February',\n    'March',\n    'April',\n    'May',\n    'June',\n    'July'\n];\nconst GraphAnalysis = ()=>{\n    const data = {\n        labels,\n        datasets: [\n            {\n                label: 'Dataset 1',\n                data: [\n                    65,\n                    59,\n                    80,\n                    81,\n                    56,\n                    55,\n                    40\n                ],\n                backgroundColor: [\n                    'rgba(255, 99, 132, 0.2)',\n                    'rgba(255, 159, 64, 0.2)',\n                    'rgba(255, 205, 86, 0.2)',\n                    'rgba(75, 192, 192, 0.2)',\n                    'rgba(54, 162, 235, 0.2)',\n                    'rgba(153, 102, 255, 0.2)',\n                    'rgba(201, 203, 207, 0.2)', \n                ],\n                borderColor: [\n                    'rgb(255, 99, 132)',\n                    'rgb(255, 159, 64)',\n                    'rgb(255, 205, 86)',\n                    'rgb(75, 192, 192)',\n                    'rgb(54, 162, 235)',\n                    'rgb(153, 102, 255)',\n                    'rgb(201, 203, 207)', \n                ],\n                borderWidth: 1\n            }, \n        ]\n    };\n    const options = {\n        plugins: {\n            title: {\n                display: true,\n                text: 'Chart.js Bar Chart - Stacked'\n            }\n        },\n        responsive: true\n    };\n    const styles = {\n        container: {\n            width: '900px'\n        }\n    };\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"m-auto\",\n        style: styles.container,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_chartjs_2__WEBPACK_IMPORTED_MODULE_2__.Bar, {\n            options: options,\n            data: data\n        }, void 0, false, {\n            fileName: \"/Users/rahulyadav/Documents/Projects/packet-analyzer/components/Graph/Graph.tsx\",\n            lineNumber: 68,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/rahulyadav/Documents/Projects/packet-analyzer/components/Graph/Graph.tsx\",\n        lineNumber: 67,\n        columnNumber: 5\n    }, undefined));\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0dyYXBoL0dyYXBoLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQXlCO0FBQ1k7QUFTcEI7QUFTcUI7QUFSdENHLG9EQUFnQixDQUNkQyxtREFBYSxFQUNiQyxpREFBVyxFQUNYQyxnREFBVSxFQUNWQywyQ0FBSyxFQUNMQyw2Q0FBTyxFQUNQQyw0Q0FBTTtBQUdSLEtBQUssQ0FBQ0UsTUFBTSxHQUFHLENBQUM7SUFBQSxDQUFTO0lBQUUsQ0FBVTtJQUFFLENBQU87SUFBRSxDQUFPO0lBQUUsQ0FBSztJQUFFLENBQU07SUFBRSxDQUFNO0FBQUEsQ0FBQztBQUV4RSxLQUFLLENBQUNDLGFBQWEsT0FBUyxDQUFDO0lBQ2xDLEtBQUssQ0FBQ0MsSUFBSSxHQUFHLENBQUM7UUFDWkYsTUFBTTtRQUNORyxRQUFRLEVBQUUsQ0FBQztZQUNULENBQUM7Z0JBQ0NDLEtBQUssRUFBRSxDQUFXO2dCQUNsQkYsSUFBSSxFQUFFLENBQUM7QUFBQSxzQkFBRTtBQUFFLHNCQUFFO0FBQUUsc0JBQUU7QUFBRSxzQkFBRTtBQUFFLHNCQUFFO0FBQUUsc0JBQUU7QUFBRSxzQkFBRTtnQkFBQSxDQUFDO2dCQUNsQ0csZUFBZSxFQUFFLENBQUM7b0JBQ2hCLENBQXlCO29CQUN6QixDQUF5QjtvQkFDekIsQ0FBeUI7b0JBQ3pCLENBQXlCO29CQUN6QixDQUF5QjtvQkFDekIsQ0FBMEI7b0JBQzFCLENBQTBCO2dCQUM1QixDQUFDO2dCQUNEQyxXQUFXLEVBQUUsQ0FBQztvQkFDWixDQUFtQjtvQkFDbkIsQ0FBbUI7b0JBQ25CLENBQW1CO29CQUNuQixDQUFtQjtvQkFDbkIsQ0FBbUI7b0JBQ25CLENBQW9CO29CQUNwQixDQUFvQjtnQkFDdEIsQ0FBQztnQkFDREMsV0FBVyxFQUFFLENBQUM7WUFDaEIsQ0FBQztRQUNILENBQUM7SUFDSCxDQUFDO0lBRUQsS0FBSyxDQUFDQyxPQUFPLEdBQUcsQ0FBQztRQUNmQyxPQUFPLEVBQUUsQ0FBQztZQUNSQyxLQUFLLEVBQUUsQ0FBQztnQkFDTkMsT0FBTyxFQUFFLElBQUk7Z0JBQ2JDLElBQUksRUFBRSxDQUE4QjtZQUN0QyxDQUFDO1FBQ0gsQ0FBQztRQUNEQyxVQUFVLEVBQUUsSUFBSTtJQUNsQixDQUFDO0lBQ0QsS0FBSyxDQUFDQyxNQUFNLEdBQUcsQ0FBQztRQUNkQyxTQUFTLEVBQUUsQ0FBQztZQUFDQyxLQUFLLEVBQUUsQ0FBTztRQUFDLENBQUM7SUFDL0IsQ0FBQztJQUVELE1BQU0sNkVBQ0hDLENBQUc7UUFBQ0MsU0FBUyxFQUFDLENBQVE7UUFBQ0MsS0FBSyxFQUFFTCxNQUFNLENBQUNDLFNBQVM7OEZBQzVDekIsZ0RBQUc7WUFBQ2tCLE9BQU8sRUFBRUEsT0FBTztZQUFFTixJQUFJLEVBQUVBLElBQUk7Ozs7Ozs7Ozs7O0FBR3ZDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWJzaXRlLy4vY29tcG9uZW50cy9HcmFwaC9HcmFwaC50c3g/MmY1NiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgQmFyIH0gZnJvbSAncmVhY3QtY2hhcnRqcy0yJztcbmltcG9ydCB7XG4gIENoYXJ0IGFzIENoYXJ0SlMsXG4gIENhdGVnb3J5U2NhbGUsXG4gIExpbmVhclNjYWxlLFxuICBCYXJFbGVtZW50LFxuICBUaXRsZSxcbiAgVG9vbHRpcCxcbiAgTGVnZW5kLFxufSBmcm9tICdjaGFydC5qcyc7XG5DaGFydEpTLnJlZ2lzdGVyKFxuICBDYXRlZ29yeVNjYWxlLFxuICBMaW5lYXJTY2FsZSxcbiAgQmFyRWxlbWVudCxcbiAgVGl0bGUsXG4gIFRvb2x0aXAsXG4gIExlZ2VuZCxcbik7XG5pbXBvcnQgJy4uLy4uL3N0eWxlcy9ncmFwaC5tb2R1bGUuY3NzJztcbmNvbnN0IGxhYmVscyA9IFsnSmFudWFyeScsICdGZWJydWFyeScsICdNYXJjaCcsICdBcHJpbCcsICdNYXknLCAnSnVuZScsICdKdWx5J107XG5cbmV4cG9ydCBjb25zdCBHcmFwaEFuYWx5c2lzID0gKCkgPT4ge1xuICBjb25zdCBkYXRhID0ge1xuICAgIGxhYmVscyxcbiAgICBkYXRhc2V0czogW1xuICAgICAge1xuICAgICAgICBsYWJlbDogJ0RhdGFzZXQgMScsXG4gICAgICAgIGRhdGE6IFs2NSwgNTksIDgwLCA4MSwgNTYsIDU1LCA0MF0sXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogW1xuICAgICAgICAgICdyZ2JhKDI1NSwgOTksIDEzMiwgMC4yKScsXG4gICAgICAgICAgJ3JnYmEoMjU1LCAxNTksIDY0LCAwLjIpJyxcbiAgICAgICAgICAncmdiYSgyNTUsIDIwNSwgODYsIDAuMiknLFxuICAgICAgICAgICdyZ2JhKDc1LCAxOTIsIDE5MiwgMC4yKScsXG4gICAgICAgICAgJ3JnYmEoNTQsIDE2MiwgMjM1LCAwLjIpJyxcbiAgICAgICAgICAncmdiYSgxNTMsIDEwMiwgMjU1LCAwLjIpJyxcbiAgICAgICAgICAncmdiYSgyMDEsIDIwMywgMjA3LCAwLjIpJyxcbiAgICAgICAgXSxcbiAgICAgICAgYm9yZGVyQ29sb3I6IFtcbiAgICAgICAgICAncmdiKDI1NSwgOTksIDEzMiknLFxuICAgICAgICAgICdyZ2IoMjU1LCAxNTksIDY0KScsXG4gICAgICAgICAgJ3JnYigyNTUsIDIwNSwgODYpJyxcbiAgICAgICAgICAncmdiKDc1LCAxOTIsIDE5MiknLFxuICAgICAgICAgICdyZ2IoNTQsIDE2MiwgMjM1KScsXG4gICAgICAgICAgJ3JnYigxNTMsIDEwMiwgMjU1KScsXG4gICAgICAgICAgJ3JnYigyMDEsIDIwMywgMjA3KScsXG4gICAgICAgIF0sXG4gICAgICAgIGJvcmRlcldpZHRoOiAxLFxuICAgICAgfSxcbiAgICBdLFxuICB9O1xuXG4gIGNvbnN0IG9wdGlvbnMgPSB7XG4gICAgcGx1Z2luczoge1xuICAgICAgdGl0bGU6IHtcbiAgICAgICAgZGlzcGxheTogdHJ1ZSxcbiAgICAgICAgdGV4dDogJ0NoYXJ0LmpzIEJhciBDaGFydCAtIFN0YWNrZWQnLFxuICAgICAgfSxcbiAgICB9LFxuICAgIHJlc3BvbnNpdmU6IHRydWUsXG4gIH07XG4gIGNvbnN0IHN0eWxlcyA9IHtcbiAgICBjb250YWluZXI6IHsgd2lkdGg6ICc5MDBweCcgfSxcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwibS1hdXRvXCIgc3R5bGU9e3N0eWxlcy5jb250YWluZXJ9PlxuICAgICAgPEJhciBvcHRpb25zPXtvcHRpb25zfSBkYXRhPXtkYXRhfSAvPlxuICAgIDwvZGl2PlxuICApO1xufTtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIkJhciIsIkNoYXJ0IiwiQ2hhcnRKUyIsIkNhdGVnb3J5U2NhbGUiLCJMaW5lYXJTY2FsZSIsIkJhckVsZW1lbnQiLCJUaXRsZSIsIlRvb2x0aXAiLCJMZWdlbmQiLCJyZWdpc3RlciIsImxhYmVscyIsIkdyYXBoQW5hbHlzaXMiLCJkYXRhIiwiZGF0YXNldHMiLCJsYWJlbCIsImJhY2tncm91bmRDb2xvciIsImJvcmRlckNvbG9yIiwiYm9yZGVyV2lkdGgiLCJvcHRpb25zIiwicGx1Z2lucyIsInRpdGxlIiwiZGlzcGxheSIsInRleHQiLCJyZXNwb25zaXZlIiwic3R5bGVzIiwiY29udGFpbmVyIiwid2lkdGgiLCJkaXYiLCJjbGFzc05hbWUiLCJzdHlsZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Graph/Graph.tsx\n",
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
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Graph_Graph__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Graph/Graph */ "./components/Graph/Graph.tsx");\n\n\nconst Graph = ()=>{\n    const styles = {\n        flex: {\n            display: \'flex\',\n            \'align-items\': \'center\',\n            height: \'100vh\'\n        }\n    };\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {\n            style: styles.flex,\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Graph_Graph__WEBPACK_IMPORTED_MODULE_1__.GraphAnalysis, {}, void 0, false, {\n                fileName: "/Users/rahulyadav/Documents/Projects/packet-analyzer/pages/graph.tsx",\n                lineNumber: 13,\n                columnNumber: 9\n            }, undefined)\n        }, void 0, false, {\n            fileName: "/Users/rahulyadav/Documents/Projects/packet-analyzer/pages/graph.tsx",\n            lineNumber: 12,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false));\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Graph);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9ncmFwaC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBeUQ7QUFDekQsS0FBSyxDQUFDQyxLQUFLLE9BQVMsQ0FBQztJQUNuQixLQUFLLENBQUNDLE1BQU0sR0FBRyxDQUFDO1FBQ2RDLElBQUksRUFBRSxDQUFDO1lBQ0xDLE9BQU8sRUFBRSxDQUFNO1lBQ2YsQ0FBYSxjQUFFLENBQVE7WUFDdkJDLE1BQU0sRUFBRSxDQUFPO1FBQ2pCLENBQUM7SUFDSCxDQUFDO0lBQ0QsTUFBTTs4RkFFREMsQ0FBRztZQUFDQyxLQUFLLEVBQUVMLE1BQU0sQ0FBQ0MsSUFBSTtrR0FDcEJILGtFQUFhOzs7Ozs7Ozs7OztBQUl0QixDQUFDO0FBRUQsaUVBQWVDLEtBQUssRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYnNpdGUvLi9wYWdlcy9ncmFwaC50c3g/YmJiMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBHcmFwaEFuYWx5c2lzIH0gZnJvbSAnLi4vY29tcG9uZW50cy9HcmFwaC9HcmFwaCc7XG5jb25zdCBHcmFwaCA9ICgpID0+IHtcbiAgY29uc3Qgc3R5bGVzID0ge1xuICAgIGZsZXg6IHtcbiAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgICdhbGlnbi1pdGVtcyc6ICdjZW50ZXInLFxuICAgICAgaGVpZ2h0OiAnMTAwdmgnLFxuICAgIH0sXG4gIH07XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxkaXYgc3R5bGU9e3N0eWxlcy5mbGV4fT5cbiAgICAgICAgPEdyYXBoQW5hbHlzaXMgLz5cbiAgICAgIDwvZGl2PlxuICAgIDwvPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgR3JhcGg7XG4iXSwibmFtZXMiOlsiR3JhcGhBbmFseXNpcyIsIkdyYXBoIiwic3R5bGVzIiwiZmxleCIsImRpc3BsYXkiLCJoZWlnaHQiLCJkaXYiLCJzdHlsZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/graph.tsx\n',
        );

        /***/
      },

    /***/ 'chart.js':
      /*!***************************!*\
  !*** external "chart.js" ***!
  \***************************/
      /***/ module => {
        module.exports = require('chart.js');

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

    /***/ 'react-chartjs-2':
      /*!**********************************!*\
  !*** external "react-chartjs-2" ***!
  \**********************************/
      /***/ module => {
        module.exports = require('react-chartjs-2');

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
