function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { Component } from 'react';
import { storiesOf } from '@storybook/react';
import { Attraction } from 'grommet-icons/es6/icons/Attraction';
import { Car } from 'grommet-icons/es6/icons/Car';
import { TreeOption } from 'grommet-icons/es6/icons/TreeOption';


import { Grommet, Box, Tab, Tabs } from '../';
import { grommet } from '../../themes';

var UncontrolledTabs = function UncontrolledTabs() {
  return React.createElement(
    Grommet,
    { theme: grommet },
    React.createElement(
      Tabs,
      null,
      React.createElement(
        Tab,
        { title: 'Tab 1' },
        React.createElement(
          Box,
          { margin: 'small', pad: 'large', align: 'center', background: 'accent-1' },
          React.createElement(Attraction, { size: 'xlarge' })
        )
      ),
      React.createElement(
        Tab,
        { title: 'Tab 2' },
        React.createElement(
          Box,
          { margin: 'small', pad: 'large', align: 'center', background: 'accent-2' },
          React.createElement(TreeOption, { size: 'xlarge' })
        )
      ),
      React.createElement(
        Tab,
        { title: 'Tab 3' },
        React.createElement(
          Box,
          { margin: 'small', pad: 'large', align: 'center', background: 'accent-3' },
          React.createElement(Car, { size: 'xlarge' })
        )
      )
    )
  );
};

