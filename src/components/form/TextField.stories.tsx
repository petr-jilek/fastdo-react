import type { Meta, StoryObj } from '@storybook/react'
import { enumToArray } from '../../utils/common'
import { ColorType } from '../../common/enums/colorType'
import { Spacer, TextField } from '../..'

const meta: Meta<typeof TextField> = {
  title: 'Components/Form/TextField',
  component: TextField
}

export default meta

type Story = StoryObj<typeof TextField>

export const Main: Story = {
  render: (args) => (
    <>
      {enumToArray(ColorType).map((colorType) => (
        <>
          <TextField {...args} colorType={colorType} hintColorType={colorType} label={colorType} />
          <Spacer />
          <TextField {...args} colorType={colorType} hintColorType={colorType} label={colorType} hintText="hint" />
          <Spacer />
          <TextField {...args} type="number" colorType={colorType} hintColorType={colorType} label={colorType} />
          <Spacer />
          <TextField {...args} type="date" colorType={colorType} hintColorType={colorType} label={colorType} />
          <Spacer size={40} />
        </>
      ))}
    </>
  )
}
