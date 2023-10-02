import React from 'react'

function UserDetails() {
  return (
    <div className='flex flex-col justify-center p-2 ml-2 text-[9px] text-white text-black bg-orange-300 rounded-lg sm:justify-evenly  sm:text-[16px] sm:p-4'>
        <span>Trainer ID: 1</span>
        <span>Trainer Name: Ethan</span>
        <span>Total Cards: 10</span>
        <span>Notable Pokemon: Crabominable</span>
    </div>
  )
}

export default UserDetails