import React from 'react';
import { linkTo } from '@storybook/addon-links';
import { Header } from '../components/header';

export default {
  title: 'Header',
  component: Header,
};

export const ToHeader = () => <Header></Header>;

ToHeader.story = {
  name: 'Header',
};
