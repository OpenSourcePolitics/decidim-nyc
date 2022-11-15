/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "../../../../.rbenv/versions/2.7.5/lib/ruby/gems/2.7.0/bundler/gems/decidim-module_phone_authorization_handler-488cc8827845/app/packs/src/decidim/phone_authorization_handler/append_redirect_url_to_modals.js":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ../../../../.rbenv/versions/2.7.5/lib/ruby/gems/2.7.0/bundler/gems/decidim-module_phone_authorization_handler-488cc8827845/app/packs/src/decidim/phone_authorization_handler/append_redirect_url_to_modals.js ***!
  \*********************************************************************************************************************************************************************************************************************/
/***/ (function() {

/*
 *
 * This is used to make sure users are redirected to
 * the expected URL after sign in.
 *
 * When a button or link trigger a login modal we capture
 * the event and inject the URL where the user should
 * be redirected after sign in (the redirect_url param).
 *
 * The code is injected to any form or link in the modal
 * and when the modal is closed we remove the injected
 * code.
 *
 * In order for this to work the button or link must have
 * a data-open attribute with the ID of the modal to open
 * and a data-redirect-url attribute with the URL to redirect
 * the user. If any of this is missing no code will be
 * injected.
 *
 */
$(function () {
  var removeUrlParameter = function removeUrlParameter(url, parameter) {
    var urlParts = url.split("?");

    if (urlParts.length >= 2) {
      // Get first part, and remove from array
      var urlBase = urlParts.shift(); // Join it back up

      var queryString = urlParts.join("?");
      var prefix = "".concat(encodeURIComponent(parameter), "=");
      var parts = queryString.split(/[&;]/g); // Reverse iteration as may be destructive

      for (var index = parts.length - 1; index >= 0; index -= 1) {
        // Idiom for string.startsWith
        if (parts[index].lastIndexOf(prefix, 0) !== -1) {
          parts.splice(index, 1);
        }
      }

      if (parts.length === 0) {
        return urlBase;
      }

      return "".concat(urlBase, "?").concat(parts.join("&"));
    }

    return url;
  };

  $(document).on("click.zf.trigger", function (event) {
    var target = "#".concat($(event.target).data("open"));
    var redirectUrl = $(event.target).data("redirectUrl");

    if (target && redirectUrl) {
      $("<input type='hidden' />").attr("id", "redirect_url").attr("name", "redirect_url").attr("value", redirectUrl).appendTo("".concat(target, " form"));
      $("".concat(target, " a")).attr("href", function (index, href) {
        var querystring = jQuery.param({
          "redirect_url": redirectUrl
        });
        return href + (href.match(/\?/) ? "&" : "?") + querystring;
      });
    }
  });
  $(document).on("closed.zf.reveal", function (event) {
    $("#redirect_url", event.target).remove();
    $("a", event.target).attr("href", function (index, href) {
      if (href && href.indexOf("redirect_url") !== -1) {
        return removeUrlParameter(href, "redirect_url");
      }

      return href;
    });
  });
});

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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
!function() {
"use strict";
/*!***********************************************************************************************************************************************************************************************!*\
  !*** ../../../../.rbenv/versions/2.7.5/lib/ruby/gems/2.7.0/bundler/gems/decidim-module_phone_authorization_handler-488cc8827845/app/packs/entrypoints/decidim_phone_authorization_handler.js ***!
  \***********************************************************************************************************************************************************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var src_decidim_phone_authorization_handler_append_redirect_url_to_modals__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/decidim/phone_authorization_handler/append_redirect_url_to_modals */ "../../../../.rbenv/versions/2.7.5/lib/ruby/gems/2.7.0/bundler/gems/decidim-module_phone_authorization_handler-488cc8827845/app/packs/src/decidim/phone_authorization_handler/append_redirect_url_to_modals.js");
/* harmony import */ var src_decidim_phone_authorization_handler_append_redirect_url_to_modals__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(src_decidim_phone_authorization_handler_append_redirect_url_to_modals__WEBPACK_IMPORTED_MODULE_0__);

}();
/******/ })()
;
//# sourceMappingURL=decidim_phone_authorization_handler.js.map