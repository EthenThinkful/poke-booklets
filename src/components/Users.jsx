import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export default function Users() {
  const [userData, setUserData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [userName, setUserName] = useState("");

  useEffect(() => {
    axios.get("http://localhost:8080/poke/api/users").then((res) => {
      setUserData(res.data);
      setIsLoading(false);
      console.log(res.data);
    });
  }, []);

  const handleSubmit = (e) => {
    const data = {
      userName: userName,
    };
    axios.post("http://localhost:8080/poke/api/users", data).then((res) => {
      toast("User added successfully!");
      
    });
  };

  return (
    <>
      <Link to={"/"}>
        <button className="bg-slate-600 rounded-xl text-center text-xs p2-1 h-10 w-24 mb-4">
          Go Back
        </button>
      </Link>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
        className="text-neutral-700"
      >
        <div className="mb-4">Username:</div>
        <input
          type="text"
          name="userName"
          onChange={(e) => setUserName(e.target.value)}
          align="left"
          className="mb-4 p-3 text-white"
        />
        <button
          className="bg-slate-600 rounded-xl text-center text-xs p2-1 h-10 w-28 text-white mb-8"
          onClick={handleSubmit}
        >
          Register
        </button>
        <ToastContainer />
      </form>
      <div className="text-neutral-700">
        <div className="mb-5">Users:</div>
        <ul>
          {userData.map((user) => (
            <li className="m-2">{user.userName}</li>
          ))}
        </ul>
      </div>
    </>
  );
}
