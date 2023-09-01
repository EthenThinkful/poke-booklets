import { useEffect, useState } from "react";
import axios from "axios";
import DraggablePictureTwo from "../DraggablePictureTwo/DraggablePictureTwo";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const serverAddress = import.meta.env.VITE_PROD_URL
// const serverAddress = import.meta.env.VITE_DEV_URL

export default function GetBooklets() {
  const [isDeleted, setIsDeleted] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [bookletData, setBookletData] = useState([]);

  useEffect(() => {
    axios.get(`${serverAddress}/api/booklet`).then((res) => {
      setBookletData(res.data);
      // console.log(bookletData);
    });
  }, [bookletData]);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  function handleAddBookClick(src, id) {
    setBook((book) => [...book, { src, id }]);
  }

  let chunkSize = windowWidth < 992 ? 1 : 2;

  let temp = [];
  for (let i = 0; i < bookletData.length; i += chunkSize) {
    let chunk = bookletData.slice(i, i + chunkSize);
    temp.push(
      <div className="lg:flex">
        {chunk.map((item) => (
      <div className="text-neutral-700 text-sm lg:flex lg:justify-center lg:items-center lg: mx-2">
        <div>
          <div className="flex justify-between lg:px-8">
          {item.userName}'s party
          {/* <button Link>Edit</button> */}
          <button
            onClick={() =>
              axios
                .delete(
                  `${serverAddress}/api/booklet/${item.id}`
                )
                .then((res) => {
                  toast("Booklet deleted successfully!");
                  // console.log(temp);
                  setIsDeleted(true);
                })
            }
          >
            Delete
          </button>
          </div>
          <div className="card__book mt-2">
            <div className="card__slot">
              <DraggablePictureTwo src={item.cardOne} id={item.id} />
            </div>
            <div className="card__slot">
              <DraggablePictureTwo src={item.cardTwo} id={item.id} />
            </div>
            <div className="card__slot">
              <DraggablePictureTwo src={item.cardThree} id={item.id} />
            </div>
            <div className="card__slot">
              <DraggablePictureTwo src={item.cardFour} id={item.id} />
            </div>
            <div className="card__slot">
              <DraggablePictureTwo src={item.cardFive} id={item.id} />
            </div>
            <div className="card__slot">
              <DraggablePictureTwo src={item.cardSix} id={item.id} />
            </div>
          </div>
        </div>
      </div>
      ))}
    </div>
    );
  }

  return (
    <>
      {temp.map((item) => {
        // console.log(item);
        return item;
      })}
    </>
  );
}
