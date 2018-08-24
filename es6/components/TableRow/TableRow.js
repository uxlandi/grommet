import React from 'react';

import { StyledTableRow } from '../Table/StyledTable';
import { doc } from './doc';

export var TableRow = function TableRow(props) {
  return React.createElement(StyledTableRow, props);
};

if (process.env.NODE_ENV !== 'production') {
  doc(TableRow);
}