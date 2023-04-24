import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import { slides } from "./utils/slides";
import { Button } from "../../../../stories/Button";
import { NextArrow, PrevArrow } from "./utils/HeroArrows";

function Hero(props) {
  const settings = {
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    appendDots: (dots) => (
      <div className="slider-nav">
        <ul className="slider-nav-ul">{dots}</ul>
      </div>
    ),
    customPaging: (i) => <div className="slick-dots" />,
    vertical: true,
    verticalSwiping: false,
    beforeChange: (currentSlide, nextSlide) => {
      const prevSlideElement = document.querySelector(
        `[data-index="${currentSlide}"]`
      );

      const nextSlideElement = document.querySelector(
        `[data-index="${nextSlide}"]`
      );

      if (prevSlideElement && nextSlideElement) {
        prevSlideElement.classList.add("prev-slide-anim");
        nextSlideElement.classList.add("next-slide-anim");
      }
    },
    afterChange: function (currentSlide) {
      const currentSlideElement = document.querySelector(
        `[data-index="${currentSlide}"]`
      );
      if (currentSlideElement) {
        currentSlideElement.classList.remove("prev-slide-anim");
        currentSlideElement.classList.remove("next-slide-anim");
      }
    },
  };

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
