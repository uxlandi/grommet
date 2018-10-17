"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _grommet = require("grommet");

var _grommetIcons = require("grommet-icons");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var customTheme = {
  global: {
    colors: {
      custom: '#cc6633'
    }
  }
};

var Themed = function Themed() {
  return _react.default.createElement(_grommet.Grommet, {
    theme: customTheme
  }, _react.default.createElement(_grommet.Box, {
    pad: "medium"
  }, _react.default.createElement(_grommet.Anchor, {
    icon: _react.default.createElement(_grommetIcons.Add, null),
    label: "Add",
    color: "custom"
  })));
};

(0, _react2.storiesOf)('Grommet', module).add('Theme', function () {
  return _react.default.createElement(Themed, null);
});