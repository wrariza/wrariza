
          window.__NEXT_REGISTER_PAGE('/', function() {
            var comp = module.exports =
webpackJsonp([5],{

/***/ 566:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _taggedTemplateLiteral2 = __webpack_require__(564);

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _react = __webpack_require__(8);

var _react2 = _interopRequireDefault(_react);

var _styledComponents = __webpack_require__(550);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _reactStyledFlexboxgrid = __webpack_require__(565);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/wrariza/MEGA/apps/wrariza-co/components/Ninja.js';

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n  0%{\n    background-position: 0 0;\n    opacity:0;\n  }\n  100%{\n    background-position: right;\n    opacity:1;\n  }\n'], ['\n  0%{\n    background-position: 0 0;\n    opacity:0;\n  }\n  100%{\n    background-position: right;\n    opacity:1;\n  }\n']),
    _templateObject2 = (0, _taggedTemplateLiteral3.default)(['\n  margin-right: auto;\n  margin-left: auto;\n  opacity:0;\n  text-align: center;\n  background-color: transparent;\n  padding: 10px;\n  height: 70px;\n  background-image: url(/static/img/ninja.png);\n  width: 100px !important;\n  animation: ', ';\n  animation-duration: .8s;\n  animation-delay: 2s;\n  animation-timing-function: steps(3);\n  animation-fill-mode: forwards;\n'], ['\n  margin-right: auto;\n  margin-left: auto;\n  opacity:0;\n  text-align: center;\n  background-color: transparent;\n  padding: 10px;\n  height: 70px;\n  background-image: url(/static/img/ninja.png);\n  width: 100px !important;\n  animation: ', ';\n  animation-duration: .8s;\n  animation-delay: 2s;\n  animation-timing-function: steps(3);\n  animation-fill-mode: forwards;\n']);

var ninja = (0, _styledComponents.keyframes)(_templateObject);

var Content = (0, _styledComponents2.default)(_reactStyledFlexboxgrid.Row)(_templateObject2, ninja);
function Ninja() {
  return _react2.default.createElement(Content, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    }
  });
}

exports.default = Ninja;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/wrariza/MEGA/apps/wrariza-co/components/Ninja.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/wrariza/MEGA/apps/wrariza-co/components/Ninja.js"); } } })();

/***/ }),

/***/ 569:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__resourceQuery) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __webpack_require__(36);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(15);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(16);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(39);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(38);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(8);

var _react2 = _interopRequireDefault(_react);

var _styledComponents = __webpack_require__(550);

var _reactStyledFlexboxgrid = __webpack_require__(565);

var _theme = __webpack_require__(592);

var _Hero = __webpack_require__(587);

var _Hero2 = _interopRequireDefault(_Hero);

var _Perfil = __webpack_require__(591);

var _Perfil2 = _interopRequireDefault(_Perfil);

var _Ninja = __webpack_require__(566);

var _Ninja2 = _interopRequireDefault(_Ninja);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/wrariza/MEGA/apps/wrariza-co/pages/index.js?entry';


var Home = function (_Component) {
  (0, _inherits3.default)(Home, _Component);

  function Home() {
    (0, _classCallCheck3.default)(this, Home);

    return (0, _possibleConstructorReturn3.default)(this, (Home.__proto__ || (0, _getPrototypeOf2.default)(Home)).apply(this, arguments));
  }

  (0, _createClass3.default)(Home, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(_styledComponents.ThemeProvider, { theme: _theme.LightTheme, __source: {
          fileName: _jsxFileName,
          lineNumber: 12
        }
      }, _react2.default.createElement(_reactStyledFlexboxgrid.Grid, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        }
      }, _react2.default.createElement(_Hero2.default, {
        name: '',
        label: 'HI I\'M WILLIAM RICARDO ARIZA, I LOVE THE SOFTWARE BUILT WITH PASSION AND THE',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        }
      }), _react2.default.createElement(_Perfil2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        }
      })));
    }
  }]);

  return Home;
}(_react.Component);

exports.default = Home;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/wrariza/MEGA/apps/wrariza-co/pages/index.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/wrariza/MEGA/apps/wrariza-co/pages/index.js"); } } })();
    (function (Component, route) {
      if (false) return
      if (false) return

      var qs = __webpack_require__(82)
      var params = qs.parse(__resourceQuery.slice(1))
      if (params.entry == null) return

      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(module.exports.default || module.exports, "/")
  
/* WEBPACK VAR INJECTION */}.call(exports, "?entry"))

/***/ }),

/***/ 587:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _getPrototypeOf = __webpack_require__(36);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(15);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(16);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(39);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(38);

var _inherits3 = _interopRequireDefault(_inherits2);

var _taggedTemplateLiteral2 = __webpack_require__(564);

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _react = __webpack_require__(8);

var _react2 = _interopRequireDefault(_react);

var _reactSvg = __webpack_require__(600);

var _reactSvg2 = _interopRequireDefault(_reactSvg);

var _styledComponents = __webpack_require__(550);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _reactStyledFlexboxgrid = __webpack_require__(565);

var _LineAnimation = __webpack_require__(589);

var _LabelAnimation = __webpack_require__(588);

var _LabelAnimation2 = _interopRequireDefault(_LabelAnimation);

var _NameAnimation = __webpack_require__(590);

var _NameAnimation2 = _interopRequireDefault(_NameAnimation);

var _Ninja = __webpack_require__(566);

var _Ninja2 = _interopRequireDefault(_Ninja);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/wrariza/MEGA/apps/wrariza-co/components/Hero.js';

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n  text-align: center;\n  padding: 10px;\n  margin-top: 15%;\n'], ['\n  text-align: center;\n  padding: 10px;\n  margin-top: 15%;\n']);

var GridHero = (0, _styledComponents2.default)(_reactStyledFlexboxgrid.Grid)(_templateObject);

