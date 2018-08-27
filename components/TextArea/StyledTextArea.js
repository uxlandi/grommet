'use strict';

exports.__esModule = true;
exports.StyledTextArea = undefined;

var _templateObject = _taggedTemplateLiteralLoose(['\n  ', '\n'], ['\n  ', '\n']);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _utils = require('../../utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var placeholderColor = (0, _styledComponents.css)(['color:', ';'], function (props) {
  return props.theme.global.colors.placeholder;
});

var plainStyle = (0, _styledComponents.css)(['border:none;width:100%;-webkit-appearance:none;']);

var StyledTextArea = exports.StyledTextArea = _styledComponents2.default.textarea.withConfig({
  displayName: 'StyledTextArea'
})(['', ' width:100%;', ' &::-webkit-input-placeholder{', '}&::-moz-placeholder{', '}&:-ms-input-placeholder{', '}&::-moz-focus-inner{border:none;outline:none;}&:focus{', '}'], _utils.inputStyle, function (props) {
  return props.plain && plainStyle;
}, placeholderColor, placeholderColor, placeholderColor, function (props) {
  return (!props.plain || props.focusIndicator) && _utils.focusStyle;
}).extend(_templateObject, function (props) {
  return props.theme.textArea && props.theme.textArea.extend;
});