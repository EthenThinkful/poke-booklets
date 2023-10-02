import React from 'react'
import NavBar from '../../Components/NavBar/NavBar'
import GetBooklets from "../../Components/GetBooklets/GetBooklets";
import UserDashboard from '../../Components/UserProfileComponents/UserDashboard/UserDashboard';

export default function Home({serverAddress}) {
  return (
    <>
        <NavBar />
        <UserDashboard serverAddress={serverAddress}/>
        <GetBooklets serverAddress={serverAddress}/>
    </>
  )
}
