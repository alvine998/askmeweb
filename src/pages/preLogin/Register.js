import React from 'react';
import { logo } from '../../assets';
import '../../style.css';

const Register = () => {
    return (
        <div>
            <div className='centering'>
                <div className='box'>                    
                    <h2>Register</h2>
                    <div className='email-form'>
                        <input type={"text"} placeholder="Name" className="form-control" style={{ border: "none", width: "100%" }} />
                    </div>
                    <div className='password-form'>
                        <input type={"email"} placeholder="Email" className="form-control" style={{ border: "none", width: "100%" }} />
                    </div>
                    <div className='password-form'>
                        <input type={"password"} placeholder="Password" className="form-control" style={{ border: "none", width: "100%" }} />
                    </div>
                    <div className='password-form'>
                        <input type={"password"} placeholder="Confirm Password" className="form-control" style={{ border: "none", width: "100%" }} />
                    </div>
                    <div className='mt-10'>
                        <div className='box-button1'>
                            <a href='#'><p>Register</p></a>
                        </div>
                        <hr></hr>
                        <div className='box-button2'>
                            <a href='#'><p>Login</p></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Register;