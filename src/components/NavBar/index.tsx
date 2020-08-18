import React from 'react';
import Navbar from 'react-bootstrap';
import Logo from '../../assets/images/logo.svg'
import './style.css';

interface navProps {

}

const NavBar: React.FunctionComponent<navProps> = (props) => {
    return (
        <nav className="navbar">
            <div className="logo_title">
                <a href="/">
                    <img className="logo" src={Logo} alt="Logo Antares" />
                </a>
                <h3>Observatório Astronômico Antares</h3>
            </div>
            <div>
                {props.children}
            </div>
        </nav>
    );
}

export default NavBar;