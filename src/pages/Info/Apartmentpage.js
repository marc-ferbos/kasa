import React from "react";
import "./Apartmentpage.scss";
import { Navigate, useParams } from "react-router-dom";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";
import Data from "../../Data/logement.json";
import Collapse from "../../Components/Collapse";

function Apartmentpage() {
    const id = useParams().id; /* Récupère l'id de l'appartement dans l'URL */
    let appartement = null;
    Data.forEach((logement) => {
        /* Pour chaque élément de Data */
        if (logement.id === id) {
            /* Si l'id de l'appartement correspond à l'id dans l'URL */
            appartement = logement; /* On récupère l'appartement */
        }
    });

    if (appartement === null) {
        return <Navigate to="/404"></Navigate>;
    }

    let {
        title,
        cover,
        location,
        tags,
        description,
        host,
        rating,
        equipments,
    } = appartement;

    const listEquipments = (
        <ul>
            {equipments.map((equipment, index) => (
                <li key={index}>
                    {equipment}
                </li> /* key={index} identifie chaque élément du tableau */
                /* Pour chaque élément du tableau, on affiche un li avec l'équipement */
            ))}
        </ul>
    );

    return (
        <>
            <Navbar></Navbar>
            <div className="Apartment">
                <img src={cover} alt={title} />
                <div className="Apartment-window">
                    <div className="Apartment-info">
                        <h3>{title}</h3>
                        <span>{location}</span>
                        <div className="Apartment-tags">
                            {Array.isArray(tags) &&
                            tags.length >
                                0 /* Vérifie si tags est un tableau et s'il contient au moins un élément */ ? (
                                tags.map(
                                    (
                                        tag,
                                        index /* Pour chaque élément du tableau, on affiche un span avec le tag */
                                    ) => (
                                        <span key={index}>
                                            {tag}
                                        </span> /* key={index} permet d'identifier chaque élément du tableau */
                                    )
                                )
                            ) : (
                                <span>
                                    No tags available
                                </span> /* Si tags n'est pas un tableau ou s'il est vide, on affiche un message */
                            )}
                        </div>
                    </div>
                    <div className="Apartment-infos">
                        <div className="Apartment-host">
                            <img src={host?.picture} alt={host?.name} />{" "}
                            {/* Si host existe, on affiche son image et son nom */}
                            <span>{host?.name}</span>{" "}
                            {/* Si host existe, on affiche son nom */}
                        </div>
                        <div className="Apartment-rating">
                            <span className="Apartment-rating-stars">
                                




                                
                            </span>
                            <span className="Apartment-rating-reviews">
                                {" "}
                                {host?.reviews} avis
                            </span>{" "}
                            {/* Si host existe, on affiche son nombre d'avis */}
                        </div>
                    </div>
                </div>
                <div className="Apartment-coll">
                    <div>
                        <Collapse
                            title="Description"
                            description={description}
                        ></Collapse>
                    </div>
                    <div>
                        <Collapse
                            title="Équipements"
                            description={listEquipments}
                        ></Collapse>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </>
    );
}

export default Apartmentpage;
