function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';
import { Box } from '../Box';
import { TableCell } from '../TableCell';
import { Text } from '../Text';
export var Cell = function Cell(_ref) {
  var _ref$column = _ref.column,
      align = _ref$column.align,
      property = _ref$column.property,
      primary = _ref$column.primary,
      render = _ref$column.render,
      context = _ref.context,
      datum = _ref.datum,
      scope = _ref.scope,
      theme = _ref.theme,
      rest = _objectWithoutPropertiesLoose(_ref, ["column", "context", "datum", "scope", "theme"]);

  var content;

  if (render) {
    if (datum[property]) {
      content = render(datum);
    }
  } else if (datum[property]) {
    content = datum[property];
  }

  if (typeof content === 'string' || typeof content === 'number') {
    if (primary) {
      content = React.createElement("strong", null, content);
    }

    content = React.createElement(Text, null, content);
  }

  if (theme.dataTable[context]) {
    content = React.createElement(Box, _extends({
      direction: "row",
      justify: align,
      fill: "vertical"
    }, theme.dataTable[context], rest), content);
  }

  return React.createElement(TableCell, {
    scope: scope,
    plain: !!theme.dataTable[context],
    verticalAlign: context === 'header' ? 'bottom' : 'top'
  }, content);
};