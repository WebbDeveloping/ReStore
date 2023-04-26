import React, { useState, useEffect } from "react";

import Catalog from "../../features/catalog/Catalog";
import { products } from "../components/02-molecules/BestSelling/utils/products";
import { Product } from "../models/products";
import "./App.css";
import "../../global.css";
import "./styles.css";
import Hero from "../components/02-molecules/Hero/Hero";
import Navigation from "../components/02-molecules/Navigation/Navigation";
import OurStory from "../components/02-molecules/OurStory/OurStory";
import Carousel from "../components/02-molecules/Carousel/Carousel";
import BestSelling from "../components/02-molecules/BestSelling/BestSelling";

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

  // useEffect(() => {
  //   fetch("http://localhost:5000/api/products", {
  //     headers: {
  //       "Access-Control-Allow-Origin": "*",
  //     },
  //   })
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setProducts(data);
  //     });
  // }, []);

  return (
    <div className="w-full">
      <Navigation />
      <section className="min-h-[93vh] bg-[#080808] flex justify-center w-full">
        <div className="w-full overflow-hidden">
          <Hero />
        </div>
      </section>
      <section className="min-h-[93vh] bg-[#ffffff] flex justify-center">
        <div className="container mx-auto w-full overflow-hidden">
          <OurStory />
        </div>
      </section>
      <section className="py-16 overflow-x-hidden">
        <Carousel />
      </section>
      <section className="py-8 overflow-x-hidden flex justify-center items-start">
        {/* <Catalog products={products} addProduct={addProduct} slides={[]} /> */}
        <BestSelling />
      </section>
    </div>
  );
}

export default App;
