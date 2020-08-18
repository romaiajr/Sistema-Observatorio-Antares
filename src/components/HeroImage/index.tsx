import React from 'react';
import LogoNome from '../../assets/images/logo_nome2.svg';
import MainImage from '../../assets/images/hero_image.svg';
import './styles.css';

function HeroImage() {
    return (
        <div className="heroimage">
            <div>
                <img src={MainImage} className="mainimage" />
            </div>
            <div className="brand_section">
                <img src={LogoNome} className="logo_nome" />
                <p>Ficamos felizes  em
                <br />receber a sua visita ;)</p>
            </div>
            <div className="button_section">

            </div>
        </div>
    );
}

export default HeroImage;