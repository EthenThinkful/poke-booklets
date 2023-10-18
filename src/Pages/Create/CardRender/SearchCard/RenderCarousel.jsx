import { Carousel } from "react-responsive-carousel";
import styles from "react-responsive-carousel/lib/styles/carousel.min.css";
import React, { useState, useEffect } from "react";
import axios from "axios";

export default function RenderCarousel({ carouselImg, setBook, serverAddress, reload, setReload }) {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const windowLimitSm = 992;
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  let temp = [];
  let chunkSize = windowWidth < windowLimitSm ? 2 : 5;

  for (let i = 0; i < carouselImg.length; i += chunkSize) {
    let chunk = carouselImg.slice(i, i + chunkSize);

    temp.push(
      <div className="flex mb-0 here " key={i}>
        {chunk.map((item) => (
          <div className="flex flex-col justify-center items-center w-full" key={item.id}>
            <img
              className="carousel__card  object-scale-down "
              src={item.src}
              alt={`Card ${item.id}`}
            />
            <button
              className="btn m-2 w-16 h-8 bg-slate-600 rounded-xl  mb-2 flex items-center justify-center"
              onClick={() => {
                axios.post(`${serverAddress}/api/cards`, { "userDataId": localStorage.ID, "pokemonCard": item.src })
                  .then((res) => {
                    setReload(!reload);
                  });
              }}
            >
              +
            </button>
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

  const indicatorStyles = {
    background: "#fff",
    width: 8,
    height: 8,
    display: "inline-block",
    margin: "0 8px",
  };

  return (
    <div className="slider-container lg:justify-center lg:items-center font-light caret-transparent">
      <Carousel
        showArrows={true}
        showStatus={true}
        useKeyboardArrows
        emulateTouch={true}
        showThumbs={false}
        statusFormatter={(current, total) => (
          <span className="text-neutral-700 mb-6">
            Page: {current} / {total}
          </span>
        )}
        renderArrowPrev={(onClickHandler, hasPrev, label) =>
          hasPrev && (
            <button
              type="button"
              onClick={onClickHandler}
              title={label}
              className="absolute top-[calc(50%-15px)] cursor-pointer z-10 w-[30px] h-[30px] ml-[-12.5rem] mt-[-2.5rem] lg:ml-[-40rem] lg:mt-[-3rem]"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                id="angle-left-b"
              >
                <path
                  fill="#8F8F8F"
                  d="m8.5 12.8 5.7 5.6c.4.4 1 .4 1.4 0 .4-.4.4-1 0-1.4l-4.9-5 4.9-5c.4-.4.4-1 0-1.4-.2-.2-.4-.3-.7-.3-.3 0-.5.1-.7.3l-5.7 5.6c-.4.5-.4 1.1 0 1.6 0-.1 0-.1 0 0z"
                ></path>
              </svg>
            </button>
          )
        }
        renderArrowNext={(onClickHandler, hasNext, label) =>
          hasNext && (
            <button
              type="button"
              onClick={onClickHandler}
              title={label}
              className="absolute top-[calc(50%-15px)] cursor-pointer z-10 w-[30px] h-[30px] ml-[10.5rem] mt-[-2.5rem] lg:ml-[38rem] lg:mt-[-3rem]"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                id="angle-right-b"
              >
                <path
                  fill="#8F8F8F"
                  d="M15.54,11.29,9.88,5.64a1,1,0,0,0-1.42,0,1,1,0,0,0,0,1.41l4.95,5L8.46,17a1,1,0,0,0,0,1.41,1,1,0,0,0,.71.3,1,1,0,0,0,.71-.3l5.66-5.65A1,1,0,0,0,15.54,11.29Z"
                ></path>
              </svg>
            </button>
          )
        }
      >
        {renderImgs(temp)}
      </Carousel>
    </div>
  );
}
