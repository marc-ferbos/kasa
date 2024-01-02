import React from 'react';
import './Notfound.scss';
import Navbar from '../../Components/Navbar';
import Footer from '../../Components/Footer';

function Notfound() {
    return (
        <>
        <Navbar></Navbar>
        <div className="Notfound">
        <img src="./assets/404.png" alt="logo404" />
            <p>Oups! La page que vous demandez n'existe pas.</p>
            <a href="/">Retourner sur la page d'accueil</a>
        </div>
        <Footer></Footer>
        </>
    );
}

export default Notfound;