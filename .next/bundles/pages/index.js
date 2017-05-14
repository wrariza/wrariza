
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
    _templateObject2 = (0, _taggedTemplateLiteral3.default)(['\n    width: 160px;\n    height: 160px;\n    border-radius: 100%;\n    background-image: url(\'https://scontent.feoh3-1.fna.fbcdn.net/v/t1.0-1/p160x160/15940564_10154248750450963_7834584716215511701_n.jpg?oh=0ede346e5d3b6f2bbbeaadad6dbf3b9a&oe=597A1CB4\');\n    margin: auto;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    text-align: center;\n    background-repeat: no-repeat;\n    background-position: 0px 0px;\n    color: transparent;\n    margin: auto;\n\n    &:hover {\n        opacity: 0.5;\n        color: white;\n    }\n'], ['\n    width: 160px;\n    height: 160px;\n    border-radius: 100%;\n    background-image: url(\'https://scontent.feoh3-1.fna.fbcdn.net/v/t1.0-1/p160x160/15940564_10154248750450963_7834584716215511701_n.jpg?oh=0ede346e5d3b6f2bbbeaadad6dbf3b9a&oe=597A1CB4\');\n    margin: auto;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    text-align: center;\n    background-repeat: no-repeat;\n    background-position: 0px 0px;\n    color: transparent;\n    margin: auto;\n\n    &:hover {\n        opacity: 0.5;\n        color: white;\n    }\n']),
    _templateObject3 = (0, _taggedTemplateLiteral3.default)(['\n    {\n        padding: 15px 0px 15px 2px;\n        font-size: 10px;\n        height: 50px;\n        display: flex;\n        justify-content: center;\n    }\n'], ['\n    {\n        padding: 15px 0px 15px 2px;\n        font-size: 10px;\n        height: 50px;\n        display: flex;\n        justify-content: center;\n    }\n']);

var Container = (0, _styledComponents2.default)(_reactStyledFlexboxgrid.Row)(_templateObject);
var Imgen = _styledComponents2.default.div(_templateObject2);

var Info = (0, _styledComponents2.default)(_reactStyledFlexboxgrid.Row)(_templateObject3);

