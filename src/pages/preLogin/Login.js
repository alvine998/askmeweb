import React from 'react';
import '../../style.css';

const Login = () => {
    return (
        <div>
            <div className='centering'>
                <div className='box'>
                    <a href='#'><p className='skipper'>SKIP</p></a>
                    <h2 className='title-1'>ASK.ME</h2>

                    <div className='email-form'>
                        <input type={"email"} placeholder="Email" className="form-control" style={{border:"none", width:"100%"}}/>
                    </div>
                    <div className='password-form'>
                        <input type={"password"} placeholder="Password" className="form-control" style={{border:"none", width:"100%"}}/>
                    </div>
                    <a href='#'><p className='forgot-pass'>Forgot password ?</p></a>

                    <div>
                        
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;