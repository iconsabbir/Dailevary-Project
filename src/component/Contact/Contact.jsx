import React from 'react';
import { Link } from 'react-router-dom';
import "./Contact.css";

const Contact = () => {
    return (
        <div>
              <div className='contact-section'>
                <div className='container'>
                    <div className='contact'>
                        <li><Link to="/home">Home</Link> / Contact</li>
                        <h1>Contacct Us</h1>
                    </div>
                </div>

            </div>

            <div className='main-contact'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-6'>
                            <div className='contact-info'>
                                <div className='detals-1'>
                                <h2>Contact Information</h2>
                                <h5>Tortor dignissim convallis aenean et tortor at risus viverra adipiscing.</h5>
                                </div>
                                <div className='detals-2'>
                                <h6>Head Office</h6>
                                <p>730 Glenstone Ave 65802, Springfield, US</p>
                                </div>
                                <div className='detals-3'>
                                <a href="#">+123 987 321</a><a href="#">, +123 123 654</a>
                                <p>Deliver@yourcompany.com</p>
                                </div>
                                <div className='detals-2'> 
                                <h6>Branch Office</h6>
                                <p>730 Glenstone Ave 65802, Springfield, US</p>
                                </div>
                                <div className='detals-3'>
                                <a href="#">+123 987 321 ,</a><a href="#">+123 123 654</a>
                                <p>contact@yourcompany.com</p>
                                </div>

                            </div>
                        </div>
                        <div className='col-lg-6'>
                            <div className='submit-title'>
                                <h1>Got Any Questions?</h1>
                                <p>Use the form below to get in touch with us.</p>
                            </div>
                            <form>
                                <div className='input-flex mb-3 ' >
                                <input type="text" name="email" placeholder="Write Your Name Here" class="form-control ps-3 me-3"/>
                                    <input type="text" name="email" placeholder="Write Your Email Here" class="form-control ps-3"/>
                                </div>
                                <div className='submit-detals'>
                                <input type="text" name="email" placeholder="Phone Number" class="form-control ps-3"/>

                                </div>
                                <div className='submit-detals'>
                                <input type="text" name="email" placeholder="Write Your Subject Here" class="form-control ps-3"/>

                                </div>
                                <textarea placeholder="Write Your Message Here" class="form-control ps-3" rows="8"></textarea>
                            </form>
                            <div className='submit-btn text-center'>
                                <button>SUBMIT</button>
                            </div>
                        </div>

                    </div>

                </div>
            </div>







        </div>
    );
};

export default Contact;