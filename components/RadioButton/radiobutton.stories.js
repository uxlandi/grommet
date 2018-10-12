"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _grommet = require("grommet");

var _themes = require("grommet/themes");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SimpleRadioButton = function SimpleRadioButton() {
  return _react.default.createElement(_grommet.Grommet, {
    theme: _themes.grommet
  }, _react.default.createElement(_grommet.RadioButton, {
    label: "Choice 1",
    name: "radio"
  }), _react.default.createElement(_grommet.RadioButton, {
    label: "Choice 2",
    name: "radio"
  }));
};

(0, _react2.storiesOf)('RadioButton', module).add('Simple RadioButton', function () {
  return _react.default.createElement(SimpleRadioButton, null);
});