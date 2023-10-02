import React, { useEffect, useState } from 'react'
import ImageUploading from "react-images-uploading";
import axios from 'axios';

function UserIcon({serverAddress}) {
  const [profilePic, setProfilePic] = useState(null)
  const [render, setRender] = useState(false)

  useEffect(() => {
    axios.get(`${serverAddress}/api/userss/${localStorage.ID}`).then((res) => {
      // console.log(res.data);
      setProfilePic(res.data.profilePic);
      // console.log(profilePic)
    });
  }, [render]);
  
  
 
  const [img, setImg] = useState([]);
  const maxNumImgs = 1;
  const defaultImg = 'https://media.istockphoto.com/id/1337144146/vector/default-avatar-profile-icon-vector.jpg?s=612x612&w=0&k=20&c=BIbFwuv7FxTWvh5S3vB6bkT0Qv8Vn8N5Ffseq84ClGI=';
  const onChange = (imageList, addUpdateIndex) => {
    const uploadedImg = imageList[0]?.dataURL
    setImg(imageList)
  };

  return (

    <ImageUploading
      value={img}
      onChange={onChange}
      maxNumber={maxNumImgs}>
      {({ imageList,
        onImageUpload,
        onImageRemoveAll,
        onImageUpdate,
        onImageRemove,
        isDragging,
        dragProps }) => {
        // console.log(imageList.length)
        //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~new implement~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
        useEffect(() => {
          const data = { id: localStorage.ID, profilePic: img[0]?.dataURL };
          
         if(img.length !== 0 ) {
          onImageRemoveAll()
          console.log(img)
            axios.put(`${serverAddress}/api/users`, data).then((res) => {
            console.log("Profile pic added successfully!");
            // console.log(res.data)
            setRender(!render)
            }

          ).catch(error => {
            console.error(error);
          });
        }}, [img])
        //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~end new implement~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
        return (
          <div>
            <div
              onClick={() => onImageUpload()}
              style={isDragging ? { transform: "scale(1.1)" } : null}
              className="w-[90px] h-[125px] sm:w-[160px] sm:h-[219px] rounded-lg mr-2 overflow-hidden sm:mx-auto"
              {...dragProps}
            >
              {
                profilePic === null ? <img src={defaultImg} alt="Example image" className="object-cover w-full h-full" /> : <img  src={profilePic} alt="PFP" className="object-cover w-full h-full" />   
              }
            </div>

          </div>

        )
      }}

    </ImageUploading>

  )
}

export default UserIcon