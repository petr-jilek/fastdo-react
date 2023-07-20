import type { Meta, StoryObj } from '@storybook/react'
import CenterCardModal from './CenterCardModal'
import { loremIpsum } from '../../common/consts'
import Spacer from '../general/Spacer'
import { ColorType } from '../../common/enums/colorType'
import { enumToArray } from '../../utils/common'
import ModalWrapper from '../wrappers/ModalWrapper'

const meta: Meta<typeof CenterCardModal> = {
  title: 'Components/Modals/CenterCardModal',
  component: CenterCardModal,
  argTypes: {
    colorType: {
      control: {
        type: 'select',
        options: enumToArray(ColorType)
      }
    }
  }
}

export default meta

type Story = StoryObj<typeof CenterCardModal>

export const Main: Story = {
  render: (args) => (
    <>
      <CenterCardModal colorType={args.colorType}>
        <p>{loremIpsum}</p>
      </CenterCardModal>
      <Spacer size={5000} />
    </>
  )
}

export const MainWithWrapper: Story = {
  render: (args) => (
    <>
      <CenterCardModal colorType={args.colorType}>
        <ModalWrapper title="Title">
          <p>{loremIpsum}</p>
        </ModalWrapper>
      </CenterCardModal>
      <Spacer size={5000} />
    </>
  )
}
