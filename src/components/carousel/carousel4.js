import Carousel from "react-bootstrap/Carousel";
import { useRef } from "react";
import img1 from "../../assets/images/4.png";

import bg from "../../assets/images/bg.svg";
function Slider4() {
  return (
    <Carousel
      className="rounded-circle carousel_4"
      controls={true}
      indicators={false}
      fade
      // interval={1500}
    >
      {/* <Carousel.Item>
        <img
          className="d-block w-100 rounded-circle"
          src={bg}
          alt="First slide"
        />
      </Carousel.Item> */}

      <Carousel.Item>
        <img
          className="d-block w-100 rounded-circle"
          src={img1}
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

export default Slider4;
