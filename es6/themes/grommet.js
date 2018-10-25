import { css } from 'styled-components';
import { deepFreeze } from '../utils';
export var grommet = deepFreeze({
  global: {
    colors: {
      background: '#ffffff'
    },
    font: {
      family: '"San Francisco", "Helvetica Neue", Helvetica, Arial, sans-serif'
    }
  },
  anchor: {
    color: {
      dark: '#FD6FFF',
      light: '#9060EB'
    }
  },
  button: {
    extend: css(["", ""], function (props) {
      return !props.plain && 'font-weight: bold;';
    })
  }
});