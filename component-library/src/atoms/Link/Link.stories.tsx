import React from 'react';
import {ComponentStory} from "@storybook/react"
import {Link} from './Link';

export default {
  title: 'Atoms/Link',
  component: Link,
  argTypes: {
    text: { control: 'text' },
  },
};

const Template : ComponentStory<typeof Link> = (args) => <Link {...args} />;

export const Default = Template.bind({});
Default.args = {
};

export const RedLink = Template.bind({});
RedLink.args = {
  text: 'SignIn',
  color: 'red',
  href: '#',
};

export const BlueLink = Template.bind({});
BlueLink.args = {
  text: 'SignOut',
  color: 'blue',
  href: 'https://www.google.com'
};
