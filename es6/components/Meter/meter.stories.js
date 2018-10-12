import React from 'react';
import { storiesOf } from '@storybook/react';
import { Grommet, Meter } from 'grommet';
import { grommet } from 'grommet/themes';

var BarMeter = function BarMeter() {
  return React.createElement(Grommet, {
    theme: grommet
  }, React.createElement(Meter, {
    type: "bar",
    background: "light-2",
    values: [{
      value: 30
    }]
  }));
};

var CircleMeter = function CircleMeter() {
  return React.createElement(Grommet, {
    theme: grommet
  }, React.createElement(Meter, {
    type: "circle",
    background: "light-2",
    values: [{
      value: 30
    }]
  }));
};

storiesOf('Meter', module).add('Bar Meter', function () {
  return React.createElement(BarMeter, null);
}).add('Circle Meter', function () {
  return React.createElement(CircleMeter, null);
});