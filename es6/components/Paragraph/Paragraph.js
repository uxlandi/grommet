function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import { compose } from 'recompose';
import { withTheme } from '../hocs';
import { StyledParagraph } from './StyledParagraph';

var Paragraph = function Paragraph(_ref) {
  var rest = _extends({}, _ref);

  return React.createElement(StyledParagraph, rest);
};

var ParagraphDoc;

if (process.env.NODE_ENV !== 'production') {
  ParagraphDoc = require('./doc').doc(Paragraph); // eslint-disable-line global-require
}

var ParagraphWrapper = compose(withTheme)(ParagraphDoc || Paragraph);
export { ParagraphWrapper as Paragraph };