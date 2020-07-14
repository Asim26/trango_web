import React from 'react';
import './Header.css';
import { RectangleButton } from '../rectangleButton';
import { Menu } from '../menu';
import { IC_MAIN_LOGO } from '../../images'

export class Header extends React.Component {
    render() {
        let links =[
            {lable: 'Products' , link:'/products'},
            {lable: 'Pricing' , link:'/pricing'},
            {lable: 'Support' , link:'/support'},
            {lable: ' Contact us' , link:'/contactUs'},
        ];
        return (
            <div className="header">
                <div className="left left-header">
                    <img src={IC_MAIN_LOGO} className="image-logo inline" alt="Trango"></img>
                    <Menu links={links}/>
                </div>
                <RectangleButton title={"Trango Web"} fromWhere={"header"} />
            </div>
        );
    }

}

