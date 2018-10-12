function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

import React, { Component } from 'react';
import { compose } from 'recompose';
import { withFocus, withForwardRef, withTheme } from '../hocs';
import { removeUndefined } from '../../utils/object';
import { StyledCheckBox, StyledCheckBoxContainer, StyledCheckBoxInput, StyledCheckBoxBox, StyledCheckBoxToggle, StyledCheckBoxKnob } from './StyledCheckBox';

var CheckBox =
/*#__PURE__*/
function (_Component) {
  _inheritsLoose(CheckBox, _Component);

  function CheckBox() {
    return _Component.apply(this, arguments) || this;
  }

  var _proto = CheckBox.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        checked = _this$props.checked,
        disabled = _this$props.disabled,
        focus = _this$props.focus,
        forwardRef = _this$props.forwardRef,
        id = _this$props.id,
        label = _this$props.label,
        name = _this$props.name,
        onChange = _this$props.onChange,
        reverse = _this$props.reverse,
        theme = _this$props.theme,
        toggle = _this$props.toggle,
        rest = _objectWithoutPropertiesLoose(_this$props, ["checked", "disabled", "focus", "forwardRef", "id", "label", "name", "onChange", "reverse", "theme", "toggle"]);

    var normalizedLabel = typeof label === 'string' ? React.createElement("div", null, label) : label;
    var hidden;

    if (disabled && checked) {
      hidden = React.createElement("input", {
        name: name,
        type: "hidden",
        value: "true"
      });
    }

    var Icon = theme.checkBox.icons.checked;
    var visual = toggle ? React.createElement(StyledCheckBoxToggle, {
      focus: focus,
      theme: theme
    }, React.createElement(StyledCheckBoxKnob, {
      theme: theme
    })) : React.createElement(StyledCheckBoxBox, {
      focus: focus,
      theme: theme
    }, Icon ? React.createElement(Icon, null) : React.createElement("svg", {
      viewBox: "0 0 24 24",
      preserveAspectRatio: "xMidYMid meet"
    }, React.createElement("path", {
      fill: "none",
      d: "M6,11.3 L10.3,16 L18,6.2"
    })));
    return React.createElement(StyledCheckBoxContainer, _extends({}, removeUndefined({
      htmlFor: id,
      disabled: disabled,
      reverse: reverse
    }), {
      theme: theme
    }), React.createElement(StyledCheckBox, {
      theme: theme
    }, React.createElement(StyledCheckBoxInput, _extends({}, rest, {
      ref: forwardRef,
      type: "checkbox"
    }, removeUndefined({
      id: id,
      name: name,
      checked: checked,
      disabled: disabled,
      onChange: onChange
    }), {
      theme: theme
    })), visual), normalizedLabel, hidden);
  };

  return CheckBox;
}(Component);

var CheckBoxDoc;

if (process.env.NODE_ENV !== 'production') {
  CheckBoxDoc = require('./doc').doc(CheckBox); // eslint-disable-line global-require
}

var CheckBoxWrapper = compose(withFocus, withTheme, withForwardRef)(CheckBoxDoc || CheckBox);
export { CheckBoxWrapper as CheckBox };