import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import { slides } from "./utils/slides";
import { Button } from "../../../../stories/Button";

function Hero(props) {
  const settings = {
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    appendDots: (dots) => (
      <div className="slider-nav">
        <ul className="slider-nav-ul">{dots}</ul>
      </div>
    ),
    customPaging: (i) => <div className="slick-dots" />,
    vertical: true,
    verticalSwiping: false,
    beforeChange: function (currentSlide, nextSlide) {
      console.log("before change", currentSlide, nextSlide);
    },
    afterChange: function (currentSlide) {
      console.log("after change", currentSlide);
    },
  };

  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        style={{ ...style, display: "block" }}
        className="absolute bottom-[36px] w-[48px] h-[48px] border-[1px] border-[#feffff33] rounded-full justify-center items-center p-0 flex top-auto right-auto left-0 z-10"
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

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        style={{ ...style, display: "block" }}
        className="absolute left-auto right-0 bottom-[36px] w-[48px] h-48px] border-[1px] border-[#feffff33] rounded-full justify-center items-center p-0 flex top-auto z-10"
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

  return (
    <Slider {...settings}>
      {slides.map((slide, index) => (
        <div
          key={index}
          className="w-full h-[93vh] !flex justify-center items-center pt-20 pb-40 relative z-30 flex-col"
        >
          <img
            src={slide.image}
            alt=""
            className="absolute inset-0 object-cover w-full h-full z-0"
          />
          <div className="relative grid justify-center text-center text-white max-w-[800px] z-40 p-2">
            <h1 className="text-5xl font-semibold uppercase m-0 mb-8">
              {slide.title}
            </h1>
            <div className="button-wrapper">
              <Button
                primary={true}
                size="small"
                label={slide.button.text}
                link={slide.button.link}
                backgroundColor="bg-white"
              />
            </div>
          </div>
        </div>
      ))}
    </Slider>
  );
}

export default Hero;
