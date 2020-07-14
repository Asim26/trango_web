import React from 'react';
import { Container, Row, Col, Card, Button, Image } from 'react-bootstrap';
import './SectionThree.css';

import { IC_MOBILE_1, IC_MOBILE_2, IC_MOBILE_3, IC_MOBILE_4, IC_MOBILE_5, IC_MOBILE_6, IC_MOBILE_7, IC_MOBILE_8, IC_HOW_IT_WORKS } from '../../images';

export class SectionThree extends React.Component {
    render() {
        return (
          <div className="sec-three-body">
          <Container>
              <Row>
                <Col>
                  <Image src={IC_MOBILE_1} className="mobile-1"/>
                  <Image src={IC_MOBILE_2} className="mobile-2"/>
                  <Image src={IC_MOBILE_3} className="mobile-3"/>
                   <Image src={IC_MOBILE_4} className="mobile-4"/>
                  <Image src={IC_MOBILE_5} className="mobile-5"/>
                  <Image src={IC_MOBILE_6} className="mobile-6"/>
                  <Image src={IC_MOBILE_7} className="mobile-7"/>
                  <Image src={IC_MOBILE_8} className="mobile-8"/>
                  <Image src={IC_HOW_IT_WORKS} className="how-it-works"/>

                    <h3 className="Do-you-want">Do you want to be in <br /><span>control of your data</span>?</h3>
                    <p className="para-content">Most of us do and increasingly so. When you own the hardware or the operating system trango is hosted on, you automatically get more control than.</p>
                    
                    <p className="para-1-content">When the sender has opened the application, they automatically register their I.P Address on the server.</p>
                    <p className="para-2-content">When the receiver opens the application or clicks on a file request from the sender, they also register their I.P Address on the server. </p>
                    <p className="para-3-content">If both the sender and receiver are on the same network, the server then initiates a direct connection between them and both the sender and receiver exchanges files. </p>
                    <p className="para-4-content">All of this is done in a <span className="matter-style">matter of milliseconds</span></p>
                </Col>
              </Row>
          </Container>
      </div>
        );
    }

}

