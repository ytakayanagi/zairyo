import React from 'react';
import Tilt from 'react-tilt';
import logo from './zairyo-logo.png';
import './Logo.css';

const Logo = () => {
    return (
        <div className='center mv5'>
            <Tilt className="Tilt br2 shadow-2" options={{ max : 55 }} style={{ height: 200, width: 200 }} >
                <div className="Tilt-inner"><img src={logo} /></div>
            </Tilt>
        </div>
    );
}

export default Logo;