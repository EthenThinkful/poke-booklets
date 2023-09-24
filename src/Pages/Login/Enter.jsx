import React, { useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from 'react-router-dom';

export default function Enter({ serverAddress }) {
    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');
    const [errorMsg, setErrorMsg] = useState(null);

    const params = {
        user: user,
        password: password
    }

    const handleUserChange = (e) => {
        setUser(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    //   const handleSubmit = (e) => {
    //     e.preventDefault();
    //     const data = {userName: user, password: password};
    //     axios.post(`${serverAddress}/api/users`, data).then((res) => {
    //         toast("User added successfully!");
    //         console.log("User added successfully!");
    //         setUser('');
    //         setPassword('');
    //     });
    //   };

    //---------------------------------new implement---------------------------------
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        axios.get(`${serverAddress}/api/userss`, { params }).then((res) => {
            // console.log('result: ', res.data);
            // console.log('ID OF 3t!: ', res.data.id);
            localStorage.setItem("ID", res.data.id);
            console.log("SILLY DOODS ID IN LOCAL STORAGE: ", localStorage.ID);
            navigate('./home');
        })
            .catch(error => {
                // Handle any errors here
                console.log(error.code);
                setErrorMsg(error.code);
            })
    };
    //---------------------------------end new implement---------------------------------

    return (
        <form onSubmit={handleSubmit} className='absolute top-0 pt-52'>
            <div className='m-4'>
                <h1 className='m-4'>Log In:</h1>
                <label htmlFor="user" className='text-white'>User Name:</label>
                <input
                    type="text"
                    id="user"
                    value={user}
                    onChange={handleUserChange}
                    className='bg-zinc-700'
                />
            </div>
            <div className='m-4'>
                <label htmlFor="password" className='text-white'>Password:</label>
                <textarea
                    id="password"
                    value={password}
                    onChange={handlePasswordChange}
                    className='bg-zinc-700'
                />
            </div>
            <div>
                <button type="submit" className="p-3 m-2 bg-orange-300 rounded-md text-xs w-auto h-10 caret-transparent">Login</button>
                {errorMsg ? <div className='bg-red-600'>{errorMsg}</div> : null}
            </div>
        </form>
    );
}