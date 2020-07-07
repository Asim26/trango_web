import React from 'react';
import './BlogSection.css';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

import { IC_BLOG_1, IC_BLOG_2, IC_BLOG_3 } from '../../images'

export class BlogSection extends React.Component {
    render() {
        return (

            <div className="blog-div">
                <Container className="justify-content-md-center bottom-cards w-100">
                    <Row >
                        <Col xs >
                            <p className="ready-to-see-what-were-building text-center"> Ready to see what <span className="text-style-1">we’re building? </span></p>
                        </Col>
                    </Row>
                </Container>
                <Container className="justify-content-md-center bottom-cards w-100 blog-container">
                    <Row>
                        <Col xs="12" md="4">
                            <Card className="card-custom">
                                <Card.Img variant="top" src={IC_BLOG_1} />
                                <Card.Body>
                                    <Card.Title className="card-heading-custom">Card Title</Card.Title>
                                    <Card.Text className="card-desc-custom">
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col  xs="12" md="4">
                            <Card className="card-custom">
                                <Card.Img variant="top" src={IC_BLOG_2} />
                                <Card.Body>
                                    <Card.Title className="card-heading-custom">Card Title</Card.Title>
                                    <Card.Text className="card-desc-custom">
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col  xs="12" md="4">
                            <Card className="card-custom">
                                <Card.Img variant="top" src={IC_BLOG_3}  style={{ height: "231px"}} />
                                <Card.Body>
                                    <Card.Title className="card-heading-custom"> Card Title</Card.Title>
                                    <Card.Text className="card-desc-custom">
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
    </Card.Text>
                                </Card.Body>
                            </Card>                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }

}