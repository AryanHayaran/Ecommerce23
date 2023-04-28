
import React from 'react';
import {
  MDBCarousel,
  MDBCarouselItem,
} from 'mdb-react-ui-kit';
import Image1 from "./Image1.png"
import Image2 from "./Image2.png"
import Image3 from "./Image3.png";
const Carasoul=()=> {
  return (
    <div>
      <MDBCarousel showControls showIndicators dark>
        <MDBCarouselItem
          className="w-100 lg:h-[300px] md:h-[250px] sm:h-[200px] h-[200px] d-block d-block"
          itemId={1}
          src={Image1}
          alt="..."
        />
        <MDBCarouselItem
          className="w-100 lg:h-[300px] md:h-[250px] opacity-95 sm:h-[200px] h-[200px] d-block d-block"
          itemId={2}
          src={Image2}
          alt="..."
        />
        <MDBCarouselItem
          className="w-100 lg:h-[300px] md:h-[250px] sm:h-[200px] h-[200px] d-block d-block"
          itemId={3}
          src={Image3}
          alt="..."
        />
      </MDBCarousel>
    </div>
  );
}

export default Carasoul


// import React, { useState } from "react";
// import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
// import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
// import Image1 from "./Image1.png"
// import Image2 from "./Image2.png"
// import Image3 from "./Image3.png";
// import "./Carasoul.css"
// const   Carasoul=()=> {
//   const [currentSlide, setCurrentSlide] = useState(1)

//   const handleBack = () => {
//     setCurrentSlide(currentSlide === 1 ? 3 : currentSlide - 1);
//   };
//   const handleFor = () => {
//     setCurrentSlide(currentSlide === 3 ? 1 : currentSlide + 1);
//   };
//   console.log(currentSlide)
//   return (
//     <div>
//       <div
//         // style={{ transform: `translateX(-${currentSlide*100}vw)` }}
//         className=" pt-[80px] h-[300px]
//          bg-[#f3f3f3] flex relative"
//       >
//         <div className="CONTAINER">
//           <img
//             src={
//               currentSlide === 1 ? Image1 : currentSlide === 2 ? Image2 : Image3
//             }
//             className=" h-[300px] w-[100vw] relative"
//           />
//         </div>
//         {/* <div>
//           <img src={Image2} className="h-[300px] w-[100vw] relative" />
//         </div>
//         <div>
//           <img src={Image3} className="h-[300px] w-[100vw] relative" />
//         </div> */}
//       </div>
//       <div className="flex absolute z-[10000] mt-[100px]">
//         <div className="cursor-pointer " onClick={handleBack}>
//           <ArrowBackIosNewIcon />
//         </div>
//         <div className="cursor-pointer" onClick={handleFor}>
//           <ArrowForwardIosIcon />
//         </div>
//       </div>
//     </div>
//   );
// }


// export default Carasoul