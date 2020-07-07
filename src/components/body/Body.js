import React from 'react';
import './Body.css';
import { Container, Row, Col } from 'react-bootstrap';

import {
    IC_TRANGO_SIMPLE_SCREEN,
    IC_TRANGO_SIMPLE_AUDIO,
    IC_TRANGO_SIMPLE_CHAT,
    IC_TRANGO_SIMPLE_FILESHARING,
    IC_TRANGO_SIMPLE_LOCALCOM
} from '../../images'

export class Body extends React.Component {
    render() {
        return (

            <div className="body-div">
                <div className="w-100">
                </div>
                <div className="w-100">
                    <Container className="mw-100 p-5percent">
                        <Row>
                            <Col xs className="text-center trango-is-simple-h">Trango <span className="text-style-1">is Simple</span></Col>
                        </Row>
                        <Row>
                            <Col xs className="text-center trango-is-simple-desc">
                                Trango is bringing unlimited communications and connectivity to everyone. We are building a secure and fast infrastructure for all your instant communication needs. This infrastructure will allow you to connect, communicate and share with friends, family and coworkers with network efficiency and security. It will only involve the internet if and when required.
                        </Col>

                        </Row>
                        <Row>
                            <Col md-4 className="text-center ">
                                <Col md-12 className="text-center trango-simple-card">
                                    <Col>
                                        <Col xs="2" className="right trango-simple-card-img">
                                            <img src={IC_TRANGO_SIMPLE_AUDIO} className="inline w-100" alt="Audio" />
                                        </Col>
                                        <Col xs="10" className="p-right-0">
                                            <Col xs="12" >
                                                <p className="trango-simple-card-heading text-right">Audio</p>
                                            </Col>
                                            <Col xs="12" className="trango-simple-card-desc text-right">
                                                <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                            </Col>
                                        </Col>
                                    </Col>
                                    <Col></Col>
                                </Col>
                                <Col md-12 className="text-center trango-simple-card">
                                    <Col>
                                        <Col xs="2" className="right trango-simple-card-img">
                                            <img src={IC_TRANGO_SIMPLE_CHAT} className="inline w-100" alt="Audio" />
                                        </Col>
                                        <Col xs="10" className="p-right-0">
                                            <Col xs="12" >
                                                <p className="trango-simple-card-heading text-right">Chat</p>
                                            </Col>
                                            <Col xs="12" className="trango-simple-card-desc text-right">
                                                <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                            </Col>
                                        </Col>
                                    </Col>
                                    <Col></Col>
                                </Col>
                            </Col>
                            <Col md-4 className="text-center">
                                <Col md-4 className="text-center trango-simple-screen">
                                    <img src={IC_TRANGO_SIMPLE_SCREEN} className="inline w-100" alt="Partner With us" />
                                </Col>
                            </Col>
                            <Col md-4 className="text-center">
                            <Col md-12 className="text-center trango-simple-card">
                                    <Col>
                                        <Col xs="2" className="left trango-simple-card-img">
                                            <img src={IC_TRANGO_SIMPLE_FILESHARING} className="inline w-100" alt="Audio" />
                                        </Col>
                                        <Col xs="10" className="p-left-0">
                                            <Col xs="12" >
                                                <p className="trango-simple-card-heading text-left">File Sharing</p>
                                            </Col>
                                            <Col xs="12" className="trango-simple-card-desc text-left">
                                                <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                            </Col>
                                        </Col>
                                    </Col>
                                    <Col></Col>
                                </Col>
                                <Col md-12 className="text-center trango-simple-card">
                                    <Col>
                                        <Col xs="2" className="left trango-simple-card-img">
                                            <img src={IC_TRANGO_SIMPLE_LOCALCOM} className="inline w-100" alt="Audio" />
                                        </Col>
                                        <Col xs="10" className="p-left-0">
                                            <Col xs="12" >
                                                <p className="trango-simple-card-heading text-left">Local Communication</p>
                                            </Col>
                                            <Col xs="12" className="trango-simple-card-desc text-left">
                                                <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                            </Col>
                                        </Col>
                                    </Col>
                                    <Col></Col>
                                </Col>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
        );
    }

}