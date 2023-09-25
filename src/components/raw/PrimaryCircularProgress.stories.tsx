import type { Meta, StoryObj } from '@storybook/react'
import { PrimaryCircularProgress, Spacer } from '../..'

const meta: Meta<typeof PrimaryCircularProgress> = {
  title: 'Components/Raw/PrimaryCircularProgress',
  component: PrimaryCircularProgress,
  argTypes: {
    size: {
      control: {
        type: 'range',
        min: 0,
        max: 200,
        step: 1
      }
    }
  }
}

export default meta

type Story = StoryObj<typeof PrimaryCircularProgress>

export const Main: Story = {
  render: (args) => (
    <>
      <PrimaryCircularProgress />
      <Spacer />
      <PrimaryCircularProgress size={args.size} />
      <Spacer />
      <PrimaryCircularProgress color="var(--fd-danger-color)" />
      <Spacer />
      <PrimaryCircularProgress size={args.size} color="var(--fd-danger-color)" />
    </>
  )
}
