import React from 'react';
import './Banner.scss';

function Banner({title,classBanner}) {
    return (    

    <div className ={"Banner " + classBanner} >
        {title.length > 0 ? <h1>{title}</h1> : null}
    </div>


    );
}

export default Banner;