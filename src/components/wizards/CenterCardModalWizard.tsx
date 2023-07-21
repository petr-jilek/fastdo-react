import { useMemo } from 'react'
import { Button, Spacer } from '../..'
import CenterCardModal from '../modals/CenterCardModal'
import VerticalStepper, { type StepperRawItem, getStepperItems } from './VerticalStepper'
import { type Props as ButtonProps } from '../form/Button'

export interface Props {
  items: WizardItem[]
  focuedId: string
  doneId: string
  onItemClick?: (focusedId: string) => void
  onBackClick?: (focusedId: string) => void
  onNextClick?: (focuedId: string) => void
  onFinishClick?: () => void
  componentsProps?: ComponentsProps
}

export interface WizardItem extends StepperRawItem {
  content: React.ReactNode
}

export interface ComponentsProps {
  backButton?: ButtonProps
  nextButton?: ButtonProps
  finishButton?: ButtonProps
}

const CenterCardModalWizard: React.FC<Props> = ({
  items,
  focuedId,
  doneId,
  onItemClick = () => {},
  onBackClick = () => {},
  onNextClick = () => {},
  onFinishClick = () => {},
  componentsProps
}: Props) => {
  const focusedIndex = useMemo(() => items.findIndex((item) => item.id === focuedId), [focuedId, items])

  const wizardContent = useMemo(() => {
    const item = items.find((item) => item.id === focuedId)
    if (!item) return <></>
    return item.content
  }, [focuedId, items])

  const handleBackClick = (): void => {
    if (focusedIndex === 0) return
    const item = items[focusedIndex - 1]
    onBackClick(item.id)
  }

  const handleNextClick = (): void => {
    if (focusedIndex === items.length - 1) return
    const item = items[focusedIndex + 1]
    onNextClick(item.id)
  }

  return (
    <CenterCardModal
      styles={{
        card: {
          card: {
            padding: '6px'
          }
        }
      }}
    >
      <div
        style={{
          width: '80vw',
          height: '90vh',
          display: 'flex'
        }}
      >
        <div
          style={{
            width: '30%',
            overflow: 'auto',
            backgroundColor: 'var(--fd-gray3-color)',
            borderTopLeftRadius: 'var(--fd-border-radius-1)',
            padding: 'var(--fd-padding-4)'
          }}
        >
          <VerticalStepper items={getStepperItems(items, focuedId, doneId)} onItemClick={onItemClick} />
        </div>
        <div style={{ width: '70%', padding: '6px 6px 6px 12px', overflow: 'auto' }}>
          {wizardContent}
          <Spacer />
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between'
            }}
          >
            {focusedIndex !== 0 ? (
              <Button label="Back" outlined onClick={handleBackClick} {...componentsProps?.backButton} />
            ) : (
              <div></div>
            )}
            {focusedIndex !== items.length - 1 ? (
              <Button label="Next" onClick={handleNextClick} {...componentsProps?.nextButton} />
            ) : (
              <Button label="Finish" onClick={onFinishClick} {...componentsProps?.finishButton} />
            )}
          </div>
        </div>
      </div>
    </CenterCardModal>
  )
}

export default CenterCardModalWizard
