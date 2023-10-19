import React from "react";
import DraggablePicture from "./DraggablePicture/DraggablePicture";
import { UilCheckCircle } from "@iconscout/react-unicons";

function BookletPage({ item }) {
  return (
    <div className="card__book card__book__width mt-2 max-w-[320px] lg:max-w-[510px] mx-auto">
      {[...Array(6)].map((_, index) => (
        <div className="card__slot" key={index}>
          {/* Grabs length of array and checks if index is less than total num of cards. If so it renders the card into that index. */}
          {item.cardData.length > index && (
            <>
              <div className="group relative">
                <DraggablePicture
                  src={item.cardData[index].pokemonCard}
                  id={item.cardData[index].id}
                />
                {item.cardData[index].verified === true ? (
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
  );
}

export default BookletPage;
