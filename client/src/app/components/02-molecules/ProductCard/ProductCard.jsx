import { isNewItem } from "./utils/isNew";
import { isDiscounted } from "./utils/isDiscounted";

const ProductCard = ({
  name,
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
        className="flex flex-col h-full w-full text-gray-800 bg-white gap-1"
      >
        <div className="bg-gray-100 h-full">
          <div className="h-[120vw] max-h-[700px] min-h-full flex flex-col justify-end relative overflow-hidden">
            <div className="h-full absolute top-0 right-0 bottom-0 left-0 overflow-hidden">
              <div className="w-full h-full max-h-[500px]">
                <img
                  src={PictureUrl}
                  alt=""
                  className="h-full w-full absolute inset-0 object-cover z-10 max-h-[500px]"
                />
              </div>
            </div>
          </div>
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
