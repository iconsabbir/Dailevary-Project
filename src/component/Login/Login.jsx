import React from 'react';
import "./Login.css";
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className='login-section-1'>
           <div className='container'>
           <div className='login'>
            <h1>Login</h1>
                <form>
                    <div className='text-fild'>
                        <input type="email"  placeholder='Email'/>
                        <span></span>
                        
                    </div>
                    <div className='text-fild'>
                        <input type="password" placeholder='Password' />
                        <span></span>
                       
                    </div>
                    <div className='pass'>Forget Password?</div>
                    <input type="submit" value="Login" />
                    <div className='Sing_up'>
                    You don't have accouny?<Link to="/singup">SingUp</Link>

                    </div>


                </form>

                </div>
           </div>

            </div>
    
    );
};

export default Login;