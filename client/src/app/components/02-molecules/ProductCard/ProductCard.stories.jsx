import ProductCard from "./ProductCard";

const Component = {
  title: "02-molecules/ProductCard",
  component: ProductCard,
};

const Template = (args) => <ProductCard {...args} />;
export const Primary = Template.bind({});

Primary.args = {
  name: "Cat-Eye Goggles",
  Description:
    "Cat Eye Shields are the ultimate in military-grade protective eyewear for cats. Designed to protect your feline friend's eyes during any mission, these goggles are made with the highest quality materials to provide maximum protection against wind, dust, and other potential hazards.",
  Price: 20000,
  Handle: "cat-eye-goggles",
  Category: "Tactical Gear",
  PictureUrl:
    "https://uploads-ssl.webflow.com/642fc428f0c0b942b1ba7a71/642fc6e30d1ede73497f655c_11.png",
  Brand: "Angular",
  Type: "Advanced",
  QuantityInStock: 100,
  discount: false,
  isNew: false,
};

export const New = Template.bind({});
New.args = {
  name: "Cat-Eye Goggles",
  Description:
    "Cat Eye Shields are the ultimate in military-grade protective eyewear for cats. Designed to protect your feline friend's eyes during any mission, these goggles are made with the highest quality materials to provide maximum protection against wind, dust, and other potential hazards.",
  Price: 20000,
  Handle: "cat-eye-goggles",
  Category: "Tactical Gear",
  PictureUrl:
    "https://uploads-ssl.webflow.com/642fc428f0c0b942b1ba7a71/642fc6e30d1ede73497f655c_11.png",
  Brand: "Angular",
  Type: "Advanced",
  QuantityInStock: 100,
  discount: false,
  isNew: true,
};

export const Discount = Template.bind({});
Discount.args = {
  name: "Cat-Eye Goggles",
  Description:
    "Cat Eye Shields are the ultimate in military-grade protective eyewear for cats. Designed to protect your feline friend's eyes during any mission, these goggles are made with the highest quality materials to provide maximum protection against wind, dust, and other potential hazards.",
  Price: 20000,
  Handle: "cat-eye-goggles",
  Category: "Tactical Gear",
  PictureUrl:
    "https://uploads-ssl.webflow.com/642fc428f0c0b942b1ba7a71/642fc6e30d1ede73497f655c_11.png",
  Brand: "Angular",
  Type: "Advanced",
  QuantityInStock: 100,
  discount: true,
  isNew: false,
};

export default Component;
