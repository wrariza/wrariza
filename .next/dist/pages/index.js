'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _reactStyledFlexboxgrid = require('react-styled-flexboxgrid');

var _theme = require('../lib/theme.js');

var _Hero = require('../components/Hero.js');

var _Hero2 = _interopRequireDefault(_Hero);

var _Perfil = require('../components/Perfil');

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