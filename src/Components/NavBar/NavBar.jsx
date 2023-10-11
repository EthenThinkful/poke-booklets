import React from "react";
import { Link } from "react-router-dom";
import pokeLogo from "../../assets/pokebooklet.svg";
// import SignIn from "../ChatComponents/SignIn";
// import SignOut from "../ChatComponents/SignOUt";
// import { getAuth } from "firebase/auth";
// import { useAuthState } from "react-firebase-hooks/auth";

export default function NavBar() {
  // const auth = getAuth();
  // const [user] = useAuthState(auth);
  return (
    <div className="h-[8vh] lg:h-[10vh] w-full bg-red-200 flex items-center justify-between px-6 lg:px-10 text-xs lg:text-sm caret-transparent">
      <Link to={"/"}>
        <div>
          <img src={pokeLogo} className="w-[75%] h-[75%]"></img>
        </div>
      </Link>
      <div className="flex flex-row">
        <Link to={"/home"}>
          <div className="ml-4 lg:ml-8">Home</div>
        </Link>
        <Link to={"/create"}>
          <div className="ml-4 lg:ml-8">Create</div>
        </Link>
        {/* {user ? <SignOut /> : <SignIn />} */}

        <Link to={"/"}>
          <div className="ml-4 lg:ml-8">Logout</div>
        </Link>
      </div>
    </div>
  );
}
