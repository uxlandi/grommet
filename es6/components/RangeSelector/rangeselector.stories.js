function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React, { Component } from 'react';
import { storiesOf } from '@storybook/react';
import { Grommet, Box, RangeSelector, Stack, Text } from 'grommet';
import { grommet } from 'grommet/themes';

var SimpleRangeSelector =
/*#__PURE__*/
function (_Component) {
  _inheritsLoose(SimpleRangeSelector, _Component);

  function SimpleRangeSelector() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _Component.call.apply(_Component, [this].concat(args)) || this;

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      values: [2, 8]
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onChange", function (values) {
      return _this.setState({
        values: values
      });
    });

    return _this;
  }

  var _proto = SimpleRangeSelector.prototype;

  _proto.render = function render() {
    var values = this.state.values;
    return React.createElement(Grommet, {
      theme: grommet
    }, React.createElement(Stack, null, React.createElement(Box, {
      direction: "row",
      justify: "between"
    }, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map(function (value) {
      return React.createElement(Box, {
        key: value,
        pad: "small",
        border: false
      }, React.createElement(Text, {
        style: {
          fontFamily: 'monospace'
        }
      }, value));
    })), React.createElement(RangeSelector, {
      direction: "horizontal",
      invert: false,
      min: 0,
      max: 9,
      size: "full",
      round: "small",
      values: values,
      onChange: this.onChange
    })));
  };

  return SimpleRangeSelector;
}(Component);

storiesOf('RangeSelector', module).add('Simple RangeSelector', function () {
  return React.createElement(SimpleRangeSelector, null);
});