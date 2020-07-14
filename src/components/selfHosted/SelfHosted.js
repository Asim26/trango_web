import React from 'react';
import './SelfHosted.css';
import { Container, Row, Col, Card, Button, Image } from 'react-bootstrap';

import { IC_SELF_HOSTED } from '../../images'

export class SelfHosted extends React.Component {
    render() {
        return (
            <div>
                <div className="self-hosted-div">
                    <Container>
                      <Row className="col-lg-12">
                          <Col className="col-lg-6">
                          <Image src={IC_SELF_HOSTED} className="self-hosted" />
                          </Col>
                          <Col className="col-lg-6">
                             <h3 className="self-hosted-style">Self-Hosted</h3>
                             <p className="para-1-style">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                             <p className="para-2-style">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                          </Col>
                      </Row>
                    </Container>
                </div>
            </div>
        );
    }

}