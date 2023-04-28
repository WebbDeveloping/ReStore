import ProductCard from "../../02-molecules/ProductCard/ProductCard";

function ProductGrid({ products }) {
  console.log("Best Selling", products);
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
      <div className="grid grid-cols-2 gap-x-2 gap-y-6">
        {products.map((product, index) => {
          return (
            <ProductCard
              key={index}
              name={product.name}
              Description={product.Description}
              Price={product.Price}
              Handle={product.Handle}
              Category={product.Category}
              PictureUrl={product.PictureUrl}
              Brand={product.Brand}
              Type={product.Type}
              QuantityInStock={product.QuantityInStock}
              isNew={product.isNew}
              discount={product.discount}
              isBestSelling={product.isBestSelling}
            />
          );
        })}
      </div>
    </div>
  );
}

export default ProductGrid;
