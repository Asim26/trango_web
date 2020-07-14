import React from 'react';
import './SectionOne.css';

import { Container, Row, Col, Image, Button } from 'react-bootstrap';
import { IC_SECTION_1_NO_INTERNET_PROBLEM_LOGO, IC_SECTION_1_PRIVACY_LOGO, IC_SECTION_1_CLOUD_OR_HOST_LOGO } from '../../images';


export class SectionOne extends React.Component {
    render() {
        return (
            <div>

              <div className="section-one-div">
                  <Container>
                      <Row>
                          <Col className="col-lg-6">
                          <h2 className="secure">Secure</h2>
                          <h2 className="comm">Communications</h2>
                          <p className="para-sec-1">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                            <Button className="contact-blue-btn align-left-btn">
                               Get Started
                            </Button>
                          </Col>
                          
                          <Col className="col-lg-6">

                          </Col>
                      </Row>

                      <Row className="col-lg-12">
                         <Row>
                             <Col>
                                <div className="card-1"> 
                                <Image src={IC_SECTION_1_NO_INTERNET_PROBLEM_LOGO} className="card-1-logo"/>
                                <h4 className="card-1-heading">No Internet? No Problem</h4>
                                <p className="card-1-content">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                </div>
                             </Col>
                             <Col>
                                 <div className="card-2">
                                   <Image src={IC_SECTION_1_PRIVACY_LOGO} className="card-2-logo"/>
                                   <h4 className="card-2-heading">Privacy First </h4>
                                   <p className="card-2-content">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                 </div>
                             </Col>
                             <Col>
                                 <div className="card-3">
                                   <Image src={IC_SECTION_1_CLOUD_OR_HOST_LOGO} className="card-3-logo"/>
                                   <h4 className="card-3-heading">Cloud or Host Anywhere</h4>
                                   <p className="card-3-content">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                 </div>
                             </Col>
                         </Row>
                      </Row>
                  </Container>
                
              </div>
 
            </div>
        );
    }

}