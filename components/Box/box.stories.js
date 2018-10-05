'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _react3 = require('@storybook/react');

var _grommetIcons = require('grommet-icons');

var _ = require('../');

var _themes = require('../../themes');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SimpleBox = function (_Component) {
  _inherits(SimpleBox, _Component);

  function SimpleBox() {
    _classCallCheck(this, SimpleBox);

    return _possibleConstructorReturn(this, _Component.apply(this, arguments));
  }

  SimpleBox.prototype.render = function render() {
    return _react2.default.createElement(
      _.Grommet,
      { theme: _themes.grommet },
      _react2.default.createElement(
        _.Box,
        {
          direction: 'row-responsive',
          justify: 'center',
          align: 'center',
          pad: 'xlarge',
          background: 'dark-2',
          gap: 'medium'
        },
        _react2.default.createElement(
          _.Box,
          {
            pad: 'large',
            align: 'center',
            background: { color: 'light-2', opacity: 'strong' },
            round: true,
            gap: 'small'
          },
          _react2.default.createElement(_grommetIcons.Attraction, { size: 'large' }),
          _react2.default.createElement(
            _.Text,
            null,
            'Party'
          ),
          _react2.default.createElement(_.Anchor, { href: '', label: 'Link' }),
          _react2.default.createElement(_.Button, { label: 'Button', onClick: function onClick() {} })
        ),
        _react2.default.createElement(
          _.Box,
          {
            pad: 'large',
            align: 'center',
            background: 'dark-3',
            round: true,
            gap: 'small'
          },
          _react2.default.createElement(_grommetIcons.Car, { size: 'large', color: 'light-2' }),
          _react2.default.createElement(
            _.Text,
            null,
            'Travel'
          ),
          _react2.default.createElement(_.Anchor, { href: '', label: 'Link' }),
          _react2.default.createElement(_.Button, { label: 'Button', onClick: function onClick() {} })
        )
      )
    );
  };

  return SimpleBox;
}(_react.Component);

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
    return _react2.default.createElement(
      _.Grommet,
      { theme: customColorBox },
      _react2.default.createElement(
        _.Box,
        {
          justify: 'center',
          align: 'center',
          pad: 'xlarge',
          background: { color: 'brand-gradient', dark: true },
          round: 'large'
        },
        _react2.default.createElement(
          _.Text,
          null,
          'I have a linear gradient background'
        )
      )
    );
  };

  return CustomColorBox;
}(_react.Component);

