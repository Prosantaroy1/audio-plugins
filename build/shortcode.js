/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/shortcode/shortcode.scss":
/*!**************************************!*\
  !*** ./src/shortcode/shortcode.scss ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
/*!************************************!*\
  !*** ./src/shortcode/shortcode.js ***!
  \************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _shortcode_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shortcode.scss */ "./src/shortcode/shortcode.scss");

window.copyBPlAdminShortcode = id => {
  var input = document.querySelector('#bPlAdminShortcode-' + id + ' input'); // DOM থেকে একটা input ফিল্ড খোঁজা হচ্ছে।
  var tooltip = document.querySelector('#bPlAdminShortcode-' + id + ' .tooltip'); //DOM থেকে একটা tooltip ফিল্ড খোঁজা 
  input.select(); ///input select 
  input.setSelectionRange(0, 30); //30 word select
  document.execCommand('copy'); //api copy
  tooltip.innerHTML = wp.i18n.__('Copied Successfully!', 'advanced-post-block'); //text change
  setTimeout(() => {
    tooltip.innerHTML = wp.i18n.__('Copy To Clipboard', 'advanced-post-block');
  }, 1500);
};
/******/ })()
;
//# sourceMappingURL=shortcode.js.map