'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _react3 = require('@storybook/react');

var _grommetIcons = require('grommet-icons');

var _grommet = require('grommet');

var _themes = require('grommet/themes');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SimpleButton = function SimpleButton(props) {
  return _react2.default.createElement(
    _grommet.Grommet,
    { theme: _themes.grommet },
    _react2.default.createElement(
      _grommet.Box,
      { align: 'start' },
      _react2.default.createElement(_grommet.Button, _extends({ label: 'Submit', onClick: function onClick() {} }, props))
    )
  );
};

var IconButton = function IconButton() {
  return _react2.default.createElement(
    _grommet.Grommet,
    { theme: _themes.grommet },
    _react2.default.createElement(_grommet.Button, { icon: _react2.default.createElement(_grommetIcons.Add, null), hoverIndicator: true, onClick: function onClick() {} })
  );
};

var IconLabelButton = function IconLabelButton() {
  return _react2.default.createElement(
    _grommet.Grommet,
    { theme: _themes.grommet },
    _react2.default.createElement(
      _grommet.Box,
      { align: 'start', gap: 'small' },
      _react2.default.createElement(_grommet.Button, { icon: _react2.default.createElement(_grommetIcons.Add, null), label: 'Add', onClick: function onClick() {}, primary: true }),
      _react2.default.createElement(_grommet.Button, { icon: _react2.default.createElement(_grommetIcons.Add, null), label: 'Add', onClick: function onClick() {} })
    )
  );
};

var PlainButton = function PlainButton(props) {
  return _react2.default.createElement(
    _grommet.Grommet,
    { theme: _themes.grommet },
    _react2.default.createElement(
      _grommet.Button,
      _extends({ hoverIndicator: true, onClick: function onClick() {} }, props),
      _react2.default.createElement(
        _grommet.Box,
        { pad: 'small', direction: 'row', align: 'center', gap: 'small' },
        _react2.default.createElement(_grommetIcons.Add, null),
        _react2.default.createElement(
          _grommet.Text,
          null,
          'Add'
        )
      )
    )
  );
};

var AnchorButton = function AnchorButton() {
  return _react2.default.createElement(
    _grommet.Grommet,
    { theme: _themes.grommet },
    _react2.default.createElement(_grommet.Button, { label: 'Go', href: '#' })
  );
};

var RouteButton = function RouteButton() {
  return _react2.default.createElement(
    _grommet.Grommet,
    { theme: _themes.grommet },
    _react2.default.createElement(_grommet.RoutedButton, { label: 'Go', path: '/' })
  );
};

var customTheme = {
  global: {
    font: {
      family: 'Arial'
    }
  },
  button: {
    border: {
      radius: undefined,
      color: '#2196f3'
    },
    padding: {
      vertical: '12px',
      horizontal: '24px'
    },
    primary: {
      color: '#2196f3'
    },
    extend: function extend(props) {
      var extraStyles = '';
      if (props.primary) {
        extraStyles = '\n          text-transform: uppercase;\n        ';
      }
      return '\n        color: white;\n        font-size: 12px;\n        font-weight: bold;\n\n        ' + extraStyles + '\n      ';
    }
  }
};

var CustomThemeButton = function CustomThemeButton() {
  return _react2.default.createElement(
    _grommet.Grommet,
    { theme: customTheme },
    _react2.default.createElement(_grommet.Button, { label: 'Submit', onClick: function onClick() {}, primary: true })
  );
};

var MultipleButton = function MultipleButton() {
  return _react2.default.createElement(
    _grommet.Grommet,
    { theme: _themes.grommet },
    _react2.default.createElement(
      _grommet.Box,
      { direction: 'row', align: 'center', gap: 'small', pad: 'xsmall' },
      _react2.default.createElement(_grommet.Button, { label: 'Cancel', onClick: function onClick() {} }),
      _react2.default.createElement(_grommet.Button, {
        color: 'dark-1',
        primary: true,
        icon: _react2.default.createElement(_grommetIcons.Add, { color: 'accent-1' }),
        label: 'Add',
        onClick: function onClick() {}
      })
    ),
    _react2.default.createElement(
      _grommet.Box,
      { direction: 'row', align: 'center', gap: 'small', pad: 'xsmall' },
      _react2.default.createElement(_grommet.Button, { label: 'Cancel', onClick: function onClick() {} }),
      _react2.default.createElement(_grommet.Button, {
        color: 'dark-1',
        primary: true,
        icon: _react2.default.createElement(_grommetIcons.Add, null),
        label: 'Add',
        onClick: function onClick() {}
      })
    ),
    _react2.default.createElement(
      _grommet.Box,
      { direction: 'row', align: 'center', gap: 'small', pad: 'xsmall' },
      _react2.default.createElement(_grommet.Button, { label: 'Cancel', onClick: function onClick() {} }),
      _react2.default.createElement(_grommet.Button, {
        primary: true,
        icon: _react2.default.createElement(_grommetIcons.Add, null),
        label: 'Add',
        onClick: function onClick() {}
      })
    ),
    _react2.default.createElement(
      _grommet.Box,
      { direction: 'row', align: 'center', gap: 'small', pad: 'xsmall' },
      _react2.default.createElement(_grommet.Button, { label: 'Cancel', onClick: function onClick() {} }),
      _react2.default.createElement(_grommet.Button, {
        color: 'light-2',
        primary: true,
        icon: _react2.default.createElement(_grommetIcons.Add, null),
        label: 'Add',
        onClick: function onClick() {}
      })
    )
  );
};

(0, _react3.storiesOf)('Button', module).add('Default', function () {
  return _react2.default.createElement(SimpleButton, null);
}).add('Primary', function () {
  return _react2.default.createElement(SimpleButton, { primary: true });
}).add('Icon', function () {
  return _react2.default.createElement(IconButton, null);
}).add('Icon Label', function () {
  return _react2.default.createElement(IconLabelButton, null);
}).add('Plain', function () {
  return _react2.default.createElement(PlainButton, null);
}).add('Anchor', function () {
  return _react2.default.createElement(AnchorButton, null);
}).add('RoutedButton', function () {
  return _react2.default.createElement(RouteButton, null);
}).add('Active', function () {
  return _react2.default.createElement(PlainButton, { active: true });
}).add('Custom theme', function () {
  return _react2.default.createElement(CustomThemeButton, null);
}).add('Multiple Same Line', function () {
  return _react2.default.createElement(MultipleButton, null);
});