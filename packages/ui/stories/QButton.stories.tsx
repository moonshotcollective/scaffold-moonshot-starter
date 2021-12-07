import { Meta, Story } from '@storybook/react';
import React from 'react';
import { ButtonProps, QButton } from '../src/components/button';

const meta: Meta = {
  title: 'Components/QButtonExample',
  component: QButton,
  argTypes: {
    text: {
      control: {
        type: 'text',
      },
    },
  },
  parameters: {
    controls: { expanded: true },
  },
};
export default meta;
const Template: Story<ButtonProps> = (args) => <QButton {...args} />;
export const Default = Template.bind({});
Default.args = {
  variant: 'solid',
  children: 'My Button 1',
};
