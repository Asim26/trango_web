import React from 'react';
import './RectangleButton.css';

export class RectangleButton extends React.Component {
    render() {
        return (
            <div  style={{clear:'both'}} className="right right-20">
                <button className="menu-blue-btn"><span className="get-started">Trango Web</span></button>
            </div>
        );
    }

}

