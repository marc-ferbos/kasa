import React from 'react';
import './Appartement.scss';
import { Link } from 'react-router-dom';


function Appartement({ id, title, cover, location, tags, description, host, rating}) {
    return (
    <Link to={`/logement/${id}`} className="Appartement-link">   
    <article className = "Appartement" >
        <div className="Appartement-info">
            <h3>{title}</h3>
        </div>
        <img src={cover} alt={title} />
    </article>
    </Link>
    );
}

export default Appartement;