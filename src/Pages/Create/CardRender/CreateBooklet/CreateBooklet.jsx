import React, { useEffect, useState, useRef } from "react";
import DraggablePictureTwo from "../../../Home/GetBooklets/DraggablePicture/DraggablePicture";
import { useDrag, useDrop } from "react-dnd";
import axios from "axios";
import WebcamCapture from "./WebcamCampture";
import { UilCheckCircle } from "@iconscout/react-unicons";
import BookletCarousel from "../../../Home/GetBooklets/BookletCarousel";

export default function CreateBooklet({
  setBook,
  book,
  setUserName,
  userName,
  toast,
  setCard,
  card,
  newArray,
  poke,
  setPoke,
  serverAddress,
  reload,
  setReload,
  cardInfo,
  setCardInfo,
}) {
  function handleRemoveItem(itemId) {
    // console.log(item.id.current);
    axios
      .delete(`${serverAddress}/api/cards/${itemId}`)
      .then((res) => {
        setReload(!reload);
        // console.log(res);
      });
  }

  useEffect(() => {
    axios.get(`${serverAddress}/api/cards/${localStorage.ID}`).then((res) => {
      const sortedData = res.data.sort((a, b) => a.id - b.id);
      // console.log(sortedData);
      setCardInfo(sortedData);
    });
  }, [reload]);

  // method to delete a card from your booklet (changing delete functionality from trash can to this)
  const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);
  const [deleteCard, setDeleteCard] = useState(null);
  
  function handleDeleteClick (itemId) {
    setShowDeleteConfirmation(true);
    setDeleteCard(itemId);
  };

  const handleConfirmDelete = () => {
    handleRemoveItem(deleteCard);
    setShowDeleteConfirmation(false);
  };

  const handleCancelDelete = () => {
    setShowDeleteConfirmation(false);
    console.log("cancel delete");
  };

  console.log(showDeleteConfirmation)
  // end method to delete a card from your booklet (changing delete functionality from trash can to this)

  // onClick button to show react webcam 
  const [showWebcam, setShowWebcam] = useState(false);


  // end onClick button to show react webcam 

  return (
    <>
      <div className="lg:flex lg:justify-center lg:items-center lg:mb-6 max-w-[340px] mx-auto card__book__width lg:w-full lg:max-w-full lg:mx-4">
        <BookletCarousel item={cardInfo} showDeleteConfirmation={showDeleteConfirmation} setShowDeleteConfirmation={setShowDeleteConfirmation}
        handleDeleteClick={handleDeleteClick} handleConfirmDelete={handleConfirmDelete} handleCancelDelete={handleCancelDelete}/>
        {showDeleteConfirmation && (
        <div className="w-100 h-100 bg-slate-700 animate-pulse">
          <p>Delete card?</p>
          <button onClick={handleConfirmDelete}>Yes</button>
          <button onClick={handleCancelDelete}>No</button>
        </div>
      )}
      <button className="w-46 text-xs bg-orange-300 p-3 rounded-lg mb-6" onClick={() => setShowWebcam(!showWebcam)}>Verify cards</button>
      {showWebcam && (
        <WebcamCapture
          serverAddress={serverAddress}
          reload={reload}
          setReload={setReload}
        />
      )}
      </div>
      <div className="flex flex-row flex-wrap">
        {cardInfo.map(
          (card, index) =>
            card.verified && (
              <div className="w-1/3 p-2" key={index}>
                <img src={card.luhthang} alt={`Image ${index}`} className="rounded-xl"/>
              </div>
            )
        )}
      </div>
    </>
  );
}
