"use strict";

var _react = _interopRequireWildcard(require("react"));

var _react2 = require("@storybook/react");

var _grommet = require("grommet");

var _themes = require("grommet/themes");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var SimpleCalendar =
/*#__PURE__*/
function (_Component) {
  _inheritsLoose(SimpleCalendar, _Component);

  function SimpleCalendar() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _Component.call.apply(_Component, [this].concat(args)) || this;

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {});

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onSelect", function (date) {
      return _this.setState({
        date: date
      });
    });

    return _this;
  }

  var _proto = SimpleCalendar.prototype;

  _proto.render = function render() {
    var date = this.state.date;
    return _react.default.createElement(_grommet.Grommet, {
      theme: _themes.grommet
    }, _react.default.createElement(_grommet.Calendar, {
      date: date,
      onSelect: this.onSelect,
      size: "small",
      bounds: ['2018-09-08', '2018-12-13']
    }));
  };

  return SimpleCalendar;
}(_react.Component);

var RichCalendar =
/*#__PURE__*/
function (_Component2) {
  _inheritsLoose(RichCalendar, _Component2);

  function RichCalendar() {
    var _this2;

    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    _this2 = _Component2.call.apply(_Component2, [this].concat(args)) || this;

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this2)), "state", {});

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this2)), "onSelect", function (selectedDate) {
      var _this2$state = _this2.state,
          date = _this2$state.date,
          dates = _this2$state.dates,
          previousSelectedDate = _this2$state.previousSelectedDate;

      if (!dates) {
        if (!date) {
          _this2.setState({
            date: selectedDate
          });
        } else {
          var priorDate = new Date(date);
          var nextDate = new Date(selectedDate);

          if (priorDate.getTime() < nextDate.getTime()) {
            _this2.setState({
              date: undefined,
              dates: [[date, selectedDate]]
            });
          } else if (priorDate.getTime() > nextDate.getTime()) {
            _this2.setState({
              date: undefined,
              dates: [[selectedDate, date]]
            });
          }
        }
      } else {
        var priorDates = dates[0].map(function (d) {
          return new Date(d);
        });
        var previousDate = new Date(previousSelectedDate);

        var _nextDate = new Date(selectedDate);

        if (_nextDate.getTime() < previousDate.getTime()) {
          if (_nextDate.getTime() < priorDates[0].getTime()) {
            _this2.setState({
              dates: [[selectedDate, dates[0][1]]]
            });
          } else if (_nextDate.getTime() > priorDates[0].getTime()) {
            _this2.setState({
              dates: [[dates[0][0], selectedDate]]
            });
          }
        } else if (_nextDate.getTime() > previousDate.getTime()) {
          if (_nextDate.getTime() > priorDates[1].getTime()) {
            _this2.setState({
              dates: [[dates[0][0], selectedDate]]
            });
          } else if (_nextDate.getTime() < priorDates[1].getTime()) {
            _this2.setState({
              dates: [[selectedDate, dates[0][1]]]
            });
          }
        }
      }

      _this2.setState({
        previousSelectedDate: selectedDate
      });
    });

    return _this2;
  }

  var _proto2 = RichCalendar.prototype;

  _proto2.render = function render() {
    var _this$state = this.state,
        date = _this$state.date,
        dates = _this$state.dates;
    return _react.default.createElement(_grommet.Grommet, {
      theme: _themes.grommet
    }, _react.default.createElement(_grommet.Calendar, {
      date: date,
      dates: dates,
      onSelect: this.onSelect
    }));
  };

  return RichCalendar;
}(_react.Component);

(0, _react2.storiesOf)('Calendar', module).add('Simple Calendar', function () {
  return _react.default.createElement(SimpleCalendar, null);
}).add('Range Calendar', function () {
  return _react.default.createElement(RichCalendar, null);
});