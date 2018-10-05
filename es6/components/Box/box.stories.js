function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { Component } from 'react';
import { storiesOf } from '@storybook/react';
import { Attraction } from 'grommet-icons/es6/icons/Attraction';
import { Car } from 'grommet-icons/es6/icons/Car';
import { TreeOption } from 'grommet-icons/es6/icons/TreeOption';


import { Grommet, Anchor, Box, Button, Grid, Text } from '../';
import { grommet } from '../../themes';

var SimpleBox = function (_Component) {
  _inherits(SimpleBox, _Component);

  function SimpleBox() {
    _classCallCheck(this, SimpleBox);

    return _possibleConstructorReturn(this, _Component.apply(this, arguments));
  }

  SimpleBox.prototype.render = function render() {
    return React.createElement(
      Grommet,
      { theme: grommet },
      React.createElement(
        Box,
        {
          direction: 'row-responsive',
          justify: 'center',
          align: 'center',
          pad: 'xlarge',
          background: 'dark-2'
        },
        React.createElement(
          Box,
          {
            pad: 'xlarge',
            align: 'center',
            background: { color: 'light-2', opacity: 'strong' }
          },
          React.createElement(Attraction, { size: 'xlarge' }),
          React.createElement(
            Text,
            null,
            'Party'
          ),
          React.createElement(Anchor, { href: '', label: 'Link' }),
          React.createElement(Button, { label: 'Button', onClick: function onClick() {} })
        ),
        React.createElement(
          Box,
          {
            pad: 'xlarge',
            align: 'center',
            background: { color: 'accent-2', opacity: 'weak' }
          },
          React.createElement(TreeOption, { size: 'xlarge' }),
          React.createElement(
            Text,
            null,
            'Nature'
          ),
          React.createElement(Anchor, { href: '', label: 'Link' }),
          React.createElement(Button, { label: 'Button', onClick: function onClick() {} })
        ),
        React.createElement(
          Box,
          { pad: 'xlarge', align: 'center', background: 'dark-3' },
          React.createElement(Car, { size: 'xlarge', color: 'light-2' }),
          React.createElement(
            Text,
            null,
            'Travel'
          ),
          React.createElement(Anchor, { href: '', label: 'Link' }),
          React.createElement(Button, { label: 'Button', onClick: function onClick() {} })
        )
      )
    );
  };

  return SimpleBox;
}(Component);

var customColorBox = {
  global: {
    colors: {
      'brand-gradient': 'linear-gradient(102.77deg, #865ED6 -9.18%, #18BAB9 209.09%)'
    },
    font: {
      family: 'Arial'
    }
  }
};

var CustomColorBox = function (_Component2) {
  _inherits(CustomColorBox, _Component2);

  function CustomColorBox() {
    _classCallCheck(this, CustomColorBox);

    return _possibleConstructorReturn(this, _Component2.apply(this, arguments));
  }

  CustomColorBox.prototype.render = function render() {
    return React.createElement(
      Grommet,
      { theme: customColorBox },
      React.createElement(
        Box,
        {
          justify: 'center',
          align: 'center',
          pad: 'xlarge',
          background: { color: 'brand-gradient', dark: true },
          round: 'large'
        },
        React.createElement(
          Text,
          null,
          'I have a linear gradient background'
        )
      )
    );
  };

  return CustomColorBox;
}(Component);

var FixedSizesBox = function (_Component3) {
  _inherits(FixedSizesBox, _Component3);

  function FixedSizesBox() {
    _classCallCheck(this, FixedSizesBox);

    return _possibleConstructorReturn(this, _Component3.apply(this, arguments));
  }

  FixedSizesBox.prototype.render = function render() {
    return React.createElement(
      Grommet,
      { theme: grommet },
      React.createElement(
        Box,
        { pad: 'small', gap: 'small' },
        React.createElement(
          Box,
          {
            width: 'small',
            height: 'small',
            round: 'small',
            align: 'center',
            justify: 'center',
            background: 'brand'
          },
          'Small'
        ),
        React.createElement(
          Box,
          {
            width: 'medium',
            height: 'medium',
            round: 'small',
            align: 'center',
            justify: 'center',
            background: 'brand'
          },
          'Medium'
        ),
        React.createElement(
          Box,
          {
            width: 'large',
            height: 'large',
            round: 'small',
            align: 'center',
            justify: 'center',
            background: 'brand'
          },
          'Large'
        )
      )
    );
  };

  return FixedSizesBox;
}(Component);

var BorderBox = function (_Component4) {
  _inherits(BorderBox, _Component4);

  function BorderBox() {
    _classCallCheck(this, BorderBox);

    return _possibleConstructorReturn(this, _Component4.apply(this, arguments));
  }

  BorderBox.prototype.render = function render() {
    return React.createElement(
      Grommet,
      { theme: grommet },
      React.createElement(
        Box,
        { pad: 'small', gap: 'small', align: 'start' },
        React.createElement(
          Box,
          { pad: 'small', border: true },
          'true'
        ),
        React.createElement(
          Box,
          { direction: 'row-responsive', gap: 'small' },
          ['horizontal', 'vertical', 'left', 'top', 'right', 'bottom'].map(function (border) {
            return React.createElement(
              Box,
              { pad: 'small', border: border },
              border
            );
          })
        ),
        React.createElement(
          Box,
          { pad: 'small', border: { color: 'brand' } },
          'color'
        ),
        React.createElement(
          Box,
          { direction: 'row-responsive', gap: 'small', align: 'start' },
          ['small', 'medium', 'large'].map(function (size) {
            return React.createElement(
              Box,
              { pad: 'small', border: { size: size } },
              size
            );
          })
        )
      )
    );
  };

  return BorderBox;
}(Component);

var RoundBox = function (_Component5) {
  _inherits(RoundBox, _Component5);

  function RoundBox() {
    _classCallCheck(this, RoundBox);

    return _possibleConstructorReturn(this, _Component5.apply(this, arguments));
  }

  RoundBox.prototype.render = function render() {
    return React.createElement(
      Grommet,
      { theme: grommet },
      React.createElement(
        Box,
        { pad: 'small', gap: 'small' },
        React.createElement(
          Box,
          { pad: 'small', background: 'brand', round: true, alignSelf: 'start' },
          'true'
        ),
        React.createElement(
          Grid,
          { columns: 'small', gap: 'small' },
          ['xsmall', 'small', 'medium', 'large', 'xlarge', 'full'].map(function (size) {
            return React.createElement(
              Box,
              { key: size, pad: 'large', background: 'brand', round: { size: size } },
              size
            );
          })
        ),
        React.createElement(
          Grid,
          { columns: 'small', gap: 'small' },
          ['left', 'top', 'right', 'bottom', 'top-left', 'top-right', 'bottom-left', 'bottom-right'].map(function (corner) {
            return React.createElement(
              Box,
              { key: corner, pad: 'small', background: 'brand', round: { corner: corner } },
              corner
            );
          })
        )
      )
    );
  };

  return RoundBox;
}(Component);

storiesOf('Box', module).add('Simple Box', function () {
  return React.createElement(SimpleBox, null);
}).add('Custom color', function () {
  return React.createElement(CustomColorBox, null);
}).add('Fixed sizes', function () {
  return React.createElement(FixedSizesBox, null);
}).add('Border', function () {
  return React.createElement(BorderBox, null);
}).add('Round', function () {
  return React.createElement(RoundBox, null);
});