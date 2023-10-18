import React from "react";
import UserIcon from "./UserIcon";
import UserDetails from "./UserDetails";

function UserDashboard({ serverAddress, totalCards }) {
  return (
    <div className="flex pt-4 pb-2 px-2 justify-center">
      <UserIcon serverAddress={serverAddress} />
      <UserDetails serverAddress={serverAddress} totalCards={totalCards} />
    </div>
  );
}

export default UserDashboard;
