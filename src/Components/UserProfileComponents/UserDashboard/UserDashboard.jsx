import React from 'react'
import UserIcon from '../UserIcon/UserIcon'
import UserDetails from '../UserDetails/UserDetails'

function UserDashboard({serverAddress}) {
  return (
    <div className='flex pt-4 pb-2 px-2 justify-center'>
    <UserIcon serverAddress={serverAddress}/>
    <UserDetails serverAddress={serverAddress}/>
    </div>
  )
}

export default UserDashboard