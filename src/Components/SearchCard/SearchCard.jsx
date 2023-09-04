import React, {useState, useRef, useEffect} from 'react'
import pokeNames from "../../assets/PokeJSON/pokeNames.json";
import pokemon from "pokemontcgsdk";
import SearchForm from '../SearchForm/SearchForm';
import RenderCarousel from '../RenderCarousel/RenderCarousel';
import UserForm from "../UserForm/UserForm";

pokemon.configure({ apiKey: import.meta.env.VITE_TCG_API });

export default function SearchCard({setBook, book, setUserName, userName, toast, setCard, card, newArray, poke, setPoke}) {
  const [focusedIndex, setFocusedIndex] = useState(-1);
  const dropdownRef = useRef(null);

    function getCard(test) {
        pokemon.card.where({ q: `name:${test}` }).then((result) => {
          setCard([result.data]);
        });
      }

      useEffect(() => {
        const handleKeyDown = (event) => {
          if (event.key === "ArrowDown") {
            event.preventDefault();
            setFocusedIndex((prevIndex) => {
              const nextIndex = prevIndex + 1;
              return nextIndex;
            });
          } else if (event.key === "ArrowUp") {
            event.preventDefault();
            setFocusedIndex((prevIndex) => {
              const nextIndex = prevIndex - 1;
              return nextIndex;
            });
          } else if (event.key === "Enter") {
            event.preventDefault();
            if (currPokemons[focusedIndex]) {
              let testVar = currPokemons[focusedIndex].props.children.toLocaleLowerCase();
              setPoke(currPokemons[focusedIndex].props.children.toLocaleLowerCase());
              getCard(testVar);
            }
            setFocusedIndex(-1);
          }
        };
    
        document.addEventListener("keydown", handleKeyDown);
        return () => {
          document.removeEventListener("keydown", handleKeyDown);
        };
      }, [focusedIndex, setPoke]);

      let currPokemons = pokeNames
      .filter((item) => {
        const searchTerm = poke.toLocaleLowerCase();
        const fullName = item.toLocaleLowerCase();
        return (
          searchTerm &&
          fullName.startsWith(searchTerm) &&
          fullName !== searchTerm
        );
      })
      .slice(0, 6)
      .map((item, index) => (
        <div
          onClick={() => setPoke(item.toLocaleLowerCase())}
          key={item}
          className={`cursor-pointer p-2 ${index === focusedIndex ? 'bg-gray-200' : ''}`}
        >
          {item}
        </div>
      ))

  return (
    <>
    {/* added a border (border-2 and border-red-200) to see where the component is laid out. Delete afterwards */}
    <div className="flex items-center lg:justify-center lg:items-center">
    <SearchForm setPoke={setPoke} poke={poke} setCard={setCard} getCard={getCard} />
        </div>
        <div className="drop__down text-xs mb-2 mt-3 text-zinc-700">
          {currPokemons}
        </div>
        <RenderCarousel carouselImg={newArray} setBook={setBook} />
    </>
  )
}
