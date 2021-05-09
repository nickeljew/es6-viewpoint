'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var ViewPoint = /*#__PURE__*/function () {
  function ViewPoint() {
    _classCallCheck(this, ViewPoint);

    this.width = 0;
    this.height = 0;
    this.colorDepth = 0;
    this.pixelDepth = 0;
    if (typeof window === "undefined") return;

    if (window && window.screen) {
      this.width = window.screen.width;
      this.height = window.screen.height;
      this.colorDepth = window.screen.colorDepth;
      this.pixelDepth = window.screen.pixelDepth;
    }

    this.detect();
  }

  _createClass(ViewPoint, [{
    key: "detect",
    value: function detect() {
      if (window && typeof window.innerWidth !== 'undefined') {
        this.width = window.innerWidth;
        this.height = window.innerHeight;
      } // IE6
      else if (document && typeof document.documentElement !== 'undefined' && typeof document.documentElement.clientWidth !== 'undefined' && document.documentElement.clientWidth !== 0) {
          this.width = document.documentElement.clientWidth;
          this.height = document.documentElement.clientHeight;
        } //Older IE
        else if (document) {
            this.width = document.getElementsByTagName('body')[0].clientWidth;
            this.height = document.getElementsByTagName('body')[0].clientHeight;
          }
    }
  }]);

  return ViewPoint;
}();

var viewpoint = new ViewPoint();
var _default = viewpoint;
exports["default"] = _default;
