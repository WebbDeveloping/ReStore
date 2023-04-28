import ProductCard from "../../02-molecules/ProductCard/ProductCard";
import { products } from "./utils/products";

function ProductGrid(props) {
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
      <div className="grid grid-cols-2 gap-x-1 gap-y-6">
        {products &&
          products.map((product, index) => (
            <ProductCard
              key={index}
              name={product.name}
              Price={product.Price}
              Handle={product.Handle}
              Category={product.Category}
              PictureUrl={product.PictureUrl}
              isNew={product.isNew}
              discount={product.discount}
            />
          ))}
      </div>
    </div>
  );
}

export default ProductGrid;
