import React from 'react'

export default function NavBar() {
  return (
    <>
        <div className="h-[10vh] w-full bg-red-200  w-screen max-width">
            <div className="flex flex-row justify-between ">
                <div>Logo</div>
                <div className="flex flex-row justify-between ">
                    <div>Home</div>
                    <div>Public Booklets</div>
                </div>
            </div>
        </div>

    </>
  )
}
