"use strict";

exports.__esModule = true;
exports.DropButton = void 0;

var _react = _interopRequireWildcard(require("react"));

var _recompose = require("recompose");

var _Button = require("../Button");

var _Drop = require("../Drop");

var _hocs = require("../hocs");

var _utils = require("../../utils");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var DropButton =
/*#__PURE__*/
function (_Component) {
  _inheritsLoose(DropButton, _Component);

  function DropButton() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _Component.call.apply(_Component, [this].concat(args)) || this;

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      buttonRef: _react.default.createRef()
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onDropClose", function () {
      var _this$props = _this.props,
          onClose = _this$props.onClose,
          open = _this$props.open;

      _this.setState({
        show: open || false
      }, function () {
        if (onClose) {
          onClose();
        }
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onToggle", function () {
      var _this$props2 = _this.props,
          onClose = _this$props2.onClose,
          onOpen = _this$props2.onOpen;
      var show = _this.state.show;

      _this.setState({
        show: !show
      }, show ? onClose && onClose() : onOpen && onOpen());
    });

    return _this;
  }

  DropButton.getDerivedStateFromProps = function getDerivedStateFromProps(nextProps, prevState) {
    var forwardRef = nextProps.forwardRef,
        open = nextProps.open;
    var buttonRef = prevState.buttonRef,
        show = prevState.show;
    var nextButtonRef = forwardRef || buttonRef;
    var reRenderOnMount = show === undefined && open;

    if (open !== undefined && open !== show) {
      return {
        show: open,
        reRenderOnMount: reRenderOnMount,
        buttonRef: nextButtonRef
      };
    }

    if (nextButtonRef !== buttonRef) {
      return {
        buttonRef: nextButtonRef
      };
    }

    return null;
  };

  var _proto = DropButton.prototype;

  _proto.componentDidMount = function componentDidMount() {
    var _this$state = this.state,
        buttonRef = _this$state.buttonRef,
        reRenderOnMount = _this$state.reRenderOnMount; // In case the caller starts with the drop open, before we have the
    // buttonRef, see if we have it now and re-render.

    if (reRenderOnMount && buttonRef.current) {
      this.setState({
        reRenderOnMount: false
      }); // eslint-disable-line
    }
  };

  _proto.componentDidUpdate = function componentDidUpdate(prevProps, prevState) {
    var _this$state2 = this.state,
        show = _this$state2.show,
        buttonRef = _this$state2.buttonRef;

    if (!show && prevState.show) {
      // focus on the button if the drop is closed
      (0, _utils.setFocusWithoutScroll)(buttonRef.current);
    }
  };

  _proto.render = function render() {
    var _this2 = this;

    var _this$props3 = this.props,
        disabled = _this$props3.disabled,
        dropAlign = _this$props3.dropAlign,
        forwardRef = _this$props3.forwardRef,
        dropContent = _this$props3.dropContent,
        dropTarget = _this$props3.dropTarget,
        id = _this$props3.id,
        open = _this$props3.open,
        theme = _this$props3.theme,
        rest = _objectWithoutPropertiesLoose(_this$props3, ["disabled", "dropAlign", "forwardRef", "dropContent", "dropTarget", "id", "open", "theme"]);

    var _this$state3 = this.state,
        buttonRef = _this$state3.buttonRef,
        show = _this$state3.show;
    delete rest.onClose;
    delete rest.onOpen;
    var drop;

    if (show && buttonRef.current) {
      drop = _react.default.createElement(_Drop.Drop, {
        id: id ? id + "__drop" : undefined,
        restrictFocus: true,
        align: dropAlign,
        target: dropTarget || buttonRef.current,
        onClickOutside: this.onDropClose,
        onEsc: function onEsc(event) {
          // prevents layer to close on esc
          event.stopPropagation();
          event.nativeEvent.stopImmediatePropagation();

          _this2.onDropClose();
        }
      }, dropContent);
    }

    return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_Button.Button, _extends({
      id: id,
      ref: buttonRef,
      disabled: disabled,
      onClick: this.onToggle
    }, rest)), drop);
  };

  return DropButton;
}(_react.Component);

_defineProperty(DropButton, "defaultProps", {
  a11yTitle: 'Open Drop',
  dropAlign: {
    top: 'top',
    left: 'left'
  }
});

var DropButtonDoc;

if (process.env.NODE_ENV !== 'production') {
  DropButtonDoc = require('./doc').doc(DropButton); // eslint-disable-line global-require
}

var DropButtonWrapper = (0, _recompose.compose)(_hocs.withTheme, _hocs.withForwardRef)(DropButtonDoc || DropButton);
exports.DropButton = DropButtonWrapper;