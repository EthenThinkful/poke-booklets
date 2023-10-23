import React, { useState } from "react";
import CardRender from "./CardRender/CardRender";
import NavBar from "../NavBar";
import UserDashboard from "./UserProfileComponents/UserDashboard";
import { useParams } from 'react-router-dom';

export default function Create({ serverAddress }) {
  const { id } = useParams();
  
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
        userId={id}
      />
      <CardRender
        serverAddress={serverAddress}
        updateTotalCardNum={updateTotalCardNum}
        userId={id}
      />
    </>
  );
}
