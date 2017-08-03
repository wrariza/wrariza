
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

var _jsxFileName = 'D:\\apps\\wrariza\\pages\\index.js?entry';


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

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "D:\\apps\\wrariza\\pages\\index.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "D:\\apps\\wrariza\\pages\\index.js"); } } })();
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

var _jsxFileName = 'D:\\apps\\wrariza\\components\\Hero.js';

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

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "D:\\apps\\wrariza\\components\\Hero.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "D:\\apps\\wrariza\\components\\Hero.js"); } } })();

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

var _jsxFileName = 'D:\\apps\\wrariza\\components\\LabelAnimation.js';

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

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "D:\\apps\\wrariza\\components\\LabelAnimation.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "D:\\apps\\wrariza\\components\\LabelAnimation.js"); } } })();

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

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "D:\\apps\\wrariza\\components\\LineAnimation.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "D:\\apps\\wrariza\\components\\LineAnimation.js"); } } })();

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

var _jsxFileName = 'D:\\apps\\wrariza\\components\\NameAnimation.js';

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

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "D:\\apps\\wrariza\\components\\NameAnimation.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "D:\\apps\\wrariza\\components\\NameAnimation.js"); } } })();

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

var _jsxFileName = 'D:\\apps\\wrariza\\components\\Perfil.js';

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n    width: 100%;\n    margin-top: 10px;\n'], ['\n    width: 100%;\n    margin-top: 10px;\n']),
    _templateObject2 = (0, _taggedTemplateLiteral3.default)(['\n    width: 160px;\n    height: 160px;\n    border-radius: 100%;\n    background-image: url(\'https://scontent-bog1-1.xx.fbcdn.net/v/t1.0-1/p160x160/15940564_10154248750450963_7834584716215511701_n.jpg?oh=9143e27a317004b3df7c4ec9359e5426&oe=59F0C3B4\');\n    margin: auto;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    text-align: center;\n    background-repeat: no-repeat;\n    background-position: 0px 0px;\n    color: transparent;\n    margin: auto;\n\n    &:hover {\n        opacity: 0.5;\n        color: white;\n    }\n'], ['\n    width: 160px;\n    height: 160px;\n    border-radius: 100%;\n    background-image: url(\'https://scontent-bog1-1.xx.fbcdn.net/v/t1.0-1/p160x160/15940564_10154248750450963_7834584716215511701_n.jpg?oh=9143e27a317004b3df7c4ec9359e5426&oe=59F0C3B4\');\n    margin: auto;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    text-align: center;\n    background-repeat: no-repeat;\n    background-position: 0px 0px;\n    color: transparent;\n    margin: auto;\n\n    &:hover {\n        opacity: 0.5;\n        color: white;\n    }\n']),
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

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "D:\\apps\\wrariza\\components\\Perfil.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "D:\\apps\\wrariza\\components\\Perfil.js"); } } })();

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

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "D:\\apps\\wrariza\\lib\\theme.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "D:\\apps\\wrariza\\lib\\theme.js"); } } })();

/***/ }),

/***/ 596:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(568);


