export default function RenderCarousel({ carouselImg, setBook, book }) {
  function renderImgs(val) {
    for (let i = 0; i < val.length; i += 2) {
      return (
        <div className="flex mt-2 mb-2">
          {val.slice(i, i + 2).map((item) => (
            <div>
              <button
                className="btn w-16 h-8 bg-slate-600 rounded-xl text-center"
                onClick={() => setBook((book) => [...book, item.images.small])}
              >
                + {item.images.small}
              </button>
              <img className="carousel__card" src={item.images.small} />
            </div>
          ))}
        </div>
      );
    }
  }
  return <>{renderImgs(carouselImg)}</>;
}
