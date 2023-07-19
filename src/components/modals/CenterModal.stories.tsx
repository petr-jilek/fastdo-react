import type { Meta, StoryObj } from '@storybook/react'
import CenterModal from './CenterModal'

const meta: Meta<typeof CenterModal> = {
  title: 'CenterModal',
  component: CenterModal
}

export default meta

type Story = StoryObj<typeof CenterModal>

export const Main: Story = {
  render: () => (
    <CenterModal>
      <p>sdf</p>
    </CenterModal>
  )
}
