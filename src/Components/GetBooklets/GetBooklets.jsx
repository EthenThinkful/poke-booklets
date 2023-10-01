import { useEffect, useState } from "react";
import axios from "axios";
import DraggablePictureTwo from "../DraggablePictureTwo/DraggablePictureTwo";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";
import { UilCheckCircle } from '@iconscout/react-unicons'

// Define the server address based on your environment
// For development:
// const serverAddress = import.meta.env.VITE_DEV_URL;
// For production:
const serverAddress = import.meta.env.VITE_PROD_URL;

export default function GetBooklets() {
  const [isDeleted, setIsDeleted] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [bookletData, setBookletData] = useState([]);
  const [book, setBook] = useState([]); // Assuming this state is used elsewhere

  useEffect(() => {
    axios.get(`${serverAddress}/api/users`).then((res) => {
      // console.log(res.data);
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
      <div className="lg:flex caret-transparent lg:justify-between" key={i}>
        {chunk.map((item, index) => (
          <div className="text-neutral-700 text-sm lg:flex lg:justify-center lg:items-center lg: mx-2" key={index}>
            <div>
              <div className="flex justify-center lg:px-8">
                {item.userName}'s party
              </div>
              <div className="card__book card__book__width mt-2 max-w-[320px] lg:max-w-[510px] mx-auto">
                {[...Array(6)].map((_, index) => (
                  <div className="card__slot" key={index}>
                    {item.cardData.length > index && (
                      <>
                        <div className="group relative">
                          <DraggablePictureTwo
                            src={item.cardData[index].pokemonCard}
                            id={item.cardData[index].id}
                          />
                          {item.cardData[index].verified === true ? (
                            <div className="bg-blue-500 absolute ml-[5rem] top-[7rem] lg:ml-36 lg:top-[12.5rem] lg:left-[-5px] rounded-xl transform scale-100 group-hover:scale-150 group-hover:translate-x-[1rem] lg:group-hover:translate-x-[2rem] group-hover:translate-y-6 lg:group-hover:translate-y-10 transition-transform duration-300 text-white">
                              <UilCheckCircle />
                            </div>
                          ) : null}
                        </div>
                      </>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="iphone__screen caret-transparent">
      <div className="flex justify-between items-center flex-col mt-4">
        <div className="text-neutral-700 flex items-center">Poke Booklets</div>
        <div className="text-neutral-700 flex justify-center items-center bg-red-200 rounded-xl text-xs h-10 lg:w-1/12">
          <Link to={"/create"} className="px-4">Create Yours!</Link>
        </div>
      </div>
      <div className="text-neutral-700 text-xs rounded-lg flex mt-6 mb-8 lg:mb-12 w-10/12 lg:w-6/12 lg:items-center lg:justify-center text-left mx-auto">
        Poke Booklets is for people who want to interact with others over their
        Pokemon card collectibles through their digital booklets!
      </div>
      {temp.length > 0 ? (
        temp.map((item, index) => (
          <div key={index}>{item}</div>
        ))
      ) : (
        <div className="loader"></div>
      )}
    </div>
  );
}
