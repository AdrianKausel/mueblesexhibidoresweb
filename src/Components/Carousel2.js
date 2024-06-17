import Carousel from 'react-bootstrap/Carousel';
import FotoRetail1 from './ImgsComponents/retail1';
import FotoRetail2 from './ImgsComponents/retail2';
import FotoRetail3 from './ImgsComponents/retail3';
import FotoRetail4 from './ImgsComponents/retail4';
import FotoRetail5 from './ImgsComponents/retail5';
import FotoRetail6 from './ImgsComponents/retail6';
import FotoRetail7 from './ImgsComponents/retail7';
import FotoRetail8 from './ImgsComponents/retail8';


//CAROUSEL RETAIL

function FotoCarousel2() {
    return (
        <Carousel>
        <Carousel.Item>
            <FotoRetail1 text="Foto 1" />
            <Carousel.Caption>
            <h3>Retail</h3>
            <p>Grillas electrificadas</p>
            <p>Exhibición lamparas</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <FotoRetail2 text="Foto 2" />
            <Carousel.Caption>
            <h3>Retail</h3>
            <p>Grillas electrificadas</p>
            <p>Exhibición lamparas</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <FotoRetail3 text="Foto 3" />
            <Carousel.Caption>
            <h3>Retail</h3>
            <p>Grillas electrificadas</p>
            <p>Exhibición lamparas</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <FotoRetail4 text="Foto 4" />
            <Carousel.Caption>
            <h3>Retail</h3>
            <p>Grillas electrificadas</p>
            <p>Exhibición lamparas</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <FotoRetail5 text="Foto 5" />
            <Carousel.Caption>
            <h3>Retail</h3>
            <p>Grillas electrificadas</p>
            <p>Exhibición lamparas</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <FotoRetail6 text="Foto 6" />
            <Carousel.Caption>
            <h3>Retail</h3>
            <p>Grillas electrificadas</p>
            <p>Exhibición lamparas</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <FotoRetail7 text="Foto 7" />
            <Carousel.Caption>
            <h3>Retail</h3>
            <p>Grafica impresa</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <FotoRetail8 text="Foto 8" />
            <Carousel.Caption>
            <h3>Retail</h3>
            <p>Casetón fondo lama</p>
            <p>Exhibición griferia</p>
            </Carousel.Caption>
        </Carousel.Item>
        </Carousel>
    );
}

export default FotoCarousel2;