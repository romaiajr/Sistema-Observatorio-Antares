import React from 'react'
import Navbar from '../../components/NavBar'
import { Link } from 'react-router-dom';
import './styles.css';
import HeroImage from '../../components/HeroImage';

function Home() {
    return (
        <div>
            <Navbar>
                <Link to="" className="nav_link">Atrações</Link>
                <Link to="" className="nav_link">Informações</Link>
                <Link to="" className="nav_link">Contato</Link>
                <Link to="" className="nav_link">Agendamento</Link>
                <Link to="" className="nav_link">Login</Link>
            </Navbar>
            <HeroImage />
        </div>
    );
}

export default Home;