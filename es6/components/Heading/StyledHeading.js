import styled, { css } from 'styled-components';
import { normalizeColor, breakpointStyle } from '../../utils';

var marginStyle = function marginStyle(props) {
  if (typeof props.margin === 'string') {
    var margin = props.theme.global.edgeSize[props.margin];
    var _styles = [css(["margin-top:", ";margin-bottom:", ";"], margin, margin)];

    if (props.responsive) {
      Object.keys(props.theme.global.breakpoints).forEach(function (name) {
        var breakpoint = props.theme.global.breakpoints[name];

        if (breakpoint.edgeSize && breakpoint.edgeSize[props.margin] !== undefined) {
          var responsiveMargin = breakpoint.edgeSize[props.margin];

          _styles.push(breakpointStyle(breakpoint, "\n            margin-top: " + responsiveMargin + ";\n            margin-bottom: " + responsiveMargin + ";\n          "));
        }
      });
    }

    return _styles;
  }

  var styles = [];

  if (props.margin.top) {
    if (props.margin.top === 'none') {
      styles.push(css(["margin-top:0;"]));
    } else {
      styles.push(css(["margin-top:", ";"], props.theme.global.edgeSize[props.margin.top]));

      if (props.responsive) {
        Object.keys(props.theme.global.breakpoints).forEach(function (name) {
          var breakpoint = props.theme.global.breakpoints[name];

          if (breakpoint.edgeSize && breakpoint.edgeSize[props.margin.top] !== undefined) {
            styles.push(breakpointStyle(breakpoint, "margin-top: " + breakpoint.edgeSize[props.margin.top] + ";"));
          }
        });
      }
    }
  }

  if (props.margin.bottom) {
    if (props.margin.bottom === 'none') {
      styles.push(css(["margin-bottom:0;"]));
    } else {
      styles.push(css(["margin-bottom:", ";"], props.theme.global.edgeSize[props.margin.bottom]));

      if (props.responsive) {
        Object.keys(props.theme.global.breakpoints).forEach(function (name) {
          var breakpoint = props.theme.global.breakpoints[name];

          if (breakpoint.edgeSize && breakpoint.edgeSize[props.margin.bottom] !== undefined) {
            styles.push(breakpointStyle(breakpoint, "margin-bottom: " + breakpoint.edgeSize[props.margin.bottom] + ";"));
          }
        });
      }
    }
  }

  return styles;
};

var sizeStyle = function sizeStyle(props) {
  // size is a combination of the level and size properties
  var size = props.size || 'medium';
  var headingTheme = props.theme.heading;
  var data = headingTheme.level[props.level][size];
  var styles = [css(["font-size:", ";line-height:", ";max-width:", ";font-weight:", ";"], data.size, data.height, data.maxWidth, headingTheme.weight)];

  if (props.responsive && headingTheme.responsiveBreakpoint) {
    var breakpoint = props.theme.global.breakpoints[headingTheme.responsiveBreakpoint];

    if (breakpoint) {
      var responsiveData = headingTheme.level[Math.min(props.level + 1, 4)][size];
      styles.push(breakpointStyle(breakpoint, "\n        font-size: " + responsiveData.size + ";\n        line-height: " + responsiveData.height + ";\n        max-width: " + responsiveData.maxWidth + ";\n      "));
    }
  }

  return styles;
};

var TEXT_ALIGN_MAP = {
  center: 'center',
  end: 'right',
  start: 'left'
};
var textAlignStyle = css(["text-align:", ";"], function (props) {
  return TEXT_ALIGN_MAP[props.textAlign];
});
var truncateStyle = "\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n";
var colorStyle = css(["color:", ";"], function (props) {
  return normalizeColor(props.colorValue, props.theme);
});
export var StyledHeading = styled.h1.withConfig({
  displayName: "StyledHeading",
  componentId: "sc-1rdh4aw-0"
})(["", " ", " ", " ", " ", " ", " ", ""], function (props) {
  return props.theme.heading.font && css(["font-family:", ";"], props.theme.heading.font.family);
}, function (props) {
  return sizeStyle(props);
}, function (props) {
  return props.margin && marginStyle(props);
}, function (props) {
  return props.textAlign && textAlignStyle;
}, function (props) {
  return props.truncate && truncateStyle;
}, function (props) {
  return props.colorValue && colorStyle;
}, function (props) {
  return props.theme.heading && props.theme.heading.extend;
});