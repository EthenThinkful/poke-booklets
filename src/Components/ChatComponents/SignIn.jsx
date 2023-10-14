import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import { useState } from "react";
import axios from 'axios';


function SignIn({setErrorMsg, serverAddress, errorMsg, toast}) {
  const navigate = useNavigate();

  const auth = getAuth();

  const signUpWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider);
    let data;
    console.log("type of data: ", data);
    auth.currentUser.uid !== null ? data = {userName: auth.currentUser.uid} : null;
    data !== undefined ? 
    axios.post(`${serverAddress}/api/users`, data).then((res) => {
        toast("User added successfully!");
        console.log("User added successfully!");
    }).catch(error => {
      setErrorMsg(error.response.data);
  }) : null;
  };

  async function LoginWithGoogle() {
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider); // Wait for the login process to complete
    } catch (error) {
      console.error(error); // Handle any errors
    }
  };

  async function Login () {
    try {
      await LoginWithGoogle();
      const params = {  user: auth.currentUser.uid };
      axios.get(`${serverAddress}/api/userss`, { params }).then((res) => {
        localStorage.setItem("ID", res.data.id);
        console.log("The Guy: ", res.data);
        console.log("SILLY DOODS ID IN LOCAL STORAGE: ", localStorage.ID);
        navigate('/home');
    })
    } 
    catch (error) {
      console.error(error);
    }
  }

  // async function fetchData() {
  //   try {
  //     const response = await fetch('https://api.example.com/data');
  //     if (!response.ok) {
  //       throw new Error('Failed to fetch data');
  //     }
      
  //     const data = await response.json();
  //     console.log(data);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // }

  return (
    <>
    {errorMsg ? <p className='bg-red-600'>{errorMsg}</p> : null} 
    <button className="bg-zinc-600 rounded-lg text-xs p-3 m-3" onClick={signUpWithGoogle}>Sign up with google</button>;
    <button className="bg-zinc-600 rounded-lg text-xs p-3 m-3" onClick={Login}>Log in with google</button>;
    </>
  ) 
}

export default SignIn;
