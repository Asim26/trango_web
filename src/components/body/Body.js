import React from 'react';
import './Body.css';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

import { IC_ABOVEFOLD, IC_PARTNER_WITHUS, IC_TRANGO_SIMPLE_SCREEN } from '../../images'

export class Body extends React.Component {
    render() {
        return (

            <div className="body-div">
                <div className="w-100">
                    <Container></Container>
                </div>
                <div className="w-100">
                    <Container>
                        <Row>
                            <Col xs className="text-center trango-is-simple-h">Trango <span className="text-style-1">is Simple</span></Col>
                        </Row>
                        <Row>
                            <Col xs className="text-center">
                                Trango is bringing unlimited communications and connectivity to everyone. We are building a secure and fast infrastructure for all your instant communication needs. This infrastructure will allow you to connect, communicate and share with friends, family and coworkers with network efficiency and security. It will only involve the internet if and when required.
                        </Col>

                        </Row>
                        <Row>
                            <Col md-4 className="text-center">
                                <Col md-12 className="text-center">

                                </Col>
                                <Col md-12 className="text-center">

                                </Col>
                            </Col>
                            <Col md-4 className="text-center">
                                <Col md-4 className="text-center trango-simple-screen">
                                    <img src={IC_TRANGO_SIMPLE_SCREEN} className="inline w-100" alt="Partner With us" />
                                </Col>
                            </Col>
                            <Col md-4 className="text-center">
                                <Col md-12 className="text-center">

                                </Col>
                                <Col md-12 className="text-center">

                                </Col>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
        );
    }

}