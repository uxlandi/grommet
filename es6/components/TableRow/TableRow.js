import React from 'react';

import { StyledTableRow } from '../Table/StyledTable';
import { doc } from './doc';

var TableRow = function TableRow(props) {
  return React.createElement(StyledTableRow, props);
};

var TableRowWrapper = process.env.NODE_ENV !== 'production' ? doc(TableRow) : TableRow;

export { TableRowWrapper as TableRow };