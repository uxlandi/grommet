function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React, { Component } from 'react'; // import { findDOMNode } from 'react-dom';

import { compose } from 'recompose';
import { Box } from '../Box';
import { Button } from '../Button';
import { Heading } from '../Heading';
import { Keyboard } from '../Keyboard';
import { withTheme } from '../hocs';
import { StyledCalendar, StyledDay, StyledDayContainer, StyledWeek, StyledWeeks, StyledWeeksContainer } from './StyledCalendar';
import { addDays, addMonths, betweenDates, daysApart, endOfMonth, sameDay, startOfMonth, subtractDays, subtractMonths, withinDates } from './utils';
var headingPadMap = {
  'small': 'xsmall',
  'medium': 'small',
  'large': 'medium'
};

var buildStartEnd = function buildStartEnd(reference, firstDayOfWeek) {
  var start = new Date(reference);
  start.setDate(1); // first of month

  start = subtractDays(start, start.getDay() - firstDayOfWeek); // beginning of week

  var end = addDays(start, 7 * 5 + 6); // 5 weeks to end of week

  return {
    start: start,
    end: end
  };
};

var buildState = function buildState(props) {
  var date = props.date,
      dates = props.dates,
      firstDayOfWeek = props.firstDayOfWeek;
  var reference;

  if (date) {
    reference = new Date(date);
  } else if (dates && dates.length > 0) {
    if (typeof dates[0] === 'string') {
      reference = new Date(dates[0]);
    } else if (Array.isArray(dates[0])) {
      reference = new Date(dates[0][0]);
    } else {
      reference = new Date();
    }
  } else {
    reference = new Date();
  }

  return _extends({}, buildStartEnd(reference, firstDayOfWeek), {
    reference: reference,
    active: new Date(reference)
  });
};