var Hero = function (_Component) {
    (0, _inherits3.default)(Hero, _Component);

    function Hero() {
        (0, _classCallCheck3.default)(this, Hero);

        return (0, _possibleConstructorReturn3.default)(this, (Hero.__proto__ || (0, _getPrototypeOf2.default)(Hero)).apply(this, arguments));
    }

    (0, _createClass3.default)(Hero, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(GridHero, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 22
                }
            }, _react2.default.createElement(_Ninja2.default, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 23
                }
            }), _react2.default.createElement(_LineAnimation.LineAnimation, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 24
                }
            }), _react2.default.createElement(_reactSvg2.default, {
                path: '/static/wilariza.svg',
                callback: function callback(svg) {
                    return console.log(svg);
                },
                className: 'wrariza',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 26
                }
            }), _react2.default.createElement(_LineAnimation.LineHorizontalReverse, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 31
                }
            }), _react2.default.createElement(_reactStyledFlexboxgrid.Row, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 33
                }
            }, _react2.default.createElement(_LabelAnimation2.default, {
                label: this.props.label,
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 34
                }
            })));
        }
    }]);

    return Hero;
}(_react.Component);

exports.default = Hero;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/wrariza/MEGA/apps/wrariza-co/components/Hero.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/wrariza/MEGA/apps/wrariza-co/components/Hero.js"); } } })();

/***/ }),

/***/ 588:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _taggedTemplateLiteral2 = __webpack_require__(564);

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _react = __webpack_require__(8);

var _react2 = _interopRequireDefault(_react);

var _styledComponents = __webpack_require__(550);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/wrariza/MEGA/apps/wrariza-co/components/LabelAnimation.js';

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n  from{ \n    width: 0;\n  }\n  to{\n    white-space: normal;\n  }\n'], ['\n  from{ \n    width: 0;\n  }\n  to{\n    white-space: normal;\n  }\n']),
    _templateObject2 = (0, _taggedTemplateLiteral3.default)(['\n    0%{width: 0;}\n    50%{width: 0;}\n    100%{ width: 100; } \n'], ['\n    0%{width: 0;}\n    50%{width: 0;}\n    100%{ width: 100; } \n']),
    _templateObject3 = (0, _taggedTemplateLiteral3.default)(['\n  {\n    to{opacity: .0;}\n  }\n'], ['\n  {\n    to{opacity: .0;}\n  }\n']),
    _templateObject4 = (0, _taggedTemplateLiteral3.default)(['\n   { \n    width: 100%;\n    white-space: nowrap;\n    text-alinght: center;\n    overflow: hidden;\n    animation: ', ' 4s steps(60, end) forwards; \n    text-transform: uppercase; \n    font: .7em menlo;\n    margin: auto;\n  }\n\n  :nth-child(2){\n    animation: ', ' 8s steps(60, end);\n  }\n\n  a{\n    color: lime;\n    text-decoration: none;\n  }\n\n  span{\n    animation: ', ' 1s infinite;\n  }\n\n  .corazon{\n    color: red;\n    font-size: 2em;\n  }\n\n  ::selection{\n    background: black;\n  } \n'], ['\n   { \n    width: 100%;\n    white-space: nowrap;\n    text-alinght: center;\n    overflow: hidden;\n    animation: ', ' 4s steps(60, end) forwards; \n    text-transform: uppercase; \n    font: .7em menlo;\n    margin: auto;\n  }\n\n  :nth-child(2){\n    animation: ', ' 8s steps(60, end);\n  }\n\n  a{\n    color: lime;\n    text-decoration: none;\n  }\n\n  span{\n    animation: ', ' 1s infinite;\n  }\n\n  .corazon{\n    color: red;\n    font-size: 2em;\n  }\n\n  ::selection{\n    background: black;\n  } \n']);

var AnimationType = (0, _styledComponents.keyframes)(_templateObject);
var AnimationType2 = (0, _styledComponents.keyframes)(_templateObject2);
var AnimationBlink = (0, _styledComponents.keyframes)(_templateObject3);
var LabelAnimation = _styledComponents2.default.div(_templateObject4, AnimationType, AnimationType2, AnimationBlink);

function Label(props) {
  return _react2.default.createElement(LabelAnimation, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    }
  }, props.label, _react2.default.createElement('span', { className: 'corazon', __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    }
  }, ' \u2665 '), ':)');
}

exports.default = Label;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/wrariza/MEGA/apps/wrariza-co/components/LabelAnimation.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/wrariza/MEGA/apps/wrariza-co/components/LabelAnimation.js"); } } })();

/***/ }),

/***/ 589:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.LineHorizontalReverse = exports.LineAnimation = undefined;

