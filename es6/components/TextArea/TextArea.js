function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

import React, { Component } from 'react';
import { compose } from 'recompose';
import { withFocus, withForwardRef, withTheme } from '../hocs';
import { StyledTextArea } from './StyledTextArea';

var TextArea =
/*#__PURE__*/
function (_Component) {
  _inheritsLoose(TextArea, _Component);

  function TextArea() {
    return _Component.apply(this, arguments) || this;
  }

  var _proto = TextArea.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        fill = _this$props.fill,
        forwardRef = _this$props.forwardRef,
        rest = _objectWithoutPropertiesLoose(_this$props, ["fill", "forwardRef"]);

    return React.createElement(StyledTextArea, _extends({
      ref: forwardRef,
      fillArg: fill
    }, rest));
  };

  return TextArea;
}(Component);

var TextAreaDoc;

if (process.env.NODE_ENV !== 'production') {
  TextAreaDoc = require('./doc').doc(TextArea); // eslint-disable-line global-require
}

var TextAreaWrapper = compose(withFocus, withTheme, withForwardRef)(TextAreaDoc || TextArea);
export { TextAreaWrapper as TextArea };