var Calendar =
/*#__PURE__*/
function (_Component) {
  _inheritsLoose(Calendar, _Component);

  function Calendar() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _Component.call.apply(_Component, [this].concat(args)) || this;

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {});

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "clearSlideStateLater", function () {
      clearTimeout(_this.timer);
      _this.timer = setTimeout(function () {
        var targetStartEnd = _this.state.targetStartEnd;

        if (targetStartEnd) {
          _this.setState({
            start: targetStartEnd.start,
            end: targetStartEnd.end,
            targetStartEnd: undefined,
            slide: undefined
          });
        } // Wait for animation to finish before cleaning up. Empirically determined.

      }, 1000);
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "setReference", function (reference) {
      var _this$props = _this.props,
          bounds = _this$props.bounds,
          firstDayOfWeek = _this$props.firstDayOfWeek;
      var _this$state = _this.state,
          start = _this$state.start,
          end = _this$state.end,
          targetStartEnd = _this$state.targetStartEnd;

      if (betweenDates(reference, bounds)) {
        var nextStartEnd = buildStartEnd(reference, firstDayOfWeek);
        var nextState = {
          reference: reference,
          active: undefined
        }; // if we're changing too fast, bypass animation

        if (targetStartEnd) {
          nextState.start = nextStartEnd.start;
          nextState.end = nextStartEnd.end;
          nextState.targetStartEnd = undefined;
          nextState.slide = undefined;
        } else {
          nextState.targetStartEnd = nextStartEnd;

          if (nextStartEnd.start.getTime() < start.getTime()) {
            nextState.start = nextStartEnd.start;
            nextState.slide = {
              direction: 'down',
              weeks: daysApart(start, nextStartEnd.start) / 7
            };
          } else if (nextStartEnd.end.getTime() > end.getTime()) {
            nextState.end = nextStartEnd.end;
            nextState.slide = {
              direction: 'up',
              weeks: daysApart(nextStartEnd.end, end) / 7
            };
          }

          _this.clearSlideStateLater();
        }

        _this.setState(nextState);
      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "setActive", function (active) {
      var bounds = _this.props.bounds;
      var _this$state2 = _this.state,
          start = _this$state2.start,
          reference = _this$state2.reference,
          end = _this$state2.end;

      if (betweenDates(active, bounds)) {
        var nextState = {
          active: active
        };

        if (active.getTime() < start.getTime()) {
          nextState.start = subtractDays(start, 7);
          nextState.end = subtractDays(end, 7);
        } else if (active.getTime() > end.getTime()) {
          nextState.start = addDays(start, 7);
          nextState.end = addDays(end, 7);
        }

        if (active.getMonth() !== reference.getMonth()) {
          nextState.reference = new Date(active);
        }

        _this.setFocus = true;

        _this.setState(nextState);
      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onClickDay", function (dateString) {
      return function () {
        var onSelect = _this.props.onSelect;

        _this.setState({
          active: new Date(dateString)
        });

        if (onSelect) {
          onSelect(dateString);
        }
      };
    });

    return _this;
  }

  Calendar.getDerivedStateFromProps = function getDerivedStateFromProps(nextProps, prevState) {
    var reference = prevState.reference;

    if (!reference) {
      return buildState(nextProps);
    }

    return null;
  };

  var _proto = Calendar.prototype;

  // componentDidUpdate() {
  //   if (this.setFocus) {
  //     this.setFocus = false;
  //     // if (this.activeRef) {
  //     //   findDOMNode(this.activeRef).focus();
  //     // }
  //   }
  // }
  _proto.componentWillUnmount = function componentWillUnmount() {
    clearTimeout(this.timer);
  };

  _proto.render = function render() {
    var _this2 = this;

    var _this$props2 = this.props,
        bounds = _this$props2.bounds,
        date = _this$props2.date,
        dates = _this$props2.dates,
        disabled = _this$props2.disabled,
        firstDayOfWeek = _this$props2.firstDayOfWeek,
        locale = _this$props2.locale,
        onSelect = _this$props2.onSelect,
        size = _this$props2.size,
        theme = _this$props2.theme,
        rest = _objectWithoutPropertiesLoose(_this$props2, ["bounds", "date", "dates", "disabled", "firstDayOfWeek", "locale", "onSelect", "size", "theme"]);

    var _this$state3 = this.state,
        active = _this$state3.active,
        start = _this$state3.start,
        reference = _this$state3.reference,
        end = _this$state3.end,
        slide = _this$state3.slide; // We have to deal with reference being the end of a month with more
    // days than the month we are changing to. So, we always set reference
    // to the first of the month before changing the month.

    var previousMonth = endOfMonth(subtractMonths(startOfMonth(reference), 1));
    var nextMonth = startOfMonth(addMonths(startOfMonth(reference), 1));
    var weeks = [];
    var day = new Date(start);
    var days;

    var _loop = function _loop() {
      if (day.getDay() === firstDayOfWeek) {
        if (days) {
          weeks.push(React.createElement(StyledWeek, {
            key: day.getTime(),
            theme: theme
          }, days));
        }

        days = [];
      }

      var dateString = day.toISOString();
      var isActive = active && sameDay(day, active);
      var selected = false;
      var inRange = false;
      var selectedState = withinDates(day, date || dates);

      if (selectedState === 2) {
        selected = true;
      } else if (selectedState === 1) {
        inRange = true;
      }

      var dayDisabled = withinDates(day, disabled) || bounds && !betweenDates(day, bounds);
      days.push(React.createElement(StyledDayContainer, {
        key: day.getTime(),
        size: size,
        theme: theme
      }, React.createElement(Button, {
        ref: function ref(_ref) {
          if (isActive) _this2.activeRef = _ref;
        },
        a11yTitle: day.toDateString(),
        plain: true,
        active: isActive,
        hoverIndicator: !dayDisabled,
        onClick: dayDisabled ? undefined : _this2.onClickDay(dateString)
      }, React.createElement(StyledDay, {
        inRange: inRange,
        otherMonth: day.getMonth() !== reference.getMonth(),
        isSelected: selected,
        size: size,
        theme: theme
      }, day.getDate()))));
      day = addDays(day, 1);
    };

    while (day.getTime() < end.getTime()) {
      _loop();
    }

    weeks.push(React.createElement(StyledWeek, {
      key: day.getTime(),
      theme: theme
    }, days));
    var PreviousIcon = size === 'small' ? theme.calendar.icons.small.previous : theme.calendar.icons.previous;
    var NextIcon = size === 'small' ? theme.calendar.icons.small.next : theme.calendar.icons.next;
    return React.createElement(StyledCalendar, _extends({
      size: size,
      theme: theme
    }, rest), React.createElement(Keyboard, {
      onUp: function onUp(event) {
        event.preventDefault();

        _this2.setActive(addDays(active, -7));
      },
      onDown: function onDown(event) {
        event.preventDefault();

        _this2.setActive(addDays(active, 7));
      },
      onLeft: function onLeft() {
        return _this2.setActive(addDays(active, -1));
      },
      onRight: function onRight() {
        return _this2.setActive(addDays(active, 1));
      }
    }, React.createElement(Box, null, React.createElement(Box, {
      direction: "row",
      justify: "between",
      align: "center"
    }, React.createElement(Box, {
      flex: true,
      pad: {
        horizontal: headingPadMap[size] || 'small'
      }
    }, React.createElement(Heading, {
      level: size === 'small' ? 4 : 3,
      size: size,
      margin: "none"
    }, reference.toLocaleDateString(locale, {
      month: 'long',
      year: 'numeric'
    }))), React.createElement(Box, {
      flex: false,
      direction: "row",
      align: "center"
    }, React.createElement(Button, {
      a11yTitle: previousMonth.toLocaleDateString(locale, {
        month: 'long',
        year: 'numeric'
      }),
      icon: React.createElement(PreviousIcon, {
        size: size !== 'small' ? size : undefined
      }),
      onClick: onSelect && betweenDates(previousMonth, bounds) ? function () {
        return _this2.setReference(previousMonth);
      } : undefined
    }), React.createElement(Button, {
      a11yTitle: nextMonth.toLocaleDateString(locale, {
        month: 'long',
        year: 'numeric'
      }),
      icon: React.createElement(NextIcon, {
        size: size !== 'small' ? size : undefined
      }),
      onClick: onSelect && betweenDates(nextMonth, bounds) ? function () {
        return _this2.setReference(nextMonth);
      } : undefined
    }))), React.createElement(StyledWeeksContainer, {
      size: size,
      theme: theme
    }, React.createElement(StyledWeeks, {
      slide: slide,
      size: size,
      theme: theme
    }, weeks)))));
  };

  return Calendar;
}(Component);

_defineProperty(Calendar, "defaultProps", {
  firstDayOfWeek: 0,
  size: 'medium',
  locale: 'en-US'
});

var CalendarDoc;

if (process.env.NODE_ENV !== 'production') {
  CalendarDoc = require('./doc').doc(Calendar); // eslint-disable-line global-require
}

var CalendarWrapper = compose(withTheme)(CalendarDoc || Calendar);
export { CalendarWrapper as Calendar };