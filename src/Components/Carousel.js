import React, { useState } from "react";
import "./Carousel.scss";
import leftArrow from "./left_arrow.png";
import rightArrow from "./right_arrow.png";

function Carousel({ imagesList }) {
    const [currentIndex, setCurrentIndex] = useState(0); // 0 = index de la première image
    const currentImage = imagesList[currentIndex]; // Image actuelle

    const slideLeft = () => {
        const nextIndex =
            currentIndex === 0 ? imagesList.length - 1 : currentIndex - 1; // Si on est à la première image, on passe à la dernière, sinon on passe à l'image précédente
        setCurrentIndex(nextIndex);
    };

    const slideRight = () => {
        const nextIndex =
            currentIndex === imagesList.length - 1 ? 0 : currentIndex + 1; // Si on est à la dernière image, on passe à la première, sinon on passe à l'image suivante
        setCurrentIndex(nextIndex);
    };

    return (
        <div className="descriptionAccommodation">
            <img src={currentImage} alt="Logement"/>
            
            {imagesList.length > 1 && ( // Si imagesList contient plus d'une image, on affiche les flèches
                <div className="arrow">
                    <div className="arrowleft">
                        <img onClick={slideLeft} src={leftArrow}alt="Précédente" />
                    </div>
                    <div className="arrowright">   
                        <img onClick={slideRight} src={rightArrow}alt="Suivante" />
                    </div>
                </div>
            )}
            <div className="number">
                    <p>
                        {currentIndex + 1}/{imagesList.length}
                    </p>
            </div>
        </div>
    );
}

export default Carousel;
