import { useState } from 'react'
import Spacer from '../general/Spacer'
import Button from './Button'
import CenterCardModal, { type Props as CenterCardModalProps } from '../modals/CenterCardModal'
import { type Props as ButtonProps } from './Button'

export interface Props {
  buttonSpacerSize?: number
  onAccepted?: () => Promise<void>
  onDenied?: () => void
  actionElement?: React.ReactNode
  children?: React.ReactNode
  centerCardModalProps?: CenterCardModalProps
  acceptButtonProps?: ButtonProps
  denyButtonProps?: ButtonProps
  styles?: StyleProps
}

export interface StyleProps {
  actionContainer?: React.CSSProperties
  buttonsContainer?: React.CSSProperties
}

const ActionWithAsk: React.FC<Props> = ({
  buttonSpacerSize = 20,
  onAccepted = async () => {
    await Promise.resolve()
  },
  onDenied = () => {},
  actionElement,
  children,
  centerCardModalProps = {},
  acceptButtonProps = { label: 'Yes' },
  denyButtonProps = { label: 'No', outlined: true },
  styles = {}
}: Props) => {
  const [showModal, setShowModal] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleAccepted = async (): Promise<void> => {
    setLoading(true)
    await onAccepted()
    setLoading(false)
    setShowModal(false)
  }

  const handleDenied = (): void => {
    onDenied()
    setShowModal(false)
  }

  return (
    <>
      {actionElement && (
        <div
          onClick={() => {
            setShowModal(true)
          }}
          style={{ cursor: 'pointer', ...styles.actionContainer }}
        >
          {actionElement}
        </div>
      )}
      {showModal && (
        <CenterCardModal {...centerCardModalProps} onCloseIconClick={handleDenied} onShaderClick={handleDenied}>
          {children}
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: '10px', ...styles.buttonsContainer }}>
            <Button {...acceptButtonProps} onClick={handleAccepted} loading={loading} />
            <Spacer size={buttonSpacerSize} horizontal />
            <Button {...denyButtonProps} onClick={handleDenied} outlined loading={loading} />
          </div>
        </CenterCardModal>
      )}
    </>
  )
}

export default ActionWithAsk
