import { useState, useRef, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SearchCard from "../SearchCard/SearchCard";
import CreateBooklet from "../CreateBooklet/CreateBooklet";

// const serverAddress = import.meta.env.VITE_PROD_URL
const serverAddress = import.meta.env.VITE_DEV_URL;
// const serverAddress = import.meta.env.VITE_DEV_PROD_URL;

export default function CardRender() {
  const [userName, setUserName] = useState("");
  const [book, setBook] = useState([]);
  const [card, setCard] = useState([]);
  const [poke, setPoke] = useState("");
//cardInfo = cardData
const [cardInfo, setCardInfo] = useState([]);

const [reload, setReload] = useState(false);
  // useEffect(() => {
  //   console.log("THE INFO HAS PERSISTED OMG: ", localStorage.ID)
  // })

  // contains cards from get request
  let newArray = new Array();
    if (card.length > 0)
        card[0].map((item, index) => {
        newArray.push({ src: item.images.small, id: index });
        });
  
  return (
    <>
      <div className="iphone__screen">
        <div className="">
          <div className="flex justify-around text-center mb-4">
          <div className="text-neutral-700 text-sm p-2 lg:text-md caret-transparent">Create Booklet!</div>
          {/* <button className="bg-orange-300 rounded-xl p-2 text-xs caret-transparent">Save</button> */}
          </div>
          <SearchCard serverAddress={serverAddress} setBook={setBook} book={book} setUserName={setUserName} userName={userName} toast={toast} newArray={newArray} setCard={setCard} poke={poke} setPoke={setPoke} reload={reload} setReload={setReload}/>
          <CreateBooklet setBook={setBook} book={book} setUserName={setUserName} userName={userName} toast={toast} newArray={newArray} setCard={setCard} poke={poke} setPoke={setPoke} serverAddress={serverAddress} reload={reload} setReload={setReload} cardInfo={cardInfo} setCardInfo={setCardInfo}/>
        </div>
      </div>
    </>
  );
}
