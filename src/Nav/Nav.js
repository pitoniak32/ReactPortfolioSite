import React from 'react';
import './Nav.css';
import NavElement from './NavElement/NavElement';

const nav = () => {
    return(
        <div className='nav'>
            <NavElement link='https://github.com/Cryoexn' type='fab' icon='github'/>
            <NavElement link='https://www.linkedin.com/in/david-pitoniak/' type='fab' icon='linkedin'/>
            <NavElement link='https://app.joinhandshake.com/users/19212853' type='fas' icon='handshake'/>
        </div>
    );
}

export default nav;