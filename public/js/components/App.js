webpackJsonp([0],{

/***/ 100:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(10);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Hero = function (_Component) {
  _inherits(Hero, _Component);

  function Hero() {
    _classCallCheck(this, Hero);

    return _possibleConstructorReturn(this, (Hero.__proto__ || Object.getPrototypeOf(Hero)).apply(this, arguments));
  }

  _createClass(Hero, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement("section", { className: "hero" });
    }
  }]);

  return Hero;
}(_react.Component);

exports.default = Hero;

/***/ }),

/***/ 101:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(10);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Media = function (_Component) {
  _inherits(Media, _Component);

  function Media() {
    _classCallCheck(this, Media);

    return _possibleConstructorReturn(this, (Media.__proto__ || Object.getPrototypeOf(Media)).apply(this, arguments));
  }

  _createClass(Media, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "section",
        { className: "media" },
        _react2.default.createElement(
          "main",
          null,
          _react2.default.createElement(
            "h1",
            null,
            "One account. Listen ",
            _react2.default.createElement("br", null),
            "everywhere."
          ),
          _react2.default.createElement(
            "h5",
            null,
            "mobile * computer * tablet * car"
          ),
          _react2.default.createElement(
            "h5",
            null,
            "speaker * playstation * xbox * tv * web player"
          )
        ),
        _react2.default.createElement(
          "aside",
          null,
          _react2.default.createElement("img", { src: "./img/devices.svg" })
        )
      );
    }
  }]);

  return Media;
}(_react.Component);

exports.default = Media;

/***/ }),

/***/ 102:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(10);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var New = function (_Component) {
  _inherits(New, _Component);

  function New() {
    _classCallCheck(this, New);

    return _possibleConstructorReturn(this, (New.__proto__ || Object.getPrototypeOf(New)).apply(this, arguments));
  }

  _createClass(New, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "section",
        { className: "new" },
        _react2.default.createElement(
          "main",
          null,
          _react2.default.createElement(
            "h1",
            null,
            "Whats on ",
            _react2.default.createElement("br", null),
            "Spotify?"
          ),
          _react2.default.createElement(
            "h3",
            null,
            "Music"
          ),
          _react2.default.createElement(
            "p",
            null,
            "There are millions of songs on Spotify. Play your favorites, discover new tracks, and build the perfect collection."
          ),
          _react2.default.createElement(
            "h3",
            null,
            "Playlists"
          ),
          _react2.default.createElement(
            "p",
            null,
            "You\u2019ll find readymade playlists to match your mood, put together by music fans and experts."
          ),
          _react2.default.createElement(
            "h3",
            null,
            "New Releases"
          ),
          _react2.default.createElement(
            "p",
            null,
            "Hear this week\u2019s latest singles and albums, and check out what\u2019s hot in the Top 50."
          )
        ),
        _react2.default.createElement(
          "aside",
          null,
          _react2.default.createElement(
            "div",
            { className: "box" },
            _react2.default.createElement(
              "div",
              { className: "music-cover" },
              _react2.default.createElement("img", { src: "./img/cover1.jpeg" })
            ),
            _react2.default.createElement(
              "div",
              { className: "music-cover" },
              _react2.default.createElement("img", { src: "./img/cover2.jpeg" })
            ),
            _react2.default.createElement(
              "div",
              { className: "music-cover" },
              _react2.default.createElement("img", { src: "./img/cover3.jpeg" })
            ),
            _react2.default.createElement(
              "div",
              { className: "music-cover" },
              _react2.default.createElement("img", { src: "./img/cover4.jpeg" })
            )
          )
        )
      );
    }
  }]);

  return New;
}(_react.Component);

exports.default = New;

/***/ }),

/***/ 103:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(10);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Pricing = function (_Component) {
  _inherits(Pricing, _Component);

  function Pricing() {
    _classCallCheck(this, Pricing);

    return _possibleConstructorReturn(this, (Pricing.__proto__ || Object.getPrototypeOf(Pricing)).apply(this, arguments));
  }

  _createClass(Pricing, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "section",
        { className: "pricing" },
        _react2.default.createElement(
          "h1",
          null,
          "Go get the music."
        ),
        _react2.default.createElement(
          "div",
          { className: "card-wrapper" },
          _react2.default.createElement(
            "div",
            { className: "card" },
            _react2.default.createElement(
              "h3",
              null,
              "Spotify Free"
            ),
            _react2.default.createElement(
              "h2",
              null,
              _react2.default.createElement(
                "span",
                null,
                "$0.00"
              ),
              _react2.default.createElement(
                "span",
                null,
                " / month"
              )
            ),
            _react2.default.createElement(
              "ul",
              null,
              _react2.default.createElement(
                "li",
                null,
                "Shuffle play"
              ),
              _react2.default.createElement(
                "li",
                { className: "inactive" },
                "Ad free"
              ),
              _react2.default.createElement(
                "li",
                { className: "inactive" },
                "Unlimited skips"
              ),
              _react2.default.createElement(
                "li",
                { className: "inactive" },
                "Listen offline"
              ),
              _react2.default.createElement(
                "li",
                { className: "inactive" },
                "Play any track"
              ),
              _react2.default.createElement(
                "li",
                { className: "inactive" },
                "High quality audio"
              )
            ),
            _react2.default.createElement(
              "button",
              null,
              "Get Free"
            )
          ),
          _react2.default.createElement(
            "div",
            { className: "card" },
            _react2.default.createElement(
              "h3",
              null,
              "Spotify Premium"
            ),
            _react2.default.createElement(
              "h2",
              null,
              _react2.default.createElement(
                "span",
                null,
                "$0.99"
              ),
              _react2.default.createElement(
                "span",
                null,
                " / 3 months"
              )
            ),
            _react2.default.createElement(
              "ul",
              null,
              _react2.default.createElement(
                "li",
                null,
                "Shuffle play"
              ),
              _react2.default.createElement(
                "li",
                null,
                "Ad free"
              ),
              _react2.default.createElement(
                "li",
                null,
                "Unlimited skips"
              ),
              _react2.default.createElement(
                "li",
                null,
                "Listen offline"
              ),
              _react2.default.createElement(
                "li",
                null,
                "Play any track"
              ),
              _react2.default.createElement(
                "li",
                null,
                "High quality audio"
              )
            ),
            _react2.default.createElement(
              "button",
              null,
              "Get Premium"
            )
          )
        ),
        _react2.default.createElement(
          "p",
          null,
          "Offer not available to users who already tried Premium. ",
          _react2.default.createElement(
            "u",
            null,
            "Terms apply."
          )
        )
      );
    }
  }]);

  return Pricing;
}(_react.Component);

