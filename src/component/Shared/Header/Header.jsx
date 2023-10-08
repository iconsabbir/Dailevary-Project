import React from 'react';
import logo from "../../../assets/Deliver.png"
import "./Header.css";
import { Link, useNavigate, } from 'react-router-dom';


const Header = () => {
    const navigate = useNavigate()
    return (
        <div>
            
            <div className='header-section'>
              <div className='container'>
              <div className='header-flex'>
                    <div className='header-logo'>
                        <img src={logo} alt="" />
                        
                    </div>
                     <div className='header-item'>
                        <ul>
                            <li><Link to="/home">Home</Link></li>
                            <li><Link to="/service">Service</Link></li>
                            <li><Link to="/about">About</Link></li>
                            <li><Link to="/contact">Contact</Link></li>
                            <div className='login-section'>
                            <li><Link to="/login">Login</Link></li>
                            <button  onClick={()=>navigate("/singup")}>SingUp</button>     

                            </div>
                                                  
                        </ul>
                       
                        
                        
                        
                        </div>   
                </div> 

              </div>
            </div>

        </div>
    );
};

export default Header;