function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import { describe, PropTypes } from 'react-desc';
import { genericProps, getAvailableAtBadge } from '../../utils';
export var doc = function doc(Anchor) {
  var DocumentedAnchor = describe(Anchor).availableAt(getAvailableAtBadge('Anchor')).description("A text link. We have a separate component from the browser\nbase so we can style it. You can either set the icon and/or label properties\nor just use children.").usage("import { Anchor } from 'grommet';\n<Anchor href={location} label='Label' />");
  DocumentedAnchor.propTypes = _extends({}, genericProps, {
    a11yTitle: PropTypes.string.description('Custom title to be used by screen readers.'),
    color: PropTypes.string.description("\n      Label color and icon color, if not specified on the icon.\n    "),
    href: PropTypes.string.description('Hyperlink reference to place in the anchor.'),
    icon: PropTypes.element.description('Icon element to place in the anchor.'),
    label: PropTypes.node.description('Label text to place in the anchor.'),
    onClick: PropTypes.func.description("Click handler. It can be used, for example, \n    to add analytics and track who clicked in the anchor."),
    primary: PropTypes.bool.description('Whether this is a primary anchor.').defaultValue(false),
    reverse: PropTypes.bool.description('Whether an icon and label should be reversed so that the icon is at the end of the anchor.').defaultValue(false)
  });
  return DocumentedAnchor;
};