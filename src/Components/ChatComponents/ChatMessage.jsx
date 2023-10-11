import { getAuth } from "firebase/auth";
import React from "react";

function ChatMessage(props) {
  const auth = getAuth();
  const { text, uid, photoURL } = props.message;
  const currUser = uid === auth.currentUser.uid ? true : false;
  return (
    <div className="bg-white pb-2">
      {currUser ? (
        <div className="flex justify-end">
          <p className={currUser ? `bg-orange-300` : `bg-red-200`}>{text}</p>
          <img
            src={photoURL}
            alt="Picture"
            className="w-[45px] h-[45px] object-cover"
          />
        </div>
      ) : (
        <div className="flex justify-start">
          <img
            src={photoURL}
            alt="Picture"
            className="w-[45px] h-[45px] object-cover"
          />
          <p className={currUser ? `bg-orange-300` : `bg-red-200 `}>{text}</p>
        </div>
      )}
    </div>
  );
}

export default ChatMessage;