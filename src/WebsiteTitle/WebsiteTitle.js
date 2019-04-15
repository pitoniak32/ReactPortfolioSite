import React from 'react';
import './WebsiteTitle.css';

const websiteTitle = (props) => {
    return(
        <div className='ws-title'>
            <h1 className='title'>{props.title}</h1>
        </div>
    );
}

export default websiteTitle;