"use strict";

var _react = _interopRequireWildcard(require("react"));

var _react2 = require("@storybook/react");

var _grommet = require("grommet");

var _themes = require("grommet/themes");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var SimpleRangeSelector =
/*#__PURE__*/
function (_Component) {
  _inheritsLoose(SimpleRangeSelector, _Component);

  function SimpleRangeSelector() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _Component.call.apply(_Component, [this].concat(args)) || this;

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      values: [2, 8]
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onChange", function (values) {
      return _this.setState({
        values: values
      });
    });

    return _this;
  }

  var _proto = SimpleRangeSelector.prototype;

  _proto.render = function render() {
    var values = this.state.values;
    return _react.default.createElement(_grommet.Grommet, {
      theme: _themes.grommet
    }, _react.default.createElement(_grommet.Stack, null, _react.default.createElement(_grommet.Box, {
      direction: "row",
      justify: "between"
    }, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map(function (value) {
      return _react.default.createElement(_grommet.Box, {
        key: value,
        pad: "small",
        border: false
      }, _react.default.createElement(_grommet.Text, {
        style: {
          fontFamily: 'monospace'
        }
      }, value));
    })), _react.default.createElement(_grommet.RangeSelector, {
      direction: "horizontal",
      invert: false,
      min: 0,
      max: 9,
      size: "full",
      round: "small",
      values: values,
      onChange: this.onChange
    })));
  };

  return SimpleRangeSelector;
}(_react.Component);

(0, _react2.storiesOf)('RangeSelector', module).add('Simple RangeSelector', function () {
  return _react.default.createElement(SimpleRangeSelector, null);
});