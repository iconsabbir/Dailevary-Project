import React from 'react';
import "./Footer.css";

const Footer = () => {
    return (
        <div>
            <div className='footer-section'>
                <div className='container footer-flex'>
                  <div className='row'>
                  <div className='col-lg-3'>
                        <div className='footer-link'>
                            <h4>Shipping Information</h4>
                            <ul>
                                <li><a href="#">Shipping Information</a></li>
                                <li><a href="#">Shipping to Germany</a></li>
                                <li><a href="#">Shipping to Spain</a></li>
                                <li><a href="#">Shipping to United Kingdom</a></li>
                                <li><a href="#">Shipping to The Netherlands</a></li>
                                <li><a href="#">Shipping to United States</a></li>
                               
                            </ul>

                        </div>
                    </div>
                    <div className='col-lg-3'>
                        <div className='footer-link'>
                            <h4>Knowledge Hub</h4>
                            <ul>
                                <li><a href="#">Customer Stories</a></li>
                                <li><a href="#">Logistics Trends & Events</a></li>
                                <li><a href="#">Local Solutions</a></li>
                                <li><a href="#">Logistics News</a></li>
                                <li><a href="#">Logistics Know How</a></li>
                                <li><a href="#">Local Solutions</a></li>
                               
                            </ul>

                        </div>
                    </div>
                    <div className='col-lg-3'>
                        <div className='footer-link'>
                            <h4>Useful Links</h4>
                            <ul>
                                <li><a href="#">Contact</a></li>
                                <li><a href="#">Services</a></li>
                                <li><a href="#">Shipping to Spain</a></li>
                                <li><a href="#">Terms and Conditions</a></li>
                                <li><a href="#">Why Us</a></li>
                                <li><a href="#">Careers</a></li>
                               
                            </ul>

                        </div>
                    </div>
                    <div className='col-lg-3'>
                        <div className='footer-link'>
                            <h4>Contact</h4>
                            <ul>
                                <li><a href="#">Company Headquarter</a></li>
                                <li><a href="#">United States of America</a></li>
                                <li><a href="#">Ney York 10</a></li>
                                <li><a href="#">2511 DP Den Haag</a></li>
                                <li><a href="#">courier@gmaile.com</a></li>
                                
                               
                            </ul>

                        </div>
                    </div>
                  </div>
                    
                    
                </div>
                

            </div>

            <div className='copy-right'>
                <div className='container'>
                    <div className='copy-right-title'>
                        <p>Copyright © 2023 Delivare. All Rights Reserved Made with  by Sabbir Rahman</p>

                         
                    </div>

                </div>

            </div>


        </div>
    );
};

export default Footer;