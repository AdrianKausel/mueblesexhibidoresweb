import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Foto1 from './ImgsComponents/Imagen';
import Foto2 from './ImgsComponents/Imagen2';
import '../App.css';
import Foto3 from './ImgsComponents/Imagen3';
import Foto5 from './ImgsComponents/Imagen5';
import Foto6 from './ImgsComponents/Imagen6';
import Foto7 from './ImgsComponents/Imagen7';
import Foto8 from './ImgsComponents/Imagen8';
import Foto4 from './ImgsComponents/Imagen4';
import Foto9 from './ImgsComponents/Imagen9';
import Foto10 from './ImgsComponents/Imagen10';
import Foto11 from './ImgsComponents/Imagen11';
import Foto12 from './ImgsComponents/Imagen12';


//CAROUSEL SHOWROOMS

function FotoCarousel() {
    return (
        <Carousel>
        <Carousel.Item >
            <Foto1  text="Foto 1" />
            <Carousel.Caption>
            <h3>Showroom Constructoras</h3>
            <p>Alonso de Córdoba - Vitacura, Santiago - Chile</p>
            <p>Mobiliario Pisos</p>
            </Carousel.Caption> 
        </Carousel.Item>
        <Carousel.Item >
            <Foto2 text="Foto 2" />
            <Carousel.Caption>
            <h3>Showroom Constructoras</h3>
            <p>Alonso de Córdoba - Vitacura, Santiago - Chile</p>
            <p>Mobiliario Pisos</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item >
            <Foto3 text="Foto 3" />
            <Carousel.Caption>
            <h3>Showroom Constructoras</h3>
            <p>Alonso de Córdoba - Vitacura, Santiago - Chile</p>
            <p>Exhibición Porcelanatos Cerámicas </p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item >
            <Foto4 text="Foto 4" />
            <Carousel.Caption>
            <h3>Showroom Constructoras</h3>
            <p>Alonso de Córdoba - Vitacura, Santiago - Chile</p>
            <p>Exhibición sanitarios</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item >
            <Foto5 text="Foto 5" />
            <Carousel.Caption>
            <h3>Showroom Constructoras</h3>
            <p>Alonso de Córdoba - Vitacura, Santiago - Chile</p>
            <p>Exhibición sanitarios</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item >
            <Foto6 text="Foto 6" />
            <Carousel.Caption>
            <h3>Showroom Constructoras</h3>
            <p>Alonso de Córdoba - Vitacura, Santiago - Chile</p>
            <p>Mesa reuniones</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item >
            <Foto7 text="Foto 7" />
            <Carousel.Caption>
            <h3>Showroom Constructoras</h3>
            <p>Alonso de Córdoba - Vitacura, Santiago - Chile</p>
            <p>Mesa reuniones</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item >
            <Foto8 text="Foto 8" />
            <Carousel.Caption>
            <h3>Showroom Constructoras</h3>
            <p>Alonso de Córdoba - Vitacura, Santiago - Chile</p>
            <p>Mobiliario Pisos</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item >
            <Foto9 text="Foto 9" />
            <Carousel.Caption>
            <h3>Showroom Constructoras</h3>
            <p>Alonso de Córdoba - Vitacura, Santiago - Chile</p>
            <p>Mobiliario Pisos</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item >
            <Foto10 text="Foto 10" />
            <Carousel.Caption>
            <h3>Showroom Constructoras</h3>
            <p>Alonso de Córdoba - Vitacura, Santiago - Chile</p>
            <p>Mobiliario Pisos</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item >
            <Foto11 text="Foto 11" />
            <Carousel.Caption>
            <h3>Showroom Constructoras</h3>
            <p>Alonso de Córdoba - Vitacura, Santiago - Chile</p>
            <p>Mobiliario Pisos</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item >
            <Foto12 text="Foto 12" />
            <Carousel.Caption>
            <h3>Showroom Constructoras</h3>
            <p>Isidora Goyenechea - Vitacura, Santiago - Chile</p>
            <p>Exhibición mamparas</p>
            </Carousel.Caption>
        </Carousel.Item>
        </Carousel>
    );
}

export default FotoCarousel;