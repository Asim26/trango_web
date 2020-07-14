import React from 'react';
import './Support.css';
import { Container, Row, Col, Card, Button, Image, Accordion } from 'react-bootstrap';

// import { IC_SELF_HOSTED } from '../../images'

export class Support extends React.Component {
    render() {
        return (
            <div>
                <div className="support-div">
                    <Container>
                      <Row className="col-lg-12">
                          <Col>
                          <h3 className="support-heading">Support</h3>
                          </Col>
                      </Row>
                      <Row className="col-lg-12">
                          <Col>
                          <h4 className="support-content">How can we help you ?</h4>                          
                          </Col>
                      </Row>
                      <Row className="col-lg-12">
                          <Col>
                            <input type="text" className="search" placeholder="Search"/>
                          </Col>
                      </Row>

                  </Container>
                </div>

                <div className="body-support-div">
                   <Container> 
                    <Row className="col-lg-12">
                           <Col className="col-lg-3 nav-links">
                             <ul className="list">
                                 <li className="about-link"><a href="" >About</a></li>
                                 <li className="pricing-link"><a href="">Pricing</a></li>
                                 <li className="deploy-link"><a href="" >Deploying</a></li>
                                 <li className="more-1-link"><a href="">More Categories</a></li>
                                 <li className="more-2-link"><a href=" ">More Categories</a></li>
                             </ul>
                          </Col>
                          <Col className="col-lg-6 privacy-col">
                              <h4>What is privacy</h4>
                              <p>
                                Lorem Ipsum is simply dummy text 
                                of the printing and typesetting 
                                industry. Lorem Ipsum has been the 
                                industry’s standard dummy text ever 
                                since the 1500s, when an unknown printer 
                                took a galley of type and scrambled it to 
                                make a type specimen book. It has survived 
                                not only five centuries, but also the leap 
                                into electronic typesetting, remaining essentially 
                                unchanged. It was popularised in the 1960s with the 
                                release of Letraset sheets containing Lorem Ipsum 
                                passages, and more recently with desktop publishing 
                                software like Aldus PageMaker including versions of 
                                Lorem Ipsum.
                              </p>

                              
                          </Col>
                          <Col className="col-lg-3 video-col">
                            <video width="320" height="240" controls>
                                <source src="movie.mp4" type="video/mp4" />
                                <source src="movie.ogg" type="video/ogg" />
                                Your browser does not support the video tag.
                            </video>
                          </Col>
                    </Row>
                   
                   
                    <div className="faq-div">
                        <Row className="col-lg-12">
                            <Col className="col-lg-3">
                            
                            </Col>
                            <hr />
                            <Col className="col-lg-9">
                               <Accordion defaultActiveKey="1">
                                    <Card>
                                        <Accordion.Toggle as={Card.Header} eventKey="0">
                                        What’s the gist of Privy?
                                        </Accordion.Toggle>
                                        <Accordion.Collapse eventKey="0">
                                        <Card.Body>Hello! I'm the body</Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                </Accordion>

                                <Accordion defaultActiveKey="1">
                                    <Card>
                                        <Accordion.Toggle as={Card.Header} eventKey="0">
                                        How many people do you think will be in my Privy spaces?
                                        </Accordion.Toggle>
                                        <Accordion.Collapse eventKey="0">
                                        <Card.Body>Hello! I'm the body</Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                </Accordion>

                                <Accordion defaultActiveKey="1">
                                    <Card>
                                        <Accordion.Toggle as={Card.Header} eventKey="0">
                                        Who controls a space?
                                        </Accordion.Toggle>
                                        <Accordion.Collapse eventKey="0">
                                        <Card.Body>Hello! I'm the body</Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                </Accordion>

                                <Accordion defaultActiveKey="1">
                                    <Card>
                                        <Accordion.Toggle as={Card.Header} eventKey="0">
                                        Who can create a topic?
                                        </Accordion.Toggle>
                                        <Accordion.Collapse eventKey="0">
                                        <Card.Body>Hello! I'm the body</Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                </Accordion>

                                <Accordion defaultActiveKey="1">
                                    <Card>
                                        <Accordion.Toggle as={Card.Header} eventKey="0">
                                        How do I create a topic?
                                        </Accordion.Toggle>
                                        <Accordion.Collapse eventKey="0">
                                        <Card.Body>Hello! I'm the body</Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                </Accordion>

                                <Accordion defaultActiveKey="1">
                                    <Card>
                                        <Accordion.Toggle as={Card.Header} eventKey="0">
                                        What if I want to leave a topic?
                                        </Accordion.Toggle>
                                        <Accordion.Collapse eventKey="0">
                                        <Card.Body>Hello! I'm the body</Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                </Accordion>

                                <Accordion defaultActiveKey="1">
                                    <Card>
                                        <Accordion.Toggle as={Card.Header} eventKey="0">
                                        What if I created the topic and want to leave it?
                                        </Accordion.Toggle>
                                        <Accordion.Collapse eventKey="0">
                                        <Card.Body>Hello! I'm the body</Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                </Accordion>

                                <Accordion defaultActiveKey="1">
                                    <Card>
                                        <Accordion.Toggle as={Card.Header} eventKey="0">
                                        What if I started the topic and now want to delete it completely?
                                        </Accordion.Toggle>
                                        <Accordion.Collapse eventKey="0">
                                        <Card.Body>Hello! I'm the body</Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                </Accordion>
                            </Col>
                            
                        </Row> 
                    </div>
                    
                    </Container>
                </div>
            </div>
        );
    }

}