import type { Meta, StoryObj } from '@storybook/react'
import { enumToArray } from '../../utils/common'
import { ColorType } from '../../common/enums/colorType'
import { Spacer, Button } from '../..'

const meta: Meta<typeof Button> = {
  title: 'Button',
  component: Button
}

export default meta

type Story = StoryObj<typeof Button>

export const Main: Story = {
  render: (args) => (
    <>
      {enumToArray(ColorType).map((colorType) => (
        <div key={colorType} style={{ display: 'flex', marginBottom: '10px' }}>
          <Button {...args} colorType={colorType} label={colorType} />
          <Spacer horizontal />
          <Button {...args} colorType={colorType} label={colorType} loading />
          <Spacer horizontal />
          <Button {...args} colorType={colorType} label={colorType} outlined />
          <Spacer horizontal />
          <Button {...args} colorType={colorType} label={colorType} outlined loading />
        </div>
      ))}
    </>
  )
}
