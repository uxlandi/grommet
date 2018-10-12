"use strict";

var _react = _interopRequireDefault(require("react"));

var _reactTestRenderer = _interopRequireDefault(require("react-test-renderer"));

require("jest-styled-components");

var _Grommet = require("../../Grommet");

var _ = require("..");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

jest.mock('react-dom');
test('TextArea renders', function () {
  var component = _reactTestRenderer.default.create(_react.default.createElement(_Grommet.Grommet, null, _react.default.createElement(_.TextArea, {
    id: "item",
    name: "item"
  })));

  var tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
test('TextArea placeholder renders', function () {
  var component = _reactTestRenderer.default.create(_react.default.createElement(_Grommet.Grommet, null, _react.default.createElement(_.TextArea, {
    id: "item",
    name: "item",
    placeholder: "placeholder"
  })));

  var tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
test('TextArea plain renders', function () {
  var component = _reactTestRenderer.default.create(_react.default.createElement(_Grommet.Grommet, null, _react.default.createElement(_.TextArea, {
    id: "item",
    name: "item",
    plain: true
  })));

  var tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
test('TextArea focusIndicator renders', function () {
  var component = _reactTestRenderer.default.create(_react.default.createElement(_Grommet.Grommet, null, _react.default.createElement(_.TextArea, {
    id: "item",
    name: "item",
    focusIndicator: true
  })));

  var tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});