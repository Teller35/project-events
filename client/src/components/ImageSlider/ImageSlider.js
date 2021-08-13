import React, { useState } from "react";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";

const ImageSlider = () => {
  const [sliderData] = useState([
    {
      name: "Heart Concert",
      alt: "People putting up hearts at a concert",
    },
    {
      image: "Friends",
      alt: "Group of people in front of a lake",
    },
    {
      image: "Aerobics",
      alt: "Group of people working out",
    },
    {
      image: "Cars",
      alt: "Sports cars lined up at a car show",
    },
    {
      image: "Bike Race",
      alt: "Group of bikers",
    },
    {
      image: "Small Concert",
      alt: "Group of people at concert",
    },
    {
      image: "Party",
      alt: "Group of people at a party",
    },
    {
      image: "Basketball",
      alt: "Basketball game",
    },
  ]);

  const [current, setCurrent] = useState(0);
  const length = sliderData.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(sliderData) || sliderData.length <= 0) {
    return null;
  }

  return (
    <section className="slider">
      <FaArrowAltCircleLeft className="left-arrow" onClick={prevSlide} />
      <FaArrowAltCircleRight className="right-arrow" onClick={nextSlide} />
      {sliderData.map((slide, i) => {
        return (
          <div className={i === current ? "slide active" : "slide"} key={i}>
            {i === current && (
              <img
                src={require(`../../assets/small/carousel/${i}.jpg`).default}
                alt={slide.alt}
                className="sliderImg"
              />
            )}
          </div>
        );
      })}
    </section>
  );
};

export default ImageSlider;
