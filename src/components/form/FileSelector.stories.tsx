import type { Meta, StoryObj } from '@storybook/react'
import FileSelector from './FileSelector'
import { enumToArray } from '../../utils/common'
import { ColorType, Spacer } from '../..'

const meta: Meta<typeof FileSelector> = {
  title: 'Components/Form/FileSelector',
  component: FileSelector
}

export default meta

type Story = StoryObj<typeof FileSelector>

export const Main: Story = {
  render: () => (
    <>
      {enumToArray(ColorType).map((colorType) => (
        <div key={colorType} style={{ display: 'flex', marginBottom: '10px' }}>
          <FileSelector colorType={colorType} label={colorType} />
          <Spacer horizontal />
          <FileSelector colorType={colorType} label={colorType} loading />
        </div>
      ))}
    </>
  )
}
