'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

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

var _jsxFileName = '/Users/wrariza/MEGA/apps/wrariza/pages/index.js?entry';


function Home(props) {
  return _react2.default.createElement(_styledComponents.ThemeProvider, { theme: _theme.LightTheme, __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    }
  }, _react2.default.createElement(_reactStyledFlexboxgrid.Grid, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    }
  }, _react2.default.createElement(_Hero2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    }
  }), _react2.default.createElement(_Perfil2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    }
  })));
}

exports.default = Home;