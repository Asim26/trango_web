import React from 'react';
import './Header.css';
import { RectangleButton } from '../rectangleButton';
import { Menu } from '../menu';
import { IC_MAIN_LOGO } from '../../images'

export class Header extends React.Component {
    render() {
        return (
            <div className="header">
                <div className="left left-header">
                <img src={IC_MAIN_LOGO} className="image-logo inline" alt="Trango"></img>
                <Menu></Menu>
                </div>
               
                <RectangleButton></RectangleButton>
            </div>
        );
    }

}

