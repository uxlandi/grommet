"use strict";

exports.__esModule = true;
exports.Paragraph = void 0;

var _react = _interopRequireDefault(require("react"));

var _recompose = require("recompose");

var _hocs = require("../hocs");

var _StyledParagraph = require("./StyledParagraph");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var Paragraph = function Paragraph(_ref) {
  var rest = _extends({}, _ref);

  return _react.default.createElement(_StyledParagraph.StyledParagraph, rest);
};

var ParagraphDoc;

if (process.env.NODE_ENV !== 'production') {
  ParagraphDoc = require('./doc').doc(Paragraph); // eslint-disable-line global-require
}

var ParagraphWrapper = (0, _recompose.compose)(_hocs.withTheme)(ParagraphDoc || Paragraph);
exports.Paragraph = ParagraphWrapper;