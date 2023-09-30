import React from "react";
import CardRender from "../../Components/CardRender/CardRender";
import NavBar from "../../Components/NavBar/NavBar";

import UserDashboard from "../../Components/UserProfileComponents/UserDashboard/UserDashboard";

export default function Create() {
  return (
    <>
      <NavBar />
      <UserDashboard/>
      <CardRender />
    </>
  );
}
