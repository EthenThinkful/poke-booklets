import React, { useState, useEffect } from "react";
import { UilEdit } from "@iconscout/react-unicons";
import axios from "axios";

function UserDetails({ serverAddress, totalCards }) {
  const [isEditing, setIsEditing] = useState(false);
  const [trainerName, setTrainerName] = useState(null);

  useEffect(() => {
    axios.get(`${serverAddress}/api/userss/${localStorage.ID}`).then((res) => {
      setTrainerName(res.data.nickName);
    });
  }, []);

  const handleEditClick = () => {
    setIsEditing(!isEditing);
  };

  const handleSaveClick = () => {
    setIsEditing(false);
    const data = { id: localStorage.ID, nickName: trainerName };
    axios
      .put(`${serverAddress}/api/userss`, data)
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleInputChange = (event) => {
    setTrainerName(event.target.value);
  };

  return (
    <div className="flex flex-col justify-center p-2 ml-2 text-[9px] text-white text-black bg-orange-300 rounded-lg sm:justify-evenly  sm:text-[16px] sm:p-4">
      <div className="flex justify-between">
        <span>Trainer ID: 1</span>
        <UilEdit onClick={handleEditClick} />
      </div>
      {isEditing ? (
        <form>
          <label>
            Trainer Name:
            <input
              type="text"
              value={trainerName}
              onChange={handleInputChange}
              className="rounded-md text-black pl-2"
            />
          </label>
          <button type="button" className="ml-2" onClick={handleSaveClick}>
            Save
          </button>
        </form>
      ) : (
        <span>Trainer Name: {trainerName}</span>
      )}
      <span>Total Cards: {totalCards}</span>
      <span>Notable Pokemon: Crabominable</span>
    </div>
  );
}

export default UserDetails;
