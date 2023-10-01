import React, { useEffect, useState, useRef } from "react";
import DraggablePictureTwo from "../DraggablePictureTwo/DraggablePictureTwo";
import { useDrag, useDrop } from "react-dnd";
import axios from "axios";
import WebcamCapture from "./WebcamCampture";
import { UilCheckCircle } from '@iconscout/react-unicons'

export default function CreateBooklet({
  setBook,
  book,
  setUserName,
  userName,
  toast,
  setCard,
  card,
  newArray,
  poke,
  setPoke,
  serverAddress,
  reload,
  setReload,
  cardInfo,
  setCardInfo,
}) {
  const [{ isOverTrash }, dropTrash] = useDrop(() => ({
    accept: "image",
    drop: (item) => handleRemoveItem(item),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  function handleRemoveItem(item) {
    console.log(item.id.current);
    axios
      .delete(`${serverAddress}/api/cards/${item.id.current}`)
      .then((res) => {
        setReload(!reload);
        console.log(res);
      });
  }

  useEffect(() => {
    axios.get(`${serverAddress}/api/cards/${localStorage.ID}`).then((res) => {
      const sortedData = res.data.sort((a, b) => a.id - b.id);
      console.log(sortedData);
      setCardInfo(sortedData);
    });
  }, [reload]);

  return (
    <>
      <div className="lg:flex lg:justify-center lg:items-center lg:mb-6 max-w-[340px] mx-auto card__book__width lg:w-full lg:max-w-full">
        <div className="card__book mt-2 w-full max-w-full mx-auto lg:max-w-[520px]">
          {[...Array(6)].map((_, index) => (
            <div className="card__slot" key={index}>
              {cardInfo.length > index && (
                <>
                <div className="group relative">
                  <DraggablePictureTwo
                    src={cardInfo[index].pokemonCard}
                    id={cardInfo[index].id}
                  />
                  {cardInfo[index].verified === true ? (
                    <div className="bg-blue-500 absolute ml-[5rem] top-[7rem] lg:ml-36 lg:top-[12.5rem] lg:left-[-5px] rounded-xl transform scale-100 group-hover:scale-150 group-hover:translate-x-[1rem] lg:group-hover:translate-x-[2rem] group-hover:translate-y-6 lg:group-hover:translate-y-10 transition-transform duration-300 text-white">
                      <UilCheckCircle />
                    </div>
                  ) : null}
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
        <div
          className="trash__can bg-slate-600 w-[90px] h-[125px] sm:w-[150px] sm:h-[209px] mx-auto mb-4 m-0 rounded-lg flex text-center justify-center p-10 pt-6 pb-6 text-xs lg:text-sm mt-2 lg:p-12 lg:pt-10 lg:m-10 caret-transparent"
          ref={dropTrash}
        >
          drag & drop cards here to delete
        </div>
        <WebcamCapture
          serverAddress={serverAddress}
          reload={reload}
          setReload={setReload}
        />
      </div>
      <div className="flex flex-row flex-wrap">
        {cardInfo.map((card, index) => (
          card.verified &&
          <div className="w-1/3 p-2" key={index}>
              <img src={card.luhthang} alt={`Image ${index}`} />
          </div>
        ))}
      </div>
    </>
  );
}
