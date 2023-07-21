import type { Meta, StoryObj } from '@storybook/react'
import { Spacer, VerticalStepper } from '../..'
import { useState } from 'react'
import { StepperRawItem, getStepperItems } from './VerticalStepper'

const meta: Meta<typeof VerticalStepper> = {
  title: 'Components/Wizards/VerticalStepper',
  component: VerticalStepper
}

export default meta

type Story = StoryObj<typeof VerticalStepper>

export const Main: Story = {
  render: () => {
    const [focusedId, setFocusedId] = useState('2')

    const items: StepperRawItem[] = [
      {
        id: '1',
        label: 'label 1'
      },
      {
        id: '2',
        label: 'label 2'
      },
      {
        id: '3',
        label: 'label 3'
      },
      {
        id: '4',
        label: 'label 4'
      },
      {
        id: '5',
        label: 'label 5'
      }
    ]

    return (
      <>
        <VerticalStepper items={getStepperItems(items, focusedId)} onItemClick={setFocusedId} />
        <Spacer size={40} />
        <VerticalStepper items={getStepperItems(items, focusedId, '3')} onItemClick={setFocusedId} />
        <Spacer size={40} />
      </>
    )
  }
}
