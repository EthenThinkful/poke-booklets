import {
  collection,
  getFirestore,
  query,
  serverTimestamp,
  orderBy,
  addDoc,
} from "firebase/firestore";
import React, { useRef, useState } from "react";
import { useCollectionData } from "react-firebase-hooks/firestore";
import ChatMessage from "./ChatMessage";
import { getAuth } from "firebase/auth";

function ChatRoom({ setShowChatRoom, showChatRoom }) {
  const auth = getAuth();
  const db = getFirestore();
  const messagesRef = collection(db, "messages");
  const dummy = useRef();
  const queryWithOrderBy = query(messagesRef, orderBy("createdAt"));

  const [formValue, setFormValue] = useState("");
  // const queryWithOrderBy = query(messagesRef, orderBy('createdAt'));

  const sendMessage = async (e) => {
    e.preventDefault();

    const { uid, photoURL } = auth.currentUser;

    await addDoc(messagesRef, {
      text: formValue,
      createdAt: serverTimestamp(),
      uid,
      photoURL,
    });
    setFormValue("");
    dummy.current.scrollIntoView({ behavior: "smooth" });
  };
  const [messages] = useCollectionData(queryWithOrderBy, { idField: "id" });
  console.log([messages]);
  return (
    <>
      <main className="max-w-[400px] bg-white">
        <button
          className="text-black"
          onClick={() => setShowChatRoom(!showChatRoom)}
        >
          X
        </button>
        {messages &&
          messages.map((msg) => <ChatMessage key={msg.id} message={msg} />)}
        <div ref={dummy}></div>
        <form
          onSubmit={sendMessage}
          className="w-full bg-white text-black border-solid border-t-2 border-slate-100"
        >
          <input
            value={formValue}
            onChange={(e) => setFormValue(e.target.value)}
            className="bg-white px-2 w-[80%]"
          />

          <button type="submit" className="text-green-300">
            Send
          </button>
        </form>
      </main>
    </>
  );
}

export default ChatRoom;
