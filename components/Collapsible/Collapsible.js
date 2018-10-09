'use strict';

exports.__esModule = true;
exports.Collapsible = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _recompose = require('recompose');

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _hocs = require('../hocs');

var _Box = require('../Box');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var animatedBoxProperty = function animatedBoxProperty(direction) {
  return direction === 'horizontal' ? 'width' : 'height';
};

var AnimatedBox = (0, _styledComponents2.default)(_Box.Box).withConfig({
  displayName: 'Collapsible__AnimatedBox',
  componentId: 'sc-15kniua-0'
})(['', ''], function (props) {
  return !props.animate && (props.open ? '\n    max-' + animatedBoxProperty(props.collapsibleDirection) + ': unset;\n    visibility: visible;\n  ' : '\n    max-' + animatedBoxProperty(props.collapsibleDirection) + ': 0;\n    visibility: hidden;\n  ');
});

var Collapsible = function (_Component) {
  _inherits(Collapsible, _Component);

  Collapsible.getDerivedStateFromProps = function getDerivedStateFromProps(nextProps, prevState) {
    var open = nextProps.open;

    if (open !== prevState.open) {
      return {
        animate: true,
        open: open
      };
    }
    return null;
  };

  function Collapsible(props, context) {
    _classCallCheck(this, Collapsible);

    var _this = _possibleConstructorReturn(this, _Component.call(this, props, context));

    _this.ref = (0, _react.createRef)();

    _this.getSnapshotBeforeUpdate = function () {
      return _this.ref.current && (0, _reactDom.findDOMNode)(_this.ref.current).getBoundingClientRect();
    };

    _this.state = {
      open: props.open,
      animate: false
    };
    return _this;
  }

  Collapsible.prototype.componentDidUpdate = function componentDidUpdate(prevProps, prevState, snapshot) {
    var _this2 = this;

    var _props = this.props,
        direction = _props.direction,
        _props$theme$collapsi = _props.theme.collapsible,
        minSpeed = _props$theme$collapsi.minSpeed,
        baseline = _props$theme$collapsi.baseline;
    var _state = this.state,
        animate = _state.animate,
        open = _state.open;


    var container = (0, _reactDom.findDOMNode)(this.ref.current);
    var dimension = animatedBoxProperty(direction);
    var boudingClientRect = container.getBoundingClientRect();
    var dimensionSize = boudingClientRect[dimension];

    var shouldAnimate = animate && prevState.open !== open;

    if (open && snapshot[dimension] && dimensionSize !== snapshot[dimension]) {
      shouldAnimate = true;
    }

    if (shouldAnimate) {
      if (this.animationTimeout) {
        clearTimeout(this.animationTimeout);
      }

      var speed = Math.max(dimensionSize / baseline * minSpeed, minSpeed);

      container.style['max-' + dimension] = snapshot[dimension] + 'px';
      container.style.overflow = 'hidden';

      requestAnimationFrame(function () {
        requestAnimationFrame(function () {
          container.style.transition = 'max-' + dimension + ' ' + speed + 'ms, visibility 50ms';
          container.style['max-' + dimension] = open ? dimensionSize + 'px' : '0px';

          _this2.animationTimeout = setTimeout(function () {
            container.removeAttribute('style');
            _this2.setState({
              animate: false
            });
          }, speed);
        });
      });
    }
  };

  Collapsible.prototype.componentWillUnmount = function componentWillUnmount() {
    if (this.animationTimeout) {
      clearTimeout(this.animationTimeout);
    }
  };

  Collapsible.prototype.render = function render() {
    var _props2 = this.props,
        children = _props2.children,
        direction = _props2.direction;
    var _state2 = this.state,
        animate = _state2.animate,
        open = _state2.open;


    return _react2.default.createElement(
      AnimatedBox,
      {
        'aria-hidden': !open,
        ref: this.ref,
        open: open,
        animate: animate,
        collapsibleDirection: direction
      },
      children
    );
  };

  return Collapsible;
}(_react.Component);

var CollapsibleDoc = void 0;
if (process.env.NODE_ENV !== 'production') {
  CollapsibleDoc = require('./doc').doc(Collapsible); // eslint-disable-line global-require
}
var CollapsibleWrapper = (0, _recompose.compose)(_hocs.withTheme)(CollapsibleDoc || Collapsible);

exports.Collapsible = CollapsibleWrapper;