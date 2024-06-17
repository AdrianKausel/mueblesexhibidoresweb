import Carousel from 'react-bootstrap/Carousel';
import FotoFerreteria1 from './ImgsComponents/ferreteria1';
import FotoFerreteria2 from './ImgsComponents/ferreteria2.js';
import FotoFerreteria3 from './ImgsComponents/ferreteria3.js';


//CAROUSEL Ferreteria

function FotoCarousel3() {
    return (
        <Carousel>
        <Carousel.Item>
            <FotoFerreteria1 text="Foto 1" />
            <Carousel.Caption>
            <h3>Ferreterías</h3>
            <p>Mueble pedestal giratorio </p>
            <p>Exhibición griferia</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <FotoFerreteria2 text="Foto2" />
            <Carousel.Caption>
            <h3>Ferreterías</h3>
            <p>Mueble sobre mesón giratorio</p>
            <p>Exhibición griferia</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <FotoFerreteria3 text="Foto3" />
            <Carousel.Caption>
            <h3>Ferreterías</h3>
            <p>Mueble puertas con bisagra y pivotes</p>
            <p>Exhibición puertas </p>
            </Carousel.Caption>
        </Carousel.Item>
        </Carousel>
    );
}

export default FotoCarousel3;