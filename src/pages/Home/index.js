import React from 'react';
import { logo } from '../../assets';

const Home = (props) => {
    return (
        <div style={{ overflow: "hidden" }}>
            <div className='row'>
                <div className='col-md-2'>
                    <img className='img-logo' src={logo} />
                </div>
                <div className='col'>
                    <div className='box-search'>
                        <div className='row'>
                            <div className='col'>
                                <input placeholder='Search' className='form-control' type={"text"} style={{ border: "none" }} />
                            </div>
                            <div className='col'>
                                <button title='Search' className='btn btn-outline-secondary' />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col'>
                    <div className=''>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;