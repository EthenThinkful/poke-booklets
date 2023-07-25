import { Carousel } from "react-responsive-carousel";

export default function RenderCarousel({ carouselImg, setBook }) {
  let temp = [];
  if (carouselImg.length > 0) 
  for (let i = 0; i < carouselImg.length; i += 2) {
    let twoPack = carouselImg.slice(i, i + 2);
    if (twoPack.length > 1) {
    temp.push(
      <div className="flex mt-2 mb-2">
        <div>
          <button
            className="btn w-16 h-8 bg-slate-600 rounded-xl text-center"
            onClick={() =>
              setBook((book) => [...book, twoPack[0].images.small])
            }
          >
            +
          </button>
          <img className="carousel__card" src={twoPack[0].images.small} />
        </div>
        <div>
          <button
            className="btn w-16 h-8 bg-slate-600 rounded-xl text-center"
            onClick={() =>
              setBook((book) => [...book, twoPack[1].images.small])
            }
          >
            +
          </button>
          <img className="carousel__card" src={twoPack[1].images.small} />
        </div>
      </div>
    );
  }
}

  function renderImgs(val) {
    // console.log(val);
    return temp.map((item) => {
      return item;
    });
  }

  return (
    <>
      <Carousel
        autoFocus={true}
        showThumbs={false}
        showStatus={false}
        useKeyboardArrows
      >
        {renderImgs(temp)}
      </Carousel>
    </>
  );
}
