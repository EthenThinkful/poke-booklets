import React, { useState } from "react";
import NavBar from "../../Components/NavBar/NavBar";
import GetBooklets from "../../Components/GetBooklets/GetBooklets";
import UserDashboard from "../../Components/UserProfileComponents/UserDashboard/UserDashboard";
import ChatRoom from "../../Components/ChatComponents/ChatRoom";
import SignIn from "../../Components/ChatComponents/SignIn";
// import firebase from 'firebase/app'
import { initializeApp } from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

import { useAuthState } from "react-firebase-hooks/auth";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import SignOut from "../../Components/ChatComponents/SignOUt";

const app = initializeApp({
  apiKey: "AIzaSyAsjtRzxguc7WqYseNbWrVMVK2JbovFDhg",
  authDomain: "poke-booklet-f9629.firebaseapp.com",
  projectId: "poke-booklet-f9629",
  storageBucket: "poke-booklet-f9629.appspot.com",
  messagingSenderId: "395092670008",
  appId: "1:395092670008:web:a770dde923dc80cc4e18cd",
});
const auth = getAuth(app);
const firestore = getFirestore(app);

export default function Home({ serverAddress }) {
  const [user] = useAuthState(auth);
  const [showChatRoom, setShowChatRoom] = useState(false);
  return (
    <>
      <NavBar />

      {/* {user ? <SignOut /> : null}
      {user ? <ChatRoom /> : <SignIn />} */}
      {showChatRoom ? (
        <ChatRoom
          setShowChatRoom={setShowChatRoom}
          showChatRoom={showChatRoom}
        />
      ) : (
        <button
          onClick={() => {
            setShowChatRoom(!showChatRoom);
          }}
          className="text-black"
        >
          Show Chat
        </button>
      )}
      <UserDashboard serverAddress={serverAddress} />
      <GetBooklets serverAddress={serverAddress} />
    </>
  );
}
