import React from 'react';

import { TableContext } from '../Table/TableContext';
import { StyledTableBody } from '../Table/StyledTable';
import { doc } from './doc';

var TableBody = function TableBody(props) {
  return React.createElement(
    TableContext.Provider,
    { value: 'body' },
    React.createElement(StyledTableBody, props)
  );
};

var TableBodyWrapper = process.env.NODE_ENV !== 'production' ? doc(TableBody) : TableBody;

export { TableBodyWrapper as TableBody };