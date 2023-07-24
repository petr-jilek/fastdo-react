import type { Meta, StoryObj } from '@storybook/react'
import NavbarBase, { PositionType, ScrollHidingType } from './NavbarBase'
import PageLayout from '../layouts/PageLayout'
import { loremIpsum } from '../../common/consts'
import { enumToArray } from '../../utils/common'
import { useState } from 'react'

const meta: Meta<typeof NavbarBase> = {
  title: 'Components/Nav/NavbarBase',
  component: NavbarBase,
  argTypes: {
    positionType: {
      options: enumToArray(PositionType)
    },
    scrollHidingType: {
      options: enumToArray(ScrollHidingType)
    }
  }
}

export default meta

type Story = StoryObj<typeof NavbarBase>

export const Main: Story = {
  render: (args) => {
    const [open, setOpen] = useState(false)

    return (
      <>
        <NavbarBase
          open={open}
          onOpenIconClick={() => {
            setOpen(true)
          }}
          onCloseIconClick={() => {
            setOpen(false)
          }}
          onOutsideClick={() => {
            setOpen(false)
          }}
          positionType={args.positionType}
          scrollHidingType={args.scrollHidingType}
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
}

Main.parameters = {
  layout: 'fullscreen'
}
