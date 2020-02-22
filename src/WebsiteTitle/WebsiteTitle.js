import React from 'react';
import './WebsiteTitle.css';

const websiteTitle = (props) => {
    return(
        <div className='title-container'>
            <h1 className='ws-title'>{props.title}</h1>
            <div className='title-border'></div>
        </div>
    );
}

export default websiteTitle;