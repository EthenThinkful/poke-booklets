import React, { useState } from "react";
import CardRender from "./CardRender/CardRender";
import NavBar from "../NavBar";
import UserDashboard from "./UserProfileComponents/UserDashboard";

export default function Create({ serverAddress }) {
  // for user's trainer card
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
