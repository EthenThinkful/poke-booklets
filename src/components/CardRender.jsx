import { useState, useRef, useEffect } from "react";
import pokemon from "pokemontcgsdk";
import DraggablePicture from "./DraggablePicture";
import pokeNames from "../assets/PokeJSON/pokeNames.json";
import { Carousel } from "react-responsive-carousel";
import carouselPic from "../assets/PokePICS/PokeTrash.jpg";
import styles from "react-responsive-carousel/lib/styles/carousel.min.css";
import { useDrag } from "react-dnd";
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
  };

  return (
    <div className="float-left">
      <div className="flex">
        <div>
          <form className="flex">
            <input
              className={
                css
                  ? "p-3 text-xs rounded-md w-40 h-14 bg-stone-600 mr-4 mb-2"
                  : "p-3 text-xs rounded-md w-40 h-14 bg-stone-600 mr-4"
              }
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
      <div
        className={
          pokeRef === ""
            ? "drop__down text-xs mb-2 text-zinc-700"
            : "drop__down text-xs mb-0 mt-4 text-zinc-700"
        }
      >
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
      {card.length === 0 ? (
        <div></div>
      ) : (
          <Carousel
              autoFocus={true}
              showThumbs={false}
              showStatus={false}
              useKeyboardArrows
            > 
              <>
              <div className="flex mt-2 mb-2">
            <DraggablePicture src={card[0][0].images.small} key={card[0][0].id}/>
            <DraggablePicture src={card[0][1].images.small} key={card[0][1].id} />
            <DraggablePicture src={card[0][2].images.small} key={card[0][2].id} />
            </div>
            </>
            <>
              <div className="flex mt-2 mb-2 ">
            <DraggablePicture src={card[0][3].images.small} key={card[0][3].id} />
            <DraggablePicture src={card[0][4].images.small} key={card[0][4].id} />
            <DraggablePicture src={card[0][5].images.small} key={card[0][5].id} />
            </div>
            </>
            <>
              <div className="flex mt-2 mb-2 ">
            <DraggablePicture src={card[0][6].images.small} key={card[0][6].id} />
            <DraggablePicture src={card[0][7].images.small} key={card[0][7].id} />
            <DraggablePicture src={card[0][8].images.small} key={card[0][8].id} />
            </div>
            </>
            {/* {card[0].map((res) => (
              <>
              <div className="flex mt-2 card">
            <DraggablePicture src={res.images.small} key={res.id} />
            </div>
            </>))}</Carousel> */}</Carousel>
      )}

      <div className="card__display">
        {/* {card.length === 0 ? (
          <div></div>
        ) : (
          card[0].map((res) => (
            <DraggablePicture src={res.images.small} key={res.id} />
          ))
        )} */}
      </div>
    </div>
  );
}
