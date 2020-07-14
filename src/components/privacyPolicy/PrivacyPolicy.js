import React from 'react';
import './PrivacyPolicy.css';
import { Container, Row, Col, Card, Button, Image, Accordion } from 'react-bootstrap';

// import { IC_SELF_HOSTED } from '../../images'

export class PrivacyPolicy extends React.Component {
    render() {
        return (
            <div>
                <div className="privacy-div">
                    <Container>
                       <Row>
                           <Col>
                             <p className="updated-1">Updated on: 1st May 2020</p>
                           </Col>
                       </Row>
                       <Row>
                           <Col>
                             <h3 className="privacy-policy-heading">Privacy Policy</h3>
                           </Col>
                       </Row>
                       <Row>
                           <Col>
                             <p className="privacy-policy-content">How Trango handles your data</p>
                           </Col>
                       </Row>
                    </Container>
                </div>

                <div className="privacy-div-body">
                   <Container>
                       <Row className="col-lg-12 ">
                           <Col className="col-lg-3 privacy-div-margin">
                            <ul className="list-privacy-policy">
                                    <li className="intro"><a href="" >Introduction</a></li>
                                    <li className="application"><a href="">Application</a></li>
                                    <li className="change-to-privacy-policy"><a href="" >Changes to this privacy policy</a></li>
                                    <li className="country-of-processing"><a href="">Country of processing</a></li>
                                    <li className="the-purpose"><a href=" ">The purpose for which we use your personal data</a></li>
                                </ul>
                           </Col>
                           <Col className="col-lg-9 privacy-div-margin">
                              <h3 className="privacy-heading-style"> 1. INTRODUCTION</h3>
                              <p className="privacy-content-style">We respect your privacy. This Privacy Policy describes how we collect, use, and share your personal data when you use the Service.
                                <br/>
                                <br/>
                                The purpose of this Policy is to inform you about our privacy practices and to ensure that you understand the purposes for which We collect and process your personal data. The following is a brief summary of the manner and purposes for which We process your personal data.
                                <br/>
                                <br/>
                                ACCESSING, DOWNLOADING OR OTHERWISE USING THE SERVICE INDICATES THAT YOU ACCEPT AND AGREE TO BE BOUND BY THIS PRIVACY POLICY IN FULL. IF YOU DO NOT ACCEPT THIS PRIVACY POLICY, DO NOT ACCESS, DOWNLOAD OR OTHERWISE USE THE SERVICE. You acknowledge (a) that You have read and understood this Privacy Policy; and (b) this Privacy Policy shall have the same force and effect as a signed agreement.
                                </p>



                                <h3 className="privacy-heading-style"> 2. APPLICATION</h3>
                                <p className="privacy-content-style">This Privacy Policy relates to your personal data (i.e., data about you, an individual, from which you can be identified).
                                    <br/>
                                    <br/>
                                    This Privacy Policy therefore does not apply to any data insofar as it is held, processed, disclosed or published in a form which cannot be linked to a living individual (such as anonymized data, de-identified data, aggregated data, certain metadata, or coded data which, in a given form, cannot directly or indirectly be used to identify you as an individual) (“Anonymized and Aggregated Data”). We reserve the right to generate Anonymised and Aggregated Data extracted out of any databases containing your personal data and to make use of any such Anonymised and Aggregated Data as we see fit (including publishing such data and sharing it with third parties).
                                </p>



                                <h3 className="privacy-heading-style"> 3. CHANGES TO THIS PRIVACY POLICY</h3>
                              <p className="privacy-content-style">Please review this Privacy Policy each time You use the Service. We reserve the right to update or change our Privacy Policy at any time in our sole discretion. Your continued use of the Service after We post any modifications to the Privacy Policy on this page will constitute your acknowledgment of the modifications and your consent to abide and be bound by the modified Privacy Policy.
                                  <br/>
                                  <br/>
                                  BY USING THE SERVICE, YOU AGREE TO BE BOUND BY THE MOST RECENT VERSION OF THIS PRIVACY POLICY.
                                  <br/>
                                  <br/>
                                 We may update this Policy from time to time, and the updated version of this Policy will be effective upon posting on the Services. Please check this page to review the most up-to-date version of this Policy.
                                   <br/>
                                   <br/>
                                 4## . RESPONSIBILITY FOR DATA PROCESSING Cheeze is the entity which is responsible for the processing of personal data that We collect from you when you use the Services such as [INSERT]. If you have any questions or concerns about Cheeze’s use of your personal data, please contact us at help@cheeze.com.
                                </p>



                                <h3 className="privacy-heading-style"> 5. COUNTRY OF PROCESSING</h3>
                              <p className="privacy-content-style">
                              We operate the Services from the United States of America (USA) and our data collection and processing activities take place predominantly in the USA. Accordingly, data collected from users when using our Services is collected in the USA. We store and otherwise process data (including personal data) through third party cloud service providers and other IT service providers which may be located or which may operate in other countries, including countries which do not guarantee the same level of protection to privacy as the USA.
                                </p>


                                <h4 className="privacy-heading-style"> 7. THE PURPOSES FOR WHICH WE USE YOUR PERSONAL DATA</h4>
                              <p className="privacy-content-style">The purposes for which We collect and store your personal data are the following:
                                <br/>
                                <br/>
                                Personal data that We receive from you enables Us to deliver the Services to you and to enable you to use them efficiently;
                                Insofar as permitted under applicable law, to communicate with you in relation to our Services and other services that We or our affiliates offer;
                                Where you sign up for the Services through an account with a third party content or platform provider, to report to that third party and to communicate with it in relation to your activities on the platform or in relation to the content;
                                To personalize, test, monitor, improve and upgrade the Services;
                                To send periodic emails or SMS messages (the email address and phone number You provide may be used to send You information and updates pertaining to Your account, in addition to receiving occasional Company news, updates, related product or service information, etc., but if at any time You would like to unsubscribe from receiving future emails, We will include detailed unsubscribe instructions at the bottom of each email);
                                To meet our legal obligations and the regulatory requirements to which We may be subject, for loss prevention purposes and to protect and enforce our rights and meet our obligations to third parties; and
                                For our internal business purposes, such as compiling and analyzing usage information for general operational, statistical and business purposes.
                                </p>
                                
                           </Col>
                       </Row>
                   </Container>
                </div>
            </div>
        );
    }

}