import { Link } from "react-router-dom";
import pikachuCard from "../../assets/pikachuCard.gif";
import bgimage from "../../assets/PokePICS/EnterBg.jpg";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";
import SignIn from "./SignIn";
import pokeLogo from "../../assets/pokebooklet.svg";

export default function Login({ toast, serverAddress }) {
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
      <div className="absolute top-0 mt-4 text-lg lg:text-xl flex justify-center"><img src={pokeLogo} className="w-[15%] h-[15%] sm:w-[45%] sm:h-[45%] mr-4"/>POKE BOOKLETS</div>
          <SignIn serverAddress={serverAddress} errorMsg={errorMsg} setErrorMsg={setErrorMsg} toast={toast}/>
      </div>
    </>
  );
}
