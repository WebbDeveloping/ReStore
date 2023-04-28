import FollowUs from "./FollowUs";

const Component = {
  title: "03-organisms/FollowUs",
  component: FollowUs,
};

const Template = (args) => <FollowUs {...args} />;
export const Default = Template.bind({});
Default.args = {};
export default Component;
