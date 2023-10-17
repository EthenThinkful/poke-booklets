import { getAuth, updateProfile } from "firebase/auth";
import React, { useEffect } from "react";

function ChatMessage(props) {
  const auth = getAuth();
  const { text, uid, photoURL} = props.message;
  const currUser = uid === auth.currentUser.uid ? true : false;
  //set photoURL to database profile picture instead
//   useEffect(() => { 
//   updateProfile(auth.currentUser, {
//     photoURL: "https://i1.sndcdn.com/avatars-000508491087-32hktm-t500x500.jpg"
//   }).then(() => {
//     // Profile updated successfully
//   }).catch((error) => {
//     // Handle error
//     console.error('Error updating profile:', error);
//   });
// }, [])

// const uint8Array = new Uint8Array(props.profilePic);
// const base64String = btoa(String.fromCharCode.apply(null, uint8Array));
// const mimeType = "data:image/jpeg;base64,";
// const dataUrl = `${mimeType}${base64String}`;
// console.log(dataUrl)

// Assuming imageBytes is a Uint8Array
// function convertBytesToBase64(imageBytes) {
//   const blob = new Blob([imageBytes], { type: 'application/octet-stream' });
//   const reader = new FileReader();

//   return new Promise((resolve, reject) => {
//     reader.onload = () => {
//       resolve(reader.result.split(',')[1]);
//     };

//     reader.onerror = (error) => {
//       reject(error);
//     };

//     reader.readAsDataURL(blob);
//   });
// }

// Usage
// const imageBytes = props.profilePic;
// const uint8Array = new Uint8Array(imageBytes);
// const dataUrl = convertBytesToBase64(uint8Array)
//   .then((base64String) => {
//     console.log(base64String);
//   })
//   .catch((error) => {
//     console.error(error);
//   });

  return (
    <div className="bg-neutral-500 pb-2 rounded-lg text-xs text-white">
      {currUser ? (
        <div className="flex justify-end mr-2 ">
          <p className={currUser ? `bg-orange-300 rounded-lg p-2 mx-2 text-xs` : `bg-red-200 rounded-lg p-2 mx-2 text-xs`}>{text}</p>
          <img
            src={dataUrl}
            alt="pfp"
            className="w-[45px] h-[45px] object-cover rounded-full text-white"
          />
        </div>
      ) : (
        <div className="flex justify-start ml-2 ">
          <img
            src={dataUrl}
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
