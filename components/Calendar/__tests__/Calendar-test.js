"use strict";

var _react = _interopRequireDefault(require("react"));

var _reactTestRenderer = _interopRequireDefault(require("react-test-renderer"));

require("jest-styled-components");

var _ = require("../..");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DATE = '2018-01-15T00:00:00-08:00';
var DATES = ['2018-01-12T00:00:00-08:00', ['2018-01-8T00:00:00-08:00', '2018-01-10T00:00:00-08:00']];
test('Calendar renders', function () {
  // need to set the date to avoid snapshot drift over time
  var component = _reactTestRenderer.default.create(_react.default.createElement(_.Grommet, null, _react.default.createElement(_.Calendar, {
    date: DATE
  })));

  var tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
test('Calendar date renders', function () {
  var component = _reactTestRenderer.default.create(_react.default.createElement(_.Grommet, null, _react.default.createElement(_.Calendar, {
    date: DATE
  })));

  var tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
test('Calendar dates renders', function () {
  var component = _reactTestRenderer.default.create(_react.default.createElement(_.Grommet, null, _react.default.createElement(_.Calendar, {
    dates: DATES
  })));

  var tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
test('Calendar disabled renders', function () {
  var component = _reactTestRenderer.default.create(_react.default.createElement(_.Grommet, null, _react.default.createElement(_.Calendar, {
    dates: DATES
  })));

  var tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
test('Calendar size renders', function () {
  var component = _reactTestRenderer.default.create(_react.default.createElement(_.Grommet, null, _react.default.createElement(_.Calendar, {
    size: "small",
    date: DATE
  }), _react.default.createElement(_.Calendar, {
    size: "medium",
    date: DATE
  }), _react.default.createElement(_.Calendar, {
    size: "large",
    date: DATE
  })));

  var tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
test('Calendar firstDayOfWeek renders', function () {
  var component = _reactTestRenderer.default.create(_react.default.createElement(_.Grommet, null, _react.default.createElement(_.Calendar, {
    firstDayOfWeek: 0,
    date: DATE
  }), _react.default.createElement(_.Calendar, {
    firstDayOfWeek: 1,
    date: DATE
  })));

  var tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});