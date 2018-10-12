"use strict";

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react2 = require("@storybook/react");

var _grommetIcons = require("grommet-icons");

var _grommet = require("grommet");

var _themes = require("grommet/themes");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var UncontrolledTabs = function UncontrolledTabs() {
  return _react.default.createElement(_grommet.Grommet, {
    theme: _themes.grommet
  }, _react.default.createElement(_grommet.Tabs, null, _react.default.createElement(_grommet.Tab, {
    title: "Tab 1"
  }, _react.default.createElement(_grommet.Box, {
    margin: "small",
    pad: "large",
    align: "center",
    background: "accent-1"
  }, _react.default.createElement(_grommetIcons.Attraction, {
    size: "xlarge"
  }))), _react.default.createElement(_grommet.Tab, {
    title: "Tab 2"
  }, _react.default.createElement(_grommet.Box, {
    margin: "small",
    pad: "large",
    align: "center",
    background: "accent-2"
  }, _react.default.createElement(_grommetIcons.TreeOption, {
    size: "xlarge"
  }))), _react.default.createElement(_grommet.Tab, {
    title: "Tab 3"
  }, _react.default.createElement(_grommet.Box, {
    margin: "small",
    pad: "large",
    align: "center",
    background: "accent-3"
  }, _react.default.createElement(_grommetIcons.Car, {
    size: "xlarge"
  })))));
};

var ControlledTabs =
/*#__PURE__*/
function (_Component) {
  _inheritsLoose(ControlledTabs, _Component);

  function ControlledTabs() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _Component.call.apply(_Component, [this].concat(args)) || this;

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {});

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onActive", function (index) {
      return _this.setState({
        index: index
      });
    });

    return _this;
  }

  var _proto = ControlledTabs.prototype;

  _proto.render = function render() {
    var index = this.state.index;
    return _react.default.createElement(_grommet.Grommet, {
      theme: _themes.grommet
    }, _react.default.createElement(_grommet.Tabs, {
      activeIndex: index,
      onActive: this.onActive
    }, _react.default.createElement(_grommet.Tab, {
      title: "Tab 1"
    }, _react.default.createElement(_grommet.Box, {
      margin: "small",
      pad: "large",
      align: "center",
      background: "accent-1"
    }, _react.default.createElement(_grommetIcons.Attraction, {
      size: "xlarge"
    }))), _react.default.createElement(_grommet.Tab, {
      title: "Tab 2"
    }, _react.default.createElement(_grommet.Box, {
      margin: "small",
      pad: "large",
      align: "center",
      background: "accent-2"
    }, _react.default.createElement(_grommetIcons.TreeOption, {
      size: "xlarge"
    }))), _react.default.createElement(_grommet.Tab, {
      title: "Tab 3"
    }, _react.default.createElement(_grommet.Box, {
      margin: "small",
      pad: "large",
      align: "center",
      background: "accent-3"
    }, _react.default.createElement(_grommetIcons.Car, {
      size: "xlarge"
    })))));
  };

  return ControlledTabs;
}(_react.Component);

