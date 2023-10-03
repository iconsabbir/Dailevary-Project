import React from 'react';
import './Home.css';
import baner from "../../assets/scooter.png";
import artcalimg1 from "../../assets/plane.png";
import artcalimg2 from "../../assets/box.png";

const Home = () => {
    return (
                <div>
                    <div className='baner-main'>
                        <div className='container'>
                            <div className='baner-flex'>


                                <div className='col-lg-7'>
                                    <div className='baner'>
                                        <h1>We offer a wide range of logistics solutions.</h1>

                                        <li>1   Easy booking</li>
                                        <li>2   Global Coverage</li>
                                        <li>3   Customer Support</li>
                                        <div className='get'>
                                            <li><a href="#">Gat Start</a></li>
                                        </div>

                                    </div>

                                </div>

                                <div className='col-lg-4'>
                                    <div className='biker-img'>
                                        <img src={baner} alt="" />

                                    </div>

                                </div>



                            </div>
                        </div>
                    </div>
                     <div className='Golobal-section'>
                        <div className=' container golobal-flex'>
                            <div className='col-lg-6'>
                                <div className='golobal-artecal'>
                                    <h3>Go global with ease</h3>
                                    <h4>We simplify your logistics, while plugging your company into a world of opportunities. We believe every company deserves to feel the excitement of going global, regardless of size.</h4>
                                    <button>Read more</button>
                                </div>

                            </div>
                            <div className='col-lg-5'>
                                <div className='golobal-artecal-2'>
                                    <div className='golobal-artecal-colem'>
                                        <h5>Easy booking, multiple services</h5>
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since</p>
                                    </div>
                                    <div className='golobal-artecal-colem'>
                                        <h5>One place to manage all your shipments</h5>
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since</p>
                                    </div>
                                    <div className='golobal-artecal-colem'>
                                        <h5>Giving you clear visibility</h5>
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since</p>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                     

                    <div className='artecal-section'>
                        <div className=' container'>
                            <div className='artecal-title'>

                                <h1>Latest Articles</h1>
                            </div>
                            <div className='last-artecil-flex'>
                                <div className='col-lg-4'>
                                    <div className='artecal-1'>
                                        <img src={artcalimg1} alt="" />
                                        <div className='artecal-text'>
                                            <h3>Learn and stay updated with</h3>
                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting Ipsum has been the industry's standard dummy text ever since</p>
                                            <a href="#" className='icon-link'>More info</a>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-lg-4'>
                                <div className='artecal-1'>
                                        <img src={artcalimg2} alt="" />
                                        <div className='artecal-text'>
                                            <h3>Asia-Pacific shipping update</h3>
                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting Ipsum has been the industry's standard dummy text ever since</p>
                                            <a href="#" className='icon-link'>More info</a>
                                        </div>
                                    </div>


                                    </div>
                                <div className='col-lg-4'>
                                <div className='artecal-1'>
                                        <img src={artcalimg1} alt="" />
                                        <div className='artecal-text'>
                                            <h3>Stay up to date with logistics</h3>
                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting Ipsum has been the industry's standard dummy text ever since</p>
                                            <a href="#" className='icon-link'>More info</a>
                                        </div>
                                    </div>
                                </div>
                           </div>

                           <div className='text-center  button-blog-artecal'>
                           <button >More Artcile</button>

                           </div>
                                
                        </div>
                        
                    </div>






















                </div>
    );
};

export default Home;