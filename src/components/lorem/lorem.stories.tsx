import type { Meta, StoryObj } from '@storybook/react';
import Lorem from './lorem';

const meta = {
  title: 'Content/Lorem',
  component: Lorem,
} satisfies Meta<typeof Lorem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {};
