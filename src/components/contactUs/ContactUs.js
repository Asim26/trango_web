import React from 'react';
import './ContactUs.css';
import { Container, Row, Col, Card, Button, Image } from 'react-bootstrap';

import { IC_CONTACT_US, IC_CONTACT_US_LOCATION_LOGO, IC_CONTACT_US_EMAIL_LOGO, IC_CONTACT_US_PHONE_LOGO } from '../../images';

export class ContactUs extends React.Component {
    render() {
        return (
            <div>
                <div className="contact-us-div">
                    <Container>
                        <Row class="col-lg-12">
                           <Col class="col-lg-6">
                               <h4 className="contact-us">Contact Us</h4>
                               <p className="contact-us-content">Reach out to us for any inquiry or suggestion.</p>
                               <input type="text" className="full-name" placeholder="Full Name" />
                                <input type="text" className="email-address" placeholder="Email Address" />
                               <input type="text" className="message" />
                               <br/>
                               <Button className="submit-blue-btn">
                                   Submit
                                </Button>                           
                           </Col>                           
                           <Col class="col-lg-6">
                            <Image src={IC_CONTACT_US} className="map" />
                           </Col>
                        </Row>

                        <Row className="col-lg-12">
                            <Col className="col-lg-4">
                               <Image src={IC_CONTACT_US_LOCATION_LOGO}  className="location-logo" />
                               <h4 className="location-heading">Location</h4>
                               <p className="location-content">517, Sunder Industrial Estate,
                                   Lahore Pakistan
                                </p>
                            </Col>
                            <Col className="col-lg-4">
                               <Image src={IC_CONTACT_US_EMAIL_LOGO}  className="email-logo" />
                               <h4 className="email-heading">Email</h4>
                               <p className="email-content">support@trango.io </p>
                            </Col>
                            <Col className="col-lg-4">
                                <Image src={IC_CONTACT_US_PHONE_LOGO}  className="phone-logo" />
                                <h4 className="phone-heading">Phone</h4>
                                <p className="phone-content">+92 (42) 35298681 </p>
                            </Col>
                        </Row>
                    </Container>
                 </div>   
            </div>
        );
    }

}