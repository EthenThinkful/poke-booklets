import React, {useState} from 'react'

export default function SearchForm( {setPoke, poke, getCard, setCard} ) {

    const handleSubmit = (e) => {
        e.preventDefault();
        getCard(poke);
      };

    const handleDelete = (e) => {
      e.preventDefault();
      setCard([]);
      setPoke("");
    };

  return (
    <>
        <form className="flex" onSubmit={handleSubmit}>
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
              type="submit"
              className="p-3 bg-orange-300 rounded-md text-xs w-20 h-14 mr-4 caret-transparent"
              >
              get card
              </button>
            <button
              onClick={handleDelete}
              type="button" // Use type="button" to prevent this button from submitting the form
              className="p-3 bg-orange-300 rounded-md text-xs w-20 h-14 mr-4 caret-transparent"
              >
              clear
              </button>
        </form>
    </>
  )
}
