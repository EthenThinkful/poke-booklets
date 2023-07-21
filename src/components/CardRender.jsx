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
      console.log(card[0][0].images.small);
      console.log(card[0].slice(0, 3).length);
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
  const [slot1, setSlot1] = useState([]);
  const [slot2, setSlot2] = useState([]);
  const [slot3, setSlot3] = useState([]);
  const [slot4, setSlot4] = useState([]);
  const [slot5, setSlot5] = useState([]);
  const [slot6, setSlot6] = useState([]);

  const [{ isOver }, drop] = useDrop(() => ({
    accept: "image",
    drop: (item) => addCardToSlot1(item.src),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  const addCardToSlot1 = (src) => {
    const picture = src;
    setSlot1([...slot1, picture]);
  };

  const slotOne = useRef("");

  useEffect(() => {
    slotOne.current = slot1;
  }, [slot1]);

  const [{ isOver2 }, drop2] = useDrop(() => ({
    accept: "image",
    drop: (item) => addCardToSlot2(item.src),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  const addCardToSlot2 = (src) => {
    const picture = src;
    setSlot2([...slot2, picture]);
  };

  const slotTwo = useRef("");

  useEffect(() => {
    slotTwo.current = slot2;
  }, [slot2]);

  const [{ isOver3 }, drop3] = useDrop(() => ({
    accept: "image",
    drop: (item) => addCardToSlot3(item.src),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  const addCardToSlot3 = (src) => {
    const picture = src;
    setSlot3([...slot3, picture]);
  };

  const slotThree = useRef("");

  useEffect(() => {
    slotThree.current = slot3;
  }, [slot3]);

  const [{ isOver4 }, drop4] = useDrop(() => ({
    accept: "image",
    drop: (item) => addCardToSlot4(item.src),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  const addCardToSlot4 = (src) => {
    const picture = src;
    setSlot4([...slot4, picture]);
  };

  const slotFour = useRef("");

  useEffect(() => {
    slotFour.current = slot4;
  }, [slot4]);

  const [{ isOver5 }, drop5] = useDrop(() => ({
    accept: "image",
    drop: (item) => addCardToSlot5(item.src),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  const addCardToSlot5 = (src) => {
    const picture = src;
    setSlot5([...slot5, picture]);
  };

  const slotFive = useRef("");

  useEffect(() => {
    slotFive.current = slot5;
  }, [slot5]);

  const [{ isOver6 }, drop6] = useDrop(() => ({
    accept: "image",
    drop: (item) => addCardToSlot6(item.src),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  const addCardToSlot6 = (src) => {
    const picture = src;
    setSlot6([...slot6, picture]);
  };

  const slotSix = useRef("");

  useEffect(() => {
    slotSix.current = slot6;
  }, [slot6]);

  const [{ isOverTrash }, dropTrash] = useDrop(() => ({
    accept: "image",
    drop: (item) => trashCan(item.src),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  function trashCan(src) {
    slotOne.current[0] === src[0] ? setSlot1([]) : null;
    slotTwo.current[0] === src[0] ? setSlot2([]) : null;
    slotThree.current[0] === src[0] ? setSlot3([]) : null;
    slotFour.current[0] === src[0] ? setSlot4([]) : null;
    slotFive.current[0] === src[0] ? setSlot5([]) : null;
    slotSix.current[0] === src[0] ? setSlot6([]) : null;
  }

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
        <Carousel
          autoFocus={true}
          showThumbs={false}
          showStatus={false}
          useKeyboardArrows
        >
          <>
            <div className="flex mt-2 mb-2">
            {card[0].slice(0, 3).length < 1 ? null : card[0].slice(0, 3).map((item) => (
              <img
              className="carousel__card"
                src={item.images.small}
                key={item.id}
              />
              ))}
            </div>
          </>
          <>
            <div className="flex mt-2 mb-2">
            {card[0].slice(3, 6).length < 1 ? null : card[0].slice(3, 6).map((item) => (
              <img
              className="carousel__card"
                src={item.images.small}
                key={item.id}
              />
              ))}
            </div>
          </>
          <>
            <div className="flex mt-2 mb-2">
            {card[0].slice(6, 9).length < 1 ? null : card[0].slice(6, 9).map((item) => (
              <img
              className="carousel__card"
                src={item.images.small}
                key={item.id}
              />
              ))}
            </div>
          </>
          <>
            <div className="flex mt-2 mb-2">
            {card[0].slice(9, 12).length < 1 ? null : card[0].slice(9, 12).map((item) => (
              <img
              className="carousel__card"
                src={item.images.small}
                key={item.id}
              />
              ))}
            </div>
          </>
          <>
            <div className="flex mt-2 mb-2">
            {card[0].slice(12, 15).length < 1 ? null : card[0].slice(12, 15).map((item) => (
              <img
              className="carousel__card"
                src={item.images.small}
                key={item.id}
              />
              ))}
            </div>
          </>
          <>
            <div className="flex mt-2 mb-2">
            {card[0].slice(15, 18).length < 1 ? null : card[0].slice(15, 18).map((item) => (
              <img
              className="carousel__card"
                src={item.images.small}
                key={item.id}
              />
              ))}
            </div>
          </>
          <>
            <div className="flex mt-2 mb-2">
            {card[0].slice(18, 21).length < 1 ? null : card[0].slice(18, 21).map((item) => (
              <img
              className="carousel__card"
                src={item.images.small}
                key={item.id}
              />
              ))}
            </div>
          </>
          <>
            <div className="flex mt-2 mb-2">
            {card[0].slice(21, 24).length < 1 ? null : card[0].slice(21, 24).map((item) => (
              <img
              className="carousel__card"
                src={item.images.small}
                key={item.id}
              />
              ))}
            </div>
          </>
          <>
            <div className="flex mt-2 mb-2">
            {card[0].slice(24, 27).length < 1 ? null : card[0].slice(24, 27).map((item) => (
              <img
              className="carousel__card"
                src={item.images.small}
                key={item.id}
              />
              ))}
            </div>
          </>
          <>
            <div className="flex mt-2 mb-2">
            {card[0].slice(27, 31).length < 1 ? null : card[0].slice(27, 31).map((item) => (
              <img
              className="carousel__card"
                src={item.images.small}
                key={item.id}
              />
              ))}
            </div>
          </>
          <>
            <div className="flex mt-2 mb-2">
            {card[0].slice(31, 34).length < 1 ? null : card[0].slice(31, 34).map((item) => (
              <img
              className="carousel__card"
                src={item.images.small}
                key={item.id}
              />
              ))}
            </div>
          </>
            {/* <div className="flex mt-2 mb-2">
              <img
              className="carousel__card"
                src={card[0][0].images.small}
                key={card[0][0].id}
              />
              <img
              className="carousel__card"
                src={card[0][1].images.small}
                key={card[0][1].id}
              />
              <img
              className="carousel__card"
                src={card[0][2].images.small}
                key={card[0][2].id}
              />
            </div>
          </>
          <>
            <div className="flex mt-2 mb-2 ">
              <img
              className="carousel__card"
                src={card[0][3].images.small}
                key={card[0][3].id}
              />
              <img
              className="carousel__card"
                src={card[0][4].images.small}
                key={card[0][4].id}
              />
              <img
              className="carousel__card"
                src={card[0][5].images.small}
                key={card[0][5].id}
              />
            </div>
          </>
          <>
            <div className="flex mt-2 mb-2 ">
              <img
              className="carousel__card"
                src={card[0][6].images.small}
                key={card[0][6].id}
              />
              <img
              className="carousel__card"
                src={card[0][7].images.small}
                key={card[0][7].id}
              />
              <img
                className="carousel__card"
                src={card[0][8].images.small}
                key={card[0][8].id}
              />
            </div>
          </> */}
        </Carousel>
      )}
      <div className="card__book">
        <div className="card__slot" ref={drop}>
          <DraggablePictureTwo src={slot1} key={Math.random()} />
        </div>
        <div className="card__slot" ref={drop2}>
          <DraggablePictureTwo src={slot2} key={Math.random()} />
        </div>
        <div className="card__slot" ref={drop3}>
          <DraggablePictureTwo src={slot3} key={Math.random()} />
        </div>
        <div className="card__slot" ref={drop4}>
          <DraggablePictureTwo src={slot4} key={Math.random()} />
        </div>
        <div className="card__slot" ref={drop5}>
          <DraggablePictureTwo src={slot5} key={Math.random()} />
        </div>
        <div className="card__slot" ref={drop6}>
          <DraggablePictureTwo src={slot6} key={Math.random()} />
        </div>
      </div>
      <div
        className="trash__can bg-slate-600 w-120 h-20 mb-6 rounded-lg flex text-center justify-center pt-8 text-xs lg:text-sm mt-2"
        ref={dropTrash}
      >
        drag & drop cards to delete
      </div>
      <div className="card__display">
      </div>
    </div>
    </div>
  );
}
