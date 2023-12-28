import React from 'react';
import "./Aproposinfo.scss";

function Aproposinfo() {
    return (
        <>
        <div className="appartementchilds">
            <div className="appartement-details">
                <div className="description1">
                    <span>Fiabilité</span>
                    <i className="fas fa-chevron-down"></i>
                </div>
                <p className="description-content">
                    Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.
                </p>
            </div>

            <div className="appartement-details">
                <div className="description1">
                    <span>Respect</span>
                    <i className="fas fa-chevron-down"></i>
                </div>
                <p className="description-content">
                    La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.
                </p>
            </div>

            <div className="appartement-details">
                <div className="description1">
                    <span>Service</span>
                    <i className="fas fa-chevron-down"></i>
                </div>
                <p className="description-content">
                    Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.
                </p>
            </div>

            <div className="appartement-details">
                <div className="description1">
                    <span>Sécurité</span>
                    <i className="fas fa-chevron-down"></i>
                </div>
                <p className="description-content">
                    La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement
                    correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au
                    locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons
                    également des ateliers sur la sécurité domestique pour nos hôtes.
                </p>
            </div>
        </div>
        </>
    )
}

export default Aproposinfo