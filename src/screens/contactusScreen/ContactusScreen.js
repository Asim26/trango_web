import React from 'react';
import { ContactUs } from '../../components/contactUs';
import { Footer } from '../../components/footer';


// Shift ALt O   ... to remove unnecessary imports
export class ContactusScreen extends React.Component {
    render() {
        return (
            <div className="main-container">
                <ContactUs />

                <Footer/>
            </div>
        );
    }

}