var ControlledTabs = function (_Component) {
  _inherits(ControlledTabs, _Component);

  function ControlledTabs() {
    var _temp, _this, _ret;

    _classCallCheck(this, ControlledTabs);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.state = {}, _this.onActive = function (index) {
      return _this.setState({ index: index });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  ControlledTabs.prototype.render = function render() {
    var index = this.state.index;

    return React.createElement(
      Grommet,
      { theme: grommet },
      React.createElement(
        Tabs,
        { activeIndex: index, onActive: this.onActive },
        React.createElement(
          Tab,
          { title: 'Tab 1' },
          React.createElement(
            Box,
            { margin: 'small', pad: 'large', align: 'center', background: 'accent-1' },
            React.createElement(Attraction, { size: 'xlarge' })
          )
        ),
        React.createElement(
          Tab,
          { title: 'Tab 2' },
          React.createElement(
            Box,
            { margin: 'small', pad: 'large', align: 'center', background: 'accent-2' },
            React.createElement(TreeOption, { size: 'xlarge' })
          )
        ),
        React.createElement(
          Tab,
          { title: 'Tab 3' },
          React.createElement(
            Box,
            { margin: 'small', pad: 'large', align: 'center', background: 'accent-3' },
            React.createElement(Car, { size: 'xlarge' })
          )
        )
      )
    );
  };

  return ControlledTabs;
}(Component);

var ResponsiveTabs = function (_Component2) {
  _inherits(ResponsiveTabs, _Component2);

  function ResponsiveTabs() {
    var _temp2, _this2, _ret2;

    _classCallCheck(this, ResponsiveTabs);

    for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    return _ret2 = (_temp2 = (_this2 = _possibleConstructorReturn(this, _Component2.call.apply(_Component2, [this].concat(args))), _this2), _this2.state = {}, _this2.onActive = function (index) {
      return _this2.setState({ index: index });
    }, _temp2), _possibleConstructorReturn(_this2, _ret2);
  }

  ResponsiveTabs.prototype.render = function render() {
    var index = this.state.index;

    return React.createElement(
      Grommet,
      { theme: grommet },
      React.createElement(
        Tabs,
        { activeIndex: index, onActive: this.onActive },
        React.createElement(
          Tab,
          { title: 'Tab 1' },
          React.createElement(
            Box,
            { margin: 'small', pad: 'large', align: 'center', background: 'accent-1' },
            React.createElement(Attraction, { size: 'xlarge' })
          )
        ),
        React.createElement(
          Tab,
          { title: 'Tab 2' },
          React.createElement(
            Box,
            { margin: 'small', pad: 'large', align: 'center', background: 'accent-2' },
            React.createElement(TreeOption, { size: 'xlarge' })
          )
        ),
        React.createElement(
          Tab,
          { title: 'Tab 3' },
          React.createElement(
            Box,
            { margin: 'small', pad: 'large', align: 'center', background: 'accent-3' },
            React.createElement(Car, { size: 'xlarge' })
          )
        ),
        React.createElement(
          Tab,
          { title: 'Tab 4' },
          React.createElement(
            Box,
            { margin: 'small', pad: 'large', align: 'center', background: 'accent-1' },
            React.createElement(Attraction, { size: 'xlarge' })
          )
        ),
        React.createElement(
          Tab,
          { title: 'Tab 5' },
          React.createElement(
            Box,
            { margin: 'small', pad: 'large', align: 'center', background: 'accent-2' },
            React.createElement(TreeOption, { size: 'xlarge' })
          )
        ),
        React.createElement(
          Tab,
          { title: 'Tab 6' },
          React.createElement(
            Box,
            { margin: 'small', pad: 'large', align: 'center', background: 'accent-3' },
            React.createElement(Car, { size: 'xlarge' })
          )
        ),
        React.createElement(
          Tab,
          { title: 'Tab 7' },
          React.createElement(
            Box,
            { margin: 'small', pad: 'large', align: 'center', background: 'accent-1' },
            React.createElement(Attraction, { size: 'xlarge' })
          )
        ),
        React.createElement(
          Tab,
          { title: 'Tab 8' },
          React.createElement(
            Box,
            { margin: 'small', pad: 'large', align: 'center', background: 'accent-2' },
            React.createElement(TreeOption, { size: 'xlarge' })
          )
        ),
        React.createElement(
          Tab,
          { title: 'Tab 9' },
          React.createElement(
            Box,
            { margin: 'small', pad: 'large', align: 'center', background: 'accent-3' },
            React.createElement(Car, { size: 'xlarge' })
          )
        ),
        React.createElement(
          Tab,
          { title: 'Tab 10' },
          React.createElement(
            Box,
            { margin: 'small', pad: 'large', align: 'center', background: 'accent-1' },
            React.createElement(Attraction, { size: 'xlarge' })
          )
        ),
        React.createElement(
          Tab,
          { title: 'Tab 11' },
          React.createElement(
            Box,
            { margin: 'small', pad: 'large', align: 'center', background: 'accent-1' },
            React.createElement(Attraction, { size: 'xlarge' })
          )
        ),
        React.createElement(
          Tab,
          { title: 'Tab 12' },
          React.createElement(
            Box,
            { margin: 'small', pad: 'large', align: 'center', background: 'accent-2' },
            React.createElement(TreeOption, { size: 'xlarge' })
          )
        ),
        React.createElement(
          Tab,
          { title: 'Tab 13' },
          React.createElement(
            Box,
            { margin: 'small', pad: 'large', align: 'center', background: 'accent-3' },
            React.createElement(Car, { size: 'xlarge' })
          )
        ),
        React.createElement(
          Tab,
          { title: 'Tab 14' },
          React.createElement(
            Box,
            { margin: 'small', pad: 'large', align: 'center', background: 'accent-1' },
            React.createElement(Attraction, { size: 'xlarge' })
          )
        ),
        React.createElement(
          Tab,
          { title: 'Tab 15' },
          React.createElement(
            Box,
            { margin: 'small', pad: 'large', align: 'center', background: 'accent-2' },
            React.createElement(TreeOption, { size: 'xlarge' })
          )
        ),
        React.createElement(
          Tab,
          { title: 'Tab 16' },
          React.createElement(
            Box,
            { margin: 'small', pad: 'large', align: 'center', background: 'accent-3' },
            React.createElement(Car, { size: 'xlarge' })
          )
        ),
        React.createElement(
          Tab,
          { title: 'Tab 17' },
          React.createElement(
            Box,
            { margin: 'small', pad: 'large', align: 'center', background: 'accent-1' },
            React.createElement(Attraction, { size: 'xlarge' })
          )
        ),
        React.createElement(
          Tab,
          { title: 'Tab 18' },
          React.createElement(
            Box,
            { margin: 'small', pad: 'large', align: 'center', background: 'accent-2' },
            React.createElement(TreeOption, { size: 'xlarge' })
          )
        ),
        React.createElement(
          Tab,
          { title: 'Tab 19' },
          React.createElement(
            Box,
            { margin: 'small', pad: 'large', align: 'center', background: 'accent-3' },
            React.createElement(Car, { size: 'xlarge' })
          )
        ),
        React.createElement(
          Tab,
          { title: 'Tab 20' },
          React.createElement(
            Box,
            { margin: 'small', pad: 'large', align: 'center', background: 'accent-1' },
            React.createElement(Attraction, { size: 'xlarge' })
          )
        )
      )
    );
  };

  return ResponsiveTabs;
}(Component);

storiesOf('Tabs', module).add('Uncontrolled Tabs', function () {
  return React.createElement(UncontrolledTabs, null);
}).add('Controlled Tabs', function () {
  return React.createElement(ControlledTabs, null);
}).add('Responsive Tabs', function () {
  return React.createElement(ResponsiveTabs, null);
});