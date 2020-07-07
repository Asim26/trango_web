import React from 'react';
import './Menu.css';

export class Menu extends React.Component {
    render() {
 let linksMarkup = this.props.links.map((link , index) => {
     return (
     <li><a href={link.link}>{link.lable}</a></li>
     );
 });

        return (
        <ul className="nav-menu inline left-25">{linksMarkup}</ul>
        );
    }

}