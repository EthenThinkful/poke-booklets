import React, { useState, useEffect } from "react";
import axios from "axios";
import NavBar from "../NavBar";
import GetBooklets from "./GetBooklets/GetBooklets";
import ChatRoom from "./ChatComponents/ChatRoom";
import { initializeApp } from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
//default profile pic if user does not have one
const defaultImg =
  "https://media.istockphoto.com/id/1337144146/vector/default-avatar-profile-icon-vector.jpg?s=612x612&w=0&k=20&c=BIbFwuv7FxTWvh5S3vB6bkT0Qv8Vn8N5Ffseq84ClGI=";

// firebase config
const app = initializeApp({
  apiKey: "AIzaSyAsjtRzxguc7WqYseNbWrVMVK2JbovFDhg",
  authDomain: "poke-booklet-f9629.firebaseapp.com",
  projectId: "poke-booklet-f9629",
  storageBucket: "poke-booklet-f9629.appspot.com",
  messagingSenderId: "395092670008",
  appId: "1:395092670008:web:a770dde923dc80cc4e18cd",
});
const auth = getAuth();
const firestore = getFirestore(app);
// end firebase config

export default function Home({ serverAddress }) {
  const [user] = useAuthState(auth);
  const [profilePic, setProfilePic] = useState(null);
  // disabling chat feature for now
  // const [showChatRoom, setShowChatRoom] = useState(false);
  
  useEffect(() => {
    axios.get(`${serverAddress}/api/userss/${localStorage.ID}`).then((res) => {
      const newProfilePic = res.data.profilePic || defaultImg;
      setProfilePic(newProfilePic);
    });
  }, []);

  return (
    <>
    {/* only show navbar if a user is logged in */}
    {user ?
    <>
      <NavBar />
      {/* disabling chat feature for now */}
        {/* <div className="flex justify-between bg-neutral-500 rounded-b-lg"> */}
          {/* <button
            className=" bg-red-200 rounded-xl p-2 m-2 text-xs"
            onClick={() => setShowChatRoom(!showChatRoom)}
          >
            Chat
          </button> */}
        {/* </div> */}
        </>
        :null}
      {/* {showChatRoom ? <ChatRoom profilePic={profilePic} /> : null} */}
      <GetBooklets serverAddress={serverAddress} defaultImg={defaultImg}/>
    </>
  );
}
