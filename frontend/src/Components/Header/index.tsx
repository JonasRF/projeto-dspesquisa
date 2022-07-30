import React from "react";
import { Link } from "react-router-dom";
import Logo from '../../assets/Image/logo.svg';
import './styles.css';

const Header = () => {
    return (
        <header className="main-header">
            <img src={Logo} alt='pesquisa' />
            <Link to={'/'}>
                <div className="logo-text">
                    <span className="logo-text-1">Big Game</span>
                    <span className="logo-text-2"> Survey</span>
                </div>
            </Link>
        </header>
    );
}
export default Header;