function Perfil() {
    var _React$createElement;

    return _react2.default.createElement(Container, { xs: 12, __source: {
            fileName: _jsxFileName,
            lineNumber: 44
        }
    }, _react2.default.createElement(_reactStyledFlexboxgrid.Col, { xs: 4, xsOffset: 4, __source: {
            fileName: _jsxFileName,
            lineNumber: 45
        }
    }, _react2.default.createElement(Imgen, {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 46
        }
    }, 'WILLIAM RICARDO ARIZA V\xC9LEZ'), _react2.default.createElement(Info, (_React$createElement = { center: 'xs' }, (0, _defineProperty3.default)(_React$createElement, 'center', 'lg'), (0, _defineProperty3.default)(_React$createElement, '__source', {
        fileName: _jsxFileName,
        lineNumber: 47
    }), _React$createElement), _react2.default.createElement(_reactStyledFlexboxgrid.Col, {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 48
        }
    }, _react2.default.createElement('a', { href: 'https://www.linkedin.com/in/wrariza/', target: '_blank', __source: {
            fileName: _jsxFileName,
            lineNumber: 49
        }
    }, _react2.default.createElement(_reactIconsKit2.default, { icon: _fa.linkedinSquare, __source: {
            fileName: _jsxFileName,
            lineNumber: 50
        }
    }))), _react2.default.createElement(_reactStyledFlexboxgrid.Col, {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 53
        }
    }, _react2.default.createElement('a', { href: 'https://github.com/wrariza', target: '_blank', __source: {
            fileName: _jsxFileName,
            lineNumber: 54
        }
    }, _react2.default.createElement(_reactIconsKit2.default, { icon: _fa.github, __source: {
            fileName: _jsxFileName,
            lineNumber: 55
        }
    }))), _react2.default.createElement(_reactStyledFlexboxgrid.Col, {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 58
        }
    }, _react2.default.createElement('a', { href: 'https://platzi.com/@wrariza/', target: '_blank', __source: {
            fileName: _jsxFileName,
            lineNumber: 59
        }
    }, _react2.default.createElement(_reactIconsKit2.default, { icon: _fa.graduationCap, __source: {
            fileName: _jsxFileName,
            lineNumber: 60
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcz9lNTc1NDA4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvSGVyby5qcz9lNTc1NDA4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvTGFiZWxBbmltYXRpb24uanM/ZTU3NTQwOCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0xpbmVBbmltYXRpb24uanM/ZTU3NTQwOCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL05hbWVBbmltYXRpb24uanM/NjAyM2NiNSIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1BlcmZpbC5qcz82ZjE5ZGJmIiwid2VicGFjazovLy8uL2xpYi90aGVtZS5qcz8zMTg3YTNkIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFnQjs7OztBQUNQOztBQUNBOztBQUNZOztBQUNkOzs7O0FBQ0E7Ozs7Ozs7OztJQUVEOzs7Ozs7Ozs7Ozs2QkFFRjs2QkFDRyxpREFBcUI7b0JBQXRCO3NCQUNFO0FBREY7T0FBQSxrQkFDRzs7b0JBQUQ7c0JBQ0U7QUFERjtBQUFBLHlCQUNHO2NBRUM7ZUFBTTs7b0JBRlI7c0JBSUE7QUFKQTtBQUNFLDBCQUdEOztvQkFBRDtzQkFJUDtBQUpPO0FBQUE7Ozs7O0FBT1Y7O2tCQUFlLEs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2QkM7Ozs7QUFDQzs7OztBQUNGOztBQUdiOztBQUVLOzs7O0FBQ0E7Ozs7Ozs7Ozs7QUFFUCxJQUFNLFdBQWtCLDhEQUF4Qjs7SUFNTTs7Ozs7Ozs7Ozs7aUNBRUU7bUNBQ0ssY0FBRDs7OEJBQUE7Z0NBQ0k7QUFESjtBQUFBLCtCQUNLOzs4QkFBRDtnQ0FFSTtBQUZKO0FBQUEsZ0NBRUs7c0JBQ1MsS0FBSyxNQUFNOzs4QkFEckI7Z0NBR0o7QUFISTtBQUNJLGdDQUVQOzs4QkFBRDtnQ0FFQTtBQUZBO0FBQUEsZ0NBRUM7OzhCQUFEO2dDQUNJO0FBREo7QUFBQSwrQkFDSzt1QkFDVSxLQUFLLE1BQU07OzhCQUR0QjtnQ0FNZjtBQU5lO0FBQ0k7Ozs7O0FBUXhCOztrQkFBZSxLOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyQ2M7Ozs7Ozs7Ozs7Ozs7QUFFN0IsSUFBTSxnQkFBZ0IsaUNBQXRCO0FBUUEsSUFBTSxpQkFBaUIsaUNBQXZCO0FBS0EsSUFBTSxpQkFBaUIsaUNBQXZCO0FBS0EsSUFBTSxpQkFBaUIsMkJBQU8sc0JBTWIsZUFPQSxnQkFTQTs7QUFhakIsU0FBUyxNQUFNLE9BQ2I7eUJBQ0csY0FBRDs7Z0JBQUE7a0JBQ0c7QUFESDtBQUFBLFdBRUUsK0NBQU0sV0FBVTtnQkFBaEI7a0JBQUE7QUFBQTtLQUFBLGFBR0w7QUFFRDs7a0JBQWUsTTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaEVjOzs7Ozs7Ozs7O0FBRTdCLElBQU0sMEJBQTBCLGlDQUFoQzs7QUEwRUEsSUFBTSwyQ0FBdUIsc0JBRVA7V0FBTyxNQUFNLE1BQU07QUFGbkMsQ0FBZ0IsRUFLUDs7QUFHZixJQUFNLHdCQUF3QixnQ0FBTyxlQUtyQzs7UUFBUztRQUFlLDhDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6Rks7Ozs7Ozs7Ozs7O0FBRTdCLElBQU0sWUFBWSxpQ0FBbEI7QUFtQ0EsSUFBTSxnQkFBZ0IsMkJBQU8sc0JBR2Q7O0FBSWYsU0FBUyxLQUFNLE9BQ2I7eUJBQ0ksY0FBRDs7Z0JBQUE7a0JBQ0c7QUFESDtBQUFBLFdBSUo7QUFFRDs7a0JBQWUsSzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcERSOzs7O0FBQ1U7Ozs7QUFDRzs7QUFDYjs7OztBQUMwQjs7Ozs7Ozs7OztBQUVqQyxJQUFNLFlBQW1CLDZEQUF6QjtBQUlBLElBQU0sUUFBUSwyQkFBTyxJQUFyQjs7QUFxQkEsSUFBTSxPQUFjLDZEQUFwQjs7QUFVQSxTQUFTLFNBQVM7UUFDZDs7MkJBQ0ksY0FBRCxhQUFXLElBQUk7c0JBQWY7d0JBQ0c7QUFESDtLQUFBLGtCQUNJLDZDQUFJLElBQUksR0FBRyxVQUFVO3NCQUF0Qjt3QkFDRTtBQURGO3VCQUNHLGNBQUQ7O3NCQUFBO3dCQUFBO0FBQUE7QUFBQSxPQUNBLG1EQUFDLGNBQUQsZ0NBQU0sUUFBTyxzRUFBWTtrQkFBekI7b0JBQUE7QUFBQSxRQUNJLHVDQUFDOztzQkFBRDt3QkFDSTtBQURKO0FBQUEsdUJBQ0kscUJBQUcsTUFBSyx3Q0FBdUMsUUFBTztzQkFBdEQ7d0JBQ0k7QUFESjt1QkFDSyx5Q0FBVztzQkFBWjt3QkFHUjtBQUhROzBCQUdQOztzQkFBRDt3QkFDSTtBQURKO0FBQUEsdUJBQ0kscUJBQUcsTUFBSyw4QkFBNkIsUUFBTztzQkFBNUM7d0JBQ0k7QUFESjt1QkFDSyx5Q0FBVztzQkFBWjt3QkFHUjtBQUhROzBCQUdQOztzQkFBRDt3QkFDSTtBQURKO0FBQUEsdUJBQ0kscUJBQUcsTUFBSyxnQ0FBK0IsUUFBTztzQkFBOUM7d0JBQ0k7QUFESjt1QkFDSyx5Q0FBVztzQkFBWjt3QkFPdkI7QUFQdUI7O0FBU3hCOztrQkFBZSxPOzs7Ozs7Ozs7Ozs7Ozs7QUNwRVIsSUFBTTtlQUVUO2dCQUdKO0FBSkk7O0FBSUcsSUFBTTtlQUVUO2dCQUFZO0FBRFosRSIsImZpbGUiOiJidW5kbGVzL3BhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgVGhlbWVQcm92aWRlciB9IGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCB7IEdyaWQgfSBmcm9tICdyZWFjdC1zdHlsZWQtZmxleGJveGdyaWQnO1xuaW1wb3J0IHsgQmxhY2tUaGVtZSwgTGlnaHRUaGVtZSB9IGZyb20gJy4uL2xpYi90aGVtZS5qcyc7XG5pbXBvcnQgSGVybyBmcm9tICcuLi9jb21wb25lbnRzL0hlcm8uanMnXG5pbXBvcnQgUGVyZmlsIGZyb20gJy4uL2NvbXBvbmVudHMvUGVyZmlsJ1xuXG5jbGFzcyBIb21lIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgcmVuZGVyKCkge1xuICAgIHJldHVybihcbiAgICAgIDxUaGVtZVByb3ZpZGVyIHRoZW1lPXtMaWdodFRoZW1lfT5cbiAgICAgICAgPEdyaWQ+XG4gICAgICAgICAgPEhlcm9cbiAgICAgICAgICAgIG5hbWU9XCJXUkFSSVpBXCJcbiAgICAgICAgICAgIGxhYmVsPVwiSEkgSSdNIFdJTExJQU0gUklDQVJETyBBUklaQSwgSSBMT1ZFIFRIRSBTT0ZUV0FSRSBCVUlMVCBXSVRIIFBBU1NJT04gQU5EIFRIRVwiXG4gICAgICAgICAgLz5cbiAgICAgICAgICA8UGVyZmlsLz5cbiAgICAgICAgPC9HcmlkPlxuICAgICAgPC9UaGVtZVByb3ZpZGVyPlxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBIb21lXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFnZXM/ZW50cnkiLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH1mcm9tICdyZWFjdCdcbmltcG9ydCBzdHlsZWQsIHsga2V5ZnJhbWVzIH0gZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXG5pbXBvcnQgeyBHcmlkLCBSb3cgfSBmcm9tICdyZWFjdC1zdHlsZWQtZmxleGJveGdyaWQnXG5pbXBvcnQgeyBcbiAgTGluZUFuaW1hdGlvbiwgXG4gIExpbmVIb3Jpem9udGFsUmV2ZXJzZSBcbn0gZnJvbSAnLi4vY29tcG9uZW50cy9MaW5lQW5pbWF0aW9uLmpzJ1xuaW1wb3J0IExhYmVsQW5pbWF0aW9uIGZyb20gJy4vTGFiZWxBbmltYXRpb24nXG5pbXBvcnQgTmFtZUFuaW1hdGlvbiBmcm9tICcuL05hbWVBbmltYXRpb24uanMnXG5cbmNvbnN0IEdyaWRIZXJvID0gc3R5bGVkKEdyaWQpYFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIG1hcmdpbi10b3A6IDE1JTtcbmBcblxuY2xhc3MgSGVybyBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4oXG4gICAgICAgICAgICA8R3JpZEhlcm8+XG4gICAgICAgICAgICAgICAgPExpbmVBbmltYXRpb24+XG4gICAgICAgICAgICAgICAgPC9MaW5lQW5pbWF0aW9uPlxuICAgICAgICAgICAgICAgICAgICA8TmFtZUFuaW1hdGlvblxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT17dGhpcy5wcm9wcy5uYW1lfVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxMaW5lSG9yaXpvbnRhbFJldmVyc2U+XG4gICAgICAgICAgICAgICAgPC9MaW5lSG9yaXpvbnRhbFJldmVyc2U+XG4gICAgICAgICAgICAgICAgPFJvdz5cbiAgICAgICAgICAgICAgICAgICAgPExhYmVsQW5pbWF0aW9uIFxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9e3RoaXMucHJvcHMubGFiZWx9IFxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvUm93PlxuICAgICAgICAgICAgPC9HcmlkSGVybz5cbiAgICAgICAgKVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgSGVyb1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvSGVyby5qcyIsImltcG9ydCBzdHlsZWQsIHsga2V5ZnJhbWVzICwgVGhlbWVQcm92aWRlcn0gZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXG5cbmNvbnN0IEFuaW1hdGlvblR5cGUgPSBrZXlmcmFtZXNgXG4gIGZyb217IFxuICAgIHdpZHRoOiAwO1xuICB9XG4gIHRve1xuICAgIHdoaXRlLXNwYWNlOiBub3JtYWw7XG4gIH1cbmBcbmNvbnN0IEFuaW1hdGlvblR5cGUyID0ga2V5ZnJhbWVzYFxuICAgIDAle3dpZHRoOiAwO31cbiAgICA1MCV7d2lkdGg6IDA7fVxuICAgIDEwMCV7IHdpZHRoOiAxMDA7IH0gXG5gXG5jb25zdCBBbmltYXRpb25CbGluayA9IGtleWZyYW1lc2BcbiAge1xuICAgIHRve29wYWNpdHk6IC4wO31cbiAgfVxuYFxuY29uc3QgTGFiZWxBbmltYXRpb24gPSBzdHlsZWQuZGl2YFxuICAgeyBcbiAgICB3aWR0aDogMTAwJTtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgIHRleHQtYWxpbmdodDogY2VudGVyO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgYW5pbWF0aW9uOiAke0FuaW1hdGlvblR5cGV9IDRzIHN0ZXBzKDYwLCBlbmQpIGZvcndhcmRzOyBcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlOyBcbiAgICBmb250OiAuN2VtIG1lbmxvO1xuICAgIG1hcmdpbjogYXV0bztcbiAgfVxuXG4gIDpudGgtY2hpbGQoMil7XG4gICAgYW5pbWF0aW9uOiAke0FuaW1hdGlvblR5cGUyfSA4cyBzdGVwcyg2MCwgZW5kKTtcbiAgfVxuXG4gIGF7XG4gICAgY29sb3I6IGxpbWU7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICB9XG5cbiAgc3BhbntcbiAgICBhbmltYXRpb246ICR7QW5pbWF0aW9uQmxpbmt9IDFzIGluZmluaXRlO1xuICB9XG5cbiAgLmNvcmF6b257XG4gICAgY29sb3I6IHJlZDtcbiAgICBmb250LXNpemU6IDJlbTtcbiAgfVxuXG4gIDo6c2VsZWN0aW9ue1xuICAgIGJhY2tncm91bmQ6IGJsYWNrO1xuICB9IFxuYFxuXG5mdW5jdGlvbiBMYWJlbChwcm9wcykge1xuICByZXR1cm4oXG4gICAgPExhYmVsQW5pbWF0aW9uPlxuICAgICAge3Byb3BzLmxhYmVsfVxuICAgICAgPHNwYW4gY2xhc3NOYW1lPSdjb3Jhem9uJz4g4pmlIDwvc3Bhbj46KVxuICAgIDwvTGFiZWxBbmltYXRpb24+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgTGFiZWxcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL0xhYmVsQW5pbWF0aW9uLmpzIiwiaW1wb3J0IHN0eWxlZCwgeyBrZXlmcmFtZXMgLCBUaGVtZVByb3ZpZGVyfSBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcblxuY29uc3QgbGluZUhvcml6b250YWxBbmltYXRpb24gPSBrZXlmcmFtZXNgXG4gIDAle1xuICAgIGxlZnQ6IDAlO1xuICAgIHdpZHRoOiAyMDBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjQ0MzM2OyAgIFxuICB9XG4gICU1e1xuICAgIGxlZnQ6IDUlO1xuICB9XG4gICUxMHtcbiAgICBsZWZ0OiAxMCU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2U5MWU2MztcbiAgfVxuICAxNSV7XG4gICAgbGVmdDogMTUlO1xuICB9XG4gIDIwJXtcbiAgICBsZWZ0OiAyMCU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzljMjdiMDtcbiAgfVxuICAyNSV7XG4gICAgIGxlZnQ6IDI1JTtcbiAgfVxuICAzMCV7XG4gICAgbGVmdDogMzAlO1xuICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjQ0MzM2O1xuICB9XG4gIDM1JXtcbiAgICBsZWZ0OiAzNSU7XG4gIH1cbiAgNDAle1xuICAgIGxlZnQ6IDQwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjczYWI3O1xuICB9XG4gIDQ1JXtcbiAgICBsZWZ0OiA0NSU7XG4gIH1cbiAgNTAle1xuICAgIGxlZnQ6IDUwJTtcbiAgICB3aWR0aDogMjAwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzNmNTFiNTtcbiAgfVxuICA1NSV7XG4gICAgbGVmdDogNTUlO1xuICB9XG4gIDYwJXtcbiAgICBsZWZ0OiA2MCU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzIxOTZmMztcbiAgfVxuICA2NSV7XG4gICAgbGVmdDogNjUlO1xuICB9XG4gIDcwJXtcbiAgICBsZWZ0OiA3MCU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAzYTlmNDtcbiAgfVxuICA3NSV7XG4gICAgbGVmdDogNzUlXG4gIH1cbiAgODAle1xuICAgIGxlZnQ6IDgwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjQ0MzM2O1xuICB9XG4gIDkwJXtcbiAgICBsZWZ0OiA5MCU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0YyRjJGMjtcbiAgfVxuICAxMDAle1xuICAgIHdpZHRoOiAyMDBweDtcbiAgICBsZWZ0OiA5NSU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0I2RjZGNjtcbiAgfVxuYFxuXG5jb25zdCBMaW5lQW5pbWF0aW9uID0gc3R5bGVkLmRpdmBcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAke3Byb3BzPT5wcm9wcy50aGVtZS5mb250Q29sb3J9O1xuICBoZWlnaHQ6IDFweDtcbiAgYW5pbWF0aW9uLWRpcmVjdGlvbjogcmV2ZXJzZTtcbiAgYW5pbWF0aW9uOiAke2xpbmVIb3Jpem9udGFsQW5pbWF0aW9ufSAxLjVzO1xuYFxuXG5jb25zdCBMaW5lSG9yaXpvbnRhbFJldmVyc2UgPSBzdHlsZWQoTGluZUFuaW1hdGlvbilgXG4gICBhbmltYXRpb24tZGlyZWN0aW9uOiByZXZlcnNlO1xuICAgbGVmdDogY2FsYygxMDAlIC0gMjBweCk7XG5gXG5cbmV4cG9ydCB7IExpbmVBbmltYXRpb24sIExpbmVIb3Jpem9udGFsUmV2ZXJzZSB9XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9MaW5lQW5pbWF0aW9uLmpzIiwiaW1wb3J0IHN0eWxlZCwgeyBrZXlmcmFtZXMgLCBUaGVtZVByb3ZpZGVyfSBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcblxuY29uc3QgQW5pbWF0aW9uID0ga2V5ZnJhbWVzYFxuICAlMHtcbiAgICBjb2xvcjogI2Y0NDMzNjtcbiAgfVxuICAlMTB7XG4gICAgY29sb3I6ICNlOTFlNjM7XG4gIH1cbiAgMjAle1xuICAgIGNvbG9yOiAjOWMyN2IwO1xuICB9XG4gIDMwJXtcbiAgICAgY29sb3I6ICNmNDQzMzY7XG4gIH1cbiAgNDAle1xuICAgIGNvbG9yOiAjNjczYWI3O1xuICB9XG4gIDUwJXtcbiAgICBjb2xvcjogIzNmNTFiNTtcbiAgfVxuICA2MCV7XG4gICAgY29sb3I6ICMyMTk2ZjM7XG4gIH1cbiAgNzAle1xuICAgIGNvbG9yOiAjMDNhOWY0O1xuICB9XG4gIDgwJXtcbiAgICBjb2xvcjogI2Y0NDMzNjtcbiAgfVxuICA5MCV7XG4gICAgY29sb3I6ICNGMkYyRjI7XG4gIH1cbiAgMTAwJXtcbiAgICBjb2xvcjogI0I2RjZGNjtcbiAgfVxuYFxuY29uc3QgTmFtZUFuaW1hdGlvbiA9IHN0eWxlZC5kaXZgXG4gIGZvbnQtc2l6ZTogMmVtO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBhbmltYXRpb246ICR7QW5pbWF0aW9ufSAycztcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuYFxuXG5mdW5jdGlvbiBOYW1lIChwcm9wcykge1xuICByZXR1cm4oXG4gICAgIDxOYW1lQW5pbWF0aW9uPlxuICAgICAgIHtwcm9wcy5uYW1lfVxuICAgICA8L05hbWVBbmltYXRpb24+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgTmFtZVxuXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL05hbWVBbmltYXRpb24uanMiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgc3R5bGVkLCB7IGtleWZyYW1lcyB9IGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xuaW1wb3J0IHsgUm93LCBDb2wgLCBCQVNFX0NPTkZ9IGZyb20gJ3JlYWN0LXN0eWxlZC1mbGV4Ym94Z3JpZCdcbmltcG9ydCBJY29uIGZyb20gJ3JlYWN0LWljb25zLWtpdCdcbmltcG9ydCB7IGxpbmtlZGluU3F1YXJlLCBnaXRodWIsIGdyYWR1YXRpb25DYXAgfSBmcm9tICdyZWFjdC1pY29ucy1raXQvZmEvJ1xuXG5jb25zdCBDb250YWluZXIgPSBzdHlsZWQoUm93KWBcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xuYFxuY29uc3QgSW1nZW4gPSBzdHlsZWQuZGl2YFxuICAgIHdpZHRoOiAxNjBweDtcbiAgICBoZWlnaHQ6IDE2MHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCdodHRwczovL3Njb250ZW50LmZlb2gzLTEuZm5hLmZiY2RuLm5ldC92L3QxLjAtMS9wMTYweDE2MC8xNTk0MDU2NF8xMDE1NDI0ODc1MDQ1MDk2M183ODM0NTg0NzE2MjE1NTExNzAxX24uanBnP29oPTBlZGUzNDZlNWQzYjZmMmJiYmVhYWRhZDZkYmYzYjlhJm9lPTU5N0ExQ0I0Jyk7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwcHggMHB4O1xuICAgIGNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICBtYXJnaW46IGF1dG87XG5cbiAgICAmOmhvdmVyIHtcbiAgICAgICAgb3BhY2l0eTogMC41O1xuICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgfVxuYFxuXG5jb25zdCBJbmZvID0gc3R5bGVkKFJvdylgXG4gICAge1xuICAgICAgICBwYWRkaW5nOiAxNXB4IDBweCAxNXB4IDJweDtcbiAgICAgICAgZm9udC1zaXplOiAxMHB4O1xuICAgICAgICBoZWlnaHQ6IDUwcHg7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIH1cbmBcblxuZnVuY3Rpb24gUGVyZmlsKCkge1xuICAgIHJldHVybihcbiAgICAgICA8Q29udGFpbmVyIHhzPXsxMn0+XG4gICAgICAgICAgPENvbCB4cz17NH0geHNPZmZzZXQ9ezR9ID5cbiAgICAgICAgICAgIDxJbWdlbj5XSUxMSUFNIFJJQ0FSRE8gQVJJWkEgVsOJTEVaPC9JbWdlbj5cbiAgICAgICAgICAgIDxJbmZvIGNlbnRlcj1cInhzXCIgY2VudGVyPVwibGdcIj5cbiAgICAgICAgICAgICAgICA8Q29sPlxuICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly93d3cubGlua2VkaW4uY29tL2luL3dyYXJpemEvXCIgdGFyZ2V0PVwiX2JsYW5rXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8SWNvbiBpY29uPXtsaW5rZWRpblNxdWFyZX0vPlxuICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgICAgICAgPENvbD5cbiAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS93cmFyaXphXCIgdGFyZ2V0PVwiX2JsYW5rXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8SWNvbiBpY29uPXtnaXRodWJ9Lz5cbiAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgICAgICAgIDxDb2w+XG4gICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL3BsYXR6aS5jb20vQHdyYXJpemEvXCIgdGFyZ2V0PVwiX2JsYW5rXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8SWNvbiBpY29uPXtncmFkdWF0aW9uQ2FwfS8+XG4gICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICA8L0NvbD5cbiAgICAgICAgICAgIDwvSW5mbz4gXG4gICAgICAgICAgPC9Db2w+XG4gICAgICAgPC9Db250YWluZXI+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBQZXJmaWxcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL1BlcmZpbC5qcyIsImV4cG9ydCBjb25zdCBCbGFja1RoZW1lID0ge1xuICAgIGZvbnRDb2xvcjogJ3doaXRlJyxcbiAgICBiYWNrZ3JvdW5kOiAnYmxhY2snXG59XG5cbmV4cG9ydCBjb25zdCBMaWdodFRoZW1lID0ge1xuICAgIGZvbnRDb2xvcjogJ2JsYWNrJyxcbiAgICBiYWNrZ3JvdW5kOiAnd2hpdGUnXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbGliL3RoZW1lLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==
            return { page: comp.default }
          })
        