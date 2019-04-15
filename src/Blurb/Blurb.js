import React from 'react';
import './Blurb.css';

const blurb = (props) => {
    return(
        <div className='blurb'>
            <h3 className='abt-me-title'>About Me</h3>
            <p className='abt-me-text'>
                {props.contentText}
            </p>
        </div>
    );
}

export default blurb;