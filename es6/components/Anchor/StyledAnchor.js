import styled from 'styled-components';
import { focusStyle, genericStyles, normalizeColor } from '../../utils';
var disabledStyle = "\n  opacity: 0.3;\n  cursor: default;\n  text-decoration: none;\n";
export var StyledAnchor = styled.a.withConfig({
  displayName: "StyledAnchor",
  componentId: "sc-1rp7lwl-0"
})(["box-sizing:border-box;font-size:inherit;line-height:inherit;color:", ";text-decoration:", ";cursor:pointer;outline:none;", " ", " ", " ", " ", " ", " ", ""], function (props) {
  return normalizeColor(props.theme.anchor.color, props.theme);
}, function (props) {
  return props.hasIcon ? 'none' : props.theme.anchor.textDecoration;
}, genericStyles, function (props) {
  return !props.disabled && "\n    &:hover {\n      text-decoration: underline;\n    }\n  ";
}, function (props) {
  return !props.primary && props.hasIcon && props.hasLabel && "\n    color: " + normalizeColor('text', props.theme) + ";\n  ";
}, function (props) {
  return props.hasIcon && !props.hasLabel && "\n    padding: " + props.theme.global.edgeSize.small + ";\n  ";
}, function (props) {
  return props.disabled && disabledStyle;
}, function (props) {
  return props.focus && focusStyle;
}, function (props) {
  return props.theme.anchor.extend;
});