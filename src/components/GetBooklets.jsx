import { useEffect, useState } from "react";
import axios from "axios";
import DraggablePictureTwo from "./DraggablePictureTwo";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function GetBooklets({ bookletData }) {
  const [isDeleted, setIsDeleted] = useState(false);
  let temp = [];
  for (let i = 0; i < bookletData.length; i++) {
    let booklet = bookletData[i];
    temp.push(
      <div className="text-neutral-700">
        <div className="flex justify-between">
          {booklet.userName}'s party
          <button
            onClick={() =>
              axios.delete(
                `${import.meta.env.VITE_DEV_URL}/api/booklet/${booklet.id}`
              ).then((res) => {
                toast("Booklet deleted successfully!");
                console.log(temp);
                setIsDeleted(true);
                // temp.filter((item) => item.props.children[1].owner.pendingProps.bookletData)
                // bookletData.filter((item) => item.id !== bookletData.id);
              })
            }
          >
            Delete
          </button>
        </div>
        <div className="card__book mt-2">
          <div className="card__slot">
            <DraggablePictureTwo src={booklet.cardOne} id={booklet.id} />
          </div>
          <div className="card__slot">
            <DraggablePictureTwo src={booklet.cardTwo} id={booklet.id} />
          </div>
          <div className="card__slot">
            <DraggablePictureTwo src={booklet.cardThree} id={booklet.id} />
          </div>
          <div className="card__slot">
            <DraggablePictureTwo src={booklet.cardFour} id={booklet.id} />
          </div>
          <div className="card__slot">
            <DraggablePictureTwo src={booklet.cardFive} id={booklet.id} />
          </div>
          <div className="card__slot">
            <DraggablePictureTwo src={booklet.cardSix} id={booklet.id} />
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      {temp.map((item) => {
        // console.log(item);
        return item;
      })}
    </>
  );
}