exports.default = Pricing;

/***/ }),

/***/ 105:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(10);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(33);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _Header = __webpack_require__(99);

var _Header2 = _interopRequireDefault(_Header);

var _Hero = __webpack_require__(100);

var _Hero2 = _interopRequireDefault(_Hero);

var _New = __webpack_require__(102);

var _New2 = _interopRequireDefault(_New);

var _Features = __webpack_require__(97);

var _Features2 = _interopRequireDefault(_Features);

var _Media = __webpack_require__(101);

var _Media2 = _interopRequireDefault(_Media);

var _Pricing = __webpack_require__(103);

var _Pricing2 = _interopRequireDefault(_Pricing);

var _Footer = __webpack_require__(98);

var _Footer2 = _interopRequireDefault(_Footer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_Component) {
  _inherits(App, _Component);

  function App() {
    _classCallCheck(this, App);

    return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).apply(this, arguments));
  }

  _createClass(App, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'container' },
        _react2.default.createElement(_Header2.default, null),
        _react2.default.createElement(_Hero2.default, null),
        _react2.default.createElement(_New2.default, null),
        _react2.default.createElement(_Features2.default, null),
        _react2.default.createElement(_Media2.default, null),
        _react2.default.createElement(_Pricing2.default, null),
        _react2.default.createElement(_Footer2.default, null)
      );
    }
  }]);

  return App;
}(_react.Component);

var app = document.getElementById('app');

_reactDom2.default.render(_react2.default.createElement(App, null), app);

/***/ }),

/***/ 97:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(10);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Features = function (_Component) {
  _inherits(Features, _Component);

  function Features() {
    _classCallCheck(this, Features);

    return _possibleConstructorReturn(this, (Features.__proto__ || Object.getPrototypeOf(Features)).apply(this, arguments));
  }

  _createClass(Features, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "section",
        { className: "features" },
        _react2.default.createElement(
          "aside",
          null,
          "Image goes here"
        ),
        _react2.default.createElement(
          "main",
          null,
          _react2.default.createElement(
            "h1",
            null,
            "It's easy."
          ),
          _react2.default.createElement(
            "h3",
            null,
            "Search"
          ),
          _react2.default.createElement(
            "p",
            null,
            "Know what you want to listen to? Just search and hit play."
          ),
          _react2.default.createElement(
            "h3",
            null,
            "Browse"
          ),
          _react2.default.createElement(
            "p",
            null,
            "Check out the latest charts, brand new releases and great playlists for right now."
          ),
          _react2.default.createElement(
            "h3",
            null,
            "Discover"
          ),
          _react2.default.createElement(
            "p",
            null,
            "Enjoy new music every Monday with your own personal playlist. Or sit back and enjoy Radio."
          )
        )
      );
    }
  }]);

  return Features;
}(_react.Component);

exports.default = Features;

/***/ }),

/***/ 98:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(10);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Footer = function (_Component) {
    _inherits(Footer, _Component);

    function Footer() {
        _classCallCheck(this, Footer);

        return _possibleConstructorReturn(this, (Footer.__proto__ || Object.getPrototypeOf(Footer)).apply(this, arguments));
    }

    _createClass(Footer, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement('footer', null);
        }
    }]);

    return Footer;
}(_react.Component);

exports.default = Footer;

/***/ }),

/***/ 99:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(10);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Header = function (_Component) {
  _inherits(Header, _Component);

  function Header() {
    _classCallCheck(this, Header);

    return _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).apply(this, arguments));
  }

  _createClass(Header, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "nav",
        null,
        _react2.default.createElement(
          "div",
          { className: "navbar-brand" },
          _react2.default.createElement("img", { src: "../img/logo-spotify.png" })
        ),
        _react2.default.createElement(
          "div",
          { className: "nav-menu" },
          _react2.default.createElement(
            "ul",
            null,
            _react2.default.createElement(
              "li",
              null,
              _react2.default.createElement(
                "a",
                { href: "#" },
                "Premium"
              )
            ),
            _react2.default.createElement(
              "li",
              null,
              _react2.default.createElement(
                "a",
                { href: "#" },
                "Help"
              )
            ),
            _react2.default.createElement(
              "li",
              null,
              _react2.default.createElement(
                "a",
                { href: "#" },
                "Download"
              )
            ),
            _react2.default.createElement(
              "li",
              null,
              "|"
            ),
            _react2.default.createElement(
              "li",
              null,
              _react2.default.createElement(
                "a",
                { href: "#" },
                "Sign up"
              )
            ),
            _react2.default.createElement(
              "li",
              null,
              _react2.default.createElement(
                "a",
                { href: "#" },
                "Log In"
              )
            )
          )
        )
      );
    }
  }]);

  return Header;
}(_react.Component);

exports.default = Header;

/***/ })

},[105]);