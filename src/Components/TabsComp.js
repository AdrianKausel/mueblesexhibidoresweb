import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import FotoCarousel from './Carousel';
import FotoCarousel2 from './Carousel2';
import FotoCarousel3 from './Carousel3';
import FotoCarousel4 from './Carousel4';
import '../App.css';

function TabsComp() {
    return (
        <Tabs 
        defaultActiveKey="1"
        id="fill-tab-example"
        className='tabsi'
        justify
        >
            <Tab  eventKey="1" title="Showroom">
                <FotoCarousel/>
            </Tab>
            <Tab eventKey="2" title="Retail">
                <FotoCarousel2/>
            </Tab>
            <Tab eventKey="3"  title="Ferreterías">
                <FotoCarousel3/>
            </Tab>
            <Tab eventKey="4" title="Stand">
                <FotoCarousel4/>
            </Tab>
        </Tabs>
    );
}

export default TabsComp;