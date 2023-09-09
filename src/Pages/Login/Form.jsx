import React, { useState } from 'react';
import axios from 'axios';

  //POST request for a booklet to api
//   const handleBooklet = (e) => {
//     const data = {
//       userName: userName,
//       cardOne: book.length > 0 ? book[0].src : null,
//       cardTwo: book.length > 1 ? book[1].src : null,
//       cardThree: book.length > 2 ? book[2].src : null,
//       cardFour: book.length > 3 ? book[3].src : null,
//       cardFive: book.length > 4 ? book[4].src : null,
//       cardSix: book.length > 5 ? book[5].src : null,
//     };
//     axios.post(`${serverAddress}/api/booklet`, data).then((res) => {
//       toast("Booklet added successfully!");
//       setBook([]);
//       setCard([]);
//       setUserName("");
//       setPoke("");
//     });
//   };

export default function Form({serverAddress}) {
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');

  const handleUserChange = (e) => {
    setUser(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    const data = {userName: user, password: password};
    axios.post(`${serverAddress}/api/users`, data).then((res) => {
        toast("User added successfully!");
        setUser('');
        setPassword('');
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="user">User Name:</label>
        <input
          type="text"
          id="user"
          value={user}
          onChange={handleUserChange}
        />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <textarea
          id="password"
          value={password}
          onChange={handlePasswordChange}
        />
      </div>
      <div>
        <button type="submit">Submit</button>
      </div>
    </form>
  );
}
