/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@ryangjchandler/alpine-clipboard/src/index.js":
/*!********************************************************************!*\
  !*** ./node_modules/@ryangjchandler/alpine-clipboard/src/index.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
let onCopy = () => {}

const copy = (target) => {
    if (typeof target === 'function') {
        target = target()
    }

    if (typeof target === 'object') {
        target = JSON.stringify(target)
    }

    return window.navigator.clipboard.writeText(target)
        .then(onCopy)
}

function Clipboard(Alpine) {
    Alpine.magic('clipboard', () => {
        return copy
    })

    Alpine.directive('clipboard', (el, { modifiers, expression }, { evaluateLater, cleanup }) => {
        const getCopyContent = modifiers.includes('raw') ? c => c(expression) : evaluateLater(expression)
        const clickHandler = () => getCopyContent(copy)

        el.addEventListener('click', clickHandler)

        cleanup(() => {
            el.removeEventListener('click', clickHandler)
        })
    })
}

Clipboard.configure = (config) => {
    if (config.hasOwnProperty('onCopy') && typeof config.onCopy === 'function') {
        onCopy = config.onCopy
    }

    return Clipboard
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Clipboard);

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
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
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
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*******************************************!*\
  !*** ./resources/js/filament-copyable.js ***!
  \*******************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ryangjchandler_alpine_clipboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ryangjchandler/alpine-clipboard */ "./node_modules/@ryangjchandler/alpine-clipboard/src/index.js");

document.addEventListener('alpine:init', function () {
  Alpine.plugin(_ryangjchandler_alpine_clipboard__WEBPACK_IMPORTED_MODULE_0__["default"]);
});
})();

/******/ })()
;