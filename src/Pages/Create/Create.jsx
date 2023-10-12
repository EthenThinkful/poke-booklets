import React, { useState } from "react";
import CardRender from "../../Components/CardRender/CardRender";
import NavBar from "../../Components/NavBar/NavBar";
import UserDashboard from "../../Components/UserProfileComponents/UserDashboard/UserDashboard";

export default function Create({ serverAddress }) {
  const [totalCards, setTotalCards] = useState(0);
  const updateTotalCardNum = (total) => {
    setTotalCards(total);
  };
  return (
    <>
      <NavBar />
      <UserDashboard
        serverAddress={serverAddress}
        totalCards={totalCards.length}
      />
      <CardRender
        serverAddress={serverAddress}
        updateTotalCardNum={updateTotalCardNum}
      />
    </>
  );
}
