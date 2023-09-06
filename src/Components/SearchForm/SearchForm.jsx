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

    console.log(poke)
  return (
    <>
      <div className="flex justify-center items-center w-screen"> 
        <form className="" onSubmit={handleSubmit}>
            <div className="flex flex-col">
              <div className="m-2">
                <input
                  className="p-3 text-xs rounded-md h-14 bg-stone-600"
                  placeholder="search"
                  type="text"
                  value={poke}
                  onChange={(event) => {
                      setPoke(event.target.value.toLocaleLowerCase());
                  }}
                  />
              </div>
              <div className="flex flex-row justify-between">
              <button
                  onClick={handleDelete}
                  type="button" // Use type="button" to prevent this button from submitting the form
                  className="p-3 m-2 bg-orange-300 rounded-md text-xs w-auto h-10 caret-transparent"
                  >
                  clear
                  </button>
                <button
                  type="submit"
                  className="p-3 m-2 bg-orange-300 rounded-md text-xs w-auto h-10 caret-transparent"
                  >
                  see cards
                  </button>

              </div>
            </div>
        </form>
        </div>
    </>
  )
}
