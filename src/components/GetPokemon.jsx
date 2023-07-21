import React, { useState, useRef, useEffect } from "react";
import Axios from "axios";
import CardRender from "./CardRender";
import Draggable from "react-draggable";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import DraggablePictureTwo from "./DraggablePictureTwo";
import { useDrop } from "react-dnd";

export default function GetPokemon() {
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

  const [isShown, setIsShown] = useState(false);

  const handleClick = (event) => {
    setIsShown((current) => !current);
  };

  return (
    <>
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
        className="trash__can bg-slate-600 w-120 h-20 mb-6 rounded-lg flex text-center justify-center pt-5 text-sm mt-2"
        ref={dropTrash}
      >
        drag & drop cards to delete
      </div>
    </>
  );
}
