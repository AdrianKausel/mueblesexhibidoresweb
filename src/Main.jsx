import { Navbar, Nav, NavLink, Container, Image} from 'react-bootstrap';
import { BsTelephone } from "react-icons/bs";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { FiMail } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";
import logo from './Imgs/CSClogo.png' 
import fotico from './Imgs/foto3.JPG'
import { CL } from 'country-flag-icons/react/3x2'
import TabsComp from './Components/TabsComp';
import WhatsappComp from './Components/whatsappComp';
import LogoSliderComponent from './Components/LogoSliderComp';
import CarouselMain from './Components/CarouselMain';
import { useRef } from 'react';


function Main() {

//scroll to sections:
    const scrollToSobreNosotros = useRef();
    const scrollToClientes = useRef();
    const scrollToNuestrosProyectos = useRef();

        //scroll handlers
    const handleScroll1 = () => {
            scrollToSobreNosotros.current.scrollIntoView({block: "center"}) 
        }

    const handleScroll2 = () => {
            scrollToClientes.current.scrollIntoView({block: "center"}) 
        }    
    
    
    const handleScroll3 = () => {
            scrollToNuestrosProyectos.current.scrollIntoView({block: "center"}) 
        }    


    return (
        <div className="App">
            <Navbar  bg='dark'>
            <Container>
            <Nav className='headerNav'>
                <FiMail className='headerIcons' size={20} />
                <NavLink style={{textDecoration: 'none', color: 'white', cursor:'pointer'}} className='headerTexts' href="mailto:csc@mueblesexhibidores.cl?body=Hola! Quisiera mas información.">csc@mueblesexhibidores.cl</NavLink>
                <BsTelephone className='headerIcons' size={20}  />
                <NavLink style={{textDecoration: 'none', color: 'white', cursor:'pointer'}}  href="//api.whatsapp.com/send?phone=+56992007523&text=Hola! Quisiera mas información" className='headerTexts2' >+56 9 9200 7523</NavLink>
                <NavLink style={{textDecoration: 'none', color: 'white', cursor:'pointer'}}href='https://www.instagram.com/cscmueblesexhibidores/' ><FaInstagram  size={20} /></NavLink>
                <CL className='flagy'/>
            </Nav>
            </Container>
        </Navbar>
            <div className='logoImg'>
            <Image className='logoImg'  src={logo} />
            </div>
            <Navbar  expand="lg">
            <Container >
                <Navbar.Toggle  aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto2">
                    <Nav.Link className='NavTexts' onClick={handleScroll1}>Sobre Nosotros</Nav.Link>
                    <Nav.Link className='NavTexts' onClick={handleScroll2}>Clientes</Nav.Link>
                    <Nav.Link className='NavTexts' onClick={handleScroll3}>Nuestros Proyectos</Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Container>
            </Navbar>
            <div className='carouselContainer'>
            <CarouselMain/> 
            </div>  
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#273036" fill-opacity="99.99" d="M0,96L720,128L1440,32L1440,320L720,320L0,320Z"></path></svg>
            <div ref={scrollToSobreNosotros} className='secondBlock'>
            <Container>
                <h1 className='pageTitles'>Sobre Nosotros</h1>
                <div className='paragraphBlock'>
                <p className='paragraphs'>Sociedad Muebles Exhibidores Ltda. presentes en el mercado nacional desde 1998
                    diseñando y desarrollando diferentes puntos de exhibiciones para una variedad
                    de productos, que cumplen el objetivo final , incrementar la venta de forma efectiva
                    para nuestros clientes. 
                    La experiencia y nuestro conocimiento de materialidades según la funcionalidad y trabajo mecánico
                    de cada uno de ellos: metales - aglomerados – laminados - acrílicos y otros, nos caracteriza por otorgar
                    una asesoría integra para los requerimientos exigidos; una imagen corporativa única
                    y reconocible en cada punto de venta. 
                </p>
                <Image className='otherImage'  src={fotico}/>
                </div>  
            </Container>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#273036" fill-opacity="99.99" d="M0,128L720,160L1440,288L1440,0L720,0L0,0Z"></path></svg>
            <div ref={scrollToClientes} className='thirdBlock' >
            <Container>
                <h1 className='pageTitles2'>Nuestros Clientes</h1>
                <div className='paragraphBlock'>
                </div>
                <LogoSliderComponent/>  
            </Container>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#273036" fill-opacity="99.99" d="M0,96L720,128L1440,32L1440,320L720,320L0,320Z"></path></svg>
            <div ref={scrollToNuestrosProyectos} className='fourthBlock'>
            <Container>
                <h1 className='pageTitles'>Nuestros Proyectos</h1>
                <div className='paragraphBlock2'>
                <p className='paragraphs3'>La trayectoria laboral de ideas fuerza en proyectos y la calidad de nuestros trabajos nos permite
                    estar presentes durante años en Showroom, Retail y Ferreterías convirtiéndonos en un proveedor
                    de confianza , por la responsabilidad y compromiso en cada adjudicación.
                    Los tiempos de entrega de nuestros trabajos son reales , los materiales son de primera y entregamos
                    un servicio personalizado.
                </p>
                </div> 
                <div className='tabsCarousel'>
                <TabsComp/>
                </div>
                <WhatsappComp/>
            </Container>
            </div>
            <div className='footerNav'>
            <Container className='footerNavCont' >
                <p className='footerText'>CSC Muebles Exhibidores 2024 <CL className='flagy'/></p>
                <NavLink href='https://www.instagram.com/cscmueblesexhibidores/'><FaInstagram  size={20} /></NavLink>
                <NavLink href="mailto:csc@mueblesexhibidores.cl?body=Hola! Quisiera mas información." ><FiMail  size={20} /></NavLink>
            </Container>
            </div>
        </div>
    );
}


export default Main;
