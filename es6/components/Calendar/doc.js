import { describe, PropTypes } from 'react-desc';
import { getAvailableAtBadge } from '../../utils';
export var doc = function doc(Calendar) {
  var DocumentedCalendar = describe(Calendar).availableAt(getAvailableAtBadge('Calendar')).description("Calendar of days in months.\n      It can be used to select a single date, a range of dates, or multiple\n      individual dates.").usage("import { Calendar } from 'grommet';\n<Calendar />");
  DocumentedCalendar.propTypes = {
    bounds: PropTypes.arrayOf(PropTypes.string).description("An array of two numbers indicating the limits on\n        navigation in ISO8601 format"),
    date: PropTypes.string.description('The selected date in ISO8601 format'),
    dates: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.arrayOf(PropTypes.string)])).description("Multiple selected dates in ISO8601 format.\n      Items that are an array indicate a range of dates."),
    disabled: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.arrayOf(PropTypes.string)])).description("Multiple dates in ISO8601 format that should not be\n        selectable. Items that are an array indicate a range of dates."),
    firstDayOfWeek: PropTypes.oneOf([0, 1]).description('The first day of the week. 0 for Sunday. 1 for Monday.'),
    header: PropTypes.func.description("If specified, the entire calendar header will be managed by the caller.\nThe function passes the following options:\n\n```\n  {\n    date: Date,\n    locale: string,\n    onPreviousMonth: func,\n    onNextMonth: func,\n    previousInBound: bool,\n    nextInBound: bool,\n  }\n```\n\n`onPreviousMonth` and `onNextMonth` are callbacks that will tell the calendar to move between months.\n`previousInBound` and `nextInBound` are booleans that tell, when using `bounds`, if the current date is within that range.\nYou can then use that to disable the previous and next buttons.\n"),
    locale: PropTypes.string.description('The locale to use.'),
    onSelect: PropTypes.func.description("Called with an ISO8601 date when\n      the user selects a day.\n      For single select, make this the subsequent `date` property value.\n      For multiple select or ranges, toggle values in `dates`.\n      Not specifying this property makes the component read only."),
    size: PropTypes.oneOfType([PropTypes.oneOf(['small', 'medium', 'large']), PropTypes.string]).description('What size to make it.')
  };
  return DocumentedCalendar;
};