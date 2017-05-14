
          window.__NEXT_REGISTER_PAGE('/', function() {
            var comp = module.exports =
webpackJsonp([5],{

/***/ 568:
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

var _theme = __webpack_require__(587);

var _Hero = __webpack_require__(582);

var _Hero2 = _interopRequireDefault(_Hero);

var _Perfil = __webpack_require__(586);

var _Perfil2 = _interopRequireDefault(_Perfil);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/wrariza/MEGA/apps/wrariza/pages/index.js?entry';


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
          lineNumber: 11
        }
      }, _react2.default.createElement(_reactStyledFlexboxgrid.Grid, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 12
        }
      }, _react2.default.createElement(_Hero2.default, {
        name: 'WRARIZA',
        label: 'HI I\'M WILLIAM RICARDO ARIZA, I LOVE THE SOFTWARE BUILT WITH PASSION AND THE',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        }
      }), _react2.default.createElement(_Perfil2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        }
      })));
    }
  }]);

  return Home;
}(_react.Component);

exports.default = Home;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/wrariza/MEGA/apps/wrariza/pages/index.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/wrariza/MEGA/apps/wrariza/pages/index.js"); } } })();
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

/***/ 582:
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

var _styledComponents = __webpack_require__(550);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _reactStyledFlexboxgrid = __webpack_require__(565);

var _LineAnimation = __webpack_require__(584);

var _LabelAnimation = __webpack_require__(583);

var _LabelAnimation2 = _interopRequireDefault(_LabelAnimation);

var _NameAnimation = __webpack_require__(585);

var _NameAnimation2 = _interopRequireDefault(_NameAnimation);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/wrariza/MEGA/apps/wrariza/components/Hero.js';

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
                    lineNumber: 20
                }
            }, _react2.default.createElement(_LineAnimation.LineAnimation, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 21
                }
            }), _react2.default.createElement(_NameAnimation2.default, {
                name: this.props.name,
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 23
                }
            }), _react2.default.createElement(_LineAnimation.LineHorizontalReverse, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 26
                }
            }), _react2.default.createElement(_reactStyledFlexboxgrid.Row, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 28
                }
            }, _react2.default.createElement(_LabelAnimation2.default, {
                label: this.props.label,
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 29
                }
            })));
        }
    }]);

    return Hero;
}(_react.Component);

exports.default = Hero;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/wrariza/MEGA/apps/wrariza/components/Hero.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/wrariza/MEGA/apps/wrariza/components/Hero.js"); } } })();

/***/ }),

/***/ 583:
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

var _jsxFileName = '/Users/wrariza/MEGA/apps/wrariza/components/LabelAnimation.js';

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

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/wrariza/MEGA/apps/wrariza/components/LabelAnimation.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/wrariza/MEGA/apps/wrariza/components/LabelAnimation.js"); } } })();

/***/ }),

/***/ 584:
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

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/wrariza/MEGA/apps/wrariza/components/LineAnimation.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/wrariza/MEGA/apps/wrariza/components/LineAnimation.js"); } } })();

/***/ }),

/***/ 585:
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

var _jsxFileName = '/Users/wrariza/MEGA/apps/wrariza/components/NameAnimation.js';

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

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/wrariza/MEGA/apps/wrariza/components/NameAnimation.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/wrariza/MEGA/apps/wrariza/components/NameAnimation.js"); } } })();

/***/ }),

/***/ 586:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _defineProperty2 = __webpack_require__(571);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _taggedTemplateLiteral2 = __webpack_require__(564);

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _react = __webpack_require__(8);

var _react2 = _interopRequireDefault(_react);

var _styledComponents = __webpack_require__(550);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _reactStyledFlexboxgrid = __webpack_require__(565);

var _reactIconsKit = __webpack_require__(592);

var _reactIconsKit2 = _interopRequireDefault(_reactIconsKit);