var FixedSizesBox = function (_Component3) {
  _inherits(FixedSizesBox, _Component3);

  function FixedSizesBox() {
    _classCallCheck(this, FixedSizesBox);

    return _possibleConstructorReturn(this, _Component3.apply(this, arguments));
  }

  FixedSizesBox.prototype.render = function render() {
    return _react2.default.createElement(
      _.Grommet,
      { theme: _themes.grommet },
      _react2.default.createElement(
        _.Box,
        { pad: 'small', gap: 'small' },
        _react2.default.createElement(
          _.Box,
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
        _react2.default.createElement(
          _.Box,
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
        _react2.default.createElement(
          _.Box,
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
}(_react.Component);

var BorderBox = function (_Component4) {
  _inherits(BorderBox, _Component4);

  function BorderBox() {
    _classCallCheck(this, BorderBox);

    return _possibleConstructorReturn(this, _Component4.apply(this, arguments));
  }

  BorderBox.prototype.render = function render() {
    return _react2.default.createElement(
      _.Grommet,
      { theme: _themes.grommet },
      _react2.default.createElement(
        _.Box,
        { pad: 'small', gap: 'small', align: 'start' },
        _react2.default.createElement(
          _.Box,
          { pad: 'small', border: true },
          'true'
        ),
        _react2.default.createElement(
          _.Box,
          { direction: 'row-responsive', gap: 'small' },
          ['horizontal', 'vertical', 'left', 'top', 'right', 'bottom'].map(function (border) {
            return _react2.default.createElement(
              _.Box,
              { key: border, pad: 'small', border: border },
              border
            );
          })
        ),
        _react2.default.createElement(
          _.Box,
          { pad: 'small', border: { color: 'brand' } },
          'color'
        ),
        _react2.default.createElement(
          _.Box,
          { direction: 'row-responsive', gap: 'small', align: 'start' },
          ['small', 'medium', 'large'].map(function (size) {
            return _react2.default.createElement(
              _.Box,
              { key: size, pad: 'small', border: { size: size } },
              size
            );
          })
        )
      )
    );
  };

  return BorderBox;
}(_react.Component);

var RoundBox = function (_Component5) {
  _inherits(RoundBox, _Component5);

  function RoundBox() {
    _classCallCheck(this, RoundBox);

    return _possibleConstructorReturn(this, _Component5.apply(this, arguments));
  }

  RoundBox.prototype.render = function render() {
    return _react2.default.createElement(
      _.Grommet,
      { theme: _themes.grommet },
      _react2.default.createElement(
        _.Box,
        { pad: 'small', gap: 'small' },
        _react2.default.createElement(
          _.Box,
          { pad: 'small', background: 'brand', round: true, alignSelf: 'start' },
          'true'
        ),
        _react2.default.createElement(
          _.Grid,
          { columns: 'small', gap: 'small' },
          ['xsmall', 'small', 'medium', 'large', 'xlarge', 'full'].map(function (size) {
            return _react2.default.createElement(
              _.Box,
              { key: size, pad: 'large', background: 'brand', round: { size: size } },
              size
            );
          })
        ),
        _react2.default.createElement(
          _.Grid,
          { columns: 'small', gap: 'small' },
          ['left', 'top', 'right', 'bottom', 'top-left', 'top-right', 'bottom-left', 'bottom-right'].map(function (corner) {
            return _react2.default.createElement(
              _.Box,
              { key: corner, pad: 'small', background: 'brand', round: { corner: corner } },
              corner
            );
          })
        )
      )
    );
  };

  return RoundBox;
}(_react.Component);

var BackgroundBox = function (_Component6) {
  _inherits(BackgroundBox, _Component6);

  function BackgroundBox() {
    _classCallCheck(this, BackgroundBox);

    return _possibleConstructorReturn(this, _Component6.apply(this, arguments));
  }

  BackgroundBox.prototype.render = function render() {
    return _react2.default.createElement(
      _.Grommet,
      { theme: _themes.grommet },
      _react2.default.createElement(
        _.Box,
        { pad: 'small', gap: 'small', align: 'start' },
        _react2.default.createElement(
          _.Box,
          { pad: 'small', background: 'brand' },
          'brand'
        ),
        _react2.default.createElement(
          _.Box,
          {
            pad: 'small',
            background: {
              image: 'url(http://librelogo.org/wp-content/uploads/2014/04/gradient2.png)'
            }
          },
          'image'
        ),
        _react2.default.createElement(
          _.Box,
          {
            pad: 'small',
            background: {
              color: 'accent-2',
              image: 'url(http://librelogo.org/wp-content/uploads/2014/04/gradient2.png)'
            }
          },
          'image + color'
        )
      )
    );
  };

  return BackgroundBox;
}(_react.Component);

(0, _react3.storiesOf)('Box', module).add('Simple Box', function () {
  return _react2.default.createElement(SimpleBox, null);
}).add('Custom color', function () {
  return _react2.default.createElement(CustomColorBox, null);
}).add('Fixed sizes', function () {
  return _react2.default.createElement(FixedSizesBox, null);
}).add('Border', function () {
  return _react2.default.createElement(BorderBox, null);
}).add('Round', function () {
  return _react2.default.createElement(RoundBox, null);
}).add('Background', function () {
  return _react2.default.createElement(BackgroundBox, null);
});