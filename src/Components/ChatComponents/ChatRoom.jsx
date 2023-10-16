import {
  collection,
  getFirestore,
  query,
  serverTimestamp,
  orderBy,
  addDoc,
  where,
  updateDoc
} from "firebase/firestore";
import React, { useRef, useState, useEffect } from "react";
import { useCollectionData } from "react-firebase-hooks/firestore";
import ChatMessage from "./ChatMessage";
import { getAuth } from "firebase/auth";
import axios from "axios";

function ChatRoom({ profilePic, setProfilePic, userUid}) {
  const auth = getAuth();
  const db = getFirestore();
  const messagesRef = collection(db, "messages");
  const dummy = useRef();
  const queryWithOrderBy = query(messagesRef, orderBy("createdAt"));

  // const q = query(messagesRef, where('uid', '==', `${userUid}`))
  // const [documents] = useCollectionData(q, { idField: "id" })
  
  // console.log(`This is a query:`, documents)
  //Delete if things go wrong

  // const updatePhotoURL = async (docId) => {
  //   try {
  //     const docRef = messagesRef.doc(docId); // Replace with your document ID
  //     await updateDoc(docRef, {
  //       photoURL: profilePic, // Replace with the new URL
  //     });
  //   } catch (error) {
  //     console.error("Error updating document:", error);
  //   }
  // };

  // const handleUpdate = () => {
  //   if (documents) {
  //     documents.forEach(async (message) => {
  //       await updatePhotoURL(message.uid);
  //     });
  //   }
  // };


  const [formValue, setFormValue] = useState("");

  const sendMessage = async (e) => {
    e.preventDefault();
    const { uid } = auth.currentUser;
    await addDoc(messagesRef, {
      text: formValue,
      createdAt: serverTimestamp(),
      uid,
      photoURL:profilePic,
    });
    setFormValue("");
    dummy.current.scrollIntoView({ behavior: "smooth" });
  };

const [messages] = useCollectionData(queryWithOrderBy, { idField: "id" });
// const [modifeidMessages, setModifiedMessages] = useState(null);

//   useEffect(() => {
//     if (messages) {
//        const updatedMessages = messages.map((msg) => {
//         if (msg.uid === userUid) {
//           msg.photoURL = profilePic;
//           // console.log(msg);
//         }
//         return msg;
//       });
//       setModifiedMessages(updatedMessages); 
//     }
//   }, [messages]);

  return (
    <>
      <main className="max-w-[400px] h-[400px] overflow-auto bg-neutral-500 pt-2 mt-2 rounded-t-xl rounded-b-lg lg:ml-2">
        {messages &&
          messages.map((msg) => <ChatMessage key={msg.id} message={msg} profilePic={profilePic}/>)}
        <div ref={dummy}></div>
        <form
          onSubmit={sendMessage}
          className="w-full bg-neutral-500 text-black border-solid border-t-2 border-slate-100"
        >
          <input
            value={formValue}
            onChange={(e) => setFormValue(e.target.value)}
            className="bg-neutral-500 w-[80%] h-10 text-white mb-[2px] rounded-xl"
          />

          <button type="submit" className="text-green-300 roundex-xl text-xs ml-3">
            Send
          </button>
        </form>
      </main>
    </>
  );
}

export default ChatRoom;