var _taggedTemplateLiteral2 = __webpack_require__(564);

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _styledComponents = __webpack_require__(550);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n  0%{\n    left: 0%;\n    width: 200px;\n    background-color: #f44336;   \n  }\n  %5{\n    left: 5%;\n  }\n  %10{\n    left: 10%;\n    background-color: #e91e63;\n  }\n  15%{\n    left: 15%;\n  }\n  20%{\n    left: 20%;\n    background-color: #9c27b0;\n  }\n  25%{\n     left: 25%;\n  }\n  30%{\n    left: 30%;\n     background-color: #f44336;\n  }\n  35%{\n    left: 35%;\n  }\n  40%{\n    left: 40%;\n    background-color: #673ab7;\n  }\n  45%{\n    left: 45%;\n  }\n  50%{\n    left: 50%;\n    width: 200px;\n    background-color: #3f51b5;\n  }\n  55%{\n    left: 55%;\n  }\n  60%{\n    left: 60%;\n    background-color: #2196f3;\n  }\n  65%{\n    left: 65%;\n  }\n  70%{\n    left: 70%;\n    background-color: #03a9f4;\n  }\n  75%{\n    left: 75%\n  }\n  80%{\n    left: 80%;\n    background-color: #f44336;\n  }\n  90%{\n    left: 90%;\n    background-color: #F2F2F2;\n  }\n  100%{\n    width: 200px;\n    left: 95%;\n    background-color: #B6F6F6;\n  }\n'], ['\n  0%{\n    left: 0%;\n    width: 200px;\n    background-color: #f44336;   \n  }\n  %5{\n    left: 5%;\n  }\n  %10{\n    left: 10%;\n    background-color: #e91e63;\n  }\n  15%{\n    left: 15%;\n  }\n  20%{\n    left: 20%;\n    background-color: #9c27b0;\n  }\n  25%{\n     left: 25%;\n  }\n  30%{\n    left: 30%;\n     background-color: #f44336;\n  }\n  35%{\n    left: 35%;\n  }\n  40%{\n    left: 40%;\n    background-color: #673ab7;\n  }\n  45%{\n    left: 45%;\n  }\n  50%{\n    left: 50%;\n    width: 200px;\n    background-color: #3f51b5;\n  }\n  55%{\n    left: 55%;\n  }\n  60%{\n    left: 60%;\n    background-color: #2196f3;\n  }\n  65%{\n    left: 65%;\n  }\n  70%{\n    left: 70%;\n    background-color: #03a9f4;\n  }\n  75%{\n    left: 75%\n  }\n  80%{\n    left: 80%;\n    background-color: #f44336;\n  }\n  90%{\n    left: 90%;\n    background-color: #F2F2F2;\n  }\n  100%{\n    width: 200px;\n    left: 95%;\n    background-color: #B6F6F6;\n  }\n']),
    _templateObject2 = (0, _taggedTemplateLiteral3.default)(['\n  position: absolute;\n  background-color: ', ';\n  height: 1px;\n  animation-direction: reverse;\n  animation: ', ' 1.5s;\n'], ['\n  position: absolute;\n  background-color: ', ';\n  height: 1px;\n  animation-direction: reverse;\n  animation: ', ' 1.5s;\n']),
    _templateObject3 = (0, _taggedTemplateLiteral3.default)(['\n   animation-direction: reverse;\n   left: calc(100% - 20px);\n'], ['\n   animation-direction: reverse;\n   left: calc(100% - 20px);\n']);

var lineHorizontalAnimation = (0, _styledComponents.keyframes)(_templateObject);

var LineAnimation = _styledComponents2.default.div(_templateObject2, function (props) {
    return props.theme.fontColor;
}, lineHorizontalAnimation);

var LineHorizontalReverse = (0, _styledComponents2.default)(LineAnimation)(_templateObject3);

exports.LineAnimation = LineAnimation;
exports.LineHorizontalReverse = LineHorizontalReverse;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/wrariza/MEGA/apps/wrariza-co/components/LineAnimation.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/wrariza/MEGA/apps/wrariza-co/components/LineAnimation.js"); } } })();

/***/ }),

/***/ 590:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _taggedTemplateLiteral2 = __webpack_require__(564);

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _react = __webpack_require__(8);

var _react2 = _interopRequireDefault(_react);

var _styledComponents = __webpack_require__(550);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/wrariza/MEGA/apps/wrariza-co/components/NameAnimation.js';

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n  %0{\n    color: #f44336;\n  }\n  %10{\n    color: #e91e63;\n  }\n  20%{\n    color: #9c27b0;\n  }\n  30%{\n     color: #f44336;\n  }\n  40%{\n    color: #673ab7;\n  }\n  50%{\n    color: #3f51b5;\n  }\n  60%{\n    color: #2196f3;\n  }\n  70%{\n    color: #03a9f4;\n  }\n  80%{\n    color: #f44336;\n  }\n  90%{\n    color: #F2F2F2;\n  }\n  100%{\n    color: #B6F6F6;\n  }\n'], ['\n  %0{\n    color: #f44336;\n  }\n  %10{\n    color: #e91e63;\n  }\n  20%{\n    color: #9c27b0;\n  }\n  30%{\n     color: #f44336;\n  }\n  40%{\n    color: #673ab7;\n  }\n  50%{\n    color: #3f51b5;\n  }\n  60%{\n    color: #2196f3;\n  }\n  70%{\n    color: #03a9f4;\n  }\n  80%{\n    color: #f44336;\n  }\n  90%{\n    color: #F2F2F2;\n  }\n  100%{\n    color: #B6F6F6;\n  }\n']),
    _templateObject2 = (0, _taggedTemplateLiteral3.default)(['\n  font-size: 2em;\n  text-transform: uppercase;\n  animation: ', ' 2s;\n  text-decoration: none;\n'], ['\n  font-size: 2em;\n  text-transform: uppercase;\n  animation: ', ' 2s;\n  text-decoration: none;\n']);

var Animation = (0, _styledComponents.keyframes)(_templateObject);
var NameAnimation = _styledComponents2.default.div(_templateObject2, Animation);

function Name(props) {
  return _react2.default.createElement(NameAnimation, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    }
  }, props.name);
}

exports.default = Name;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/wrariza/MEGA/apps/wrariza-co/components/NameAnimation.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/wrariza/MEGA/apps/wrariza-co/components/NameAnimation.js"); } } })();

/***/ }),

/***/ 591:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _defineProperty2 = __webpack_require__(572);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _taggedTemplateLiteral2 = __webpack_require__(564);

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _react = __webpack_require__(8);

var _react2 = _interopRequireDefault(_react);

var _styledComponents = __webpack_require__(550);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _reactStyledFlexboxgrid = __webpack_require__(565);

var _reactIconsKit = __webpack_require__(597);

var _reactIconsKit2 = _interopRequireDefault(_reactIconsKit);

