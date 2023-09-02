import React, {useState} from 'react'
import pokeNames from "../../assets/PokeJSON/pokeNames.json";
import pokemon from "pokemontcgsdk";
import SearchForm from '../SearchForm/SearchForm';
import RenderCarousel from '../RenderCarousel/RenderCarousel';
import UserForm from "../UserForm/UserForm";

pokemon.configure({ apiKey: import.meta.env.VITE_TCG_API });

export default function SearchCard({setBook, book, setUserName, userName, toast, setCard, card, newArray, poke, setPoke}) {

    function getCard() {
        pokemon.card.where({ q: `name:${poke}` }).then((result) => {
          console.log("HERE MIGHT BE THE ERROR")
          setCard([result.data]);
        });
      }

  return (
    <>
    {/* added a border (border-2 and border-red-200) to see where the component is laid out. Delete afterwards */}
    <div className="flex items-center lg:justify-center lg:items-center">
    <SearchForm setPoke={setPoke} poke={poke} setCard={setCard} getCard={getCard}/>
        </div>
        <div className="drop__down text-xs mb-2 mt-3 text-zinc-700">
          {pokeNames
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
            .map((item) => (
              <div
                onClick={() => setPoke(item.toLocaleLowerCase())}
                key={item}
                className="cursor-pointer p-2"
              >
                {item}
              </div>
            ))}
        </div>
        <RenderCarousel carouselImg={newArray} setBook={setBook} />
        {/* <UserForm setBook={setBook} book={book} setUserName={setUserName} userName={userName} toast={toast} setCard={setCard} setPoke={setPoke}/> */}
    </>
  )
}
