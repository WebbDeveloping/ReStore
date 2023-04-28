import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import { slides } from "./utils/slides";

function TestimonialSlider() {
  const settings = {
    // dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
  };

  return (
    <div className="section py-14">
      <div className="px-[5vw] relative flex flex-col items-start justify-center">
        <Slider {...settings}>
          {slides.map((slide, index) => {
            return (
              <div className="testimonial-slide w-slide px-4">
                <div className="testimonial">
                  <div className="flex flex-col items-center justify-start gap-x-4 gap-y-8 text-center">
                    <div className="width-extra-large max-w-5xl">
                      <h2 className="heading large text-3xl font-semibold uppercase">
                        {slide.title}
                      </h2>
                    </div>
                    <div className="testimonial-name">
                      <div className="subtitle text-sm text-[#667479] uppercase font-light">
                        {slide.author}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
}

export default TestimonialSlider;
