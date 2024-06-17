import Carousel from 'react-bootstrap/Carousel';
import FotoStand1 from "./ImgsComponents/stand1"
import Foto1 from './ImgsComponents/Imagen';
import FotoRetail1 from './ImgsComponents/retail1';
import Foto10 from './ImgsComponents/Imagen10';
import FotoFerreteria1 from './ImgsComponents/ferreteria1';



//CAROUSEL - Main Page

function CarouselMain() {
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
        <Carousel.Item>
            <FotoStand1 text="Foto 2" />
            <Carousel.Caption>
            <h3>Stand</h3>
            <p>Feria Edifica</p>
            <p>Exhibición griferia</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <FotoRetail1 text="Foto 3" />
            <Carousel.Caption>
            <h3>Retail</h3>
            <p>Grillas electrificadas</p>
            <p>Exhibición lamparas</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item >
            <Foto10 text="Foto 4" />
            <Carousel.Caption>
            <h3>Showroom Constructoras</h3>
            <p>Alonso de Córdoba - Vitacura, Santiago - Chile</p>
            <p>Mobiliario Pisos</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <FotoFerreteria1 text="Foto 5" />
            <Carousel.Caption>
            <h3>Ferreterías</h3>
            <p>Mueble pedestal giratorio </p>
            <p>Exhibición griferia</p>
            </Carousel.Caption>
        </Carousel.Item>
        </Carousel>
    );
}

export default CarouselMain;