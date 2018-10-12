"use strict";

exports.__esModule = true;
exports.StyledChart = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var StyledChart = _styledComponents.default.svg.withConfig({
  displayName: "StyledChart",
  componentId: "sc-1nae0gf-0"
})(["display:block;max-width:100%;overflow:visible;", ""], function (props) {
  return props.theme.chart && props.theme.chart.extend;
});

exports.StyledChart = StyledChart;