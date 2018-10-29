"use strict";

exports.__esModule = true;
exports.base = exports.generate = void 0;

var _polished = require("polished");

var _styledComponents = require("styled-components");

var _grommetIcons = require("grommet-icons");

var _utils = require("../utils");

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var brandColor = '#7D4CDB';
var accentColors = ['#FD6FFF', '#61EC9F', '#60EBE1', '#FFCA58'];
var neutralColors = ['#3D138D', '#BE60EB', '#00C781', '#6194EB', '#FFB202'];
var statusColors = {
  critical: '#EB6060',
  error: '#EB6060',
  warning: '#F7E463',
  ok: '#7CD992',
  unknown: '#a8a8a8',
  disabled: '#a8a8a8'
};
var darkColors = ['#333333', '#444444', '#555555', '#666666', '#777777', '#999999'];
var lightColors = ['#F6F6F6', '#EEEEEE', '#DDDDDD', '#CCCCCC', '#BBBBBB', '#AAAAAA'];
var focusColor = accentColors[0];
var colors = {
  active: (0, _polished.rgba)(221, 221, 221, 0.5),
  black: '#000000',
  border: {
    dark: (0, _polished.rgba)(255, 255, 255, 0.33),
    light: (0, _polished.rgba)(0, 0, 0, 0.33)
  },
  brand: brandColor,
  control: {
    dark: 'accent-1',
    light: 'brand'
  },
  focus: focusColor,
  placeholder: '#AAAAAA',
  text: {
    dark: '#f8f8f8',
    light: '#444444'
  },
  white: '#FFFFFF'
};

var colorArray = function colorArray(array, prefix) {
  return array.forEach(function (color, index) {
    colors[prefix + "-" + (index + 1)] = color;
  });
};

colorArray(accentColors, 'accent');
colorArray(darkColors, 'dark');
colorArray(lightColors, 'light');
colorArray(neutralColors, 'neutral');
Object.keys(statusColors).forEach(function (color) {
  colors["status-" + color] = statusColors[color];
});

