import React, { useState, useRef, useEffect } from "react";
import Axios from "axios";
import pokeNames from "../assets/PokeJSON/pokeNames.json";
import CardRender from "./CardRender";
import Draggable from "react-draggable";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import DraggablePictureTwo from "./DraggablePictureTwo";
import { useDrop } from "react-dnd";
import TrashCan from "../assets/PokePICS/PokeTrash2.jpg";

export default function GetPokemon() {
  const [pokemon, setPokemon] = useState("");
  const [pokemon1, setPokemon1] = useState({});
  const [pokemon2, setPokemon2] = useState({});
  const [pokemon3, setPokemon3] = useState({});
  const [pokemon4, setPokemon4] = useState({});
  const [pokemon5, setPokemon5] = useState({});
  const [pokemon6, setPokemon6] = useState({});

  const [limitReached, setLimitReached] = useState(true);

  const handleKeypress = (e) => {
    // triggers by pressing the enter key
    if (e.keyCode === 13) {
      handleSubmit();
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    getPokemon();
    setLimitReached(!limitReached);
  };

  function getPokemon() {
    Axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`).then(
      (response) => {
        Object.keys(pokemon1).length === 0
          ? setPokemon1({
              name: pokemon,
              species: response.data.species.name,
              img: response.data.sprites.front_default,
              hp: response.data.stats[0].base_stat,
              key: pokemon,
              ability: response.data.abilities[0].ability.name,
            })
          : Object.keys(pokemon2).length === 0
          ? setPokemon2({
              name: pokemon,
              species: response.data.species.name,
              img: response.data.sprites.front_default,
              hp: response.data.stats[0].base_stat,
              key: pokemon,
              ability: response.data.abilities[0].ability.name,
            })
          : Object.keys(pokemon3).length === 0
          ? setPokemon3({
              name: pokemon,
              species: response.data.species.name,
              img: response.data.sprites.front_default,
              hp: response.data.stats[0].base_stat,
              key: pokemon,
              ability: response.data.abilities[0].ability.name,
            })
          : Object.keys(pokemon4).length === 0
          ? setPokemon4({
              name: pokemon,
              species: response.data.species.name,
              img: response.data.sprites.front_default,
              hp: response.data.stats[0].base_stat,
              key: pokemon,
              ability: response.data.abilities[0].ability.name,
            })
          : Object.keys(pokemon5).length === 0
          ? setPokemon5({
              name: pokemon,
              species: response.data.species.name,
              img: response.data.sprites.front_default,
              hp: response.data.stats[0].base_stat,
              key: pokemon,
              ability: response.data.abilities[0].ability.name,
            })
          : Object.keys(pokemon6).length === 0
          ? setPokemon6({
              name: pokemon,
              species: response.data.species.name,
              img: response.data.sprites.front_default,
              hp: response.data.stats[0].base_stat,
              key: pokemon,
              ability: response.data.abilities[0].ability.name,
            })
          : null;
      }
    );
  }

  const nodeRef = useRef(1); // to get around strictMode
  const nodeRef2 = useRef(2);
  const nodeRef3 = useRef(3);
  const nodeRef4 = useRef(3);
  const nodeRef5 = useRef(3);
  const nodeRef6 = useRef(3);

  // beginning of card booklet functionality
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

  return (
    <div className="iphoneScreen mt-6">
      <CardRender poke={pokemon} />
      <div className="PokemonRender">
      <div>
      <div className="bookletTab float-right ml-4 mt-2"></div>
          <form className="flex">
            <input
              className="p-3 text-xs rounded-md w-40 h-14 bg-stone-600 mr-4"
              placeholder="search"
              type="text"
              value={pokemon}
              onKeyDown={handleKeypress}
              onChange={(event) => {
                setPokemon(event.target.value.toLocaleLowerCase());
              }}
            />
            <button
              className="p-3 bg-orange-300 rounded-md text-xs w-40 h-14"
              type="submit"
              onClick={handleSubmit}
            >
              Add Pokemon!
            </button>
            <img src={TrashCan} className="trash__can zoom" ref={dropTrash}/>
          </form>
          
        </div>
        <div className="dropDown text-xs mb-4">
          {pokeNames
            .filter((item) => {
              const searchTerm = pokemon.toLocaleLowerCase();
              const fullName = item.toLocaleLowerCase();
              return (
                searchTerm &&
                fullName.startsWith(searchTerm) &&
                fullName !== searchTerm
              );
            })
            .slice(0, 10)
            .map((item) => (
              <div
                onClick={() => setPokemon(item.toLocaleLowerCase())}
                key={item}
                className="cursor-pointer p-2"
              >
                {item}
              </div>
            ))}
        </div>
        {limitReached && Object.keys(pokemon6).length !== 0
          ? setTimeout(() => setLimitReached(!limitReached), 3000) && (
              <div className="animate-bounce pt-4 text-xs">
                Pokemon Limit Reached!
              </div>
            )
          : null}
        <div className="flex justify-center">
          {
            <Draggable nodeRef={nodeRef}>
              <span ref={nodeRef} className="cursor-pointer">
                <TransformComponent>
                  <img src={pokemon1.img} />
                </TransformComponent>
              </span>
            </Draggable>
          }
        </div>
        <div className="flex justify-center">
          {
            <Draggable nodeRef={nodeRef2}>
              <span ref={nodeRef2} className="cursor-pointer ">
                <TransformComponent>
                  <img src={pokemon2.img} />
                </TransformComponent>
              </span>
            </Draggable>
          }
        </div>
        <div className="flex justify-center">
          {
            <Draggable nodeRef={nodeRef3}>
              <span ref={nodeRef3} className="cursor-pointer ">
                <TransformComponent>
                  <img src={pokemon3.img} />
                </TransformComponent>
              </span>
            </Draggable>
          }
          <div className="flex justify-center">
            {
              <Draggable nodeRef={nodeRef4}>
                <span ref={nodeRef4} className="cursor-pointer">
                  <TransformComponent>
                    <img src={pokemon4.img} />
                  </TransformComponent>
                </span>
              </Draggable>
            }
          </div>
          <div className="flex justify-center">
            {
              <Draggable nodeRef={nodeRef5}>
                <span ref={nodeRef5} className="cursor-pointer">
                  <TransformComponent>
                    <img src={pokemon5.img} />
                  </TransformComponent>
                </span>
              </Draggable>
            }
          </div>
          <div className="flex justify-center">
            {
              <Draggable nodeRef={nodeRef6}>
                <span ref={nodeRef6} className="cursor-pointer">
                  <TransformComponent>
                    <img src={pokemon6.img} />
                  </TransformComponent>
                </span>
              </Draggable>
            }
          </div>
        </div>
        <div>
          <div className="cardBook bg-orange-600">
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
        </div>
      </div>
    </div>
  );
}
