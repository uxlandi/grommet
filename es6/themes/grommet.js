import { css } from 'styled-components';
import { deepFreeze } from '../utils';
var workSansPath = 'https://fonts.gstatic.com/s/worksans/v2';
var zillaSlabPath = 'https://fonts.gstatic.com/s/zillaslab/v3';
export var grommet = deepFreeze({
  global: {
    colors: {
      background: '#ffffff'
    },
    font: {
      family: "'Work Sans', Arial, sans-serif",
      face: "\n        @font-face {\n          font-family: 'Work Sans';\n          font-style: normal;\n          font-weight: 400;\n          src:\n            local('Work Sans'),\n            local('WorkSans-Regular'),\n            url(\"" + workSansPath + "/ElUAY9q6T0Ayx4zWzW63VJBw1xU1rKptJj_0jans920.woff2\") format('woff2');\n        }\n\n        @font-face {\n          font-family: 'Work Sans';\n          font-style: normal;\n          font-weight: 600;\n          src:\n            local('Work Sans SemiBold'),\n            local('WorkSans-SemiBold'),\n            url(\"" + workSansPath + "/z9rX03Xuz9ZNHTMg1_ghGRampu5_7CjHW5spxoeN3Vs.woff2\") format('woff2');\n        }\n\n        @font-face {\n          font-family: 'Zilla Slab';\n          font-style: normal;\n          font-weight: 400;\n          src:\n            local('Zilla Slab Regular'),\n            local('ZillaSlab-Regular'),\n            url(\"" + zillaSlabPath + "/dFa6ZfeM_74wlPZtksIFajo6_V6LVlA.woff2\") format('woff2');\n        }\n\n        @font-face {\n          font-family: 'Zilla Slab';\n          font-style: normal;\n          font-weight: 600;\n          src:\n            local('Zilla Slab SemiBold'),\n            local('ZillaSlab-SemiBold'),\n            url(\"" + zillaSlabPath + "/dFa5ZfeM_74wlPZtksIFYuUe6HOpW3pwfa0.woff2\") format('woff2');\n        }\n      "
    }
  },
  anchor: {
    textDecoration: 'underline',
    color: {
      dark: '#FD6FFF',
      light: '#9060EB'
    }
  },
  button: {
    extend: css(["", ""], function (props) {
      return !props.plain && 'font-weight: bold;';
    })
  },
  checkBox: {
    icon: {
      extend: css(["box-sizing:border-box;position:absolute;top:0px;left:0px;width:", ";height:", ";"], function (props) {
        return props.theme.checkBox.size;
      }, function (props) {
        return props.theme.checkBox.size;
      })
    }
  },
  heading: {
    font: {
      family: "'Zilla Slab', 'Work Sans', Arial, sans-serif"
    }
  }
});