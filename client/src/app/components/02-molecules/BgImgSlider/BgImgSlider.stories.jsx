import BgImgSlider from "./BgImgSlider";
import { slides } from "./utils/slides";

const Component = {
  title: "02-molecules/BgImgSlider",
  component: BgImgSlider,
};

export default Component;

const Template = (args) => <BgImgSlider {...args} />;
export const Default = Template.bind({});
Default.args = {
  slides: slides,
};
