import BestSelling from "./BestSelling";
import { products } from "../../../TestData/products";

const Component = {
  title: "03-organisms/BestSelling",
  component: BestSelling,
};

export default Component;

const Template = (args) => <BestSelling {...args} />;

export const Default = Template.bind({});
Default.args = {
  slides: products,
};
