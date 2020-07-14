import React from 'react';

import { SecureComm } from '../../components/secureComm';
import { ConsumerApp } from '../../components/consumerApp';
import { SelfHosted } from '../../components/selfHosted';
import { SelfCloudHosted } from '../../components/selfCloudHosted';

import { Footer } from '../../components/footer';

// Shift ALt O   ... to remove unnecessary imports
export class ProductsScreen extends React.Component {
    render() {
        return (
            <div className="main-container">
                <SecureComm />
                <ConsumerApp />
                <SelfHosted />
                <SelfCloudHosted />

                <Footer/>               
         </div>
        );
    }

}

