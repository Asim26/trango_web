import React from 'react';
import './SectionThree.css';
import { Row, Col } from 'react-bootstrap';
import { RectangleButton } from '../rectangleButton';


import { IC_TRANGO_SIMPLE_SCREEN } from '../../images'

export class SectionThree extends React.Component {
    render() {
        return (
            <div className="w-100">
                <Row className="partner-with-us-div">
                    <Col sm="7">
                        <Col className="partner-with-us-heading">
                            <span>Partner with us</span>
                        </Col>
                        <Col className="partner-with-us-text">
                            Trango is simple. Trango is back to the basics. Trango is bringing unlimited communications and connectivity to everyone.
                    </Col>
                    </Col>
                    <Col sm="4">
                        <Col>
                        </Col>
                        <Col>
                            <RectangleButton title={"Contact Us"} fromWhere={"contactUs"} />
                        </Col>
                    </Col>

                </Row>

            </div>
        );
    }

}