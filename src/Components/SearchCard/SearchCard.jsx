import React, {useState} from 'react'
import pokeNames from "../../assets/PokeJSON/pokeNames.json";
import pokemon from "pokemontcgsdk";
import SearchForm from '../SearchForm/SearchForm';
import RenderCarousel from '../RenderCarousel/RenderCarousel';

pokemon.configure({ apiKey: import.meta.env.VITE_TCG_API });

export default function SearchCard({setBook}) {
    const [poke, setPoke] = useState("");
    const [card, setCard] = useState([]);

    let newArray = new Array();

    if (card.length > 0)
        card[0].map((item, index) => {
        newArray.push({ src: item.images.small, id: index });
        });

    function getCard() {
        pokemon.card.where({ q: `name:${poke}` }).then((result) => {
          console.log("HERE MIGHT BE THE ERROR")
          setCard([result.data]);
        });
      }

  return (
    <>
    {/* added a border (border-2 and border-red-200) to see where the component is laid out. Delete afterwards */}
    <div className="flex items-center lg:justify-center lg:items-center border-2 border-red-200">'
    <SearchForm setPoke={setPoke} poke={poke} setCard={setCard} getCard={getCard}/>
          {/* <form className="flex">
            <input
              className="p-3 text-xs rounded-md w-40 h-14 bg-stone-600 mr-4"
              placeholder="search"
              type="text"
              value={poke}
              onChange={(event) => {
                setPoke(event.target.value.toLocaleLowerCase());
              }}
            />
            <button
              onClick={handleSubmit}
              type="submit"
              className="p-3 bg-orange-300 rounded-md text-xs w-20 h-14 mr-4"
            >
              get card
            </button>
            <button
              onClick={handleDelete}
              type="submit"
              className="p-3 bg-orange-300 rounded-md text-xs w-20 h-14 mr-4"
            >
              clear
            </button>
          </form> */}
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
    </>
  )
}
