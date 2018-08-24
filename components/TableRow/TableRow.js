'use strict';

exports.__esModule = true;
exports.TableRow = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _StyledTable = require('../Table/StyledTable');

var _doc = require('./doc');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TableRow = exports.TableRow = function TableRow(props) {
  return _react2.default.createElement(_StyledTable.StyledTableRow, props);
};

if (process.env.NODE_ENV !== 'production') {
  (0, _doc.doc)(TableRow);
}