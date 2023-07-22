import type { Meta, StoryObj } from '@storybook/react'
import { Spacer, CircularStepper } from '../..'
import { useState } from 'react'

const meta: Meta<typeof CircularStepper> = {
  title: 'Components/Wizards/CircularStepper.stories',
  component: CircularStepper
}

export default meta

type Story = StoryObj<typeof CircularStepper>

export const Main: Story = {
  render: () => {
    return (
      <>
        <CircularStepper value={50} label="1" />
        <Spacer size={40} />
      </>
    )
  }
}
