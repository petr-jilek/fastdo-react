import type { Meta, StoryObj } from "@storybook/react"
import Button from "./Button"

const meta: Meta<typeof Button> = {
  title: "Button",
  component: Button,
}

export default meta
type Story = StoryObj<typeof Button>

export const Primary: Story = {
  render: () => <Button label="Button" />,
}

export const PrimaryLoading: Story = {
  render: () => <Button label="Button" loading />,
}

export const Outlined: Story = {
  render: () => <Button label="Button" outlined />,
}

export const OutlinedLoading: Story = {
  render: () => <Button label="Button" outlined loading />,
}

export const Danger: Story = {
  render: () => <Button label="Button" danger />,
}

export const DangerLoading: Story = {
  render: () => <Button label="Button" danger loading />,
}

export const DangerOutlined: Story = {
  render: () => <Button label="Button" danger outlined />,
}

export const DangerOutlinedLoading: Story = {
  render: () => <Button label="Button" danger outlined loading />,
}

export const Disabled: Story = {
  render: () => <Button label="Button" disabled />,
}

export const DisabledLoading: Story = {
  render: () => <Button label="Button" disabled loading />,
}

export const DisabledOutlined: Story = {
  render: () => <Button label="Button" disabled outlined />,
}

export const DisabledOutlinedLoading: Story = {
  render: () => <Button label="Button" disabled outlined loading />,
}
