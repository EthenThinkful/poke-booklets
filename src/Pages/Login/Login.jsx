import { Link } from "react-router-dom";
import pikachuCard from "../../assets/pikachuCard.gif";
import bgimage from "../../assets/PokePICS/EnterBg.jpg";
import Form from "./Form";

// const serverAddress = import.meta.env.VITE_PROD_URL
const serverAddress = import.meta.env.VITE_DEV_URL;

export default function Login() {
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
      <div style={style.body}>
        <Form serverAddress={serverAddress}/>
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
