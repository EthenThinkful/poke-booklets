import React, { useState } from "react";
import DraggablePicture from "./DraggablePicture/DraggablePicture";
import { UilCheckCircle, UilAngleRight, UilAngleLeft } from "@iconscout/react-unicons";

function CardSlot({ item, startIndex, endIndex }) {
  return [...Array(endIndex - startIndex)].map((_, index) => {
    const dataIndex = index + startIndex;
    return (
      <div className="card__slot" key={index}>
        {item.cardData.length > dataIndex && (
          <div className="group relative">
            <DraggablePicture
              src={item.cardData[dataIndex].pokemonCard}
              id={item.cardData[dataIndex].id}
            />
            {item.cardData[dataIndex].verified === true && (
              <div className="bg-blue-500 absolute ml-[5rem] top-[7rem] lg:ml-36 lg:top-[12.5rem] lg:left-[-5px] rounded-xl transform scale-100 group-hover:scale-150 group-hover:translate-x-[1rem] lg:group-hover:translate-x-[2rem] group-hover:translate-y-6 lg:group-hover:translate-y-10 transition-transform duration-300 text-white">
                <UilCheckCircle />
              </div>
            )}
          </div>
        )}
      </div>
    );
  });
}

function BookletPage({ item, totalNumPages }) {
  const [isPage1Visible, setPage1Visible] = useState(true);

  const togglePage = () => {
    setPage1Visible(!isPage1Visible);
  };

  return (
    <div className="mx-auto">
      <div className="flex flex-row">
        <div className={`card__book card__book__width mt-2 max-w-[320px] lg:max-w-[510px] mx-auto ${isPage1Visible ? "" : "hidden"}`}>
          <CardSlot item={item} startIndex={0} endIndex={6} />
        </div>
        {isPage1Visible ? (
          <UilAngleRight className="mt-40" onClick={togglePage} />
        ) : null}
      </div>
      
        <div className="flex flex-row">
        {!isPage1Visible ? (
            <UilAngleLeft className="mt-40" onClick={togglePage} />
          ) : null}
          <div className={`card__book card__book__width mt-2 max-w-[320px] lg:max-w-[510px] mx-auto ${isPage1Visible ? "hidden" : ""}`}>
            <CardSlot item={item} startIndex={6} endIndex={12} />
          </div>
        </div>
    </div>
  );
}

export default BookletPage;













