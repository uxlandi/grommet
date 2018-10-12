function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React, { Component } from 'react';
import { storiesOf } from '@storybook/react';
import { Grommet, CheckBox } from 'grommet';
import { grommet } from 'grommet/themes';

var SimpleCheckBox =
/*#__PURE__*/
function (_Component) {
  _inheritsLoose(SimpleCheckBox, _Component);

  function SimpleCheckBox() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _Component.call.apply(_Component, [this].concat(args)) || this;

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      checked: false
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onChange", function (event) {
      return _this.setState({
        checked: event.target.checked
      });
    });

    return _this;
  }

  var _proto = SimpleCheckBox.prototype;

  _proto.render = function render() {
    var checked = this.state.checked;
    return React.createElement(Grommet, {
      theme: grommet
    }, React.createElement(CheckBox, _extends({}, this.props, {
      label: "Choice",
      checked: checked,
      onChange: this.onChange
    })));
  };

  return SimpleCheckBox;
}(Component);

storiesOf('CheckBox', module).add('Simple', function () {
  return React.createElement(SimpleCheckBox, null);
}).add('Toggle', function () {
  return React.createElement(SimpleCheckBox, {
    toggle: true
  });
});