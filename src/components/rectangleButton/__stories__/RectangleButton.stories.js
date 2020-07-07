import React from 'react';
import { linkTo } from '@storybook/addon-links';
import { RectangleButton } from '..';

export default {
  title: 'RectangleButton',
  component: RectangleButton,
};

export const ToRectangleButton = () => <RectangleButton title="Trango Test" fromWhere="header"/>;

ToRectangleButton.story = {
  name: 'Blue Rectangular Button',
};
