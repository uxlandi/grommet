"use strict";

exports.__esModule = true;
exports.StyledWorldMap = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var StyledWorldMap = _styledComponents.default.svg.withConfig({
  displayName: "StyledWorldMap",
  componentId: "had4c3-0"
})(["width:100%;", ""], function (props) {
  return props.theme.diagram && props.theme.diagram.extend;
});

exports.StyledWorldMap = StyledWorldMap;