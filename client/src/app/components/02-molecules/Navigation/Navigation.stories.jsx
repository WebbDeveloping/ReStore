import Navigation from "./Navigation";

const Component = {
  title: "inflight-02-molecules/Navigation",
  component: Navigation,
};

export default Component;

const Template = (args) => <Navigation {...args} />;

export const Default = Template.bind({});
Default.args = {
  links: [
    {
      text: "Home",
      link: "/",
    },
    {
      text: "Catalog",
      link: "/catalog",
    },
    {
      text: "About",
      link: "/about",
    },
    {
      text: "Contact",
      link: "/contact",
    },
  ],
};
