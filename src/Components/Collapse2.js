import React from 'react';
import { useState } from 'react';
import './Collapse2.scss';

function Collapse2({title, equipment}) {

    const [isContentVisible, setIsContentVisible] = useState(false);
    const ContentON = () => {
        setIsContentVisible(!isContentVisible);
    }
    
    return (
        <div className="appartement-details">
            <div className="description2">
                <span>{title}</span>
                <i className={`fa-solid fa-chevron-up ${isContentVisible ? "rotate-chevron" : ''}`} onClick={ContentON}></i>
            </div>
            {isContentVisible && (
                <ul className="description-content2">
                    {["- Climatisation", "- Wi-Fi", "- Cuisine", "- Espace de travail", "- Fer à repasser", "- Sèche-cheveux", "- Cintres"].map((equipment, index) => (
                        <li key={index}>{equipment}</li>
                    ))}
                </ul>
            )}
        </div>
    )
}

export default Collapse2;