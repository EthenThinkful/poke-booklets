import ImageUploading from "react-images-uploading";
import {
  collection,
  getFirestore,
  query,
  serverTimestamp,
  orderBy,
  addDoc,
  doc,
  where,
  updateDoc,
  getDocs
} from "firebase/firestore";
import React, { useRef, useState, useEffect } from "react";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { getAuth } from "firebase/auth";
import axios from "axios";

function UserIcon({ serverAddress }) {
  // not new 
  const [profilePic, setProfilePic] = useState(null);
  const [render, setRender] = useState(false);
  let trainerID;
  let trainerName;
  let totalCards;
  let notablePokemon;
  // not new end

  const [userUid, setUserUid] = useState(null);

  useEffect(() => {
    axios.get(`${serverAddress}/api/userss/${localStorage.ID}`).then((res) => {
      // Check if res.data.profilePic is null, and if so, set it to a default value
      const newProfilePic = res.data.profilePic || defaultImg;
      setProfilePic(newProfilePic);
      setUserUid(res.data.userName);
      // console.log(res.data.userName)
      // console.log("profilePic: ", newProfilePic); 
    });
  }, []);

  const auth = getAuth();
  const db = getFirestore();
  //here
  const messagesRef = collection(db, "messages");
  const dummy = useRef();
  const queryWithOrderBy = query(messagesRef, orderBy("createdAt"));

  const q = query(messagesRef, where('uid', '==', `${userUid}`))

  const [documents] = useCollectionData(q, { idField: "id" })
  
  // console.log(`Line 51, the query for current user:`, documents)
  //Delete if things go wrong

  const updatePhotoURL = async (docId) => {
    try {
      const docRef = doc(messagesRef, docId.uid); 
      console.log("Line 57: ", docRef);
      // Replace with your document ID
      await updateDoc(docRef, {
        photoURL: profilePic, // Replace with the new URL
      });
    } catch (error) {
      console.error("Error updating document:", error);
    }
  };

  const handleUpdate = (pfp) => {
    //uh ohhhhh
  getDocs(q)
  .then((querySnapshot) => {
    querySnapshot.forEach((docu) => {
      console.log("Document ID: ", docu.id);

      // Update the specific field within each document
      const updatedData = {
        photoURL: pfp, // Replace "New Value" with the actual value
        // Include other fields as needed
      };

      // Reference the document to be updated
      const documentRef = doc(db, "messages", docu.id);

      // Use the updateDoc function to update the document
      updateDoc(documentRef, updatedData)
        .then(() => {
          console.log("Document updated successfully.");
        })
        .catch((error) => {
          console.error("Error updating document: ", error);
        });
    });
  })
  .catch((error) => {
    console.error("Error retrieving documents: ", error);
  });
  //uh ohhhhh
  };
//Delete if things go wrong

  useEffect(() => {
    axios.get(`${serverAddress}/api/userss/${localStorage.ID}`).then((res) => {
      setProfilePic(res.data.profilePic);
      // do here
      // the call of all calls
      handleUpdate(res.data.profilePic);
      
    });
  }, [render]);

  useEffect(() => {
    axios.get(`${serverAddress}/api/userss/${localStorage.ID}`).then((res) => {
      // console.log(res.data);
      setProfilePic(res.data.profilePic);
      // console.log(profilePic)
    });
  }, []);

  const [img, setImg] = useState([]);
  const maxNumImgs = 1;
  const defaultImg =
    "https://media.istockphoto.com/id/1337144146/vector/default-avatar-profile-icon-vector.jpg?s=612x612&w=0&k=20&c=BIbFwuv7FxTWvh5S3vB6bkT0Qv8Vn8N5Ffseq84ClGI=";
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
              onClick={() => onImageUpload()}
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
