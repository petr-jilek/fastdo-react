import { ColorType } from '../..'
import { loremIpsum } from '../../common/consts'
import CenterCardModal from '../modals/CenterCardModal'
import VerticalStepper, { StepperItem, StepperRawItem, getStepperItems } from './VerticalStepper'

export interface Props {
  items: WizardItem[]
  focuedId: string
  doneId: string
  colorType?: ColorType
}

export interface WizardItem extends StepperRawItem {
  content: React.ReactNode
}

const CenterCardModalWizard: React.FC<Props> = ({ items, focuedId, doneId, colorType }: Props) => {
  return (
    <CenterCardModal colorType={colorType}>
      <div
        style={{
          display: 'flex'
        }}
      >
        <div
          style={{
            width: '30vw'
          }}
        >
          <VerticalStepper items={getStepperItems(items, focuedId)} />
        </div>
        <div style={{ width: '70%' }}></div>
      </div>
    </CenterCardModal>
  )
}

export default CenterCardModalWizard