var _fa = __webpack_require__(590);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/wrariza/MEGA/apps/wrariza/components/Perfil.js';

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n    width: 100%;\n    margin-top: 10px;\n'], ['\n    width: 100%;\n    margin-top: 10px;\n']),
    _templateObject2 = (0, _taggedTemplateLiteral3.default)(['\n    width: 160px;\n    height: 160px;\n    border-radius: 100%;\n    background-image: url(\'https://scontent.feoh3-1.fna.fbcdn.net/v/t1.0-1/p160x160/15940564_10154248750450963_7834584716215511701_n.jpg?oh=0ede346e5d3b6f2bbbeaadad6dbf3b9a&oe=597A1CB4\');\n    margin: auto;\n    background-repeat: no-repeat;\n    background-position: 0px 0px;\n'], ['\n    width: 160px;\n    height: 160px;\n    border-radius: 100%;\n    background-image: url(\'https://scontent.feoh3-1.fna.fbcdn.net/v/t1.0-1/p160x160/15940564_10154248750450963_7834584716215511701_n.jpg?oh=0ede346e5d3b6f2bbbeaadad6dbf3b9a&oe=597A1CB4\');\n    margin: auto;\n    background-repeat: no-repeat;\n    background-position: 0px 0px;\n']),
    _templateObject3 = (0, _taggedTemplateLiteral3.default)(['\n    {\n        padding: 15px 0px 15px 2px;\n        font-size: 10px;\n        height: 50px;\n        display: flex;\n        justify-content: center;\n    }\n'], ['\n    {\n        padding: 15px 0px 15px 2px;\n        font-size: 10px;\n        height: 50px;\n        display: flex;\n        justify-content: center;\n    }\n']);

var Container = (0, _styledComponents2.default)(_reactStyledFlexboxgrid.Row)(_templateObject);
var Imgen = _styledComponents2.default.div(_templateObject2);

var Info = (0, _styledComponents2.default)(_reactStyledFlexboxgrid.Row)(_templateObject3);

function Perfil() {
    var _React$createElement;

    return _react2.default.createElement(Container, { xs: 12, __source: {
            fileName: _jsxFileName,
            lineNumber: 33
        }
    }, _react2.default.createElement(_reactStyledFlexboxgrid.Col, { xs: 4, xsOffset: 4, __source: {
            fileName: _jsxFileName,
            lineNumber: 34
        }
    }, _react2.default.createElement(Imgen, {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 35
        }
    }), _react2.default.createElement(Info, (_React$createElement = { center: 'xs' }, (0, _defineProperty3.default)(_React$createElement, 'center', 'lg'), (0, _defineProperty3.default)(_React$createElement, '__source', {
        fileName: _jsxFileName,
        lineNumber: 36
    }), _React$createElement), _react2.default.createElement(_reactStyledFlexboxgrid.Col, {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 37
        }
    }, _react2.default.createElement('a', { href: 'https://www.linkedin.com/in/wrariza/', target: '_blank', __source: {
            fileName: _jsxFileName,
            lineNumber: 38
        }
    }, _react2.default.createElement(_reactIconsKit2.default, { icon: _fa.linkedinSquare, __source: {
            fileName: _jsxFileName,
            lineNumber: 39
        }
    }))), _react2.default.createElement(_reactStyledFlexboxgrid.Col, {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 42
        }
    }, _react2.default.createElement('a', { href: 'https://github.com/wrariza', target: '_blank', __source: {
            fileName: _jsxFileName,
            lineNumber: 43
        }
    }, _react2.default.createElement(_reactIconsKit2.default, { icon: _fa.github, __source: {
            fileName: _jsxFileName,
            lineNumber: 44
        }
    }))), _react2.default.createElement(_reactStyledFlexboxgrid.Col, {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 47
        }
    }, _react2.default.createElement('a', { href: 'https://platzi.com/@wrariza/', target: '_blank', __source: {
            fileName: _jsxFileName,
            lineNumber: 48
        }
    }, _react2.default.createElement(_reactIconsKit2.default, { icon: _fa.graduationCap, __source: {
            fileName: _jsxFileName,
            lineNumber: 49
        }
    }))))));
}

