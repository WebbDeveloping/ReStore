import BestSelling from "./BestSelling";

const Component = {
  title: "02-molecules/BestSelling",
  component: BestSelling,
};

export default Component;

const Template = (args) => <BestSelling {...args} />;

export const Default = Template.bind({});
Default.args = {
  slides: [
    {
      title: "GEAR FOR MODERN FELINE WARRIORS",
      pictureUrl:
        "https://assets.website-files.com/642fc428f0c0b966d5ba7a46/64305b7668eac9572d4d606a_bg-4.webp",
      button: {
        text: "Shop Now One",
        link: "/catalog",
      },
    },
    {
      title: "GEAR FOR MODERN FELINE WARRIORS",
      pictureUrl:
        "https://assets.website-files.com/642fc428f0c0b966d5ba7a46/64305b76ca8aeb71e222e610_bg-5.webp",
      button: {
        text: "Shop Now Two",
        link: "/catalog",
      },
    },
    {
      title: "GEAR FOR MODERN FELINE WARRIORS",
      pictureUrl:
        "https://assets.website-files.com/642fc428f0c0b966d5ba7a46/64305b76ca8aeb71e222e610_bg-5.webp",
      button: {
        text: "Shop Now Three",
        link: "/catalog",
      },
    },
  ],
};
