import React from "react";

import { Story, Meta } from "@storybook/react";

import Logo, { LogoProps } from "./Logo";

export default {
  title: "Logo",
  component: Logo,
} as Meta;

export const Default: Story<LogoProps> = (args) => <Logo {...args} />;

Default.args = {
  title: "rodrigo.",
  color: "dark",
};
