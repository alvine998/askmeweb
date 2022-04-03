import React from 'react';
import { logo } from '../../assets';

const Home = (props) => {
    return (
        <div style={{ overflow: "hidden", paddingTop: 10 }}>
            <nav className='navbar navbar-expand-lg fixed-top'>
                <div className='col-md-2'>
                    <img className='img-logo' src={logo} />
                </div>
                <div className='navbar-collapse'>
                    <div className='box-search'>
                        <div className='row'>
                            <div className='col'>
                                <input placeholder='Search' className='form-control' type={"text"} style={{ border: "none" }} />
                            </div>
                            <div className='col-md-2'>
                                <div className='pos-btn'>
                                    <a className='btn btn-outline-secondary btn-search'>Search</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-md-3'>
                    <div className='row center2'>
                        <div className='col-md'>
                            <h5>Notification</h5>
                        </div>
                        <div className='col-md'>
                            <div className='nav-item dropdown'>
                                <a className='dropdown-toggle' aria-expanded="false" data-bs-toggle="dropdown" id='dropdown1'>Andri <span className='caret'></span>
                                </a>
                                <ul className='dropdown-menu' aria-labelledby='dropdown1'>
                                    <li className='dropdown-item'><a href='#'>Profile</a></li>
                                    <li className='dropdown-item'><a href='#'>Logout</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className='col-md'>
                            <div className='circle-img'>

                            </div>
                        </div>
                    </div>
                </div>
            </nav>

            <div className='container fixed-50'>
                <div className='main-pos'>
                    <div className='box-ask'>

                    </div>
                </div>
                <div className='main-pos'>
                    <div className='box-ask2'>

                    </div>
                </div>
                <div className='main-pos'>
                    <div className='box-ask'>

                    </div>
                </div>
                <div className='main-pos'>
                    <div className='box-ask2'>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;