var ResponsiveTabs =
/*#__PURE__*/
function (_Component2) {
  _inheritsLoose(ResponsiveTabs, _Component2);

  function ResponsiveTabs() {
    var _this2;

    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    _this2 = _Component2.call.apply(_Component2, [this].concat(args)) || this;

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this2)), "state", {});

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this2)), "onActive", function (index) {
      return _this2.setState({
        index: index
      });
    });

    return _this2;
  }

  var _proto2 = ResponsiveTabs.prototype;

  _proto2.render = function render() {
    var index = this.state.index;
    return _react.default.createElement(_grommet.Grommet, {
      theme: _themes.grommet
    }, _react.default.createElement(_grommet.Tabs, {
      activeIndex: index,
      onActive: this.onActive
    }, _react.default.createElement(_grommet.Tab, {
      title: "Tab 1"
    }, _react.default.createElement(_grommet.Box, {
      margin: "small",
      pad: "large",
      align: "center",
      background: "accent-1"
    }, _react.default.createElement(_grommetIcons.Attraction, {
      size: "xlarge"
    }))), _react.default.createElement(_grommet.Tab, {
      title: "Tab 2"
    }, _react.default.createElement(_grommet.Box, {
      margin: "small",
      pad: "large",
      align: "center",
      background: "accent-2"
    }, _react.default.createElement(_grommetIcons.TreeOption, {
      size: "xlarge"
    }))), _react.default.createElement(_grommet.Tab, {
      title: "Tab 3"
    }, _react.default.createElement(_grommet.Box, {
      margin: "small",
      pad: "large",
      align: "center",
      background: "accent-3"
    }, _react.default.createElement(_grommetIcons.Car, {
      size: "xlarge"
    }))), _react.default.createElement(_grommet.Tab, {
      title: "Tab 4"
    }, _react.default.createElement(_grommet.Box, {
      margin: "small",
      pad: "large",
      align: "center",
      background: "accent-1"
    }, _react.default.createElement(_grommetIcons.Attraction, {
      size: "xlarge"
    }))), _react.default.createElement(_grommet.Tab, {
      title: "Tab 5"
    }, _react.default.createElement(_grommet.Box, {
      margin: "small",
      pad: "large",
      align: "center",
      background: "accent-2"
    }, _react.default.createElement(_grommetIcons.TreeOption, {
      size: "xlarge"
    }))), _react.default.createElement(_grommet.Tab, {
      title: "Tab 6"
    }, _react.default.createElement(_grommet.Box, {
      margin: "small",
      pad: "large",
      align: "center",
      background: "accent-3"
    }, _react.default.createElement(_grommetIcons.Car, {
      size: "xlarge"
    }))), _react.default.createElement(_grommet.Tab, {
      title: "Tab 7"
    }, _react.default.createElement(_grommet.Box, {
      margin: "small",
      pad: "large",
      align: "center",
      background: "accent-1"
    }, _react.default.createElement(_grommetIcons.Attraction, {
      size: "xlarge"
    }))), _react.default.createElement(_grommet.Tab, {
      title: "Tab 8"
    }, _react.default.createElement(_grommet.Box, {
      margin: "small",
      pad: "large",
      align: "center",
      background: "accent-2"
    }, _react.default.createElement(_grommetIcons.TreeOption, {
      size: "xlarge"
    }))), _react.default.createElement(_grommet.Tab, {
      title: "Tab 9"
    }, _react.default.createElement(_grommet.Box, {
      margin: "small",
      pad: "large",
      align: "center",
      background: "accent-3"
    }, _react.default.createElement(_grommetIcons.Car, {
      size: "xlarge"
    }))), _react.default.createElement(_grommet.Tab, {
      title: "Tab 10"
    }, _react.default.createElement(_grommet.Box, {
      margin: "small",
      pad: "large",
      align: "center",
      background: "accent-1"
    }, _react.default.createElement(_grommetIcons.Attraction, {
      size: "xlarge"
    }))), _react.default.createElement(_grommet.Tab, {
      title: "Tab 11"
    }, _react.default.createElement(_grommet.Box, {
      margin: "small",
      pad: "large",
      align: "center",
      background: "accent-1"
    }, _react.default.createElement(_grommetIcons.Attraction, {
      size: "xlarge"
    }))), _react.default.createElement(_grommet.Tab, {
      title: "Tab 12"
    }, _react.default.createElement(_grommet.Box, {
      margin: "small",
      pad: "large",
      align: "center",
      background: "accent-2"
    }, _react.default.createElement(_grommetIcons.TreeOption, {
      size: "xlarge"
    }))), _react.default.createElement(_grommet.Tab, {
      title: "Tab 13"
    }, _react.default.createElement(_grommet.Box, {
      margin: "small",
      pad: "large",
      align: "center",
      background: "accent-3"
    }, _react.default.createElement(_grommetIcons.Car, {
      size: "xlarge"
    }))), _react.default.createElement(_grommet.Tab, {
      title: "Tab 14"
    }, _react.default.createElement(_grommet.Box, {
      margin: "small",
      pad: "large",
      align: "center",
      background: "accent-1"
    }, _react.default.createElement(_grommetIcons.Attraction, {
      size: "xlarge"
    }))), _react.default.createElement(_grommet.Tab, {
      title: "Tab 15"
    }, _react.default.createElement(_grommet.Box, {
      margin: "small",
      pad: "large",
      align: "center",
      background: "accent-2"
    }, _react.default.createElement(_grommetIcons.TreeOption, {
      size: "xlarge"
    }))), _react.default.createElement(_grommet.Tab, {
      title: "Tab 16"
    }, _react.default.createElement(_grommet.Box, {
      margin: "small",
      pad: "large",
      align: "center",
      background: "accent-3"
    }, _react.default.createElement(_grommetIcons.Car, {
      size: "xlarge"
    }))), _react.default.createElement(_grommet.Tab, {
      title: "Tab 17"
    }, _react.default.createElement(_grommet.Box, {
      margin: "small",
      pad: "large",
      align: "center",
      background: "accent-1"
    }, _react.default.createElement(_grommetIcons.Attraction, {
      size: "xlarge"
    }))), _react.default.createElement(_grommet.Tab, {
      title: "Tab 18"
    }, _react.default.createElement(_grommet.Box, {
      margin: "small",
      pad: "large",
      align: "center",
      background: "accent-2"
    }, _react.default.createElement(_grommetIcons.TreeOption, {
      size: "xlarge"
    }))), _react.default.createElement(_grommet.Tab, {
      title: "Tab 19"
    }, _react.default.createElement(_grommet.Box, {
      margin: "small",
      pad: "large",
      align: "center",
      background: "accent-3"
    }, _react.default.createElement(_grommetIcons.Car, {
      size: "xlarge"
    }))), _react.default.createElement(_grommet.Tab, {
      title: "Tab 20"
    }, _react.default.createElement(_grommet.Box, {
      margin: "small",
      pad: "large",
      align: "center",
      background: "accent-1"
    }, _react.default.createElement(_grommetIcons.Attraction, {
      size: "xlarge"
    })))));
  };

  return ResponsiveTabs;
}(_react.Component);

