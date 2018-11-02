"use strict";

exports.__esModule = true;
exports.doc = exports.themeDoc = void 0;

var _reactDesc = require("react-desc");

var _utils = require("../../utils");

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var themeDoc = {
  'global.focus.border.color': {
    description: 'The color around the Anchor when in focus.',
    type: 'string | { dark: string, light: string }',
    defaultValue: '#FD6FFF'
  },
  'anchor.color': {
    description: 'The color of the label text and icon strokes.',
    type: 'string | { dark: string, light: string }',
    defaultValue: "{ light: '#1D67E3', dark: '#6194EB' }"
  },
  'anchor.fontWeight': {
    description: 'The font weight of the label.',
    type: 'number',
    defaultValue: 600
  },
  'anchor.textDecoration': {
    description: 'The text decoration of the label. Refer to [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/text-decoration) for possible values.',
    type: 'string',
    defaultValue: 'none'
  },
  'anchor.hover.fontWeight': {
    description: 'The font weight of the label when hovering.',
    type: 'number',
    defaultValue: undefined
  },
  'anchor.hover.textDecoration': {
    description: 'The text decoration of the label when hovering. Refer to [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/text-decoration) for possible values.',
    type: 'string',
    defaultValue: 'underline'
  },
  'anchor.hover.extend': {
    description: 'Any additional style for the Anchor when hovering.',
    type: 'string | (props) => {}',
    defaultValue: undefined
  },
  'anchor.extend': {
    description: 'Any additional style for the Anchor.',
    type: 'string | (props) => {}',
    defaultValue: undefined
  }
};
exports.themeDoc = themeDoc;

var doc = function doc(Anchor) {
  var DocumentedAnchor = (0, _reactDesc.describe)(Anchor).availableAt((0, _utils.getAvailableAtBadge)('Anchor')).description('A text link.').details("We have a separate component from the browser\nbase so we can style it. You can either set the icon and/or label properties\nor just use children.").usage("import { Anchor } from 'grommet';\n<Anchor href={location} label='Label' />");
  DocumentedAnchor.propTypes = _extends({}, _utils.genericProps, {
    a11yTitle: _reactDesc.PropTypes.string.description('Custom title to be used by screen readers.'),
    color: _reactDesc.PropTypes.string.description("\n      Label color and icon color, if not specified on the icon.\n    "),
    href: _reactDesc.PropTypes.string.description('Hyperlink reference to place in the anchor.'),
    icon: _reactDesc.PropTypes.element.description('Icon element to place in the anchor.'),
    label: _reactDesc.PropTypes.node.description('Label text to place in the anchor.'),
    onClick: _reactDesc.PropTypes.func.description("Click handler. It can be used, for example, \n    to add analytics and track who clicked in the anchor."),
    reverse: _reactDesc.PropTypes.bool.description('Whether an icon and label should be reversed so that the icon is at the end of the anchor.').defaultValue(false),
    size: _reactDesc.PropTypes.oneOfType([_reactDesc.PropTypes.oneOf(['xsmall', 'small', 'medium', 'large', 'xlarge', 'xxlarge']), _reactDesc.PropTypes.string]).description("The font size is typically driven by the components containing\nthis component. But, it can be adjusted directly via this size property, typically\nwhen it is not contained in a 'Heading', 'Paragraph', or 'Text'.")
  });
  return DocumentedAnchor;
};

exports.doc = doc;