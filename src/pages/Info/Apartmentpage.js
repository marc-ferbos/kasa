import React from 'react';
import './Apartmentpage.scss';
import { useParams } from 'react-router-dom';
import Navbar from '../../Components/Navbar';
import Footer from '../../Components/Footer';
import Data from '../../Data/logement.json';

function Apartmentpage() {
    const id = useParams().id; /* Récupère l'id de l'appartement dans l'URL */
    let appartement = {};
    Data.forEach((logement) => { /* Pour chaque élément de Data */
        if (logement.id === id) { /* Si l'id de l'appartement correspond à l'id dans l'URL */
            appartement = logement; /* On récupère l'appartement */
        }
    });
    
    let { title, cover, location, tags, description, host, rating } = appartement;

    return (
        <>
        <Navbar></Navbar>        
            <div className="Appartement">
            <img src={cover} alt={title} />
                <div className="Appartement-info">
                    <h3>{title}</h3>
                    <div className="Appartement-location">
                        <span>{location}</span>
                    </div>
                    <div className="Appartement-tags">
                    {Array.isArray(tags) && tags.length > 0 ? ( /* Vérifie si tags est un tableau et s'il contient au moins un élément */
                        tags.map((tag, index) => ( /* Pour chaque élément du tableau, on affiche un span avec le tag */
                            <span key={index}>{tag}</span> /* key={index} permet d'identifier chaque élément du tableau */
                            ))
                            ) : (
                                <span>No tags available</span> /* Si tags n'est pas un tableau ou s'il est vide, on affiche un message */
                            )}
                    </div>
                    <p className="Appartement-description">{description}</p>
                    <div className="Appartement-host">
                        <img src={host?.picture} alt={host?.name} /> {/* Si host existe, on affiche son image et son nom */}
                        <span>{host?.name}</span> {/* Si host existe, on affiche son nom */}
                    </div>
                    <div className="Appartement-rating">
                        <span className="Appartement-rating-stars">
                            {Array(rating) /* Crée un tableau de rating éléments */
                                .fill() /* Remplit le tableau avec des valeurs vides */
                                .map((_, i) => ( /* Pour chaque élément du tableau, on affiche une étoile */
                                    <i key={i} className="fas fa-star"></i> /* key={i} permet d'identifier chaque élément du tableau */
                                ))}
                        </span>
                        <span className="Appartement-rating-reviews"> {host?.reviews} avis</span>
                    </div>
                </div>
            </div>
        <Footer></Footer>
        </>
    );
}

export default Apartmentpage;
