import React from 'react';
import './SecureComm.css';

import { Container, Row, Col, Card, Button } from 'react-bootstrap';


export class SecureComm extends React.Component {
    render() {
        return (
            <div>

              <div className="secure-comm-div">
                <Container>
                    <Row>
                        <Col>
                            <h3 className="text-center secure-font-style">Secure</h3>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <h3 className="text-center comm-font-style">Communication</h3>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <p className="text-center para-font-style">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                           <Button className="prc-blue-btn">
                               Pricing
                           </Button>
                        </Col>
                    </Row>
                </Container>
              </div>
 
            </div>
        );
    }

}