var _fa = __webpack_require__(595);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/wrariza/MEGA/apps/wrariza-co/components/Perfil.js';

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n    width: 100%;\n    margin-top: 10px;\n'], ['\n    width: 100%;\n    margin-top: 10px;\n']),
    _templateObject2 = (0, _taggedTemplateLiteral3.default)(['\n    width: 160px;\n    height: 160px;\n    border-radius: 100%;\n    background-image: url(\'/static/img/perfil.jpg\');\n    margin: auto;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    text-align: center;\n    background-repeat: no-repeat;\n    background-position: 0px 0px;\n    color: transparent;\n    margin: auto;\n    background-size: contain;\n\n    &:hover {\n        opacity: 0.5;\n        color: white;\n    }\n'], ['\n    width: 160px;\n    height: 160px;\n    border-radius: 100%;\n    background-image: url(\'/static/img/perfil.jpg\');\n    margin: auto;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    text-align: center;\n    background-repeat: no-repeat;\n    background-position: 0px 0px;\n    color: transparent;\n    margin: auto;\n    background-size: contain;\n\n    &:hover {\n        opacity: 0.5;\n        color: white;\n    }\n']),
    _templateObject3 = (0, _taggedTemplateLiteral3.default)(['\n    {\n        padding: 15px 0px 15px 2px;\n        font-size: 10px;\n        height: 50px;\n        display: flex;\n        justify-content: center;\n    }\n'], ['\n    {\n        padding: 15px 0px 15px 2px;\n        font-size: 10px;\n        height: 50px;\n        display: flex;\n        justify-content: center;\n    }\n']);

var Container = (0, _styledComponents2.default)(_reactStyledFlexboxgrid.Row)(_templateObject);
var Imgen = _styledComponents2.default.div(_templateObject2);

var Info = (0, _styledComponents2.default)(_reactStyledFlexboxgrid.Row)(_templateObject3);

function Perfil() {
    var _React$createElement;

    return _react2.default.createElement(Container, { xs: 12, __source: {
            fileName: _jsxFileName,
            lineNumber: 45
        }
    }, _react2.default.createElement(_reactStyledFlexboxgrid.Col, { xs: 4, xsOffset: 4, __source: {
            fileName: _jsxFileName,
            lineNumber: 46
        }
    }, _react2.default.createElement(Imgen, {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 47
        }
    }, 'WILLIAM RICARDO ARIZA V\xC9LEZ'), _react2.default.createElement(Info, (_React$createElement = { center: 'xs' }, (0, _defineProperty3.default)(_React$createElement, 'center', 'lg'), (0, _defineProperty3.default)(_React$createElement, '__source', {
        fileName: _jsxFileName,
        lineNumber: 48
    }), _React$createElement), _react2.default.createElement(_reactStyledFlexboxgrid.Col, {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 49
        }
    }, _react2.default.createElement('a', { href: 'https://www.linkedin.com/in/wrariza/', target: '_blank', __source: {
            fileName: _jsxFileName,
            lineNumber: 50
        }
    }, _react2.default.createElement(_reactIconsKit2.default, { icon: _fa.linkedinSquare, __source: {
            fileName: _jsxFileName,
            lineNumber: 51
        }
    }))), _react2.default.createElement(_reactStyledFlexboxgrid.Col, {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 54
        }
    }, _react2.default.createElement('a', { href: 'https://github.com/wrariza', target: '_blank', __source: {
            fileName: _jsxFileName,
            lineNumber: 55
        }
    }, _react2.default.createElement(_reactIconsKit2.default, { icon: _fa.github, __source: {
            fileName: _jsxFileName,
            lineNumber: 56
        }
    }))), _react2.default.createElement(_reactStyledFlexboxgrid.Col, {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 59
        }
    }, _react2.default.createElement('a', { href: 'https://platzi.com/@wrariza/', target: '_blank', __source: {
            fileName: _jsxFileName,
            lineNumber: 60
        }
    }, _react2.default.createElement(_reactIconsKit2.default, { icon: _fa.graduationCap, __source: {
            fileName: _jsxFileName,
            lineNumber: 61
        }
    }))))));
}

exports.default = Perfil;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/wrariza/MEGA/apps/wrariza-co/components/Perfil.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/wrariza/MEGA/apps/wrariza-co/components/Perfil.js"); } } })();

/***/ }),

/***/ 592:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var BlackTheme = exports.BlackTheme = {
    fontColor: 'white',
    background: 'black'
};

var LightTheme = exports.LightTheme = {
    fontColor: 'black',
    background: 'white'
};

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/wrariza/MEGA/apps/wrariza-co/lib/theme.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/wrariza/MEGA/apps/wrariza-co/lib/theme.js"); } } })();

/***/ }),

/***/ 603:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(569);


