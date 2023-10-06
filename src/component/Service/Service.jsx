import React from 'react';
import "./Service.css";
import { Link } from 'react-router-dom';
import van from "../../assets/van.png";
import headphon from "../../assets/headset.png";
import reate from "../../assets/rate.png";
import ship from "../../assets/ship.png";
import se_img1 from "../../assets/blog1.jpg";
import se_img2 from "../../assets/blog2.jpg";
import se_img3 from "../../assets/blog3.jpg";
import se_img4 from "../../assets/blog4.jpg";
import se_img5 from "../../assets/blog5.jpg"
import se_img6 from "../../assets/blog6.jpg";
import se_img7 from "../../assets/blog7.jpg";


const Service = () => {
    return (
        <div>
            <div className='service-section'>
                <div className='container'>
                    <div className='service'>
                        <li><Link to="/home">Home</Link> / Service</li>
                        <h1>Our Services</h1>

                    </div>
                </div>

            </div>


            <div className='shervice-transfer'>
                <div className='container service-flex'>
                    <div className='Service-title'>
                        <h1>Our Services</h1>
                    </div>
                    <div className='row'>
                        <div className='col-lg-3'>
                            <div className='service-content'>
                                <img src={van}alt="" />
                                <h3>Fast Transportation</h3>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting Ipsum has been the industry's standard dummy text ever since</p>
                                <Link href="#">More Info</Link>
                            </div>
                        </div>
                        <div className='col-lg-3'>
                            <div className='service-content'>
                                <img src={ship} alt="" />
                                <h3>Ocean Freight</h3>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting Ipsum has been the industry's standard dummy text ever since</p>
                                <Link href="#">More Info</Link>
                            </div>
                        </div>
                        <div className='col-lg-3'>
                            <div className='service-content'>
                                <img src={headphon} alt="" />
                                <h3>Customs Services</h3>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting Ipsum has been the industry's standard dummy text ever since</p>
                                <Link href="#">More Info</Link>
                            </div>
                        </div>
                        <div className='col-lg-3'>
                            <div className='service-content'>
                                <img src={reate} alt="" />
                                <h3>Monthly Rates</h3>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting Ipsum has been the industry's standard dummy text ever since</p>
                                <Link to="#">More Info</Link>
                            </div>
                        </div>

                    </div>

                </div>

            </div>


            <div className='gallary-section'>

                <div className='container glary-flex'>
                    <div className='gallary-title'>
                        <h1>Gallery</h1>
                    </div>
                    <div className='row'>
                        <div className='col-lg-3'>
                            <div className='g-img'>
                            <img src={se_img1} alt="" />
                            </div>
                        </div>
                        <div className='col-lg-3'>
                            <div className='g-img'>
                            <img src={se_img2} alt="" />
                            </div>
                        </div>
                        <div className='col-lg-3'>
                            <div className='g-img'>
                            <img src={se_img3} alt="" />
                            </div>
                        </div>
                        <div className='col-lg-3'>
                            <div className='g-img'>
                            <img src={se_img4 } alt="" />
                            </div>
                        </div>
                        <div className='col-lg-3'>
                            <div className='g-img'>
                            <img src={se_img5 } alt="" />
                            </div>
                        </div>
                        <div className='col-lg-3'>
                            <div className='g-img'>
                            <img src={se_img4} alt="" />
                            </div>
                        </div>
                        <div className='col-lg-3'>
                            <div className='g-img'>
                            <img src={se_img3} alt="" />
                            </div>
                        </div>
                        <div className='col-lg-3'>
                            <div className='g-img'>
                            <img src={ se_img6} alt="" />
                            </div>
                        </div>
                    </div>  

                </div>
            </div>
















        </div>
    );
};

export default Service;