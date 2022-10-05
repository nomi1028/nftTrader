import Carousel from 'react-bootstrap/Carousel';
import { useRef } from "react";
import img2 from '../../assets/images/2.png'
import img3 from '../../assets/images/3.png'
import bg from '../../assets/images/bg.svg'
function Slider() {

  return (
    <Carousel  className='rounded-circle carousel_1' controls={false} indicators={false} fade interval={1500}>
      <Carousel.Item>
        <img
          className="d-block w-100 rounded-circle"
          src={img2}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 rounded-circle"
          src={img3}
          alt="Second slide"
        />
      </Carousel.Item>
      {/* <Carousel.Item>
        <img
          className="d-block w-100 rounded-circle"
          src={img2}
          alt="Third slide"
        />
        
      </Carousel.Item> */}
    </Carousel>
  );
}

export default Slider;