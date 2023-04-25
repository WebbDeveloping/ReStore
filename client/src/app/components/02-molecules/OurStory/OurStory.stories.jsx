import OurStory from "./OurStory";

const Component = {
  title: "inflight-02-molecules/OurStory",
  component: OurStory,
};

export default Component;

const Template = (args) => <OurStory {...args} />;

export const Default = Template.bind({});
Default.args = {
  heading: "Prepare Your Cat for Battle with Stealthy Whiskers",
  body: "At Stealthy Whiskers, we're more than just a store that sells cat gear. We're passionate cat owners and military enthusiasts who want to help other cat owners train their furry friends to become skilled and prepared warriors. Learn more about our story and how we got started on our mission to help cats become the best they can be.",
  button1: {
    text: "ShoP All",
    link: "/shop",
  },
  button2: {
    text: "Our story",
    link: "/about",
  },
};

export const NoButton = Template.bind({});
NoButton.args = {
  heading: "Prepare Your Cat for Battle with Stealthy Whiskers",
  body: "At Stealthy Whiskers, we're more than just a store that sells cat gear. We're passionate cat owners and military enthusiasts who want to help other cat owners train their furry friends to become skilled and prepared warriors. Learn more about our story and how we got started on our mission to help cats become the best they can be.",
};
