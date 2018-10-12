import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';
import { Grommet } from '../../Grommet';
import { TextArea } from '..';
jest.mock('react-dom');
test('TextArea renders', function () {
  var component = renderer.create(React.createElement(Grommet, null, React.createElement(TextArea, {
    id: "item",
    name: "item"
  })));
  var tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
test('TextArea placeholder renders', function () {
  var component = renderer.create(React.createElement(Grommet, null, React.createElement(TextArea, {
    id: "item",
    name: "item",
    placeholder: "placeholder"
  })));
  var tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
test('TextArea plain renders', function () {
  var component = renderer.create(React.createElement(Grommet, null, React.createElement(TextArea, {
    id: "item",
    name: "item",
    plain: true
  })));
  var tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
test('TextArea focusIndicator renders', function () {
  var component = renderer.create(React.createElement(Grommet, null, React.createElement(TextArea, {
    id: "item",
    name: "item",
    focusIndicator: true
  })));
  var tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});