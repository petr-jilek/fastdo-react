import type { Meta, StoryObj } from '@storybook/react'
import { Spacer, TextWithCopy, loremIpsum } from '../..'
import { useState } from 'react'

const meta: Meta<typeof TextWithCopy> = {
  title: 'Components/Wizards/TextWithCopy',
  component: TextWithCopy
}

export default meta

type Story = StoryObj<typeof TextWithCopy>

export const Main: Story = {
  render: () => {
    return (
      <>
        <TextWithCopy text="Some text to copy" />
        <Spacer size={40} />
        <TextWithCopy text={loremIpsum} />
        <Spacer size={40} />
        <TextWithCopy text="Someeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee text to copy" />
      </>
    )
  }
}
