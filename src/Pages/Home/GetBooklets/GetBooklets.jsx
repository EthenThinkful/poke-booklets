import { useEffect, useState } from "react";
import axios from "axios";
import BookletPage from "./BookletPage";

export default function GetBooklets({ serverAddress, defaultImg }) {
  const [isDeleted, setIsDeleted] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [bookletData, setBookletData] = useState([]);
  const [book, setBook] = useState([]); // Assuming this state is used elsewhere

  // get all users and all their data
  useEffect(() => {
    axios.get(`${serverAddress}/api/users`).then((res) => {
      setBookletData(res.data);
    });
  }, []);

  // capture current window size
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // show 2 booklets side by side for desktop and 1 for mobile
  let chunkSize = windowWidth < 992 ? 1 : 2;
  // don't render users to the home screen unless they have at least 1 card in their booklet
  let removedBooklets = bookletData.filter((item) => item.cardData.length > 0);
  let temp = [];

  //Iterates over users with pokemon cards in thre booklet and renders each
  for (let i = 0; i < removedBooklets.length; i += chunkSize) {
    //grabs 1 or 2 of the users based on screen size (for mobile it is 1)
    let chunk = removedBooklets.slice(i, i + chunkSize);
    // const totalNumPages = item.cardData.length / 6
    // for 1 user (mobile) this is rendering one html component for that
    let totalNumPages;
    temp.push(
      <div className="lg:flex caret-transparent lg:justify-between" key={i}>
        {chunk.map((item, index) =>
          item.cardData.length > 0
            ? (console.log(
                (totalNumPages = Math.ceil(item.cardData.length / 6))
              ),
              (totalNumPages = Math.ceil(item.cardData.length / 6)),
              (
                <div
                  className="text-neutral-700 text-sm lg:flex lg:justify-center lg:items-center lg: mx-2"
                  key={index}
                >
                  <div>
                    <div className="flex flex-col lg:px-8 max-w max-w-[320px] lg:max-w-[510px] mx-auto justify-center items-center">
                      <div className="flex flex-row-reverse items-center">
                        <div className="text-center flex h-full items-center">
                          {item.nickName.length > 0 ? item.nickName : "Trainer"}
                          's Booklet
                        </div>

                        <img
                          src={
                            item.profilePic != null
                              ? item.profilePic
                              : defaultImg
                          }
                          className="w-[30px] h-[30px] rounded-md mr-4"
                        />
                      </div>
                        <BookletPage totalNumPages={totalNumPages} item={item} />             
                    </div>
                  </div>
                </div>
              ))
            : null
        )}
      </div>
    );
  }

  return (
    <div className="iphone__screen caret-transparent">
      <div className="flex justify-between items-center flex-col mt-4">
        <div className="text-neutral-700 flex items-center">Poke Booklets</div>
      </div>
      <div className="text-neutral-700 text-xs rounded-lg flex mt-6 mb-8 lg:mb-12 w-10/12 lg:w-6/12 lg:items-center lg:justify-center text-left mx-auto">
        Poke Booklets is for people who want to interact with others over their
        Pokemon card collectibles through their digital booklets!
      </div>
      {temp.length > 0 ? (
        temp.map((item, index) => <div key={index}>{item}</div>)
      ) : (
        <div className="loader"></div>
      )}
    </div>
  );
}
