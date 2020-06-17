import React from 'react';
import './Menu.css';

export class Menu extends React.Component {
    render() {
        return (
                <ul className="nav-menu inline left-25">
                    <li>Products</li>
                    <li>Pricing</li>
                    <li>Support</li>
                    <li>Contact us</li>
                </ul>
        );
    }

}