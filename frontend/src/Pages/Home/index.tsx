import React from "react";
import ArrowIcon from '../../assets/Image/Seta.svg';
import GamerImage from '../../assets/Image/gamer.svg';

import './styles.css';
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div className="home-container">
            <div className="home-text">
                <h1 className="home-text-title">
                    Quais jogos a galera gosta mais?
                </h1>
                <h3 className="home-text-subtitle">
                    Clique no botão abaixo e saiba quais são os jogos que os gamers estão escolhendo!
                </h3>
                <div className="home-actions">
                    <Link to={'/records'}>
                        <button className="home-btn">
                            QUERO SABER QUAIS SÃO
                        </button>
                    </Link>
                    <div className="home-btn-icon">
                        <img src={ArrowIcon} alt='Complemento do botão' />
                    </div>
                </div>
            </div>
            <img className="home-image" src={GamerImage} alt='Image Gamer' />
        </div>
    );
}

export default Home;