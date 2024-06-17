import Slider from 'react-infinite-logo-slider'
import foto1 from '../Imgs/logos/1.png'
import foto2 from '../Imgs/logos/2.png'
import foto3 from '../Imgs/logos/3.png'
import foto4 from '../Imgs/logos/4.png'
import foto5 from '../Imgs/logos/5.jpg'
import foto6 from '../Imgs/logos/6.png'
import foto7 from '../Imgs/logos/7.png'
import foto8 from '../Imgs/logos/8.png'
import foto9 from '../Imgs/logos/9.png'
import foto10 from '../Imgs/logos/10.png'
import foto11 from '../Imgs/logos/11.png'
import foto12 from '../Imgs/logos/12.png'
import foto13 from '../Imgs/logos/13.png'
import foto14 from '../Imgs/logos/14.png'
import foto15 from '../Imgs/logos/15.png'
import foto16 from '../Imgs/logos/16.png'
import foto17 from '../Imgs/logos/17.png'



const LogoSliderComponent = () => {
    
    return (
        <Slider
            width="150px"
            duration={40}
            pauseOnHover={true}
            blurBorders={false}
            blurBoderColor={'#fff'}
        >
            <Slider.Slide>
                <img src={foto1} alt="logo1" className='loguito' />
            </Slider.Slide>
            <Slider.Slide>
                <img src={foto2 } alt="logo2" className='loguito' />
            </Slider.Slide> 
            <Slider.Slide>
                <img src={foto3} alt="logo3" className='loguito' />
            </Slider.Slide> 
            <Slider.Slide>
                <img src={foto4} alt="logo4" className='loguito' />
            </Slider.Slide> 
            <Slider.Slide>
                <img src={foto6} alt="logo6" className='loguito' />
            </Slider.Slide> 
            <Slider.Slide>
                <img src={foto7} alt="logo7" className='loguito' />
            </Slider.Slide> 
            <Slider.Slide>
                <img src={foto8} alt="logo8" className='loguito' />
            </Slider.Slide> 
            <Slider.Slide>
                <img src={foto9} alt="logo9" className='loguito' />
            </Slider.Slide> 
            <Slider.Slide>
                <img src={foto10} alt="logo10" className='loguito' />
            </Slider.Slide> 
            <Slider.Slide>
                <img src={foto11} alt="logo11" className='loguito' />
            </Slider.Slide> 
            <Slider.Slide>
                <img src={foto12} alt="logo12" className='loguito' />
            </Slider.Slide> 
            <Slider.Slide>
                <img src={foto13} alt="logo13" className='loguito' />
            </Slider.Slide> 
            <Slider.Slide>
                <img src={foto14} alt="logo14" className='loguito' />
            </Slider.Slide> 
            <Slider.Slide>
                <img src={foto15} alt="logo15" className='loguito' />
            </Slider.Slide> 
            <Slider.Slide>
                <img src={foto16} alt="logo16" className='loguito' />
            </Slider.Slide> 
            <Slider.Slide>
                <img src={foto17} alt="logo17" className='loguito' />
            </Slider.Slide> 
        </Slider>
    )
}              
export default LogoSliderComponent