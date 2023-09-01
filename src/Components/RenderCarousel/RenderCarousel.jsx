import { Carousel } from "react-responsive-carousel";
import styles from "react-responsive-carousel/lib/styles/carousel.min.css";
import React, { useState, useEffect } from "react";

export default function RenderCarousel({ carouselImg, setBook }) {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const windowLimitSm = 992

    useEffect(() => {
        const handleResize = () => {
          setWindowWidth(window.innerWidth);
        };
        window.addEventListener("resize", handleResize);

        return () => {
          window.removeEventListener("resize", handleResize);
        };
    }, []);

    function handleAddBookClick(src, id) {
        setBook((book) => [...book, { src, id }]);
    }

  let temp = [];
  let chunkSize = windowWidth < windowLimitSm ? 2 : 5;

  for (let i = 0; i < carouselImg.length; i += chunkSize) {
    let chunk = carouselImg.slice(i, i + chunkSize);

    temp.push(
      <div className="flex mt-2 mb-0" key={i}>
        {chunk.map((item) => (
          <div key={item.id}>
            <button
              className="btn w-16 h-8 bg-slate-600 rounded-xl text-center mb-2"
              onClick={() => handleAddBookClick(item.src, item.id)}
            >
              +
            </button>
            <img
              className="carousel__card lg:pl-5 object-scale-down"
              src={item.src}
              alt={`Book ${item.id}`}
            />
          </div>
        ))}
      </div>
    );
  }

  function renderImgs(val) {
    // console.log(val);
    return val.map((item) => {
      return item;
    });
  }

  return (
    <div className="slider-container lg:justify-center lg:items-center">
      <Carousel
        showArrows={true}
        showStatus={false}
        useKeyboardArrows
        emulateTouch={true}
        showThumbs={false}
      >
        {renderImgs(temp)}
      </Carousel>
    </div>
  );
}
