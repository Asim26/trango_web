import React from 'react';
import './Pricing.css';
import { Container, Row, Col, Card, Button ,Image, Table } from 'react-bootstrap';

import { IC_PRICING_CONSUMER_LOGO, 
         IC_PRICING_BUSINESS_LOGO, 
         IC_PRICING_SELF_HOSTED_LOGO, 
         IC_PRICING_SELF_CLOUD_HOSTED_LOGO,
         IC_PRICING_TICK,
         IC_PRICING_CROSS
       } from '../../images'

export class Pricing extends React.Component {
    render() {
        return (
         <div>
             
            <div className="pricing-div">
            <Container>
                <Row>
                    <Col>
                       <h2 className="pricing-slogan">Pricing Slogan</h2>
                    </Col>
                </Row>
                
                <Row>
                    <Col>
                      <div className="card-1-consumer">
                          <Image src={IC_PRICING_CONSUMER_LOGO} className="consumer-logo" />
                          <h6 className="consumer-h">CONSUMER</h6>
                          <p className="consumer-content">FREE</p>
                      </div>
                    </Col>
                      <Col>
                      <div className="card-2-business">
                           <Image src={IC_PRICING_BUSINESS_LOGO} className="business-card-logo" />
                           <h6 className="business-h">BUSINESS</h6>
                           <p className="business-content">FREE</p>
                      </div>
                    </Col>
                    <Col> 
                      <div className="card-3-self-hosted">
                          <Image src={IC_PRICING_SELF_HOSTED_LOGO} className="self-hosted-card-logo" />
                          <h6 className="self-hosted-h">SELF HOSTED</h6>
                          <p className="self-hosted-content">FREE</p>
                      </div>
                    </Col>
                     <Col>
                      <div className="card-4">
                         <Image src={IC_PRICING_SELF_CLOUD_HOSTED_LOGO} className="self-cloud-hosted-logo" />
                         <h6 className="self-cloud-hosted-h">CONSUMER</h6>
                         <p className="self-cloud-hosted-content">FREE</p>
                      </div>
                    </Col> 
                </Row>
                
                
                <br/>
                <br/>
                <Table striped bordered hover variant="dark">
                  <thead>
                    <tr>
                      <th style={{width: '40%'}}>Lorem ipsum dolor sit amet, consetetur</th>
                      <th><Image src={IC_PRICING_TICK} style={{width: '30px', height: '30px'}} /></th>
                      <th><Image src={IC_PRICING_TICK} style={{width: '30px', height: '30px'}} /></th>
                      <th><Image src={IC_PRICING_TICK} style={{width: '30px', height: '30px'}} /></th>
                      <th><Image src={IC_PRICING_TICK} style={{width: '30px', height: '30px'}} /></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Lorem ipsum dolor sit amet, consetetur</td>
                      <td><Image src={IC_PRICING_TICK} style={{width: '30px', height: '30px'}} /></td>
                      <td><Image src={IC_PRICING_TICK} style={{width: '30px', height: '30px'}} /></td>
                      <td><Image src={IC_PRICING_TICK} style={{width: '30px', height: '30px'}} /></td>
                      <td><Image src={IC_PRICING_TICK} style={{width: '30px', height: '30px'}} /></td>
                    </tr>
                    <tr>
                      <td>Lorem ipsum dolor sit amet, consetetur</td>
                      <td><Image src={IC_PRICING_CROSS} style={{width: '30px', height: '30px'}} /></td>
                      <td><Image src={IC_PRICING_TICK} style={{width: '30px', height: '30px'}} /></td>
                      <td><Image src={IC_PRICING_TICK} style={{width: '30px', height: '30px'}} /></td>
                      <td><Image src={IC_PRICING_TICK} style={{width: '30px', height: '30px'}} /></td>
                    </tr>
                    <tr>
                      <td>Lorem ipsum dolor sit amet, consetetur</td>
                      <td><Image src={IC_PRICING_CROSS} style={{width: '30px', height: '30px'}} /></td>
                      <td><Image src={IC_PRICING_TICK} style={{width: '30px', height: '30px'}} /></td>
                      <td><Image src={IC_PRICING_TICK} style={{width: '30px', height: '30px'}} /></td>
                      <td><Image src={IC_PRICING_TICK} style={{width: '30px', height: '30px'}} /></td>
                    </tr>
                    <tr>
                      <td>Lorem ipsum dolor sit amet, consetetur</td>
                      <td><Image src={IC_PRICING_CROSS} style={{width: '30px', height: '30px'}} /></td>
                      <td><Image src={IC_PRICING_TICK} style={{width: '30px', height: '30px'}} /></td>
                      <td><Image src={IC_PRICING_TICK} style={{width: '30px', height: '30px'}} /></td>
                      <td><Image src={IC_PRICING_TICK} style={{width: '30px', height: '30px'}} /></td>
                    </tr>
                    <tr>
                      <td>Lorem ipsum dolor sit amet, consetetur</td>
                      <td><Image src={IC_PRICING_CROSS} style={{width: '30px', height: '30px'}} /></td>
                      <td><Image src={IC_PRICING_CROSS} style={{width: '30px', height: '30px'}} /></td>
                      <td><Image src={IC_PRICING_TICK} style={{width: '30px', height: '30px'}} /></td>
                      <td><Image src={IC_PRICING_TICK} style={{width: '30px', height: '30px'}} /></td>
                    </tr>
                  </tbody>
                </Table>
               
                
                <Row>
                  <Col>
                     <h3 className="do-you-have-same"> Do you have some <span> Questions </span>? </h3>
                     <p className="do-you-have-same-i">Our team is just an email away and ready to answer your questions.</p>
                  </Col>
                </Row>

                <Row>
                  <Col>
                      <Button className="cnt-blue-btn">
                         Contact us
                      </Button>
                    </Col>
                 </Row>
          

             </Container>
            </div>
         </div>
        );
    }

}