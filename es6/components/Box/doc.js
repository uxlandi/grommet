function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import { describe, PropTypes } from 'react-desc';
import { getAvailableAtBadge, genericProps } from '../../utils';
var PAD_SIZES = ['xxsmall', 'xsmall', 'small', 'medium', 'large', 'xlarge'];
var OVERFLOW_VALUES = ['auto', 'hidden', 'scroll', 'visible'];
var ANIMATION_TYPE = PropTypes.oneOf(['fadeIn', 'fadeOut', 'jiggle', 'pulse', 'slideUp', 'slideDown', 'slideLeft', 'slideRight', 'zoomIn', 'zoomOut']);
var ANIMATION_SHAPE = PropTypes.shape({
  type: ANIMATION_TYPE,
  delay: PropTypes.number,
  duration: PropTypes.number,
  size: PropTypes.oneOf(['xsmall', 'small', 'medium', 'large', 'xlarge'])
});
export var doc = function doc(Box) {
  var DocumentedBox = describe(Box).availableAt(getAvailableAtBadge('Box')).description('A flexible box that lays out its contents along a single direction.').usage("import { Box } from 'grommet';\n<Box />");
  DocumentedBox.propTypes = _extends({}, genericProps, {
    align: PropTypes.oneOf(['start', 'center', 'end', 'baseline', 'stretch']).description('How to align the contents along the cross axis.'),
    alignContent: PropTypes.oneOf(['start', 'center', 'end', 'between', 'around', 'stretch']).description("How to align the contents when there is extra space in\n        the cross axis.").defaultValue('stretch'),
    animation: PropTypes.oneOfType([ANIMATION_TYPE, ANIMATION_SHAPE, PropTypes.arrayOf(PropTypes.oneOfType([ANIMATION_TYPE, ANIMATION_SHAPE]))]).description("Animation effect(s) to use. 'duration' and 'delay' should\n        be in milliseconds. 'jiggle' and 'pulse' types are intended for\n        small elements, like icons."),
    background: PropTypes.oneOfType([PropTypes.string, PropTypes.shape({
      color: PropTypes.string,
      dark: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
      image: PropTypes.string,
      position: PropTypes.string,
      opacity: PropTypes.oneOfType([PropTypes.oneOf(['weak', 'medium', 'strong']), PropTypes.bool]),
      light: PropTypes.string
    })]).description("Either a color identifier to use for the background\n        color. For example: 'neutral-1'. Or, a 'url()' for an image. Dark\n        is not needed if color is provided."),
    basis: PropTypes.oneOfType([PropTypes.oneOf(['xxsmall', 'xsmall', 'small', 'medium', 'large', 'xlarge', 'full', '1/2', '1/3', '2/3', '1/4', '2/4', '3/4', 'auto']), PropTypes.string]).description("A fixed or relative size along its container's main axis."),
    border: PropTypes.oneOfType([PropTypes.bool, PropTypes.oneOf(['top', 'left', 'bottom', 'right', 'horizontal', 'vertical', 'all']), PropTypes.shape({
      color: PropTypes.oneOfType([PropTypes.string, PropTypes.shape({
        dark: PropTypes.string,
        light: PropTypes.string
      })]),
      side: PropTypes.oneOf(['top', 'left', 'bottom', 'right', 'horizontal', 'vertical', 'all']),
      size: PropTypes.oneOfType([PropTypes.oneOf(['xsmall', 'small', 'medium', 'large', 'xlarge']), PropTypes.string])
    })]).description('Include a border.'),
    direction: PropTypes.oneOf(['row', 'column', 'row-responsive']).description('The orientation to layout the child components in.').defaultValue('column'),
    elevation: PropTypes.oneOfType([PropTypes.oneOf(['none', 'xsmall', 'small', 'medium', 'large', 'xlarge']), PropTypes.string]).description("Elevated height above the underlying context, indicated\n        via a drop shadow.").defaultValue('none'),
    flex: PropTypes.oneOf(['grow', 'shrink', true, false]).description('Whether flex-grow and/or flex-shrink is true.'),
    fill: PropTypes.oneOf(['horizontal', 'vertical', true, false]).description('Whether the width and/or height should fill the container.'),
    gap: PropTypes.oneOfType([PropTypes.oneOf(['xsmall', 'small', 'medium', 'large', 'xlarge']), PropTypes.string]).description("The amount of spacing between child elements. This\n        should not be used in conjunction with 'wrap' as the gap elements\n        will not wrap gracefully."),
    height: PropTypes.oneOfType([PropTypes.oneOf(['xsmall', 'small', 'medium', 'large', 'xlarge']), PropTypes.string]).description('A fixed height.'),
    justify: PropTypes.oneOf(['start', 'center', 'between', 'end']).description('How to align the contents along the main axis.'),
    overflow: PropTypes.oneOfType([PropTypes.oneOf(OVERFLOW_VALUES), PropTypes.shape({
      horizontal: PropTypes.oneOf(OVERFLOW_VALUES),
      vertical: PropTypes.oneOf(OVERFLOW_VALUES)
    }), PropTypes.string]).description('box overflow.'),
    pad: PropTypes.oneOfType([PropTypes.oneOf(['none'].concat(PAD_SIZES)), PropTypes.shape({
      bottom: PropTypes.oneOfType([PropTypes.oneOf(PAD_SIZES), PropTypes.string]),
      horizontal: PropTypes.oneOfType([PropTypes.oneOf(PAD_SIZES), PropTypes.string]),
      left: PropTypes.oneOfType([PropTypes.oneOf(PAD_SIZES), PropTypes.string]),
      right: PropTypes.oneOfType([PropTypes.oneOf(PAD_SIZES), PropTypes.string]),
      top: PropTypes.oneOfType([PropTypes.oneOf(PAD_SIZES), PropTypes.string]),
      vertical: PropTypes.oneOfType([PropTypes.oneOf(PAD_SIZES), PropTypes.string])
    }), PropTypes.string]).description("The amount of padding around the box contents. An\n        object can be specified to distinguish horizontal padding, vertical\n        padding, and padding on a particular side of the box").defaultValue('none'),
    responsive: PropTypes.bool.description("Whether margin, pad, and border\n      sizes should be scaled for mobile environments.").defaultValue(true),
    round: PropTypes.oneOfType([PropTypes.bool, PropTypes.oneOf(['xsmall', 'small', 'medium', 'large', 'xlarge', 'full']), PropTypes.string, PropTypes.shape({
      corner: PropTypes.oneOf(['top', 'left', 'bottom', 'right', 'top-left', 'top-right', 'bottom-left', 'bottom-right']),
      size: PropTypes.oneOfType([PropTypes.oneOf(['xsmall', 'small', 'medium', 'large', 'xlarge']), PropTypes.string])
    })]).description('How much to round the corners.').defaultValue(false),
    tag: PropTypes.string.description('The DOM tag to use for the element.').defaultValue('div'),
    width: PropTypes.oneOfType([PropTypes.oneOf(['xsmall', 'small', 'medium', 'large', 'xlarge']), PropTypes.string]).description('A fixed width.'),
    wrap: PropTypes.bool.description("Whether children can wrap if they\n      can't all fit.").defaultValue(false)
  });
  return DocumentedBox;
};