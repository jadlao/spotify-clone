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

var _Carousel = __webpack_require__(106);

var _Carousel2 = _interopRequireDefault(_Carousel);

var _carouselSlidesData = __webpack_require__(107);

var _carouselSlidesData2 = _interopRequireDefault(_carouselSlidesData);

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
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'section',
        { className: 'hero' },
        _react2.default.createElement(_Carousel2.default, { slides: _carouselSlidesData2.default })
      );
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
            "ul",
            null,
            _react2.default.createElement(
              "li",
              { className: "dot" },
              "mobile"
            ),
            _react2.default.createElement(
              "li",
              { className: "dot" },
              "computer"
            ),
            _react2.default.createElement(
              "li",
              { className: "dot" },
              "tablet"
            ),
            _react2.default.createElement(
              "li",
              null,
              "car"
            )
          ),
          _react2.default.createElement(
            "ul",
            null,
            _react2.default.createElement(
              "li",
              { className: "dot" },
              "speaker"
            ),
            _react2.default.createElement(
              "li",
              { className: "dot" },
              "playstation"
            ),
            _react2.default.createElement(
              "li",
              { className: "dot" },
              "xbox"
            ),
            _react2.default.createElement(
              "li",
              { className: "dot" },
              "tv"
            ),
            _react2.default.createElement(
              "li",
              null,
              "web player"
            )
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

/***/ 106:
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

var Carousel = function (_Component) {
  _inherits(Carousel, _Component);

  function Carousel() {
    _classCallCheck(this, Carousel);

    var _this = _possibleConstructorReturn(this, (Carousel.__proto__ || Object.getPrototypeOf(Carousel)).call(this));

    _this.goToPrevSlide = _this.goToPrevSlide.bind(_this);
    _this.goToNextSlide = _this.goToNextSlide.bind(_this);

    _this.state = {
      activeIndex: 0
    };
    return _this;
  }

  _createClass(Carousel, [{
    key: "goToPrevSlide",
    value: function goToPrevSlide(e) {
      //console.log('prev')
      e.preventDefault();

      var index = this.state.activeIndex;
      var slides = this.props.slides;

      var slidesLength = slides.length - 1;

      // check if index < 1, if so, set to last slide
      index < 1 ? index = slidesLength : --index;

      this.setState({
        activeIndex: index
      });
    }
  }, {
    key: "goToNextSlide",
    value: function goToNextSlide(e) {
      //console.log('next')
      e.preventDefault();

      var index = this.state.activeIndex;
      var slides = this.props.slides;

      var slidesLength = slides.length - 1;

      index === slidesLength ? index = 0 : ++index;

      this.setState({
        activeIndex: index
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement(
        "div",
        { className: "wrapper" },
        _react2.default.createElement(
          "a",
          { href: "#", onClick: function onClick(e) {
              return _this2.goToPrevSlide(e);
            } },
          _react2.default.createElement("span", { className: "prev" })
        ),
        _react2.default.createElement(
          "ul",
          { className: "carousel" },
          this.props.slides.map(function (slide, index) {
            return _react2.default.createElement(
              "li",
              { className: index == _this2.state.activeIndex ? "carousel-item active" : "carousel-item", key: index },
              _react2.default.createElement(
                "h1",
                null,
                slide.content
              ),
              _react2.default.createElement(
                "button",
                null,
                "Learn More"
              ),
              _react2.default.createElement(
                "p",
                null,
                slide.signup
              )
            );
          })
        ),
        _react2.default.createElement(
          "a",
          { href: "#", onClick: function onClick(e) {
              return _this2.goToNextSlide(e);
            } },
          _react2.default.createElement("span", { className: "next" })
        )
      );
    }
  }]);

  return Carousel;
}(_react.Component);

exports.default = Carousel;

/***/ }),

/***/ 107:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
// contains slide data for carousel as objects in array
var carouselSlidesData = [{
  content: "Premium for your whole family. Just $17.99.",
  signup: ""
}, {
  content: "Students get 50% off Premium.",
  signup: ""
}, {
  content: "Play Spotify on Playstation and on Xbox One.",
  signup: ""
}, {
  content: "3 months of Premium for $0.99.",
  signup: "Or sign up for our free service."
}];

exports.default = carouselSlidesData;

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
          _react2.default.createElement(
            "div",
            { className: "music-player" },
            _react2.default.createElement("div", { className: "small-circle" }),
            _react2.default.createElement(
              "h4",
              null,
              "Made for You"
            ),
            _react2.default.createElement(
              "div",
              { className: "music-images" },
              _react2.default.createElement(
                "figure",
                null,
                _react2.default.createElement("img", { src: "./img/your_daily_mix.jpg" }),
                _react2.default.createElement(
                  "figcaption",
                  null,
                  "Your Daily Mix"
                )
              ),
              _react2.default.createElement(
                "figure",
                null,
                _react2.default.createElement("img", { src: "./img/your_release_radar.jpg" }),
                _react2.default.createElement(
                  "figcaption",
                  null,
                  "Release Radar"
                )
              )
            ),
            _react2.default.createElement(
              "ul",
              null,
              _react2.default.createElement(
                "li",
                null,
                "Charts"
              ),
              _react2.default.createElement(
                "li",
                null,
                "New Releases"
              ),
              _react2.default.createElement(
                "li",
                null,
                "Videos"
              ),
              _react2.default.createElement(
                "li",
                null,
                "Podcasts"
              ),
              _react2.default.createElement(
                "li",
                null,
                "Discover"
              ),
              _react2.default.createElement(
                "li",
                null,
                "Concerts"
              )
            )
          )
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
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "footer",
        null,
        _react2.default.createElement(
          "div",
          { className: "link-wrapper" },
          _react2.default.createElement(
            "div",
            { className: "footer-brand" },
            _react2.default.createElement("img", { src: "./img/logo-spotify.png", alt: "Spotify Logo" })
          ),
          _react2.default.createElement(
            "div",
            { className: "link-cols" },
            _react2.default.createElement(
              "ul",
              null,
              _react2.default.createElement(
                "li",
                null,
                "Company"
              ),
              _react2.default.createElement(
                "li",
                null,
                _react2.default.createElement(
                  "a",
                  { href: "#" },
                  "About"
                )
              ),
              _react2.default.createElement(
                "li",
                null,
                _react2.default.createElement(
                  "a",
                  { href: "#" },
                  "Jobs"
                )
              ),
              _react2.default.createElement(
                "li",
                null,
                _react2.default.createElement(
                  "a",
                  { href: "#" },
                  "Press"
                )
              ),
              _react2.default.createElement(
                "li",
                null,
                _react2.default.createElement(
                  "a",
                  { href: "#" },
                  "News"
                )
              )
            ),
            _react2.default.createElement(
              "ul",
              null,
              _react2.default.createElement(
                "li",
                null,
                "Communities"
              ),
              _react2.default.createElement(
                "li",
                null,
                _react2.default.createElement(
                  "a",
                  { href: "#" },
                  "For Artists"
                )
              ),
              _react2.default.createElement(
                "li",
                null,
                _react2.default.createElement(
                  "a",
                  { href: "#" },
                  "Developers"
                )
              ),
              _react2.default.createElement(
                "li",
                null,
                _react2.default.createElement(
                  "a",
                  { href: "#" },
                  "Brands"
                )
              )
            ),
            _react2.default.createElement(
              "ul",
              null,
              _react2.default.createElement(
                "li",
                null,
                "Useful links"
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
                  "Gift"
                )
              ),
              _react2.default.createElement(
                "li",
                null,
                _react2.default.createElement(
                  "a",
                  { href: "#" },
                  "Web Player"
                )
              )
            )
          ),
          _react2.default.createElement(
            "div",
            { className: "social-icons" },
            _react2.default.createElement(
              "a",
              { href: "#" },
              _react2.default.createElement(
                "span",
                { className: "instagram circle" },
                _react2.default.createElement("i", { "class": "fa fa-instagram", "aria-hidden": "true" })
              )
            ),
            _react2.default.createElement(
              "a",
              { href: "#" },
              _react2.default.createElement(
                "span",
                { className: "twitter circle" },
                _react2.default.createElement("i", { "class": "fa fa-twitter", "aria-hidden": "true" })
              )
            ),
            _react2.default.createElement(
              "a",
              { href: "#" },
              _react2.default.createElement(
                "span",
                { className: "facebook circle" },
                _react2.default.createElement("i", { "class": "fa fa-facebook", "aria-hidden": "true" })
              )
            )
          )
        ),
        _react2.default.createElement(
          "div",
          { className: "copyright-wrapper" },
          _react2.default.createElement(
            "div",
            { className: "other-links" },
            _react2.default.createElement(
              "ul",
              null,
              _react2.default.createElement(
                "li",
                null,
                _react2.default.createElement(
                  "a",
                  { href: "#" },
                  "Legal"
                )
              ),
              _react2.default.createElement(
                "li",
                null,
                _react2.default.createElement(
                  "a",
                  { href: "#" },
                  "Privacy"
                )
              ),
              _react2.default.createElement(
                "li",
                null,
                _react2.default.createElement(
                  "a",
                  { href: "#" },
                  "Cookies"
                )
              ),
              _react2.default.createElement(
                "li",
                null,
                _react2.default.createElement(
                  "a",
                  { href: "#" },
                  "About Ads"
                )
              )
            )
          ),
          _react2.default.createElement(
            "div",
            { className: "copyrights" },
            _react2.default.createElement(
              "div",
              { className: "australia" },
              _react2.default.createElement(
                "a",
                { href: "#" },
                "Australia"
              ),
              _react2.default.createElement("img", { src: "./img/au.svg" })
            ),
            "\xA9 2017 Spotify AB"
          )
        )
      );
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