var generate = function generate(baseSpacing, scale) {
  if (baseSpacing === void 0) {
    baseSpacing = 24;
  }

  if (scale === void 0) {
    scale = 6;
  }

  // 24
  var baseFontSize = baseSpacing * 0.75; // 18

  var fontScale = baseSpacing / scale; // 4

  var fontSizing = function fontSizing(factor) {
    return {
      size: baseFontSize + factor * fontScale + "px",
      height: baseSpacing + factor * fontScale + "px",
      // maxWidth chosen to be ~50 characters wide
      // see: https://ux.stackexchange.com/a/34125
      maxWidth: baseSpacing * (baseFontSize + factor * fontScale) + "px"
    };
  };

  var borderWidth = 2;
  var result = {
    global: {
      animation: {
        duration: '1s',
        jiggle: {
          duration: '0.1s'
        }
      },
      borderSize: {
        xsmall: '1px',
        small: '2px',
        medium: baseSpacing / 6 + "px",
        // 4
        large: baseSpacing / 2 + "px",
        // 12
        xlarge: baseSpacing + "px" // 24

      },
      breakpoints: {
        small: {
          value: baseSpacing * 32,
          // 768
          borderSize: {
            xsmall: '1px',
            small: '2px',
            medium: baseSpacing / 6 + "px",
            // 4
            large: baseSpacing / 4 + "px",
            // 6
            xlarge: baseSpacing / 2 + "px" // 12

          },
          edgeSize: {
            none: '0px',
            hair: '1px',
            // for Chart
            xxsmall: '2px',
            xsmall: baseSpacing / 8 + "px",
            // 3
            small: baseSpacing / 4 + "px",
            // 6
            medium: baseSpacing / 2 + "px",
            // 12
            large: baseSpacing + "px",
            // 24
            xlarge: baseSpacing * 2 + "px" // 48

          },
          size: {
            xxsmall: baseSpacing + "px",
            // 24
            xsmall: baseSpacing * 2 + "px",
            // 48
            small: baseSpacing * 4 + "px",
            // 96
            medium: baseSpacing * 8 + "px",
            // 192
            large: baseSpacing * 16 + "px",
            // 384
            xlarge: baseSpacing * 32 + "px",
            // 768
            full: '100%'
          }
        },
        medium: {
          value: baseSpacing * 64 // 1536

        },
        large: {} // anything above 'medium'

      },
      colors: colors,
      control: {
        border: {
          width: '1px',
          radius: '4px',
          color: 'border'
        }
      },
      drop: {
        background: '#ffffff',
        border: {
          width: '0px',
          radius: '0px'
        },
        shadowSize: 'small'
      },
      edgeSize: {
        none: '0px',
        hair: '1px',
        // for Chart
        xxsmall: baseSpacing / 8 + "px",
        // 3
        xsmall: baseSpacing / 4 + "px",
        // 6
        small: baseSpacing / 2 + "px",
        // 12
        medium: baseSpacing + "px",
        // 24
        large: baseSpacing * 2 + "px",
        // 48
        xlarge: baseSpacing * 4 + "px",
        // 96
        responsiveBreakpoint: 'small'
      },
      elevation: {
        light: {
          none: 'none',
          xsmall: '0px 1px 2px rgba(100, 100, 100, 0.50)',
          small: '0px 2px 4px rgba(100, 100, 100, 0.50)',
          medium: '0px 3px 8px rgba(100, 100, 100, 0.50)',
          large: '0px 6px 12px rgba(100, 100, 100, 0.50)',
          xlarge: '0px 8px 16px rgba(100, 100, 100, 0.50)'
        },
        dark: {
          none: 'none',
          xsmall: '0px 2px 2px rgba(255, 255, 255, 0.40)',
          small: '0px 4px 4px rgba(255, 255, 255, 0.40)',
          medium: '0px 6px 8px rgba(255, 255, 255, 0.40)',
          large: '0px 8px 16px rgba(255, 255, 255, 0.40)',
          xlarge: '0px 10px 24px rgba(255, 255, 255, 0.40)'
        }
      },
      focus: {
        border: {
          color: 'focus',
          width: '2px'
        }
      },
      font: _extends({}, fontSizing(0)),
      hover: {
        background: {
          dark: {
            color: 'active',
            opacity: 'medium'
          },
          light: {
            color: 'active',
            opacity: 'medium'
          }
        },
        color: {
          dark: 'white',
          light: 'black'
        }
      },
      input: {
        weight: 600
      },
      opacity: {
        strong: '0.8',
        medium: '0.4',
        weak: '0.1'
      },
      spacing: baseSpacing + "px",
      size: {
        xxsmall: baseSpacing * 2 + "px",
        // 48
        xsmall: baseSpacing * 4 + "px",
        // 96
        small: baseSpacing * 8 + "px",
        // 192
        medium: baseSpacing * 16 + "px",
        // 384
        large: baseSpacing * 32 + "px",
        // 768
        xlarge: baseSpacing * 48 + "px",
        // 1152
        xxlarge: baseSpacing * 64 + "px",
        // 1536
        full: '100%'
      }
    },
    accordion: {
      icons: {
        collapse: _grommetIcons.FormUp,
        expand: _grommetIcons.FormDown // color: { dark: undefined, light: undefined },

      }
    },
    anchor: {
      textDecoration: 'none',
      fontWeight: 600,
      color: {
        dark: '#6194EB',
        light: '#1D67E3'
      },
      hover: {
        textDecoration: 'underline' // fontWeight: undefined,
        // extend: undefined,

      }
    },
    box: {
      responsiveBreakpoint: 'small' // when we switch rows to columns

    },
    button: {
      border: {
        // color: { dark: undefined, light: undefined }
        width: borderWidth + "px",
        radius: baseSpacing * 0.75 + "px"
      },
      // color: { dark: undefined, light: undefined }
      primary: {// color: { dark: undefined, light: undefined }
      },
      disabled: {
        opacity: 0.3
      },
      minWidth: baseSpacing * 4 + "px",
      maxWidth: baseSpacing * 16 + "px",
      padding: {
        vertical: baseSpacing / 4 - borderWidth + "px",
        horizontal: baseSpacing - borderWidth + "px"
      }
    },
    calendar: {
      // daySize must align with global.size
      small: {
        fontSize: baseFontSize - fontScale + "px",
        lineHeight: 1.375,
        daySize: baseSpacing * 8 / 7 + "px",
        slideDuration: '0.2s'
      },
      medium: {
        fontSize: baseFontSize + "px",
        lineHeight: 1.45,
        daySize: baseSpacing * 16 / 7 + "px",
        slideDuration: '0.5s'
      },
      large: {
        fontSize: baseFontSize + 3 * fontScale + "px",
        lineHeight: 1.11,
        daySize: baseSpacing * 32 / 7 + "px",
        slideDuration: '0.8s'
      },
      icons: {
        previous: _grommetIcons.Previous,
        next: _grommetIcons.Next,
        small: {
          previous: _grommetIcons.FormPrevious,
          next: _grommetIcons.FormNext
        }
      }
    },
    carousel: {
      icons: {
        current: _grommetIcons.Subtract,
        next: _grommetIcons.Next,
        previous: _grommetIcons.Previous // color: undefined,

      }
    },
    checkBox: {
      border: {
        color: {
          dark: 'rgba(255, 255, 255, 0.5)',
          light: 'rgba(0, 0, 0, 0.15)'
        },
        width: '2px'
      },
      check: {
        radius: '4px',
        thickness: '4px' // extend: undefined,

      },
      icon: {// size: undefined,
        // extend: undefined,
      },
      icons: {// checked: undefined,
      },
      hover: {
        border: {
          color: {
            dark: 'white',
            light: 'black'
          }
        }
      },
      size: baseSpacing + "px",
      // color: { dark: undefined, light: undefined },
      toggle: {
        color: {
          dark: '#d9d9d9',
          light: '#d9d9d9'
        },
        radius: baseSpacing + "px",
        size: baseSpacing * 2 + "px",
        // extend: undefined,
        knob: {// extend: undefined,
        }
      } // extend: undefined,

    },
    clock: {
      analog: {
        hour: {
          color: {
            dark: 'light-2',
            light: 'dark-3'
          },
          width: baseSpacing / 3 + "px",
          size: baseSpacing + "px",
          shape: 'round'
        },
        minute: {
          color: {
            dark: 'light-5',
            light: 'dark-5'
          },
          width: baseSpacing / 6 + "px",
          size: Math.round(baseSpacing / 2) + "px",
          shape: 'round'
        },
        second: {
          color: {
            dark: 'accent-1',
            light: 'accent-1'
          },
          width: baseSpacing / 8 + "px",
          size: Math.round(baseSpacing / 2.666) + "px",
          shape: 'round'
        },
        size: {
          small: baseSpacing * 3 + "px",
          medium: baseSpacing * 4 + "px",
          large: baseSpacing * 6 + "px",
          xlarge: baseSpacing * 9 + "px",
          huge: baseSpacing * 12 + "px"
        }
      },
      digital: {
        text: {
          xsmall: {
            size: baseFontSize - 2 * fontScale + "px",
            height: 1.5
          },
          small: {
            size: baseFontSize - fontScale + "px",
            height: 1.43
          },
          medium: {
            size: baseFontSize + "px",
            height: 1.375
          },
          large: {
            size: baseFontSize + fontScale + "px",
            height: 1.167
          },
          xlarge: {
            size: baseFontSize + 2 * fontScale + "px",
            height: 1.1875
          },
          xxlarge: {
            size: baseFontSize + 4 * fontScale + "px",
            height: 1.125
          }
        }
      }
    },
    collapsible: {
      minSpeed: 200,
      baseline: 500
    },
    dataTable: {
      header: {},
      groupHeader: {
        border: {
          side: 'bottom',
          size: 'xsmall'
        },
        fill: 'vertical',
        pad: {
          horizontal: 'small',
          vertical: 'xsmall'
        },
        background: {
          dark: 'dark-2',
          light: 'light-2'
        }
      },
      icons: {
        ascending: _grommetIcons.FormDown,
        contract: _grommetIcons.FormUp,
        descending: _grommetIcons.FormUp,
        expand: _grommetIcons.FormDown
      },
      resize: {
        border: {
          side: 'right',
          color: 'border'
        }
      },
      primary: {
        weight: 'bold'
      }
    },
    // drop: {
    //   maxHeight: undefined,
    // },
    formField: {
      border: {
        color: 'border',
        position: 'inner',
        side: 'bottom',
        error: {
          color: {
            dark: 'white',
            light: 'status-critical'
          }
        }
      },
      error: {
        color: {
          dark: 'status-critical',
          light: 'status-critical'
        }
      },
      help: {
        color: {
          dark: 'dark-5',
          light: 'dark-5'
        }
      },
      label: {}
    },
    grommet: {},
    heading: {
      font: {// family: undefined
      },
      level: {
        1: {
          small: _extends({}, fontSizing(4)),
          medium: _extends({}, fontSizing(8)),
          large: _extends({}, fontSizing(16)),
          xlarge: _extends({}, fontSizing(24))
        },
        2: {
          small: _extends({}, fontSizing(2)),
          medium: _extends({}, fontSizing(4)),
          large: _extends({}, fontSizing(8)),
          xlarge: _extends({}, fontSizing(12))
        },
        3: {
          small: _extends({}, fontSizing(1)),
          medium: _extends({}, fontSizing(1)),
          large: _extends({}, fontSizing(4)),
          xlarge: _extends({}, fontSizing(6))
        },
        4: {
          small: _extends({}, fontSizing(0)),
          medium: _extends({}, fontSizing(0)),
          large: _extends({}, fontSizing(0)),
          xlarge: _extends({}, fontSizing(0))
        }
      },
      responsiveBreakpoint: 'small',
      // when we scale the font size down
      weight: 600
    },
    icon: {
      colors: colors
    },
    iconThemes: {},
    layer: {
      background: 'white',
      border: {
        radius: '4px'
      },
      overlay: {
        background: 'rgba(0, 0, 0, 0.5)'
      },
      responsiveBreakpoint: 'small' // when Layer takes over the full screen

    },
    menu: {
      // background: undefined,
      // extend: undefined,
      icons: {
        down: _grommetIcons.FormDown
      }
    },
    paragraph: {
      small: _extends({}, fontSizing(-1)),
      medium: _extends({}, fontSizing(0)),
      large: _extends({}, fontSizing(1)),
      xlarge: _extends({}, fontSizing(2)),
      xxlarge: _extends({}, fontSizing(4))
    },
    radioButton: {
      border: {
        color: {
          dark: 'rgba(255, 255, 255, 0.5)',
          light: 'rgba(0, 0, 0, 0.15)'
        },
        width: '2px'
      },
      check: {
        radius: '100%' // color: { dark: undefined, light: undefined },
        // extend: undefined,

      },
      hover: {
        border: {
          color: {
            dark: 'white',
            light: 'black'
          }
        }
      },
      icon: {// size: undefined,
        // extend: undefined,
      },
      icons: {// circle: undefined,
      },
      gap: 'small',
      size: baseSpacing + "px"
    },
    rangeInput: {
      track: {
        height: '4px',
        color: (0, _styledComponents.css)(["", ";"], function (props) {
          return (0, _polished.rgba)((0, _utils.normalizeColor)('border', props.theme), 0.2);
        })
      },
      thumb: {// color: { dark: undefined, light: undefined },
      }
    },
    select: {
      // background: undefined,
      icons: {
        // color: { dark: undefined, light: undefined },
        down: _grommetIcons.FormDown
      },
      // searchInput: undefined,
      step: 20,
      control: {// extend: undefined,
      }
    },
    tab: {
      active: {
        weight: 'bold' // background: undefined,

      },
      // background: undefined,
      border: {
        side: 'bottom',
        size: 'small',
        color: {
          dark: 'white',
          light: 'black'
        },
        hover: {
          color: {
            dark: 'white',
            light: 'black'
          }
        }
      },
      color: 'text',
      // extend: undefined,
      hover: {// background: undefined,
        // extend: undefined,
      },
      margin: {
        vertical: 'xxsmall',
        horizontal: 'small'
      },
      pad: {
        bottom: 'xsmall'
      }
    },
    tabs: {
      // background: undefined,
      // extend: undefined,
      header: {// background: undefined,
        // extend: undefined,
      } // gap: undefined,

    },
    table: {
      header: {
        align: 'start',
        pad: {
          horizontal: 'small',
          vertical: 'xsmall'
        },
        border: 'bottom',
        verticalAlign: 'bottom',
        fill: 'vertical' // background: undefined,
        // extend: undefined,

      },
      body: {
        align: 'start',
        pad: {
          horizontal: 'small',
          vertical: 'xsmall'
        } // border: undefined,
        // extend: undefined,

      },
      footer: {
        align: 'start',
        pad: {
          horizontal: 'small',
          vertical: 'xsmall'
        },
        border: 'top',
        verticalAlign: 'top',
        fill: 'vertical' // extend: undefined,

      }
    },
    text: {
      xsmall: _extends({}, fontSizing(-1.5)),
      small: _extends({}, fontSizing(-1)),
      medium: _extends({}, fontSizing(0)),
      large: _extends({}, fontSizing(1)),
      xlarge: _extends({}, fontSizing(2)),
      xxlarge: _extends({}, fontSizing(4))
    },
    // textInput: {
    //   extend: undefined,
    // },
    video: {
      captions: {
        background: 'rgba(0, 0, 0, 0.7)'
      },
      // controls: { background: undefined },
      icons: {
        closedCaption: _grommetIcons.ClosedCaption,
        configure: _grommetIcons.Actions,
        fullScreen: _grommetIcons.Expand,
        pause: _grommetIcons.Pause,
        play: _grommetIcons.Play,
        reduceVolume: _grommetIcons.VolumeLow,
        volume: _grommetIcons.Volume // color: { dark: undefined, light: undefined },

      } // scrubber: { track: { color: undefined } },

    },
    worldMap: {
      continent: {
        active: '8px',
        base: '6px'
      },
      place: {
        active: '20px',
        base: '8px'
      }
    }
  };
  return (0, _utils.deepFreeze)(result);
};

exports.generate = generate;
var base = generate(24);
exports.base = base;