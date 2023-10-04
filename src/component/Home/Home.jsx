import React from 'react';
import './Home.css';
import baner from "../../assets/scooter.png";
import artcalimg1 from "../../assets/plane.png";
import artcalimg2 from "../../assets/box.png";
import clint from "../../assets/person1.png";
import clint2 from "../../assets/person2.png";





const Home = () => {
    return (
                <div>
                    <div className='baner-main'>
                        <div className='container'>
                            <div className='baner-flex'>

                            <div className='row'>
                            <div className='col-lg-7 col-sm-12 col-12'>
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

                                <div className='col-lg-4 col-sm-8 col-12'>
                                    <div className='biker-img'>
                                        <img src={baner} alt="" />

                                    </div>

                                </div>
                            </div>
                                



                            </div>
                        </div>
                    </div>
                     <div className='Golobal-section'>
                        <div className=' container golobal-flex'>
                            <div className='row'>
                            <div className='col-lg-6 col-sm-12'>
                                <div className='golobal-artecal'>
                                    <h3>Go global with ease</h3>
                                    <h4>We simplify your logistics, while plugging your company into a world of opportunities. We believe every company deserves to feel the excitement of going global, regardless of size.</h4>
                                    <button>Read more</button>
                                </div>

                            </div>
                            <div className='col-lg-5 col-sm-10'>
                                <div className='golobal-artecal-2'>
                                    <div  className='golobal-artecal-colem'>
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
                    </div>

                     

                    <div className='artecal-section'>
                        <div className=' container'>
                            <div className='artecal-title'>

                                <h1>Latest Articles</h1>
                            </div>
                            
                            <div className='last-artecil-flex'>
                            <div className='row'>
                            <div className='col-lg-4 col--12'>
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
                           </div>
                            

                           <div className='text-center  button-blog-artecal'>
                           <button >More Artcile</button>

                           </div>
                                
                        </div>
                        
                    </div>

                    <div className='price-section'>
                    <div className='price-titel'><h1>Delivery Packages</h1></div>
                        <div className='container price-flex'>
                            <div className='row'>
                            <div className='col-lg-3 col-sm-6 col-12'>
                                <div className='price-content'>
                                        <h4>STANDARD</h4>
                                        <h1>$56.95</h1>
                                        <p><span class="price-tick">✓</span>Quisque rhoncus</p>
                                        <p><span class="price-tick">✓</span>Lorem ipsum dolor</p>
                                        <p><span class="price-tick">✓</span>Quisque rhoncus</p>
                                        <p><span class="price-tick">✓</span>Vivamus velit mir</p>
                                        <p><span class="price-tick">✓</span> Elit mir ivamus</p>
                                       
                                        <div className='text-center price-button'>
                                        <button>Book Now</button>
                                        </div>
                                    
                                </div>
                            </div>
                             <div className='col-lg-3 col-sm-6 col-12'>
                                <div className='price-content-2'>
                                        <h4>BASIC</h4>
                                        <h1>$79.50</h1>
                                        <p><span class="price-tick">✓</span>Quisque rhoncus</p>
                                        <p><span class="price-tick">✓</span>Lorem ipsum dolor</p>
                                        <p><span class="price-tick">✓</span>Quisque rhoncus</p>
                                        <p><span class="price-tick">✓</span>Vivamus velit mir</p>
                                        <p><span class="price-tick">✓</span> Velit mir</p>
                                        <p><span class="price-tick">✓</span> Elit mir ivamus</p>
                                        
                                        <div className='text-center price-button2'>
                                        <button>Book Now</button>
                                        </div>
                                    

                                </div>
                             </div>
                             <div className='col-lg-3 col-sm-6 col-12'>
                                <div className='price-content'>
                                <h4>DELUXE</h4>
                                        <h1>$103.40</h1>
                                        <p><span class="price-tick">✓</span>Quisque rhoncus</p>
                                        <p><span class="price-tick">✓</span>Lorem ipsum dolor</p>
                                        <p><span class="price-tick">✓</span>Vivamus velit mir</p>
                                        <p><span class="price-tick">✓</span> Elit mir ivamus</p>
                                        <p><span class="price-tick">✓</span>Lorem ipsum dolor</p>
                                        <p><span class="price-tick">✓</span>  Ipsum dolor</p>
                                        <div className='text-center price-button3'>
                                        <button>Book Now</button>
                                        </div>
                                    

                                </div>
                             </div>
                             <div className='col-lg-3 col-sm-6 col-12'>
                                <div className='price-content'>
                                <h4>ULTIMATE</h4>
                                        <h1>$190.50</h1>
                                        <p><span class="price-tick">✓</span>Quisque rhoncus</p>
                                        <p><span class="price-tick">✓</span>Lorem ipsum dolor</p>
                                        <p><span class="price-tick">✓</span>Quisque rhoncus</p>
                                        <p><span class="price-tick">✓</span> It ir ivamus</p>
                                        <p><span class="price-tick">✓</span>Elit mir ivamus</p>
                                        <p><span class="price-tick">✓</span> Quisque rhoncus</p>
                                        <p><span class="price-tick">✓</span> it mir iamu</p>
                                        
                                        <div className='text-center price-button4'>
                                        <button>Book Now</button>
                                        </div>
                                    

                                </div>
                                </div> 
                            </div>
                                                      
                        </div>
                    </div>

                {/* Clint Section */}

                    <div>
                        <div className='clint-section'>
                            <h1 className='text-center Clint-say'>What Our Client Say</h1>
                            <div className='container clint-flex'>
                             <div className='row'>
                             <div className='col-lg-4 col-sm-8 col-12'>
                                    <div  className='clint '>
                                       <div className='img-name-flex'>
                                       <div className='clint-1-img'>
                                            <img src={clint} alt="" />
                                        </div>
                                        <div>
                                            <h4>Reman Maggie</h4>
                                            <p>Seoul,South Korea</p>
                                        </div>
                                       </div>
                                        
                                        <h1>Thank you For a great service</h1>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et laudantium excepturi sit, laboriosam, similique molestias tempora earum optio, ad corrupti iure! </p>


                                    </div>
                                </div>
                                <div className='col-lg-4 col-sm-8 col-12'> 
                                <div className='clint'>
                                       <div className='img-name-flex'>
                                       <div className='clint-1-img'>
                                            <img src={clint2}alt="" />
                                        </div>
                                        <div>
                                            <h4>Jack Reri</h4>
                                            <p>New york, Usa</p>
                                        </div>
                                       </div>
                                        
                                        <h1>Thank you For a great service</h1>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et laudantium excepturi sit, laboriosam, similique molestias tempora earum optio, ad corrupti iure! </p>


                                    </div></div>
                                <div className='col-lg-4 col-sm-8 col-12'>
                                <div className='clint'>
                                       <div className='img-name-flex'>
                                       <div className='clint-1-img'>
                                            <img src={clint} alt="" />
                                        </div>
                                        <div>
                                            <h4>Karl Worlter</h4>
                                            <p>New york, Usa</p>
                                        </div>
                                       </div>
                                        <h1>Thank you For a great service</h1>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et laudantium excepturi sit, laboriosam, similique molestias tempora earum optio, ad corrupti iure! </p>
                                    </div>
                                    
                                    </div> 
                                </div>                               
                                
                            </div>
                             
                        </div>
                    </div>


                    <div className='sheping-secton'>
                        <div className=' container Book-sheping'>
                           <div className='sheping-flex'>
                           <div className='row'>
                           <div className='col-lg-5 col-sm-12 col-12'>
                                <div className='sheping-time'>
                                   <div className='customer-time'>
                                   <h5>2043</h5>
                                    <p>Active Customers</p>
                                   </div>
                                   <div className='customer-time'>
                                   <h5>3298</h5>
                                    <p>Monthly Shipments</p>
                                   </div>
                                   <div className='customer-time'>
                                   <h5>5 min</h5>
                                    <p>To Book A Shipment</p>
                                   </div>

                                </div>
                            </div>
                            <div className='col-lg-7'>
                                <div className='sheping-reg'>
                                    <h1>Ready to book your shipment?</h1>
                                    <h5>Create an account to book. It only takes a few steps!</h5>
                                    <div className='text-center shiping-button'>
                                    <button >Create Account</button>

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

export default Home;