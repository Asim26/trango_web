import React from 'react';
import { linkTo } from '@storybook/addon-links';
import { Menu } from '../components/menu';

export default {
  title: 'Menu',
  component: Menu,
};

export const ToMenu = () => <Menu></Menu>;

ToMenu.story = {
  name: 'Top Menu Web',
};
