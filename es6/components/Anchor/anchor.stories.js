import React from 'react';
import { storiesOf } from '@storybook/react';
import { Add } from "grommet-icons/es6/icons/Add";
import { Anchor, Box, Grommet } from 'grommet';
import { grommet } from 'grommet/themes';
storiesOf('Anchor', module).add('Default', function () {
  return React.createElement(Grommet, {
    theme: grommet
  }, React.createElement(Anchor, {
    href: "#"
  }, "Link"));
}).add('Colors', function () {
  return React.createElement(Grommet, {
    theme: grommet
  }, React.createElement(Box, {
    pad: "medium",
    gap: "medium"
  }, React.createElement(Anchor, {
    icon: React.createElement(Add, null),
    href: "#"
  }), React.createElement(Anchor, {
    icon: React.createElement(Add, null),
    label: "Add",
    href: "#"
  }), React.createElement(Anchor, {
    label: "Add",
    href: "#"
  })), React.createElement(Box, {
    background: "dark-1",
    pad: "medium",
    gap: "medium"
  }, React.createElement(Anchor, {
    icon: React.createElement(Add, null),
    href: "#"
  }), React.createElement(Anchor, {
    icon: React.createElement(Add, null),
    label: "Add",
    href: "#"
  }), React.createElement(Anchor, {
    icon: React.createElement(Add, null),
    label: "Add",
    href: "#"
  }), React.createElement(Anchor, {
    label: "Add",
    href: "#"
  })));
}).add('Inline', function () {
  return React.createElement(Grommet, {
    theme: grommet
  }, "This is ", React.createElement(Anchor, {
    label: "an inline link",
    href: "#"
  }), " with surrounding text.");
});