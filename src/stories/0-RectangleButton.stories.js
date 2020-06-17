import React from 'react';
import { linkTo } from '@storybook/addon-links';
import { RectangleButton } from '../components/rectangleButton';

export default {
  title: 'RectangleButton',
  component: RectangleButton,
};

export const ToRectangleButton = () => <RectangleButton></RectangleButton>;

ToRectangleButton.story = {
  name: 'Blue Rectangular Button',
};
