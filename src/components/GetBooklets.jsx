import { useEffect, useState } from "react";
import axios from "axios";
import DraggablePictureTwo from "./DraggablePictureTwo";

export default function GetBooklets() {
  const [bookletData, setBookletData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios.get("https://pokeapijectbackend.onrender.com/api/booklet").then((res) => {
      setBookletData(res.data);
      setIsLoading(false);
      console.log(res.data);
    });
  }, []);

  const handleDelete = (e) =>{
    const data = {
      userName: userName,
    };
    axios.delete("https://pokeapijectbackend.onrender.com/api/booklet", data)
  }

  return (
    <>
      {bookletData.map((item) => (
        <div className="text-neutral-700">
        <div className="flex justify-between">
        {item.userName}'s party
        <button onClick={handleDelete}>delete</button>
        </div>
        <div className="card__book mt-2">
          <div className="card__slot">
            <DraggablePictureTwo src={item.cardOne} id={item.id}/>
          </div>
          <div className="card__slot">
            <DraggablePictureTwo src={item.cardTwo} id={item.id}/>
          </div>
          <div className="card__slot">
            <DraggablePictureTwo src={item.cardThree} id={item.id}/>
          </div>
          <div className="card__slot">
            <DraggablePictureTwo src={item.cardFour} id={item.id}/>
          </div>
          <div className="card__slot">
            <DraggablePictureTwo src={item.cardFive} id={item.id}/>
          </div>
          <div className="card__slot">
            <DraggablePictureTwo src={item.cardSix} id={item.id}/>
          </div>
        </div>
        </div>
      ))}
    </>
  );
}
