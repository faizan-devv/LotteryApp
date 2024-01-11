"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/copy-anything";
exports.ids = ["vendor-chunks/copy-anything"];
exports.modules = {

/***/ "(ssr)/./node_modules/copy-anything/dist/cjs/index.cjs":
/*!*******************************************************!*\
  !*** ./node_modules/copy-anything/dist/cjs/index.cjs ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\n\nconst isWhat = __webpack_require__(/*! is-what */ \"(ssr)/./node_modules/is-what/dist/cjs/index.cjs\");\n\nfunction assignProp(carry, key, newVal, originalObject, includeNonenumerable) {\n  const propType = {}.propertyIsEnumerable.call(originalObject, key) ? \"enumerable\" : \"nonenumerable\";\n  if (propType === \"enumerable\")\n    carry[key] = newVal;\n  if (includeNonenumerable && propType === \"nonenumerable\") {\n    Object.defineProperty(carry, key, {\n      value: newVal,\n      enumerable: false,\n      writable: true,\n      configurable: true\n    });\n  }\n}\nfunction copy(target, options = {}) {\n  if (isWhat.isArray(target)) {\n    return target.map((item) => copy(item, options));\n  }\n  if (!isWhat.isPlainObject(target)) {\n    return target;\n  }\n  const props = Object.getOwnPropertyNames(target);\n  const symbols = Object.getOwnPropertySymbols(target);\n  return [...props, ...symbols].reduce((carry, key) => {\n    if (isWhat.isArray(options.props) && !options.props.includes(key)) {\n      return carry;\n    }\n    const val = target[key];\n    const newVal = copy(val, options);\n    assignProp(carry, key, newVal, target, options.nonenumerable);\n    return carry;\n  }, {});\n}\n\nexports.copy = copy;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvY29weS1hbnl0aGluZy9kaXN0L2Nqcy9pbmRleC5janMiLCJtYXBwaW5ncyI6IkFBQWE7O0FBRWIsZUFBZSxtQkFBTyxDQUFDLGdFQUFTOztBQUVoQztBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxrQ0FBa0M7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHLElBQUk7QUFDUDs7QUFFQSxZQUFZIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbG90dGVyeS1hcHAvLi9ub2RlX21vZHVsZXMvY29weS1hbnl0aGluZy9kaXN0L2Nqcy9pbmRleC5janM/MjljMCJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IGlzV2hhdCA9IHJlcXVpcmUoJ2lzLXdoYXQnKTtcblxuZnVuY3Rpb24gYXNzaWduUHJvcChjYXJyeSwga2V5LCBuZXdWYWwsIG9yaWdpbmFsT2JqZWN0LCBpbmNsdWRlTm9uZW51bWVyYWJsZSkge1xuICBjb25zdCBwcm9wVHlwZSA9IHt9LnByb3BlcnR5SXNFbnVtZXJhYmxlLmNhbGwob3JpZ2luYWxPYmplY3QsIGtleSkgPyBcImVudW1lcmFibGVcIiA6IFwibm9uZW51bWVyYWJsZVwiO1xuICBpZiAocHJvcFR5cGUgPT09IFwiZW51bWVyYWJsZVwiKVxuICAgIGNhcnJ5W2tleV0gPSBuZXdWYWw7XG4gIGlmIChpbmNsdWRlTm9uZW51bWVyYWJsZSAmJiBwcm9wVHlwZSA9PT0gXCJub25lbnVtZXJhYmxlXCIpIHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoY2FycnksIGtleSwge1xuICAgICAgdmFsdWU6IG5ld1ZhbCxcbiAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgd3JpdGFibGU6IHRydWUsXG4gICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgfVxufVxuZnVuY3Rpb24gY29weSh0YXJnZXQsIG9wdGlvbnMgPSB7fSkge1xuICBpZiAoaXNXaGF0LmlzQXJyYXkodGFyZ2V0KSkge1xuICAgIHJldHVybiB0YXJnZXQubWFwKChpdGVtKSA9PiBjb3B5KGl0ZW0sIG9wdGlvbnMpKTtcbiAgfVxuICBpZiAoIWlzV2hhdC5pc1BsYWluT2JqZWN0KHRhcmdldCkpIHtcbiAgICByZXR1cm4gdGFyZ2V0O1xuICB9XG4gIGNvbnN0IHByb3BzID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXModGFyZ2V0KTtcbiAgY29uc3Qgc3ltYm9scyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHModGFyZ2V0KTtcbiAgcmV0dXJuIFsuLi5wcm9wcywgLi4uc3ltYm9sc10ucmVkdWNlKChjYXJyeSwga2V5KSA9PiB7XG4gICAgaWYgKGlzV2hhdC5pc0FycmF5KG9wdGlvbnMucHJvcHMpICYmICFvcHRpb25zLnByb3BzLmluY2x1ZGVzKGtleSkpIHtcbiAgICAgIHJldHVybiBjYXJyeTtcbiAgICB9XG4gICAgY29uc3QgdmFsID0gdGFyZ2V0W2tleV07XG4gICAgY29uc3QgbmV3VmFsID0gY29weSh2YWwsIG9wdGlvbnMpO1xuICAgIGFzc2lnblByb3AoY2FycnksIGtleSwgbmV3VmFsLCB0YXJnZXQsIG9wdGlvbnMubm9uZW51bWVyYWJsZSk7XG4gICAgcmV0dXJuIGNhcnJ5O1xuICB9LCB7fSk7XG59XG5cbmV4cG9ydHMuY29weSA9IGNvcHk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/copy-anything/dist/cjs/index.cjs\n");

/***/ })

};
;