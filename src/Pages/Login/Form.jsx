import React, { useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Form({serverAddress, newUser, setNewUser, errorMsg, setErrorMsg }) {
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');

  const handleUserChange = (e) => {
    setUser(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
const handleNewUser = () => {
  setNewUser(false)
}
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {userName: user, password: password};
    axios.post(`${serverAddress}/api/users`, data).then((res) => {
        toast("User added successfully!");
        console.log("User added successfully!");
        setUser('');
        setPassword('');
    }).catch(error => {
      // Handle any errors here
      // console.log(error.response.data);
      setErrorMsg(error.response.data);
  });
  };

  return (
    <form onSubmit={handleSubmit} className='absolute top-0 pt-12'>

      <div className='mx-auto max-w-[300px]'>
        <h1 className='my-4 text-center'>Create New User:</h1>
        <label htmlFor="user" className='text-white'>User Name:</label>
        <input
          type="text"
          id="user"
          value={user}
          onChange={handleUserChange}
          className='bg-zinc-700 w-full max-w-full'
        />
      </div>
      <div className='mx-auto max-w-[300px]'>
        <label htmlFor="password" className='text-white'>Password:</label>
        <input
          id="password"
          type='password'
          value={password}
          onChange={handlePasswordChange}
          className='bg-zinc-700 w-full max-w-full'
        />
      </div>
      <div className='mx-auto max-w-[80%] flex justify-center'>
        <button type="submit" className="p-3 m-2 bg-orange-300 rounded-md text-xs w-[96px] h-10 caret-transparent">Create</button>
      </div>
      {errorMsg ? <p className='bg-red-600'>Couldn't log in: {errorMsg}</p> : null}
      <button className="transition-colors duration-1500 hover:text-black" onClick={handleNewUser}>Already have an account? Log In.</button>
    </form>
  );
}
