import type { Meta, StoryObj } from '@storybook/react'
import { enumToArray } from '../../utils/common'
import { ColorType } from '../../common/enums/colorType'
import { Spacer, TextField } from '../..'

const meta: Meta<typeof TextField> = {
  title: 'Components/Modals/TextField',
  component: TextField
}

export default meta

type Story = StoryObj<typeof TextField>

export const Main: Story = {
  render: (args) => (
    <>
      {enumToArray(ColorType).map((colorType) => (
        <>
          <TextField {...args} colorType={colorType} label={colorType} />
          <Spacer />
          <TextField {...args} colorType={colorType} label={colorType} hintText="hint" />
          <Spacer />
        </>
      ))}
    </>
  )
}
