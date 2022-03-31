import React from 'react';
import { logo } from '../../assets';
import '../../style.css';

const Login = () => {
    return (
        <div>
            <div className='centering'>
                <div className='box'>
                    <a href='#'><p className='skipper'>SKIP</p></a>
                    <div className='centering'>
                        <img src={logo} className="img-centering" />
                    </div>

                    <div className='email-form'>
                        <input type={"email"} placeholder="Email" className="form-control" style={{ border: "none", width: "100%" }} />
                    </div>
                    <div className='password-form'>
                        <input type={"password"} placeholder="Password" className="form-control" style={{ border: "none", width: "100%" }} />
                    </div>
                    <a href='#'><p className='forgot-pass'>Forgot password ?</p></a>

                    <div>
                        <div className='box-button1'>
                            <a href='#'><p>Login</p></a>
                        </div>
                        <hr></hr>
                        <div className='box-button2'>
                            <a href='#'><p>Daftar</p></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;