import React from 'react';
import './NavElement.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const navElement = (props) => {
    return(
      <div className='nav-element'>
        <a className="link" href={props.link}>
            <FontAwesomeIcon icon={[props.type, props.icon]} />
        </a>
      </div>  
    );
}

export default navElement;