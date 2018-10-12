"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _grommetIcons = require("grommet-icons");

var _grommet = require("grommet");

var _themes = require("grommet/themes");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _react2.storiesOf)('Anchor', module).add('Default', function () {
  return _react.default.createElement(_grommet.Grommet, {
    theme: _themes.grommet
  }, _react.default.createElement(_grommet.Anchor, {
    href: "#"
  }, "Link"));
}).add('Icon', function () {
  return _react.default.createElement(_grommet.Grommet, {
    theme: _themes.grommet
  }, _react.default.createElement(_grommet.Anchor, {
    icon: _react.default.createElement(_grommetIcons.Add, null),
    label: "Add",
    href: "#"
  }));
}).add('With Text', function () {
  return _react.default.createElement(_grommet.Grommet, {
    theme: _themes.grommet
  }, "This is a ", _react.default.createElement(_grommet.Anchor, {
    label: "link",
    href: "#"
  }), " with text.");
});