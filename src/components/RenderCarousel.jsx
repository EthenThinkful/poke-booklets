import { Carousel } from "react-responsive-carousel";

export default function RenderCarousel({ carouselImg, setBook }) {
  let temp = [];
  for (let i = 0; i < carouselImg.length; i += 2) {
    let twoPack = carouselImg.slice(i, i + 2);
    if (twoPack.length > 1) {
      // console.log(twoPack[0].id)
      // console.log(twoPack[1].id)
    temp.push(
      <div className="flex mt-2 mb-2">
        <div>
          <button
            className="btn w-16 h-8 bg-slate-600 rounded-xl text-center"
            onClick={() =>
              setBook((book) => [...book, {src: twoPack[0].src, id: twoPack[0].id}])
            }
          >
            +
          </button>
          <img className="carousel__card" src={twoPack[0].src} />
        </div>
        <div>
          <button
            className="btn w-16 h-8 bg-slate-600 rounded-xl text-center"
            onClick={() =>
              setBook((book) => [...book, {src: twoPack[1].src, id: twoPack[1].id}])
            }
          >
            +
          </button>
          <img className="carousel__card" src={twoPack[1].src} />
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
