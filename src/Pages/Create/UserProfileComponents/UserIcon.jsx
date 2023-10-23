// chat feature disabled for now so no need for this
// import {
//   collection,
//   getFirestore,
//   query,
//   serverTimestamp,
//   orderBy,
//   addDoc,
//   doc,
//   where,
//   updateDoc,
//   getDocs
// } from "firebase/firestore";
// import { useCollectionData } from "react-firebase-hooks/firestore";
// import { getAuth } from "firebase/auth";

import ImageUploading from "react-images-uploading";
import React, { useRef, useState, useEffect } from "react";
import axios from "axios";
const defaultImg =
    "https://media.istockphoto.com/id/1337144146/vector/default-avatar-profile-icon-vector.jpg?s=612x612&w=0&k=20&c=BIbFwuv7FxTWvh5S3vB6bkT0Qv8Vn8N5Ffseq84ClGI=";

function UserIcon({ serverAddress, userId }) {
  const [profilePic, setProfilePic] = useState(null);
  const [render, setRender] = useState(false);
  const [userUid, setUserUid] = useState(null);
  let trainerID;
  let trainerName;
  let totalCards;
  let notablePokemon;

  // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~chat feature disabled for now so no need for this~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  // const auth = getAuth();
  // const db = getFirestore();
  // const messagesRef = collection(db, "messages");
  // const dummy = useRef();
  // const queryWithOrderBy = query(messagesRef, orderBy("createdAt"));
  // const q = query(messagesRef, where('uid', '==', `${userUid}`))
  // const [documents] = useCollectionData(q, { idField: "id" })

  //with passing pfp as a value to use 
  // const handleUpdate = (pfp) => {
  //   getDocs(q)
  //     .then((querySnapshot) => {
  //       querySnapshot.forEach((docu) => {
  //         console.log("Document ID: ", docu.id);
  //         const updatedData = {
  //           photoURL: pfp, 
  //         };
  //         const documentRef = doc(db, "messages", docu.id);
  //           updateDoc(documentRef, updatedData)
  //             .then(() => {
  //               console.log("Document updated successfully.");
  //             })
  //             .catch((error) => {
  //               console.error("Error updating document: ", error);
  //             });
  //       })
  //         .catch((error) => {
  //           console.error("Error retrieving documents: ", error);
  //         });

  //     });
  // };
  //with passing pfp as a value to use 

  //withOUT passing pfp as a value to use 
  // const handleUpdate = () => {
  //   getDocs(q)
  //     .then((querySnapshot) => {
  //       querySnapshot.forEach((docu) => {
  //         console.log("Document ID: ", docu.id);
  //         axios.get(`${serverAddress}/api/usersss/${localStorage.ID}`).then((res) => {
  //           let pfp = res.data;
  //           const updatedData = {
  //             photoURL: pfp, 
  //           };
  //           const documentRef = doc(db, "messages", docu.id);
  //           updateDoc(documentRef, updatedData)
  //             .then(() => {
  //               console.log("Document updated successfully.");
  //             })
  //             .catch((error) => {
  //               console.error("Error updating document: ", error);
  //             });
  //         });
  //       })
  //         .catch((error) => {
  //           console.error("Error retrieving documents: ", error);
  //         });

  //     });
  // };
  //withOUT passing pfp as a value to use 

  // const updatePhotoURL = async (docId) => {
  //   try {
  //     const docRef = doc(messagesRef, docId.uid);
  //     console.log("Line 57: ", docRef);
  //     await updateDoc(docRef, {
  //       photoURL: profilePic, 
  //     });
  //   } catch (error) {
  //     console.error("Error updating document:", error);
  //   }
  // };
    // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~end chat feature disabled for now so no need for this~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// render current user's profile picture or another user's profile picture
let currId;
  useEffect(() => {
    currId = userId === undefined ? localStorage.ID : userId;
    axios.get(`${serverAddress}/api/userss/${currId}`).then((res) => {
      const newProfilePic = res.data.profilePic || defaultImg;
      setProfilePic(newProfilePic);
      setUserUid(res.data.userName);
    });
  }, [userId]);

  useEffect(() => {
    axios.get(`${serverAddress}/api/userss/${currId}`).then((res) => {
      setProfilePic(res.data.profilePic);
      // chat feature disabled for now so no need for this
      // handleUpdate(res.data.profilePic);
    });
  }, [render]);

  const [img, setImg] = useState([]);
  const maxNumImgs = 1;
  const onChange = (imageList, addUpdateIndex) => {
    const uploadedImg = imageList[0]?.dataURL;
    setImg(imageList);
  };

  return (
    <ImageUploading value={img} onChange={onChange} maxNumber={maxNumImgs}>
      {({ onImageUpload, onImageRemoveAll, isDragging, dragProps }) => {
        useEffect(() => {
          const data = { id: localStorage.ID, profilePic: img[0]?.dataURL };

          if (img.length !== 0) {
            onImageRemoveAll();
            axios
              .put(`${serverAddress}/api/users`, data)
              .then((res) => {
                setRender(!render);
              })
              .catch((error) => {
                console.error(error);
              });
          }
        }, [img]);
        return (
          <div>
            <div
              onClick={() => currId === localStorage.ID ? onImageUpload() : console.log("not your profile")}
              style={isDragging ? { transform: "scale(1.1)" } : null}
              className="w-[90px] h-[125px] sm:w-[160px] sm:h-[219px] rounded-lg mr-2 overflow-hidden sm:mx-auto"
              {...dragProps}
            >
              {profilePic === null ? (
                <img
                  src={defaultImg}
                  alt="Example image"
                  className="object-cover w-full h-full"
                />
              ) : (
                <img
                  src={profilePic}
                  alt="PFP"
                  className="object-cover w-full h-full"
                />
              )}
            </div>
          </div>
        );
      }}
    </ImageUploading>
  );
}

export default UserIcon;
