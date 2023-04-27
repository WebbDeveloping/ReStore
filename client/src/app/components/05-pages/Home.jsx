import ActionSection from "../02-molecules/ActionSection/ActionSection";
import BestSelling from "../02-molecules/BestSelling/BestSelling";
import BgImgSlider from "../02-molecules/BgImgSlider/BgImgSlider";
import FeaturedProducts from "../02-molecules/FeaturedProduct/FeaturedProducts";
import Hero from "../02-molecules/Hero/Hero";
import Navigation from "../02-molecules/Navigation/Navigation";
import OurStory from "../02-molecules/OurStory/OurStory";
import ProductGrid from "../02-molecules/ProductGrid/ProductGrid";

export default function Home() {
  return (
    <div className="home">
      <div className="w-full">
        <Navigation />
        <section className="min-h-[93vh] flex flex-col justify-center items-centerr">
          <div className="w-full">
            <Hero />
          </div>
        </section>
        <section className="h-full bg-[#ffffff] flex justify-center">
          <div className="container">
            <OurStory className="mx-auto w-full overflow-hidden" />
          </div>
        </section>
        <section className="py-8 overflow-x-hidden flex justify-center items-start">
          {/* <Catalog products={products} addProduct={addProduct} slides={[]} /> */}
          <BestSelling />
        </section>
        <section className="py-10 flex flex-col items-center">
          <BgImgSlider />
          <br />
          <ProductGrid />
        </section>
        <section className="relative pb-16 flex justify-center max-w-[100%]">
          <FeaturedProducts />
        </section>
        <section>
          <ActionSection />
        </section>
      </div>
    </div>
  );
}
