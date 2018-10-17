import styled, { css } from 'styled-components';
import { focusStyle, genericStyles, normalizeColor } from '../../utils';
var disabledStyle = "\n  opacity: 0.3;\n  cursor: default;\n  text-decoration: none;\n";
export var StyledAnchor = styled.a.withConfig({
  displayName: "StyledAnchor",
  componentId: "sc-1rp7lwl-0"
})(["box-sizing:border-box;font-size:inherit;line-height:inherit;color:", ";", " text-decoration:", ";cursor:pointer;outline:none;", " ", " ", " ", " ", " ", ""], function (props) {
  return normalizeColor(props.colorProp || props.theme.anchor.color, props.theme);
}, function (props) {
  return props.theme.anchor.fontWeight && "font-weight: " + props.theme.anchor.fontWeight + ";";
}, function (props) {
  return props.hasIcon ? 'none' : props.theme.anchor.textDecoration;
}, genericStyles, function (props) {
  return !props.disabled && props.theme.anchor.hover && css(["&:hover{", " ", " ", "}"], props.theme.anchor.hover.textDecoration && "text-decoration: " + props.theme.anchor.hover.textDecoration + ";", props.theme.anchor.hover.fontWeight && "font-weight: " + props.theme.anchor.hover.fontWeight + ";", props.theme.anchor.hover.extend);
}, function (props) {
  return props.hasIcon && !props.hasLabel && "\n    padding: " + props.theme.global.edgeSize.small + ";\n  ";
}, function (props) {
  return props.disabled && disabledStyle;
}, function (props) {
  return props.focus && focusStyle;
}, function (props) {
  return props.theme.anchor.extend;
});