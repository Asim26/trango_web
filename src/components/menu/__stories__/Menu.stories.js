import React from 'react';
import { linkTo } from '@storybook/addon-links';
import { Menu } from '..';

export default {
  title: 'Menu',
  component: Menu,
};

let links =[
  {lable: 'Products' , link:'#Products'},
  {lable: 'Pricing' , link:'#Pricing'},
  {lable: 'Support' , link:'#Support'},
  {lable: ' Contact us' , link:'# ContactUs'},
];

export const ToMenu = () => <div style={{backgroundColor:'#000'}}><Menu links={links}/></div>;

ToMenu.story = {
  name: 'Top Menu Web',
};
