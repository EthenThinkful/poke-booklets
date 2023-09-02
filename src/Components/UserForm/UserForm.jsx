import React from "react";
import axios from "axios";

export default function UserForm({setUserName, setBook, book, userName, toast, setCard, setPoke}) {
  const serverAddress = import.meta.env.VITE_PROD_URL;
  // const serverAddress = import.meta.env.VITE_DEV_URL;

  //POST request for a booklet to api
  const handleBooklet = (e) => {
    const data = {
      userName: userName,
      cardOne: book.length > 0 ? book[0].src : null,
      cardTwo: book.length > 1 ? book[1].src : null,
      cardThree: book.length > 2 ? book[2].src : null,
      cardFour: book.length > 3 ? book[3].src : null,
      cardFive: book.length > 4 ? book[4].src : null,
      cardSix: book.length > 5 ? book[5].src : null,
    };
    axios.post(`${serverAddress}/api/booklet`, data).then((res) => {
      toast("Booklet added successfully!");
      setBook([]);
      setCard([]);
      setUserName("");
      setPoke("");
    });
  };

  return (
    <div className="flex mb-8 lg:justify-center lg:items-center lg:pl-10">
      <form className="flex">
        <input
          className="p-3 text-xs rounded-md w-160 h-14 bg-stone-600 mr-4"
          type="text"
          name="userName"
          placeholder="your name"
          onChange={(e) => setUserName(e.target.value)}
          align="left"
          value={userName}
        />
      </form>
      <button
        onClick={handleBooklet}
        type="submit"
        className="p-3 bg-orange-300 rounded-md text-xs w-40 h-14 mr-4"
      >
        submit booklet
      </button>
    </div>
  );
}
