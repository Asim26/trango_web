import React from 'react';

import { Pricing } from '../../components/pricing';
import { Footer } from '../../components/footer';

// Shift ALt O   ... to remove unnecessary imports
export class PricingScreen extends React.Component {
    render() {
        return (
            <div className="main-container">
                <Pricing />
                <Footer/>
            </div>
        );
    }

}

