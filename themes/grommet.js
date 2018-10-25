"use strict";

exports.__esModule = true;
exports.grommet = void 0;

var _styledComponents = require("styled-components");

var _utils = require("../utils");

var grommet = (0, _utils.deepFreeze)({
  global: {
    colors: {
      background: '#ffffff'
    },
    font: {
      family: '"San Francisco", "Helvetica Neue", Helvetica, Arial, sans-serif'
    }
  },
  anchor: {
    color: {
      dark: '#FD6FFF',
      light: '#9060EB'
    }
  },
  button: {
    extend: (0, _styledComponents.css)(["", ""], function (props) {
      return !props.plain && 'font-weight: bold;';
    })
  }
});
exports.grommet = grommet;