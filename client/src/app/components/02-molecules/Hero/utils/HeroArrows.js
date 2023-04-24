export function NextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      style={{ ...style, display: "block" }}
      className="absolute bottom-[36px] w-[48px] h-[48px] border-[1px] border-[#feffff33] rounded-full justify-center items-center p-0 flex top-auto md:right-[50%] md:left-[35%] right-auto left-[12%] z-10"
      onClick={onClick}
    >
      <div className="slider-arrow-wrapper p-2 rounded-full border">
        <img
          src="https://assets.website-files.com/642fc428f0c0b966d5ba7a46/642fc428f0c0b99416ba7a5c_arrow-left(24x24)%402x%20(5).svg"
          loading="lazy"
          alt=""
          className="slider-arrow"
        />
      </div>
    </div>
  );
}

export function PrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      style={{ ...style, display: "block" }}
      className="absolute md:left-[65%] md:right-[35%] right-auto left-[75%] bottom-[36px] w-[48px] h-48px] border-[1px] border-[#feffff33] rounded-full justify-center items-center p-0 flex top-auto z-10"
      onClick={onClick}
    >
      <div className="slider-arrow-wrapper p-2 rounded-full border">
        <img
          src="https://assets.website-files.com/642fc428f0c0b966d5ba7a46/642fc428f0c0b93258ba7a56_arrow-right(24x24)%402x%20(5).svg"
          loading="lazy"
          alt=""
          className="slider-arrow"
        />
      </div>
    </div>
  );
}
