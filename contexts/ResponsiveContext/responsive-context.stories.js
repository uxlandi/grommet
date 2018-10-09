'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _react3 = require('@storybook/react');

var _utils = require('grommet/utils');

var _themes = require('grommet/themes');

var _grommet = require('grommet');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var customBreakpoints = (0, _utils.deepMerge)(_themes.grommet, {
  global: {
    breakpoints: {
      medium: 800
    }
  }
});

(0, _react3.storiesOf)('ResponsiveContext', module).add('Custom Breakpoints', function () {
  return _react2.default.createElement(
    _grommet.Grommet,
    { theme: customBreakpoints, full: true },
    _react2.default.createElement(
      _grommet.ResponsiveContext.Consumer,
      null,
      function (size) {
        return _react2.default.createElement(
          _grommet.Box,
          { fill: true, background: 'brand' },
          _react2.default.createElement(
            _grommet.Heading,
            null,
            'Hi, I\'m ',
            size,
            ', resize me!'
          )
        );
      }
    )
  );
});