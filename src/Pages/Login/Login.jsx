import { Link } from "react-router-dom";
import pikachuCard from "../../assets/pikachuCard.gif";
import bgimage from "../../assets/PokePICS/EnterBg.jpg";
import Form from "./Form";
import Enter from "./Enter";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";

// const serverAddress = import.meta.env.VITE_PROD_URL
// const serverAddress = import.meta.env.VITE_DEV_URL;
const serverAddress = import.meta.env.VITE_DEV_PROD_URL;

export default function Login({ toast }) {
  const [newUser, setNewUser] = useState(true);
  const [errorMsg, setErrorMsg] = useState(null);

  console.log(newUser);
  const style = {
    body: {
      backgroundImage: `url(${bgimage})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      minHeight: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
  };
  return (
    <>
      <div style={style.body} className="flex flex-col">
        {/* <div className="login caret-transparent  flex flex-col max-w-[300px] sm:max-w-[500px]">
          <h1 className="flex justify-center text-center">
            Continue as existing user: Felipe?
          </h1> 
          <div className="h-10 flex justify-center w-full">
          <Link to={"/home"} className="p-3  bg-orange-300 mx-1 rounded-md text-xs w-auto h-10 caret-transparent w-[60px] text-center">
            Yes
          </Link>
          <Link to={"/"} className="p-3 bg-orange-300 mx-1 rounded-md text-xs w-[60px] text-center h-10 caret-transparent">No</Link>
          </div>
          
        </div> */}
        <div className="absolute top-0 mt-4">POKE BOOKLETS </div>
        {newUser ? (
          <Form
            serverAddress={serverAddress}
            toast={toast}
            setNewUser={setNewUser}
            errorMsg={errorMsg}
            setErrorMsg={setErrorMsg}
          />
        ) : (
          <Enter
            serverAddress={serverAddress}
            toast={toast}
            setNewUser={setNewUser}
            errorMsg={errorMsg}
            setErrorMsg={setErrorMsg}
          />
        )}

        {/* <div className="login caret-transparent">
          <h1 className="flex justify-center text-center">
            Continue as existing user: Josh?
          </h1>
          <Link to={"/home"} className="m-6">
            Yes
          </Link>
          <Link to={"/"}>No</Link>
          <div className="flex justify-center text-center">
            <img
              src={pikachuCard}
              alt="pikachu card"
              className="pikachuCard zoom"
            />
          </div>
        </div> */}
      </div>
    </>
  );
}
