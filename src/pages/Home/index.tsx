import React from 'react'
import Navbar from '../../components/NavBar'
import { Link } from 'react-router-dom';
import LogoNome from '../../assets/images/logo_nome2.svg';
import MainImage from '../../assets/images/hero_image.svg';
import './styles.css';

function Home() {
    return (
        <div className="main_page">
            <Navbar>
                <Link to="" className="nav_link">Atrações</Link>
                <Link to="" className="nav_link">Informações</Link>
                <Link to="" className="nav_link">Contato</Link>
                <Link to="" className="nav_link">Agendamento</Link>
                <Link to="" className="nav_link">Login</Link>
            </Navbar>
            <div className="brand_section">
                <img src={MainImage} alt="Imagem Principal" className="main_img" />
                <div className="container">
                    <img src={LogoNome} alt="Logo Nome" className="logo_nome" />
                    <p>Ficamos muito felizes em <br />receber a <b>sua visita ;)</b></p>
                </div>
            </div>
            <div className="scheduling_section">
                <div className="container_grid">

                    <p>Seja bem-vindo!<br /><b>Agende já a sua visita</b></p>

                    <span>Realizar agendamento como:</span>
                    <div className="button_container">
                        <Link to="/" id="pessoa_btn" className="link_button">Pessoa</Link>
                        <Link to="/" id="escola_btn">Escola</Link>
                    </div>
                </div>
            </div>
        </div >
    );
}

export default Home;