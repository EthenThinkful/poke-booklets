import React from "react";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <div className="h-[10vh] w-full bg-red-200 flex items-center justify-between px-6 lg:px-10">
      <Link to={'/'}><div>Logo</div></Link>
      <div className="flex flex-row">
        <Link to={'/home'}><div className="mx-4 lg:mx-10 ">Home</div></Link>
        <Link to={'/home'}><div>Public</div></Link>
      </div>
    </div>
  );
}
