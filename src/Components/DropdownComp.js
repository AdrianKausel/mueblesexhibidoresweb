import Dropdown from 'react-bootstrap/Dropdown';
import NavItem from 'react-bootstrap/NavItem';
import NavLink from 'react-bootstrap/NavLink';
import FotoCarousel from './Carousel';

function DropdownImplExample() {
    return (
        <Dropdown className='tabText' as={NavItem}>
        <Dropdown.Toggle as={NavLink}>Muebles pisos flotantes / Vanitorios</Dropdown.Toggle>
        <Dropdown.Menu>
            <Dropdown.Item><FotoCarousel/></Dropdown.Item>
        </Dropdown.Menu>
        <Dropdown.Menu>
            <Dropdown.Item><FotoCarousel/></Dropdown.Item>
        </Dropdown.Menu>
        </Dropdown>
    );
}

export default DropdownImplExample;