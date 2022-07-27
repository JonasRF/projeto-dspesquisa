import React from "react";
import Logo from '../../assets/Image/logo.svg';
import './styles.css';

const Header = () => {
    return (
        <header className="main-header">
            <img src={Logo} alt='pesquisa' />
            <div className="logo-text">
                <span className="logo-text-1">Big Game</span>
                <span className="logo-text-2"> Survey</span>
            </div>
        </header>
    );
}
export default Header;