import React from "react";
import { useState, useRef } from "react";
import Axios from "axios";
import pokemon from "pokemontcgsdk";

pokemon.configure({ apiKey: "b2c47130-c144-4d25-8d96-c71708597019" });

const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 1,
        slidesToSlide: 1
      },
      tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 1,
        slidesToSlide: 1 // optional, default to 1.
      },
      mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
        slidesToSlide: 1 // optional, default to 1.
      }
};

export default function CardRender({ poke }) {
  const [card, setCard] = useState([]);

  function getCard() {
    pokemon.card.where({ q: `name:${poke}` }).then((result) => {
      setCard([...card, result.data]);
      console.log(card);
    });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Why do I love Pokemon so much?");
    getCard();
  };

  return (
    <div>
      <button
        onClick={handleSubmit}
        type="submit"
        className="p-3 bg-orange-300 rounded-md text-xs w-40 h-14 mr-4 "
      >
        get card
      </button>
        {card.length === 0 ? (
          <div></div>
        ) : (
          card[0].map((res) => (
            <img src={res.images.small} key={res.name} className="rounded-xl" />
          ))
        )}
    </div>
  );
}
