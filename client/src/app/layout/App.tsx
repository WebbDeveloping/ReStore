import React, { useState, useEffect } from "react";

import Catalog from "../../features/catalog/Catalog";
import { Product } from "../models/products";
import "./App.css";
import "../../global.css";
import "./styles.css";
import Hero from "../components/02-molecules/Hero/Hero";

function App() {
  const [products, setProducts] = useState<Product[]>([]);

  function addProduct() {
    setProducts((prevState) => [
      ...prevState,
      {
        id: prevState.length + 101,
        name: "product" + (prevState.length + 1),
        price: prevState.length * 100 + 100,
        brand: "some brand",
        handle: "some handle",
        category: "some category",
        description: "some description",
        pictureUrl: "http://picsum.photos/200",
      },
    ]);
  }

  useEffect(() => {
    fetch("http://localhost:5000/api/products", {
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      });
  }, []);

  return (
    <div className="">
      <section className="min-h-[93vh] bg-[#080808] flex justify-center">
        <div className="w-full overflow-hidden">
          <Hero />
        </div>
      </section>
      {/* <Catalog products={products} addProduct={addProduct} /> */}
    </div>
  );
}

export default App;
