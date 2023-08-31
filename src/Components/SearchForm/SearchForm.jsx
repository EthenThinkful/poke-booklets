import React, {useState} from 'react'

export default function SearchForm( {setPoke, poke, getCard, setCard} ) {

    const handleSubmit = (e) => {
        e.preventDefault();
        getCard();
      };

      const handleDelete = (e) => {
        e.preventDefault();
        setCard([]);
      };

  return (
    <>
        <form className="flex">
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
            </form>
    </>
  )
}
