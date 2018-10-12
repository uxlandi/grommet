function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';
import { compose } from 'recompose';
import { Box } from '../Box';
import { TableRow } from '../TableRow';
import { TableCell } from '../TableCell';
import { withTheme } from '../hocs';
import { Cell } from './Cell';
import { StyledDataTableFooter } from './StyledDataTable';

var Footer = function Footer(_ref) {
  var columns = _ref.columns,
      footerValues = _ref.footerValues,
      groups = _ref.groups,
      theme = _ref.theme,
      rest = _objectWithoutPropertiesLoose(_ref, ["columns", "footerValues", "groups", "theme"]);

  return React.createElement(StyledDataTableFooter, rest, React.createElement(TableRow, null, groups && React.createElement(TableCell, {
    size: "xxsmall",
    plain: true,
    verticalAlign: "top"
  }, React.createElement(Box, theme.dataTable.footer)), columns.map(function (column) {
    return React.createElement(Cell, {
      key: column.property,
      context: "footer",
      column: column,
      datum: footerValues,
      theme: theme
    });
  })));
};

var FooterWrapper = compose(withTheme)(Footer);
export { FooterWrapper as Footer };