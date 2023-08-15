import { Carousel } from "react-responsive-carousel";
import React, { useState, useEffect } from "react";

export default function RenderCarousel({ carouselImg, setBook }) {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

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
  let chunkSize = windowWidth < 992 ? 2 : 6;

  for (let i = 0; i < carouselImg.length; i += chunkSize) {
    let chunk = carouselImg.slice(i, i + chunkSize);

    temp.push(
      <div className="flex mt-2 mb-2" key={i}>
        {chunk.map((item) => (
          <div key={item.id}>
            <button
              className="btn w-16 h-8 bg-slate-600 rounded-xl text-center"
              onClick={() => handleAddBookClick(item.src, item.id)}
            >
              +
            </button>
            <img className="carousel__card" src={item.src} alt={`Book ${item.id}`} />
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
    <>
      <Carousel autoFocus={true} showThumbs={false} showStatus={false} useKeyboardArrows>
        {renderImgs(temp)}
      </Carousel>
    </>
  );
}
