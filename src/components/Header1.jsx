import React from 'react';
import './global.css';
import './Header.css';
import { Link } from 'react-router-dom';

const Header1 = () => {
    return (
        <div className='container-fluid bg-light'>
            <div className='row align-items-center py-3'>
                <div className='col-lg-3 col-6 text-center text-lg-start'>
                    <h2 style={{ color: '#CF2D2D', marginRight:'170px' }}>BookUsNow</h2>
                    <p className='d-lg-none' style={{ color: 'black', margin: '5px 0 0 0', display: 'flex', alignItems: 'center' }}><i className='fas fa-map-marker-alt' style={{ marginRight: '5px' }}></i> Mumbai, India</p>
                </div>

                <div className='col-lg-2 col-6 text-center mt-1 d-none d-lg-block'>
                    <button className='btn btn-dark'><i className="fa fa-bars"></i> Categories</button>
                </div>

                <div className='col-lg-4 col-12 text-center mt-2 mt-lg-0'>
                    <div className='input-group d-lg-flex justify-content-lg-center'>
                        <input type='text' className='form-control d-lg-inline d-none' placeholder='Search...' />
                        <button className='btn btn-outline-secondary d-lg-inline d-none' type='button'><i className="fa fa-search"></i></button>
                        <div className='d-inline d-lg-none ms-auto' style={{ display: 'flex', justifyContent: 'space-evenly', width: '200px', marginTop: '-70px' }}>
                            <i className="fa fa-search" style={{ fontSize: '24px', marginRight: '10px' }}></i>
                            <i className="fa fa-heart" style={{ fontSize: '24px', margin: '0 10px' }}></i>
                            <i className="fa fa-user" style={{ fontSize: '24px' }}></i>
                        </div>
                    </div>
                </div>

                <div className='col-lg-3 col-6 d-lg-flex justify-content-lg-end'>
                    <div className='d-lg-inline-flex'>
                        <button className='btn btn-white d-lg-inline d-none'><i className='fas fa-heart'></i> Favourites</button>
                        <button className='btn btn-white d-lg-inline d-none'> Sign In</button>
                    </div>
                </div>

                <div className='col-lg-4 col-12 d-lg-flex justify-content-lg-start align-items-lg-end mt-2'>
                    <div className='ms-lg-6 mt-3 mt-lg-0'>
                        <p className='d-none d-lg-block' style={{ color: 'black', margin: '0', marginLeft: '5px', display: 'flex', alignItems: 'center' }}><i className='fas fa-map-marker-alt' style={{ marginRight: '5px' }}></i> Mumbai, India</p>
                    </div>
                </div>

                
                <div className='col-lg-4 col-12 mt-1'>
                    <div className='header-links d-flex justify-content-lg-start justify-content-center'>
                        <Link to='/live-shows' className='header-link' style={{ marginTop: '1rem' }}>LiveShows</Link>
                        <Link to='/movies' className='header-link' style={{ marginTop: '1rem' }}>Movies</Link>
                        <Link to='/plays' className='header-link' style={{ marginTop: '1rem' }}>Plays</Link>
                        <Link to='/events' className='header-link' style={{ marginTop: '1rem' }}>Events</Link>
                        <Link to='/sports' className='header-link' style={{ marginTop: '1rem' }}>Sports</Link>
                        <Link to='/activities' className='header-link' style={{ marginTop: '1rem' }}>Activities</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header1;