/***/ })

},[596]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcz85NDNmOGY1Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvSGVyby5qcz9iODA0ODAyIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvTGFiZWxBbmltYXRpb24uanM/NWVmOTAyYiIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0xpbmVBbmltYXRpb24uanM/NWVmOTAyYiIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL05hbWVBbmltYXRpb24uanM/NWVmOTAyYiIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1BlcmZpbC5qcz81ZWY5MDJiIiwid2VicGFjazovLy8uL2xpYi90aGVtZS5qcz81ZWY5MDJiIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFnQjs7OztBQUNQOztBQUNBOztBQUNZOztBQUNkOzs7O0FBQ0E7Ozs7Ozs7OztJQUVEOzs7Ozs7Ozs7Ozs2QkFFRjs2QkFDRyxpREFBcUI7b0JBQXRCO3NCQUNFO0FBREY7T0FBQSxrQkFDRzs7b0JBQUQ7c0JBQ0U7QUFERjtBQUFBLHlCQUNHO2NBRUM7ZUFBTTs7b0JBRlI7c0JBSUE7QUFKQTtBQUNFLDBCQUdEOztvQkFBRDtzQkFJUDtBQUpPO0FBQUE7Ozs7O0FBT1Y7O2tCQUFlLEs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2QkM7Ozs7QUFDQzs7OztBQUNGOztBQUdiOztBQUVLOzs7O0FBQ0E7Ozs7Ozs7Ozs7QUFFUCxJQUFNLFdBQWtCLDhEQUF4Qjs7SUFNTTs7Ozs7Ozs7Ozs7aUNBRUU7bUNBQ0ssY0FBRDs7OEJBQUE7Z0NBQ0k7QUFESjtBQUFBLCtCQUNLOzs4QkFBRDtnQ0FFSTtBQUZKO0FBQUEsZ0NBRUs7c0JBQ1MsS0FBSyxNQUFNOzs4QkFEckI7Z0NBR0o7QUFISTtBQUNJLGdDQUVQOzs4QkFBRDtnQ0FFQTtBQUZBO0FBQUEsZ0NBRUM7OzhCQUFEO2dDQUNJO0FBREo7QUFBQSwrQkFDSzt1QkFDVSxLQUFLLE1BQU07OzhCQUR0QjtnQ0FNZjtBQU5lO0FBQ0k7Ozs7O0FBUXhCOztrQkFBZSxLOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyQ2M7Ozs7Ozs7Ozs7Ozs7QUFFN0IsSUFBTSxnQkFBZ0IsaUNBQXRCO0FBUUEsSUFBTSxpQkFBaUIsaUNBQXZCO0FBS0EsSUFBTSxpQkFBaUIsaUNBQXZCO0FBS0EsSUFBTSxpQkFBaUIsMkJBQU8sc0JBTWIsZUFPQSxnQkFTQTs7QUFhakIsU0FBUyxNQUFNLE9BQ2I7eUJBQ0csY0FBRDs7Z0JBQUE7a0JBQ0c7QUFESDtBQUFBLFdBRUUsK0NBQU0sV0FBVTtnQkFBaEI7a0JBQUE7QUFBQTtLQUFBLGFBR0w7QUFFRDs7a0JBQWUsTTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaEVjOzs7Ozs7Ozs7O0FBRTdCLElBQU0sMEJBQTBCLGlDQUFoQzs7QUEwRUEsSUFBTSwyQ0FBdUIsc0JBRVA7V0FBTyxNQUFNLE1BQU07QUFGbkMsQ0FBZ0IsRUFLUDs7QUFHZixJQUFNLHdCQUF3QixnQ0FBTyxlQUtyQzs7UUFBUztRQUFlLDhDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6Rks7Ozs7Ozs7Ozs7O0FBRTdCLElBQU0sWUFBWSxpQ0FBbEI7QUFtQ0EsSUFBTSxnQkFBZ0IsMkJBQU8sc0JBR2Q7O0FBSWYsU0FBUyxLQUFNLE9BQ2I7eUJBQ0ksY0FBRDs7Z0JBQUE7a0JBQ0c7QUFESDtBQUFBLFdBSUo7QUFFRDs7a0JBQWUsSzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcERSOzs7O0FBQ1U7Ozs7QUFDRzs7QUFDYjs7OztBQUMwQjs7Ozs7Ozs7OztBQUVqQyxJQUFNLFlBQW1CLDZEQUF6QjtBQUlBLElBQU0sUUFBUSwyQkFBTyxJQUFyQjs7QUFxQkEsSUFBTSxPQUFjLDZEQUFwQjs7QUFVQSxTQUFTLFNBQVM7UUFDZDs7MkJBQ0ksY0FBRCxhQUFXLElBQUk7c0JBQWY7d0JBQ0c7QUFESDtLQUFBLGtCQUNJLDZDQUFJLElBQUksR0FBRyxVQUFVO3NCQUF0Qjt3QkFDRTtBQURGO3VCQUNHLGNBQUQ7O3NCQUFBO3dCQUFBO0FBQUE7QUFBQSxPQUNBLG1EQUFDLGNBQUQsZ0NBQU0sUUFBTyxzRUFBWTtrQkFBekI7b0JBQUE7QUFBQSxRQUNJLHVDQUFDOztzQkFBRDt3QkFDSTtBQURKO0FBQUEsdUJBQ0kscUJBQUcsTUFBSyx3Q0FBdUMsUUFBTztzQkFBdEQ7d0JBQ0k7QUFESjt1QkFDSyx5Q0FBVztzQkFBWjt3QkFHUjtBQUhROzBCQUdQOztzQkFBRDt3QkFDSTtBQURKO0FBQUEsdUJBQ0kscUJBQUcsTUFBSyw4QkFBNkIsUUFBTztzQkFBNUM7d0JBQ0k7QUFESjt1QkFDSyx5Q0FBVztzQkFBWjt3QkFHUjtBQUhROzBCQUdQOztzQkFBRDt3QkFDSTtBQURKO0FBQUEsdUJBQ0kscUJBQUcsTUFBSyxnQ0FBK0IsUUFBTztzQkFBOUM7d0JBQ0k7QUFESjt1QkFDSyx5Q0FBVztzQkFBWjt3QkFPdkI7QUFQdUI7O0FBU3hCOztrQkFBZSxPOzs7Ozs7Ozs7Ozs7Ozs7QUNwRVIsSUFBTTtlQUVUO2dCQUdKO0FBSkk7O0FBSUcsSUFBTTtlQUVUO2dCQUFZO0FBRFosRSIsImZpbGUiOiJidW5kbGVzXFxwYWdlc1xcaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IFRoZW1lUHJvdmlkZXIgfSBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcbmltcG9ydCB7IEdyaWQgfSBmcm9tICdyZWFjdC1zdHlsZWQtZmxleGJveGdyaWQnO1xyXG5pbXBvcnQgeyBCbGFja1RoZW1lLCBMaWdodFRoZW1lIH0gZnJvbSAnLi4vbGliL3RoZW1lLmpzJztcclxuaW1wb3J0IEhlcm8gZnJvbSAnLi4vY29tcG9uZW50cy9IZXJvLmpzJ1xyXG5pbXBvcnQgUGVyZmlsIGZyb20gJy4uL2NvbXBvbmVudHMvUGVyZmlsJ1xyXG5cclxuY2xhc3MgSG9tZSBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgcmVuZGVyKCkge1xyXG4gICAgcmV0dXJuKFxyXG4gICAgICA8VGhlbWVQcm92aWRlciB0aGVtZT17TGlnaHRUaGVtZX0+XHJcbiAgICAgICAgPEdyaWQ+XHJcbiAgICAgICAgICA8SGVyb1xyXG4gICAgICAgICAgICBuYW1lPVwiV1JBUklaQVwiXHJcbiAgICAgICAgICAgIGxhYmVsPVwiSEkgSSdNIFdJTExJQU0gUklDQVJETyBBUklaQSwgSSBMT1ZFIFRIRSBTT0ZUV0FSRSBCVUlMVCBXSVRIIFBBU1NJT04gQU5EIFRIRVwiXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgPFBlcmZpbC8+XHJcbiAgICAgICAgPC9HcmlkPlxyXG4gICAgICA8L1RoZW1lUHJvdmlkZXI+XHJcbiAgICApXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIb21lXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFnZXM/ZW50cnkiLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH1mcm9tICdyZWFjdCdcclxuaW1wb3J0IHN0eWxlZCwgeyBrZXlmcmFtZXMgfSBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcclxuaW1wb3J0IHsgR3JpZCwgUm93IH0gZnJvbSAncmVhY3Qtc3R5bGVkLWZsZXhib3hncmlkJ1xyXG5pbXBvcnQgeyBcclxuICBMaW5lQW5pbWF0aW9uLCBcclxuICBMaW5lSG9yaXpvbnRhbFJldmVyc2UgXHJcbn0gZnJvbSAnLi4vY29tcG9uZW50cy9MaW5lQW5pbWF0aW9uLmpzJ1xyXG5pbXBvcnQgTGFiZWxBbmltYXRpb24gZnJvbSAnLi9MYWJlbEFuaW1hdGlvbidcclxuaW1wb3J0IE5hbWVBbmltYXRpb24gZnJvbSAnLi9OYW1lQW5pbWF0aW9uLmpzJ1xyXG5cclxuY29uc3QgR3JpZEhlcm8gPSBzdHlsZWQoR3JpZClgXHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgbWFyZ2luLXRvcDogMTUlO1xyXG5gXHJcblxyXG5jbGFzcyBIZXJvIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICByZXR1cm4oXHJcbiAgICAgICAgICAgIDxHcmlkSGVybz5cclxuICAgICAgICAgICAgICAgIDxMaW5lQW5pbWF0aW9uPlxyXG4gICAgICAgICAgICAgICAgPC9MaW5lQW5pbWF0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxOYW1lQW5pbWF0aW9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9e3RoaXMucHJvcHMubmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPExpbmVIb3Jpem9udGFsUmV2ZXJzZT5cclxuICAgICAgICAgICAgICAgIDwvTGluZUhvcml6b250YWxSZXZlcnNlPlxyXG4gICAgICAgICAgICAgICAgPFJvdz5cclxuICAgICAgICAgICAgICAgICAgICA8TGFiZWxBbmltYXRpb24gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPXt0aGlzLnByb3BzLmxhYmVsfSBcclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgICAgIDwvR3JpZEhlcm8+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIZXJvXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9IZXJvLmpzIiwiaW1wb3J0IHN0eWxlZCwgeyBrZXlmcmFtZXMgLCBUaGVtZVByb3ZpZGVyfSBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcclxuXHJcbmNvbnN0IEFuaW1hdGlvblR5cGUgPSBrZXlmcmFtZXNgXHJcbiAgZnJvbXsgXHJcbiAgICB3aWR0aDogMDtcclxuICB9XHJcbiAgdG97XHJcbiAgICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xyXG4gIH1cclxuYFxyXG5jb25zdCBBbmltYXRpb25UeXBlMiA9IGtleWZyYW1lc2BcclxuICAgIDAle3dpZHRoOiAwO31cclxuICAgIDUwJXt3aWR0aDogMDt9XHJcbiAgICAxMDAleyB3aWR0aDogMTAwOyB9IFxyXG5gXHJcbmNvbnN0IEFuaW1hdGlvbkJsaW5rID0ga2V5ZnJhbWVzYFxyXG4gIHtcclxuICAgIHRve29wYWNpdHk6IC4wO31cclxuICB9XHJcbmBcclxuY29uc3QgTGFiZWxBbmltYXRpb24gPSBzdHlsZWQuZGl2YFxyXG4gICB7IFxyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgdGV4dC1hbGluZ2h0OiBjZW50ZXI7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgYW5pbWF0aW9uOiAke0FuaW1hdGlvblR5cGV9IDRzIHN0ZXBzKDYwLCBlbmQpIGZvcndhcmRzOyBcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7IFxyXG4gICAgZm9udDogLjdlbSBtZW5sbztcclxuICAgIG1hcmdpbjogYXV0bztcclxuICB9XHJcblxyXG4gIDpudGgtY2hpbGQoMil7XHJcbiAgICBhbmltYXRpb246ICR7QW5pbWF0aW9uVHlwZTJ9IDhzIHN0ZXBzKDYwLCBlbmQpO1xyXG4gIH1cclxuXHJcbiAgYXtcclxuICAgIGNvbG9yOiBsaW1lO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIH1cclxuXHJcbiAgc3BhbntcclxuICAgIGFuaW1hdGlvbjogJHtBbmltYXRpb25CbGlua30gMXMgaW5maW5pdGU7XHJcbiAgfVxyXG5cclxuICAuY29yYXpvbntcclxuICAgIGNvbG9yOiByZWQ7XHJcbiAgICBmb250LXNpemU6IDJlbTtcclxuICB9XHJcblxyXG4gIDo6c2VsZWN0aW9ue1xyXG4gICAgYmFja2dyb3VuZDogYmxhY2s7XHJcbiAgfSBcclxuYFxyXG5cclxuZnVuY3Rpb24gTGFiZWwocHJvcHMpIHtcclxuICByZXR1cm4oXHJcbiAgICA8TGFiZWxBbmltYXRpb24+XHJcbiAgICAgIHtwcm9wcy5sYWJlbH1cclxuICAgICAgPHNwYW4gY2xhc3NOYW1lPSdjb3Jhem9uJz4g4pmlIDwvc3Bhbj46KVxyXG4gICAgPC9MYWJlbEFuaW1hdGlvbj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IExhYmVsXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9MYWJlbEFuaW1hdGlvbi5qcyIsImltcG9ydCBzdHlsZWQsIHsga2V5ZnJhbWVzICwgVGhlbWVQcm92aWRlcn0gZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXHJcblxyXG5jb25zdCBsaW5lSG9yaXpvbnRhbEFuaW1hdGlvbiA9IGtleWZyYW1lc2BcclxuICAwJXtcclxuICAgIGxlZnQ6IDAlO1xyXG4gICAgd2lkdGg6IDIwMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y0NDMzNjsgICBcclxuICB9XHJcbiAgJTV7XHJcbiAgICBsZWZ0OiA1JTtcclxuICB9XHJcbiAgJTEwe1xyXG4gICAgbGVmdDogMTAlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2U5MWU2MztcclxuICB9XHJcbiAgMTUle1xyXG4gICAgbGVmdDogMTUlO1xyXG4gIH1cclxuICAyMCV7XHJcbiAgICBsZWZ0OiAyMCU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjOWMyN2IwO1xyXG4gIH1cclxuICAyNSV7XHJcbiAgICAgbGVmdDogMjUlO1xyXG4gIH1cclxuICAzMCV7XHJcbiAgICBsZWZ0OiAzMCU7XHJcbiAgICAgYmFja2dyb3VuZC1jb2xvcjogI2Y0NDMzNjtcclxuICB9XHJcbiAgMzUle1xyXG4gICAgbGVmdDogMzUlO1xyXG4gIH1cclxuICA0MCV7XHJcbiAgICBsZWZ0OiA0MCU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjczYWI3O1xyXG4gIH1cclxuICA0NSV7XHJcbiAgICBsZWZ0OiA0NSU7XHJcbiAgfVxyXG4gIDUwJXtcclxuICAgIGxlZnQ6IDUwJTtcclxuICAgIHdpZHRoOiAyMDBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzZjUxYjU7XHJcbiAgfVxyXG4gIDU1JXtcclxuICAgIGxlZnQ6IDU1JTtcclxuICB9XHJcbiAgNjAle1xyXG4gICAgbGVmdDogNjAlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzIxOTZmMztcclxuICB9XHJcbiAgNjUle1xyXG4gICAgbGVmdDogNjUlO1xyXG4gIH1cclxuICA3MCV7XHJcbiAgICBsZWZ0OiA3MCU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDNhOWY0O1xyXG4gIH1cclxuICA3NSV7XHJcbiAgICBsZWZ0OiA3NSVcclxuICB9XHJcbiAgODAle1xyXG4gICAgbGVmdDogODAlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y0NDMzNjtcclxuICB9XHJcbiAgOTAle1xyXG4gICAgbGVmdDogOTAlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0YyRjJGMjtcclxuICB9XHJcbiAgMTAwJXtcclxuICAgIHdpZHRoOiAyMDBweDtcclxuICAgIGxlZnQ6IDk1JTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNCNkY2RjY7XHJcbiAgfVxyXG5gXHJcblxyXG5jb25zdCBMaW5lQW5pbWF0aW9uID0gc3R5bGVkLmRpdmBcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJHtwcm9wcz0+cHJvcHMudGhlbWUuZm9udENvbG9yfTtcclxuICBoZWlnaHQ6IDFweDtcclxuICBhbmltYXRpb24tZGlyZWN0aW9uOiByZXZlcnNlO1xyXG4gIGFuaW1hdGlvbjogJHtsaW5lSG9yaXpvbnRhbEFuaW1hdGlvbn0gMS41cztcclxuYFxyXG5cclxuY29uc3QgTGluZUhvcml6b250YWxSZXZlcnNlID0gc3R5bGVkKExpbmVBbmltYXRpb24pYFxyXG4gICBhbmltYXRpb24tZGlyZWN0aW9uOiByZXZlcnNlO1xyXG4gICBsZWZ0OiBjYWxjKDEwMCUgLSAyMHB4KTtcclxuYFxyXG5cclxuZXhwb3J0IHsgTGluZUFuaW1hdGlvbiwgTGluZUhvcml6b250YWxSZXZlcnNlIH1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL0xpbmVBbmltYXRpb24uanMiLCJpbXBvcnQgc3R5bGVkLCB7IGtleWZyYW1lcyAsIFRoZW1lUHJvdmlkZXJ9IGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xyXG5cclxuY29uc3QgQW5pbWF0aW9uID0ga2V5ZnJhbWVzYFxyXG4gICUwe1xyXG4gICAgY29sb3I6ICNmNDQzMzY7XHJcbiAgfVxyXG4gICUxMHtcclxuICAgIGNvbG9yOiAjZTkxZTYzO1xyXG4gIH1cclxuICAyMCV7XHJcbiAgICBjb2xvcjogIzljMjdiMDtcclxuICB9XHJcbiAgMzAle1xyXG4gICAgIGNvbG9yOiAjZjQ0MzM2O1xyXG4gIH1cclxuICA0MCV7XHJcbiAgICBjb2xvcjogIzY3M2FiNztcclxuICB9XHJcbiAgNTAle1xyXG4gICAgY29sb3I6ICMzZjUxYjU7XHJcbiAgfVxyXG4gIDYwJXtcclxuICAgIGNvbG9yOiAjMjE5NmYzO1xyXG4gIH1cclxuICA3MCV7XHJcbiAgICBjb2xvcjogIzAzYTlmNDtcclxuICB9XHJcbiAgODAle1xyXG4gICAgY29sb3I6ICNmNDQzMzY7XHJcbiAgfVxyXG4gIDkwJXtcclxuICAgIGNvbG9yOiAjRjJGMkYyO1xyXG4gIH1cclxuICAxMDAle1xyXG4gICAgY29sb3I6ICNCNkY2RjY7XHJcbiAgfVxyXG5gXHJcbmNvbnN0IE5hbWVBbmltYXRpb24gPSBzdHlsZWQuZGl2YFxyXG4gIGZvbnQtc2l6ZTogMmVtO1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgYW5pbWF0aW9uOiAke0FuaW1hdGlvbn0gMnM7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG5gXHJcblxyXG5mdW5jdGlvbiBOYW1lIChwcm9wcykge1xyXG4gIHJldHVybihcclxuICAgICA8TmFtZUFuaW1hdGlvbj5cclxuICAgICAgIHtwcm9wcy5uYW1lfVxyXG4gICAgIDwvTmFtZUFuaW1hdGlvbj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE5hbWVcclxuXHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvTmFtZUFuaW1hdGlvbi5qcyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHN0eWxlZCwgeyBrZXlmcmFtZXMgfSBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcclxuaW1wb3J0IHsgUm93LCBDb2wgLCBCQVNFX0NPTkZ9IGZyb20gJ3JlYWN0LXN0eWxlZC1mbGV4Ym94Z3JpZCdcclxuaW1wb3J0IEljb24gZnJvbSAncmVhY3QtaWNvbnMta2l0J1xyXG5pbXBvcnQgeyBsaW5rZWRpblNxdWFyZSwgZ2l0aHViLCBncmFkdWF0aW9uQ2FwIH0gZnJvbSAncmVhY3QtaWNvbnMta2l0L2ZhLydcclxuXHJcbmNvbnN0IENvbnRhaW5lciA9IHN0eWxlZChSb3cpYFxyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG5gXHJcbmNvbnN0IEltZ2VuID0gc3R5bGVkLmRpdmBcclxuICAgIHdpZHRoOiAxNjBweDtcclxuICAgIGhlaWdodDogMTYwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCdodHRwczovL3Njb250ZW50LWJvZzEtMS54eC5mYmNkbi5uZXQvdi90MS4wLTEvcDE2MHgxNjAvMTU5NDA1NjRfMTAxNTQyNDg3NTA0NTA5NjNfNzgzNDU4NDcxNjIxNTUxMTcwMV9uLmpwZz9vaD05MTQzZTI3YTMxNzAwNGIzZGY3YzRlYzkzNTllNTQyNiZvZT01OUYwQzNCNCcpO1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwcHggMHB4O1xyXG4gICAgY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG5cclxuICAgICY6aG92ZXIge1xyXG4gICAgICAgIG9wYWNpdHk6IDAuNTtcclxuICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICB9XHJcbmBcclxuXHJcbmNvbnN0IEluZm8gPSBzdHlsZWQoUm93KWBcclxuICAgIHtcclxuICAgICAgICBwYWRkaW5nOiAxNXB4IDBweCAxNXB4IDJweDtcclxuICAgICAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICB9XHJcbmBcclxuXHJcbmZ1bmN0aW9uIFBlcmZpbCgpIHtcclxuICAgIHJldHVybihcclxuICAgICAgIDxDb250YWluZXIgeHM9ezEyfT5cclxuICAgICAgICAgIDxDb2wgeHM9ezR9IHhzT2Zmc2V0PXs0fSA+XHJcbiAgICAgICAgICAgIDxJbWdlbj5XSUxMSUFNIFJJQ0FSRE8gQVJJWkEgVsOJTEVaPC9JbWdlbj5cclxuICAgICAgICAgICAgPEluZm8gY2VudGVyPVwieHNcIiBjZW50ZXI9XCJsZ1wiPlxyXG4gICAgICAgICAgICAgICAgPENvbD5cclxuICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly93d3cubGlua2VkaW4uY29tL2luL3dyYXJpemEvXCIgdGFyZ2V0PVwiX2JsYW5rXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uIGljb249e2xpbmtlZGluU3F1YXJlfS8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgICA8Q29sPlxyXG4gICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vd3Jhcml6YVwiIHRhcmdldD1cIl9ibGFua1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8SWNvbiBpY29uPXtnaXRodWJ9Lz5cclxuICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgIDxDb2w+XHJcbiAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vcGxhdHppLmNvbS9Ad3Jhcml6YS9cIiB0YXJnZXQ9XCJfYmxhbmtcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEljb24gaWNvbj17Z3JhZHVhdGlvbkNhcH0vPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICA8L0luZm8+IFxyXG4gICAgICAgICAgPC9Db2w+XHJcbiAgICAgICA8L0NvbnRhaW5lcj5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUGVyZmlsXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9QZXJmaWwuanMiLCJleHBvcnQgY29uc3QgQmxhY2tUaGVtZSA9IHtcclxuICAgIGZvbnRDb2xvcjogJ3doaXRlJyxcclxuICAgIGJhY2tncm91bmQ6ICdibGFjaydcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IExpZ2h0VGhlbWUgPSB7XHJcbiAgICBmb250Q29sb3I6ICdibGFjaycsXHJcbiAgICBiYWNrZ3JvdW5kOiAnd2hpdGUnXHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9saWIvdGhlbWUuanMiXSwic291cmNlUm9vdCI6IiJ9
            return { page: comp.default }
          })
        