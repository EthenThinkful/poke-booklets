import React, { useEffect, useState } from 'react'
import DraggablePictureTwo from "../DraggablePictureTwo/DraggablePictureTwo";
import { useDrag, useDrop } from "react-dnd";
import UserForm from '../UserForm/UserForm';
import axios from 'axios';

export default function CreateBooklet({ setBook, book, setUserName, userName, toast, setCard, card, newArray, poke, setPoke, serverAddress, reload, setReload }) {

  const [{ isOverTrash }, dropTrash] = useDrop(() => ({
    accept: "image",
    drop: (item) => handleRemoveItem(item),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  function handleRemoveItem(item) {
    console.log(item.id.current);
    axios.delete(`${serverAddress}/api/cards/${item.id.current}`).then((res) => { 
      setReload(!reload);
      console.log(res);
    })
    // setBook((current) => current.filter((x) => x.id !== item.id.current));
  }


  useEffect(() => {
    axios.get(`${serverAddress}/api/users/${localStorage.ID}`).then((res) => {
      console.log(res.data.cardData);
      setBook(res.data.cardData);
      // console.log("USESTATE: ", book);
    });
  }, [reload]);

  return (
    <div className="lg:flex lg:justify-center lg:items-center lg:mb-6 max-w-[340px] mx-auto card__book__width lg:w-full lg:max-w-full">
            <div className="card__book mt-2 w-full max-w-full mx-auto lg:max-w-[520px]">
              <div className="card__slot">
                {book.length > 0 ? (
                  <DraggablePictureTwo src={book[0].pokemonCard} id={book[0].id} />
                ) : null}
              </div>
              <div className="card__slot">
                {book.length > 1 ? (
                 
                  <DraggablePictureTwo src={book[1].pokemonCard} id={book[1].id} />
                  
                ) : null}
              </div>
              <div className="card__slot">
                {book.length > 2 ? (
                  <DraggablePictureTwo src={book[2].pokemonCard} id={book[2].id} />
                ) : null}
              </div>
              <div className="card__slot">
                {book.length > 3 ? (
                  <DraggablePictureTwo src={book[3].pokemonCard} id={book[3].id} />
                ) : null}
              </div>
              <div className="card__slot">
                {book.length > 4 ? (
                  <DraggablePictureTwo src={book[4].pokemonCard} id={book[4].id} />
                ) : null}
              </div>
              <div className="card__slot">
                {book.length > 5 ? (
                  <DraggablePictureTwo src={book[5].pokemonCard} id={book[5].id} />
                ) : null}
              </div>
            </div>
           
            {/* <UserForm setBook={setBook} book={book} setUserName={setUserName} userName={userName} toast={toast} setCard={setCard} setPoke={setPoke}/> */}
            <div
              className="trash__can bg-slate-600 w-[90px] h-[125px] sm:w-[150px] sm:h-[209px] mx-auto mb-4 m-0 rounded-lg flex text-center justify-center py-0 pt-6 pb-6 text-xs lg:text-sm mt-2 lg:m-10 caret-transparent"
              ref={dropTrash}
            >
              drag & drop cards here to delete
            </div>
        
          </div>
  )
}
