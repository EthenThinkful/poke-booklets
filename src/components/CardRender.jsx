import React from "react";
import { useState, useRef } from "react";
import pokemon from "pokemontcgsdk";
import DraggablePicture from "./DraggablePicture";
import CardBook from "./CardBook";

// const { REACT_APP_TCG_API } = process.env;

pokemon.configure({ apiKey: "b2c47130-c144-4d25-8d96-c71708597019" });

export default function CardRender({ poke }) {
  const [card, setCard] = useState([]);

  function getCard() {
    pokemon.card.where({ q: `name:${poke}` }).then((result) => {
      setCard([result.data]);
    });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    getCard();
  };

  const handleDelete = (e) => {
    e.preventDefault();
    setCard([]);
  }

  return (
    <div className="cardRender">
      <button
        onClick={handleSubmit}
        type="submit"
        className="p-3 bg-orange-300 rounded-md text-xs w-40 h-14 mr-4 mb-8"
      >
        get card
      </button>
      <button
        onClick={handleDelete}
        type="submit"
        className="p-3 bg-orange-300 rounded-md text-xs w-40 h-14 mr-4 mb-8"
      >
        clear
      </button>
      <div className="cardDisplay">
        {card.length === 0 ? (
          <div></div>
        ) : (
          card[0].map((res) => (
            <DraggablePicture src={res.images.small} key={res.id}/>
          ))
        )}
      </div>
    </div>
  );
}