/***/ })

},[603]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL05pbmphLmpzP2VjYWQ5ZjQiLCJ3ZWJwYWNrOi8vLy4vcGFnZXM/ZWNhZDlmNCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0hlcm8uanM/ZWNhZDlmNCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0xhYmVsQW5pbWF0aW9uLmpzP2VjYWQ5ZjQiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9MaW5lQW5pbWF0aW9uLmpzP2VjYWQ5ZjQiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9OYW1lQW5pbWF0aW9uLmpzP2VjYWQ5ZjQiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9QZXJmaWwuanM/ZWNhZDlmNCIsIndlYnBhY2s6Ly8vLi9saWIvdGhlbWUuanM/MDYzODExZiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFnQjs7OztBQUNDOzs7O0FBQ0Y7Ozs7Ozs7OztBQUdmLElBQU0sUUFBUSxpQ0FBZDs7QUFXQSxJQUFNLFVBQWlCLCtFQVVSO0FBTWYsU0FBUyxRQUNQO3VDQUNHOztnQkFBRDtrQkFHSDtBQUhHO0FBQUE7QUFLSjs7a0JBQWUsTTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdkNDOzs7O0FBQ1A7O0FBQ0E7O0FBQ1k7O0FBQ2Q7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7SUFFRDs7Ozs7Ozs7Ozs7NkJBRUY7NkJBQ0csaURBQXFCO29CQUF0QjtzQkFDRTtBQURGO09BQUEsa0JBQ0c7O29CQUFEO3NCQUNFO0FBREY7QUFBQSx5QkFDRztjQUVDO2VBQU07O29CQUZSO3NCQUlBO0FBSkE7QUFDRSwwQkFHRDs7b0JBQUQ7c0JBSVA7QUFKTztBQUFBOzs7OztBQU9WOztrQkFBZSxLOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeEJDOzs7O0FBQ1Q7Ozs7QUFDVTs7OztBQUNGOztBQUdiOztBQUVLOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7OztBQUVQLElBQU0sV0FBa0IsOERBQXhCOztJQU1NOzs7Ozs7Ozs7OztpQ0FFRTttQ0FDSyxjQUFEOzs4QkFBQTtnQ0FDSTtBQURKO0FBQUEsK0JBQ0s7OzhCQUFEO2dDQUNBO0FBREE7QUFBQSxnQ0FDQzs7OEJBQUQ7Z0NBRUE7QUFGQTtBQUFBLGdDQUVDO3NCQUVHOzBCQUFVOzJCQUFPLFFBQVEsSUFBSTtBQUM3QjsyQkFBVTs7OEJBSGQ7Z0NBS0E7QUFMQTtBQUNBLGdDQUlDOzs4QkFBRDtnQ0FFQTtBQUZBO0FBQUEsZ0NBRUM7OzhCQUFEO2dDQUNJO0FBREo7QUFBQSwrQkFDSzt1QkFDVSxLQUFLLE1BQU07OzhCQUR0QjtnQ0FNZjtBQU5lO0FBQ0k7Ozs7O0FBUXhCOztrQkFBZSxLOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMxQ2M7Ozs7Ozs7Ozs7Ozs7QUFFN0IsSUFBTSxnQkFBZ0IsaUNBQXRCO0FBUUEsSUFBTSxpQkFBaUIsaUNBQXZCO0FBS0EsSUFBTSxpQkFBaUIsaUNBQXZCO0FBS0EsSUFBTSxpQkFBaUIsMkJBQU8sc0JBTWIsZUFPQSxnQkFTQTs7QUFhakIsU0FBUyxNQUFNLE9BQ2I7eUJBQ0csY0FBRDs7Z0JBQUE7a0JBQ0c7QUFESDtBQUFBLFdBRUUsK0NBQU0sV0FBVTtnQkFBaEI7a0JBQUE7QUFBQTtLQUFBLGFBR0w7QUFFRDs7a0JBQWUsTTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaEVjOzs7Ozs7Ozs7O0FBRTdCLElBQU0sMEJBQTBCLGlDQUFoQzs7QUEwRUEsSUFBTSwyQ0FBdUIsc0JBRVA7V0FBTyxNQUFNLE1BQU07QUFGbkMsQ0FBZ0IsRUFLUDs7QUFHZixJQUFNLHdCQUF3QixnQ0FBTyxlQUtyQzs7UUFBUztRQUFlLDhDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6Rks7Ozs7Ozs7Ozs7O0FBRTdCLElBQU0sWUFBWSxpQ0FBbEI7QUFtQ0EsSUFBTSxnQkFBZ0IsMkJBQU8sc0JBR2Q7O0FBSWYsU0FBUyxLQUFNLE9BQ2I7eUJBQ0ksY0FBRDs7Z0JBQUE7a0JBQ0c7QUFESDtBQUFBLFdBSUo7QUFFRDs7a0JBQWUsSzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcERSOzs7O0FBQ1U7Ozs7QUFDRzs7QUFDYjs7OztBQUMwQjs7Ozs7Ozs7OztBQUVqQyxJQUFNLFlBQW1CLDZEQUF6QjtBQUlBLElBQU0sUUFBUSwyQkFBTyxJQUFyQjs7QUFzQkEsSUFBTSxPQUFjLDZEQUFwQjs7QUFVQSxTQUFTLFNBQVM7UUFDZDs7MkJBQ0ksY0FBRCxhQUFXLElBQUk7c0JBQWY7d0JBQ0c7QUFESDtLQUFBLGtCQUNJLDZDQUFJLElBQUksR0FBRyxVQUFVO3NCQUF0Qjt3QkFDRTtBQURGO3VCQUNHLGNBQUQ7O3NCQUFBO3dCQUFBO0FBQUE7QUFBQSxPQUNBLG1EQUFDLGNBQUQsZ0NBQU0sUUFBTyxzRUFBWTtrQkFBekI7b0JBQUE7QUFBQSxRQUNJLHVDQUFDOztzQkFBRDt3QkFDSTtBQURKO0FBQUEsdUJBQ0kscUJBQUcsTUFBSyx3Q0FBdUMsUUFBTztzQkFBdEQ7d0JBQ0k7QUFESjt1QkFDSyx5Q0FBVztzQkFBWjt3QkFHUjtBQUhROzBCQUdQOztzQkFBRDt3QkFDSTtBQURKO0FBQUEsdUJBQ0kscUJBQUcsTUFBSyw4QkFBNkIsUUFBTztzQkFBNUM7d0JBQ0k7QUFESjt1QkFDSyx5Q0FBVztzQkFBWjt3QkFHUjtBQUhROzBCQUdQOztzQkFBRDt3QkFDSTtBQURKO0FBQUEsdUJBQ0kscUJBQUcsTUFBSyxnQ0FBK0IsUUFBTztzQkFBOUM7d0JBQ0k7QUFESjt1QkFDSyx5Q0FBVztzQkFBWjt3QkFPdkI7QUFQdUI7O0FBU3hCOztrQkFBZSxPOzs7Ozs7Ozs7Ozs7Ozs7QUNyRVIsSUFBTTtlQUVUO2dCQUdKO0FBSkk7O0FBSUcsSUFBTTtlQUVUO2dCQUFZO0FBRFosRSIsImZpbGUiOiJidW5kbGVzL3BhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHN0eWxlZCwgeyBrZXlmcmFtZXMgfSBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcbmltcG9ydCB7IEdyaWQsIFJvdyB9IGZyb20gJ3JlYWN0LXN0eWxlZC1mbGV4Ym94Z3JpZCdcblxuXG5jb25zdCBuaW5qYSA9IGtleWZyYW1lc2BcbiAgMCV7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCAwO1xuICAgIG9wYWNpdHk6MDtcbiAgfVxuICAxMDAle1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IHJpZ2h0O1xuICAgIG9wYWNpdHk6MTtcbiAgfVxuYFxuXG5jb25zdCBDb250ZW50ID0gc3R5bGVkKFJvdylgXG4gIG1hcmdpbi1yaWdodDogYXV0bztcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG9wYWNpdHk6MDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgcGFkZGluZzogMTBweDtcbiAgaGVpZ2h0OiA3MHB4O1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoL3N0YXRpYy9pbWcvbmluamEucG5nKTtcbiAgd2lkdGg6IDEwMHB4ICFpbXBvcnRhbnQ7XG4gIGFuaW1hdGlvbjogJHtuaW5qYX07XG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogLjhzO1xuICBhbmltYXRpb24tZGVsYXk6IDJzO1xuICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBzdGVwcygzKTtcbiAgYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XG5gXG5mdW5jdGlvbiBOaW5qYSgpIHtcbiAgcmV0dXJuKFxuICAgIDxDb250ZW50PlxuICAgIDwvQ29udGVudD5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBOaW5qYVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvTmluamEuanMiLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBUaGVtZVByb3ZpZGVyIH0gZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXG5pbXBvcnQgeyBHcmlkIH0gZnJvbSAncmVhY3Qtc3R5bGVkLWZsZXhib3hncmlkJ1xuaW1wb3J0IHsgQmxhY2tUaGVtZSwgTGlnaHRUaGVtZSB9IGZyb20gJy4uL2xpYi90aGVtZS5qcydcbmltcG9ydCBIZXJvIGZyb20gJy4uL2NvbXBvbmVudHMvSGVyby5qcydcbmltcG9ydCBQZXJmaWwgZnJvbSAnLi4vY29tcG9uZW50cy9QZXJmaWwnXG5pbXBvcnQgTmluamEgZnJvbSAnLi4vY29tcG9uZW50cy9OaW5qYSdcblxuY2xhc3MgSG9tZSBleHRlbmRzIENvbXBvbmVudCB7XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4oXG4gICAgICA8VGhlbWVQcm92aWRlciB0aGVtZT17TGlnaHRUaGVtZX0+XG4gICAgICAgIDxHcmlkPlxuICAgICAgICAgIDxIZXJvXG4gICAgICAgICAgICBuYW1lPVwiXCJcbiAgICAgICAgICAgIGxhYmVsPVwiSEkgSSdNIFdJTExJQU0gUklDQVJETyBBUklaQSwgSSBMT1ZFIFRIRSBTT0ZUV0FSRSBCVUlMVCBXSVRIIFBBU1NJT04gQU5EIFRIRVwiXG4gICAgICAgICAgLz5cbiAgICAgICAgICA8UGVyZmlsLz5cbiAgICAgICAgPC9HcmlkPlxuICAgICAgPC9UaGVtZVByb3ZpZGVyPlxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBIb21lXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFnZXM/ZW50cnkiLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgUmVhY3RTVkcgZnJvbSAncmVhY3Qtc3ZnJ1xuaW1wb3J0IHN0eWxlZCwgeyBrZXlmcmFtZXMgfSBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcbmltcG9ydCB7IEdyaWQsIFJvdyB9IGZyb20gJ3JlYWN0LXN0eWxlZC1mbGV4Ym94Z3JpZCdcbmltcG9ydCB7IFxuICBMaW5lQW5pbWF0aW9uLCBcbiAgTGluZUhvcml6b250YWxSZXZlcnNlIFxufSBmcm9tICcuLi9jb21wb25lbnRzL0xpbmVBbmltYXRpb24uanMnXG5pbXBvcnQgTGFiZWxBbmltYXRpb24gZnJvbSAnLi9MYWJlbEFuaW1hdGlvbidcbmltcG9ydCBOYW1lQW5pbWF0aW9uIGZyb20gJy4vTmFtZUFuaW1hdGlvbi5qcydcbmltcG9ydCBOaW5qYSBmcm9tICcuLi9jb21wb25lbnRzL05pbmphJ1xuXG5jb25zdCBHcmlkSGVybyA9IHN0eWxlZChHcmlkKWBcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiAxMHB4O1xuICBtYXJnaW4tdG9wOiAxNSU7XG5gXG5cbmNsYXNzIEhlcm8gZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuKFxuICAgICAgICAgICAgPEdyaWRIZXJvPlxuICAgICAgICAgICAgICAgIDxOaW5qYS8+XG4gICAgICAgICAgICAgICAgPExpbmVBbmltYXRpb24+XG4gICAgICAgICAgICAgICAgPC9MaW5lQW5pbWF0aW9uPlxuICAgICAgICAgICAgICAgIDxSZWFjdFNWR1xuICAgICAgICAgICAgICAgIHBhdGg9XCIvc3RhdGljL3dpbGFyaXphLnN2Z1wiXG4gICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrPXtzdmcgPT4gY29uc29sZS5sb2coc3ZnKX1cbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwid3Jhcml6YVwiXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8TGluZUhvcml6b250YWxSZXZlcnNlPlxuICAgICAgICAgICAgICAgIDwvTGluZUhvcml6b250YWxSZXZlcnNlPlxuICAgICAgICAgICAgICAgIDxSb3c+XG4gICAgICAgICAgICAgICAgICAgIDxMYWJlbEFuaW1hdGlvbiBcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPXt0aGlzLnByb3BzLmxhYmVsfSBcbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L1Jvdz5cbiAgICAgICAgICAgIDwvR3JpZEhlcm8+XG4gICAgICAgIClcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEhlcm9cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL0hlcm8uanMiLCJpbXBvcnQgc3R5bGVkLCB7IGtleWZyYW1lcyAsIFRoZW1lUHJvdmlkZXJ9IGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xuXG5jb25zdCBBbmltYXRpb25UeXBlID0ga2V5ZnJhbWVzYFxuICBmcm9teyBcbiAgICB3aWR0aDogMDtcbiAgfVxuICB0b3tcbiAgICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xuICB9XG5gXG5jb25zdCBBbmltYXRpb25UeXBlMiA9IGtleWZyYW1lc2BcbiAgICAwJXt3aWR0aDogMDt9XG4gICAgNTAle3dpZHRoOiAwO31cbiAgICAxMDAleyB3aWR0aDogMTAwOyB9IFxuYFxuY29uc3QgQW5pbWF0aW9uQmxpbmsgPSBrZXlmcmFtZXNgXG4gIHtcbiAgICB0b3tvcGFjaXR5OiAuMDt9XG4gIH1cbmBcbmNvbnN0IExhYmVsQW5pbWF0aW9uID0gc3R5bGVkLmRpdmBcbiAgIHsgXG4gICAgd2lkdGg6IDEwMCU7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICB0ZXh0LWFsaW5naHQ6IGNlbnRlcjtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIGFuaW1hdGlvbjogJHtBbmltYXRpb25UeXBlfSA0cyBzdGVwcyg2MCwgZW5kKSBmb3J3YXJkczsgXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTsgXG4gICAgZm9udDogLjdlbSBtZW5sbztcbiAgICBtYXJnaW46IGF1dG87XG4gIH1cblxuICA6bnRoLWNoaWxkKDIpe1xuICAgIGFuaW1hdGlvbjogJHtBbmltYXRpb25UeXBlMn0gOHMgc3RlcHMoNjAsIGVuZCk7XG4gIH1cblxuICBhe1xuICAgIGNvbG9yOiBsaW1lO1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgfVxuXG4gIHNwYW57XG4gICAgYW5pbWF0aW9uOiAke0FuaW1hdGlvbkJsaW5rfSAxcyBpbmZpbml0ZTtcbiAgfVxuXG4gIC5jb3Jhem9ue1xuICAgIGNvbG9yOiByZWQ7XG4gICAgZm9udC1zaXplOiAyZW07XG4gIH1cblxuICA6OnNlbGVjdGlvbntcbiAgICBiYWNrZ3JvdW5kOiBibGFjaztcbiAgfSBcbmBcblxuZnVuY3Rpb24gTGFiZWwocHJvcHMpIHtcbiAgcmV0dXJuKFxuICAgIDxMYWJlbEFuaW1hdGlvbj5cbiAgICAgIHtwcm9wcy5sYWJlbH1cbiAgICAgIDxzcGFuIGNsYXNzTmFtZT0nY29yYXpvbic+IOKZpSA8L3NwYW4+OilcbiAgICA8L0xhYmVsQW5pbWF0aW9uPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IExhYmVsXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9MYWJlbEFuaW1hdGlvbi5qcyIsImltcG9ydCBzdHlsZWQsIHsga2V5ZnJhbWVzICwgVGhlbWVQcm92aWRlcn0gZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXG5cbmNvbnN0IGxpbmVIb3Jpem9udGFsQW5pbWF0aW9uID0ga2V5ZnJhbWVzYFxuICAwJXtcbiAgICBsZWZ0OiAwJTtcbiAgICB3aWR0aDogMjAwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y0NDMzNjsgICBcbiAgfVxuICAlNXtcbiAgICBsZWZ0OiA1JTtcbiAgfVxuICAlMTB7XG4gICAgbGVmdDogMTAlO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNlOTFlNjM7XG4gIH1cbiAgMTUle1xuICAgIGxlZnQ6IDE1JTtcbiAgfVxuICAyMCV7XG4gICAgbGVmdDogMjAlO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM5YzI3YjA7XG4gIH1cbiAgMjUle1xuICAgICBsZWZ0OiAyNSU7XG4gIH1cbiAgMzAle1xuICAgIGxlZnQ6IDMwJTtcbiAgICAgYmFja2dyb3VuZC1jb2xvcjogI2Y0NDMzNjtcbiAgfVxuICAzNSV7XG4gICAgbGVmdDogMzUlO1xuICB9XG4gIDQwJXtcbiAgICBsZWZ0OiA0MCU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzY3M2FiNztcbiAgfVxuICA0NSV7XG4gICAgbGVmdDogNDUlO1xuICB9XG4gIDUwJXtcbiAgICBsZWZ0OiA1MCU7XG4gICAgd2lkdGg6IDIwMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMzZjUxYjU7XG4gIH1cbiAgNTUle1xuICAgIGxlZnQ6IDU1JTtcbiAgfVxuICA2MCV7XG4gICAgbGVmdDogNjAlO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMyMTk2ZjM7XG4gIH1cbiAgNjUle1xuICAgIGxlZnQ6IDY1JTtcbiAgfVxuICA3MCV7XG4gICAgbGVmdDogNzAlO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwM2E5ZjQ7XG4gIH1cbiAgNzUle1xuICAgIGxlZnQ6IDc1JVxuICB9XG4gIDgwJXtcbiAgICBsZWZ0OiA4MCU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y0NDMzNjtcbiAgfVxuICA5MCV7XG4gICAgbGVmdDogOTAlO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNGMkYyRjI7XG4gIH1cbiAgMTAwJXtcbiAgICB3aWR0aDogMjAwcHg7XG4gICAgbGVmdDogOTUlO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNCNkY2RjY7XG4gIH1cbmBcblxuY29uc3QgTGluZUFuaW1hdGlvbiA9IHN0eWxlZC5kaXZgXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogJHtwcm9wcz0+cHJvcHMudGhlbWUuZm9udENvbG9yfTtcbiAgaGVpZ2h0OiAxcHg7XG4gIGFuaW1hdGlvbi1kaXJlY3Rpb246IHJldmVyc2U7XG4gIGFuaW1hdGlvbjogJHtsaW5lSG9yaXpvbnRhbEFuaW1hdGlvbn0gMS41cztcbmBcblxuY29uc3QgTGluZUhvcml6b250YWxSZXZlcnNlID0gc3R5bGVkKExpbmVBbmltYXRpb24pYFxuICAgYW5pbWF0aW9uLWRpcmVjdGlvbjogcmV2ZXJzZTtcbiAgIGxlZnQ6IGNhbGMoMTAwJSAtIDIwcHgpO1xuYFxuXG5leHBvcnQgeyBMaW5lQW5pbWF0aW9uLCBMaW5lSG9yaXpvbnRhbFJldmVyc2UgfVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvTGluZUFuaW1hdGlvbi5qcyIsImltcG9ydCBzdHlsZWQsIHsga2V5ZnJhbWVzICwgVGhlbWVQcm92aWRlcn0gZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXG5cbmNvbnN0IEFuaW1hdGlvbiA9IGtleWZyYW1lc2BcbiAgJTB7XG4gICAgY29sb3I6ICNmNDQzMzY7XG4gIH1cbiAgJTEwe1xuICAgIGNvbG9yOiAjZTkxZTYzO1xuICB9XG4gIDIwJXtcbiAgICBjb2xvcjogIzljMjdiMDtcbiAgfVxuICAzMCV7XG4gICAgIGNvbG9yOiAjZjQ0MzM2O1xuICB9XG4gIDQwJXtcbiAgICBjb2xvcjogIzY3M2FiNztcbiAgfVxuICA1MCV7XG4gICAgY29sb3I6ICMzZjUxYjU7XG4gIH1cbiAgNjAle1xuICAgIGNvbG9yOiAjMjE5NmYzO1xuICB9XG4gIDcwJXtcbiAgICBjb2xvcjogIzAzYTlmNDtcbiAgfVxuICA4MCV7XG4gICAgY29sb3I6ICNmNDQzMzY7XG4gIH1cbiAgOTAle1xuICAgIGNvbG9yOiAjRjJGMkYyO1xuICB9XG4gIDEwMCV7XG4gICAgY29sb3I6ICNCNkY2RjY7XG4gIH1cbmBcbmNvbnN0IE5hbWVBbmltYXRpb24gPSBzdHlsZWQuZGl2YFxuICBmb250LXNpemU6IDJlbTtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgYW5pbWF0aW9uOiAke0FuaW1hdGlvbn0gMnM7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbmBcblxuZnVuY3Rpb24gTmFtZSAocHJvcHMpIHtcbiAgcmV0dXJuKFxuICAgICA8TmFtZUFuaW1hdGlvbj5cbiAgICAgICB7cHJvcHMubmFtZX1cbiAgICAgPC9OYW1lQW5pbWF0aW9uPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IE5hbWVcblxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9OYW1lQW5pbWF0aW9uLmpzIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHN0eWxlZCwgeyBrZXlmcmFtZXMgfSBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcbmltcG9ydCB7IFJvdywgQ29sICwgQkFTRV9DT05GfSBmcm9tICdyZWFjdC1zdHlsZWQtZmxleGJveGdyaWQnXG5pbXBvcnQgSWNvbiBmcm9tICdyZWFjdC1pY29ucy1raXQnXG5pbXBvcnQgeyBsaW5rZWRpblNxdWFyZSwgZ2l0aHViLCBncmFkdWF0aW9uQ2FwIH0gZnJvbSAncmVhY3QtaWNvbnMta2l0L2ZhLydcblxuY29uc3QgQ29udGFpbmVyID0gc3R5bGVkKFJvdylgXG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbmBcbmNvbnN0IEltZ2VuID0gc3R5bGVkLmRpdmBcbiAgICB3aWR0aDogMTYwcHg7XG4gICAgaGVpZ2h0OiAxNjBweDtcbiAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnL3N0YXRpYy9pbWcvcGVyZmlsLmpwZycpO1xuICAgIG1hcmdpbjogYXV0bztcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMHB4IDBweDtcbiAgICBjb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcblxuICAgICY6aG92ZXIge1xuICAgICAgICBvcGFjaXR5OiAwLjU7XG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICB9XG5gXG5cbmNvbnN0IEluZm8gPSBzdHlsZWQoUm93KWBcbiAgICB7XG4gICAgICAgIHBhZGRpbmc6IDE1cHggMHB4IDE1cHggMnB4O1xuICAgICAgICBmb250LXNpemU6IDEwcHg7XG4gICAgICAgIGhlaWdodDogNTBweDtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgfVxuYFxuXG5mdW5jdGlvbiBQZXJmaWwoKSB7XG4gICAgcmV0dXJuKFxuICAgICAgIDxDb250YWluZXIgeHM9ezEyfT5cbiAgICAgICAgICA8Q29sIHhzPXs0fSB4c09mZnNldD17NH0gPlxuICAgICAgICAgICAgPEltZ2VuPldJTExJQU0gUklDQVJETyBBUklaQSBWw4lMRVo8L0ltZ2VuPlxuICAgICAgICAgICAgPEluZm8gY2VudGVyPVwieHNcIiBjZW50ZXI9XCJsZ1wiPlxuICAgICAgICAgICAgICAgIDxDb2w+XG4gICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL3d3dy5saW5rZWRpbi5jb20vaW4vd3Jhcml6YS9cIiB0YXJnZXQ9XCJfYmxhbmtcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uIGljb249e2xpbmtlZGluU3F1YXJlfS8+XG4gICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICA8L0NvbD5cbiAgICAgICAgICAgICAgICA8Q29sPlxuICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL3dyYXJpemFcIiB0YXJnZXQ9XCJfYmxhbmtcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uIGljb249e2dpdGh1Yn0vPlxuICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgICAgICAgPENvbD5cbiAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vcGxhdHppLmNvbS9Ad3Jhcml6YS9cIiB0YXJnZXQ9XCJfYmxhbmtcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uIGljb249e2dyYWR1YXRpb25DYXB9Lz5cbiAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgICAgPC9JbmZvPiBcbiAgICAgICAgICA8L0NvbD5cbiAgICAgICA8L0NvbnRhaW5lcj5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFBlcmZpbFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvUGVyZmlsLmpzIiwiZXhwb3J0IGNvbnN0IEJsYWNrVGhlbWUgPSB7XG4gICAgZm9udENvbG9yOiAnd2hpdGUnLFxuICAgIGJhY2tncm91bmQ6ICdibGFjaydcbn1cblxuZXhwb3J0IGNvbnN0IExpZ2h0VGhlbWUgPSB7XG4gICAgZm9udENvbG9yOiAnYmxhY2snLFxuICAgIGJhY2tncm91bmQ6ICd3aGl0ZSdcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9saWIvdGhlbWUuanMiXSwic291cmNlUm9vdCI6IiJ9
            return { page: comp.default }
          })
        