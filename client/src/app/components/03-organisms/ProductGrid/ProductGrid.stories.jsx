import ProductGrid from "./ProductGrid";
import { products } from "../../../TestData/products";

const Component = {
  title: "03-organisms/ProductGrid",
  component: ProductGrid,
};

export default Component;

const Template = (args) => <ProductGrid {...args} />;
export const Default = Template.bind({});

Default.args = {
  products: products,
};
