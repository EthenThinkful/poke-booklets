import React, { useState, useRef, useEffect } from "react";
import DraggablePicture from "./DraggablePicture";
import { useDrop } from "react-dnd";
import pokemon from "pokemontcgsdk";
import Draggable from "react-draggable";

pokemon.configure({ apiKey: "b2c47130-c144-4d25-8d96-c71708597019" });

const initialData = 1;

export default function CardBook() {
  const [board, setBoard] = useState([initialData]);
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

  const [{ isOver2 }, drop2] = useDrop(() => ({
    accept: "image",
    drop: (item) => addCardToSlot2(item.src),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  const [{ isOver3 }, drop3] = useDrop(() => ({
    accept: "image",
    drop: (item) => addCardToSlot3(item.src),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  const [{ isOver4 }, drop4] = useDrop(() => ({
    accept: "image",
    drop: (item) => addCardToSlot4(item.src),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  const [{ isOver5 }, drop5] = useDrop(() => ({
    accept: "image",
    drop: (item) => addCardToSlot5(item.src),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  const [{ isOver6 }, drop6] = useDrop(() => ({
    accept: "image",
    drop: (item) => addCardToSlot6(item.src),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  const addCardToSlot1 = (src) => {
    const picture = src;
    setSlot1((current) => [...current, picture]);
    console.log(slot1.length);
  };

  const addCardToSlot2 = (src) => {
    const picture = src;
    setSlot2([...slot2, picture]);
  };

  const addCardToSlot3 = (src) => {
    const picture = src;
    setSlot3([...slot3, picture]);
  };

  const addCardToSlot4 = (src) => {
    const picture = src;
    setSlot4([...slot4, picture]);
  };

  const addCardToSlot5 = (src) => {
    const picture = src;
    setSlot5([...slot5, picture]);
  };

  const addCardToSlot6 = (src) => {
    const picture = src;
    setSlot6([...slot6, picture]);
  };

  const addImageToBoard = (src) => {
    const pictureList = src;
    board.length < 6
      ? setBoard((current) => [...current.slice(-5), pictureList])
      : null;
    console.log(board);
  };

  return (
    <div>
      <div className="cardBook bg-orange-600 mt-8">
        {slot1.length === null ? (
          <div className="card__slot"></div>
        ) : (
          <div className="card__slot" ref={drop}>
            <DraggablePicture src={slot1} key={Math.random()} />
          </div>
        )}
        {slot2.length === null ? (
          <div className="card__slot"></div>
        ) : (
          <div className="card__slot" ref={drop2}>
            <DraggablePicture src={slot2} key={Math.random()} />
          </div>
        )}
        {slot3.src === 0 ? (
          <div className="card__slot"></div>
        ) : (
          <div className="card__slot" ref={drop3}>
            <DraggablePicture src={slot3} key={Math.random()} />
          </div>
        )}
        {slot4.src === 0 ? (
          <div className="card__slot"></div>
        ) : (
          <div className="card__slot" ref={drop4}>
            <DraggablePicture src={slot4} key={Math.random()} />
          </div>
        )}
        {slot5.src === 0 ? (
          <div className="card__slot"></div>
        ) : (
          <div className="card__slot" ref={drop5}>
            <DraggablePicture src={slot5} key={Math.random()} />
          </div>
        )}
        {slot6.src === 0 ? (
          <div className="card__slot"></div>
        ) : (
          <div className="card__slot" ref={drop6}>
            <DraggablePicture src={slot6} key={Math.random()} />
          </div>
        )}
      </div>
    </div>
  );
}
