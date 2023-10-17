import { getAuth, updateProfile } from "firebase/auth";
import React, { useEffect, useState } from "react";
// const fs = require('fs');
// const { Base64 } = require('js-base64');

function ChatMessage(props) {
  const auth = getAuth();
  const { text, uid, photoURL } = props.message;
  const currUser = uid === auth.currentUser.uid ? true : false;
  // const [userUids, setUserUids] = useState([]);
  // useEffect(() => {
  //   setUserUids((prev) => [...prev, uid]);
  //   console.log(userUids)
  // }, []);


  // const [base64Image, setBase64Image] = useState("");
  // useEffect(() => {
  //   const textEncoder = new TextEncoder();
  //   const binaryData = textEncoder.encode(photoURL);
  //   const base64 = btoa(binaryData);
  //   console.log(base64);
  //   setBase64Image(base64);
  // }, [photoURL]);

  return (
    <div className="bg-neutral-500 pb-2 rounded-lg text-xs text-white">
      {currUser ? (
        <div className="flex justify-end mr-2 ">
          <p className={currUser ? `bg-orange-300 rounded-lg p-2 mx-2 text-xs` : `bg-red-200 rounded-lg p-2 mx-2 text-xs`}>{text}</p>
          <img
            src={props.profilePic}
            alt="pfp"
            className="w-[45px] h-[45px] object-cover rounded-full text-white"
          />
        </div>
      ) : (
        <div className="flex justify-start ml-2 ">
          <img
            src={photoURL}
            alt="pfp"
            className="w-[45px] h-[45px] object-cover rounded-full text-white"
          />
          <p className={currUser ? `bg-orange-300 rounded-lg p-2 mx-2 text-xs` : `bg-red-200 rounded-lg p-2 mx-2 text-xs`}>{text}</p>
        </div>
      )}
    </div>
  );
}

export default ChatMessage;
