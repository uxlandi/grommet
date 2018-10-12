import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';
import { Grommet, Calendar } from '../..';
var DATE = '2018-01-15T00:00:00-08:00';
var DATES = ['2018-01-12T00:00:00-08:00', ['2018-01-8T00:00:00-08:00', '2018-01-10T00:00:00-08:00']];
test('Calendar renders', function () {
  // need to set the date to avoid snapshot drift over time
  var component = renderer.create(React.createElement(Grommet, null, React.createElement(Calendar, {
    date: DATE
  })));
  var tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
test('Calendar date renders', function () {
  var component = renderer.create(React.createElement(Grommet, null, React.createElement(Calendar, {
    date: DATE
  })));
  var tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
test('Calendar dates renders', function () {
  var component = renderer.create(React.createElement(Grommet, null, React.createElement(Calendar, {
    dates: DATES
  })));
  var tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
test('Calendar disabled renders', function () {
  var component = renderer.create(React.createElement(Grommet, null, React.createElement(Calendar, {
    dates: DATES
  })));
  var tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
test('Calendar size renders', function () {
  var component = renderer.create(React.createElement(Grommet, null, React.createElement(Calendar, {
    size: "small",
    date: DATE
  }), React.createElement(Calendar, {
    size: "medium",
    date: DATE
  }), React.createElement(Calendar, {
    size: "large",
    date: DATE
  })));
  var tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
test('Calendar firstDayOfWeek renders', function () {
  var component = renderer.create(React.createElement(Grommet, null, React.createElement(Calendar, {
    firstDayOfWeek: 0,
    date: DATE
  }), React.createElement(Calendar, {
    firstDayOfWeek: 1,
    date: DATE
  })));
  var tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});