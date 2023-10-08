import React from 'react';
import { Link } from 'react-router-dom';
import "./SignUp.css";
import { FaGoogle} from 'react-icons/fa';




const SingUp = () => {
    return (
        <div>
           <div className='singup-section-1'>
           <div className='container'>
           <div className='singup'>
            <h1>SingUp!</h1>
                <form>
                <div className='text-fild-1'>
                        <input type="Name"  placeholder='User Name'/>
                        <span></span>
                        
                    </div>
                    <div className='text-fild-1'>
                        <input type="email"  placeholder='Email'/>
                        <span></span>
                        
                    </div>
                    <div className='text-fild'>
                        <input type="password" placeholder='Password' />
                        <span></span>
                       
                    </div>
                    <input type="submit" value="SingUp" />
                    <div className='Sing_up'>
                    You don't have accouny?<Link to="/login">Plase Login</Link>

                    </div>
                    <div className='text-center google'>
                        <button><span className='google-icon'><FaGoogle /></span> SingUp With Google</button>
                        
                    </div>
                    

                </form>

                </div>
           </div>

            </div>
        </div>
    );
};

export default SingUp;