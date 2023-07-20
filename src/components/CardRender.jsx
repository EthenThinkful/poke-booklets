import React from "react";
import { useState, useRef, useEffect } from "react";
import pokemon from "pokemontcgsdk";
import DraggablePicture from "./DraggablePicture";
import pokeNames from "../assets/PokeJSON/pokeNames.json";
// const { REACT_APP_TCG_API } = process.env;

pokemon.configure({ apiKey: "b2c47130-c144-4d25-8d96-c71708597019" });

export default function CardRender() {
  const [poke, setPoke] = useState("");

  const pokeRef = useRef("");

  useEffect(() => {
    pokeRef.current = poke;
  }, [poke]);

  const [card, setCard] = useState([]);
  const [css, setCss] = useState(false);

  function getCard() {
    pokemon.card.where({ q: `name:${poke}` }).then((result) => {
      setCard([result.data]);
      setCss(!css);
    });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    getCard();
  };

  const handleDelete = (e) => {
    e.preventDefault();
    setCard([]);
    setCss(!css);
  }

  return (
    <div className="float-left">
      <div className="flex">
      <div>
          <form className="flex">
            <input
              className={css ? "p-3 text-xs rounded-md w-40 h-14 bg-stone-600 mr-4 mb-2": "p-3 text-xs rounded-md w-40 h-14 bg-stone-600 mr-4"}
              placeholder="search"
              type="text"
              value={poke}
              // onKeyDown={handleKeypress}
              onChange={(event) => {
                setPoke(event.target.value.toLocaleLowerCase());
              }}
            />
            {/* <button
              className="p-3 bg-orange-300 rounded-md text-xs w-40 h-14"
              type="submit"
              onClick={handleSubmit}
            >
              Add Pokemon!
            </button> */}
          </form>
        </div>
      <button
        onClick={handleSubmit}
        type="submit"
        className="p-3 bg-orange-300 rounded-md text-xs w-40 h-14 mr-4"
      >
        get card
      </button>
      <button
        onClick={handleDelete}
        type="submit"
        className="p-3 bg-orange-300 rounded-md text-xs w-40 h-14 mr-4"
      >
        clear
      </button>
      </div>
      <div className={pokeRef === "" ? "drop__down text-xs mb-2 text-zinc-700" : "drop__down text-xs mb-0 mt-4 text-zinc-700"}>
          {pokeNames
            .filter((item) => {
              const searchTerm = poke.toLocaleLowerCase();
              const fullName = item.toLocaleLowerCase();
              return (
                searchTerm &&
                fullName.startsWith(searchTerm) &&
                fullName !== searchTerm
              );
            })
            .slice(0, 6)
            .map((item) => (
              <div
                onClick={() => setPoke(item.toLocaleLowerCase())}
                key={item}
                className="cursor-pointer p-2"
              >
                {item}
              </div>
            ))}
        </div>
      <div className="card__display">
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
