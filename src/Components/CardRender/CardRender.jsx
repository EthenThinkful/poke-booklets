import { useState, useRef, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import GetBooklets from "../GetBooklets/GetBooklets";
import SearchCard from "../SearchCard/SearchCard";
import CreateBooklet from "../CreateBooklet/CreateBooklet";
import UserForm from "../UserForm/UserForm";

const serverAddress = import.meta.env.VITE_PROD_URL
// const serverAddress = import.meta.env.VITE_DEV_URL;

export default function CardRender() {
  const [userName, setUserName] = useState("");
  const [book, setBook] = useState([]);
  
  return (
    <>
      <div className="iphone__screen">
        <div className="float-left lg:float-none">
          <div className="text-neutral-700 mb-6">Poke Party</div>
          <SearchCard setBook={setBook} />
          <CreateBooklet book={book} setBook={setBook}/>
          <UserForm setUserName={setUserName} setBook={setBook} book={book} userName={userName} toast={toast}/>
          <GetBooklets />
        </div>
      </div>
    </>
  );
}
