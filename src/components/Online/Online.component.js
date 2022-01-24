import React from "react";
import Slider from "react-slick";

import Poster from "../Poster/poster.component";

const Online = (props) => {
  const settings = {
    infinity: true,
    slidesToShow: 5,
    slidesToScroll: 2,
    autoplay: false,
    InitialSlide: 0
  };
  return (
      <>
      <div className="flex flex-col items-start gap-1 py-4">
        
      </div>
        <Slider {...settings} >
        {props.OnlineImages.map((image)=> (
          <Poster {...image} />
        ))}
        </Slider>
      </>
  );
};

export default Online;