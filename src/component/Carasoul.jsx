
import React from 'react';
import {
  MDBCarousel,
  MDBCarouselItem,
} from 'mdb-react-ui-kit';
import Image2 from "./Image1.png"
import Image1 from "./Image2.png"
import Image3 from "./Image3.png";
import "./Carasoul.css"
const Carasoul=()=> {
  return (
    <div>
      <MDBCarousel showControls showIndicators dark>
        <MDBCarouselItem
          className="w-full lg:h-[220px] md:h-[180px] sm:h-[200px] h-[200px] d-block d-block CARSOREL"
          itemId={1}
          src={Image1}
          alt="..."
        />
        <MDBCarouselItem
          className="w-full lg:h-[220px] md:h-[180px] sm:h-[200px] h-[200px] d-block d-block CARSOREL "
          itemId={2}
          src={Image2}
          alt="..."
        />
        <MDBCarouselItem
          className="w-full lg:h-[220px] md:h-[180px] sm:h-[200px] h-[200px] d-block d-block CARSOREL"
          itemId={3}
          src={Image3}
          alt="..."
        />
      </MDBCarousel>
    </div>
  );
}

export default Carasoul;