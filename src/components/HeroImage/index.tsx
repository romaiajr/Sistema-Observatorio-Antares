import React from 'react';
import LogoNome from '../../assets/images/logo_nome2.svg';
import MainImage from '../../assets/images/hero_image.svg';
import './styles.css';

function HeroImage() {
    return (
        <div className="heroimage">
            <div className="image_section">
                <div>
                    <img src={LogoNome} className="logo_nome" />
                    <p>Ficamos felizes  em receber a sua visita.</p>
                </div>
                {/* <div>
                    <img src={MainImage} className="mainimage" />
                </div> */}
            </div>
            <div className="button_section">

            </div>
        </div>
    );
}

export default HeroImage;