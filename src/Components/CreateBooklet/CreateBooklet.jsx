import React, { useEffect, useState, useRef } from 'react'
import DraggablePictureTwo from "../DraggablePictureTwo/DraggablePictureTwo";
import { useDrag, useDrop } from "react-dnd";
import axios from 'axios';
import WebcamCapture from './WebcamCampture';
import { UilCheckCircle } from '@iconscout/react-unicons'
import blah from '../../../images/blah.png'

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
    axios.get(`${serverAddress}/api/users/${localStorage.ID}`)
      .then((res) => {
        // console.log(res.data.cardData);

        // Use Array.sort() to sort the data by id in ascending order
        const sortedData = res.data.cardData.sort((a, b) => a.id - b.id);
        // console.log(sortedData);
        setBook(sortedData);
        // console.log("USESTATE: ", book);
      });
  }, [reload]);

  // const shortenedUrl = shortenUrl(book[2].image);
  // console.log(shortenedUrl);

  return (
    <>
      <div className="lg:flex lg:justify-center lg:items-center lg:mb-6">
        <div className="card__book h-[280px] sm:h-[500px] mx-auto max-w-full p-0 justify-evenly">
          <div className="card__slot">
            {book.length > 0 && book[0].verified === true ? (
              <>
                <DraggablePictureTwo src={book[0].pokemonCard} id={book[0].id} />
                <div className='z-10 bg-zinc-600 absolute mt-52 ml-36 rounded-xl'>
                  <UilCheckCircle />
                </div>
              </>
            ) : book.length > 0 ?
              <>
                <DraggablePictureTwo src={book[0].pokemonCard} id={book[0].id} />
              </>
              : null}
          </div>
          <div className="m-0 card__slot">
            {book.length > 1 && book[1].verified === true ? (
              <>
                <DraggablePictureTwo src={book[1].pokemonCard} id={book[1].id} />
                <div className='z-10 bg-zinc-600 absolute mt-52 ml-36 rounded-xl'>
                  <UilCheckCircle />
                </div>
              </>
            ) : book.length > 1 ?
              <>
                <DraggablePictureTwo src={book[1].pokemonCard} id={book[1].id} />
              </>
              : null}
          </div>
          <div className="card__slot">
            {book.length > 2 && book[2].verified === true ? (
              <>
                <DraggablePictureTwo src={book[2].pokemonCard} id={book[2].id} />
                <div className='z-10 bg-zinc-600 absolute mt-52 ml-36 rounded-xl'>
                  <UilCheckCircle />
                </div>
              </>
            ) : book.length > 2 ?
              <>
                <DraggablePictureTwo src={book[2].pokemonCard} id={book[2].id} />
              </>
              : null}
          </div>
          <div className="card__slot">
            {book.length > 3 && book[3].verified === true ? (
              <>
                <DraggablePictureTwo src={book[3].pokemonCard} id={book[3].id} />
                <div className='z-10 bg-zinc-600 absolute mt-52 ml-36 rounded-xl'>
                  <UilCheckCircle />
                </div>
              </>
            ) : book.length > 3 ?
              <>
                <DraggablePictureTwo src={book[3].pokemonCard} id={book[3].id} />
              </>
              : null}
          </div>
          <div className="card__slot">
            {book.length > 4 && book[4].verified === true ? (
              <>
                <DraggablePictureTwo src={book[4].pokemonCard} id={book[4].id} />
                <div className='z-10 bg-zinc-600 absolute mt-52 ml-36 rounded-xl'>
                  <UilCheckCircle />
                </div>
              </>
            ) : book.length > 4 ?
              <>
                <DraggablePictureTwo src={book[4].pokemonCard} id={book[4].id} />
              </>
              : null}
          </div>
          <div className="card__slot">
            {book.length > 5 && book[5].verified === true ? (
              <>
                <DraggablePictureTwo src={book[5].pokemonCard} id={book[5].id} />
                <div className='z-10 bg-zinc-600 absolute mt-52 ml-36 rounded-xl'>
                  <UilCheckCircle />
                </div>
              </>
            ) : book.length > 5 ?
              <>
                <DraggablePictureTwo src={book[5].pokemonCard} id={book[5].id} />
              </>
              : null}
          </div>
        </div>
        <div
          className="trash__can bg-slate-600 w-[90px] h-[125px] sm:w-[150px] sm:h-[209px] mx-auto mb-4 m-0 rounded-lg flex text-center justify-center p-10 pt-6 pb-6 text-xs lg:text-sm mt-2 lg:p-12 lg:pt-10 lg:m-10 caret-transparent"
          ref={dropTrash}
        >
          drag & drop cards here to delete
        </div>
        <WebcamCapture serverAddress={serverAddress} reload={reload} setReload={setReload} />
      </div>
      {book.length > 0 ?
        <img src={book[0].luhthang} /> : null}
      {book.length > 1 ?
        <img src={book[1].luhthang} /> : null}
      {book.length > 2 ?
        <img src={book[2].luhthang} /> : null}
    </>
  )
}
