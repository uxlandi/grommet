"use strict";

exports.__esModule = true;
exports.backgroundPropType = exports.a11yTitlePropType = void 0;

var _reactDesc = require("react-desc");

var a11yTitlePropType = _reactDesc.PropTypes.string.description('Custom title to be used by screen readers.');

exports.a11yTitlePropType = a11yTitlePropType;

var backgroundPropType = _reactDesc.PropTypes.oneOfType([_reactDesc.PropTypes.string, _reactDesc.PropTypes.shape({
  color: _reactDesc.PropTypes.string,
  opacity: _reactDesc.PropTypes.oneOfType([_reactDesc.PropTypes.oneOf(['weak', 'medium', 'strong']), _reactDesc.PropTypes.bool])
})]).description('Background color');

exports.backgroundPropType = backgroundPropType;