var RichTabTitle = function RichTabTitle(_ref) {
  var icon = _ref.icon,
      label = _ref.label;
  return _react.default.createElement(_grommet.Box, {
    direction: "row",
    align: "center",
    gap: "xsmall",
    margin: "xsmall"
  }, icon, _react.default.createElement(_grommet.Text, {
    size: "small"
  }, _react.default.createElement("strong", null, label)));
};

RichTabTitle.propTypes = {
  icon: _propTypes.default.node.isRequired,
  label: _propTypes.default.string.isRequired
};

var RichTabs = function RichTabs() {
  return _react.default.createElement(_grommet.Grommet, {
    theme: _themes.grommet
  }, _react.default.createElement(_grommet.Tabs, null, _react.default.createElement(_grommet.Tab, {
    title: _react.default.createElement(RichTabTitle, {
      icon: _react.default.createElement(_grommetIcons.CircleInformation, {
        color: "accent-1"
      }),
      label: "Personal Data"
    })
  }, _react.default.createElement(_grommet.FormField, {
    label: "Name"
  }, _react.default.createElement(_grommet.TextInput, {
    placeholder: "Enter your name..."
  }))), _react.default.createElement(_grommet.Tab, {
    title: _react.default.createElement(RichTabTitle, {
      icon: _react.default.createElement(_grommetIcons.Currency, {
        color: "neutral-5"
      }),
      label: "Payment"
    })
  }, _react.default.createElement(_grommet.FormField, {
    label: "Card Number"
  }, _react.default.createElement(_grommet.TextInput, {
    placeholder: "Enter your card number..."
  })))));
};

(0, _react2.storiesOf)('Tabs', module).add('Uncontrolled Tabs', function () {
  return _react.default.createElement(UncontrolledTabs, null);
}).add('Controlled Tabs', function () {
  return _react.default.createElement(ControlledTabs, null);
}).add('Responsive Tabs', function () {
  return _react.default.createElement(ResponsiveTabs, null);
}).add('Rich Tabs', function () {
  return _react.default.createElement(RichTabs, null);
});