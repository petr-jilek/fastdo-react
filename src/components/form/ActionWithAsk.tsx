import { useState } from 'react'
import Spacer from '../general/Spacer'
import CenterModal from '../modals/CenterModal'
import Button from './Button'

export interface Props {
  actionElement?: React.ReactNode
  title?: string
  modalContent?: any
  modalText?: string
  yesButtonLabel?: string
  noButtonLabel?: string
  onAccepted?: () => Promise<void>
  onDenied?: () => void
}

const ActionWithAsk: React.FC<Props> = ({
  actionElement = <></>,
  title = '',
  modalContent = null,
  modalText = 'Opravdu chcete provést akci?',
  yesButtonLabel = 'Ano',
  noButtonLabel = 'Ne',
  onAccepted = async () => {
    await Promise.resolve()
  },
  onDenied = () => {}
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
      {actionElement && <div onClick={() => setShowModal(true)}>{actionElement}</div>}
      {showModal && (
        <CenterModal onShaderClick={handleDenied}>
          <>
            {title && <h3>{title}</h3>}
            <Spacer size={10} />
            {modalContent ? modalContent : <p>{modalText}</p>}
            <Spacer size={30} />
            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
              <Button label={yesButtonLabel} onClick={handleAccepted} loading={loading} />
              <Spacer size={20} horizontal />
              <Button label={noButtonLabel} onClick={handleDenied} outlined loading={loading} />
            </div>
          </>
        </CenterModal>
      )}
    </>
  )
}

export default ActionWithAsk
