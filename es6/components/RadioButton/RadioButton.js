function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

import React, { Component } from 'react';
import { compose } from 'recompose';
import { withForwardRef, withTheme } from '../hocs';
import { removeUndefined } from '../../utils/object';
import { StyledRadioButton, StyledRadioButtonContainer, StyledRadioButtonInput, StyledRadioButtonButton } from './StyledRadioButton';

var RadioButton =
/*#__PURE__*/
function (_Component) {
  _inheritsLoose(RadioButton, _Component);

  function RadioButton() {
    return _Component.apply(this, arguments) || this;
  }

  var _proto = RadioButton.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        checked = _this$props.checked,
        disabled = _this$props.disabled,
        forwardRef = _this$props.forwardRef,
        id = _this$props.id,
        label = _this$props.label,
        name = _this$props.name,
        onChange = _this$props.onChange,
        theme = _this$props.theme,
        rest = _objectWithoutPropertiesLoose(_this$props, ["checked", "disabled", "forwardRef", "id", "label", "name", "onChange", "theme"]);

    var normalizedLabel = typeof label === 'string' ? React.createElement("div", null, label) : label;
    return React.createElement(StyledRadioButtonContainer, _extends({}, removeUndefined({
      htmlFor: id,
      disabled: disabled
    }), {
      theme: theme
    }), React.createElement(StyledRadioButton, {
      theme: theme
    }, React.createElement(StyledRadioButtonInput, _extends({}, rest, {
      ref: forwardRef,
      type: "radio"
    }, removeUndefined({
      id: id,
      name: name,
      checked: checked,
      disabled: disabled,
      onChange: onChange
    }), {
      theme: theme
    })), React.createElement(StyledRadioButtonButton, {
      theme: theme
    }, React.createElement("svg", {
      viewBox: "0 0 24 24",
      preserveAspectRatio: "xMidYMid meet"
    }, React.createElement("circle", {
      cx: 12,
      cy: 12,
      r: 6
    })))), normalizedLabel);
  };

  return RadioButton;
}(Component);

var RadioButtonDoc;

if (process.env.NODE_ENV !== 'production') {
  RadioButtonDoc = require('./doc').doc(RadioButton); // eslint-disable-line global-require
}

var RadioButtonWrapper = compose(withTheme, withForwardRef)(RadioButtonDoc || RadioButton);
export { RadioButtonWrapper as RadioButton };