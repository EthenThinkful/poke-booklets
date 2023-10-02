import React from 'react'
import NavBar from '../../Components/NavBar/NavBar'
import GetBooklets from "../../Components/GetBooklets/GetBooklets";
import UserDashboard from '../../Components/UserProfileComponents/UserDashboard/UserDashboard';

export default function Home() {
  return (
    <>
        <NavBar />
        <UserDashboard/>
        <GetBooklets />
    </>
  )
}
