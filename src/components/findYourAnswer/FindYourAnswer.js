import React from 'react';
import './FindYourAnswer.css';
import { Container, Row, Col, Card, Button ,Image } from 'react-bootstrap';

// import { IC_PRICING_CONSUMER_LOGO } from '../../images'

export class FindYourAnswer extends React.Component {
    render() {
        return (
         <div>

             <div className="find-your-answer-div">
               <Container>
                 <Row>
                   <Col>
                   <div>
                     <h2 className="heading">Didn’t Find your <span>Answer</span>?</h2>
                     <p className="para">Our team is just an email away and ready to answer your questions.</p>
                     <Button className="find-ans-blue-btn">
                         Contact us
                    </Button>
                   </div>
                   </Col>
                 </Row>
               </Container>
              
             </div> 
            
         </div>
        );
    }

}