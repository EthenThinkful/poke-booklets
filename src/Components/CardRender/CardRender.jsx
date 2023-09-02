import { useState, useRef, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import GetBooklets from "../GetBooklets/GetBooklets";
import SearchCard from "../SearchCard/SearchCard";
import CreateBooklet from "../CreateBooklet/CreateBooklet";
import UserForm from "../UserForm/UserForm";

const serverAddress = import.meta.env.VITE_PROD_URL
// const serverAddress = import.meta.env.VITE_DEV_URL;

export default function CardRender() {
  const [userName, setUserName] = useState("");
  const [book, setBook] = useState([]);
  const [card, setCard] = useState([]);
  const [poke, setPoke] = useState("");

  let newArray = new Array();

    if (card.length > 0)
        card[0].map((item, index) => {
        newArray.push({ src: item.images.small, id: index });
        });
  
  return (
    <>
      <div className="iphone__screen">
        <div className="float-left lg:float-none">
          <div className="text-neutral-700 mb-6">Poke Booklets!</div>
          <SearchCard setBook={setBook} book={book} setUserName={setUserName} userName={userName} toast={toast} newArray={newArray} setCard={setCard} poke={poke} setPoke={setPoke}/>
          <CreateBooklet setBook={setBook} book={book} setUserName={setUserName} userName={userName} toast={toast} newArray={newArray} setCard={setCard} poke={poke} setPoke={setPoke}/>
          {/* <UserForm setBook={setBook} book={book} setUserName={setUserName} userName={userName} toast={toast}/> */}
          <GetBooklets />
        </div>
      </div>
    </>
  );
}
