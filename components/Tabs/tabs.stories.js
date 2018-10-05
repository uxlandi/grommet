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

var UncontrolledTabs = function UncontrolledTabs() {
  return _react2.default.createElement(
    _.Grommet,
    { theme: _themes.grommet },
    _react2.default.createElement(
      _.Tabs,
      null,
      _react2.default.createElement(
        _.Tab,
        { title: 'Tab 1' },
        _react2.default.createElement(
          _.Box,
          { margin: 'small', pad: 'large', align: 'center', background: 'accent-1' },
          _react2.default.createElement(_grommetIcons.Attraction, { size: 'xlarge' })
        )
      ),
      _react2.default.createElement(
        _.Tab,
        { title: 'Tab 2' },
        _react2.default.createElement(
          _.Box,
          { margin: 'small', pad: 'large', align: 'center', background: 'accent-2' },
          _react2.default.createElement(_grommetIcons.TreeOption, { size: 'xlarge' })
        )
      ),
      _react2.default.createElement(
        _.Tab,
        { title: 'Tab 3' },
        _react2.default.createElement(
          _.Box,
          { margin: 'small', pad: 'large', align: 'center', background: 'accent-3' },
          _react2.default.createElement(_grommetIcons.Car, { size: 'xlarge' })
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

    return _react2.default.createElement(
      _.Grommet,
      { theme: _themes.grommet },
      _react2.default.createElement(
        _.Tabs,
        { activeIndex: index, onActive: this.onActive },
        _react2.default.createElement(
          _.Tab,
          { title: 'Tab 1' },
          _react2.default.createElement(
            _.Box,
            { margin: 'small', pad: 'large', align: 'center', background: 'accent-1' },
            _react2.default.createElement(_grommetIcons.Attraction, { size: 'xlarge' })
          )
        ),
        _react2.default.createElement(
          _.Tab,
          { title: 'Tab 2' },
          _react2.default.createElement(
            _.Box,
            { margin: 'small', pad: 'large', align: 'center', background: 'accent-2' },
            _react2.default.createElement(_grommetIcons.TreeOption, { size: 'xlarge' })
          )
        ),
        _react2.default.createElement(
          _.Tab,
          { title: 'Tab 3' },
          _react2.default.createElement(
            _.Box,
            { margin: 'small', pad: 'large', align: 'center', background: 'accent-3' },
            _react2.default.createElement(_grommetIcons.Car, { size: 'xlarge' })
          )
        )
      )
    );
  };

  return ControlledTabs;
}(_react.Component);

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

    return _react2.default.createElement(
      _.Grommet,
      { theme: _themes.grommet },
      _react2.default.createElement(
        _.Tabs,
        { activeIndex: index, onActive: this.onActive },
        _react2.default.createElement(
          _.Tab,
          { title: 'Tab 1' },
          _react2.default.createElement(
            _.Box,
            { margin: 'small', pad: 'large', align: 'center', background: 'accent-1' },
            _react2.default.createElement(_grommetIcons.Attraction, { size: 'xlarge' })
          )
        ),
        _react2.default.createElement(
          _.Tab,
          { title: 'Tab 2' },
          _react2.default.createElement(
            _.Box,
            { margin: 'small', pad: 'large', align: 'center', background: 'accent-2' },
            _react2.default.createElement(_grommetIcons.TreeOption, { size: 'xlarge' })
          )
        ),
        _react2.default.createElement(
          _.Tab,
          { title: 'Tab 3' },
          _react2.default.createElement(
            _.Box,
            { margin: 'small', pad: 'large', align: 'center', background: 'accent-3' },
            _react2.default.createElement(_grommetIcons.Car, { size: 'xlarge' })
          )
        ),
        _react2.default.createElement(
          _.Tab,
          { title: 'Tab 4' },
          _react2.default.createElement(
            _.Box,
            { margin: 'small', pad: 'large', align: 'center', background: 'accent-1' },
            _react2.default.createElement(_grommetIcons.Attraction, { size: 'xlarge' })
          )
        ),
        _react2.default.createElement(
          _.Tab,
          { title: 'Tab 5' },
          _react2.default.createElement(
            _.Box,
            { margin: 'small', pad: 'large', align: 'center', background: 'accent-2' },
            _react2.default.createElement(_grommetIcons.TreeOption, { size: 'xlarge' })
          )
        ),
        _react2.default.createElement(
          _.Tab,
          { title: 'Tab 6' },
          _react2.default.createElement(
            _.Box,
            { margin: 'small', pad: 'large', align: 'center', background: 'accent-3' },
            _react2.default.createElement(_grommetIcons.Car, { size: 'xlarge' })
          )
        ),
        _react2.default.createElement(
          _.Tab,
          { title: 'Tab 7' },
          _react2.default.createElement(
            _.Box,
            { margin: 'small', pad: 'large', align: 'center', background: 'accent-1' },
            _react2.default.createElement(_grommetIcons.Attraction, { size: 'xlarge' })
          )
        ),
        _react2.default.createElement(
          _.Tab,
          { title: 'Tab 8' },
          _react2.default.createElement(
            _.Box,
            { margin: 'small', pad: 'large', align: 'center', background: 'accent-2' },
            _react2.default.createElement(_grommetIcons.TreeOption, { size: 'xlarge' })
          )
        ),
        _react2.default.createElement(
          _.Tab,
          { title: 'Tab 9' },
          _react2.default.createElement(
            _.Box,
            { margin: 'small', pad: 'large', align: 'center', background: 'accent-3' },
            _react2.default.createElement(_grommetIcons.Car, { size: 'xlarge' })
          )
        ),
        _react2.default.createElement(
          _.Tab,
          { title: 'Tab 10' },
          _react2.default.createElement(
            _.Box,
            { margin: 'small', pad: 'large', align: 'center', background: 'accent-1' },
            _react2.default.createElement(_grommetIcons.Attraction, { size: 'xlarge' })
          )
        ),
        _react2.default.createElement(
          _.Tab,
          { title: 'Tab 11' },
          _react2.default.createElement(
            _.Box,
            { margin: 'small', pad: 'large', align: 'center', background: 'accent-1' },
            _react2.default.createElement(_grommetIcons.Attraction, { size: 'xlarge' })
          )
        ),
        _react2.default.createElement(
          _.Tab,
          { title: 'Tab 12' },
          _react2.default.createElement(
            _.Box,
            { margin: 'small', pad: 'large', align: 'center', background: 'accent-2' },
            _react2.default.createElement(_grommetIcons.TreeOption, { size: 'xlarge' })
          )
        ),
        _react2.default.createElement(
          _.Tab,
          { title: 'Tab 13' },
          _react2.default.createElement(
            _.Box,
            { margin: 'small', pad: 'large', align: 'center', background: 'accent-3' },
            _react2.default.createElement(_grommetIcons.Car, { size: 'xlarge' })
          )
        ),
        _react2.default.createElement(
          _.Tab,
          { title: 'Tab 14' },
          _react2.default.createElement(
            _.Box,
            { margin: 'small', pad: 'large', align: 'center', background: 'accent-1' },
            _react2.default.createElement(_grommetIcons.Attraction, { size: 'xlarge' })
          )
        ),
        _react2.default.createElement(
          _.Tab,
          { title: 'Tab 15' },
          _react2.default.createElement(
            _.Box,
            { margin: 'small', pad: 'large', align: 'center', background: 'accent-2' },
            _react2.default.createElement(_grommetIcons.TreeOption, { size: 'xlarge' })
          )
        ),
        _react2.default.createElement(
          _.Tab,
          { title: 'Tab 16' },
          _react2.default.createElement(
            _.Box,
            { margin: 'small', pad: 'large', align: 'center', background: 'accent-3' },
            _react2.default.createElement(_grommetIcons.Car, { size: 'xlarge' })
          )
        ),
        _react2.default.createElement(
          _.Tab,
          { title: 'Tab 17' },
          _react2.default.createElement(
            _.Box,
            { margin: 'small', pad: 'large', align: 'center', background: 'accent-1' },
            _react2.default.createElement(_grommetIcons.Attraction, { size: 'xlarge' })
          )
        ),
        _react2.default.createElement(
          _.Tab,
          { title: 'Tab 18' },
          _react2.default.createElement(
            _.Box,
            { margin: 'small', pad: 'large', align: 'center', background: 'accent-2' },
            _react2.default.createElement(_grommetIcons.TreeOption, { size: 'xlarge' })
          )
        ),
        _react2.default.createElement(
          _.Tab,
          { title: 'Tab 19' },
          _react2.default.createElement(
            _.Box,
            { margin: 'small', pad: 'large', align: 'center', background: 'accent-3' },
            _react2.default.createElement(_grommetIcons.Car, { size: 'xlarge' })
          )
        ),
        _react2.default.createElement(
          _.Tab,
          { title: 'Tab 20' },
          _react2.default.createElement(
            _.Box,
            { margin: 'small', pad: 'large', align: 'center', background: 'accent-1' },
            _react2.default.createElement(_grommetIcons.Attraction, { size: 'xlarge' })
          )
        )
      )
    );
  };

  return ResponsiveTabs;
}(_react.Component);

var RichTabTitle = function RichTabTitle(_ref) {
  var icon = _ref.icon,
      label = _ref.label;
  return _react2.default.createElement(
    _.Box,
    { direction: 'row', align: 'center', gap: 'xsmall', margin: 'xsmall' },
    icon,
    _react2.default.createElement(
      _.Text,
      { size: 'small' },
      _react2.default.createElement(
        'strong',
        null,
        label
      )
    )
  );
};

var RichTabs = function RichTabs() {
  return _react2.default.createElement(
    _.Grommet,
    { theme: _themes.grommet },
    _react2.default.createElement(
      _.Tabs,
      null,
      _react2.default.createElement(
        _.Tab,
        { title: _react2.default.createElement(RichTabTitle, { icon: _react2.default.createElement(_grommetIcons.CircleInformation, { color: 'accent-1' }), label: 'Personal Data' }) },
        _react2.default.createElement(
          _.FormField,
          { label: 'Name' },
          _react2.default.createElement(_.TextInput, { placeholder: 'Enter your name...' })
        )
      ),
      _react2.default.createElement(
        _.Tab,
        { title: _react2.default.createElement(RichTabTitle, { icon: _react2.default.createElement(_grommetIcons.Currency, { color: 'neutral-5' }), label: 'Payment' }) },
        _react2.default.createElement(
          _.FormField,
          { label: 'Card Number' },
          _react2.default.createElement(_.TextInput, { placeholder: 'Enter your card number...' })
        )
      )
    )
  );
};

(0, _react3.storiesOf)('Tabs', module).add('Uncontrolled Tabs', function () {
  return _react2.default.createElement(UncontrolledTabs, null);
}).add('Controlled Tabs', function () {
  return _react2.default.createElement(ControlledTabs, null);
}).add('Responsive Tabs', function () {
  return _react2.default.createElement(ResponsiveTabs, null);
}).add('Rich Tabs', function () {
  return _react2.default.createElement(RichTabs, null);
});