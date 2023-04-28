import { Product } from "../../app/models/products";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import {
  NextArrow,
  PrevArrow,
} from "../../app/components/03-organisms/Hero/utils/HeroArrows";

interface Props {
  products: Product[];
  addProduct: () => void;
}

export default function Catalog({ products, addProduct }: Props) {
  const settings = {
    // dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,

    arrows: true,
    centerMode: true,
    // centeredPadding: "60px",
    className: "center",
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };
  return (
    <div className="relative flex flex-col w-full z-20 pt-10">
      <div className="text-center">
        <div className="flex flex-col">
          <div className="text-sm uppercase text-[#667479 ] font-thin">
            Popular
          </div>
          <h2 className="text-3xl">Best Selling</h2>
        </div>
      </div>
      <ul {...settings}>
        {products.map((product) => (
          <li key={product.id}>
            {product.name} - ${product.price}
          </li>
        ))}
      </ul>
      <button onClick={addProduct}>Add Product</button>
    </div>
  );
}
