import React from 'react';
import './SectionFour.css';
import { Row, Col, Card } from 'react-bootstrap';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { IC_SEC_4_CONSUMER, IC_SEC_4_BUSINESS, IC_SEC_4_HOSTED} from '../../images'

export class SectionFour extends React.Component {
    render() {
        const responsive = {

            desktop: {
                breakpoint: { max: 3000, min: 1024 },
                items: 2,
                partialVisibilityGutter: 40 // this is needed to tell the amount of px that should be visible.
            },
            tablet: {
                breakpoint: { max: 1024, min: 464 },
                items: 2,
                partialVisibilityGutter: 40 // this is needed to tell the amount of px that should be visible.

            },
            mobile: {
                breakpoint: { max: 464, min: 0 },
                items: 1
            }
        };
        return (
            <div className="w-100">
                <Row className="our-product-div m-0">
                    <Col sm="5 our-product-left-box">
                        <Col className="our-product-heading">
                            <span>Our Products</span>
                        </Col>
                        <Col className="our-product-text">
                            Trango is simple. Trango is back to the basics. Trango is bringing unlimited communications and connectivity to everyone.
                    </Col>
                    </Col>
                    <Col sm="7" className="p-right-0">
                        <Col className="p-right-0">
                            <Carousel partialVisible={true} responsive={responsive}>
                                <Card className="card-carousel col-xs-6">
                                    <Card.Img variant="top" src={IC_SEC_4_CONSUMER}  className="card-img-icon"/>

                                    <Card.Body>
                                        <Card.Title className="our-product-card-heading">Consumer</Card.Title>
                                        <Card.Text className="our-product-card-desc">
                                        If both the sender and receiver are on the same network, the server then initiates a direct connection between them and both the sender and receiver exchanges files. 
                                            <br />
                                        </Card.Text>
                                        <a class="card-learn-more">Learn More &gt;&gt; </a>

                                    </Card.Body>
                                </Card>
                                <Card className="card-carousel  col-xs-6">
                                    <Card.Img variant="top" src={IC_SEC_4_BUSINESS} className="card-img-icon" />
                                    <Card.Body>
                                        <Card.Title className="our-product-card-heading">Business</Card.Title>
                                        <Card.Text className="our-product-card-desc">
                                        If both the sender and receiver are on the same network, the server then initiates a direct connection between them and both the sender and receiver exchanges files. 
                                            <br />
                                        </Card.Text>
                                        <a class="card-learn-more">Learn More &gt;&gt; </a>

                                    </Card.Body>
                                </Card>
                                <Card className="card-carousel col-xs-6">
                                    <Card.Img variant="top" src={IC_SEC_4_HOSTED} className="card-img-icon"/>
                                    <Card.Body>
                                        <Card.Title className="our-product-card-heading">Self Hosted</Card.Title>
                                        <Card.Text className="our-product-card-desc">
                                        If both the sender and receiver are on the same network, the server then initiates a direct connection between them and both the sender and receiver exchanges files. 
                                            <br />
                                        </Card.Text>
                                        <a class="card-learn-more">Learn More &gt;&gt; </a>

                                    </Card.Body>
                                </Card>
                            </Carousel>
                        </Col>
                    </Col>

                </Row>

            </div>
        );
    }

}