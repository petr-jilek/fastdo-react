import type { Meta, StoryObj } from '@storybook/react'
import NavbarBase, { PositionType } from './NavbarBase'
import PageLayout from '../layouts/PageLayout'
import { loremIpsum } from '../../common/consts'
import { enumToArray } from '../../utils/common'

const meta: Meta<typeof NavbarBase> = {
  title: 'Components/Nav/NavbarBase',
  component: NavbarBase,
  argTypes: {
    positionType: {
      options: enumToArray(PositionType)
    }
  }
}

export default meta

type Story = StoryObj<typeof NavbarBase>

export const Main: Story = {
  render: (args) => (
    <>
      <NavbarBase
        positionType={args.positionType}
        smallScreen={500}
        headerChildren={
          <div>
            Super super long
            <br />
            long header header
          </div>
        }
        navChildren={
          <ul style={{ display: 'flex', listStyleType: 'none', padding: '0' }}>
            <li>Nav</li>
            <li>Nav</li>
            <li>Nav</li>
          </ul>
        }
        actionChrildren={<div>Action</div>}
      />
      <PageLayout>
        <p>{loremIpsum}</p>
        <p>{loremIpsum}</p>
        <p>{loremIpsum}</p>
        <p>{loremIpsum}</p>
        <p>{loremIpsum}</p>
      </PageLayout>
    </>
  )
}

Main.parameters = {
  layout: 'fullscreen'
}
