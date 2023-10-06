import React from 'react';
import { Link } from 'react-router-dom';
import"./About.css";
import about_img1 from "../../assets/blog5.jpg";
import about_img2 from "../../assets/blog4.jpg";

const About = () => {
    return (
        <div>
             <div className='About-section'>
                <div className='container'>
                    <div className='about'>
                        <li><Link to="/home">Home</Link> / About</li>
                        <h1>About</h1>

                    </div>
                </div>

            </div>


        <div>
            <div className='about-Contant'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-6'>
                            <div className='about-img'>
                                <img src={about_img1} alt="" />
                            </div>

                        </div>
                        <div className='col-lg-6'>
                            <div className='about-paragrap'>
                                <h4>Who Are We?</h4>
                                <p>The beginning of our journey vel tellus Turpis purus, gravida orci, fringilla a. Ac sed eu fringilla odio mi. Consequat pharetra at magna imperdiet cursus ac faucibus sit libero. Ultricies quam nunc, lorem sit lorem urna, pretium aliquam ut. In vel, quis donec dolor id in. Pulvinar commodo mollis diam sed facilisis at magna imperdiet cursus ac faucibus sit libero.</p>
                            </div>

                        </div>
                       <div className='content-about-f'>
                       <div className='col-lg-6'>
                            <div className=' about-paragrap2'>
                            
                                <h4>Choose Us For Best Services</h4>
                                <p>We are nunc, lorem sit lorem urna, pretium aliquam ut. In vel, quis donec dolor id in. Pulvinar commodo mollis diam sed facilisis at magna imperdiet cursus ac faucibus sit libero. Dignissim lacus, turpis ut suspendisse vel tellus. Turpis purus, gravida orci, fringilla a. Ac sed eu fringilla odio mi. Consequat pharetra at magna imperdiet cursus ac faucibus sit libero.</p>
                            </div>

                        </div>
                        <div className='col-lg-6'>
                            <div className='about-img2'>
                            <img src={about_img2 } alt="" />
                            </div>

                        </div>

                       </div>

                    </div>

                </div>

            </div>
        </div>







        </div>
    );
};

export default About;