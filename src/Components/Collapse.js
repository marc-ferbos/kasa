import React from 'react';
import { useState } from 'react';
import './Collapse.scss';

function Collapse({title, description}) {

    const [isContentVisible, setIsContentVisible] = useState(false);
    const ContentON = () => {
        setIsContentVisible(!isContentVisible);
    }
    
    return (
        <div className="appartement-details">
            <div className="description1">
                <span>{title}</span>
                <i className={`fa-solid fa-chevron-up ${isContentVisible ? "rotate-chevron" : ''}`} onClick={ContentON}></i>
            </div>
            {isContentVisible && (
                <div className="description-content">
                    {description}
                </div>
            )}
        </div>
    )
}

export default Collapse;