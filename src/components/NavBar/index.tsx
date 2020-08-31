import React from 'react';
import Navbar from 'react-bootstrap';
import Logo from '../../assets/images/logo.svg'
import { Link } from 'react-router-dom';
import './style.css';

interface navProps {

}

const NavBar: React.FunctionComponent<navProps> = (props) => {
    return (
        <nav className="navbar">
            <div className="logo_title">
                <Link to="/">
                    <img className="logo" src={Logo} alt="Logo Antares" />
                </Link>
                <h3>Observatório Astronômico Antares</h3>
            </div>
            <div>
                {props.children}
            </div>
        </nav>
    );
}

export default NavBar;