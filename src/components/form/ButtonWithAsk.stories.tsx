import type { Meta, StoryObj } from '@storybook/react'
import { ButtonWithAsk, loremIpsum } from '../..'

const meta: Meta<typeof ButtonWithAsk> = {
  title: 'Components/Form/ButtonWithAsk',
  component: ButtonWithAsk
}

export default meta

type Story = StoryObj<typeof ButtonWithAsk>

export const Main: Story = {
  render: () => (
    <ButtonWithAsk
      buttonProps={{ label: 'Action' }}
      actionWithAskProps={{
        centerCardModalProps: {
          modalWrapperProps: { title: 'Are you sure?' }
        }
      }}
    >
      <p>{loremIpsum}</p>
    </ButtonWithAsk>
  )
}
