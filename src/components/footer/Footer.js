import React from 'react';
import './Footer.css';
import { IC_FOOTER_LOGO } from '../../images';
import { IC_IMAGE_FOOTER } from '../../images'
import { IC_DOWNLOAD_APPSTORE } from '../../images'
import { IC_DOWNLOAD_GPLAY } from '../../images'



export class Footer extends React.Component {
    render() {
        return (
            <div >
                <footer>
                    <div className="footer-container">
                        <div className="footer-left-div">
                            <div>
                                <img src={IC_FOOTER_LOGO} className="footer-logo inline" alt="Trango"></img>
                                <div className="footer-copyright">
                                    © 2020 Copyright: Trango Inc.
</div>
                            </div>

                        </div>
                        <div className="footer-center-div">
                            <div className="footer-col"><p>COMPANY</p>
                                <div className="footer-col-content" >
                                    <ul>
                                        <li><a href="#">About</a></li>
                                        <li><a href="#">Usees</a></li>
                                        <li><a href="#">Blog</a></li>
                                        <li><a href="#">Pricing</a></li>

                                    </ul>
                                </div>
                            </div>

                            <div className="footer-col">
                                <p>PRODUCT</p>
                                <div className="footer-col-content" >
                                    <ul>
                                        <li><a href="#">Consumer App</a></li>
                                        <li><a href="#">Self Hosted</a></li>
                                        <li><a href="#">Self Hosted Cloud</a></li>

                                    </ul>

                                </div>
                            </div>


                            <div className="footer-col">
                                <p>LINK</p>
                                <div className="footer-col-content" >
                                    <ul>
                                        <li><a href="#">Privacy Policy</a></li>
                                        <li><a href="#">Terms of Service</a></li>
                                        <li><a href="#">FAQs</a></li>
                                        <li><a href="#">Help</a></li>

                                    </ul>
                                </div>
                            </div>

                        </div>
                        <div className="footer-right-div">
                            <div className="footer-col">
                                <p>DOWNLOAD APP</p>
                                <div className="footer-col-content" >
                                    <ul className="appdownloads">
                                        <li><a href="#"><img src={IC_DOWNLOAD_APPSTORE} className="inline" alt="App Store" /></a></li>
                                        <li><a href="#"><img src={IC_DOWNLOAD_GPLAY} className="inline" alt="Google Play" /></a></li>
                                    </ul>
                                </div>
                                <div>
                                    <ul className="appdownloads">
                                        <li>
                                            <a href="https://www.facebook.com/trango.io/" target="_blank">
                                                <i className="fab fa-facebook-f mr-3"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://twitter.com/trango_io/" target="_blank">
                                                <i className="fab fa-twitter mr-3"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://www.youtube.com/channel/UCnyQG0nGhrt4-EoLsMNs0aQ" target="_blank">
                                                <i className="fab fa-youtube mr-3"></i>
                                            </a>
                                        </li>
                                    </ul>



                                </div>
                            </div>
                        </div>
                    </div>
                </footer>

            </div>
        );
    }

}