import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import { products } from "./utils/products";

function BestSelling(props) {
  console.log(products);
  const settings = {
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    adaptiveHeight: true,
  };
  return (
    <div className="relative flex flex-col w-full z-20 py-10">
      <div className="text-center mb-9">
        <div className="flex flex-col">
          <div className="text-sm uppercase text-[#667479 ] font-thin">
            Popular
          </div>
          <h2 className="text-3xl">Best Selling</h2>
        </div>
      </div>
      <Slider {...settings}>
        {products.length &&
          products.map((product) => (
            <div className="w-full h-full">
              <a
                href="/product/meowtary-grenade-harness"
                className="flex flex-col h-full w-full text-[#080808] bg-white gap-1"
              >
                <div className="bg-[#f4f8fa] h-full">
                  <div className="card-image extra-large h-[120vw] max-h-[700px] min-h-full flex flex-col justify-end relative overflow-hidden">
                    <div className="background-product h-full absolute top-0 right-0 bottom-0 left-0 overflow-hidden">
                      <div className="image-card one w-full h-full max-h-[500px]">
                        <img
                          //   src="https://assets.website-files.com/642fc428f0c0b942b1ba7a71/6430547f5c315878aebd267f_gren-3.png"
                          src={product.PictureUrl}
                          alt=""
                          className="h-full w-full absolute inset-0 object-cover z-10 max-h-[500px]"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="px-3 flex flex-col items-start justify-start py-3 pr-4 pl-5 gap-3">
                  <div className="product-card-top flex flex-col gap-3 justify-start items-start w-full">
                    <div className="product-card-info flex flex-col gap-4">
                      <div className="product-tags flex">
                        <div className="new-tag w-condition-invisible hidden">
                          <div className="label-text">New</div>
                        </div>
                        <div className="discount-label w-condition-invisible hidden">
                          <img
                            src="https://assets.website-files.com/642fc428f0c0b966d5ba7a46/642fc428f0c0b989cbba7b18_tag---filled-Red(24x24)%402x.svg"
                            alt=""
                            className="tag-icon h-[10px]"
                          />
                          <div className="label-text discount w-dyn-bind-empty"></div>
                        </div>
                      </div>
                      <div className="stacked-product-title flex flex-col justify-start items-start gap-2">
                        <h3 className="product-title font-medium text-xl transform-none m-0">
                          {product.name}
                        </h3>
                        <div className="subtitle small text-sm uppercase font-light ">
                          Cool black
                        </div>
                      </div>
                      <div className="dynamic-price">
                        <div className="price-text">$&nbsp;69.00&nbsp;USD</div>
                        <div className="discount"></div>
                      </div>
                    </div>
                    <div className="product-card-buttons">
                      <div className="product-card-button w-commerce-commerceaddtocartbutton">
                        <button
                          type="submit"
                          className="w-commerce-commerceaddtocartbutton add-to-cart-button"
                        >
                          Add to cart
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          ))}
      </Slider>
    </div>
  );
}

export default BestSelling;
