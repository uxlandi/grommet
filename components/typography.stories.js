"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _ = require(".");

var _themes = require("../themes");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var paragraphFiller = "\nLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod\ntempor incididunt ut labore et dolore magna aliqua.\n";

var Medium = function Medium() {
  var margin = undefined;
  return _react.default.createElement(_.Grommet, {
    theme: _themes.grommet
  }, _react.default.createElement(_.Box, {
    pad: "medium"
  }, _react.default.createElement("div", null, _react.default.createElement(_.Heading, {
    margin: margin
  }, "Heading 1 - Medium"), _react.default.createElement(_.Text, {
    size: "xlarge"
  }, "Text XLarge"), _react.default.createElement(_.Paragraph, {
    size: "large",
    margin: margin
  }, "Paragraph - Large", paragraphFiller), _react.default.createElement(_.Heading, {
    level: 2,
    margin: margin
  }, "Heading 2 - Medium"), _react.default.createElement(_.Text, {
    size: "large"
  }, "Text Large"), _react.default.createElement(_.Paragraph, {
    margin: margin
  }, "Paragraph - Medium", paragraphFiller), _react.default.createElement(_.Heading, {
    level: 3,
    margin: margin
  }, "Heading 3 - Medium"), _react.default.createElement(_.Text, null, "Text Medium"), _react.default.createElement(_.Paragraph, {
    margin: margin
  }, "Paragraph - Medium", paragraphFiller), _react.default.createElement(_.Heading, {
    level: 4,
    margin: margin
  }, "Heading 4 - Medium"), _react.default.createElement(_.Text, {
    size: "small"
  }, "Text Small"), _react.default.createElement(_.Paragraph, {
    size: "small",
    margin: margin
  }, "Paragraph - Small", paragraphFiller))));
};

var Small = function Small() {
  return _react.default.createElement(_.Grommet, {
    theme: _themes.grommet
  }, _react.default.createElement(_.Box, {
    pad: "medium"
  }, _react.default.createElement("div", null, _react.default.createElement(_.Heading, {
    size: "small"
  }, "Heading 1 - Small"), _react.default.createElement(_.Text, {
    size: "large"
  }, "Text Large"), _react.default.createElement(_.Paragraph, null, "Paragraph - Medium", paragraphFiller), _react.default.createElement(_.Heading, {
    level: 2,
    size: "small"
  }, "Heading 2 - Small"), _react.default.createElement(_.Text, null, "Text Medium"), _react.default.createElement(_.Paragraph, null, "Paragraph - Medium", paragraphFiller), _react.default.createElement(_.Heading, {
    level: 3,
    size: "small"
  }, "Heading 3 - Small"), _react.default.createElement(_.Text, null, "Text Medium"), _react.default.createElement(_.Paragraph, {
    size: "small"
  }, "Paragraph - Small", paragraphFiller), _react.default.createElement(_.Heading, {
    level: 4,
    size: "small"
  }, "Heading 4 - Small"), _react.default.createElement(_.Text, {
    size: "small"
  }, "Text Small"), _react.default.createElement(_.Paragraph, {
    size: "small"
  }, "Paragraph - Small", paragraphFiller))));
};

var Large = function Large() {
  return _react.default.createElement(_.Grommet, {
    theme: _themes.grommet
  }, _react.default.createElement(_.Box, {
    pad: "medium"
  }, _react.default.createElement("div", null, _react.default.createElement(_.Heading, {
    size: "large"
  }, "Heading 1 - Large"), _react.default.createElement(_.Text, {
    size: "xxlarge"
  }, "Text XXLarge"), _react.default.createElement(_.Paragraph, {
    size: "xlarge"
  }, "Paragraph - XLarge", paragraphFiller), _react.default.createElement(_.Heading, {
    level: 2,
    size: "large"
  }, "Heading 2 - Large"), _react.default.createElement(_.Text, {
    size: "xlarge"
  }, "Text XLarge"), _react.default.createElement(_.Paragraph, {
    size: "large"
  }, "Paragraph - Large", paragraphFiller), _react.default.createElement(_.Heading, {
    level: 3,
    size: "large"
  }, "Heading 3 - Large"), _react.default.createElement(_.Text, {
    size: "large"
  }, "Text Large"), _react.default.createElement(_.Paragraph, null, "Paragraph - Medium", paragraphFiller), _react.default.createElement(_.Heading, {
    level: 4,
    size: "large"
  }, "Heading 4 - Large"), _react.default.createElement(_.Text, null, "Text Medium"), _react.default.createElement(_.Paragraph, null, "Paragraph - Medium", paragraphFiller))));
};

(0, _react2.storiesOf)('Typography', module).add('Small', function () {
  return _react.default.createElement(Small, null);
}).add('Medium', function () {
  return _react.default.createElement(Medium, null);
}).add('Large', function () {
  return _react.default.createElement(Large, null);
});