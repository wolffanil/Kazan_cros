import { useEffect, useState } from "react";
import styled from "./slider.module.scss";
import { sliderItems } from "./sliderProducts";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Item from "./Item/Item";

function Coursel() {
  const [activeSlide, setActiveSlide] = useState(1);

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    beforeChange: (current, next) => {
      setActiveSlide(next + 1);
    },
  };

  return (
    <section id="slider" className="container">
      <div className={styled.slider__wrapper}>
        <Slider {...settings}>
          {sliderItems.map((item, key) => (
            <Item
              key={key}
              title={item.title}
              img={item.img}
              desc={item.desc}
            />
          ))}
        </Slider>
      </div>

      <div className={styled.slider__count}>0{activeSlide}</div>
    </section>
  );
}

export default Coursel;
