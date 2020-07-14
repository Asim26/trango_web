import React from 'react';
import './ConsumerApp.css';
import { Container, Row, Col, Card, Button ,Image } from 'react-bootstrap';
import { IC_CONSUMER_APP, IC_CONSUMER_APP_MOBILE, IC_CONSUMER_APP_PC, IC_CONSUMER_APP_PC_CONTENT ,IC_CONSUMER_CHAT , IC_CONSUMER_AUDIO_CALL, IC_CONSUMER_VIDEO_CALL, IC_CONSUMER_FILE_SHARING} from '../../images'

// import { IC_CHAT } from '../../images';

export class ConsumerApp extends React.Component {
    render() {
        return (
         <div>
            <div className="consumer-app-div">
                
                    <Container>
                        <Row className="col-lg-12">
                           
                                <Col className="col-lg-6">
                                    
                                    <div className="free-style">
                                        <h5>FREE</h5>
                                    </div>
                                    
                                    <div className="consumer-app-style">
                                        <h3>Consumer App</h3> 
                                    </div>

                                    <div className="para-style">
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                                    </div>
                                    
                                    
                                    <div> 
                                      <Image src={IC_CONSUMER_CHAT} className="chat-logo" />
                                      <text className="chat-style">Chat</text>
                                      <br />
                                      <Image src={IC_CONSUMER_AUDIO_CALL} className="audio-logo" />
                                      <text className="audio-call-style">Audio Call</text>
                                      <br />
                                      <Image src={IC_CONSUMER_VIDEO_CALL} className="video-logo" />
                                      <text className="video-call-style">Video Call</text>
                                      <br />
                                      <Image src={IC_CONSUMER_FILE_SHARING} className="file-sharing-logo" />
                                      <text className="file-sharing-style">Video Call</text>
                                    </div>
                                    
                                
                                </Col>

                                <Col className="col-lg-6">
                                    {/* <div className="im">
                                        <Image src={IC_CONSUMER_APP_MOBILE} />
                                    </div>

                                    <div className="pc">
                                        <Image src={IC_CONSUMER_APP_PC} />
                                    </div>

                                    <div className="pc-content">
                                        <Image src={IC_CONSUMER_APP_PC_CONTENT} />
                                    </div> */}

                                    <div>
                                        <Image src={IC_CONSUMER_APP} className="consumer-app-img"/>
                                    </div>

                                </Col>
   
                        
                        </Row>
                    </Container>
                
            </div>
         </div>
        );
    }

}