import type { Meta, StoryObj } from '@storybook/react'
import NavbarBase from './NavbarBase'
import PageLayout from '../layouts/PageLayout'
import { loremIpsum } from '../../common/consts'

const meta: Meta<typeof NavbarBase> = {
  title: 'Components/Nav/NavbarBase',
  component: NavbarBase
}

export default meta

type Story = StoryObj<typeof NavbarBase>

export const Main: Story = {
  render: () => (
    <>
      <NavbarBase
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
