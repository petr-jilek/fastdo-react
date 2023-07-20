import { useEffect, useState } from 'react'
import Spacer from '../general/Spacer'
import Button from './Button'
import CenterCardModal, { Props as CenterCardModalProps } from '../modals/CenterCardModal'
import { type Props as ButtonProps } from './Button'

export interface Props {
  showModalProp?: boolean
  actionElement?: React.ReactNode
  children?: React.ReactNode
  onAccepted?: () => Promise<void>
  onDenied?: () => void
  centerCardModalProps?: CenterCardModalProps
  acceptButtonProps?: ButtonProps
  denyButtonProps?: ButtonProps
  styles?: StyleProps
}

export interface StyleProps {
  headerContainer?: React.CSSProperties
}

const ActionWithAsk: React.FC<Props> = ({
  showModalProp = false,
  actionElement,
  children,
  onAccepted = async () => {
    await Promise.resolve()
  },
  onDenied = () => {},
  centerCardModalProps = {},
  acceptButtonProps = { label: 'Yes' },
  denyButtonProps = { label: 'No', outlined: true },
  styles = {}
}: Props) => {
  const [showModal, setShowModal] = useState(false)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setShowModal(showModalProp)
  }, [showModalProp])

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
        >
          {actionElement}
        </div>
      )}
      {showModal && (
        <CenterCardModal
          onShaderClick={handleDenied}
          modalWrapperProps={{ onCloseIconClick: () => console.log('sfd') }}
          {...centerCardModalProps}
        >
          {children}
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: '10px', ...styles.headerContainer }}>
            <Button {...acceptButtonProps} onClick={handleAccepted} loading={loading} />
            <Spacer size={20} horizontal />
            <Button {...denyButtonProps} onClick={handleDenied} outlined loading={loading} />
          </div>
        </CenterCardModal>
      )}
    </>
  )
}

export default ActionWithAsk
