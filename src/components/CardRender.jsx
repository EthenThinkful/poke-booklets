import { useState, useRef, useEffect } from "react";
import pokemon from "pokemontcgsdk";
import DraggablePicture from "./DraggablePicture";
import DraggablePictureTwo from "./DraggablePictureTwo";
import pokeNames from "../assets/PokeJSON/pokeNames.json";
import { Carousel } from "react-responsive-carousel";
import carouselPic from "../assets/PokePICS/PokeTrash.jpg";
import styles from "react-responsive-carousel/lib/styles/carousel.min.css";
import { useDrag, useDrop } from "react-dnd";
import { TransformComponent } from "react-zoom-pan-pinch";
import GetPokemon from "./GetPokemon";
import RenderCarousel from "./RenderCarousel";
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

  //booklet
  const [book, setBook] = useState([]);
  const bookRef = useRef([]);

  useEffect(() => {
    bookRef.current = book;
    // console.log(book);
  }, [book]);

  function handleRemoveItem(src) {
    setBook((current) => current.filter((img) => img !== src));
  }

  const [{ isOverTrash }, dropTrash] = useDrop(() => ({
    accept: "image",
    drop: (item) => handleRemoveItem(item),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  return (
    <div className="iphone__screen mt-6">
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
                onChange={(event) => {
                  setPoke(event.target.value.toLocaleLowerCase());
                }}
              />
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
          card[0].length > 0 ?
            <RenderCarousel carouselImg={card[0]} setBook={setBook} />
          : null
        )}
        <div className="card__book">
          <div className="card__slot">
            <DraggablePictureTwo src={book.length > 0 ? book[0] : null} />
          </div>
          <div className="card__slot">
            <DraggablePictureTwo src={book.length > 1 ? book[1] : null} />
          </div>
          <div className="card__slot">
            <DraggablePictureTwo src={book.length > 2 ? book[2] : null} />
          </div>
          <div className="card__slot">
            <DraggablePictureTwo src={book.length > 3 ? book[3] : null} />
          </div>
          <div className="card__slot">
            <DraggablePictureTwo src={book.length > 4 ? book[4] : null} />
          </div>
          <div className="card__slot">
            <DraggablePictureTwo src={book.length > 5 ? book[5] : null} />
          </div>
        </div>
        <div
          className="trash__can bg-slate-600 w-120 h-20 mb-6 rounded-lg flex text-center justify-center pt-8 text-xs lg:text-sm mt-2"
          ref={dropTrash}
        >
          drag & drop cards to delete
        </div>
        <div className="card__display"></div>
      </div>
    </div>
  );
}
