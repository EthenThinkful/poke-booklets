import React, { useState, useEffect } from "react";
import DraggablePicture from "./DraggablePicture/DraggablePicture";
import { UilCheckCircle, UilAngleRight, UilAngleLeft } from "@iconscout/react-unicons";
import { Carousel } from "react-responsive-carousel";
import styles from "react-responsive-carousel/lib/styles/carousel.min.css";
import axios from "axios";
import './BookletCarousel.css';

function BookletCarousel({totalNumPages, item}) {

    let temp = [];
const itemsPerPage = 6;
const cardData = item.cardData;

for (let i = 0; i < cardData.length; i += itemsPerPage) {
  let chunk = cardData.slice(i, i + itemsPerPage);

  // Pad the chunk with empty slots if needed
  while (chunk.length < itemsPerPage) {
    chunk.push(null); // You can use any placeholder value for empty slots
  }

  console.log(chunk);
  temp.push(
    <div className="card__book card__book__width mt-2 max-w-[340px] lg:max-w-[510px] mx-auto px-2" key={i}>
      {chunk.map((item, index) => (
        <div className="card__slot" key={index}>
          {item && (
            <div className="group relative">
              <img src={item.pokemonCard} id={item.id} alt="card" className="card rounded-md"/>
              {item.verified === true && (
                <div className="bg-blue-500 absolute ml-[5rem] top-[7rem] lg:ml-36 lg:top-[12.5rem] lg:left-[-5px] rounded-xl transform scale-100 group-hover:scale-150 group-hover:translate-x-[1rem] lg:group-hover:translate-x-[2rem] group-hover:translate-y-6 lg:group-hover:translate-y-10 transition-transform duration-300 text-white">
                  <UilCheckCircle />
                </div>
              )}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

        console.log(temp);

        function renderImgs(val) {
            // console.log(val);
            return val.map((item) => {
              return item;
            });
          }
        
      



  return (
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
  )
}

export default BookletCarousel