exports.default = Perfil;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/wrariza/MEGA/apps/wrariza/components/Perfil.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/wrariza/MEGA/apps/wrariza/components/Perfil.js"); } } })();

/***/ }),

/***/ 587:
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

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/wrariza/MEGA/apps/wrariza/lib/theme.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/wrariza/MEGA/apps/wrariza/lib/theme.js"); } } })();

/***/ }),

/***/ 596:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(568);


/***/ })

},[596]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcz83NjI5YTUyIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvSGVyby5qcz83NjI5YTUyIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvTGFiZWxBbmltYXRpb24uanM/NzYyOWE1MiIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0xpbmVBbmltYXRpb24uanM/NzYyOWE1MiIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL05hbWVBbmltYXRpb24uanM/NzYyOWE1MiIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1BlcmZpbC5qcz83NjI5YTUyIiwid2VicGFjazovLy8uL2xpYi90aGVtZS5qcz83NjI5YTUyIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFnQjs7OztBQUNQOztBQUNBOztBQUNZOztBQUNkOzs7O0FBQ0E7Ozs7Ozs7OztJQUVEOzs7Ozs7Ozs7Ozs2QkFFRjs2QkFDRyxpREFBcUI7b0JBQXRCO3NCQUNFO0FBREY7T0FBQSxrQkFDRzs7b0JBQUQ7c0JBQ0U7QUFERjtBQUFBLHlCQUNHO2NBRUM7ZUFBTTs7b0JBRlI7c0JBSUE7QUFKQTtBQUNFLDBCQUdEOztvQkFBRDtzQkFJUDtBQUpPO0FBQUE7Ozs7O0FBT1Y7O2tCQUFlLEs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2QkM7Ozs7QUFDQzs7OztBQUNGOztBQUdiOztBQUVLOzs7O0FBQ0E7Ozs7Ozs7Ozs7QUFFUCxJQUFNLFdBQWtCLDhEQUF4Qjs7SUFNTTs7Ozs7Ozs7Ozs7aUNBRUU7bUNBQ0ssY0FBRDs7OEJBQUE7Z0NBQ0k7QUFESjtBQUFBLCtCQUNLOzs4QkFBRDtnQ0FFSTtBQUZKO0FBQUEsZ0NBRUs7c0JBQ1MsS0FBSyxNQUFNOzs4QkFEckI7Z0NBR0o7QUFISTtBQUNJLGdDQUVQOzs4QkFBRDtnQ0FFQTtBQUZBO0FBQUEsZ0NBRUM7OzhCQUFEO2dDQUNJO0FBREo7QUFBQSwrQkFDSzt1QkFDVSxLQUFLLE1BQU07OzhCQUR0QjtnQ0FNZjtBQU5lO0FBQ0k7Ozs7O0FBUXhCOztrQkFBZSxLOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyQ2M7Ozs7Ozs7Ozs7Ozs7QUFFN0IsSUFBTSxnQkFBZ0IsaUNBQXRCO0FBUUEsSUFBTSxpQkFBaUIsaUNBQXZCO0FBS0EsSUFBTSxpQkFBaUIsaUNBQXZCO0FBS0EsSUFBTSxpQkFBaUIsMkJBQU8sc0JBTWIsZUFPQSxnQkFTQTs7QUFhakIsU0FBUyxNQUFNLE9BQ2I7eUJBQ0csY0FBRDs7Z0JBQUE7a0JBQ0c7QUFESDtBQUFBLFdBRUUsK0NBQU0sV0FBVTtnQkFBaEI7a0JBQUE7QUFBQTtLQUFBLGFBR0w7QUFFRDs7a0JBQWUsTTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaEVjOzs7Ozs7Ozs7O0FBRTdCLElBQU0sMEJBQTBCLGlDQUFoQzs7QUEwRUEsSUFBTSwyQ0FBdUIsc0JBRVA7V0FBTyxNQUFNLE1BQU07QUFGbkMsQ0FBZ0IsRUFLUDs7QUFHZixJQUFNLHdCQUF3QixnQ0FBTyxlQUtyQzs7UUFBUztRQUFlLDhDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6Rks7Ozs7Ozs7Ozs7O0FBRTdCLElBQU0sWUFBWSxpQ0FBbEI7QUFtQ0EsSUFBTSxnQkFBZ0IsMkJBQU8sc0JBR2Q7O0FBSWYsU0FBUyxLQUFNLE9BQ2I7eUJBQ0ksY0FBRDs7Z0JBQUE7a0JBQ0c7QUFESDtBQUFBLFdBSUo7QUFFRDs7a0JBQWUsSzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcERSOzs7O0FBQ1U7Ozs7QUFDRzs7QUFDYjs7OztBQUMwQjs7Ozs7Ozs7OztBQUVqQyxJQUFNLFlBQW1CLDZEQUF6QjtBQUlBLElBQU0sUUFBUSwyQkFBTyxJQUFyQjs7QUFVQSxJQUFNLE9BQWMsNkRBQXBCOztBQVVBLFNBQVMsU0FBUztRQUNkOzsyQkFDSSxjQUFELGFBQVcsSUFBSTtzQkFBZjt3QkFDRztBQURIO0tBQUEsa0JBQ0ksNkNBQUksSUFBSSxHQUFHLFVBQVU7c0JBQXRCO3dCQUNFO0FBREY7cUNBQ0c7O3NCQUFEO3dCQUNBO0FBREE7QUFBQSx3QkFDQyxjQUFELGdDQUFNLFFBQU8sc0VBQVk7a0JBQXpCO29CQUFBO0FBQUEsUUFDSSx1Q0FBQzs7c0JBQUQ7d0JBQ0k7QUFESjtBQUFBLHVCQUNJLHFCQUFHLE1BQUssd0NBQXVDLFFBQU87c0JBQXREO3dCQUNJO0FBREo7dUJBQ0sseUNBQVc7c0JBQVo7d0JBR1I7QUFIUTswQkFHUDs7c0JBQUQ7d0JBQ0k7QUFESjtBQUFBLHVCQUNJLHFCQUFHLE1BQUssOEJBQTZCLFFBQU87c0JBQTVDO3dCQUNJO0FBREo7dUJBQ0sseUNBQVc7c0JBQVo7d0JBR1I7QUFIUTswQkFHUDs7c0JBQUQ7d0JBQ0k7QUFESjtBQUFBLHVCQUNJLHFCQUFHLE1BQUssZ0NBQStCLFFBQU87c0JBQTlDO3dCQUNJO0FBREo7dUJBQ0sseUNBQVc7c0JBQVo7d0JBT3ZCO0FBUHVCOztBQVN4Qjs7a0JBQWUsTzs7Ozs7Ozs7Ozs7Ozs7O0FDekRSLElBQU07ZUFFVDtnQkFHSjtBQUpJOztBQUlHLElBQU07ZUFFVDtnQkFBWTtBQURaLEUiLCJmaWxlIjoiYnVuZGxlcy9wYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IFRoZW1lUHJvdmlkZXIgfSBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQgeyBHcmlkIH0gZnJvbSAncmVhY3Qtc3R5bGVkLWZsZXhib3hncmlkJztcbmltcG9ydCB7IEJsYWNrVGhlbWUsIExpZ2h0VGhlbWUgfSBmcm9tICcuLi9saWIvdGhlbWUuanMnO1xuaW1wb3J0IEhlcm8gZnJvbSAnLi4vY29tcG9uZW50cy9IZXJvLmpzJ1xuaW1wb3J0IFBlcmZpbCBmcm9tICcuLi9jb21wb25lbnRzL1BlcmZpbCdcblxuY2xhc3MgSG9tZSBleHRlbmRzIENvbXBvbmVudCB7XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4oXG4gICAgICA8VGhlbWVQcm92aWRlciB0aGVtZT17TGlnaHRUaGVtZX0+XG4gICAgICAgIDxHcmlkPlxuICAgICAgICAgIDxIZXJvXG4gICAgICAgICAgICBuYW1lPVwiV1JBUklaQVwiXG4gICAgICAgICAgICBsYWJlbD1cIkhJIEknTSBXSUxMSUFNIFJJQ0FSRE8gQVJJWkEsIEkgTE9WRSBUSEUgU09GVFdBUkUgQlVJTFQgV0lUSCBQQVNTSU9OIEFORCBUSEVcIlxuICAgICAgICAgIC8+XG4gICAgICAgICAgPFBlcmZpbC8+XG4gICAgICAgIDwvR3JpZD5cbiAgICAgIDwvVGhlbWVQcm92aWRlcj5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgSG9tZVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BhZ2VzP2VudHJ5IiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9ZnJvbSAncmVhY3QnXG5pbXBvcnQgc3R5bGVkLCB7IGtleWZyYW1lcyB9IGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xuaW1wb3J0IHsgR3JpZCwgUm93IH0gZnJvbSAncmVhY3Qtc3R5bGVkLWZsZXhib3hncmlkJ1xuaW1wb3J0IHsgXG4gIExpbmVBbmltYXRpb24sIFxuICBMaW5lSG9yaXpvbnRhbFJldmVyc2UgXG59IGZyb20gJy4uL2NvbXBvbmVudHMvTGluZUFuaW1hdGlvbi5qcydcbmltcG9ydCBMYWJlbEFuaW1hdGlvbiBmcm9tICcuL0xhYmVsQW5pbWF0aW9uJ1xuaW1wb3J0IE5hbWVBbmltYXRpb24gZnJvbSAnLi9OYW1lQW5pbWF0aW9uLmpzJ1xuXG5jb25zdCBHcmlkSGVybyA9IHN0eWxlZChHcmlkKWBcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiAxMHB4O1xuICBtYXJnaW4tdG9wOiAxNSU7XG5gXG5cbmNsYXNzIEhlcm8gZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuKFxuICAgICAgICAgICAgPEdyaWRIZXJvPlxuICAgICAgICAgICAgICAgIDxMaW5lQW5pbWF0aW9uPlxuICAgICAgICAgICAgICAgIDwvTGluZUFuaW1hdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgPE5hbWVBbmltYXRpb25cbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9e3RoaXMucHJvcHMubmFtZX1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8TGluZUhvcml6b250YWxSZXZlcnNlPlxuICAgICAgICAgICAgICAgIDwvTGluZUhvcml6b250YWxSZXZlcnNlPlxuICAgICAgICAgICAgICAgIDxSb3c+XG4gICAgICAgICAgICAgICAgICAgIDxMYWJlbEFuaW1hdGlvbiBcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPXt0aGlzLnByb3BzLmxhYmVsfSBcbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L1Jvdz5cbiAgICAgICAgICAgIDwvR3JpZEhlcm8+XG4gICAgICAgIClcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEhlcm9cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL0hlcm8uanMiLCJpbXBvcnQgc3R5bGVkLCB7IGtleWZyYW1lcyAsIFRoZW1lUHJvdmlkZXJ9IGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xuXG5jb25zdCBBbmltYXRpb25UeXBlID0ga2V5ZnJhbWVzYFxuICBmcm9teyBcbiAgICB3aWR0aDogMDtcbiAgfVxuICB0b3tcbiAgICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xuICB9XG5gXG5jb25zdCBBbmltYXRpb25UeXBlMiA9IGtleWZyYW1lc2BcbiAgICAwJXt3aWR0aDogMDt9XG4gICAgNTAle3dpZHRoOiAwO31cbiAgICAxMDAleyB3aWR0aDogMTAwOyB9IFxuYFxuY29uc3QgQW5pbWF0aW9uQmxpbmsgPSBrZXlmcmFtZXNgXG4gIHtcbiAgICB0b3tvcGFjaXR5OiAuMDt9XG4gIH1cbmBcbmNvbnN0IExhYmVsQW5pbWF0aW9uID0gc3R5bGVkLmRpdmBcbiAgIHsgXG4gICAgd2lkdGg6IDEwMCU7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICB0ZXh0LWFsaW5naHQ6IGNlbnRlcjtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIGFuaW1hdGlvbjogJHtBbmltYXRpb25UeXBlfSA0cyBzdGVwcyg2MCwgZW5kKSBmb3J3YXJkczsgXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTsgXG4gICAgZm9udDogLjdlbSBtZW5sbztcbiAgICBtYXJnaW46IGF1dG87XG4gIH1cblxuICA6bnRoLWNoaWxkKDIpe1xuICAgIGFuaW1hdGlvbjogJHtBbmltYXRpb25UeXBlMn0gOHMgc3RlcHMoNjAsIGVuZCk7XG4gIH1cblxuICBhe1xuICAgIGNvbG9yOiBsaW1lO1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgfVxuXG4gIHNwYW57XG4gICAgYW5pbWF0aW9uOiAke0FuaW1hdGlvbkJsaW5rfSAxcyBpbmZpbml0ZTtcbiAgfVxuXG4gIC5jb3Jhem9ue1xuICAgIGNvbG9yOiByZWQ7XG4gICAgZm9udC1zaXplOiAyZW07XG4gIH1cblxuICA6OnNlbGVjdGlvbntcbiAgICBiYWNrZ3JvdW5kOiBibGFjaztcbiAgfSBcbmBcblxuZnVuY3Rpb24gTGFiZWwocHJvcHMpIHtcbiAgcmV0dXJuKFxuICAgIDxMYWJlbEFuaW1hdGlvbj5cbiAgICAgIHtwcm9wcy5sYWJlbH1cbiAgICAgIDxzcGFuIGNsYXNzTmFtZT0nY29yYXpvbic+IOKZpSA8L3NwYW4+OilcbiAgICA8L0xhYmVsQW5pbWF0aW9uPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IExhYmVsXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9MYWJlbEFuaW1hdGlvbi5qcyIsImltcG9ydCBzdHlsZWQsIHsga2V5ZnJhbWVzICwgVGhlbWVQcm92aWRlcn0gZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXG5cbmNvbnN0IGxpbmVIb3Jpem9udGFsQW5pbWF0aW9uID0ga2V5ZnJhbWVzYFxuICAwJXtcbiAgICBsZWZ0OiAwJTtcbiAgICB3aWR0aDogMjAwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y0NDMzNjsgICBcbiAgfVxuICAlNXtcbiAgICBsZWZ0OiA1JTtcbiAgfVxuICAlMTB7XG4gICAgbGVmdDogMTAlO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNlOTFlNjM7XG4gIH1cbiAgMTUle1xuICAgIGxlZnQ6IDE1JTtcbiAgfVxuICAyMCV7XG4gICAgbGVmdDogMjAlO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM5YzI3YjA7XG4gIH1cbiAgMjUle1xuICAgICBsZWZ0OiAyNSU7XG4gIH1cbiAgMzAle1xuICAgIGxlZnQ6IDMwJTtcbiAgICAgYmFja2dyb3VuZC1jb2xvcjogI2Y0NDMzNjtcbiAgfVxuICAzNSV7XG4gICAgbGVmdDogMzUlO1xuICB9XG4gIDQwJXtcbiAgICBsZWZ0OiA0MCU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzY3M2FiNztcbiAgfVxuICA0NSV7XG4gICAgbGVmdDogNDUlO1xuICB9XG4gIDUwJXtcbiAgICBsZWZ0OiA1MCU7XG4gICAgd2lkdGg6IDIwMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMzZjUxYjU7XG4gIH1cbiAgNTUle1xuICAgIGxlZnQ6IDU1JTtcbiAgfVxuICA2MCV7XG4gICAgbGVmdDogNjAlO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMyMTk2ZjM7XG4gIH1cbiAgNjUle1xuICAgIGxlZnQ6IDY1JTtcbiAgfVxuICA3MCV7XG4gICAgbGVmdDogNzAlO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwM2E5ZjQ7XG4gIH1cbiAgNzUle1xuICAgIGxlZnQ6IDc1JVxuICB9XG4gIDgwJXtcbiAgICBsZWZ0OiA4MCU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y0NDMzNjtcbiAgfVxuICA5MCV7XG4gICAgbGVmdDogOTAlO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNGMkYyRjI7XG4gIH1cbiAgMTAwJXtcbiAgICB3aWR0aDogMjAwcHg7XG4gICAgbGVmdDogOTUlO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNCNkY2RjY7XG4gIH1cbmBcblxuY29uc3QgTGluZUFuaW1hdGlvbiA9IHN0eWxlZC5kaXZgXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogJHtwcm9wcz0+cHJvcHMudGhlbWUuZm9udENvbG9yfTtcbiAgaGVpZ2h0OiAxcHg7XG4gIGFuaW1hdGlvbi1kaXJlY3Rpb246IHJldmVyc2U7XG4gIGFuaW1hdGlvbjogJHtsaW5lSG9yaXpvbnRhbEFuaW1hdGlvbn0gMS41cztcbmBcblxuY29uc3QgTGluZUhvcml6b250YWxSZXZlcnNlID0gc3R5bGVkKExpbmVBbmltYXRpb24pYFxuICAgYW5pbWF0aW9uLWRpcmVjdGlvbjogcmV2ZXJzZTtcbiAgIGxlZnQ6IGNhbGMoMTAwJSAtIDIwcHgpO1xuYFxuXG5leHBvcnQgeyBMaW5lQW5pbWF0aW9uLCBMaW5lSG9yaXpvbnRhbFJldmVyc2UgfVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvTGluZUFuaW1hdGlvbi5qcyIsImltcG9ydCBzdHlsZWQsIHsga2V5ZnJhbWVzICwgVGhlbWVQcm92aWRlcn0gZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXG5cbmNvbnN0IEFuaW1hdGlvbiA9IGtleWZyYW1lc2BcbiAgJTB7XG4gICAgY29sb3I6ICNmNDQzMzY7XG4gIH1cbiAgJTEwe1xuICAgIGNvbG9yOiAjZTkxZTYzO1xuICB9XG4gIDIwJXtcbiAgICBjb2xvcjogIzljMjdiMDtcbiAgfVxuICAzMCV7XG4gICAgIGNvbG9yOiAjZjQ0MzM2O1xuICB9XG4gIDQwJXtcbiAgICBjb2xvcjogIzY3M2FiNztcbiAgfVxuICA1MCV7XG4gICAgY29sb3I6ICMzZjUxYjU7XG4gIH1cbiAgNjAle1xuICAgIGNvbG9yOiAjMjE5NmYzO1xuICB9XG4gIDcwJXtcbiAgICBjb2xvcjogIzAzYTlmNDtcbiAgfVxuICA4MCV7XG4gICAgY29sb3I6ICNmNDQzMzY7XG4gIH1cbiAgOTAle1xuICAgIGNvbG9yOiAjRjJGMkYyO1xuICB9XG4gIDEwMCV7XG4gICAgY29sb3I6ICNCNkY2RjY7XG4gIH1cbmBcbmNvbnN0IE5hbWVBbmltYXRpb24gPSBzdHlsZWQuZGl2YFxuICBmb250LXNpemU6IDJlbTtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgYW5pbWF0aW9uOiAke0FuaW1hdGlvbn0gMnM7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbmBcblxuZnVuY3Rpb24gTmFtZSAocHJvcHMpIHtcbiAgcmV0dXJuKFxuICAgICA8TmFtZUFuaW1hdGlvbj5cbiAgICAgICB7cHJvcHMubmFtZX1cbiAgICAgPC9OYW1lQW5pbWF0aW9uPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IE5hbWVcblxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9OYW1lQW5pbWF0aW9uLmpzIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHN0eWxlZCwgeyBrZXlmcmFtZXMgfSBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcbmltcG9ydCB7IFJvdywgQ29sICwgQkFTRV9DT05GfSBmcm9tICdyZWFjdC1zdHlsZWQtZmxleGJveGdyaWQnXG5pbXBvcnQgSWNvbiBmcm9tICdyZWFjdC1pY29ucy1raXQnXG5pbXBvcnQgeyBsaW5rZWRpblNxdWFyZSwgZ2l0aHViLCBncmFkdWF0aW9uQ2FwIH0gZnJvbSAncmVhY3QtaWNvbnMta2l0L2ZhLydcblxuY29uc3QgQ29udGFpbmVyID0gc3R5bGVkKFJvdylgXG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbmBcbmNvbnN0IEltZ2VuID0gc3R5bGVkLmRpdmBcbiAgICB3aWR0aDogMTYwcHg7XG4gICAgaGVpZ2h0OiAxNjBweDtcbiAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnaHR0cHM6Ly9zY29udGVudC5mZW9oMy0xLmZuYS5mYmNkbi5uZXQvdi90MS4wLTEvcDE2MHgxNjAvMTU5NDA1NjRfMTAxNTQyNDg3NTA0NTA5NjNfNzgzNDU4NDcxNjIxNTUxMTcwMV9uLmpwZz9vaD0wZWRlMzQ2ZTVkM2I2ZjJiYmJlYWFkYWQ2ZGJmM2I5YSZvZT01OTdBMUNCNCcpO1xuICAgIG1hcmdpbjogYXV0bztcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDBweCAwcHg7XG5gXG5cbmNvbnN0IEluZm8gPSBzdHlsZWQoUm93KWBcbiAgICB7XG4gICAgICAgIHBhZGRpbmc6IDE1cHggMHB4IDE1cHggMnB4O1xuICAgICAgICBmb250LXNpemU6IDEwcHg7XG4gICAgICAgIGhlaWdodDogNTBweDtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgfVxuYFxuXG5mdW5jdGlvbiBQZXJmaWwoKSB7XG4gICAgcmV0dXJuKFxuICAgICAgIDxDb250YWluZXIgeHM9ezEyfT5cbiAgICAgICAgICA8Q29sIHhzPXs0fSB4c09mZnNldD17NH0gPlxuICAgICAgICAgICAgPEltZ2VuPjwvSW1nZW4+XG4gICAgICAgICAgICA8SW5mbyBjZW50ZXI9XCJ4c1wiIGNlbnRlcj1cImxnXCI+XG4gICAgICAgICAgICAgICAgPENvbD5cbiAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vd3d3LmxpbmtlZGluLmNvbS9pbi93cmFyaXphL1wiIHRhcmdldD1cIl9ibGFua1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPEljb24gaWNvbj17bGlua2VkaW5TcXVhcmV9Lz5cbiAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgICAgICAgIDxDb2w+XG4gICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vd3Jhcml6YVwiIHRhcmdldD1cIl9ibGFua1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPEljb24gaWNvbj17Z2l0aHVifS8+XG4gICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICA8L0NvbD5cbiAgICAgICAgICAgICAgICA8Q29sPlxuICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly9wbGF0emkuY29tL0B3cmFyaXphL1wiIHRhcmdldD1cIl9ibGFua1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPEljb24gaWNvbj17Z3JhZHVhdGlvbkNhcH0vPlxuICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgICA8L0luZm8+IFxuICAgICAgICAgIDwvQ29sPlxuICAgICAgIDwvQ29udGFpbmVyPlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgUGVyZmlsXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9QZXJmaWwuanMiLCJleHBvcnQgY29uc3QgQmxhY2tUaGVtZSA9IHtcbiAgICBmb250Q29sb3I6ICd3aGl0ZScsXG4gICAgYmFja2dyb3VuZDogJ2JsYWNrJ1xufVxuXG5leHBvcnQgY29uc3QgTGlnaHRUaGVtZSA9IHtcbiAgICBmb250Q29sb3I6ICdibGFjaycsXG4gICAgYmFja2dyb3VuZDogJ3doaXRlJ1xufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2xpYi90aGVtZS5qcyJdLCJzb3VyY2VSb290IjoiIn0=
            return { page: comp.default }
          })
        