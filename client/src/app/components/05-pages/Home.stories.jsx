import Home from "./Home";

const Component = {
  title: "05-pages/Home",
  component: Home,
};

const Template = (args) => <Home {...args} />;
export const Primary = Template.bind({});
Primary.args = {};
export default Component;
