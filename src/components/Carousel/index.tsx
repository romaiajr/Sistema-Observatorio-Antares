import React from "react";
import { Carousel, CarouselItem } from 'react-bootstrap'
import './style.css';
import a from '../../assets/images/astronomy.jpg'

function Carrossel() {
    return (
        <Carousel className="carrosel">
            <CarouselItem>
                <img src={a}
                    alt="imagem atração"
                    className="d-block w-100" />
                <Carousel.Caption>
                    <h3>Atração</h3>
                    <p>Descrição</p>
                </Carousel.Caption>
            </CarouselItem>
            <CarouselItem>
                <img src="https://avatars0.githubusercontent.com/u/59492898?s=460&u=dc1a72e0302a1b74dd9b429eedb48e078a1684ea&v=4"
                    alt="imagem atração"
                    className="d-block w-100" />
                <Carousel.Caption>
                    <h3>Atração</h3>
                    <p>Descrição</p>
                </Carousel.Caption>
            </CarouselItem>
        </Carousel>
    )
}

export default Carrossel;