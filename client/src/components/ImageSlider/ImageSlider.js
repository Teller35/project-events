import React, { useEffect, useState } from "react";

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
    {
      image: "Block party",
      alt: "Block party",
    },
    {
      image: "Flaming Gorge",
      alt: "Flaming Gorge lake",
    },
    {
      image: "Performing Arts",
      alt: "Performing a play",
    },
    {
      image: "Festival",
      alt: "Renascence festival",
    },
  ]);

  const [current, setCurrent] = useState(0);
  const length = sliderData.length;

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrent((current) => (current === length - 1 ? 0 : current + 1));
    }, 2500);
    return () => clearInterval(intervalId);
  }, [length]);

  return (
    <section className="slider">
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
