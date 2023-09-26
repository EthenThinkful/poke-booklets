import { useEffect, useState } from "react";
import axios from "axios";
import DraggablePictureTwo from "../DraggablePictureTwo/DraggablePictureTwo";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";

// const serverAddress = import.meta.env.VITE_PROD_URL;
// const serverAddress = import.meta.env.VITE_DEV_URL
const serverAddress = import.meta.env.VITE_DEV_PROD_URL;

export default function GetBooklets() {
  const [isDeleted, setIsDeleted] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [bookletData, setBookletData] = useState([]);

  useEffect(() => {
    axios.get(`${serverAddress}/api/users`).then((res) => {
      console.log(res.data);
      setBookletData(res.data);
    });
  }, []);

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
      <div className="lg:flex caret-transparent">
        {chunk.map((item) => (
          <div className="text-neutral-700 text-sm lg:flex lg:justify-center lg:items-center lg: mx-2">
            <div>
              <div className="flex justify-center lg:px-8">
                {item.userName}'s party
                {/* <button Link>Edit</button> */}
                {/* <button
                  onClick={() => {
                    const shouldDelete = window.confirm(
                      "Are you sure you want to delete this booklet?"
                    );
                    if (shouldDelete) {
                      axios
                        .delete(`${serverAddress}/api/booklet/${item.id}`)
                        .then((res) => {
                          toast("Booklet deleted successfully!");
                          // console.log(temp);
                          setIsDeleted(true);
                        });
                    }
                  }}
                >
                  Delete
                </button> */}
              </div>
              <div className="card__book mt-2">
                <div className="card__slot">
                  {item.cardData[0] != null ? 
                  <DraggablePictureTwo src={item.cardData[0].pokemonCard} id={item.cardData[0].id} /> : null}
                </div>
                <div className="card__slot">
                {item.cardData[1] != null ? 
                  <DraggablePictureTwo src={item.cardData[1].pokemonCard} id={item.cardData[1].id} /> : null}
                </div>
                <div className="card__slot">
                {item.cardData[2] != null ? 
                  <DraggablePictureTwo src={item.cardData[2].pokemonCard} id={item.cardData[2].id} /> : null}
                </div>
                <div className="card__slot">
                {item.cardData[3] != null ? 
                  <DraggablePictureTwo src={item.cardData[3].pokemonCard} id={item.cardData[3].id} /> : null}
                </div>
                <div className="card__slot">
                {item.cardData[4] != null ? 
                  <DraggablePictureTwo src={item.cardData[4].pokemonCard} id={item.cardData[4].id} /> : null}
                </div>
                <div className="card__slot">
                {item.cardData[5] != null ? 
                  <DraggablePictureTwo src={item.cardData[5].pokemonCard} id={item.cardData[5].id} /> : null}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="iphone__screen caret-transparent">
      <div className="flex justify-between items-center">
        <div className="text-neutral-700 flex items-center">Poke Booklets</div>
        <div className="text-neutral-700 flex justify-center items-center bg-red-200 rounded-xl text-xs h-10 lg:w-1/12">
          <Link to={"/create"}>Create Yours!</Link>
        </div>
      </div>
      {/* <div className="text-neutral-700 text-xs rounded-lg flex text-left items-center w-6/12 mb-12 lg:items-center lg:justify-center lg:text-center mx-auto"></div> */}
      <div className="text-neutral-700 text-xs rounded-lg flex mt-4 mb-8 lg:mb-12 lg:mt-0 w-10/12 lg:w-6/12 lg:items-center lg:justify-center text-left lg:mx-0">
        Poke Booklets is for people who want to interact with others over their
        Pokemon card collectibles through their digital booklets.
      </div>
      {temp.length > 0 ? (
        temp.map((item) => {
          // console.log(item);
          return item;
        })
      ) : (
        <div className="loader"></div>
      )}
    </div>
  );
}
