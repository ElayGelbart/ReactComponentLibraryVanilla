import { ComponentStory } from '@storybook/react';
import React from 'react';
import {Button} from './Button';

export default {
  title: 'Atoms/Button',
  component: Button,
  argTypes: {
    text: { control: 'text' },
    onClick: { action: 'clicked' },
  },
};

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
};

export const SignIn = Template.bind({});
SignIn.args = {
  text: 'Sign In',
  onClick: () => {
    alert('Sign In');
  }
};

export const SignOut = Template.bind({});
SignOut.args = {
  text: 'Sign Out',
  onClick: () => {
    alert('Sign Out');
  }
};
