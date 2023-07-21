import type { Meta, StoryObj } from '@storybook/react'
import { enumToArray } from '../../utils/common'
import { ColorType } from '../../common/enums/colorType'
import { Spacer, CheckBox } from '../..'
import { Fragment, useState } from 'react'

const meta: Meta<typeof CheckBox> = {
  title: 'Components/Raw/CheckBox',
  component: CheckBox
}

export default meta

type Story = StoryObj<typeof CheckBox>

export const Main: Story = {
  render: () => {
    const [value, setValue] = useState(false)

    return (
      <>
        {enumToArray(ColorType).map((colorType, index) => (
          <Fragment key={index}>
            <CheckBox
              value={value}
              onChange={() => {
                setValue((_) => !_)
              }}
              colorType={colorType}
            />
            <Spacer />
            <CheckBox
              value={value}
              onChange={() => {
                setValue((_) => !_)
              }}
              colorType={colorType}
              label="label"
            />
            <Spacer />
            <CheckBox
              value={value}
              onChange={() => {
                setValue((_) => !_)
              }}
              colorType={colorType}
              label="label"
              labelLeft
            />
            <Spacer size={40} />
          </Fragment>
        ))}
      </>
    )
  }
}
