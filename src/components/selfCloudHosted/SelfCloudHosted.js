import React from 'react';
import './SelfCloudHosted.css';
import { Container, Row, Col, Card, Button, Image } from 'react-bootstrap';

import { IC_SELF_CLOUD_HOSTED } from '../../images';

export class SelfCloudHosted extends React.Component {
    render() {
        return (
            <div>
                
                <div className="self-cloud-hosted-div">
                    <Container>
                       <Row>
                           <Col className="col-lg-6">
                             <h3 className="self-cloud-hosted-style">Self Cloud Hosted</h3>
                             <p className="self-cloud-hosted-p-1-style">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                             <p className="self-cloud-hosted-p-2-style">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>                           
                           </Col>
                           <Col className="col-lg-6">
                           <Image src={IC_SELF_CLOUD_HOSTED} className="self-cloud-hosted" />
                           </Col>
                       </Row>
                    </Container>
                </div>

            </div>
        );
    }

}