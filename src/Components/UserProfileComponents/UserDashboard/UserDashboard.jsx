import React from 'react'
import UserIcon from '../UserIcon/UserIcon'
import UserDetails from '../UserDetails/UserDetails'

function UserDashboard() {
  return (
    <div className='flex pt-4 pb-2 px-2 '>
    <UserIcon/>
    <UserDetails/>
    </div>
  )
}

export default UserDashboard