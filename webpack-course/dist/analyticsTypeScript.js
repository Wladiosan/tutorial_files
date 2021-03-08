/******/ (function() { // webpackBootstrap
var __webpack_exports__ = {};
/*!********************************!*\
  !*** ./analyticsTypeScript.ts ***!
  \********************************/
function tCreateAnalytics() {
  var tCounter = 0;
  var tIsDestroyed = false;

  var tListener = function tListener() {
    return tCounter++;
  };

  document.addEventListener('click', tListener);
  return {
    tDestroy: function tDestroy() {
      document.removeEventListener('click', tListener);
      tIsDestroyed = true;
    },
    tGetClicks: function tGetClicks() {
      if (tIsDestroyed) {
        return "Analytics is destroyed. Total click is ".concat(tCounter);
      }

      return tCounter;
    }
  };
}

window['tAnalytics'] = tCreateAnalytics();
/******/ })()
;
//# sourceMappingURL=analyticsTypeScript.js.map