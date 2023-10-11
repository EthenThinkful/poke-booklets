import React, { useState } from "react";
import NavBar from "../../Components/NavBar/NavBar";
import GetBooklets from "../../Components/GetBooklets/GetBooklets";
import UserDashboard from "../../Components/UserProfileComponents/UserDashboard/UserDashboard";
import ChatRoom from "../../Components/ChatComponents/ChatRoom";
// import firebase from 'firebase/app'
import { initializeApp } from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import SignOut from "../../Components/ChatComponents/SignOUt";
import SignIn from "../../Components/ChatComponents/SignIn";
const defaultImg = 'https://media.istockphoto.com/id/1337144146/vector/default-avatar-profile-icon-vector.jpg?s=612x612&w=0&k=20&c=BIbFwuv7FxTWvh5S3vB6bkT0Qv8Vn8N5Ffseq84ClGI=';

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

export default function Home({ serverAddress }) {
  const [user] = useAuthState(auth);
  const [showChatRoom, setShowChatRoom] = useState(false);
  return (
    <>
      <NavBar />
      {user ? (
        <div className="flex justify-between bg-neutral-500 rounded-b-lg">
          <button
            className=" bg-red-200 rounded-xl p-2 m-2 text-xs"
            onClick={() => setShowChatRoom(!showChatRoom)}
          >
            chat
          </button>
          <SignOut/>
        </div>
      ) : (
        <SignIn />
      )}

      {showChatRoom ? (
        <ChatRoom defaultImg={defaultImg}/>
      ) : null}
      <UserDashboard serverAddress={serverAddress} />
      <GetBooklets serverAddress={serverAddress} defaultImg={defaultImg}/>
    </>
  );
}
