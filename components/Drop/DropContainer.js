"use strict";

exports.__esModule = true;
exports.DropContainer = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactDom = require("react-dom");

var _contexts = require("grommet-icons/contexts");

var _contexts2 = require("../../contexts");

var _FocusedContainer = require("../FocusedContainer");

var _utils = require("../../utils");

var _Box = require("../Box");

var _Keyboard = require("../Keyboard");

var _StyledDrop = require("./StyledDrop");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var DropContainer =
/*#__PURE__*/
function (_Component) {
  _inheritsLoose(DropContainer, _Component);

  function DropContainer() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _Component.call.apply(_Component, [this].concat(args)) || this;

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {});

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "dropRef", _react.default.createRef());

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "addScrollListener", function () {
      var dropTarget = _this.props.dropTarget;
      /* eslint-disable-next-line react/no-find-dom-node */

      _this.scrollParents = (0, _utils.findScrollParents)((0, _reactDom.findDOMNode)(dropTarget));

      _this.scrollParents.forEach(function (scrollParent) {
        return scrollParent.addEventListener('scroll', _this.place);
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "removeScrollListener", function () {
      _this.scrollParents.forEach(function (scrollParent) {
        return scrollParent.removeEventListener('scroll', _this.place);
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onClickDocument", function (event) {
      var _this$props = _this.props,
          dropTarget = _this$props.dropTarget,
          onClickOutside = _this$props.onClickOutside;
      /* eslint-disable-next-line react/no-find-dom-node */

      var dropTargetNode = (0, _reactDom.findDOMNode)(dropTarget);
      /* eslint-disable-next-line react/no-find-dom-node */

      var dropNode = (0, _reactDom.findDOMNode)(_this.dropRef.current);

      if (onClickOutside && dropNode && // need this for ie11
      !dropTargetNode.contains(event.target) && !dropNode.contains(event.target)) {
        onClickOutside();
      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onResize", function () {
      _this.removeScrollListener();

      _this.addScrollListener();

      _this.place();
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "place", function () {
      var _this$props2 = _this.props,
          align = _this$props2.align,
          dropTarget = _this$props2.dropTarget,
          responsive = _this$props2.responsive,
          stretch = _this$props2.stretch,
          theme = _this$props2.theme;
      var windowWidth = window.innerWidth;
      var windowHeight = window.innerHeight;
      /* eslint-disable-next-line react/no-find-dom-node */

      var target = (0, _reactDom.findDOMNode)(dropTarget);
      /* eslint-disable-next-line react/no-find-dom-node */

      var container = (0, _reactDom.findDOMNode)(_this.dropRef.current);

      if (container && target) {
        // clear prior styling
        container.style.left = '';
        container.style.width = '';
        container.style.top = '';
        container.style.maxHeight = ''; // get bounds

        var targetRect = (0, _utils.findVisibleParent)(target).getBoundingClientRect();
        var containerRect = container.getBoundingClientRect(); // determine width

        var width = Math.min(stretch ? Math.max(targetRect.width, containerRect.width) : containerRect.width, windowWidth); // set left position

        var left;

        if (align.left) {
          if (align.left === 'left') {
            left = targetRect.left;
          } else if (align.left === 'right') {
            left = targetRect.left + targetRect.width;
          }
        } else if (align.right) {
          if (align.right === 'left') {
            left = targetRect.left - width;
          } else if (align.right === 'right') {
            left = targetRect.left + targetRect.width - width;
          }
        } else {
          left = targetRect.left + targetRect.width / 2 - width / 2;
        }

        if (left + width > windowWidth) {
          left -= left + width - windowWidth;
        } else if (left < 0) {
          left = 0;
        } // set top position


        var top;
        var maxHeight;

        if (align.top) {
          if (align.top === 'top') {
            top = targetRect.top;
            maxHeight = Math.min(windowHeight - targetRect.top, windowHeight);
          } else {
            top = targetRect.bottom;
            maxHeight = Math.min(windowHeight - targetRect.bottom, windowHeight - targetRect.height);
          }
        } else if (align.bottom) {
          if (align.bottom === 'bottom') {
            top = targetRect.bottom - containerRect.height;
            maxHeight = Math.max(targetRect.bottom, 0);
          } else {
            top = targetRect.top - containerRect.height;
            maxHeight = Math.max(targetRect.top, 0);
          }
        } else {
          top = targetRect.top + targetRect.height / 2 - containerRect.height / 2;
        } // if we can't fit it all, see if there's more room the other direction


        if (containerRect.height > maxHeight) {
          // We need more room than we have.
          if (align.top && top > windowHeight / 2) {
            // We put it below, but there's more room above, put it above
            if (align.top === 'bottom') {
              if (responsive) {
                top = Math.max(targetRect.top - containerRect.height, 0);
              }

              maxHeight = targetRect.top;
            } else {
              if (responsive) {
                top = Math.max(targetRect.bottom - containerRect.height, 0);
              }

              maxHeight = targetRect.bottom;
            }
          } else if (align.bottom && maxHeight < windowHeight / 2) {
            // We put it above but there's more room below, put it below
            if (align.bottom === 'bottom') {
              if (responsive) {
                top = targetRect.top;
              }

              maxHeight = Math.min(windowHeight - top, windowHeight);
            } else {
              if (responsive) {
                top = targetRect.bottom;
              }

              maxHeight = Math.min(windowHeight - top, windowHeight - targetRect.height);
            }
          }
        }

        container.style.left = left + "px";

        if (stretch) {
          // offset width by 0.1 to avoid a bug in ie11 that
          // unnecessarily wraps the text if width is the same
          container.style.width = width + 0.1 + "px";
        } // the (position:absolute + scrollTop)
        // is presenting issues with desktop scroll flickering


        container.style.top = top + "px";
        maxHeight = windowHeight - (top || 0);

        if (theme.drop && theme.drop.maxHeight) {
          maxHeight = Math.min(maxHeight, (0, _utils.parseMetricToNum)(theme.drop.maxHeight));
        }

        container.style.maxHeight = maxHeight + "px";
      }
    });

    return _this;
  }

  DropContainer.getDerivedStateFromProps = function getDerivedStateFromProps(nextProps, prevState) {
    // Since the drop background can be different from the current theme context,
    // we update the theme to set the dark background context.
    var propsTheme = nextProps.theme;
    var stateTheme = prevState.theme,
        priorTheme = prevState.priorTheme;
    var dark = (0, _utils.backgroundIsDark)(propsTheme.global.drop.background, propsTheme);

    if (dark === propsTheme.dark && stateTheme) {
      return {
        theme: undefined,
        priorTheme: undefined
      };
    }

    if (dark !== propsTheme.dark && (!stateTheme || dark !== stateTheme.dark || propsTheme !== priorTheme)) {
      return {
        theme: _extends({}, propsTheme, {
          dark: dark,
          icon: dark ? propsTheme.iconThemes.dark : propsTheme.iconThemes.light
        }),
        priorTheme: propsTheme
      };
    }

    return null;
  };

  var _proto = DropContainer.prototype;

  _proto.componentDidMount = function componentDidMount() {
    var restrictFocus = this.props.restrictFocus;
    this.addScrollListener();
    window.addEventListener('resize', this.onResize);
    document.addEventListener('mousedown', this.onClickDocument);
    this.place();

    if (restrictFocus) {
      /* eslint-disable-next-line react/no-find-dom-node */
      (0, _reactDom.findDOMNode)(this.dropRef.current).focus();
    }
  };

  _proto.componentDidUpdate = function componentDidUpdate() {
    this.place();
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    this.removeScrollListener();
    window.removeEventListener('resize', this.onResize);
    document.removeEventListener('mousedown', this.onClickDocument);
  };

  _proto.render = function render() {
    var _this$props3 = this.props,
        alignProp = _this$props3.align,
        children = _this$props3.children,
        onClickOutside = _this$props3.onClickOutside,
        onEsc = _this$props3.onEsc,
        onKeyDown = _this$props3.onKeyDown,
        propsTheme = _this$props3.theme,
        rest = _objectWithoutPropertiesLoose(_this$props3, ["align", "children", "onClickOutside", "onEsc", "onKeyDown", "theme"]);

    var stateTheme = this.state.theme;
    var theme = stateTheme || propsTheme;

    var content = _react.default.createElement(_StyledDrop.StyledDrop, _extends({
      as: _Box.Box,
      elevation: theme.global.drop.shadowSize || 'small',
      tabIndex: "-1",
      ref: this.dropRef,
      alignProp: alignProp,
      theme: theme
    }, rest), children);

    if (stateTheme) {
      if (stateTheme.dark !== propsTheme.dark && stateTheme.icon) {
        content = _react.default.createElement(_contexts.ThemeContext.Provider, {
          value: stateTheme.icon
        }, content);
      }

      content = _react.default.createElement(_contexts2.ThemeContext.Provider, {
        value: stateTheme
      }, content);
    }

    return _react.default.createElement(_FocusedContainer.FocusedContainer, null, _react.default.createElement(_Keyboard.Keyboard, {
      onEsc: onEsc,
      onKeyDown: onKeyDown,
      target: "document"
    }, content));
  };

  return DropContainer;
}(_react.Component);

exports.DropContainer = DropContainer;

_defineProperty(DropContainer, "defaultProps", {
  align: {
    top: 'top',
    left: 'left'
  },
  stretch: 'width'
});