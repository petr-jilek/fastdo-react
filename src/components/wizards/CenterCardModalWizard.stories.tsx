import type { Meta, StoryObj } from '@storybook/react'
import { Spacer, CenterCardModalWizard } from '../..'
import { WizardItem } from './CenterCardModalWizard'
import { useState } from 'react'

const meta: Meta<typeof CenterCardModalWizard> = {
  title: 'Components/Wizards/CenterCardModalWizard',
  component: CenterCardModalWizard
}

export default meta

type Story = StoryObj<typeof CenterCardModalWizard>

const items: WizardItem[] = [
  {
    id: '1',
    label: 'label 1',
    content: <p>1</p>
  },
  {
    id: '2',
    label: 'label 2',
    content: <p>2</p>
  },
  {
    id: '3',
    label: 'label 3',
    content: <p>3</p>
  },
  {
    id: '4',
    label: 'label 4',
    content: <p>4</p>
  },
  {
    id: '5',
    label: 'label 5',
    content: <p>5</p>
  }
]

export const Main: Story = {
  render: () => {
    const [focuedId, setFocusedId] = useState('1')

    return (
      <CenterCardModalWizard
        items={items}
        focuedId={focuedId}
        doneId={'2'}
        onItemClick={setFocusedId}
        onBackClick={setFocusedId}
        onNextClick={setFocusedId}
      />
    )
  }
}

export const Loading: Story = {
  render: () => {
    const [focuedId, setFocusedId] = useState('1')

    return (
      <CenterCardModalWizard
        loading
        items={items}
        focuedId={focuedId}
        doneId={'2'}
        onItemClick={setFocusedId}
        onBackClick={setFocusedId}
        onNextClick={setFocusedId}
      />
    )
  }
}
