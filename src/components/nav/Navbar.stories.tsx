import type { Meta, StoryObj } from '@storybook/react'
import NavbarBase, { PositionType, ScrollHidingType } from './NavbarBase'
import PageLayout from '../layouts/PageLayout'
import { loremIpsum } from '../../common/consts'
import { enumToArray } from '../../utils/common'
import { useState } from 'react'
import Navbar from './Navbar'

const meta: Meta<typeof Navbar> = {
  title: 'Components/Nav/Navbar',
  component: Navbar
}

export default meta

type Story = StoryObj<typeof Navbar>

export const Main: Story = {
  render: () => {
    const A: React.FC = (props: any) => <a {...props}>{props.children}</a>

    return (
      <>
        <Navbar
          LinkElement={A}
          navbarBaseProps={{
            smallScreen: 500,
            marginTopOpen: 150,
            headerChildren: <h1 style={{ margin: '0' }}>Navbar</h1>
          }}
          navItems={[
            {
              label: 'Home',
              linkProps: {
                href: '/'
              }
            },
            {
              label: 'About',
              linkProps: {
                href: '/about'
              }
            },
            {
              label: 'Contact',
              linkProps: {
                href: '/contact'
              }
            }
          ]}
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
