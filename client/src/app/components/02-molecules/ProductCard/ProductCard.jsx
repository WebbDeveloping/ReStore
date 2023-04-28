import { isNewItem } from "./utils/isNew";
import { isDiscounted } from "./utils/isDiscounted";
import ProductImage from "../../01-atoms/ProductImage/ProductImage";

const ProductCard = ({
  name,
  Description,
  Price,
  Handle,
  Category,
  PictureUrl,
  isNew,
  discount,
}) => {
  return (
    <div className="w-full h-full">
      <a
        href={`/product/${Handle}`}
        className="flex flex-col  text-gray-800 bg-white gap-1"
      >
        <div className="bg-gray-100 h-full overflow-hidden">
          <ProductImage
            src={PictureUrl}
            alt={name}
            height={300}
            width={200}
            borderRadius={10}
            borderColor="#ccc"
            borderWidth={1}
            shadowColor="#000"
            shadowBlur={5}
          />
        </div>
        <div className="px-3 flex flex-col items-start justify-start py-3 pr-4 pl-5 gap-3">
          <div className="flex flex-col gap-3 justify-start items-start w-full">
            <div className="flex flex-col gap-4">
              {isNewItem(isNew)}
              <div className="flex flex-col justify-start items-start gap-2">
                <h3 className="font-medium text-xl transform-none m-0">
                  {name}
                </h3>
                <div className="text-sm uppercase font-light ">{Category}</div>
              </div>
              <div className="text-md">{isDiscounted(Price, discount)}</div>
            </div>
          </div>
        </div>
      </a>
    </div>
  );
};

export default ProductCard;
