import React from 'react';
import './NavElement.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const navElement = (props) => {
    return(
      <div className='nav-element'>
        <a className="link hvr-skew-forward" href={props.link}>
            <FontAwesomeIcon icon={[props.type, props.icon]} className="icon"/>
        </a>
      </div>  
    );
}

export default navElement;