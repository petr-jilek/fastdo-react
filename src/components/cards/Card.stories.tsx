import type { Meta, StoryObj } from '@storybook/react'
import { Spacer, Card } from '../..'
import { loremIpsum } from '../../common/consts'
import { enumToArray } from '../../utils/common'
import { ColorType } from '../../common/enums/colorType'

const meta: Meta<typeof Card> = {
  title: 'Components/Cards/Card',
  component: Card
}

export default meta

type Story = StoryObj<typeof Card>

export const Main: Story = {
  render: () => (
    <>
      <Card>
        <p>{loremIpsum}</p>
      </Card>
      <Spacer size={30} />
      {enumToArray(ColorType).map((colorType) => (
        <>
          <Card colorType={colorType}>
            <p>{loremIpsum}</p>
          </Card>
          <Spacer size={30} />
        </>
      ))}
    </>
  )
}
