import React from "react";
import UserIcon from "./UserIcon";
import UserDetails from "./UserDetails";

function UserDashboard({ serverAddress, totalCards, userId }) {
  return (
    <div className="flex pt-4 pb-2 px-2 justify-center">
      <UserIcon serverAddress={serverAddress} userId={userId}/>
      <UserDetails serverAddress={serverAddress} totalCards={totalCards} userId={userId}/>
    </div>
  );
}

export default UserDashboard;
