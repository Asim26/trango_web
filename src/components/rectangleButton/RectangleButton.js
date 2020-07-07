import React from 'react';
import './RectangleButton.css';

export class RectangleButton extends React.Component {
    constructor(props) {
        super(props);
    }
    getClassName() {
        if (this.props.fromWhere === 'header') {
            return "menu-blue-btn";
        } else if(this.props.fromWhere === 'contactUs'){
            return "contact-us-white-btn";
        }
    }
    render() {
        return (
            <div style={{ clear: 'both' }} className="right right-20">
                <button className={this.getClassName()}><span className="get-started">{this.props.title}</span></button>
            </div>
        );
    }

}

