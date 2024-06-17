import Carousel from 'react-bootstrap/Carousel';
import FotoStand1 from "./ImgsComponents/stand1"
import FotoStand2 from "./ImgsComponents/stand2"
import FotoStand3 from "./ImgsComponents/stand3"


//CAROUSEL Ferreteria

function FotoCarousel4() {
    return (
        <Carousel>
        <Carousel.Item>
            <FotoStand1 text="Foto 1" />
            <Carousel.Caption>
            <h3>Stand</h3>
            <p>Feria Edifica</p>
            <p>Exhibición griferia</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <FotoStand2 text="Foto2" />
            <Carousel.Caption>
            <h3>Stand</h3>
            <p>Mueble con conexiones de agua y bomba de presión</p>
            <p>Exhibición griferia</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <FotoStand3 text="Foto3" />
            <Carousel.Caption>
            <h3>Stand</h3>
            <p>Feria Edifica</p>
            <p>Exhibición griferia</p>
            </Carousel.Caption>
        </Carousel.Item>
        </Carousel>
    );
}

export default FotoCarousel4;