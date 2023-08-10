import { useState, useRef, useEffect } from "react";
import pokemon from "pokemontcgsdk";
import DraggablePictureTwo from "./DraggablePictureTwo";
import pokeNames from "../assets/PokeJSON/pokeNames.json";
import { Carousel } from "react-responsive-carousel";
import styles from "react-responsive-carousel/lib/styles/carousel.min.css";
import { useDrag, useDrop } from "react-dnd";
import RenderCarousel from "./RenderCarousel";
import axios from "axios";
import GetBooklets from "./GetBooklets";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// toast not working ^

pokemon.configure({ apiKey: import.meta.env.VITE_TCG_API });

export default function CardRender() {
  const [poke, setPoke] = useState("");
  const [card, setCard] = useState([]);
  const [css, setCss] = useState(false);
  //post request states
  const [userName, setUserName] = useState("");

  const [bookletData, setBookletData] = useState([]);

  useEffect(() => {
    axios.get(`${import.meta.env.VITE_PROD_URL}/api/booklet`).then((res) => {
      setBookletData(res.data);
      // console.log(res.data);
    });
  }, [bookletData]);

  let newArray = new Array();

  if (card.length > 0)
    card[0].map((item, index) => {
      newArray.push({ src: item.images.small, id: index });
    });

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

  //POST request for a booklet to api
  const handleBooklet = (e) => {
    const data = {
      userName: userName,
      cardOne: book.length > 0 ? book[0].src : null,
      cardTwo: book.length > 1 ? book[1].src : null,
      cardThree: book.length > 2 ? book[2].src : null,
      cardFour: book.length > 3 ? book[3].src : null,
      cardFive: book.length > 4 ? book[4].src : null,
      cardSix: book.length > 5 ? book[5].src : null,
    };
    axios
      .post(`${import.meta.env.VITE_PROD_URL}/api/booklet`, data)
      .then((res) => {
        toast("Booklet added successfully!");
        setBook([]);
        setUserName("");
      });
  };

  const [book, setBook] = useState([]);
  const bookRef = useRef([]);

  useEffect(() => {
    bookRef.current = book;
    // console.log(book);
  }, [book]);

  function handleRemoveItem(item) {
    // console.log(item.id.current);
    setBook((current) => current.filter((x) => x.id !== item.id.current));
  }

  const [{ isOverTrash }, dropTrash] = useDrop(() => ({
    accept: "image",
    drop: (item) => handleRemoveItem(item),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  return (
    <div className="iphone__screen">
      <div className="float-left">
        <div className="text-neutral-700 mb-6">Poke Party</div>
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
        <div className="drop__down text-xs mb-2 mt-3 text-zinc-700">
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
        <RenderCarousel carouselImg={newArray} setBook={setBook} />
        <div className="card__book">
          <div className="card__slot">
          {book.length > 0 ?
            <DraggablePictureTwo
              src={book[0].src}
              id={book[0].id}
            />: null}
          </div>
          <div className="card__slot">
          {book.length > 1 ?
            <DraggablePictureTwo
              src={book[1].src}
              id={book[1].id}
            />: null}
          </div>
          <div className="card__slot">
          {book.length > 2 ?
            <DraggablePictureTwo
              src={book[2].src}
              id={book[2].id}
            />:null}
          </div>
          <div className="card__slot">
          {book.length > 3 ?
            <DraggablePictureTwo
              src={book[3].src}
              id={book[3].id}
            />:null}
          </div>
          <div className="card__slot">
          {book.length > 4 ?
            <DraggablePictureTwo
              src={book[4].src}
              id={book[4].id}
            />:null}
          </div>
          <div className="card__slot">
          {book.length > 5 ?
            <DraggablePictureTwo
              src={book[5].src}
              id={book[5].id}
            />:null}
          </div>
        </div>
        <div
          className="trash__can bg-slate-600 w-120 h-20 mb-4 rounded-lg flex text-center justify-center pt-6 text-xs lg:text-sm mt-2"
          ref={dropTrash}
        >
          drag & drop cards here to delete
        </div>
        <div className="flex mb-8">
          <form className="flex">
            <input
              className={
                css
                  ? "p-3 text-xs rounded-md w-40 h-14 bg-stone-600 mr-4 mb-2"
                  : "p-3 text-xs rounded-md w-40 h-14 bg-stone-600 mr-4"
              }
              type="text"
              name="userName"
              placeholder="your name"
              onChange={(e) => setUserName(e.target.value)}
              align="left"
              value={userName}
            />
          </form>
          <button
            onClick={handleBooklet}
            type="submit"
            className="p-3 bg-orange-300 rounded-md text-xs w-40 h-14 mr-4"
          >
            submit booklet
          </button>
        </div>
        <GetBooklets bookletData={bookletData} />
      </div>
    </div>
  );
}
