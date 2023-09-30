import React, { useEffect, useState } from 'react'
import ImageUploading from "react-images-uploading";

function UserIcon() {
  const [img, setImg] = useState([]);
  const maxNumImgs = 1;
  const defaultImg = '/src/assets/UserProfile/user-profile.jpg';
  const onChange = (imageList, addUpdateIndex) => {
    const uploadedImg = imageList[0]?.dataURL
    setImg(imageList)
  };

  return (

      <ImageUploading        
        value={img}
        onChange={onChange}
        maxNumber={maxNumImgs}>        
{({       imageList,
          onImageUpload,
          onImageRemoveAll,
          onImageUpdate,
          onImageRemove,
          isDragging,
          dragProps}) =>
          
  {
// console.log(imageList.length)
  return ( 
    <div>
    <button onClick={()=> onImageRemoveAll()}>Remove Image</button>
    <div
      onClick={()=> onImageUpload()}
      style={isDragging ? { transform: "scale(1.1)" } : null}
      className="w-[90px] h-[125px] rounded-lg mr-2 overflow-hidden"
      {...dragProps}
    >
{
  imageList.length === 0 ? <img src={defaultImg}  alt="Example image" className="object-cover w-full h-full" /> :
imageList.map((image, index)=> (
 <img key={index} src={image?.dataURL}  alt="Example image" className="object-cover w-full h-full" />
))
}

      
    </div>
  </div>

  )}}
        
  </ImageUploading>

  )
}

export default UserIcon