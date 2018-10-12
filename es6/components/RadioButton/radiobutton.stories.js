import React from 'react';
import { storiesOf } from '@storybook/react';
import { Grommet, RadioButton } from 'grommet';
import { grommet } from 'grommet/themes';

var SimpleRadioButton = function SimpleRadioButton() {
  return React.createElement(Grommet, {
    theme: grommet
  }, React.createElement(RadioButton, {
    label: "Choice 1",
    name: "radio"
  }), React.createElement(RadioButton, {
    label: "Choice 2",
    name: "radio"
  }));
};

storiesOf('RadioButton', module).add('Simple RadioButton', function () {
  return React.createElement(SimpleRadioButton, null);
});