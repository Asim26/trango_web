import React from 'react';

import { Support } from '../../components/support';
import { Footer } from '../../components/footer';


// Shift ALt O   ... to remove unnecessary imports
export class SupportScreen extends React.Component {
    render() {
        return (
            <div className="main-container">               
                <Support />
                
                <Footer/>
            </div>
        );
    }

}

